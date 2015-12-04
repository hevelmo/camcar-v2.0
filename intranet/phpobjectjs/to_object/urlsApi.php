<?php

function urlsApi() {
    //Especial Actions
    $new = 'new';
    $del = 'del';
    $set = 'set';
    $get = 'get';
    $search = 'search';
    $wri = 'wri';

    //
    $det = 'detail';
    $wse = 'webservice';

    //Tables
    $agn = 'agencias';
    $ani = 'aniversarios';
    $apm = 'apellidos_maternos';
    $app = 'apellidos_paternos';
    $are = 'areas';
    $car = 'cargos';
    $cty = 'ciudades';
    $cor = 'correos';
    $cum = 'cumpleanos';
    $age = 'edades';
    $epy = 'empleados';
    $est = 'estados';
    $fin = 'fechas_ingreso';
    $mar = 'marcas';
    $nag = 'numeros_agencia';
    $nep = 'numeros_empleado';
    $nom = 'nombres';
    $tel = 'telefonos';

    //Root Api url
    $root = '../api/v1';

    // rootURL + 'carts/update/'

    return array(
        // INSERT

        // UPDATE
        'wse_set_epy' => $root . '/' . $wse . '/' . $set . '/' . $epy,

        // SELECT
        'wse_get_epy' => $root . '/' . $wse . '/' . $get . '/' . $epy,
        'wse_get_epy_agn' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $agn . '/',
        'wse_get_epy_ani' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $ani . '/',
        'wse_get_epy_apm' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $apm . '/',
        'wse_get_epy_app' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $app . '/',
        'wse_get_epy_are' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $are . '/',
        'wse_get_epy_car' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $car . '/',
        'wse_get_epy_cty' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $cty . '/',
        'wse_get_epy_cor' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $cor . '/',
        'wse_get_epy_cum' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $cum . '/',
        'wse_get_epy_age' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $age . '/',
        'wse_get_epy_est' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $est . '/',
        'wse_get_epy_fin' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $fin . '/',
        'wse_get_epy_mar' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $mar . '/',
        'wse_get_epy_nag' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $nag . '/',
        'wse_get_epy_nep' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $nep . '/',
        'wse_get_epy_nom' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $nom . '/',
        'wse_get_epy_tel' => $root . '/' . $wse . '/' . $get . '/' . $epy . '/' . $tel . '/',
        // PAGE HEADER BG
        'adm_get_agn_header' => $root . '/' . $get . '/header/' . $agn,
        'adm_get_agn_header_id' => $root . '/' . $get . '/header/' . $agn . '/',

        // DELETE

    );
}
