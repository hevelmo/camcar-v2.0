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
            loadTemplatesMethods.loadTemplateHome();
        },
        unload: function(bindings) {
            section = "";
            CAMIN.setHTML(domEl.div_recurren, '');
            cleanStylesMethod.cleanStylesWelcome();
        }
    });
Finch.listen();
