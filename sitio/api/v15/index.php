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
 * [Initial V 15.0]
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
    // MAPA
    $app->get('/get/mapa/seminuevo', /*'mw1',*/ 'getMapa');
    // MAPA BY ID
    $app->get('/get/mapa/seminuevo/:senId', /*'mw1',*/ 'getMapaById');
    // AGENCIES NEWS
    $app->get('/get/agencia/nuevos', /*'mw1',*/ 'getAgenciesNews');
    // AGENCIES NEWS BY ID
    $app->get('/get/agencia/nuevos/:agpid', /*'mw1',*/ 'getAgenciesNewsById');
    // AGENCIES NEWS BY MAP
    $app->get('/get/agencia/nuevos/mapas/:agn_id', /*'mw1',*/ 'getAgenciesNewsByMap');
    // AGENCIES NEWS BY AGENCIE
    $app->get('/get/agencia/nuevos/:agn_nombre/:agn_id', /*'mw1',*/ 'getAgenciesNewsByAgencie');
    // PRINCIPAL AGENCIE NEWS
    //$app->get('/get/agencias/nuevos', /*'mw1',*/ 'getAgenciesNewsPrincipales');
    // PRINCIPAL AGENCIE NEWS BY AGENCIE
    //$app->get('/get/agencias/nuevos/:nombre', /*'mw1',*/ 'getAgenciesNewsPrincipalesByAgencia');
    // LOGOS AGENCIES NEWS PRINCIPAL
    //$app->get('/get/logos/agencia/nuevos', /*'mw1',*/ 'getLogosAgenciesNews');

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
    // STRUCTURE MAP JSON
    function getMapaJSON($sql, $senId) {
        $structure = array(
            'sen_id' => 'SEN_Id',
            'agn_nombre' => 'AGN_Nombre',
            'agn_direccion' => 'AGN_Dirección',
            'agn_folder' => 'AGN_Folder',
            'agn_logo1' => 'AGN_Logo1',
            'agn_logo2' => 'AGN_Logo2',
            'agn_latitud' => 'AGN_MLatitud',
            'agn_longitud' => 'AGN_MLongitud',
            'map_url' => 'AGN_MUrl'
        );
        $params = array();
        // PARAMS MAP BY ID
        ($senId !== '') ? $params['senId'] = $senId : $params = $params;
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    // MAP
    function getMapa() {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camSeminuevos
                ) sen
                INNER JOIN (
                    SELECT *
                    FROM camAgencias
                    WHERE AGN_Tipo = 1
                    AND AGN_Status = 1
                    AND AGN_IsMap_Agencia = 1
                ) agn
                GROUP BY AGN_Id";
        getMapaJSON($sql, '');
    }
    // MAP BY ID
    function getMapaById($senId) {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camSeminuevos
                    WHERE SEN_Status = 1
                ) sen
                INNER JOIN (
                    SELECT *
                    FROM camAgencias
                    WHERE AGN_Tipo = 0
                ) agn
                ON sen.SEN_AGN_Id = agn.AGN_Id
                WHERE SEN_Id = :senId";
        getMapaJSON($sql, $senId);
    }
    // AGENCIES NEWS
    function getAgenciesNewsJSON($sql, $agpid) {
        $structure = array(
            'agnid' => 'AGN_Id',
            'agpagencia' => 'AGP_Agencia',
            'agpshort' => 'AGP_Short',
            'agnnombre' => 'AGN_Nombre',
            'agnurl' => 'AGN_Url',
            'agnsmall' => 'AGN_Small',
            'agnlatitud' => 'AGN_MLatitud',
            'agnlongitud' => 'AGN_MLongitud',
            'agngmapurl' => 'AGN_MUrl'
        );
        $params = array();
        ($agpid !== '') ? $params['agpid'] = $agpid : $params = $params;
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    function getAgenciesNewsByMapsJSON($sql, $agn_id) {
        $structure = array(
            'agnid' => 'AGN_Id',
            'agnnombre' => 'AGN_Nombre',
            'agndireccion' => 'AGN_Dirección',
            'agnfolder' => 'AGN_Folder',
            'logo' => array(
                'agnlogo1' => 'AGN_Logo1',
                'agnlogo2' => 'AGN_Logo2'
            ),
            'agnlatitud' => 'AGN_MLatitud',
            'agnlongitud' => 'AGN_MLongitud'
        );
        $params = array();
        ($agn_id !== '') ? $params['agn_id'] = $agn_id : $params = $params;
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    function getAgenciesNewsByAgencieJSON($sql, $agn_nombre, $agn_id) {
        $structure = array(
            'agnid' => 'AGN_Id',
            'agpagencia' => 'AGP_Agencia',
            'agpshort' => 'AGP_Short',
            'agnnombre' => 'AGN_Nombre',
            'agndireccion' => 'AGN_Dirección',
            'telefonos' => array(
                'ventas' => array(
                    'agntelefonoventaslinea1' => 'TEL_Telefono_Ventas_linea1',
                    'agntelefonoventaslinea2' => 'TEL_Telefono_Ventas_linea2',
                    'agncallventaslinea1' => 'TEL_Call_Ventas_linea1',
                    'agncallventaslinea2' => 'TEL_Call_Ventas_linea2'
                ),
                'servicios' => array(
                    'agntelefonoserviciolinea1' => 'TEL_Telefono_Servicio_linea1',
                    'agntelefonoserviciolinea2' => 'TEL_Telefono_Servicio_linea2',
                    'agncallserviciolinea1' => 'TEL_Call_Servicio_linea1',
                    'agncallserviciolinea2' => 'TEL_Call_Servicio_linea2'
                )
            ),
            'agnurl' => 'AGN_Url',
            'horarios' => array(
                'ventas' => array(
                    'agnhrventas' => 'HRS_HVentas'
                ),
                'servicios' => array(
                    'agnhrservicio' => 'HRS_HServicio'
                ),
                'refacciones' => array(
                    'agnhrrefaccion' => 'HRS_HRefacciones'
                )
            ),
            'agnfolder' => 'AGN_Folder',
            'logotipos' => array(
                'agnlogo1' => 'AGN_Logo1',
                'agnlogo2' => 'AGN_Logo2'
            ),
            'agnfachada' => 'AGN_Fachada',
            'agnsmall' => 'AGN_Small',
            'sociales' => array(
                'sitio_web' => array(
                    'agnwebsite' => 'SOC_WebSite'
                ),
                'facebook' => array(
                    'agntitle_facebook_cta1' => 'SOC_Facebok_Nombre_Cta1',
                    'agnfacebookcta1' => 'SOC_Facebook_Cta1',
                    'agntitle_facebook_cta2' => 'SOC_Facebok_Nombre_Cta2',
                    'agnfacebookcta2' => 'SOC_Facebook_Cta2'
                ),
                'twitter' => array(
                    'agntitle_twitter' => 'SOC_Nombre_Twitter',
                    'agntwitter' => 'SOC_Twitter'
                )
            ),
            'mapas' => array(
                'agnlatitud' => 'AGN_MLatitud',
                'agnlongitud' => 'AGN_MLongitud',
                'agngmapurl' => 'AGN_MUrl'
            )
        );
        $params = array();
        ($agn_nombre !== '') ? $params['agn_nombre'] = $agn_nombre : $params = $params;
        ($agn_id !== '') ? $params['agn_id'] = $agn_id : $params = $params;
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    function getAgenciesNews() {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camAgencias
                    WHERE AGN_Tipo = 1
                ) agn
                INNER JOIN camAgenciasPrincipales agp
                ON agn.AGN_AGP_Id = agp.AGP_Id
                ";

        getAgenciesNewsJSON($sql, '');
    }
    function getAgenciesNewsById($agpid) {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camAgencias
                    WHERE AGN_Tipo = 1
                    AND AGN_AGP_Id = :agpid
                ) agn
                INNER JOIN camAgenciasPrincipales agp
                ON agn.AGN_AGP_Id = agp.AGP_Id
                ";

        getAgenciesNewsJSON($sql, $agpid);
    }
    function getAgenciesNewsByMap($agn_id) {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camAgencias
                    WHERE AGN_Tipo = 1
                ) agn
                WHERE AGN_Id = :agn_id
                ";
        getAgenciesNewsByMapsJSON($sql, $agn_id);
    }
    // AGENCIES NEWS BY AGENCIES
    function getAgenciesNewsByAgencie($agn_nombre, $agn_id) {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camAgencias
                    WHERE AGN_Tipo = 1
                ) agn
                INNER JOIN camTelefonos tel
                ON agn.AGN_Id = tel.TEL_AGN_Id
                INNER JOIN camHorarios hrs
                ON agn.AGN_Id = hrs.HRS_AGN_Id
                INNER JOIN camSociales soc
                ON agn.AGN_Id = soc.SOC_AGN_Id
                INNER JOIN camAgenciasPrincipales agp
                ON agn.AGN_AGP_Id = agp.AGP_Id
                WHERE AGN_Id = :agn_id
                AND AGN_Url = :agn_nombre
                ORDER BY AGN_Id";
        getAgenciesNewsByAgencieJSON($sql, $agn_nombre, $agn_id);
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
