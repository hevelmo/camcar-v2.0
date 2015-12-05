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
    var classes, direction, duration, easing;
    classes = {
        base: 'slidePanel',
        baseId: 'slide-Panel',
        show: 'slidePanel-show',
        loading: 'slidePanel-loading',
        content: 'slidePanel-content',
        contentid: 'content-slidePanel',
        dragging: 'slidePanel-dragging',
        willClose: 'slidePanel-will-close'
    };
    direction = 'right'; // top, bottom, left, right
    duration = '500ms';
    easing = 'ease';
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
            favicon.change("../../img/ico/camcaricon.ico");
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
        },
        // Directorio
        goSection_directory : function(event) {
            //$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            Finch.navigate('/directorio');
        }
    }
    var toggleMenuBarMethod = {
        toggleMenuBar: function(event) {
            //$('#menubar').addClass('collapsed');
            if ($('#menubar #menu_bar_toggle').hasClass('unfolded')) {
                $('#navbar_brand_logo').attr('src','../../img/logos/logo-camcar-hor-white-ico@2x.png');
                $('#navbar_brand_logo').addClass('change_img');
                $('#menubar').addClass('is_collapsed');
                console.log('hided');
            } else {
                $('#navbar_brand_logo').attr('src','../../img/logos/logo-camcar-hor-white@2x.png');
                $('#navbar_brand_logo').removeClass('change_img');
                $('#menubar').removeClass('is_collapsed');
            }
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
                ['link', {'id' : 'content-add-style-welcome-directory-pages', 'rel': 'stylesheet', 'class':'style-link-welcome-directory', 'href': '../../css/styles/assets/plugins/filament-tablesaw/tablesaw.css'}, '', 0],
                ['link', {'id' : 'content-add-style-welcome-directory-pages', 'rel': 'stylesheet', 'class':'style-link-welcome-directory', 'href': '../../css/styles/assets/plugins/slidepanel/slidePanel.css'}, '', 0],
                ['link', {'id' : 'content-add-style-welcome-directory-pages', 'rel': 'stylesheet', 'class':'style-link-welcome-directory', 'href': '../../css/styles/assets/pages/apps/contacts.css'}, '', 0]
            ];
            CAMIN.appendMulti(domEl.recurrent_head, stylesDirectoryAttributes);
            pluginsDirectoryAttributes = [
                ['script', {'id' : 'content-add-plugin-welcome-directory-plugins', 'class':'plugin-link-welcome-directory', 'src': '../../lib/assets/plugins/filament-tablesaw/tablesaw.js'}, '', 1],
                //['script', {'id' : 'content-add-plugin-welcome-directory-plugins', 'class':'plugin-link-welcome-directory', 'src': '../../lib/assets/plugins/slidepanel/jquery-slidePanel.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-plugins', 'class':'plugin-link-welcome-directory', 'src': '../../lib/assets/plugins/aspaginator/jquery.asPaginator.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-plugins', 'class':'plugin-link-welcome-directory', 'src': '../../lib/assets/plugins/jquery-placeholder/jquery.placeholder.js'}, '', 1]
            ];
            CAMIN.appendMulti('div#plugins-for-this-section', pluginsDirectoryAttributes);
            scriptsDirectoryAttributes = [
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/plugins/sticky-header.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/plugins/action-btn.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/components/aspaginator.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/app.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/components/animate-list.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/components/jquery-placeholder.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/components/material.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/run/components/selectable.js'}, '', 1],
                ['script', {'id' : 'content-add-plugin-welcome-directory-scripts', 'class':'script-link-welcome-directory', 'src': '../../lib/assets/current/apps/contacts.js'}, '', 1]
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
            removeRecurrentsMethods.removeRecurrents_directory();
        },
        removeRecurrents_home : function() {
            $(domEl._home_page_header_name).remove();
            $(domEl._home_page_content_name).remove();
            $(domEl.div_recurrent).removeClass('animsition');
        },
        removeRecurrents_agreement : function() {
            $(domEl._agreement_page_content_name).remove();
            //CAMIN.setHTML(domEl.div_recurrent_slidepanel, '');
        },
        removeRecurrents_directory : function() {
            $(domEl._directory_page_aside_name).remove();
            $(domEl._directory_page_main_name).remove();
            CAMIN.setHTML(domEl.div_recurrent_site_action, '');
            CAMIN.setHTML(domEl.div_recurrent_slidepanel, '');
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] loadSiteNavigationMethods
\* ------------------------------------------------------ */
    var loadSiteNavigationMethods = {
        loadSiteNavigation: function() {
            CAMIN.loadTemplate(tempsNames.recurrent_site_navbar, domEl.site_navbar);
            CAMIN.loadTemplate(tempsNames.recurrent_site_menubar, domEl.site_menubar);
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] removeSiteNavigationMethods
\* ------------------------------------------------------ */
    var removeSiteNavigationMethods = {
        removeSiteNavigation: function() {
            /*$(domEl.site_navbar).remove();
            $(domEl.site_menubar).remove();
            CAMIN.setHTML(domEl.site_navbar, '');
            CAMIN.setHTML(domEl.site_menubar, '');*/
        }
    }
/* ------------------------------------------------------ *\
    [Methods] goSectionMethods
\* ------------------------------------------------------ */
    var bannerMethods = {
        bannerLoad : function() {
            var agn_header, agn_name, url, pic_agencie_style, pic_headers;
            var banner, newImg, currentSRC, newSRC, elemnts, folder;
            //console.log('entra');
            //get_name_agencie_active
            //get-user-type-active

            //usr_agn_id = CAMIN.getValue(domEl.adm_input_session_usr_agn_id);
            //agn_name = CAMIN.getValue(domEl.input_session_usr_agn_name);
            agn_header = CAMIN.getValue(domEl.input_session_usr_agn_header);

            //bannerData = CAMIN.getInternalJSON(urlsApi.adm_get_agn_header_id + usr_agn_id);

            if (agn_header === '') {
                bannerData = CAMIN.getInternalJSON(urlsApi.adm_get_agn_header);
                pic_headers = CAMIN.filterArrayObjByKey(bannerData.camadpa, 'agn_header', '', 0);
                //console.log(pic_headers);

                currentSRC = $(domEl.adm_img_banner).attr('style');

                currentSRC = currentSRC;
                currentImg = '';
                //console.log(currentSRC);
                if(currentSRC !== '') {
                    //elements = currentSRC.split('/');
                    elements = currentSRC;
                    currentImg = elements
                }
                banner = bannerData.camadpa[0].agn_header;
                newImg = banner;

                do {
                    newImg = pic_headers[Math.floor(Math.random() * pic_headers.length)];
                } while(newImg === currentImg && agn_new_name === currentImg);
            } else {
                newImg = agn_header;
            }

            folder = '../../img/agencias/header/seminuevos';
            //folder = '../../resources/public/img/agencies/headers/seminuevos';
            newSRC =  folder + '/' + newImg;
            //newSRC =  newImg;
            $(domEl._home_page_header_name).attr('style', "background-image: url("+newSRC+"); top: 0px; margin-left: 0px; margin-right: 0px;");
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
            bannerMethods.bannerLoad();
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
                ['div', {'id' : domEl._home_panel_perfil_name, 'class':'col-xlg-4 col-lg-4 col-md-12'}, '', true],
                ['div', {'id' : domEl._home_today_birthday_name, 'class':'col-lg-4 col-md-6 equal-height'}, '', true],
                ['div', {'id' : domEl._home_today_agreements_name, 'class':'col-lg-4 col-md-6 equal-height'}, '', true]
                //['div', {'id' : domEl._home_today_aniversary_name, 'class':'col-lg-4 col-md-6 equal-height'}, '', true]
            ]);
            $(domEl.recurrent_body).addClass('dashboard');
        },
        loadTemplatesWelcomeHome: function() {
            CAMIN.loadTemplate(tempsNames.recurrent_welcome_page_header, domEl._home_page_header_name);
            viewSectionWelcomeHomeMethods.globalUserPromise();
            viewSectionWelcomeHomeMethods.loadTemplatesWindow_panelPerfil();
            viewSectionWelcomeHomeMethods.loadTemplatesWindow_todayBirthday();
            viewSectionWelcomeHomeMethods.loadTemplatesWindow_agreements();
            //viewSectionWelcomeHomeMethods.loadTemplatesWindow_todayAniversary();
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
        },
        loadTemplatesWindow_agreements: function() {
            CAMIN.loadTemplate(tempsNames.home_window_agreements, domEl._home_today_agreements);
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
            agreementPageContentAttributes = [
                ['div', {'id' : domEl._agreement_page_content, 'class':'page-content padding-30 blue-grey-500'}, '', 1]
            ];
            CAMIN.appendMulti(domEl.div_recurrent, agreementPageContentAttributes);
            $(domEl.recurrent_body).addClass('dashboard');
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
            directoryPageContentAttributes = [
                ['div', {'id' : domEl._directory_page_aside, 'class':'page-aside'}, '', 1],
                ['div', {'id' : domEl._directory_page_main, 'class':'page-main'}, '', 1]
            ];
            CAMIN.appendMulti(domEl.div_recurrent, directoryPageContentAttributes);
            $(domEl.recurrent_body).removeClass('dashboard');
            $(domEl.div_recurrent).addClass('animsition');
            $(domEl.div_recurrent).attr('style','animation-duration: 0.8s; opacity: 1;');
        },
        loadTemplatesDirectory: function() {
            CAMIN.loadTemplate(tempsNames.recurrent_directory_contacts_sidebar, domEl._directory_page_aside_name);
            CAMIN.loadTemplate(tempsNames.recurrent_directory_contacts_content_header, domEl._directory_page_main_name);
            CAMIN.loadTemplate(tempsNames.recurrent_directory_contacts_site_action, domEl.div_recurrent_site_action);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] currentSectionMethod
\* ------------------------------------------------------ */
    var currentSectionMethod = {
        currentSection_home: function() {
            $('#head-change-section-title').html('CAMCAR Bienvenido');
            $('#site-section-home').addClass('active');
            $(domEl.recurrent_body).removeClass('app-contacts');
            $(domEl.div_recurrent).removeClass('bg-white');
        },
        currentSection_agreement: function() {
            $('#head-change-section-title').html('CAMCAR Convenios');
            $('#site-section-agreement').addClass('active');
            $(domEl.recurrent_body).removeClass('app-contacts');
            $(domEl.div_recurrent).removeClass('bg-white');
        },
        currentSection_directory: function() {
            $('#head-change-section-title').html('CAMCAR Directorio');
            $('#site-section-directory').addClass('active');
            $(domEl.recurrent_body).addClass('app-contacts');
            $(domEl.div_recurrent).addClass('bg-white');
        },
        remove_currentSection: function() {
            $(domEl.div_recurrent).removeClass('bg-white');
            $('#site-section-home').removeClass('active');
            $('#site-section-agreement').removeClass('active');
            $('#site-section-directory').removeClass('active');
        }
    }
/* ------------------------------------------------------ *\
    [methods] handle_slide_panel_methods
\* ------------------------------------------------------ */
    var handleSlidePanelMethods = {
        appendSlidePanel: function() {
            $('html').addClass(classes.base + '-html');
            slidePanelAttributes = [
                ['div',
                    {
                        'id': classes.baseId,
                        'class': classes.base + ' ' + classes.base + '-' + direction  + ' ' + classes.show + ' animation-slide-' + direction,
                        'data-animate': 'slide-' + direction
                    }, '', 1]
            ];
            CAMIN.appendMulti(donEl.div_recurrent_slidepanel, slidePanelAttributes);
            slidePanelScrollableAttributes = [
                ['div', {'id': classes.contentid, 'class': classes.content}, '', 1]
                //['div', {}, '', 1],
                //['div', {'class': classes.base + '-handler'}, '', 1]
            ];
            $('#' + classes.baseId).attr('style', 'transform: translate3d(0%, 0px, 0px); transition: ' + duration + ' ' + easing + ';');
            CAMIN.appendMulti('#' + classes.baseId, slidePanelScrollableAttributes);
        },
        handleSlidePanel: function() {
            if(typeof $.slidePanel === 'undefined') return;

            var defaults = $.components.getDefaults("slidePanel");
            var options = $.extend({}, defaults, {
                template: function(options) {
                    return '<div class="' + options.classes.base + ' ' + options.classes.base + '-' + options.direction + '">' +
                            '<div class="' + options.classes.base + '-scrollable"><div>' +
                            '<div class="' + options.classes.content + '"></div>' +
                            '</div></div>' +
                            '<div class="' + options.classes.base + '-handler"></div>' +
                            '</div>';
                },
                afterLoad: function() {
                    this.$panel.find('.' + this.options.classes.base + '-scrollable').asScrollable({
                        namespace: 'scrollable',
                        contentSelector: '>',
                        containerSelector: '>'
                    });
                }
            });
        },
        toggleSlidePanel: function(event) {
            var element, carId, segId, feature, data, template, wrapper, titleHtml;
            CAMIN.setHTML(donEl.div_recurrent_slidepanel, '');
            handleSlidePanelMethods.appendSlidePanel();
            element = $(this);
            carId = +element.data('car-id');
            segId = +element.data('seg-id');
            feature = element.data('feature');
            switch(feature) {
                case 'benefits':
                    template = tempsNames.slide_panel_benefits;
                    wrapper = domEl.div_slide_panel;
                    data = CAMIN.getInternalJSON(urlsApi.get_ben_id + carId + '/' + segId);
                    break;
                case 'features':
                    template = tempsNames.slide_panel_features;
                    wrapper = domEl.div_slide_panel;
                    data = CAMIN.getInternalJSON(urlsApi.get_car_id + carId + '/' + segId);
            }
            CAMIN.loadTemplate(template, wrapper, data);
            titleHtml = CAMIN.getHTML(domEl._slide_panel_title);
            titleHtml = $.trim(titleHtml);
            titleHtml = titleHtml.toUpperCase();
            CAMIN.setHTML(domEl._slide_panel_title, titleHtml);
        },
        clickCloseSlidePanel: function(event) {
            GLOBALPanelCloseBody = true;
            GLOBALPanelCloseRecurrent = false;
            GLOBALPanelCloseWidget = false;
            handleSlidePanelMethods.closeSPanel();
        },
        closeSPanel: function() {
            $('#' + classes.baseId).attr('style',"right: -100% !important; transition: 500ms ease;");
            $('html').addClass(classes.base + '-html');
            setTimeout(function () {
                setTimeout(function () {
                    CAMIN.setHTML(donEl.div_recurrent_slidepanel, '');
                }, 100);
            }, 750);
        },
        /*
        closeOutSpanelManager: function() {
        },
        clickOutSPanelBody: function(event) {
            GLOBALPanelCloseBody = true;
            handleSlidePanelMethods.closeOutSpanelManager();
        },
        clickOutSPanelRecurrent: function(event) {
            GLOBALPanelCloseRecurrent = true;
            handleSlidePanelMethods.closeOutSpanelManager();
        },
        clickOutSPanelWidget: function(event) {
            GLOBALPanelCloseWidget = true;
            handleSlidePanelMethods.closeOutSpanelManager();
        }
        */
    }
