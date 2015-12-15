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
	"_start_body_content_main":"content-start-body-main",
	"_start_body_content_main_name":"#content-start-body-main",
	"_start_contact_main":"content-start-contact-main",
	"_start_contact_main_name":"#content-start-contact-main",
	"_start_dealer_search_map":"content-start-dealer-search-map",
	"_start_dealer_search_map_name":"#content-start-dealer-search-map",
	"_start_flexslider":"content-flexslider",
	"_start_flexslider_name":"#content-flexslider",
	"_start_full_width_features":"content-start-full-width-features",
	"_start_full_width_features_name":"#content-start-full-width-features",
	"_start_hero_carousel":"content-start-hero-carousel",
	"_start_hero_carousel_name":"#content-start-hero-carousel",
	"_start_large_pad_contact_form":"content-start-large-pag-contact-form",
	"_start_large_pad_contact_form_name":"#content-start-large-pag-contact-form",
	"_start_large_pad_feature_list":"content-start-large-pag-feature-list",
	"_start_large_pad_feature_list_name":"#content-start-large-pag-feature-list",
	"_start_large_pad_group_counter":"content-start-large-pad-group-counter",
	"_start_large_pad_group_counter_name":"#content-start-large-pad-group-counter",
	"_start_large_pad_land_mark":"content-start-large-pag-land-mark",
	"_start_large_pad_land_mark_name":"#content-start-large-pag-land-mark",
	"_start_large_pad_our_brands":"content-start-large-pad-our-brands",
	"_start_large_pad_our_brands_name":"#content-start-large-pad-our-brands",
	"_start_rental_content_agencies":"content-start-rental-agencies",
	"_start_rental_content_agencies_name":"#content-start-rental-agencies",
	"_start_rental_content_body":"content-start-rental-body-main",
	"_start_rental_content_body_name":"#content-start-rental-body-main",
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
	"action_new_agn":".action-new-agn",
	"action_preowned_agn":".action-preowned-agn",
	"body_recurrent":"body",
	"button_search_tabs":"#Search-tabs",
	"button_show_agencies_tabs":"#Show-Agencies-Tabs",
	"div_hidden_inputs_session":"div#hidden-inputs-session",
	"div_hidden_inputs_temporal":"div#hidden-inputs-temporal",
	"div_recurrent":"div#content-temporal-interactive",
	"div_recurrent_blog_galery":"#content-section-blog-galery",
	"div_recurrent_form_contact":"#container-form-contact",
	"filter_breadcrumb_blog_agencie":"#filter-blog-agencie",
	"filter_breadcrumb_blog_post":"#filter-blog-post",
	"form_cam_form_contact_main":"#cam-form-contact-main",
	"goBack_breadcrumb_agencies_preowned":"#go-back-agencies-preowned",
	"goBack_breadcrumb_blog":"#go-back-blog",
	"goSection_about_us":"#go-about-us",
	"goSection_agencies_news":"#go-agencies-news",
	"goSection_agencies_preowned":"#go-agencies-preowned",
	"goSection_blog":"#go-blog",
	"goSection_blog_by_news":"#go-blog-item-by-news",
	"goSection_breadcrumb_blog":"#go-breadcrumb-blog",
	"goSection_breadcrumb_home":"#go-breadcrumb-home",
	"goSection_fullwidth_features_inventories_preowned":"#fullwidth-features-go-inventories-preowned",
	"goSection_fullwidth_features_rental":"#fullwidth-features-go-rental",
	"goSection_fullwidth_features_workshop":"#fullwidth-features-go-workshop",
	"goSection_index":"#go-index",
	"goSection_index_logo":"#go-home-logo",
	"goSection_index_logo_resp":"#go-home-logo-resp",
	"goSection_inventories_preowned":"#go-inventories-preowned",
	"goSection_ourBrand_agencies_news":".act-agn-nuevo",
	"goSection_ourBrand_agencies_preowned":".act-agn-seminuevo",
	"goSection_ourBrand_rental":".act-agn-rentas",
	"goSection_ourBrand_whorkshop":".act-agn-taller",
	"goSection_rental":"#go-rental",
	"goSection_workshop":"#go-workshop",
	"head_recurrent":"head",
	"input_cam_contact_main_email":"#cam-contact-main-email",
	"input_cam_contact_main_message":"#cam-contact-main-message",
	"input_cam_contact_main_name":"#cam-contact-main-name",
	"input_hidden_mapa":"input#hidden_mapa",
	"li_agencies":".agencia",
	"navbar_recurrent":"#start-site-header",
	"send_cam_contact_main_send":"#cam-contact-main-send",
	"validate_required":".validate-required"
};
tempsNames = {
	"recurrent_about_us_start_contact_main":"tmp_section_about_us_start_contact_main",
	"recurrent_about_us_start_form_contact_main":"tmp_section_about_us_start_form_contact_main",
	"recurrent_about_us_start_large_pad_contact_form":"tmp_section_about_us_start_large_pad_contact_form",
	"recurrent_about_us_start_large_pad_feature_list":"tmp_section_about_us_start_large_pad_feature_list",
	"recurrent_about_us_start_large_pad_land_mark":"tmp_section_about_us_start_large_pad_land_mark",
	"recurrent_about_us_start_utility_bar_breadcrumb":"tmp_section_about_us_start_utility_bar_breadcrumb",
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
	"recurrent_blog_by_news_start_single_post":"tmp_section_blog_by_news_start_single_post",
	"recurrent_blog_by_news_start_single_post_galery":"tmp_section_blog_by_news_start_single_post_galery",
	"recurrent_blog_by_news_start_utility_bar_breadcrumb":"tmp_section_blog_by_news_start_utility_bar_breadcrumb",
	"recurrent_blog_news_start_grid_holder":"tmp_section_blog_news_start_grid_holder",
	"recurrent_blog_news_start_utility_bar_breadcrumb":"tmp_section_blog_news_start_utility_bar_breadcrumb",
	"recurrent_home_dealer_search_gmap":"tmp_section_home_dealer_search_gmap",
	"recurrent_home_full_width_features":"tmp_section_home_full_width_features",
	"recurrent_home_group_counter":"tmp_section_home_group_counter",
	"recurrent_home_hero_slide_carousel":"tmp_section_home_hero_slide_carousel",
	"recurrent_home_our_brands":"tmp_section_home_our_brands",
	"recurrent_rental_start_image_block":"tmp_section_rental_start_image_block",
	"recurrent_rental_start_large_pad_land_mark":"tmp_section_rental_start_large_pad_land_mark",
	"recurrent_rental_start_utility_bar_breadcrumb":"tmp_section_rental_start_utility_bar_breadcrumb",
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
	"getBanners":"api/v15/get/banners",
	"getBlog":"api/v15/get/blog",
	"getBlogByPost":"api/v15/get/blog/noticia/",
	"getBrandsLogos":"api/v15/get/agencia/nuevos/marcas/logotipos",
	"getGroupCounter":"api/v15/get/grupo/camcar",
	"getLogosAgenciesNews":"api/v15/get/logos/agencia/nuevos",
	"getMapa":"api/v15/get/mapa/seminuevo",
	"getMapaById":"api/v15/get/mapa/seminuevo/",
	"getRental":"api/v15/get/rentas/",
	"getWorkshop":"api/v15/get/talleres",
	"getWorkshopBrands":"api/v15/get/talleres/logos",
	"post_form_contact_main":"api/v15/contacto"
};
