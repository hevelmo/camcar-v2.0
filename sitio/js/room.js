/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            section = "home";
            // Add favicon
            window.onload = favicon.load_favicon();
            sticky_wrapper_methods.sticky_wrapper();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            //viewSectionHomeMethod.viewSectionHome();
            viewSectionHomeMethod.recurrentSecionHome();

            CAM.loadTemplate(tempsNames.recurrent_home_hero_slide_carousel, domEl._start_hero_carousel_name);

            viewSectionHomeMethod.loadTemplatesOurBrands();

            CAM.loadTemplate(tempsNames.recurrent_home_group_counter, domEl._start_large_pad_group_counter_name);
            CAM.loadTemplate(tempsNames.recurrent_home_full_width_features, domEl._start_full_width_features_name);
            CAM.loadTemplate(tempsNames.recurrent_home_dealer_search_gmap, domEl._start_dealer_search_map_name);

            animatedMethods.animated();
            agentsMap.loadAgentsMap();
            agentsMap.loadAgentsMap();

            // MOBILE MENU
            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
            windowWidthMethod.windowWidth();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
        }
    });
/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/agencias', {
        setup: function(bindings) {
            section = "agenicies-news";
            // Add favicon
            window.onload = favicon.load_favicon();
            sticky_wrapper_methods.sticky_wrapper();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
    },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
