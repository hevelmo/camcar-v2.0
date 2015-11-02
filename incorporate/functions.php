<?php
/*
 * Copyright (C) 2013 Virbac México
 * Waxtotem, 2014.09.04
 *
 */


include_once 'cam_con_ini.php';

function getConnection() {
    $dbhost = HOST;
    $dbname = DATABASE;
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", USER, PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

function sec_session_start() {
    $session_name = 'CAMCRM';   // Set a custom session name
    $secure = SECURE;

    // This stops JavaScript being able to access the session id.
    $httponly = true;

    // Forces sessions to only use cookies.
    if(ini_set('session.use_only_cookies', 1) === FALSE) {
        header("Location: ../error.php?err=Could not initiate a safe session (ini_set)");
        exit();
    }

    // Gets current cookies params.
    $cookieParams = session_get_cookie_params();
    session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"], $cookieParams["domain"], $secure, $httponly);

    // Sets the session name to the one set above.
    session_name($session_name);

    session_start();            // Start the PHP session
    session_regenerate_id();    // regenerated the session, delete the old one.

}

function login($param, $password, $mysqli) {
    // Using prepared statements means that SQL injection is not possible.
    if ($stmt = $mysqli->prepare(
            "SELECT usr.USR_Id,
                    -- usr.USR_Username,
                    usr.USR_Mail,
                    usr.USR_AGN_Id,
                    COALESCE(agn.AGN_Nombre, 'Administrador') AGN_Nombre,
                    COALESCE(agn.AGN_Logo1, 'admin.png') AGN_Logo1,
                    COALESCE(agn.AGN_Logo2, 'admin.png') AGN_Logo2,
                    usr.USR_Tipo,
                    usr.USR_Password,
                    usr.USR_Salt,
                    COALESCE(agn.AGN_Header, '') AGN_Header,
                    USR_AdminAccess
             FROM camUsuarios usr
             LEFT JOIN camAgencias agn
             ON usr.USR_AGN_Id = agn.AGN_Id
             WHERE USR_Mail = ?
             -- OR USR_Username = ?
             AND USR_Control = ?
             LIMIT 1"
        )
    ) {
        $usercontrol = 1;
        //$stmt->bind_param('sss', $param, $param, $usercontrol);  // Bind "$param" to parameters.
        $stmt->bind_param('ss', $param, $usercontrol);  // Bind "$param" to parameters.
        $stmt->execute();    // Execute the prepared query.
        $stmt->store_result();

        // get variables from result.
        $stmt->bind_result(
                $user_id,
                //$username,
                $email,
                $agnId,
                $agency,
                $agn_logo1,
                $agn_logo2,
                $type,
                $db_password,
                $user_salt,
                $agn_header,
                $admin_access
            );
        $stmt->fetch();

        if ($stmt->num_rows == 1) {

            // If the user exists we check if the account is locked
            // from too many login attempts

            if (checkbrute($user_id, $mysqli) == true) {
                // Account is locked
                // Send an email to user saying their account is locked
                return false;
            } else {
                // hash the password with the unique salt.
                $password_sha = $password;
                $password_final = hash('sha512', $password_sha . $user_salt);

                // Check if the password in the database matches
                // the password the user submitted.
                if ($db_password == $password_final) {
                    // Password is correct!
                    // Get the user-agent string of the user.
                    $user_browser = $_SERVER['HTTP_USER_AGENT'];
                    // XSS protection as we might print this value
                    $user_id = preg_replace("/[^0-9]+/", "", $user_id);
                    $_SESSION['user_id'] = $user_id;

                    // XSS protection as we might print this value
                    //$username = preg_replace("/[^a-zA-Z0-9_\-]+/", "", $username);
                    //$_SESSION['username'] = $username;

                    $_SESSION['email'] = $email;

                    $_SESSION['usr_agn_id'] = $agnId;

                    //$agency = preg_replace("^[a-zA-ZñÑáéíóúÁÉÍÓÚ\ ]", "", $agency);

                    $agency = utf8_encode($agency);
                    $_SESSION['usr_agn_nombre'] = $agency;
                    $_SESSION['usr_agn_logo1'] = $agn_logo1;
                    $_SESSION['usr_agn_logo2'] = $agn_logo2;
                    $_SESSION['usr_agn_header'] = $agn_header;
                    $_SESSION['usr_type'] = $type;
                    $_SESSION['usr_adm_access'] = $admin_access;

                    $_SESSION['login_string'] = hash('sha512', $password_final . $user_browser);
                    // Login successful.
                    return true;
                } else {
                    // Password is not correct
                    // We record this attempt in the database
                    //$now = time();
                    //$mysqli->query("INSERT INTO m1ton_login_attempts(user_id, time)
                                //VALUES ('$user_id', '$now')");
                    //return false;
                }
            }
        } else {
            // No user exists.
            return false;
        }
    } else {
        return false;
    }
}

function checkbrute($user_id, $mysqli) {
    // Get timestamp of current time
    $now = time();

    // All login attempts are counted from the past 2 hours.
    $valid_attempts = $now - (2 * 60 * 60);

    /*
    if($stmt = $mysqli->prepare("SELECT time
                                  FROM cmoss_login_attempts
                                  WHERE user_id = ? AND time > '$valid_attempts'")) {
        $stmt->bind_param('i', $user_id);

        // Execute the prepared query.
        $stmt->execute();
        $stmt->store_result();

        // If there have been more than 5 failed logins
        if($stmt->num_rows > 5) {
            return true;
        } else {
            return false;
        }
    } else {
        // Could not create a prepared statement
        header("Location: ../error.php?err=Database error: cannot prepare statement");
        exit();
    }*/
    return false;
}

function login_check($mysqli) {
    if (isset(
            $_SESSION['user_id'],
            //$_SESSION['username'],
            $_SESSION['email'],
            $_SESSION['usr_agn_id'],
            $_SESSION['usr_agn_nombre'],
            //$_SESSION['usr_agn_logo1'],
            //$_SESSION['usr_agn_logo2'],
            $_SESSION['usr_type'],
            $_SESSION['login_string'],
            $_SESSION['usr_adm_access']
        )
    ) {
        $user_id = $_SESSION['user_id'];
        $login_string = $_SESSION['login_string'];
        //$username = $_SESSION['username'];
        $email = $_SESSION['email'];
        $agnId = $_SESSION['usr_agn_id'];
        $type = $_SESSION['usr_type'];
        $agency = $_SESSION['usr_agn_nombre'];
        $agn_logo1 = $_SESSION['usr_agn_logo1'];
        $agn_logo2 = $_SESSION['usr_agn_logo2'];
        $agn_header = $_SESSION['usr_agn_header'];
        $admin_access = $_SESSION['usr_adm_access'];

        // Get the user-agent string of the user.
        $user_browser = $_SERVER['HTTP_USER_AGENT'];

        if ($stmt = $mysqli->prepare("SELECT USR_Password
                                      FROM camUsuarios
                                      WHERE USR_Id = ?
                                      LIMIT 1")) {

            // Bind "$user_id" to parameter.
            $stmt->bind_param('i', $user_id);
            $stmt->execute();   // Execute the prepared query.
            $stmt->store_result();

            if ($stmt->num_rows == 1) {

                // If the user exists get variables from result.
                $stmt->bind_result($password);
                $stmt->fetch();
                $login_check = hash('sha512', $password . $user_browser);

                if ($login_check == $login_string) {
                    // Logged In!!!!
                    return true;
                } else {
                    // Not logged in
                    return false;
                }
            } else {
                // Not logged in
                return false;
            }
        } else {
            // Could not prepare statement
            header("Location: ../error.php?err=ProblemasenLaObra");
            exit();
        }
    } else {
        if(isset($_SESSION['user_control'])) {
            return true;
        } else {
          return false;
        }
        // Not logged in
    }
}

function admin_access_check($mysqli) {
    $admin_access = isset($_SESSION['usr_adm_access']) ? $_SESSION['usr_adm_access'] : 0;
    $admin_access = intval($admin_access);
    return ($admin_access > 0);
}

function esc_url($url) {

    if('' == $url) {
        return $url;
    }

    $url = preg_replace('|[^a-z0-9-~+_.?#=!&;,/:%@$\|*\'()\\x80-\\xff]|i', '', $url);

    $strip = array('%0d', '%0a', '%0D', '%0A');
    $url = (string) $url;

    $count = 1;
    while ($count) {
        $url = str_replace($strip, '', $url, $count);
    }

    $url = str_replace(';//', '://', $url);

    $url = htmlentities($url);

    $url = str_replace('&amp;', '&#038;', $url);
    $url = str_replace("'", '&#039;', $url);

    if($url[0] !== '/') {
        // We're only interested in relative links from $_SERVER['PHP_SELF']
        return '';
    } else {
        return $url;
    }
}

function own_array_column($array, $column) {
    $myFunction = function($interlnalArray, $internalColumn) {
        $internalValues = array();
        foreach($interlnalArray as $current) {
            $internalValues[] = $current[$internalColumn];
        }
        $internalValues = array_values($internalValues);
        return $internalValues;
    };
    $version = phpversion();
    $elements = explode('.', $version);
    $first = (integer)($elements[0]);
    if($first === 5) {
        $count = count($elements);
        switch($count) {
            case 1:
                $values = $myFunction($array, $column);
                break;
            case 2:
                $second = (integer)($elements[1]);
                if($second === 5) {
                    $values = $myFunction($array, $column);
                } else if ($second > 5) {
                    $values = array_column($array, $column);
                } else {
                    $values = $myFunction($array, $column);  
                }
                break;
            case 3:
            default:
                $second = (integer)($elements[1]);
                $third = (integer)($elements[2]);
                if($second === 5) {
                    if($third >= 0) {
                        $values = array_column($array, $column);
                    } else {
                        $values = $myFunction($array, $column);  
                    }
                } else if ($second > 5) {
                    $values = array_column($array, $column);
                } else {
                    $values = $myFunction($array, $column);  
                }

        }
    } else if ($first > 5) {
        $values = array_column($array, $column);
    } else {
        $values = $myFunction($array, $column);
    }
    $values = array_values($values);
    return $values;
}

/*
function update_users_from_webservice() {
}
*/