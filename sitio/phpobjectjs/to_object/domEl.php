<?php
function domEl() {
    // NAVBAR
    $start_site_navbar = 'content-start-site-navbar';
    // HOME SECTION
    //HERO CAROUSEL
    $start_hero_carousel = 'content-start-hero-carousel';
    // OUR BRANDS
    $start_large_pad_our_brands = 'content-start-large-pad-our-brands';
    // GROUP COUNTER
    $start_large_pad_group_counter = 'content-start-large-pad-group-counter';
    // FULL WIDTH FEATURES
    $start_full_width_features = 'content-start-full-width-features';
    // DEALER SEARCH MAP
    $start_dealer_search_map = 'content-start-dealer-search-map';
    // AGENCIES NEWS
    // UTILITY BAR BREADCRUMB
    $start_utility_bar_breadcrumb = 'content-start-utility-bar-breadcrumb';
    // BLOG NEWS
    // BLOG BY NEWS
    $start_body_content_main = 'content-start-body-main';
    return array(
    	'head_recurrent' => 'head',
    	'body_recurrent' => 'body',
        // NAVBAR WRAPPER
        'navbar_recurrent' => '#start-site-header',
    	// BACK TO TOP
    	'_back_to_top' => '.back-to-top',
    	//GENERAL HI DIVS
    	'div_hidden_inputs_session' => 'div#hidden-inputs-session',
    	'div_hidden_inputs_temporal' => 'div#hidden-inputs-temporal',
    	'div_recurrent' => 'div#content-temporal-interactive',
        // MAIN NAVIGATION
        '_start_site_navbar' => $start_site_navbar,
        '_start_site_navbar_name' => '#' . $start_site_navbar,
        // HOME SECTION
        // HERO COROUSEL
        '_start_hero_carousel' => $start_hero_carousel,
        '_start_hero_carousel_name' => '#' . $start_hero_carousel,
        // OUR BRANDS
        '_start_large_pad_our_brands' => $start_large_pad_our_brands,
        '_start_large_pad_our_brands_name' => '#' . $start_large_pad_our_brands,
        // GROUP COUNTER
        '_start_large_pad_group_counter' => $start_large_pad_group_counter,
        '_start_large_pad_group_counter_name' => '#' . $start_large_pad_group_counter,
        // FULL WIDTH FEATURES
        '_start_full_width_features' => $start_full_width_features,
        '_start_full_width_features_name' => '#' . $start_full_width_features,
        // FULL WIDTH FEATURES
        '_start_dealer_search_map' => $start_dealer_search_map,
        '_start_dealer_search_map_name' => '#' . $start_dealer_search_map,
        // UTILITY BAR BREADCRUMB
        '_start_utility_bar_breadcrumb' => $start_utility_bar_breadcrumb,
        '_start_utility_bar_breadcrumb_name' => '#' . $start_utility_bar_breadcrumb,
        // BLOG
        '_start_body_content_main' => $start_body_content_main,
        '_start_body_content_main_name' => '#' . $start_body_content_main,
        // MOBILE MENU TOGGLE
        '_menu_toogle' => '#menu-toggle',
        '_menu_toogle_close' => '.menu-toggle-close',
        // CLICK GO SECTION
        'goSection_index' => '#go-index',
        'goSection_index_logo_resp' => '#go-home-logo-resp',
        'goSection_index_logo' => '#go-home-logo',
        'goSection_agencies_news' => '#go-agencies-news',
        'goSection_agencies_preowned' => '#go-agencies-preowned',
        'goSection_inventories_preowned' => '#go-inventories-preowned',
        'goSection_workshop' => '#go-workshop',
        'goSection_rental' => '#go-rental',
        'goSection_blog' => '#go-blog',
        'goSection_about_us' => '#go-about-us',
        // FULLWIDTH FEATURES CLIGO GO SECTION
        'goSection_fullwidth_features_workshop' => '#fullwidth-features-go-workshop',
        'goSection_fullwidth_features_rental' => '#fullwidth-features-go-rental',
        'goSection_fullwidth_features_inventories_preowned' => '#fullwidth-features-go-inventories-preowned',
        // OUR BRANDS AGENCIES NEWS
        'goSection_ourBrand_agencies_preowned' => '.act-agn-seminuevo',
        'goSection_ourBrand_agencies_news' => '.act-agn-nuevo',
        'goSection_ourBrand_whorkshop' => '.act-agn-taller',
        'goSection_ourBrand_rental' => '.act-agn-rentas',
        // VALIDATION
        'validate_required' => '.validate-required',
    );
}
