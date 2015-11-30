$(document).ready(function() {
    /* ------------------------------------------------------ *\
     [METHOS Control] Serialize Form
    \* ------------------------------------------------------ */
        //This method change a form into a JSON
        $.fn.serializeFormJSON = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
    /* ------------------------------------------------------ *\
     [METHOS Control] Currency Format
    \* ------------------------------------------------------ */
        Number.prototype.format = function(n, x) {
            var re = '(\\d)(?=(\\d{' + (x || 3) + '}) + ' + (n > 0 ? '\\.' : '$') + ')';
            return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
        };
    /* ------------------------------------------------------ *\
        EVENT CONTROL
    \* ------------------------------------------------------ */
    // BACK TO TOP
    $(domEl.recurrent_body).on('click', domEl._back_to_top, backToTopMethod.backToTop);
    // NAVBAR
    $(domEl.recurrent_body).on('click', domEl._menu_toogle, mobile_menu_methods.mobile_menu_toggle);
    // MBILE MENU TOGGLE
    $(domEl.recurrent_body).on('click', domEl._menu_toogle_close, mobile_menu_methods.close_menu_toggle);
    // FORM NEWSLETTER
    $(domEl.recurrent_body).on('focusout', domEl.validate_required, validateMethods.validate_input);
});
