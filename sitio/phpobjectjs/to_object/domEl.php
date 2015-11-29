<?php
function domEl() {
    // NAVBAR
    $start_site_navbar = 'content-start-site-navbar';
    // HERO CAROUSEL
    $start_hero_carousel = 'content-start-hero-carousel';
    // OUR BRANDS
    $start_large_pad_our_brands = 'content-start-large-pad-our-brands';
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
        // VALIDATION
        'validate_required' => '.validate-required',
    );
}
