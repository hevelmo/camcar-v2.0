/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            section = "home";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

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
    Finch.route('/agencias/nuevos', {
    //Finch.route('/agencias/nuevos/:agn_name_agencia/:agn_url/:agn_id', {
        setup: function(bindings) {
            //var agn_name, agn_url, agn_id;
            //agn_name = bindings.agn_name_agencia;
            //agn_url = bindings.agn_url;
            //agn_id = bindings.agn_id;
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();

            /*
            // GOOGLE ANALYTICS
            if ( agn_name === undefined && agn_url === undefined && agn_id === undefined ) {
                ga('send', 'pageview', '/agencias/nuevos');
            } else if ( agn_name !== undefined && agn_url === undefined && agn_id === undefined ) {
                ga('send', 'pageview', '/agencias/nuevos/' + bindings.agn_name);
            } else if ( agn_name !== undefined && agn_url !== undefined && agn_id !== undefined ) {
                ga('send', 'pageview', '/agencias/nuevos/' + bindings.agn_name + '/' + bindings.agn_url + '/' + agn_id);
            }*/
        },
        load: function(bindings) {
            //var agn_name, agn_url, agn_id;

            //agn_name = bindings.agn_name_agencia;
            //agn_url = bindings.agn_url;
            //agn_id = bindings.agn_id;

            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            currentSectionMethod.currentSection_agencies_news();

            viewSectionAgenciesNewsMethod.viewSectionAgenciesNews();

            /*// TODAS LAS AGENCIAS NUEVOS
            if ( agn_name === undefined && agn_url === undefined && agn_id === undefined ) {
                section = "agencies-news";
                var agpid;
                agpid = +CAM.getValue('#hidden_brand');

            }
            // AGENCIA PRINCIPAL SELECCIONADA
            else if ( agn_name !== undefined && agn_url === undefined && agn_id === undefined ) {
                //console.log('Agencia principal seleccionada');
                section = "agencies_news_by_agencie";
            }
            // SUB AGENCIA SELECCIONADA
            else if ( agn_name !== undefined && agn_url !== undefined && agn_id !== undefined ) {
                //console.log('Sub Agencia seleccionada');
                section = "agencies_news_by_sub_agencie";
                CAM.setValue(domEl.input_hidden_mapa, agn_id);
            } else {
                //console.log('Ruta invalida');
                Finch.navigate('/agencias/nuevos');
            }*/

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
    Finch.route('/seminuevos', {
        setup: function(bindings) {
            section = "agencies-preowned";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            currentSectionMethod.currentSection_agencies_preowned();

            viewSectionAgenciesPreownedMethod.viewSectionAgenciesPreowned();

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
 [Route] INVENTORIES PREOWNED
\* ----------------------------------- */
    Finch.route('/seminuevos/inventarios', {
        setup: function(bindings) {
            section = "inventories-preowned";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

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
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            currentSectionMethod.currentSection_workshop();

            viewSectionWorkShopMethod.viewSectionWorkShop();

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
    Finch.route('/rentas', {
        setup: function(bindings) {
            section = "rental";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            currentSectionMethod.currentSection_rental();

            viewSectionRentalMethod.viewSectionRental();

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

            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            var $dataAgencie, $dataBlog, $dataBlogId;
            $dataAgencie = bindings.blogAgencie;
            $dataBlog = bindings.blog;
            $dataBlogId = bindings.blogId;

            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            currentSectionMethod.currentSection_blog();
            if ( $dataAgencie === undefined && $dataBlog === undefined && $dataBlogId === undefined ) {
                section = "blog";
                viewSectionBlogMethod.viewSectionBlog();
            } else if ( $dataAgencie !== undefined && $dataBlog !== undefined && $dataBlogId !== undefined ) {
                var $getBlog_id, $getAgencieBlog_name, $getAgencieBlog_key, $getBlog_name, $getBlog_key;

                section = 'blog-' + $dataAgencie + '-' + $dataBlog;

                $getblog_id = +CAM.getValue('#hidden-blog-id');
                $getAgencieblog_name = CAM.getValue('#hidden-agencie-name');
                $getAgencieblog_key = CAM.getValue('#hidden-agencie-key');
                $getblog_name = CAM.getValue('#hidden-blog-name');
                $getblog_key = CAM.getValue('#hidden-blog-key');

                viewSectionBlogByNewsMethod.viewSectionBlogByNews();

                console.log($dataBlogId);
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
    Finch.route('/nosotros', {
        setup: function(bindings) {
            section = "about-us";
            // Add favicon
            window.onload = favicon.load_favicon();
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            currentSectionMethod.currentSection_about_us();

            viewSectionAboutUsMethod.viewSectionAboutUs();

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
            addAttrNavAgenciesNewsMethod.addAttrNavAgenciesNews();
        },
        load: function(bindings) {
            viewNavbarMethod.viewNavbar();
            sticky_wrapper_methods.sticky_wrapper();

            currentSectionMethod.currentSection_about_us();

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
