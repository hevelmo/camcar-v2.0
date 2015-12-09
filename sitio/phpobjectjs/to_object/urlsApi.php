<?php

function urlsApi() {
    //Especial Actions
    $new = 'new';
    $del = 'del';
    $set = 'set';
    $get = 'get';
    $search = 'search';

    //
    $det = 'detail';

    //Tables
    //$tab = 'table';
    $tab_seminuevo = 'seminuevo';
    $tab_seminuevos = 'seminuevos';
    $tab_pictures = 'pictures';
    $tab_mapa = 'mapa';
    $tab_filtros = 'filtros';
    $tab_categoria = 'categoria';
    $tab_marca = 'marcas';
    $tab_modelo = 'modelos';
    $tab_catalogo = 'catalogo';
    $news = 'nuevos';
    $fachada = 'fachada';
    $address = 'direccion';
    $map = 'mapa';
    $preowned = 'seminuevos';
    $agencie = 'agencia';
    $brands = 'marcas';
    $logos = 'logotipos';
    $banners = 'banners';
    $group_counter = 'grupo/camcar';
    $banners = 'banners';
    $noticia = 'noticia';

    //Root Api url
    $root = 'api/v15';

    return array(
        // INSERT
        // UPDATE
        // SELECT
        // DELETE
        // HOME SECTION BANNERS
        'getBanners' => $root . '/' . $get . '/' . $banners,
        // HOME SECTION BRANDS
        'getBrandsLogos' => $root . '/' . $get . '/' . $agencie . '/' . $news . '/' . $brands . '/'. $logos,
        // HOME SECTION GROUP COUNTER
        'getGroupCounter' => $root . '/' . $get . '/' . $group_counter,
        // AGENTS MAP
        'getMapa' => $root . '/' . $get . '/' . $tab_mapa . '/' . $tab_seminuevo,
        'getMapaById' => $root . '/' . $get . '/' . $tab_mapa . '/' . $tab_seminuevo . '/',
        // AGENCIES NEWS
        'getAgenciesNews' => $root . '/' . $get . '/' . $agencie . '/' . $news,
        // AGENCIES NEWS BY ID
        //$app->get('/get/agencia/nuevos/:agpid', /*'mw1',*/ 'getAgenciesNewsById');
        // AGENCIES NEWS BY MAP
        'getAgenciesNewsByMap' => $root . '/' . $get . '/' . $agencie . '/' . $news .'/mapas/',
        // AGENCIES NEWS BY AGENCIE
        'getAgenciesNewsByAgencie' => $root . '/' . $get . '/' . $agencie . '/' . $news . '/',
        // PRINCIPAL AGENCIE NEWS
        'getAgenciesNewsPrincipales' => $root . '/' . $get . '/' . $agencie . '/' . $news,
        // PRINCIPAL AGENCIE NEWS BY AGENCIE
        'getAgenciesNewsPrincipalesByAgencia' => $root . '/' . $get . '/agencias/' . $news. '/',
        // LOGOS AGENCIES NEWS PRINCIPAL
        'getLogosAgenciesNews' => $root . '/' . $get . '/logos/' . $agencie . '/' . $news,
        // BLOG
        'getBlog' => $root . '/' . $get . '/blog',
        'getBlogByPost' => $root . '/' . $get . '/blog/' . $noticia . '/',

    );
}
