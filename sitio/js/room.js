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
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            currentSectionMethod.currentSection_home();
            viewSectionHomeMethod.viewSectionHome();

            windowWidthMethod.windowWidth();
            animatedMethods.animated();
            agentsMap.AgentsMap();
            agentsMap.loadAgentsMap();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
            __sizeCheck($(window));
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] AGENCIES NEWS
\* ----------------------------------- */
    Finch.route('/agencias/nuevos/:agn_name_agencia/:agn_url/:agn_id', {
        setup: function(bindings) {
            var agn_name, agn_url, agn_id;
            agn_name = bindings.agn_name_agencia;
            agn_url = bindings.agn_url;
            agn_id = bindings.agn_id;
            // Add favicon
            window.onload = favicon.load_favicon();
            // GOOGLE ANALYTICS
            if ( agn_name === undefined && agn_url === undefined && agn_id === undefined ) {
                ga('send', 'pageview', '/agencias/nuevos');
            } else if ( agn_name !== undefined && agn_url === undefined && agn_id === undefined ) {
                ga('send', 'pageview', '/agencias/nuevos/' + agn_name);
            } else if ( agn_name !== undefined && agn_url !== undefined && agn_id !== undefined ) {
                ga('send', 'pageview', '/agencias/nuevos/' + agn_name + '/' + agn_url + '/' + agn_id);
            }
        },
        load: function(bindings) {
            var agn_name, agn_url, agn_id;
            agn_name = bindings.agn_name_agencia;
            agn_url = bindings.agn_url;
            agn_id = bindings.agn_id;

            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            currentSectionMethod.currentSection_agencies_news();
            // TODAS LAS AGENCIAS NUEVOS
            if ( agn_name === undefined && agn_url === undefined && agn_id === undefined ) {
                section = "agencies-news";
                viewSectionAgenciesNewsMethod.viewSectionAgenciesNews();
            }
            // AGENCIA PRINCIPAL SELECCIONADA
            else if ( agn_name !== undefined && agn_url === undefined && agn_id === undefined ) {
                section = "agencies-news-principal";
                viewSectionAgenciesNewsPrincipalMethod.viewSectionAgenciesNewsPrincipal(agn_name, agn_url, agn_id);
                activeLogAgenciesNewsMethod.activeLogAgenciesNews(agn_name, agn_url, agn_id);
                if ( agn_name === 'volvo' ) {
                    CAM.loadTemplate(tempsNames.recurrent_agencies_news_by_agencies_video_strip_agencies, domEl._start_agencies_news_video_strip_name);
                    //console.log(agn_name);
                } else {
                    $(domEl._start_agencies_news_video_strip_name).remove();
                }
            }
            // SUB AGENCIA SELECCIONADA
            else if ( agn_name !== undefined && agn_url !== undefined && agn_id !== undefined ) {
                section = "agencies-news-sub-agencie";
                CAM.setValue(domEl.input_hidden_mapa, agn_id);
                viewSectionAgenciesNewsBySubAgencieMethod.viewSectionAgenciesNewsBySubAgencie(agn_name, agn_url, agn_id);
                activeLogAgenciesNewsMethod.activeLogAgenciesNews(agn_name, agn_url, agn_id);
            }
            // RUTA INVALIDA
            else {
                Finch.navigate('/agencias/nuevos');
            }

            animatedMethods.animated();
            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
            CAM.setValue('#hidden_brand', '0');
        }
    });
