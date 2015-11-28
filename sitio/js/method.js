/* ------------------------------------------------------ *\
 [Variables] 'Zone'
\* ------------------------------------------------------ */
    var section;
    var IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
        isIE = /msie/i.test( navigator.userAgent );
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
    [Function] ScrollToTop
\* ------------------------------------------------------ */
    function scrollToTop() {
        var windowWidth, $arrow;

        windowWidth = $(window).width(), didScroll = false;
        $arrow = $('#back-to-top');

        $arrow.on("click", function(e) {
            $('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
            Finch.navigate('/');
            e.preventDefault();
        })

        $(window).scroll(function() {
            didScroll = true;
        });

        setInterval(function() {
            if( didScroll ) {
                didScroll = false;

                if( $(window).scrollTop() > 200 ) {
                    $arrow.fadeIn();
                } else {
                    $arrow.fadeOut();
                }
            }
        }, 250);
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
 [Methods] Home
\* ------------------------------------------------------ */

/* ------------------------------------------------------ *\
    [Methods] inputVal
\* ------------------------------------------------------ */
    var inputValMetdods = {
        isIntegerKP: function (event) {
            return /\d/.test(String.fromCharCode(event.keyCode));
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
        phone   : new RegExp( /^[0-9\s\-]{7,13}$/ )
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
        empty           : 'Campo vacío'
    }
/* ------------------------------------------------------ *\
    [Methods] validate
\* ------------------------------------------------------ */
    var validateMethods = {
        validate : function(value, rules, required, custom_message) {
            var r = { valid : false, message : '' },
            null_value = value == undefined || value === '' ,
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
                        case 'grade':
                            if(  !is_model_name( value ) ){
                                r.message = validation_messages.required;
                            }
                            break;
                        case 'date':
                            if( !validations_regexp.date.exec( value ) ){
                                r.message = validation_messages.date;
                            }
                            break;
                        case 'phone':
                            if( !validations_regexp.phone.exec( value ) ){
                                r.message = validation_messages.phone;
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
            if( target.is('input') || target.is('textarea') ){
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
