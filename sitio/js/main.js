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
    // BREADCRUMB HOME
    $(domEl.div_recurrent).on('click', domEl.goSection_breadcrumb_home, clikGoMethods.clikGo_home);
    // CLICK GO SECTION
    $(domEl.navbar_recurrent).on('click', domEl.goSection_index, clikGoMethods.clikGo_home);
    // AGENCIES NEWS
    $(domEl.navbar_recurrent).on('click', domEl.goSection_agencies_news, clikGoMethods.clikGo_agencies_news_principal);
    //$(domEl.navbar_recurrent).on('click', domEl.goSection_agencies_news, clikGoMethods.clikGo_agencies_news);
    $(domEl.div_recurrent).on('click', '#go-back-agencies-news', clikGoMethods.clikGo_agencies_news);
    // VIDEO STRIP
    $(domEl.div_recurrent).on('click', '.video-strip .pre-video i', video_strip_methods.video_strip_pre_video);
    $(domEl.div_recurrent).on('click', '.video-strip .close-frame', video_strip_methods.video_strip_close_frame);
    // AGENCIES NEWS SUB AGNECIES
    $(domEl.div_recurrent).on('click', domEl.action_go_agencie_news, clikGoMethods.clikGo_agencies_news_sub_agencie);
    // AGENCIES NEWS ACTION
    $(domEl.div_recurrent).on('click', domEl.action_new_agn, clikGoMethods.clikGo_agencies_news_principal);
    // AGENCIES PRE-OWNED
    $(domEl.navbar_recurrent).on('click', domEl.goSection_agencies_preowned, clikGoMethods.clickGo_agencies_preowned);
    // INVENTORIES PRE-OWNED
    $(domEl.navbar_recurrent).on('click', domEl.goSection_inventories_preowned, clikGoMethods.clickGo_inventories_preowned);
    // WORKSHOP
    $(domEl.navbar_recurrent).on('click', domEl.goSection_workshop, clikGoMethods.clickGo_workshop);
    // RENTAL
    $(domEl.navbar_recurrent).on('click', domEl.goSection_rental, clikGoMethods.clickGo_rental);
    // BLOG
    $(domEl.navbar_recurrent).on('click', domEl.goSection_blog, clikGoMethods.clickGo_blog);
    // BLOG BREADCRUMB
    $(domEl.div_recurrent).on('click', domEl.goSection_breadcrumb_blog, clikGoMethods.clickGo_blog);
    $(domEl.div_recurrent).on('click', domEl.goBack_breadcrumb_blog, clikGoMethods.clickGo_blog);
    // BLOG BY NEWS
    $(domEl.div_recurrent).on('click', domEl.goSection_blog_by_news, clikGoMethods.clickGo_blogByNotice);
    // ABOUT US
    $(domEl.navbar_recurrent).on('click', domEl.goSection_about_us, clikGoMethods.clickGo_about_us);
    // ABOUT US FORM CONTACT MAIN
    $(domEl.div_recurrent).on('keyup', domEl.input_cam_contact_main_name, formContactMainMethod.validate_fields_keyup);
    $(domEl.div_recurrent).on('keyup', domEl.input_cam_contact_main_email, formContactMainMethod.validate_fields_keyup);
    $(domEl.div_recurrent).on('keyup', domEl.input_cam_contact_main_message, formContactMainMethod.validate_fields_keyup);
    // SEND CONTACT MAIN
    $(domEl.div_recurrent).on('click', domEl.send_cam_contact_main_send, formContactMainMethod.send_contact_main);
    // LOGO RESP
    $(domEl.navbar_recurrent).on('click', domEl.goSection_index_logo_resp, clikGoMethods.clikGo_home);
    // LOGO
    $(domEl.navbar_recurrent).on('click', domEl.goSection_index_logo, clikGoMethods.clikGo_home);
    // FULLWIDTH FEATURES CLICK GO SECTION
    $(domEl.div_recurrent).on('click', domEl.goSection_fullwidth_features_inventories_preowned, clikGoMethods.clickGo_inventories_preowned);
    $(domEl.div_recurrent).on('click', domEl.goSection_fullwidth_features_workshop, clikGoMethods.clickGo_workshop);
    $(domEl.div_recurrent).on('click', domEl.goSection_fullwidth_features_rental, clikGoMethods.clickGo_rental);
    // OUR BRANDS CLICK GO SECTION
    $(domEl.div_recurrent).on('click', domEl.goSection_ourBrand_agencies_news, clikGoMethods.clikGo_agencies_news_principal);
    $(domEl.div_recurrent).on('click', domEl.goSection_ourBrand_agencies_preowned, clikGoMethods.clickGo_agencies_preowned);
    $(domEl.div_recurrent).on('click', domEl.goSection_ourBrand_whorkshop, clikGoMethods.clickGo_workshop);
    $(domEl.div_recurrent).on('click', domEl.goSection_ourBrand_rental, clikGoMethods.clickGo_rental);
    // FORMS
    $(domEl.body_recurrent).on('focusout', domEl.validate_required, validateMethods.validate_input);
});
