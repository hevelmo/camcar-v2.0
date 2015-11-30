/* ------------------------------------------------------ *\
    [Variables] 'Zone'
\* ------------------------------------------------------ */
    var section;
    var IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
        isIE = /msie/i.test( navigator.userAgent );
    // Back to Top
    var offset, offset_opacity, scroll_top_duration;
    offset = 300;
    offset_opacity = 1200;
    scroll_top_duration = 700;
/* ------------------------------------------------------ *\
    [functions] Alert Custom
\* ------------------------------------------------------ */
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
    [Metodos] backToTopMethod
\* ------------------------------------------------------ */
    var backToTopMethod = {
        backToTop: function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
                }, scroll_top_duration
            );
        },
        windowScroll: function() {
            ( $(this).scrollTop() > offset ) ? $(domEl._back_to_top).addClass('cd-is-visible') : $(domEl._back_to_top).removeClass('cd-is-visible cd-fade-out');
            if ( $(this).scrollTop() > offset_opacity ) {
                $(domEl._back_to_top).addClass('cd-fade-out');
            }
        },
        init_window_scroll_top: function() {
            $(window).scroll(backToTopMethod.windowScroll);
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] Favicon
\* ------------------------------------------------------ */
    var favicon = {
        load_favicon: function() {
            favicon.change("../img/ico/camcaricon.ico");
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
    [Methods] sticky_wrapper_methods
\* ------------------------------------------------------ */
    var sticky_wrapper_methods = {
        sticky_wrapper: function() {
            $('.navbar').waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: 'sticky'
            });
        }
    }
/* ------------------------------------------------------ *\
    [Methods] Animated
\* ------------------------------------------------------ */
    var animatedMethods = {
        animated : function () {
            $('.animated').appear(function() {
                var element, animation, animationDelay;

                element = $(this);
                animation = element.data('animation');
                animationDelay = element.data('delay');

              if(animationDelay) {
                setTimeout(function() {
                  element.addClass( animation + " visible" );
                  element.removeClass('hiding');
                  if(element.hasClass('counter')) {
                    element.find('.value').countTo();
                  }
                }, animationDelay);
              } else {
                element.addClass( animation + " visible" );
                element.removeClass('hiding');
                if(element.hasClass('counter')) {
                  element.find('.value').countTo();
                }
              }
            },{accY: -150});
        }
    }
