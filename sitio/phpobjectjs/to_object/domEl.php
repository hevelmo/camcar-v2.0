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
    $start_agencies_news_content_body = 'content-start-agencies-news-body-main';
    $start_agencies_news_large_pad_brands = 'content-start-agencies-news-large-pad-brands';
    $start_agencies_news_midpadding_work = 'content-start-agencies-news-midpadding-work';
    $start_agencies_news_video_strip = 'content-start-agencies-news-video-strip-agencie';
    // AGENCIES NEWS SUB AGENCIE
    $start_agencies_news_fachada = 'content-start-agencies-news-fachada';
    $start_agencies_news_address = 'content-start-agencies-news-address';
    $start_agencies_news_map = 'content-start-agencies-news-map';
    // AGENCIES PRE-OWNED
    $start_agencies_preowned_content_body = 'content-start-agencies-preowned-body-main';
    $start_agencies_preowned_small_screen = 'content-start-agencies-preowned-small-screen';
    $start_agencies_preowned_section_tabs = 'content-start-agencies-preowned-section-tabs';
    $start_agencies_preowned_tab_content_by_agencie = 'content-start-tab-container-by-agencie';
    $start_agencies_preowned_content_fachada = 'content-start-container-fachada';
    $start_agencies_preowned_content_address = 'content-start-container-address';
    $start_agencies_preowned_content_map = 'content-start-container-map';
    // INVENTORIES PRE-OWNED
    $start_inventories_preowned_action_bar = 'content-start-inventories-preowned-action-bar';
    $start_inventories_preowned_filter_section = 'content-start-inventories-preowned-filter-section';
    $start_inventories_preowned_field_filter_category = 'content-start-inventories-preowned-field-filter-category';
    $start_inventories_preowned_field_filter_brands = 'content-start-inventories-preowned-field-filter-brands';
    $start_inventories_preowned_field_filter_models = 'content-start-inventories-preowned-field-filter-models';
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
        // FILTER INPUTS
        'input_hidden_mapa' => 'input#hidden_mapa',
        'input_current_hidden_category' => 'input#hidden_category',
        'input_current_hidden_marc' => 'input#hidden_marc',
        'input_current_hidden_model' => 'input#hidden_model',
        'input_current_hidden_agen_pre_owned_name' => 'input#hidden_agen_pre_owned_name',
        'input_current_hidden_agen_pre_owned_id' => 'input#hidden_agen_pre_owned_id',
        'input_current_hidden_agen_news_name' => 'input#hidden_agen_news_name',
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
        // AGNCIES NEWS
        '_start_agencies_news_content_body' => $start_agencies_news_content_body,
        '_start_agencies_news_content_body_name' => '#' . $start_agencies_news_content_body,
        // AGENCIES NEWS BRANDS
        '_start_agencies_news_large_pad_brands' => $start_agencies_news_large_pad_brands,
        '_start_agencies_news_large_pad_brands_name' => '#' . $start_agencies_news_large_pad_brands,
        // AGENCIES NEWS CATEGORIES
        '_start_agencies_news_midpadding_work' => $start_agencies_news_midpadding_work,
        '_start_agencies_news_midpadding_work_name' => '#' . $start_agencies_news_midpadding_work,
        // AGENCIES NEWS SUB AGENCIE
        '_start_agencies_news_fachada' => $start_agencies_news_fachada,
        '_start_agencies_news_fachada_name' => '#' . $start_agencies_news_fachada,
        '_start_agencies_news_address' => $start_agencies_news_address,
        '_start_agencies_news_address_name' => '#' . $start_agencies_news_address,
        '_start_agencies_news_map' => $start_agencies_news_map,
        '_start_agencies_news_map_name' => '#' . $start_agencies_news_map,
        // AGENCIES NEWS VIDEO STRIP
        '_start_agencies_news_video_strip' => $start_agencies_news_video_strip,
        '_start_agencies_news_video_strip_name' => '#' . $start_agencies_news_video_strip,
        // AGENCIES NEWS ACTION
        'action_new_agn' => '.action-new-agn',
        // AGENCIES NEWS SUB AGENCIE
        'action_go_agencie_news' => 'a.go-action-agencie-news',
        'action_go_agencie_news_id' => 'a#go-action-agencie-news-',
        // AGENCIES PRE-OWNED
        '_start_agencies_preowned_content_body' => $start_agencies_preowned_content_body,
        '_start_agencies_preowned_content_body_name' => '#' . $start_agencies_preowned_content_body,
        '_start_agencies_preowned_small_screen' => $start_agencies_preowned_small_screen,
        '_start_agencies_preowned_small_screen_name' => '#' . $start_agencies_preowned_small_screen,
        '_start_agencies_preowned_section_tabs' => $start_agencies_preowned_section_tabs,
        '_start_agencies_preowned_section_tabs_name' => '#' . $start_agencies_preowned_section_tabs,
        '_start_agencies_preowned_tab_content_by_agencie' => $start_agencies_preowned_tab_content_by_agencie,
        '_start_agencies_preowned_tab_content_by_agencie_name' => '#' . $start_agencies_preowned_tab_content_by_agencie,
        '_start_agencies_preowned_content_fachada' => $start_agencies_preowned_content_fachada,
        '_start_agencies_preowned_content_fachada_name' => '#' . $start_agencies_preowned_content_fachada,
        '_start_agencies_preowned_content_address' => $start_agencies_preowned_content_address,
        '_start_agencies_preowned_content_address_name' => '#' . $start_agencies_preowned_content_address,
        '_start_agencies_preowned_content_map' => $start_agencies_preowned_content_map,
        '_start_agencies_preowned_content_map_name' => '#' . $start_agencies_preowned_content_map,
        // BUTTON SHOW TABS AGENICES PRE-OWNED
        'button_show_agencies_tabs' => '#Show-Agencies-Tabs',
        'button_search_tabs' => '#Search-tabs',
        'li_agencies' => '.agencia',
        // GO ACTION AGENCIE PRE OWNED
        'action_go_agencie_preowned' => 'a.go-action-agencie-preowned',
        'action_go_agencie_preowned_id' => 'a#go-action-agencie-preowned-',

        'action_preowned_agn' => '.action-preowned-agn',

        // INVENTORIES PRE-OWNED
        '_start_inventories_preowned_action_bar' => $start_inventories_preowned_action_bar,
        '_start_inventories_preowned_action_bar_name' => '#' . $start_inventories_preowned_action_bar,
        // SMALL SCREEN FLITERS
        'div_recurrent_start_small_screen_filters' => '#small-screen-filters',
        // FILTER SECTION
        '_start_inventories_preowned_filter_section' => $start_inventories_preowned_filter_section,
        '_start_inventories_preowned_filter_section_name' => '#' . $start_inventories_preowned_filter_section,
        // FIELDS FILTERS
        '_start_inventories_preowned_field_filter_category' => $start_inventories_preowned_field_filter_category,
        '_start_inventories_preowned_field_filter_category_name' => '#' . $start_inventories_preowned_field_filter_category,
        '_start_inventories_preowned_field_filter_brands' => $start_inventories_preowned_field_filter_brands,
        '_start_inventories_preowned_field_filter_brands_name' => '#' . $start_inventories_preowned_field_filter_brands,
        '_start_inventories_preowned_field_filter_models' => $start_inventories_preowned_field_filter_models,
        '_start_inventories_preowned_field_filter_models_name' => '#' . $start_inventories_preowned_field_filter_models,
        'div_recurrent_start_fields_filters' => '#panel-filters-cateogories',
        // SELEC CATEGORY
        'select_fil_category' => '#select-fil-category',
        // SELECT BRANDS
        'select_fil_brands' => '#select-fil-brands',
        // SELECT MODELS
        'select_fil_models' => '#select-fil-models',
        // VIEWS RESULT LIST
        'div_recurrent_start_views_result_list' => '#content-start-views-results-list',

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
        'goBack_breadcrumb_agencies_preowned' => '#go-back-agencies-preowned',
        'filter_breadcrumb_blog_agencie' => '#filter-blog-agencie',
        'filter_breadcrumb_blog_post' => '#filter-blog-post',
        // VALIDATION
        'validate_required' => '.validate-required',
    );
}
