/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "home";
        	Breakpoints();
        	Site.run();
        },
        load: function(bindings) {
        	loadTemplatesMethods.loadTemplateHome();
        },
        unload: function(bindings) {
            section = "";
            CAMIN.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
