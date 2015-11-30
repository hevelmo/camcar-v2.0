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
            viewSectionHomeMethod.viewSectionHome();
            animatedMethods.animated();
            agentsMap.loadAgentsMap();
            agentsMap.loadAgentsMap();
            // MOBILE MENU
            $(window).resize(mobile_menu_methods.has_menu_toggle);

            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
