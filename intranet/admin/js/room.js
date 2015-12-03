/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
        	// Add favicon
            window.onload = favicon.load_favicon();
            section = "intranet-welcome";
        	Breakpoints();
        	Site.run();
        },
        load: function(bindings) {
        	loadSiteNavigationMethods.loadSiteNavigation();
        },
        unload: function(bindings) {
            section = "";
            CAMADM.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
