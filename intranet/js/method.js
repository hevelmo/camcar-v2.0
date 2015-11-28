/* ------------------------------------------------------ *\
    [Variables] 'Zone'
\* ------------------------------------------------------ */
    // GLOBAL USER
    var //GLOBALUsrUserName = $(domEl.input_session_usr_username).val(),
        GLOBALUsrId = +$(domEl.input_session_usr_id).val(),
        GLOABALUsrType = +$(domEl.input_session_usr_type).val(),
        GLOBALUsrEmail = $(domEl.input_session_usr_email).val(),
        GLOBALUsrAgnId = +$(domEl.input_session_usr_agn_id).val(),
        GLOBALUsrAgnName = $(domEl.input_session_usr_agn_name).val(),
        GLOBALUsrAgnLogo1 = $(domEl.input_session_usr_agn_logo1).val(),
        GLOBALUsrAgnLogo2 = $(domEl.input_session_usr_agn_logo2).val(),
        GLOBALUsrAgnHeader = $(domEl.input_session_usr_agn_header).val();

    var section, today;
    var IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
        isIE = /msie/i.test( navigator.userAgent );
/* ------------------------------------------------------ *\
    [functions] validateEmail
\* ------------------------------------------------------ */
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\., ;:\s@\"] + (\.[^<>()[\]\\., ;:\s@\"] + )*)|(\". + \"))@((\[[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\])|(([a-zA-Z\-0-9] + \.) + [a-zA-Z] {2, }))$/;
        //return re.test(email);
        return true;
    }
/* ------------------------------------------------------ *\
    [functions] resetAlert
\* ------------------------------------------------------ */
    //It performs whit alertify libary an css
    function resetAlert () {
        alertify.set({
            labels : {
                ok     : "OK",
                cancel : "Cancel"
            },
            delay : 5000,
            buttonReverse : false,
            buttonFocus   : "ok"
        });
     }
/* ------------------------------------------------------ *\
    [Methods] inputVal
\* ------------------------------------------------------ */
    var inputValMetdods = {
        isIntegerKP: function (event) {
            return /\d/.test(String.fromCharCode(event.keyCode));
        }
    }
