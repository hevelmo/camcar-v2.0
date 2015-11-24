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
    [Methods] addStyles
\* ------------------------------------------------------ */
    var addStylesMethod = {
        addStylesHome : function() {
            stylesHomeAttributes = [
                ['link', {'id' : 'content-add-style-welcome-plugins', 'rel': 'stylesheet', 'class':'link-welcome', 'href': '../../css/styles/assets/plugins/chartist-js/chartist.css'}, '', 0],
                ['link', {'id' : 'content-add-style-welcome-plugins', 'rel': 'stylesheet', 'class':'link-welcome', 'href': '../../css/styles/assets/plugins/aspieprogress/asPieProgress.css'}, '', 0],
                ['link', {'id' : 'content-add-style-welcome-dashboard', 'rel': 'stylesheet', 'class':'link-welcome', 'href': '../../css/styles/assets/dashboard/v2.css'}, '', 0]
            ];
            CAMIN.appendMulti(domEl.recurrent_head, stylesHomeAttributes);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] cleanStyles
\* ------------------------------------------------------ */
    var cleanStylesMethod = {
        cleanStylesWelcome : function () {
            $('head .link-welcome').remove();
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
    [Metodos] viewSectionWelcomeHomeMethods
\* ------------------------------------------------------ */
    var viewSectionWelcomeHomeMethods = {
        viewWelcomeHome: function() {
            viewSectionWelcomeHomeMethods.recurrent_welcome_home();
            viewSectionWelcomeHomeMethods.loadTemplatesWelcomeHome();
        },
        recurrent_welcome_home: function() {
            CAMIN.appendMulti(domEl.div_recurrent, [
                ['div', {'id' : domEl._page_header, 'class':'page-header height-300 margin-bottom-30'}, '', true],
                ['div', {'id' : domEl._page_content, 'class':'page-content container-fluid'}, '', true]
            ]);
            CAMIN.appendMulti(domEl._page_content_name, [
                ['div', {'id' : domEl._widget_first_row, 'class':'row', 'data-plugin': 'matchHeight', 'data-by-row': 'true'}, '', true]
            ]);
            CAMIN.appendMulti(domEl._widget_first_row_name, [
                ['div', {'id' : domEl._panel_perfil_name, 'class':'col-xlg-3 col-lg-4 col-md-12'}, '', true],
                ['div', {'id' : domEl._today_birthday_name, 'class':'col-lg-5 col-md-6'}, '', true],
                ['div', {'id' : domEl._today_aniversary_name, 'class':'col-lg-4 col-md-6'}, '', true]
            ]);
        },
        loadTemplatesWelcomeHome: function() {
            CAMIN.loadTemplate(tempsNames.recurrent_welcome_page_header, domEl._page_header_name);
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
            CAMIN.loadTemplate(tempsNames.home_window_perfil, domEl._panel_perfil);
        },
        loadTemplatesWindow_todayBirthday: function() {
            //Get today date in format yyyy-mm-dd
            today = (moment().format()).substring(0, 10);
            //Get today's birthdays
            dataBirthday = CAMIN.getInternalJSON(urlsApi.wse_get_epy_cum + today);
            CAMIN.loadTemplate(tempsNames.home_window_birthday, domEl._today_birthday, dataBirthday);
        },
        loadTemplatesWindow_todayAniversary: function() {
            //Get today date in format yyyy-mm-dd
            today = (moment().format()).substring(0, 10);
            //Get today's aniversaries
            dataAniversary = CAMIN.getInternalJSON(urlsApi.wse_get_epy_fin + today);
            CAMIN.loadTemplate(tempsNames.home_window_aniversary, domEl._today_aniversary, dataAniversary);
        }
    }


