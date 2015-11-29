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
            animatedMethods.animated();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
