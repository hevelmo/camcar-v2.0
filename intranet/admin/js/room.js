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
        	addStylesMethod.addStylesNewPreowned();
        },
        load: function(bindings) {
        	loadSiteNavigationMethods.loadSiteNavigation();

        	viewSectionWelcomeNewPreownedMethods.viewSectionWelcomeNewPreowned();
        	$('.selectpicker').selectpicker();
        },
        unload: function(bindings) {
            section = "";
            CAMADM.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
