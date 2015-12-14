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
    // HOME SECTION BANNERS
    $app->get('/get/banners', /*'mw1',*/ 'getBanners');
    // HOME SECTION OUR BRANDS
    $app->get('/get/agencia/nuevos/marcas/logotipos', /*'mw1',*/ 'getBrandsLogos');
    // HOME SECTION GROUP COUNTER
    $app->get('/get/grupo/camcar', /*'mw1',*/ 'getGroupCounter');
    // MAPA
    $app->get('/get/mapa/seminuevo', /*'mw1',*/ 'getMapa');
    // MAPA BY ID
    $app->get('/get/mapa/seminuevo/:senId', /*'mw1',*/ 'getMapaById');

    // AGENCIES NEWS
    // HOME -> BRANDS AGENCIES
    $app->get('/get/agencia/nuevos/marcas/logotipos', /*'mw1',*/ 'getBrandsLogos');
    // AGENCIES NEWS -> PRINCIPAL AGENCIE
    $app->get('/get/agencia/nuevos/principal/:agn_name_agencia', /*'mw1',*/ 'getAgenciesNewsByTypeAgencie');
    // AGENCIES NEWS
    $app->get('/get/agencia/nuevos', /*'mw1',*/ 'getAgenciesNews');
    $app->get('/get/agencia/nuevos/:agpid', /*'mw1',*/ 'getAgenciesNewsById');
    $app->get('/get/agencia/nuevos/mapas/:agn_id', /*'mw1',*/ 'getAgenciesNewsByMap');
    $app->get('/get/agencia/nuevos/:agn_nombre/:agn_id', /*'mw1',*/ 'getAgenciesNewsByAgencie');
    // PRINCIPAL AGENCIE NEWS
    $app->get('/get/agencias/nuevos', /*'mw1',*/ 'getAgenciesNewsPrincipales');
    $app->get('/get/agencias/nuevos/:nombre', /*'mw1',*/ 'getAgenciesNewsPrincipalesByAgencia');
    // LOGOS AGENCIES NEWS PRINCIPAL
    $app->get('/get/logos/agencia/nuevos', /*'mw1',*/ 'getLogosAgenciesNews');

    // SECTION WORKSHOP
    $app->get('/get/talleres', /*'mw1',*/ 'getWorkshop');
    $app->get('/get/talleres/logos', /*'mw1',*/ 'getWorkshopBrands');

    // SECTION RENTAL
    $app->get('/get/rentas/:agnRental', /*'mw1',*/ 'getRental');

    // SECTION BLOG
    $app->get('/get/blog', /*'mw1',*/ 'getBlog');
    // SECTION BLOG BY NEWS
    $app->get('/get/blog/noticia/:blogAgenciaShort/:blogTituloShort/:blogId', /*'mw1',*/ 'getBlogByPost');

    // ABOUT US CONTAC FORM MAIN
    $app->post('/contacto', /*'mw1',*/ 'post_form_contact_main');

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
    // GET HOME SECTION BANNERS JSON
    function getBannersJSON ($sql) {
        $structure = array(
            'banId' => 'BAN_Id',
            'agnNombre' => 'BAN_AGN_Nombre',
            'banSrc650' => 'BAN_SRC650x277',
            'banSrc900' => 'BAN_SRC900x586',
            'banSrc1600' => 'BAN_SRC1600x900',
            'banTitle' => 'BAN_Title',
            'headingTextSub' => array(
                'subtitle01' => 'BAN_Subtitle01',
                'subtitle02' => 'BAN_Subtitle02',
                'subtitle03' => 'BAN_Subtitle03',
                'subtitle04' => 'BAN_Subtitle04',
            ),
            'banner_tipo' => 'BAN_Tipo',
            'primaryLinkurl' => 'BAN_PrimaryLinkUrl',
            'primaryLinkTitle' => 'BAN_PrimaryLinkSub'
        );
        $params = array();
        $result_link_container = restructureQuery($structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
        for ($idx=0; $idx < count($result_link_container); $idx++) {
            $ban_target = $agn_type = $result_link_container[$idx]['banner_tipo'];
            $result_link_container[$idx]['target_noticia'] = ($agn_type != 'noticia' ) ? '' : '_self';
            $result_link_container[$idx]['target_sitio'] = ($agn_type != 'sitio' ) ? '' : '_blank';
            $result_link_container[$idx]['target_agencia'] = ($agn_type != 'agencia' ) ? '' : '_self';
            $result_link_container[$idx]['target_agencias'] = ($agn_type != 'agencias' ) ? '' : '_self';
        }
        $json = changeArrayIntoJSON('campa', $result_link_container);
        echo $json;
        //echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    // GET HOME SECTION BANNERS
    function getBanners() {
        $sql = "SELECT *
                FROM camBanners
                WHERE BAN_Status = 1
                ORDER BY BAN_Id DESC
                ";
        getBannersJSON($sql);
    }
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
            'logo' => 'BRD_Logo',
            'agnBreadcrumb_name' => 'AGN_Breadcrumb_Nombre',
            'agnBreadcrumb_key' => 'AGN_Breadcrumb_Key'
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
    function getAgenciasLogosJSON ($sql) {
        $structure = array(
            'agpid' => 'AGN_AGP_Id',
            'principal' => 'AGP_Logo',
            'brand' => 'BRD_Logo',
        );
        $params = array();
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    function getAgenciesNewsPrincipales() {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camAgencias
                    WHERE AGN_Tipo = 1
                ) agn
                INNER JOIN (
                    SELECT *
                    FROM camAgenciasPrincipales
                 ) agp
                 INNER JOIN (
                    SELECT *
                    FROM camBrandsLogos
                 ) brd
                 ORDER BY AGN_AGP_Id";
        getAgenciasLogosJSON($sql);
    }
    // LOGO BRANDS AGENCIES NEWS
    function getLogosAgenciesNews() {
        $sql = "SELECT *
                FROM camAgenciasPrincipales agp
                INNER JOIN (
                    SELECT *
                    FROM camMarcasLogosAgencias
                ) mla
                ON agp.AGP_Id = mla.MLA_AGP_Id
                ORDER BY AGP_Index
                ";
        $params = array();
        $structure = array(
            'agencia_principal' => array(
                'agpid' => 'AGP_Id',
                'agpindex' => 'AGP_Index',
                'agpnombre' => 'AGP_Agencia',
                'agpshort' => 'AGP_Short',
                'logo' => 'AGP_Logo'
            ),
            'marcas' => array(
                'mlaid' => 'MLA_Id',
                'brand' => 'MLA_Logo',
                'mlastatus' => 'MLA_Status'
            )
        );
        $orderBy = array();
        $result = generalQuery(getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
        $result = multiLevelJSON($result, $structure, $orderBy);

        $counter = 1;

        for ($i=0; $i < count($result); $i++) {
            $tltip = ($counter <= 6) ? 'top' : 'down';
            $result[$i]['tltip'] = $tltip;

            $animate = ($counter <= 6) ? 'animation-slideUp' : 'animation-slideDown';
            $result[$i]['animate'] = $animate;

            $longmarcas = count($result[$i]['marcas']);
            $longcount = 0;

            foreach ($result[$i]['marcas'] as $marca) {
                if ($marca['mlastatus'] == 0) {
                    $longcount++;
                }
            }
            if ($longcount == $longmarcas) {
                $result[$i]['marcas'] = array();
            }

            $counter++;
        }

        echo changeArrayIntoJSON('campa', $result);
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
    // BRANDS AGENCIES NEWS BY NAME AGENCIE
    function getAgenciesNewsPrincipalesByAgencia($nombre) {
        $sql = "SELECT *
                FROM camAgenciasPrincipales agp
                INNER JOIN (
                    SELECT *
                    FROM camMarcasLogosAgencias
                ) mla
                ON agp.AGP_Id = mla.MLA_AGP_Id
                WHERE AGP_Agencia = :nombre
                ORDER BY AGP_Id, MLA_Logo
                ";
        $params = array();
        $structure = array(
            'agpid' => 'AGP_Id',
            'agpnombre' => 'AGP_Short'
        );
        ($nombre !== '') ? $params['nombre'] = $nombre : $params = $params;
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    // EVENT ALL AGENCIES BY TYPE AGENCIE
    function getAgenciesNewsByTypeAgencie($agn_name_agencia) {
        $sql = "SELECT *
                FROM camAgencias agn
                LEFT JOIN (
                    SELECT *
                    FROM camAgenciasPrincipales
                ) agp
                ON agn.AGN_AGP_Id = agp.AGP_Id
                WHERE AGP_Short = :agn_name_agencia
                AND AGN_Tipo = 1
                ";
        $params = array();
        $structure = array(
            'agn_id' => 'AGN_Id',
            'agp_id' => 'AGP_Id',
            'agn_agp_id' => 'AGN_AGP_Id',
            'agp_agencia' => 'AGP_Agencia',
            'agp_short' => 'AGP_Short',
            'tipo' => 'AGN_Tipo'
        );
        ($agn_name_agencia !== '') ? $params['agn_name_agencia'] = $agn_name_agencia : $params = $params;
        //($agn_type !== '') ? $params['agn_type'] = $agn_type : $params = $params;
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }

    // WORKSHOP
    function getWorkshop() {
        $sql_agencias = "SELECT *
                        FROM (
                            SELECT *
                            FROM camAgencias
                            WHERE AGN_Tipo = 2
                        ) agn
                        ";
        $sql_telefonos ="SELECT *
                        FROM camTelefonos
                        WHERE TEL_AGN_Id = :telefonos
                        ";
        $sql_horarios ="SELECT *
                        FROM camHorarios
                        WHERE HRS_AGN_Id = :horarios
                        ";
        $sql_sociales = "SELECT *
                        FROM camSociales
                        WHERE SOC_AGN_Id = :sociales
                        ";
        $params_agencias = array();
        $structure_agencias = array(
            'agnId' => 'AGN_Id',
            'agpid' => 'AGN_AGP_Id',
            'agnTipo' => 'AGN_Tipo',
            'agnNombre' => 'AGN_Nombre',
            'agnDireccion' => 'AGN_Dirección',
            'agnSmall' => 'AGN_Small'
        );
        $structure_telefonos = array(
            'ventas' => array(
                'agntelefonoventaslinea1' => 'TEL_Telefono_Ventas_linea1'
            )
        );
        $structure_horarios = array(
            'hrsId' => 'HRS_AGN_Id',
            'ventas' => 'HRS_HVentas',
            'refacciones' => 'HRS_HRefacciones',
            'servicios' => 'HRS_HServicio'
        );
        $structure_sociales = array(
            'socId' => 'SOC_AGN_Id',
            'website' => 'SOC_WebSite'
        );

        $result_agencias = restructureQuery($structure_agencias, getConnection(), $sql_agencias, $params_agencias, 0, PDO::FETCH_ASSOC);

        for ($idx=0; $idx < count($result_agencias); $idx++) {
            $agnId = $result_agencias[$idx]['agnId'];

            $result_agencias[$idx]['columns'] = ($idx % 2 === 0) ? 'col-md-offset-7 col-sm-offset-6' : '';
            $result_agencias[$idx]['textAlign'] = ($idx % 2 === 0) ? 'text-left' : 'text-right';
            $result_agencias[$idx]['direction'] = ($idx % 2 === 0) ? 'pull-left' : 'pull-right';

            // TELEFONOS
            $params_telefonos = array(
                'telefonos' => $agnId
            );

            $result_telefonos = generalQuery(getConnection(), $sql_telefonos, $params_telefonos, 0, PDO::FETCH_ASSOC);

            $result_telefonos = (count($result_telefonos) > 0)
                ? restructureRow($result_telefonos[0], $structure_telefonos)
                : array();

            $result_agencias[$idx]['telefonos'] = $result_telefonos;

            // HORARIOS
            $params_horarios = array(
                'horarios' => $agnId
            );

            $result_horarios = generalQuery(getConnection(), $sql_horarios, $params_horarios, 0, PDO::FETCH_ASSOC);

            $result_horarios = (count($result_horarios) > 0)
                ? restructureRow($result_horarios[0], $structure_horarios)
                : array();

            $result_agencias[$idx]['horarios'] = $result_horarios;

            // SOCIALES
            $params_sociales = array(
                'sociales' => $agnId
            );

            $result_sociales = generalQuery(getConnection(), $sql_sociales, $params_sociales, 0, PDO::FETCH_ASSOC);

            $result_sociales = (count($result_sociales) > 0)
                ? restructureRow($result_sociales[0], $structure_sociales)
                : array();

            $result_agencias[$idx]['sociales'] = $result_sociales;
        }

        //$result = restructureArray($result, $structure);

        $json = changeArrayIntoJSON('campa', $result_agencias);

        $json = str_replace('"sociales":[]', '"sociales":{}', $json);

        echo $json;
    }
    function getWorkshopBrands() {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camAgencias
                    WHERE AGN_Tipo = 2
                    GROUP BY AGN_Logo1
                ) agn
                ";
        $params = array();
        $structure = array(
            'agnId' => 'AGN_Id',
            'agnTipo' => 'AGN_Tipo',
            'agnlogo1' => 'AGN_Logo1'
        );
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }

    // RENTAL
    function getRental() {
        $sql_agencias = "SELECT *
                        FROM (
                            SELECT *
                            FROM camAgencias
                            WHERE AGN_Tipo = 3
                        ) agn
                        ";
        $sql_telefonos ="SELECT *
                        FROM camTelefonos
                        WHERE TEL_AGN_Id = :telefonos
                        ";
        $sql_sociales ="SELECT *
                        FROM camSociales
                        WHERE SOC_AGN_Id = :sociales
                        ";
        $params_agencias = array();
        $structure_agencias = array(
            'agnId' => 'AGN_Id',
            'agpid' => 'AGN_AGP_Id',
            'agnTipo' => 'AGN_Tipo',
            'agnNombre' => 'AGN_Nombre',
            'agnUrl' => 'AGN_Url',
            'agnDireccion' => 'AGN_Dirección',
            'agnSmall' => 'AGN_Small',
            'agnBreadcrumb' => 'AGN_Breadcrumb_Nombre'
        );
        $structure_telefonos = array(
            'telId' => 'TEL_AGN_Id',
            'telefono' => 'TEL_Telefono_Ventas_linea1',
            'call' => 'TEL_Call_Ventas_linea1'
        );
        $structure_sociales = array(
            'socId' => 'SOC_AGN_Id',
            'website' => 'SOC_WebSite'
        );

        $result_agencias = restructureQuery($structure_agencias, getConnection(), $sql_agencias, $params_agencias, 0, PDO::FETCH_ASSOC);

        for ($idx=0; $idx < count($result_agencias); $idx++) {
            $agnId = $result_agencias[$idx]['agnId'];

            $result_agencias[$idx]['columns'] = ($idx % 2 === 0) ? 'col-md-offset-7 col-sm-offset-6' : '';
            $result_agencias[$idx]['textAlign'] = ($idx % 2 === 0) ? 'text-left' : 'text-right';
            $result_agencias[$idx]['direction'] = ($idx % 2 === 0) ? 'pull-left' : 'pull-right';

            // TELEFONOS
            $params_telefonos = array(
                'telefonos' => $agnId
            );

            $result_telefonos = generalQuery(getConnection(), $sql_telefonos, $params_telefonos, 0, PDO::FETCH_ASSOC);

            $result_telefonos = (count($result_telefonos) > 0)
                ? restructureRow($result_telefonos[0], $structure_telefonos)
                : array();

            $result_agencias[$idx]['telefonos'] = $result_telefonos;

            // SOCIALES
            $params_sociales = array(
                'sociales' => $agnId
            );
            $result_sociales = generalQuery(getConnection(), $sql_sociales, $params_sociales, 0, PDO::FETCH_ASSOC);

            $result_sociales = (count($result_sociales) > 0)
                ? restructureRow($result_sociales[0], $structure_sociales)
                : array();

            $result_agencias[$idx]['sociales'] = $result_sociales;
        }

        $json = changeArrayIntoJSON('campa', $result_agencias);

        echo $json;
    }

    // BLOG JSON
    function getBlogJSON($sql) {
        $structure = array(
            'blogId' => 'BLG_Id',
            'blogTitulo' => 'BLG_Titulo',
            'blogTituloShort' => 'BLG_TituloShort',
            'blogSubTitulo' => 'BLG_SubTitulo',
            'blogFeatureImage' => 'BLG_PostImage',
            'blogSmallTitulo' => 'BLG_SmallTitulo',
            'blogSmallDescripcion' => 'BLG_SmallDescripcion',
            'blogDescripcion' => 'BLG_Descripcion',
            'blogPostParrafo1' => 'BLG_BlogPostParrafo1',
            'blogPostParrafo2' => 'BLG_BlogPostParrafo2',
            'blogPostSubTitulo' => 'BLG_BlogPostSubTitulo',
            'blogPostFeatureImage1' => 'BLG_BlogPostFeatureImage1',
            'blogPostFeatureImage2' => 'BLG_BlogPostFeatureImage2',
            'blogPostBlockquote' => 'BLG_BlogPostBlockquote',
            'blogAgencia' => 'BLG_Agencia',
            'blogAgenciaShort' => 'BLG_AgenciaShort',
            'blogSmall' => 'BLG_Small',
            'blogPrimaryLinkUrl' => 'BLG_PrimaryLinkUrl',
            'blogPrimaryLinkName' => 'BLG_PrimaryLinkName',
            'blogPublicacion' => 'BLG_Publicacion'
        );
        $params = array();
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    function getBlogByPostJSON($sql, $blogAgenciaShort, $blogTituloShort, $blogId) {
        $structure = array(
            'blogId' => 'BLG_Id',
            'blogTitulo' => 'BLG_Titulo',
            'blogTituloShort' => 'BLG_TituloShort',
            'blogSubTitulo' => 'BLG_SubTitulo',
            'blogFeatureImage' => 'BLG_PostImage',
            'blogSmallTitulo' => 'BLG_SmallTitulo',
            'blogSmallDescripcion' => 'BLG_SmallDescripcion',
            'blogDescripcion' => 'BLG_Descripcion',
            'blogPostParrafo1' => 'BLG_BlogPostParrafo1',
            'blogPostParrafo2' => 'BLG_BlogPostParrafo2',
            'blogPostSubTitulo' => 'BLG_BlogPostSubTitulo',
            'blogPostFeatureImage1' => 'BLG_BlogPostFeatureImage1',
            'blogPostFeatureImage2' => 'BLG_BlogPostFeatureImage2',
            'blogPostBlockquote' => 'BLG_BlogPostBlockquote',
            'blogAgencia' => 'BLG_Agencia',
            'blogAgenciaShort' => 'BLG_AgenciaShort',
            'blogSmall' => 'BLG_Small',
            'blogPrimaryLinkUrl' => 'BLG_PrimaryLinkUrl',
            'blogPrimaryLinkName' => 'BLG_PrimaryLinkName',
            'blogPublicacion' => 'BLG_Publicacion',
            'blogGaleria' => 'GAL_Galeria',
            'blogVideo' => 'VDO_Video',
            'agencias' => array(
                'blogAddress' => 'BLG_Address'
            )
        );
        $params = array();
        ($blogAgenciaShort !== '') ? $params['blogAgenciaShort'] = $blogAgenciaShort : $params = $params;
        ($blogTituloShort !== '') ? $params['blogTituloShort'] = $blogTituloShort : $params = $params;
        ($blogId !== '') ? $params['blogId'] = $blogId : $params = $params;
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    // GET BLOG
    function getBlog() {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camBlog
                    ORDER BY BLG_Id
                    DESC
                ) blg
                ";
        getBlogJSON($sql);
    }
    // GET BLOG BY POST
    function getBlogByPost($blogAgenciaShort, $blogTituloShort, $blogId) {
        $sql = "SELECT *
                FROM (
                    SELECT *
                    FROM camBlog
                    WHERE BLG_AgenciaShort = :blogAgenciaShort
                    AND BLG_TituloShort = :blogTituloShort
                    AND BLG_Id = :blogId
                ) blg
                LEFT JOIN (
                    SELECT *
                    FROM camBlogGaleria
                ) gal
                ON blg.BLG_Id = gal.GAL_BLG_Id
                LEFT JOIN (
                    SELECT *
                    FROM camBlogVideos
                ) vdo
                ON blg.BLG_Id = vdo.VDO_BLG_Id
                ";
        getBlogByPostJSON($sql, $blogAgenciaShort, $blogTituloShort, $blogId);
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

    // CONTACT MAIN
    function post_form_contact_main() {
        $property = requestBody();
        $contact_main_name = $property->contact_main_name;
        $contact_main_email = $property->contact_main_email;
        $contact_main_message = $property->contact_main_message;

        contact_main($contact_main_name, $contact_main_email, $contact_main_message);

        echo changeArrayIntoJSON("campa", array('process'=>'ok'));
    }
/*
  ----------------------------------------------------------------------------
  General Get Mandril
  ----------------------------------------------------------------------------
*/
    function contact_main($contact_main_name, $contact_main_email, $contact_main_message) {
        try {
            $mandrill = new Mandrill('V6ypCDEnJAgL9FsOyyDxAw');
            $message = array(
                'html' => '
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#ffffff"style="background-color: rgb(255, 255, 255);">
                        <tr>
                            <td style="background-color: rgba(0,161,220,0.3); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -120px -15px; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                                    <!-- Mobile Wrapper -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgb(178, 17, 23);">
                                    <tr>
                                        <td width="100%" align="center">

                                            <div class="sortable_inner ui-sortable">
                                            <!-- Space -->
                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" height="50"></td>
                                                </tr>
                                            </table><!-- End Space -->

                                            <!-- Space -->
                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" height="50"></td>
                                                </tr>
                                            </table><!-- End Space -->

                                            <!-- Start Top -->
                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: rgba(255,255,255,0.85);" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center" class="logo">

                                                        <!-- Header Text -->
                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="30"></td>
                                                            </tr>
                                                            <tr>
                                                                <td width="100%"><span ><img src="http://camcar.mx/resources/public/img/logo_camcar.png" width="225" alt="" border="0" ></span></td>
                                                            </tr>
                                                            <tr>
                                                                <td width="100%" height="30"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 1);">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="30"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 1);">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 23px; color: rgb(63, 67, 69); line-height: 30px; font-weight: 100;">
                                                                    <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Contacto <!--[if !mso]><!--></span><!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 1);">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="30"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 1);">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(63, 67, 69); line-height: 24px;">
                                                                    <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->
                                                                        <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-top: 0%;">
                                                                        <ol type="1">
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Nombre: </b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $contact_main_name . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Email:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $contact_main_email . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ol>
                                                                        <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-bottom: 2%;">

                                                                <!--[if !mso]><!--></span><!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 1);">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="10"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 1);">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 19px; color: rgb(63, 67, 69); line-height: 30px; font-weight: bold;">
                                                                    <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: left; display: block; margin-bottom: 20px;"><!--<![endif]-->Mensaje. <!--[if !mso]><!--></span><!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(63, 67, 69); line-height: 24px;">
                                                                    <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; word-break: break-all;"><!--<![endif]-->
                                                                    ' . $contact_main_message . '
                                                                    <!--[if !mso]><!--></span><!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 1);">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="10"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>



                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background-color: rgba(255, 255, 255, 1);" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="10"></td>
                                                            </tr>
                                                        </table>

                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full2" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" height="30"></td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                <tr>
                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 15px; color: rgba(255, 255, 255, 1); line-height: 15px; text-align: center">
                                                       <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2015 Camcar Grupo Automotriz <!--<![endif]--></span><!--[if !mso]><!-->
                                                    </td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" height="30"></td>
                                                </tr>
                                            </table>

                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" height="29"></td>
                                                </tr>
                                                <tr>
                                                    <td width="100%" height="1"></td>
                                                </tr>
                                            </table>
                                            </div>

                                        </td>
                                    </tr>
                                </table>

                            </div>
                            </td>
                        </tr>
                    </table>
                ',
                'subject' => 'Contacto',
                'from_email' => $contact_main_email,
                'from_name' => $contact_main_name,
                'to' => array(
                    array(
                        'email' => 'marina.reyes@camcar.mx',
                        //'email' => 'hevelmo060683@gmail.com',
                        'name' => 'Contacto Camcar',
                        'type' => 'to'
                    )
                ),
                'headers' => array('Reply-To' => 'marina.reyes@camcar.mx'),
                'important' => false,
                'track_opens' => true,
                'track_clicks' => true,
                'auto_text' => null,
                'auto_html' => null,
                'inline_css' => null,
                'url_strip_qs' => null,
                'preserve_recipients' => null,
                'view_content_link' => null,
                'bcc_address' => null,
                'tracking_domain' => null,
                'signing_domain' => null,
                'return_path_domain' => null,
                'merge' => true,

                'tags' => array('orden-new-notificacion'),
                'google_analytics_domains' => array('http://camcar.mx/'),
                'google_analytics_campaign' => 'marina.reyes@camcar.mx',
                'metadata' => array('website' => 'http://camcar.mx/'),
            );
            $async = false;
            $ip_pool = 'Main Pool';
            $send_at = '';
            $result = $mandrill->messages->send($message, $async, $ip_pool, $send_at);
            //print_r($result);
        } catch(Mandrill_Error $e) {
            // Mandrill errors are thrown as exceptions
            echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
            // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
            throw $e;
        }
    }
