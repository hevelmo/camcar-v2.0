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
            viewSectionWelcomeHomeMethods.viewWelcomeHome();
        },
        unload: function(bindings) {
            section = "";
            CAMIN.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethods.removeRecurrents();
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
            viewSectionWelcomeAgreementMethods.viewSectionWelcomeAgreement();
        },
        unload: function(bindings) {
            section = "";
            CAMIN.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethods.removeRecurrents();
        }
    });
Finch.listen();
