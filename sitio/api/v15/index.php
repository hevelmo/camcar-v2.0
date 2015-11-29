 <?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include_once '../../../incorporate/db_connect.php';
include_once '../../../incorporate/functions.php';
include_once '../../../incorporate/queryintojson.php';
include_once '../../../incorporate/json-file-decode.class.php';
include_once '../Mandrill.php';

date_default_timezone_set('America/Mexico_City');
setlocale(LC_MONETARY, 'en_US');

/**
 *
 * [Initial V 14.0]
 *
**/

require '../Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(array(
    'mode' => 'development',
    'cookies.httponly' => true
));

// Only invoked if mode is "production"
$app->configureMode('production', function () use ($app) {
    $app->config(array(
        'log.enable' => true,
        'debug' => false
    ));
});

// Only invoked if mode is "development"
$app->configureMode('development', function () use ($app) {
    $app->config(array(
        'log.enable' => false,
        'debug' => true
    ));
});

/**
 * [Routes Deep V 15.0]
**/
// POST route
    
// INSERT
// UPDATE
// GET route

// SELECT
    // HOME SECTION OUR BRANDS
    $app->get('/get/agencia/nuevos/marcas/logotipos', /*'mw1',*/ 'getBrandsLogos');
    // HOME SECTION GROUP COUNTER
    $app->get('/get/grupo/camcar', /*'mw1',*/ 'getGroupCounter');
// DELETE
//$app->get('/del/table/:idTable', /*'mw1',*/ 'delTable');
$app->run();

//Functions
/*
  ----------------------------------------------------------------------------
  General Helper Methods
  ----------------------------------------------------------------------------
*/
    function requestBody() {
        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        return json_decode($request->getBody());
    }
    function mw1() {
        $app = \Slim\Slim::getInstance();
        $db = getConnection();
        if (login_check($db) == true) {
            return true;
        } else {
            $app->halt(401, 'Token Requerido');
        }
    }
/*
  ----------------------------------------------------------------------------
  General Post Methods
  ----------------------------------------------------------------------------
*/
    // INSERT
        function addTable() {
            $property = requestBody();
            $sql = "INSERT INTO camTable(TAB_Field)
                    VALUES(:field)";
            $structure = array();
            $params = array(
                'field' => trim($property->field),
            );
            echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 1, PDO::FETCH_ASSOC);
        }
    // UPDATE
        function setTable($idTable) {
            $property = requestBody();
            $sql = "UPDATE camTable
                    SET TAB_Field = :field
                    WHERE TAB_Id = :tabId";
            $structure = array();
            $params = array(
                'tabId' => $idTable,
                'field' => trim($property->field)
            );
            echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 2, PDO::FETCH_ASSOC);
        }
/*
  ----------------------------------------------------------------------------
  General Get Methods
  ----------------------------------------------------------------------------
*/
    // SELECT
    // GET HOME SECTION OUR BRANDS JSON
    function getBrandsLogosJSON ($sql) {
        $structure = array(
            'agn_id' => 'AGN_Id',
            'agn_index' => 'BRD_Index',
            'agn_ruta' => 'AGN_Url',
            'agn_nombre' => 'AGN_Nombre',
            'agp_agencia' => 'AGP_Agencia',
            'agp_short' => 'AGP_Short',
            'tipo' => 'AGN_Tipo',
            'logoId' => 'BRD_Id',
            'logoIndex' => 'BRD_Index',
            'agnPrincipal' => 'BRD_AGP_Id',
            'logo' => 'BRD_Logo'
        );
        $params = array();
        $result_agencie = restructureQuery($structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
        for ($idx=0; $idx < count($result_agencie); $idx++) {
            $agn_type = $result_agencie[$idx]['tipo'];
            $result_agencie[$idx]['action-seminuevo'] = ($agn_type != 0 ) ? '' : 'seminuevo';
            $result_agencie[$idx]['action-nuevo'] = ($agn_type != 1 ) ? '' : 'nuevo';
            $result_agencie[$idx]['action-taller'] = ($agn_type != 2 ) ? '' : 'taller';
            $result_agencie[$idx]['action-rentas'] = ($agn_type != 3 ) ? '' : 'rentas';
        }
        $json = changeArrayIntoJSON('campa', $result_agencie);
        echo $json;
        //echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    // GET HOME SECTION OUR BRANDS
    function getBrandsLogos() {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camBrandsLogos
                    WHERE BRD_Status = 1
                ) brd
                LEFT JOIN (
                    SELECT *
                    FROM camAgencias
                ) agn
                ON agn.AGN_AGP_Id = brd.BRD_AGP_Id
                LEFT JOIN (
                    SELECT *
                    FROM camAgenciasPrincipales
                ) agp
                ON agn.AGN_AGP_Id = agp.AGP_Id
                GROUP BY BRD_Id
                ORDER BY BRD_Index
                ";
        getBrandsLogosJSON($sql);
    }
    // GET HOME SECTION GROUP COUNTER JSON
    function getGroupCounterJSON ($sql) {
        $structure = array(
            'grupo_marcas' => 'GRU_Marcas',
            'grupo_agencias' => 'GRU_Agencias',
            'grupo_ciudades' => 'GRU_Ciudades',
            'grupo_profesionales' => 'GRU_Profesionales'
        );
        $params = array();
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    // GET HOME SECTION GROUP COUNTER
    function getGroupCounter () {
        $sql = "SELECT *
                FROM camGrupoCamcar
                ";
        getGroupCounterJSON($sql);
    }
    // DELETE
    function delTable($idTable) {
        $sql = "DELETE FROM camTable WHERE TAB_Id = :tabId";
        $structure = array();
        $params = array(
            'tabId' => $idTable
        );
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 3, PDO::FETCH_ASSOC);
    }
/*
  ----------------------------------------------------------------------------
  General Get Mandril
  ----------------------------------------------------------------------------
*/
