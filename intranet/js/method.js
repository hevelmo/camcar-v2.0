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
    var IS_MOBILE, mediaquery;
    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
        isIE = /msie/i.test( navigator.userAgent );
/* ------------------------------------------------------ *\
    [functions] DETEC MOBILE
\* ------------------------------------------------------ */
    /* Detect Mobile Browser : http://detectmobilebrowsers.com/ */
    function detectmobile(a){
        IS_MOBILE = false;
        if(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){
            IS_MOBILE = true;
        }
        return IS_MOBILE;
    };
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
    [Methods] MATCHMEDIA
\* ------------------------------------------------------ */
    var matchMediaMethod = {
        mediaquery: function() {
            mediaquery = window.matchMedia("(max-width: 768px)");
            if (mediaquery.matches) {
                // mediaquery es 768px
            } else {
                // mediaquery no es 768px
            }
        }
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
                //console.log(nav, animateTime);
            } else{
                nav.stop().animate({ height: '0' }, animateTime);
                //console.log(nav);
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
            favicon.change("img/ico/camcaricon.ico");
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
    [Methods] equalHeightsMethods
\* ------------------------------------------------------ */
    var equalHeightsMethods = {
        equalHeightsLoad : function() {
            var altomax = 0;
            $('.equal-height').each(function(){
                if( $(this).height() > altomax ){
                    altomax = $(this).height();
                }
            });
            $('.equal-height').height( altomax );
        }
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
        },
        addStylesDirectory : function() {
            stylesDirectoryAttributes = [
                ['link', {'id' : 'content-add-style-welcome-directory-pages', 'rel': 'stylesheet', 'class':'style-link-welcome-directory', 'href': '../../css/styles/assets/pages/advanced/masonry.css'}, '', 0],
            ];
            CAMIN.appendMulti(domEl.recurrent_head, stylesDirectoryAttributes);
            pluginsDirectoryAttributes = [
                ['script', {'id' : 'content-add-plugin-welcome-directory-plugins', 'class':'plugin-link-welcome-directory', 'src': '../../lib/assets/plugins/masonry/masonry.pkgd.min.js'}, '', 1]
            ];
            CAMIN.appendMulti('div#plugins-for-this-section', pluginsDirectoryAttributes);
            scriptsDirectoryAttributes = [
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/components/masonry.js'}, '', 1]
            ];
            CAMIN.appendMulti('div#scripts-for-this-section', scriptsDirectoryAttributes);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] cleanStyles
\* ------------------------------------------------------ */
    var cleanStylesMethod = {
        cleanStyles : function () {
            cleanStylesMethod.cleanStylesWelcome();
            cleanStylesMethod.cleanStylesAgreement();
            cleanStylesMethod.cleanStylesDirectory();
        },
        cleanStylesWelcome : function () {
            $('head .style-link-welcome').remove();
            $('.plugin-link-welcome').remove();
            $('.script-link-welcome').remove();
        },
        cleanStylesAgreement : function () {
            $('head .style-link-welcome-agreement').remove();
            $('.plugin-link-welcome-agreement').remove();
            $('.script-link-welcome-agreement').remove();
        },
        cleanStylesDirectory : function () {
            $('head .style-link-welcome-directory').remove();
            $('.plugin-link-welcome-directory').remove();
            $('.script-link-welcome-directory').remove();
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] removeRecurrentsMethods
\* ------------------------------------------------------ */
    var removeRecurrentsMethods = {
        removeRecurrents: function() {
            removeRecurrentsMethods.removeRecurrents_home();
            removeRecurrentsMethods.removeRecurrents_agreement();
        },
        removeRecurrents_home : function() {
            $(domEl._home_page_header_name).remove();
            $(domEl._home_page_content_name).remove();
            $(domEl.div_recurrent).removeClass('animsition');
        },
        removeRecurrents_agreement : function() {
            $(domEl._agreement_page_content_name).remove();
        },
        removeRecurrents_directory : function() {
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] viewSectionWelcomeHomeMethods
\* ------------------------------------------------------ */
    var viewSectionWelcomeHomeMethods = {
        viewWelcomeHome: function() {
            viewSectionWelcomeHomeMethods.recurrent_welcome_home();
            viewSectionWelcomeHomeMethods.loadTemplatesWelcomeHome();
            equalHeightsMethods.equalHeightsLoad();
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
                ['div', {'id' : domEl._home_today_birthday_name, 'class':'col-lg-4 col-md-6 equal-height'}, '', true],
                ['div', {'id' : domEl._home_today_aniversary_name, 'class':'col-lg-4 col-md-6 equal-height'}, '', true]
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
                ['div', {'id' : domEl._agreement_page_content, 'class':'page-content padding-30 blue-grey-500'}, '', 1]
            ];
            CAMIN.appendMulti(domEl.div_recurrent, agreementPageContentAtributes);
            $(domEl.div_recurrent).addClass('animsition');
            $(domEl.div_recurrent).attr('style','animation-duration: 0.8s; opacity: 1;');
        },
        loadTemplatesAgreement: function() {
            CAMIN.loadTemplate(tempsNames.recurrent_agreement_masonry_items, domEl._agreement_page_content_name);
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] viewSectionWelcomeDirectoryMethods
\* ------------------------------------------------------ */
    var viewSectionWelcomeDirectoryMethods = {
        viewSectionWelcomeDirectory : function() {
            viewSectionWelcomeDirectoryMethods.recurrent_welcome_directory();
            viewSectionWelcomeDirectoryMethods.loadTemplatesDirectory();
        },
        recurrent_welcome_directory : function() {
            directoryPageContentAtributes = [
                ['div', {'id' : domEl._directory_page_content, 'class':'page-content padding-30 blue-grey-500'}, '', 1]
            ];
            CAMIN.appendMulti(domEl.div_recurrent, directoryPageContentAtributes);
            $(domEl.div_recurrent).addClass('animsition');
            $(domEl.div_recurrent).attr('style','animation-duration: 0.8s; opacity: 1;');
        },
        loadTemplatesDirectory: function() {
            CAMIN.loadTemplate(tempsNames.recurrent_directory_masonry_items, domEl._directory_page_content_name);
        }
    }
