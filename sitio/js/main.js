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
    $(domEl.body_recurrent).on('click', domEl._back_to_top, backToTopMethod.backToTop);
    // NAVBAR
    $(domEl.navbar_recurrent).on('click', domEl._menu_toogle, mobile_menu_methods.mobile_menu_toggle);
    // MOBILE MENU TOGGLE
    $(domEl.navbar_recurrent).on('click', domEl._menu_toogle_close, mobile_menu_methods.close_menu_toggle);
    // CLICK GO SECTION
    $(domEl.navbar_recurrent).on('click', domEl.goSection_index, clikGoMethods.clikGo_home);
    $(domEl.navbar_recurrent).on('click', domEl.goSection_agencies_news, clikGoMethods.clikGo_agencies_news);
    $(domEl.navbar_recurrent).on('click', domEl.goSection_agencies_preowned, clikGoMethods.clickGo_agencies_preowned);
    $(domEl.navbar_recurrent).on('click', domEl.goSection_inventories_preowned, clikGoMethods.clickGo_inventories_preowned);
    $(domEl.navbar_recurrent).on('click', domEl.goSection_workshop, clikGoMethods.clickGo_workshop);
    $(domEl.navbar_recurrent).on('click', domEl.goSection_rental, clikGoMethods.clickGo_rental);
    $(domEl.navbar_recurrent).on('click', domEl.goSection_blog, clikGoMethods.clickGo_blog);
    $(domEl.navbar_recurrent).on('click', domEl.goSection_about_us, clikGoMethods.clickGo_about_us);
    // LOGO
    $(domEl.navbar_recurrent).on('click', domEl.goSection_index_logo_resp, clikGoMethods.clikGo_home);
    $(domEl.navbar_recurrent).on('click', domEl.goSection_index_logo, clikGoMethods.clikGo_home);
    // FULLWIDTH FEATURES CLICK GO SECTION
    $(domEl.div_recurrent).on('click', domEl.goSection_fullwidth_features_inventories_preowned, clikGoMethods.clickGo_inventories_preowned);
    $(domEl.div_recurrent).on('click', domEl.goSection_fullwidth_features_workshop, clikGoMethods.clickGo_workshop);
    $(domEl.div_recurrent).on('click', domEl.goSection_fullwidth_features_rental, clikGoMethods.clickGo_rental);
    // OUR BRANDS CLICK GO SECTION
    $(domEl.div_recurrent).on('click', domEl.goSection_ourBrand_agencies_news, clikGoMethods.clikGo_agencies_news);
    $(domEl.div_recurrent).on('click', domEl.goSection_ourBrand_agencies_preowned, clikGoMethods.clickGo_agencies_preowned);
    $(domEl.div_recurrent).on('click', domEl.goSection_ourBrand_whorkshop, clikGoMethods.clickGo_workshop);
    $(domEl.div_recurrent).on('click', domEl.goSection_ourBrand_rental, clikGoMethods.clickGo_rental);
    // FORM NEWSLETTER
    $(domEl.body_recurrent).on('focusout', domEl.validate_required, validateMethods.validate_input);
});
