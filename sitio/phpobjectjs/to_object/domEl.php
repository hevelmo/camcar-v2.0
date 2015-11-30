<?php
function domEl() {
    // NAVBAR
    $start_site_navbar = 'content-start-site-navbar';
    // HERO CAROUSEL
    $start_hero_carousel = 'content-start-hero-carousel';
    // OUR BRANDS
    $start_large_pad_our_brands = 'content-start-large-pad-our-brands';
    // GROUP COUNTER
    $start_large_pad_group_counter = 'content-start-large-pad-group-counter';
    // FULL WIDTH FEATURES
    $start_full_width_features = 'content-start-full-width-features';
    // DEALER SEARCH MAP
    $start_dealer_search_map = 'content-start-dealer-search-map';
    return array(
    	'recurrent_head' => 'head',
    	'recurrent_body' => 'body',
    	// BACK TO TOP
    	'_back_to_top' => '.back-to-top',
    	//GENERAL HI DIVS
    	'div_hidden_inputs_session' => 'div#hidden-inputs-session',
    	'div_hidden_inputs_temporal' => 'div#hidden-inputs-temporal',
    	'div_recurrent' => 'div#content-temporal-interactive',
        // MAIN NAVIGATION
        '_start_site_navbar' => $start_site_navbar,
        '_start_site_navbar_name' => '#' . $start_site_navbar,
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
        // VALIDATION
        'validate_required' => '.validate-required',
    );
}
