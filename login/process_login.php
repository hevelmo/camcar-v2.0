<?php

include '../incorporate/db_connect.php';
include '../incorporate/functions.php';

sec_session_start(); // Our custom secure way of starting a PHP session.
//var_dump($_POST);

if (isset($_POST['email'], $_POST['p'])) {
    $email = $_POST['email'];
    $password = $_POST['p']; // The hashed password.
    $user_browser = $_SERVER['HTTP_USER_AGENT'];
    if (login($email, $password, $mysqli) == true) {
        // Login success
        header('Location: welcome/');
        //header('Location: welcome/');
    } else {
        // Login failed
        header('Location: index.php?error=IncorrectLogin');
    }
} else {
    // The correct POST variables were not sent to this page.
    //echo 'Invalid Request';
}
