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
    // WORKSHOP
    $start_workshop_content_body = 'content-start-workshop-body-main';
    $start_workshop_content_brand = 'content-start-workshop-brand';
    $start_workshop_content_agencies = 'content-start-workshop-agencies';
    // RENTAL
    $start_rental_content_body = 'content-start-rental-body-main';
    $start_rental_content_agencies = 'content-start-rental-agencies';
    // BLOG NEWS
    // BLOG BY NEWS
    $start_body_content_main = 'content-start-body-main';
    $start_flexslider = 'content-flexslider';
    // ABOUT US
    $start_large_pad_land_mark = 'content-start-large-pag-land-mark';
    $start_large_pad_feature_list = 'content-start-large-pag-feature-list';
    $start_large_pad_contact_form = 'content-start-large-pag-contact-form';
    $start_contact_main = 'content-start-contact-main';
    // SECTION SEPARATOR
    $start_section_separator = 'content-section-separator';
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
        // WORKSHOP
        '_start_workshop_content_body' => $start_workshop_content_body,
        '_start_workshop_content_body_name' => '#' . $start_workshop_content_body,
        '_start_workshop_content_brand' => $start_workshop_content_brand,
        '_start_workshop_content_brand_name' => '#' . $start_workshop_content_brand,
        '_start_workshop_content_agencies' => $start_workshop_content_agencies,
        '_start_workshop_content_agencies_name' => '#' . $start_workshop_content_agencies,
        // RENTAL
        '_start_rental_content_body' => $start_rental_content_body,
        '_start_rental_content_body_name' => '#' . $start_rental_content_body,
        '_start_rental_content_agencies' => $start_rental_content_agencies,
        '_start_rental_content_agencies_name' => '#' . $start_rental_content_agencies,
        // BLOG
        '_start_body_content_main' => $start_body_content_main,
        '_start_body_content_main_name' => '#' . $start_body_content_main,
        // BLOG BY POST
        '_start_flexslider' => $start_flexslider,
        '_start_flexslider_name' => '#' . $start_flexslider,
        'div_recurrent_blog_galery' => '#content-section-blog-galery',
        // ABOUT US
        '_start_large_pad_land_mark' => $start_large_pad_land_mark,
        '_start_large_pad_land_mark_name' => '#' . $start_large_pad_land_mark,
        '_start_large_pad_feature_list' => $start_large_pad_feature_list,
        '_start_large_pad_feature_list_name' => '#' . $start_large_pad_feature_list,
        // FORM CONTACT MAIN
        '_start_large_pad_contact_form' => $start_large_pad_contact_form,
        '_start_large_pad_contact_form_name' => '#' . $start_large_pad_contact_form,
        '_start_contact_main' => $start_contact_main,
        '_start_contact_main_name' => '#' . $start_contact_main,
        'div_recurrent_form_contact' => '#container-form-contact',
        // FIELDS FORM CONTACT MAIN
        'form_cam_form_contact_main' => '#cam-form-contact-main',
        'input_cam_contact_main_name' => '#cam-contact-main-name',
        'input_cam_contact_main_email' => '#cam-contact-main-email',
        'input_cam_contact_main_message' => '#cam-contact-main-message',
        //'input_cam_contact_main_concessionary' => '#cam-contact-main-concessionary',
        //'input_cam_contact_main_logo' => '#cam-contact-main-logo',
        'send_cam_contact_main_send' => '#cam-contact-main-send',
        // SECTION SEPARATOR
        '_start_section_separator' => $start_section_separator,
        '_start_section_separator_name' => '#' . $start_section_separator,
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
        'goSection_blog_by_news' => '#go-blog-item-by-news',
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
        // BREADCRUMB BLOG
        'goSection_breadcrumb_home' => '#go-breadcrumb-home',
        'goSection_breadcrumb_blog' => '#go-breadcrumb-blog',
        'goBack_breadcrumb_blog' => '#go-back-blog',
        'filter_breadcrumb_blog_agencie' => '#filter-blog-agencie',
        'filter_breadcrumb_blog_post' => '#filter-blog-post',
        // VALIDATION
        'validate_required' => '.validate-required',
    );
}
