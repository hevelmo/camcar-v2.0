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
        // LOGOS AGENCIES NEWS PRINCIPAL
        'getLogosAgenciesNews' => $root . '/' . $get . '/logos/' . $agencie . '/' . $news,
        // PRINCIPAL AGENCIE NEWS
        'getAgenciesNewsPrincipales' => $root . '/' . $get . '/' . $agencie . '/' . $news,
        // AGENCIES NEWS -> PRINCIPAL AGENCIES NEWS
        'getAgenciesNewsByTypeAgencie' => $root . '/' . $get . '/' . $agencie . '/' . $news . '/principal/',
        // PRINCIPAL AGENCIE NEWS BY AGENCIE
        'getAgenciesNewsPrincipalesByAgencia' => $root . '/' . $get . '/agencias/' . $news. '/',


        'getAgenciesNews' => $root . '/' . $get . '/' . $agencie . '/' . $news,
        // Agencias Nuevos Fachada
        'getAgenciesNewsFachada' => $root . '/' . $get . '/' . $agencie . '/' . $news . '/' . $fachada,
        'getAgenciesNewsAddress' => $root . '/' . $get . '/' . $agencie . '/' . $news . '/' . $address,
        'getAgenciesNewsMap' => $root . '/' . $get . '/' . $agencie . '/' . $news . '/' . $map,
        // AGENCIES NEWS BY MAP
        'getAgenciesNewsByMap' => $root . '/' . $get . '/' . $agencie . '/' . $news .'/mapas/',
        // AGENCIES NEWS BY AGENCIE
        'getAgenciesNewsByAgencie' => $root . '/' . $get . '/' . $agencie . '/' . $news . '/',

        // AGENCIES PRE-OWNED
        'getAgenciesPreOwned' => $root . '/' . $get . '/' . $agencie . '/' . $preowned,
        'getAgenciesPreOwnedByMap' => $root . '/' . $get . '/' . $agencie . '/' . $preowned .'/mapas/',
        'getAgenciesPreOwnedByAgencie' => $root . '/' . $get . '/' . $agencie . '/' . $preowned . '/',

        // AGNCIES WORKSHOP
        'getWorkshop' => $root . '/' . $get . '/talleres',
        'getWorkshopBrands' => $root . '/' . $get . '/talleres/logos',

        // AGENCIES RENTAl
        'getRental' => $root . '/' . $get . '/rentas/',
        //'getRentalBrand' => $root . '/' . $get . '/rentas/logo',

        // BLOG
        'getBlog' => $root . '/' . $get . '/blog',
        'getBlogByPost' => $root . '/' . $get . '/blog/' . $noticia . '/',

        // ABOUT US FORM CONTACT MAIN
        'post_form_contact_main' => $root . '/contacto',

    );
}
