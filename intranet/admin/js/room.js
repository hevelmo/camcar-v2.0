/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
        },
        load: function(bindings) {
        },
        unload: function(bindings) {
            CAMADM.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
