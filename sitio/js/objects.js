var domEl, tempsNames, urlsApi;
domEl = {
	"_back_to_top":".back-to-top",
	"_menu_toogle":"#menu-toggle",
	"_menu_toogle_close":".menu-toggle-close",
	"_start_agencies_news_address":"content-start-agencies-news-address",
	"_start_agencies_news_address_name":"#content-start-agencies-news-address",
	"_start_agencies_news_content_body":"content-start-agencies-news-body-main",
	"_start_agencies_news_content_body_name":"#content-start-agencies-news-body-main",
	"_start_agencies_news_fachada":"content-start-agencies-news-fachada",
	"_start_agencies_news_fachada_name":"#content-start-agencies-news-fachada",
	"_start_agencies_news_large_pad_brands":"content-start-agencies-news-large-pad-brands",
	"_start_agencies_news_large_pad_brands_name":"#content-start-agencies-news-large-pad-brands",
	"_start_agencies_news_map":"content-start-agencies-news-map",
	"_start_agencies_news_map_name":"#content-start-agencies-news-map",
	"_start_agencies_news_midpadding_work":"content-start-agencies-news-midpadding-work",
	"_start_agencies_news_midpadding_work_name":"#content-start-agencies-news-midpadding-work",
	"_start_agencies_news_video_strip":"content-start-agencies-news-video-strip-agencie",
	"_start_agencies_news_video_strip_name":"#content-start-agencies-news-video-strip-agencie",
	"_start_agencies_preowned_content_address":"content-start-container-address",
	"_start_agencies_preowned_content_address_name":"#content-start-container-address",
	"_start_agencies_preowned_content_body":"content-start-agencies-preowned-body-main",
	"_start_agencies_preowned_content_body_name":"#content-start-agencies-preowned-body-main",
	"_start_agencies_preowned_content_fachada":"content-start-container-fachada",
	"_start_agencies_preowned_content_fachada_name":"#content-start-container-fachada",
	"_start_agencies_preowned_content_map":"content-start-container-map",
	"_start_agencies_preowned_content_map_name":"#content-start-container-map",
	"_start_agencies_preowned_section_tabs":"content-start-agencies-preowned-section-tabs",
	"_start_agencies_preowned_section_tabs_name":"#content-start-agencies-preowned-section-tabs",
	"_start_agencies_preowned_small_screen":"content-start-agencies-preowned-small-screen",
	"_start_agencies_preowned_small_screen_name":"#content-start-agencies-preowned-small-screen",
	"_start_agencies_preowned_tab_content_by_agencie":"content-start-tab-container-by-agencie",
	"_start_agencies_preowned_tab_content_by_agencie_name":"#content-start-tab-container-by-agencie",
	"_start_agencies_trucks_address":"content-start-agencies-trucks-address",
	"_start_agencies_trucks_address_name":"#content-start-agencies-trucks-address",
	"_start_agencies_trucks_content_body":"content-start-agencies-trucks-body-main",
	"_start_agencies_trucks_content_body_name":"#content-start-agencies-trucks-body-main",
	"_start_agencies_trucks_fachada":"content-start-agencies-trucks-fachada",
	"_start_agencies_trucks_fachada_name":"#content-start-agencies-trucks-fachada",
	"_start_agencies_trucks_large_pad_brands":"content-start-agencies-trucks-large-pad-brands",
	"_start_agencies_trucks_large_pad_brands_name":"#content-start-agencies-trucks-large-pad-brands",
	"_start_agencies_trucks_map":"content-start-agencies-trucks-map",
	"_start_agencies_trucks_map_name":"#content-start-agencies-trucks-map",
	"_start_agencies_trucks_midpadding_work":"content-start-agencies-trucks-midpadding-work",
	"_start_agencies_trucks_midpadding_work_name":"#content-start-agencies-trucks-midpadding-work",
	"_start_article_wrapper":"content-article-wrapper",
	"_start_article_wrapper_name":"#content-article-wrapper",
	"_start_body_content_main":"content-start-body-main",
	"_start_body_content_main_name":"#content-start-body-main",
	"_start_contact_main":"content-start-contact-main",
	"_start_contact_main_name":"#content-start-contact-main",
	"_start_dealer_search_map":"content-start-dealer-search-map",
	"_start_dealer_search_map_name":"#content-start-dealer-search-map",
	"_start_duplicatable_table":"content-start-duplicatable-table",
	"_start_duplicatable_table_name":"#content-start-duplicatable-table",
	"_start_flexslider":"content-flexslider",
	"_start_flexslider_name":"#content-flexslider",
	"_start_full_width_features":"content-start-full-width-features",
	"_start_full_width_features_name":"#content-start-full-width-features",
	"_start_hero_carousel":"content-start-hero-carousel",
	"_start_hero_carousel_name":"#content-start-hero-carousel",
	"_start_inventories_preowned_action_bar":"content-start-inventories-preowned-action-bar",
	"_start_inventories_preowned_action_bar_name":"#content-start-inventories-preowned-action-bar",
	"_start_inventories_preowned_field_filter_brands":"content-start-inventories-preowned-field-filter-brands",
	"_start_inventories_preowned_field_filter_brands_name":"#content-start-inventories-preowned-field-filter-brands",
	"_start_inventories_preowned_field_filter_category":"content-start-inventories-preowned-field-filter-category",
	"_start_inventories_preowned_field_filter_category_name":"#content-start-inventories-preowned-field-filter-category",
	"_start_inventories_preowned_field_filter_models":"content-start-inventories-preowned-field-filter-models",
	"_start_inventories_preowned_field_filter_models_name":"#content-start-inventories-preowned-field-filter-models",
	"_start_inventories_preowned_filter_section":"content-start-inventories-preowned-filter-section",
	"_start_inventories_preowned_filter_section_name":"#content-start-inventories-preowned-filter-section",
	"_start_large_pad_contact_form":"content-start-large-pag-contact-form",
	"_start_large_pad_contact_form_name":"#content-start-large-pag-contact-form",
	"_start_large_pad_feature_list":"content-start-large-pag-feature-list",
	"_start_large_pad_feature_list_name":"#content-start-large-pag-feature-list",
	"_start_large_pad_group_counter":"content-start-large-pad-group-counter",
	"_start_large_pad_group_counter_name":"#content-start-large-pad-group-counter",
	"_start_large_pad_job_opportunities":"content-start-large-pad-job-opportunities",
	"_start_large_pad_job_opportunities_name":"#content-start-large-pad-job-opportunities",
	"_start_large_pad_land_mark":"content-start-large-pag-land-mark",
	"_start_large_pad_land_mark_name":"#content-start-large-pag-land-mark",
	"_start_large_pad_our_brands":"content-start-large-pad-our-brands",
	"_start_large_pad_our_brands_name":"#content-start-large-pad-our-brands",
	"_start_rental_content_agencies":"content-start-rental-agencies",
	"_start_rental_content_agencies_name":"#content-start-rental-agencies",
	"_start_rental_content_body":"content-start-rental-body-main",
	"_start_rental_content_body_name":"#content-start-rental-body-main",
	"_start_scroll_down":"hero-slider-scroll-down",
	"_start_scroll_down_name":"#hero-slider-scroll-down",
	"_start_section_hero_slider":"content-start-hero-slider",
	"_start_section_hero_slider_name":"#content-start-hero-slider",
	"_start_section_separator":"content-section-separator",
	"_start_section_separator_name":"#content-section-separator",
	"_start_site_navbar":"content-start-site-navbar",
	"_start_site_navbar_name":"#content-start-site-navbar",
	"_start_utility_bar_breadcrumb":"content-start-utility-bar-breadcrumb",
	"_start_utility_bar_breadcrumb_name":"#content-start-utility-bar-breadcrumb",
	"_start_workshop_content_agencies":"content-start-workshop-agencies",
	"_start_workshop_content_agencies_name":"#content-start-workshop-agencies",
	"_start_workshop_content_body":"content-start-workshop-body-main",
	"_start_workshop_content_body_name":"#content-start-workshop-body-main",
	"_start_workshop_content_brand":"content-start-workshop-brand",
	"_start_workshop_content_brand_name":"#content-start-workshop-brand",
	"action_go_agencie_news":"a.go-action-agencie-news",
	"action_go_agencie_news_id":"a#go-action-agencie-news-",
	"action_go_agencie_preowned":"a.go-action-agencie-preowned",
	"action_go_agencie_preowned_id":"a#go-action-agencie-preowned-",
	"action_go_agencie_trucks":"a.go-action-agencie-trucks",
	"action_go_agencie_trucks_id":"a#go-action-agencie-trucks-",
	"action_new_agn":".action-new-agn",
	"action_preowned_agn":".action-preowned-agn",
	"action_truck_agn":".action-truck-agn",
	"body_recurrent":"body",
	"button_search_filters":"#Search-Filters",
	"button_search_tabs":"#Search-tabs",
	"button_sem_search_action":"a.sem-search-action",
	"button_sem_search_action_id":"a#sem-search-action-",
	"button_show_agencies_tabs":"#Show-Agencies-Tabs",
	"button_show_filters":"#Show-Filters",
	"div_hidden_inputs_session":"div#hidden-inputs-session",
	"div_hidden_inputs_temporal":"div#hidden-inputs-temporal",
	"div_recurrent":"div#content-temporal-interactive",
	"div_recurrent_blog_galery":"#content-section-blog-galery",
	"div_recurrent_content_input_file":"#content_custom_file_upluad",
	"div_recurrent_content_job_opportunities":"#content-form-job-opportunities",
	"div_recurrent_corousel_vehicles":"#content_carousel_vehicles",
	"div_recurrent_form_contact":"#container-form-contact",
	"div_recurrent_form_contact_by_model":"#content_form_contact_by_model",
	"div_recurrent_start_fields_filters":"#panel-filters-cateogories",
	"div_recurrent_start_small_screen_filters":"#small-screen-filters",
	"div_recurrent_start_views_result_list":"#content-start-views-results-list",
	"div_recurrent_table_specifications":"#content_specifications",
	"div_recurrent_vehicle_slider_details":"#content-vehicle-slider-details",
	"div_recurrent_wrapper_map":"#content_wrapper_map",
	"email_from":"#email-from",
	"filter_breadcrumb_blog_agencie":"#filter-blog-agencie",
	"filter_breadcrumb_blog_post":"#filter-blog-post",
	"form_cam_form_contact_main":"#cam-form-contact-main",
	"form_error":".form-error",
	"form_job_opportunities":"#form-job-opportunities",
	"form_loader":".form-loader",
	"form_recurrent_contact_by_model_pre_owned":"#form_sem_premium_contact_by_model",
	"form_thanks":".form-thanks",
	"form_wrapper":"#form-wrapper",
	"goBack_breadcrumb_agencies_preowned":"#go-back-agencies-preowned",
	"goBack_breadcrumb_blog":"#go-back-blog",
	"goSection_about_us":"#go-about-us",
	"goSection_agencies_news":"#go-agencies-news",
	"goSection_agencies_preowned":"#go-agencies-preowned",
	"goSection_agencies_trucks":"#go-agencies-trucks",
	"goSection_blog":"#go-blog",
	"goSection_blog_by_news":"#go-blog-item-by-news",
	"goSection_breadcrumb_blog":"#go-breadcrumb-blog",
	"goSection_breadcrumb_home":"#go-breadcrumb-home",
	"goSection_contact":"#go-contact",
	"goSection_fullwidth_features_inventories_preowned":"#fullwidth-features-go-inventories-preowned",
	"goSection_fullwidth_features_rental":"#fullwidth-features-go-rental",
	"goSection_fullwidth_features_workshop":"#fullwidth-features-go-workshop",
	"goSection_index":"#go-index",
	"goSection_index_logo":"#go-home-logo",
	"goSection_index_logo_resp":"#go-home-logo-resp",
	"goSection_inventories_preowned":"#go-inventories-preowned",
	"goSection_job_opportunities":"#go-job-opportunities",
	"goSection_ourBrand_agencies_news":".act-agn-nuevo",
	"goSection_ourBrand_agencies_preowned":".act-agn-seminuevo",
	"goSection_ourBrand_rental":".act-agn-rentas",
	"goSection_ourBrand_whorkshop":".act-agn-taller",
	"goSection_privacy_notice":"#go-section-privacy-notice",
	"goSection_rental":"#go-rental",
	"goSection_workshop":"#go-workshop",
	"head_recurrent":"head",
	"hero_slider_recurrent":"#start-site-hero-slider",
	"ide_return_button":"#back",
	"input_cam_contact_main_email":"#cam-contact-main-email",
	"input_cam_contact_main_message":"#cam-contact-main-message",
	"input_cam_contact_main_name":"#cam-contact-main-name",
	"input_contact_by_model_pre_owned_email":"#sem_premium_by_model_contact_email",
	"input_contact_by_model_pre_owned_message":"#sem_premium_by_model_contact_message",
	"input_contact_by_model_pre_owned_name":"#sem_premium_by_model_contact_name",
	"input_contact_by_model_pre_owned_phone":"#sem_premium_by_model_contact_phone",
	"input_current_hidden_agen_news_name":"input#hidden_agen_news_name",
	"input_current_hidden_agen_pre_owned_id":"input#hidden_agen_pre_owned_id",
	"input_current_hidden_agen_pre_owned_name":"input#hidden_agen_pre_owned_name",
	"input_current_hidden_category":"input#hidden_category",
	"input_current_hidden_marc":"input#hidden_marc",
	"input_current_hidden_model":"input#hidden_model",
	"input_file_job_opportunities_upload_file":"input[type=file]#job_opportunities_upload_file",
	"input_hidden_mapa":"input#hidden_mapa",
	"input_job_opportunities_concessionary":"#job_opportunities_concessionary",
	"input_job_opportunities_date":"#job_opportunities_date",
	"input_job_opportunities_email":"#job_opportunities_email",
	"input_job_opportunities_file_content":"#job_opportunities_file_content",
	"input_job_opportunities_file_name":"#job_opportunities_file_name",
	"input_job_opportunities_first_name":"#job_opportunities_first_name",
	"input_job_opportunities_last_name":"#job_opportunities_last_name",
	"input_job_opportunities_logo":"#job_opportunities_logo",
	"input_job_opportunities_message":"#job_opportunities_message",
	"input_job_opportunities_mime":"#job_opportunities_mime",
	"input_job_opportunities_phone":"#job_opportunities_phone",
	"li_agencies":".agencia",
	"link_sem_action":"a.sem-action",
	"link_sem_action_id":"a#sem-action-",
	"navbar_recurrent":"#start-site-header",
	"scroll_down":"#hero-slider-scroll-down",
	"select_fil_brands":"#select-fil-brands",
	"select_fil_category":"#select-fil-category",
	"select_fil_models":"#select-fil-models",
	"select_filter_action_cat":"select.filter-action-cat",
	"select_filter_action_cat_id":"select#filter-action-cat-",
	"select_filter_action_mdo":"select.filter-action-mdo",
	"select_filter_action_mdo_id":"select#filter-action-mdo-",
	"select_filter_action_mrc":"select.filter-action-mrc",
	"select_filter_action_mrc_id":"select#filter-action-mrc-",
	"send_btn_job_opportunities":"#job_opportunities_send",
	"send_cam_contact_main_send":"#cam-contact-main-send",
	"send_contact_by_model_pre_owned":"#sem_premium_contact_send_by_model",
	"validate_required":".validate-required"
};
tempsNames = {
	"recurrent_about_us_start_duplicatable_content":"tmp_section_about_us_start_duplicatable_content",
	"recurrent_about_us_start_hero_slider":"tmp_section_about_us_start_hero_slider",
	"recurrent_about_us_start_input_file_upload":"tmp_section_about_us_start_input_file_upload",
	"recurrent_about_us_start_jop_opportunities":"tmp_section_about_us_start_jop_opportunities",
	"recurrent_about_us_start_large_pad":"tmp_section_about_us_start_large_pad",
	"recurrent_about_us_start_large_pad_feature_list":"tmp_section_about_us_start_large_pad_feature_list",
	"recurrent_aboutus_start_contact_main":"tmp_section_aboutus_start_contact_main",
	"recurrent_aboutus_start_form_contact_main":"tmp_section_aboutus_start_form_contact_main",
	"recurrent_aboutus_start_large_pad_contact_form":"tmp_section_aboutus_start_large_pad_contact_form",
	"recurrent_aboutus_start_large_pad_feature_list":"tmp_section_aboutus_start_large_pad_feature_list",
	"recurrent_aboutus_start_large_pad_land_mark":"tmp_section_aboutus_start_large_pad_land_mark",
	"recurrent_aboutus_start_utility_bar_breadcrumb":"tmp_section_aboutus_start_utility_bar_breadcrumb",
	"recurrent_agencies_news_by_agencies_start_utility_bar_breadcrumb":"tmp_section_agencies_news_by_agencies_start_utility_bar_breadcrumb",
	"recurrent_agencies_news_by_agencies_video_strip_agencies":"tmp_section_agencies_news_by_agencies_video_strip_agencies",
	"recurrent_agencies_news_by_sub_agencies_start_utility_bar_breadcrumb":"tmp_section_agencies_news_by_subagencies_start_utility_bar_breadcrumb",
	"recurrent_agencies_news_start_address":"tmp_section_agencies_news_address",
	"recurrent_agencies_news_start_categories":"tmp_section_agencies_news_start_categories",
	"recurrent_agencies_news_start_fachada":"tmp_section_agencies_news_fachada",
	"recurrent_agencies_news_start_large_pad_brands":"tmp_section_agencies_news_start_large_pad_brands",
	"recurrent_agencies_news_start_large_pad_land_mark":"tmp_section_agencies_news_start_large_pad_land_mark",
	"recurrent_agencies_news_start_map":"tmp_section_agencies_news_map",
	"recurrent_agencies_news_start_utility_bar_breadcrumb":"tmp_section_agencies_news_start_utility_bar_breadcrumb",
	"recurrent_agencies_preowned_by_agencie_start_utility_bar_breadcreumb":"tmp_section_agencies_preowned_by_agencie_start_utility_bar_breadcreumb",
	"recurrent_agencies_preowned_start_address":"tmp_section_agencies_preowned_start_address",
	"recurrent_agencies_preowned_start_fachada":"tmp_section_agencies_preowned_start_fachada",
	"recurrent_agencies_preowned_start_large_pad_land_mark":"tmp_section_agencies_preowned_start_large_pad_land_mark",
	"recurrent_agencies_preowned_start_large_pad_small_screen":"tmp_section_agencies_preowned_start_large_pad_small_screen",
	"recurrent_agencies_preowned_start_map":"tmp_section_agencies_preowned_start_map",
	"recurrent_agencies_preowned_start_tabs_agencies":"tmp_section_agencies_preowned_start_tabs_agencies",
	"recurrent_agencies_preowned_start_utility_bar_breadcrumb":"tmp_section_agencies_preowned_start_utility_bar_breadcreumb",
	"recurrent_agencies_trucks_by_agencies_start_utility_bar_breadcrumb":"tmp_section_agencies_trucks_by_agencies_start_utility_bar_breadcrumb",
	"recurrent_agencies_trucks_by_sub_agencies_start_utility_bar_breadcrumb":"tmp_section_agencies_trucks_by_subagencies_start_utility_bar_breadcrumb",
	"recurrent_agencies_trucks_start_address":"tmp_section_agencies_trucks_address",
	"recurrent_agencies_trucks_start_categories":"tmp_section_agencies_trucks_start_categories",
	"recurrent_agencies_trucks_start_fachada":"tmp_section_agencies_trucks_fachada",
	"recurrent_agencies_trucks_start_large_pad_brands":"tmp_section_agencies_trucks_start_large_pad_brands",
	"recurrent_agencies_trucks_start_large_pad_land_mark":"tmp_section_agencies_trucks_start_large_pad_land_mark",
	"recurrent_agencies_trucks_start_map":"tmp_section_agencies_trucks_map",
	"recurrent_agencies_trucks_start_utility_bar_breadcrumb":"tmp_section_agencies_trucks_start_utility_bar_breadcrumb",
	"recurrent_blog_by_news_start_single_post":"tmp_section_blog_by_news_start_single_post",
	"recurrent_blog_by_news_start_single_post_galery":"tmp_section_blog_by_news_start_single_post_galery",
	"recurrent_blog_by_news_start_utility_bar_breadcrumb":"tmp_section_blog_by_news_start_utility_bar_breadcrumb",
	"recurrent_blog_news_start_grid_holder":"tmp_section_blog_news_start_grid_holder",
	"recurrent_blog_news_start_utility_bar_breadcrumb":"tmp_section_blog_news_start_utility_bar_breadcrumb",
	"recurrent_contact_start_contact_main":"tmp_section_contact_start_contact_main",
	"recurrent_contact_start_form_contact_main":"tmp_section_contact_start_form_contact_main",
	"recurrent_contact_start_large_pad_contact_form":"tmp_section_contact_start_large_pad_contact_form",
	"recurrent_contact_start_large_pad_feature_list":"tmp_section_contact_start_large_pad_feature_list",
	"recurrent_contact_start_large_pad_land_mark":"tmp_section_contact_start_large_pad_land_mark",
	"recurrent_contact_start_utility_bar_breadcrumb":"tmp_section_contact_start_utility_bar_breadcrumb",
	"recurrent_home_dealer_search_gmap":"tmp_section_home_dealer_search_gmap",
	"recurrent_home_full_width_features":"tmp_section_home_full_width_features",
	"recurrent_home_group_counter":"tmp_section_home_group_counter",
	"recurrent_home_hero_slide_carousel":"tmp_section_home_hero_slide_carousel",
	"recurrent_home_our_brands":"tmp_section_home_our_brands",
	"recurrent_inventories_preowned_details_carousel_vehicles":"tmp_section_inventories_preowned_details_carousel_vehicles",
	"recurrent_inventories_preowned_details_formsem_contact_by_model":"tmp_section_inventories_preowned_details_formsem_contact_by_model",
	"recurrent_inventories_preowned_details_single_vehicle_details":"tmp_section_inventories_preowned_details_single_vehicle_details",
	"recurrent_inventories_preowned_details_start_utility_bar_breadcreumb":"tmp_section_inventories_preowned_details_start_utility_bar_breadcreumb",
	"recurrent_inventories_preowned_details_table_striped_specification":"tmp_section_inventories_preowned_details_table_striped_specification",
	"recurrent_inventories_preowned_detalis_vehicle_slider_details":"tmp_section_inventories_preowned_detalis_vehicle_slider_details",
	"recurrent_inventories_preowned_detalis_wrapper_map":"tmp_section_inventories_preowned_detalis_wrapper_map",
	"recurrent_inventories_preowned_listing_results":"tmp_section_inventories_preowned_listing_results",
	"recurrent_inventories_preowned_select_filter_brands":"tmp_section_inventories_preowned_select_filter_brands",
	"recurrent_inventories_preowned_select_filter_category":"tmp_section_inventories_preowned_select_filter_category",
	"recurrent_inventories_preowned_select_filter_models":"tmp_section_inventories_preowned_select_filter_models",
	"recurrent_inventories_preowned_start_action_bar":"tmp_section_inventories_preowned_start_action_bar",
	"recurrent_inventories_preowned_start_panel_filters":"tmp_section_inventories_preowned_start_panel_filters",
	"recurrent_inventories_preowned_start_utility_bar_breadcreumb":"tmp_section_inventories_preowned_start_utility_bar_breadcreumb",
	"recurrent_inventories_preowned_views_results_list":"tmp_section_inventories_preowned_views_results_list",
	"recurrent_job_opportunities_content_form":"tmp_section_job_opportunities_content_form",
	"recurrent_privacy_notice_start_article_wrapper":"tmp_section_privacy_notice_start_article_wrapper",
	"recurrent_privacy_notice_start_utility_bar_breadcreumb":"tmp_section_privacy_notice_start_utility_bar_breadcrumb",
	"recurrent_rental_start_image_block":"tmp_section_rental_start_image_block",
	"recurrent_rental_start_large_pad_land_mark":"tmp_section_rental_start_large_pad_land_mark",
	"recurrent_rental_start_utility_bar_breadcrumb":"tmp_section_rental_start_utility_bar_breadcrumb",
	"recurrent_start_scroll_down":"tmp_scroll_down",
	"recurrent_start_site_navbar":"tmp_start_site_navbar",
	"recurrent_workshop_start_image_block":"tmp_section_workshop_start_image_block",
	"recurrent_workshop_start_large_pad_brand":"tmp_section_workshop_start_large_pad_brand",
	"recurrent_workshop_start_large_pad_land_mark":"tmp_section_workshop_start_large_pad_land_mark",
	"recurrent_workshop_start_utility_bar_breadcrumb":"tmp_section_workshop_start_utility_bar_breadcrumb"
};
urlsApi = {
	"getAgenciesNews":"api/v15/get/agencia/nuevos",
	"getAgenciesNewsAddress":"api/v15/get/agencia/nuevos/direccion",
	"getAgenciesNewsByAgencie":"api/v15/get/agencia/nuevos/",
	"getAgenciesNewsByMap":"api/v15/get/agencia/nuevos/mapas/",
	"getAgenciesNewsByTypeAgencie":"api/v15/get/agencia/nuevos/principal/",
	"getAgenciesNewsFachada":"api/v15/get/agencia/nuevos/fachada",
	"getAgenciesNewsMap":"api/v15/get/agencia/nuevos/mapa",
	"getAgenciesNewsPrincipales":"api/v15/get/agencia/nuevos",
	"getAgenciesNewsPrincipalesByAgencia":"api/v15/get/agencias/nuevos/",
	"getAgenciesPreOwned":"api/v15/get/agencia/seminuevos",
	"getAgenciesPreOwnedByAgencie":"api/v15/get/agencia/seminuevos/",
	"getAgenciesPreOwnedByMap":"api/v15/get/agencia/seminuevos/mapas/",
	"getAgenciesTrucks":"api/v15/get/agencia/camiones",
	"getAgenciesTrucksAddress":"api/v15/get/agencia/camiones/direccion",
	"getAgenciesTrucksByAgencie":"api/v15/get/agencia/camiones/",
	"getAgenciesTrucksByMap":"api/v15/get/agencia/camiones/mapas/",
	"getAgenciesTrucksByTypeAgencie":"api/v15/get/agencia/camiones/principal/",
	"getAgenciesTrucksFachada":"api/v15/get/agencia/camiones/fachada",
	"getAgenciesTrucksMap":"api/v15/get/agencia/camiones/mapa",
	"getAgenciesTrucksPrincipales":"api/v15/get/agencia/camiones",
	"getAgenciesTrucksPrincipalesByAgencia":"api/v15/get/agencias/camiones/",
	"getAgentsMapAgencies":"api/v15/get/agencias/mapa",
	"getBanners":"api/v15/get/banners",
	"getBlog":"api/v15/get/blog",
	"getBlogByPost":"api/v15/get/blog/noticia/",
	"getBrandsLogos":"api/v15/get/agencia/nuevos/marcas/logotipos",
	"getCatalogoByMarc":"api/v15/get/catalogo/marcas/",
	"getCategory":"api/v15/get/categoria",
	"getCategoryByMarc":"api/v15/get/categoria/marcas/",
	"getCategoryModelsByCategoryByMarc":"api/v15/get/categoria/modelos/",
	"getGroupCounter":"api/v15/get/grupo/camcar",
	"getLogosAgenciesNews":"api/v15/get/logos/agencia/nuevos",
	"getLogosAgenciesTrucks":"api/v15/get/logos/agencia/camiones",
	"getMapa":"api/v15/get/mapa/seminuevo",
	"getMapaById":"api/v15/get/mapa/seminuevo/",
	"getPictures":"api/v15/get/pictures/seminuevo",
	"getPicturesById":"api/v15/get/pictures/seminuevo/",
	"getRental":"api/v15/get/rentas/",
	"getSeminuevos":"api/v15/get/seminuevos",
	"getSeminuevosByFilter":"api/v15/get/seminuevos/filtros/",
	"getSeminuevosById":"api/v15/get/seminuevos/",
	"getWorkshop":"api/v15/get/talleres",
	"getWorkshopBrands":"api/v15/get/talleres/logos",
	"postJobOpportunities":"api/v15/post/bolsa-de-trabajo",
	"post_form_contact_main":"api/v15/contacto",
	"post_form_contact_main_by_model":"api/v15/contacto/modelo"
};
