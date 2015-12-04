/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
        	// Add favicon
            window.onload = favicon.load_favicon();
            section = "intranet-adm-home";
        	Breakpoints();
        	Site.run();
        	addStylesMethod.addStylesNewPreowned();
        },
        load: function(bindings) {
        	loadSiteNavigationMethods.loadSiteNavigation();

        	viewSectionAdmNewPreownedMethods.viewSectionAdmNewPreowned();
        	$('.selectpicker').selectpicker();
        },
        unload: function(bindings) {
            section = "";
            CAMADM.setHTML(domEl.div_recurren, '');
        }
    });
/* ----------------------------------- *\
 [Route] NEW PREOWNED
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "intranet-adm-new-preowned";
            Breakpoints();
            Site.run();
            addStylesMethod.addStylesNewPreowned();
        },
        load: function(bindings) {
            loadSiteNavigationMethods.loadSiteNavigation();

            viewSectionAdmNewPreownedMethods.viewSectionAdmNewPreowned();
            $('.selectpicker').selectpicker();
        },
        unload: function(bindings) {
            section = "";
            CAMADM.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
