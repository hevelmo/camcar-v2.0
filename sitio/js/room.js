/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            section = "home";
            // Add favicon
            window.onload = favicon.load_favicon();
        },
        load: function(bindings) {
            viewSectionHomeMethod.viewSectionHome();
            sticky_wrapper_methods.sticky_wrapper();
            agentsMap.loadAgentsMap();
            agentsMap.loadAgentsMap();
            animatedMethods.animated();
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