/* ----------------------------------- *\
 [Route] AGENCIES PREOWNED
\* ----------------------------------- */
    Finch.route('/agencias/seminuevos/:preowned_agn_url/:preowned_agn_id', {
        setup: function(bindings) {
            var ga_agn_url, ga_agn_id;
            ga_agn_url = bindings.preowned_agn_url;
            ga_agn_id = bindings.preowned_agn_id;
            // Add favicon
            window.onload = favicon.load_favicon();
            if ( ga_agn_url === undefined && ga_agn_id === undefined ) {
                ga('send', 'pageview', '/agencias/seminuevos');
            } else if ( ga_agn_url !== undefined && ga_agn_id !== undefined ) {
                ga('send', 'pageview', '/agencias/seminuevos/' + ga_agn_url + '/' + ga_agn_id);
            }
        },
        load: function(bindings) {
            var agn_url, agn_id;
            agn_url = bindings.preowned_agn_url;
            agn_id = bindings.preowned_agn_id;

            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            currentSectionMethod.currentSection_agencies_preowned();

            if ( agn_url === undefined && agn_id === undefined ) {
                section = "agencies-preowned";
                viewSectionAgenciesPreownedMethod.viewSectionAgenciesPreowned();
            } else if ( agn_url !== undefined && agn_id !== undefined ) {
                section = "agencies_preowned_by_agencie";
                CAM.setValue(domEl.input_hidden_mapa, agn_id);
                viewSectionAgenciesPreownedByAgencieMethod.viewSectionAgenciesPreownedByAgencie(agn_url, agn_id);
            }

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
            __sizeCheck($(window));
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] INVENTORIES PREOWNED
\* ----------------------------------- */
    Finch.route('/seminuevos/inventarios', {
        setup: function(bindings) {
            section = "inventories-preowned";
            // Add favicon
            window.onload = favicon.load_favicon();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            currentSectionMethod.currentSection_inventories_preowned();

            viewSectionInventoriesPreownedMethod.viewSectionInventoriesPreowned();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] WHORKSHOP
\* ----------------------------------- */
    Finch.route('/talleres', {
        setup: function(bindings) {
            section = "workshop";
            ga('send', 'pageview', '/talleres');
            // Add favicon
            window.onload = favicon.load_favicon();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            currentSectionMethod.currentSection_workshop();

            viewSectionWorkShopMethod.viewSectionWorkShop();

            smoothScrollMethods.smoothScroll();

            bgImageHolderMethods.appendBgImageHolder2();
            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] RENTAL
\* ----------------------------------- */
    Finch.route('/rentas/:agnRental', {
        setup: function(bindings) {
            var $agnRentaGA = bindings.agnRental;
            section = "rental-agencie";
            ga('send', 'pageview', '/rentas/' + $agnRentaGA);
            // Add favicon
            window.onload = favicon.load_favicon();
        },
        load: function(bindings) {
            var $agnRenta = bindings.agnRental;

            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            currentSectionMethod.currentSection_rental();

            viewSectionRentalMethod.viewSectionRental($agnRenta);

            bgImageHolderMethods.appendBgImageHolder2();
            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] BLOG
\* ----------------------------------- */
    Finch.route('/noticias/:blogAgencie/:blog/:blogId', {
        setup: function(bindings) {
            var $dataAgencieGA, $dataBlogGA, $dataBlogIdGA;
            // Add favicon
            window.onload = favicon.load_favicon();
            $dataAgencieGA = bindings.blogAgencie;
            $dataBlogGA = bindings.blog;
            $dataBlogIdGA = bindings.blogId;
            // GOOGLE ANALYTICS
            if ( $dataAgencieGA === undefined && $dataBlogGA === undefined && $dataBlogIdGA === undefined ) {
                ga( 'send', 'pageview', '/noticias' );
            } else if ( $dataAgencieGA !== undefined && $dataBlogGA !== undefined && $dataBlogIdGA !== undefined ) {
                ga( 'send', 'pageview', '/noticias/' + $dataAgencieGA + '/' + $dataBlogGA );
            }

        },
        load: function(bindings) {
            var $dataAgencie, $dataBlog, $dataBlogId;
            $dataAgencie = bindings.blogAgencie;
            $dataBlog = bindings.blog;
            $dataBlogId = bindings.blogId;

            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            currentSectionMethod.currentSection_blog();
            if ( $dataAgencie === undefined && $dataBlog === undefined && $dataBlogId === undefined ) {
                section = "blog";
                viewSectionBlogMethod.viewSectionBlog();
            } else if ( $dataAgencie !== undefined && $dataBlog !== undefined && $dataBlogId !== undefined ) {
                section = 'blog-by-post';
                viewSectionBlogByNewsMethod.viewSectionBlogByNews($dataAgencie, $dataBlog, $dataBlogId);
                //console.log(section);
            }
            $(window).resize(mobile_menu_methods.has_menu_toggle);
            bgImageHolderMethods.appendBgImageHolder2();
            $(window).load(equalHeightsMethods.equalHeightsLoad);
            backToTopMethod.init_window_scroll_top();
            setWidthMethod.setWidth();
            loadSlider();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] ABOUT US
\* ----------------------------------- */
    Finch.route('/contacto', {
        setup: function(bindings) {
            section = "about-us";
            ga('send', 'pageview', '/contacto');
            // Add favicon
            window.onload = favicon.load_favicon();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            currentSectionMethod.currentSection_about_us();

            viewSectionAboutUsMethod.viewSectionAboutUs();

            animatedMethods.animated();
            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] ABOUT US
\* ----------------------------------- */
    Finch.route('/aviso-de-privacidad', {
        setup: function(bindings) {
            section = "privacy-notice";
            // Add favicon
            window.onload = favicon.load_favicon();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
            viewSectionPrivacyNoticeMethod.viewSectionPrivacyNotice();

            $(window).resize(mobile_menu_methods.has_menu_toggle);
            backToTopMethod.init_window_scroll_top();
        },
        unload: function(bindings) {
            section = "";
            CAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
Finch.listen();
