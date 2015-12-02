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
            addStylesMethod.addStylesHome();
        },
        load: function(bindings) {
            loadSiteNavigationMethods.loadSiteNavigation();
            currentSectionMethod.currentSection_home();

            viewSectionWelcomeHomeMethods.viewWelcomeHome();
        },
        unload: function(bindings) {
            section = "";
            CAMIN.setHTML(domEl.div_recurren, '');
            cleanStylesMethod.cleanStyles();
            removeRecurrentsMethods.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] CONVENIOS
\* ----------------------------------- */
    Finch.route('/convenios', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "intranet-welcome-agreement";
            Breakpoints();
            Site.run();
            addStylesMethod.addStylesAgreement();
        },
        load: function(bindings) {
            loadSiteNavigationMethods.loadSiteNavigation();
            currentSectionMethod.currentSection_agreement();

            viewSectionWelcomeAgreementMethods.viewSectionWelcomeAgreement();
        },
        unload: function(bindings) {
            section = "";
            CAMIN.setHTML(domEl.div_recurren, '');
            cleanStylesMethod.cleanStyles();
            removeRecurrentsMethods.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] CONVENIOS
\* ----------------------------------- */
    Finch.route('/directorio', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "intranet-welcome-directory";
            Breakpoints();
            Site.run();
            addStylesMethod.addStylesDirectory();
        },
        load: function(bindings) {
            loadSiteNavigationMethods.loadSiteNavigation();
            currentSectionMethod.currentSection_directory();

            viewSectionWelcomeDirectoryMethods.viewSectionWelcomeDirectory();
        },
        unload: function(bindings) {
            section = "";
            CAMIN.setHTML(domEl.div_recurren, '');
            cleanStylesMethod.cleanStyles();
            removeRecurrentsMethods.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
Finch.listen();
