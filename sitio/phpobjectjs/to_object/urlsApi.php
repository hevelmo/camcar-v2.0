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

    //Root Api url
    $root = 'api/v15';

    return array(
        // INSERT
        // UPDATE
        // SELECT
        // DELETE
        // HOME SECTION BRANDS
        'getBrandsLogos' => $root . '/' . $get . '/' . $agencie . '/' . $news . '/' . $brands . '/'. $logos,
        // HOME SECTION GROUP COUNTER
        'getGroupCounter' => $root . '/' . $get . '/' . $group_counter,
    );
}