/* ------------------------------------------------------ *\
    [Methods] animateNavMethod
\* ------------------------------------------------------ */
    var animateNavMethod = {
        animateNav: function(event) {
            var nav, animateTime, navLink;

            nav = $('.dp-navlink-menu');
            animateTime = 500;
            navLink = $('.dp-header .dp-top .dp-navlink');

            if ( nav.height() === 0) {
                autoHeightAnimate(nav, animateTime);
                console.log(nav, animateTime);
            } else{
                nav.stop().animate({ height: '0' }, animateTime);
                console.log(nav);
            }
            /* Function to animate height: auto */
            function autoHeightAnimate(element, time){
                var curHeight, // Get Default Height
                    autoHeight; // Get Auto Height

                curHeight = element.height();
                autoHeight  = element.css('height', 'auto').height()

                element.height(curHeight); // Reset to Default Height
                element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
            }
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] Favicon
\* ------------------------------------------------------ */
    var favicon = {
        load_favicon: function() {
            favicon.change("../resources/public/img/caricon.ico");
        },
        change: function(iconURL, optionalDocTitle) {
            if (arguments.length == 2) {
              document.title =  optionamDocTitle;
            }
            this.addLink(iconURL, "shortcur icon");
        },
        addLink: function(iconURL, relValue) {
            var link = document.createElement("link");
            link.type = "image/x-icon";
            link.rel = relValue;
            link.href = iconURL;
            this.removeLinkIfExists(relValue);
            this.docHead.appendChild(link);
        },
        removeLinkIfExists: function(relValue) {
            var links = this.docHead.getElementsByTagName("link");
            for (var i=0; i<links .length; i++) {
              var link = links[i];
              if (link.type=="image/x-icon" && link.rel==relValue) {
                this.docHead.removeChild(link);
                return; // Assuming only one match at most.
              }
            }
        },
        docHead:document.getElementsByTagName("head")[0]
    }
/* ------------------------------------------------------ *\
    [Methods] goSectionMethods
\* ------------------------------------------------------ */
    var goSectionMethods = {
        // home
        goSection_home : function(event) {
            //$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            Finch.navigate('/');
        },
        // Convenios
        goSection_agreement : function(event) {
            //$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            Finch.navigate('/convenios');
        }
    }
/* ------------------------------------------------------ *\
    [Methods] addStyles
\* ------------------------------------------------------ */
    var addStylesMethod = {
        addStylesHome : function() {
            stylesHomeAttributes = [
                ['link', {'id' : 'content-add-style-welcome-plugins', 'rel': 'stylesheet', 'class':'style-link-welcome', 'href': '../../css/styles/assets/plugins/chartist-js/chartist.css'}, '', 0],
                ['link', {'id' : 'content-add-style-welcome-plugins', 'rel': 'stylesheet', 'class':'style-link-welcome', 'href': '../../css/styles/assets/plugins/aspieprogress/asPieProgress.css'}, '', 0],
                ['link', {'id' : 'content-add-style-welcome-dashboard', 'rel': 'stylesheet', 'class':'style-link-welcome', 'href': '../../css/styles/assets/dashboard/v2.css'}, '', 0]
            ];
            CAMIN.appendMulti(domEl.recurrent_head, stylesHomeAttributes);
            pluginsHomeAttributes = [
                ['script', {'id' : 'content-add-plugin-welcome-plugins', 'class':'plugin-link-welcome', 'src': '../../lib/assets/plugins/chartist-js/chartist.min.js'}, '', 0],
                ['script', {'id' : 'content-add-plugin-welcome-plugins', 'class':'plugin-link-welcome', 'src': '../../lib/assets/plugins/matchheight/jquery.matchHeight-min.js'}, '', 0]
            ];
            CAMIN.appendMulti('div#plugins-for-this-section', pluginsHomeAttributes);
            scriptsHomeAttributes = [
                ['script', {'id' : 'content-add-plugin-welcome-scripts', 'class':'script-link-welcome', 'src': '../../lib/assets/plugins/chartist-js/chartist.min.js'}, '', 0],
                ['script', {'id' : 'content-add-plugin-welcome-scripts', 'class':'script-link-welcome', 'src': '../../lib/assets/run/components/matchheight.js'}, '', 0]
            ];
            CAMIN.appendMulti('div#scripts-for-this-section', scriptsHomeAttributes);
        },
        addStylesAgreement : function() {
            stylesAgreementAttributes = [
                ['link', {'id' : 'content-add-style-welcome-agreement-pages', 'rel': 'stylesheet', 'class':'style-link-welcome-agreement', 'href': '../../css/styles/assets/pages/advanced/masonry.css'}, '', 0],
            ];
            CAMIN.appendMulti(domEl.recurrent_head, stylesAgreementAttributes);
            pluginsAgreementAttributes = [
                ['script', {'id' : 'content-add-plugin-welcome-agreement-plugins', 'class':'plugin-link-welcome-agreement', 'src': '../../lib/assets/plugins/masonry/masonry.pkgd.min.js'}, '', 1]
            ];
            CAMIN.appendMulti('div#plugins-for-this-section', pluginsAgreementAttributes);
            scriptsAgreementAttributes = [
                ['script', {'id' : 'content-add-plugin-welcome-agreement-scripts', 'class':'script-link-welcome-agreement', 'src': '../../lib/assets/run/components/masonry.js'}, '', 1]
            ];
            CAMIN.appendMulti('div#scripts-for-this-section', scriptsAgreementAttributes);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] cleanStyles
\* ------------------------------------------------------ */
    var cleanStylesMethod = {
        cleanStylesWelcome : function () {
            $('head .style-link-welcome').remove();
            $('head .plugin-link-welcome').remove();
            $('head .script-link-welcome').remove();
        },
        cleanStylesAgreement : function () {
            $('head .style-link-welcome-agreement').remove();
            $('head .plugin-link-welcome-agreement').remove();
            $('head .script-link-welcome-agreement').remove();
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] removeRecurrentsMethods
\* ------------------------------------------------------ */
    var removeRecurrentsMethods = {
        removeRecurrents_home : function() {
            $(domEl._home_page_header_name).remove();
            $(domEl._home_page_content_name).remove();
            $(domEl.div_recurrent).removeClass('animsition');
        },
        removeRecurrents_agreement : function() {
            $(domEl._agreement_page_content_name).remove();
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] viewSectionWelcomeHomeMethods
\* ------------------------------------------------------ */
    var viewSectionWelcomeHomeMethods = {
        viewWelcomeHome: function() {
            viewSectionWelcomeHomeMethods.recurrent_welcome_home();
            viewSectionWelcomeHomeMethods.loadTemplatesWelcomeHome();
        },
        recurrent_welcome_home: function() {
            CAMIN.appendMulti(domEl.div_recurrent, [
                ['div', {'id' : domEl._home_page_header, 'class':'page-header height-300 margin-bottom-30'}, '', true],
                ['div', {'id' : domEl._home_page_content, 'class':'page-content container-fluid'}, '', true]
            ]);
            CAMIN.appendMulti(domEl._home_page_content_name, [
                ['div', {'id' : domEl._home_widget_first_row, 'class':'row', 'data-plugin': 'matchHeight', 'data-by-row': 'true'}, '', true]
            ]);
            CAMIN.appendMulti(domEl._home_widget_first_row_name, [
                ['div', {'id' : domEl._home_panel_perfil_name, 'class':'col-xlg-3 col-lg-4 col-md-12'}, '', true],
                ['div', {'id' : domEl._home_today_birthday_name, 'class':'col-lg-5 col-md-6'}, '', true],
                ['div', {'id' : domEl._home_today_aniversary_name, 'class':'col-lg-4 col-md-6'}, '', true]
            ]);
        },
        loadTemplatesWelcomeHome: function() {
            CAMIN.loadTemplate(tempsNames.recurrent_welcome_page_header, domEl._home_page_header_name);
            viewSectionWelcomeHomeMethods.globalUserPromise();
            viewSectionWelcomeHomeMethods.loadTemplatesWindow_panelPerfil();
            viewSectionWelcomeHomeMethods.loadTemplatesWindow_todayBirthday();
            viewSectionWelcomeHomeMethods.loadTemplatesWindow_todayAniversary();
        },
        globalUserPromise: function() {
            if(+GLOBALUsrId === 1 || +GLOBALUsrId === 2 || +GLOBALUsrId === 3) {
                promise = CAMIN.postalService(urlsApi.wse_set_epy, {});
                promise.success( function (data) {
                });
            }
        },
        loadTemplatesWindow_panelPerfil: function() {
            CAMIN.loadTemplate(tempsNames.home_window_perfil, domEl._home_panel_perfil);
        },
        loadTemplatesWindow_todayBirthday: function() {
            //Get today date in format yyyy-mm-dd
            today = (moment().format()).substring(0, 10);
            //Get today's birthdays
            dataBirthday = CAMIN.getInternalJSON(urlsApi.wse_get_epy_cum + today);
            CAMIN.loadTemplate(tempsNames.home_window_birthday, domEl._home_today_birthday, dataBirthday);
        },
        loadTemplatesWindow_todayAniversary: function() {
            //Get today date in format yyyy-mm-dd
            today = (moment().format()).substring(0, 10);
            //Get today's aniversaries
            dataAniversary = CAMIN.getInternalJSON(urlsApi.wse_get_epy_fin + today);
            CAMIN.loadTemplate(tempsNames.home_window_aniversary, domEl._home_today_aniversary, dataAniversary);
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] viewSectionWelcomeAgreementMethods
\* ------------------------------------------------------ */
    var viewSectionWelcomeAgreementMethods = {
        viewSectionWelcomeAgreement : function() {
            viewSectionWelcomeAgreementMethods.recurrent_welcome_agreement();
            viewSectionWelcomeAgreementMethods.loadTemplatesAgreement();
        },
        recurrent_welcome_agreement : function() {
            agreementPageContentAtributes = [
                ['div', {'id' : domEl._agreement_page_content, 'class':'page-content padding-30 blue-grey-500'}, '', true]
            ];
            CAMIN.appendMulti(domEl.div_recurrent, agreementPageContentAtributes);
            $(domEl.div_recurrent).addClass('animsition');
        },
        loadTemplatesAgreement: function() {
            CAMIN.loadTemplate(tempsNames.recurrent_agreement_masonry_items, domEl._agreement_page_content_name);
        }
    }
