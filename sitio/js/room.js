/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            section = "home";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewSectionMethod.recurrentNavbar();
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            sticky_wrapper_methods.sticky_wrapper();
            currentSectionMethod.currentSection_home();

            viewSectionMethod.recurrentSecionHome();

            CAM.loadTemplate(tempsNames.recurrent_home_hero_slide_carousel, domEl._start_hero_carousel_name);
            windowWidthMethod.windowWidth();

            viewSectionMethod.loadTemplatesOurBrands();
            CAM.loadTemplate(tempsNames.recurrent_home_group_counter, domEl._start_large_pad_group_counter_name);
            CAM.loadTemplate(tempsNames.recurrent_home_full_width_features, domEl._start_full_width_features_name);
            animatedMethods.animated();

            CAM.loadTemplate(tempsNames.recurrent_home_dealer_search_gmap, domEl._start_dealer_search_map_name);
            agentsMap.loadAgentsMap();
            agentsMap.loadAgentsMap();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] AGENCIES NEWS
\* ----------------------------------- */
    Finch.route('/agencias/nuevos/:agn_name_agencia/:agn_url/:agn_id', {
        setup: function(bindings) {
            var agn_name, agn_url, agn_id;
            agn_name = bindings.agn_name_agencia;
            agn_url = bindings.agn_url;
            agn_id = bindings.agn_id;
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();

            // GOOGLE ANALYTICS
            if ( agn_name === undefined && agn_url === undefined && agn_id === undefined ) {
                ga('send', 'pageview', '/agencias/nuevos');
            } else if ( agn_name !== undefined && agn_url === undefined && agn_id === undefined ) {
                ga('send', 'pageview', '/agencias/nuevos/' + bindings.agn_name);
            } else if ( agn_name !== undefined && agn_url !== undefined && agn_id !== undefined ) {
                ga('send', 'pageview', '/agencias/nuevos/' + bindings.agn_name + '/' + bindings.agn_url + '/' + agn_id);
            }
        },
        load: function(bindings) {
            var agn_name, agn_url, agn_id;

            agn_name = bindings.agn_name_agencia;
            agn_url = bindings.agn_url;
            agn_id = bindings.agn_id;

            viewSectionMethod.recurrentNavbar();
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            sticky_wrapper_methods.sticky_wrapper();
            currentSectionMethod.currentSection_agencies_news();

            // TODAS LAS AGENCIAS NUEVOS
            if ( agn_name === undefined && agn_url === undefined && agn_id === undefined ) {
                section = "agencies-news";
            }

            viewSectionMethod.recurrentSecionAgenciesNews();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] AGENCIES PREOWNED
\* ----------------------------------- */
    Finch.route('/seminuevos', {
        setup: function(bindings) {
            section = "agencies-preowned";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewSectionMethod.recurrentNavbar();
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            sticky_wrapper_methods.sticky_wrapper();
            currentSectionMethod.currentSection_agencies_preowned();

            viewSectionMethod.recurrentSecionAgenciesPreowned();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] INVENTORIES PREOWNED
\* ----------------------------------- */
    Finch.route('/seminuevos/inventarios', {
        setup: function(bindings) {
            section = "inventories-preowned";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewSectionMethod.recurrentNavbar();
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            sticky_wrapper_methods.sticky_wrapper();
            currentSectionMethod.currentSection_inventories_preowned();

            viewSectionMethod.recurrentSecionInventoriesPreowned();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] WHORKSHOP
\* ----------------------------------- */
    Finch.route('/talleres', {
        setup: function(bindings) {
            section = "workshop";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewSectionMethod.recurrentNavbar();
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            sticky_wrapper_methods.sticky_wrapper();
            currentSectionMethod.currentSection_workshop();

            viewSectionMethod.recurrentSecionWorkShop();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] RENTAL
\* ----------------------------------- */
    Finch.route('/rentas', {
        setup: function(bindings) {
            section = "rental";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewSectionMethod.recurrentNavbar();
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            sticky_wrapper_methods.sticky_wrapper();
            currentSectionMethod.currentSection_rental();

            viewSectionMethod.recurrentSecionRental();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] BLOG
\* ----------------------------------- */
    Finch.route('/noticias', {
        setup: function(bindings) {
            section = "blog";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewSectionMethod.recurrentNavbar();
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            sticky_wrapper_methods.sticky_wrapper();
            currentSectionMethod.currentSection_blog();

            viewSectionMethod.recurrentSecionBlog();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] ABOUT US
\* ----------------------------------- */
    Finch.route('/nosotros', {
        setup: function(bindings) {
            section = "about-us";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewSectionMethod.recurrentNavbar();
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            sticky_wrapper_methods.sticky_wrapper();
            currentSectionMethod.currentSection_about_us();

            viewSectionMethod.recurrentSecionAboutUs();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
Finch.listen();