/* ------------------------------------------------------ *\
    [Methods] Animated
\* ------------------------------------------------------ */
    var wow_animated_methods = {
        wow_animated: function() {
            /*==WOW JS==*/
            var ww = $(window).width();

            /*==WOW JS==*/
            if(ww > 480){
                wow = new WOW({
                    animateClass: 'animated',
                    offset: 0
                });
                wow.init();
            }
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] mobile_menu_methods
\* ------------------------------------------------------ */
    var mobile_menu_methods = {
        mobile_menu_toggle: function(event) {
            $(this).toggleClass("opened");
            $(".toggle-menu").slideToggle();
            $(".site-header-wrapper").toggleClass("sticktr");
            $(".body").toggleClass("sticktr");
            var SHHH = $(".site-header").innerHeight();
            var NBHH = $(".navbar").innerHeight();
            var THHH = $(".top-header").innerHeight();
            $(".toggle-menu").css("top",NBHH);
            $(".header-v2 .toggle-menu").css("top",SHHH);
            $(".header-v3 .toggle-menu").css("top",SHHH + THHH);
            console.log('test');
            return false;
        },
        has_menu_toggle: function() {
            if($("#menu-toggle").hasClass("opened")){
                $(".toggle-menu").css("display","block");
            } else {
                $("#menu-toggle").css("display","none");
            }
        }
    }
/* ------------------------------------------------------ *\
    [functions] setWidthme
\* ------------------------------------------------------ */
    var setWidthMethod = {
        setWidth: function() {
            var arrayText, arrayText2;

            arrayText=Array();
            arrayText2=Array();

            $('.grid-content').each( function () {
                var firstDiv, secondDiv;

                firstDiv = $(this).find("#content-title");
                secondDiv = $(this).find("#container-paragraph");

                if( firstDiv.html().length > 115 ) {
                    arrayText.push( firstDiv.html() );

                    firstDiv.html( firstDiv.html().substr( 0,115 ) + "<i style='color: #000; font-size: 14px;'>...</i>" );

                    //$(this).append( "<h3 class='mas cortado' id='"+(arrayText.length-1)+"'>(más)</h3>" );
                }
                if( secondDiv.html().length > 220 ) {
                    arrayText2.push( secondDiv.html() );

                    secondDiv.html( secondDiv.html().substr( 0,220 ) + "<i style='color: #000; font-size: 14px;'>...</i>" );

                    //$(this).append("<h3 class='mas cortado' id='"+(arrayText2.length-1)+"'>(más)</h3>");
                }
                $(this).show();
            });
        }
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
    [Methods] INPUTS RADIO, CHECKBOX
\* ------------------------------------------------------ */
    var changeInputsMethods = {
        clickChangeCheckbox : function(event) {
            if ($(".label-checkbox").length) {
                $('.label-checkbox input:checked').each(function(){
                    $(this).parent('label').addClass('checkbox-checked');
                });
            }
            if ($(this).is(':checked')) {
                $(this).parent('.label-checkbox').find(':checkbox').attr('checked', true);
                $(this).parent('.label-checkbox').addClass('checkbox-checked');
                $(this).val('on');
                $('#contact_subscription').val('Activado');
                $('#test_drive_model_subscription').val('Activado');
            } else {
                $(this).parent('label').find(':checkbox').attr('checked', false);
                $(this).parent('label').removeClass('checkbox-checked');
                $(this).val('off');
                $('#contact_subscription').val('Desactivado');
                $('#test_drive_model_subscription').val('Desactivado');
            }
        },
        clcikChangeRadio : function(event) {
            if ($(".label-radio").length) {
                $('.label-radio input:checked').each(function(){
                    //$(this).parent('label').addClass('radio-checked');
                });
            }
            if ($(this).hasClass('radio-checked')) {
                $(this).find(':radio').attr('checked', true);
                $(this).addClass("radio-checked");
            } else {
                $(".label-radio").removeClass("radio-checked");
                $(".label-radio").find(':radio').attr('checked', false);
                $(this).find(':radio').attr('checked', true);
                $(this).addClass("radio-checked");
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] windowWidthMethod
\* ------------------------------------------------------ */
    var windowWidthMethod = {
        windowWidth: function() {
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            if (windowWidth > 900) { // Medium breakpoint
                var heroCarousels = document.querySelectorAll(".HeroCarousel");
                var carousel, yOffset, element, carouselHeight;
                var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

                for (var i = 0; i < heroCarousels.length; i++) {
                    carousel = heroCarousels[i];
                    yOffset = 0;
                    element = carousel;

                    while (element) {
                        yOffset += (element.offsetTop - element.scrollTop + element.clientTop);
                        element = element.offsetParent;
                    }

                    carouselHeight = windowHeight - yOffset;

                    if (carouselHeight > 450) {
                        carousel.style.height = carouselHeight + "px";
                    }
                }
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] goSectioMethod
\* ------------------------------------------------------ */
    var goSectionMethod = {
        goSection_home: function() {
        }
    }
/* ------------------------------------------------------ *\
    [Methods] addAttrForSectionMethod
\* ------------------------------------------------------ */
    var addAttrForSectionMethod = {
        addAttrForSection_home: function() {
        }
    }
/* ------------------------------------------------------ *\
    [Methods] removeAttrForSectionMethod
\* ------------------------------------------------------ */
    var removeAttrForSectionMethod = {
        removeAttrForSection_home: function() {
        }
    }
/* ------------------------------------------------------ *\
    [Methods] addStylesForSectionMethod
\* ------------------------------------------------------ */
    var addStylesForSectionMethod = {
        addStylesSection_home: function() {
        }
    }
/* ------------------------------------------------------ *\
    [Methods] cleanStylesForSectionMethod
\* ------------------------------------------------------ */
    var cleanStylesForSectionMethod = {
        cleanStylesForSection: function() {
        },
        cleanStylesSection_home: function() {
        }
    }
/* ------------------------------------------------------ *\
    [Methods] getFunctionsMethods
\* ------------------------------------------------------ */
    var getFunctionsMethods = {
        getFunctions: function() {
            backToTopMethod.init_window_scroll_top();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionHomeMethod
\* ------------------------------------------------------ */
    var viewSectionHomeMethod = {
        addTemplatesSectionHome: function() {
            CAM.loadTemplate(tempsNames.recurrent_home_start_site_navbar, domEl._start_site_navbar_name);
            CAM.loadTemplate(tempsNames.recurrent_home_hero_slide_carousel, domEl._start_hero_carousel_name);
            viewSectionHomeMethod.loadTemplatesOurBrands();
            CAM.loadTemplate(tempsNames.recurrent_home_group_counter, domEl._start_large_pad_group_counter_name);
            CAM.loadTemplate(tempsNames.recurrent_home_full_width_features, domEl._start_full_width_features_name);
            CAM.loadTemplate(tempsNames.recurrent_home_dealer_search_gmap, domEl._start_dealer_search_map_name);
        },
        loadTemplatesOurBrands: function() {
            var ourBrandsData;
            ourBrandsData = CAM.getInternalJSON(urlsApi.getBrandsLogos);
            CAM.loadTemplate(tempsNames.recurrent_home_our_brands, domEl._start_large_pad_our_brands_name, ourBrandsData);
        },
        loadTemplatesSectionHome: function() {
            viewSectionHomeMethod.addTemplatesSectionHome();
        },
        recurrentSecionHome: function() {
            dataStarSiteHomeAttributes = [
                ['header', {'id':domEl._start_site_navbar, 'class':'navbar navigation-bar-header nav-content'}, '', 1],
                ['div', {'id':domEl._start_hero_carousel, 'class':'about-content hero-content'}, '', 1],
                ['section', {'id':domEl._start_large_pad_our_brands, 'class':'large-pad about-content'}, '', 1],
                ['section', {'id':domEl._start_large_pad_group_counter, 'class':'large-pad about-content black-paper-bg text-white', 'style':'padding: 30px 0 15px;'}, '', 1],
                ['section', {'id':domEl._start_full_width_features, 'class':'fullwidth-features about-content'}, '', 1],
                ['div', {'id':domEl._start_dealer_search_map, 'class':'dealer-search-map about-content'}, '', 1]
            ];
            CAM.appendMulti(domEl.div_recurrent, dataStarSiteHomeAttributes);          
        },
        viewSectionHome: function() {
            viewSectionHomeMethod.recurrentSecionHome();
            viewSectionHomeMethod.loadTemplatesSectionHome();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] removeRecurrentsMethod
\* ------------------------------------------------------ */
    var removeRecurrentsMethod = {
        removeRecurrents: function() {
        },
        removeRecurrents_home: function() {
        }
    }
/* ------------------------------------------------------ *\
    [Methods] Google Maps -> agentsMap
\* ------------------------------------------------------ */
    var agentsMap = {
        AgentsMap : function () {
            var styles, mapData, agn_name, agn_address, agn_latitud, agn_longitudl,
                directorio, agn_folder_agencia, agn_img, location_center, mapOptions,
                map, markers, bounds, info_windows;

            mapData = CAM.getInternalJSON(urlsApi.getMapa);
            agn_latitud = mapData.campa[0].agn_latitud;
            agn_longitud = mapData.campa[0].agn_longitud;

            /* Map Center Location - From Theme Options */
            //location_center = new google.maps.LatLng(Agents[0].lat,Agents[0].lng);
            location_center = new google.maps.LatLng(agn_latitud,agn_longitud);

            // Create an array of styles.

            styles = [
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [{ "color": "#ffffff" }]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.fill",
                    "stylers": [{ "color": "#000000" }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [{ "color": "#eeeeee" }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{ "color": "#2ec3f3" }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [{ "color": "#eeeeee" }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [{ "color": "#cccccc" }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{ "color": "#666666" }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{ "color": "#ffffff" }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{ "color": "#bbbbbb" }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{ "color": "#dddddd" }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [{ "color": "#e5e5e5" }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{ "visibility": "off" }]
                },
                {
                    featureType: "poi.business",
                    elementType: "labels.icon",
                    stylers: [
                        { visibility: "off" }
                    ]
                },
                {
                    featureType: "poi.school",
                    elementType: "labels.icon",
                    stylers: [
                        { visibility: "off" }
                    ]
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.icon",
                    stylers: [
                        { visibility: "off" }
                    ]
                }
            ];

            // Create a new StyledMapType object, passing it the array of styles,
            // as well as the name to be displayed on the map type control.
            //var styledMap = new google.maps.StyledMapType(styles, {name: "GrayScale"});

            mapOptions = {
                zoom: 10,
                center: new google.maps.LatLng(agn_latitud,agn_longitud),
                scrollwheel: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
            }

            map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

            //map.mapTypes.set('map_style', styledMap);
            //map.setMapTypeId('map_style');

            markers = new Array();
            bounds = new google.maps.LatLngBounds();
            info_windows = new Array();

            /* Properties Array */
            for (var i=0; i < mapData.campa.length; i++) {
                agn_name = mapData.campa[i].agn_nombre;
                agn_address = mapData.campa[i].agn_direccion;
                directorio = mapData.campa[i].agn_folder;
                agn_folder_agencia = 'sitio/agencias/logos';
                agn_img = mapData.campa[i].agn_logo2;
                agn_latitud = mapData.campa[i].agn_latitud;
                agn_longitud = mapData.campa[i].agn_longitud;

                markers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(agn_latitud,agn_longitud),
                    map: map,
                    icon: '../img/sitio/pin_camcar.png',
                    title: agn_name,
                    animation: google.maps.Animation.DROP
                });

                bounds.extend(markers[i].getPosition());

                info_windows[i] = new google.maps.InfoWindow({
                    content:
                        '<div class="marker-info-win" style="text-align: center;">'+
                        '<div class="marker-inner-win"><span class="info-content">'+
                        '<img src="../img/'+agn_folder_agencia+'/'+agn_img+'" alt="'+agn_name+'" style="margin-botton: 10px;" width="100">'+
                        '<h5 class="marker-heading" style="color:#000; padding: 0px; margin: 0px;">'+agn_name+'</h5>'+
                        '<span>'+agn_address+'</span>' +
                        '</span>'+
                        '</div></div>'
                });

                attachInfoWindowToMarker(map, markers[i], info_windows[i]);
            }
            //console.log(mapData);
            map.fitBounds(bounds);


            /* function to attach infowindow with marker */
            function attachInfoWindowToMarker( map, marker, infoWindow ) {
                //infoWindow.open(map, marker);
                google.maps.event.addListener( marker, 'click', function() {
                    infoWindow.open( map, marker );
                });
                //console.log(infoWindow);
            }
        },
        loadAgentsMap : function () {
            google.maps.event.addDomListener(window, 'load', agentsMap.AgentsMap());
        }
    }
/* ------------------------------------------------------ *\
    [Methods] inputVal
\* ------------------------------------------------------ */
    var inputValMetdods = {
        isIntegerKP: function (event) {
            return /\d/.test(String.fromCharCode(event.keyCode));
        },
        //http://www.lawebdelprogramador.com/foros/JavaScript/1074741-introducir_solo_numero_dos_decimales.html
        isDecimalKP: function(event) {
            var key, value;
            value = $(this).val();
            key = event.keyCode ? event.keyCode : event.which;

            // backspace
            if(key == 8) {
                return true;
            }
            // 0-9
            if(key > 47 && key < 58) {
                if(value == '') {
                    return true;
                }
                regexp = /.[0-9]{15}$/;
                return !(regexp.test(value));
            }
            // .
            if(key == 46) {
                if(value == '') {
                    return false;
                }
                regexp = /^[0-9]+$/;
                return regexp.test(value);
            }
            // other key
            return false;
        },
        roundDecimalBlur: function(event) {
            var value;
            value = $(this).val();
            value = CAMAD.roundNDecimalFormat(value, 2);
            $(this).val(value);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] validations_regexp
\* ------------------------------------------------------ */
    var validations_regexp = {
        address : new RegExp( /^[a-zá-úüñ,#0-9. -]{2,}$/i ),
        date    : new RegExp( /^(\d{4})-(\d{1,2})-(\d{1,2})$/ ),
        email   : new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ),
        name    : new RegExp( /^[a-zá-úüñ. ]{2,}$/i ),
        phone   : new RegExp( /^[0-9\s\-]{7,13}$/ ),
        upload  : new RegExp( /^[\w+\/]+\.\w{3}$/ )
    }
/* ------------------------------------------------------ *\
    [Methods] validation_messages
\* ------------------------------------------------------ */
    var validation_messages = {
        date            : 'Debe ser aaaa-mm-dd',
        date_tomorrow   : 'Sólo a partir de mañana',
        email           : 'Verifica tu correo',
        general         : 'Campo no válido',
        not_config      : 'Tipo desconocido',
        not_null        : 'No puede ser nulo',
        phone           : 'Verifica que tu número sea de 10 dígitos',
        required        : 'Campo requerido',
        empty           : 'Campo vacío',
        upload          : 'Archivos validos: PDF, DOC, DOCX'
    }
/* ------------------------------------------------------ *\
    [Methods] validate
\* ------------------------------------------------------ */
    var validateMethods = {
        validate : function(value, rules, required, custom_message, formulario, archivo) {
            var r = { valid : false, message : '' },
            null_value = value == undefined || value === '' || value === $("#user_profile_pic").val() ,
            ii, rule;
            required = required === true ? true: false;
            if( required ){
                if( null_value ){
                    r.message = validation_messages.required;
                }
            }else{
                if( null_value ){
                    r.valid = true;
                }
            }
            if( !r.valid && r.message === '' ){
                ii = rules.length;
                while( ii-- ){
                    rule = rules[ii];
                    switch( rule ){
                        case 'email':
                            if( !validations_regexp.email.test( value ) ){
                                r.message = validation_messages.email;
                            }
                            break;
                        case 'name':
                            if( !validations_regexp.name.exec( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'address':
                            if( !validations_regexp.address.exec( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'phone':
                            if( !validations_regexp.phone.exec( value ) ){
                                r.message = validation_messages.phone;
                            }
                            break;
                        case 'area':
                            if(  !is_model_name( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'upload':
                            if( !valid_extension_file( formulario, value ) ){
                                r.message = validation_messages.upload;
                                //console.log(r.message);
                            }
                            break;
                        default:
                            r.message = validations_regexp.not_config;
                            break;
                    }
                }
                if( r.message === '' ){
                    r.valid = true;
                }
            }
            if( custom_message && !r.valid ){
                r.message = custom_message;
            }
            return r;
        },
        //Display Input errors
        error_bubble : function( $label, show, message ){
            var $p = $label.parent().children('p.invalid-message');
            if( show ){
                if( message ){
                    $p.html( message + '<span>&nbsp;</span>' ).stop().hide().fadeIn();
                }else{
                    $p.stop().hide().fadeIn();
                }
            }else{
                $p.hide();
            }
        },
        validate_input : function(event) {
            var target = $(event.target);
            //console.log(target);
            if( target.is('input') || target.is('textarea') || target.is('input[type="file"]') ){
                var valid_data = target.data('validation-data');
                var val_data    = valid_data.split('|'),
                    required    = val_data.indexOf('required');
                if( required >= 0 ){
                    val_data.splice(required, 1);
                }
                var value = target.val(),
                    validation = validateMethods.validate( value, val_data, ( required >= 0 )  );
                validateMethods.error_bubble( target, !validation.valid, validation.message );
                return validation.valid;
            }else{
                var is_valid = !( target.val() === null );
                validateMethods.error_bubble( target, !is_valid, validation_messages.required );
                return is_valid;
            }
        }
    }
