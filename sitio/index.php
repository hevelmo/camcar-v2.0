<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="es" class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html lang="es" class="no-js lt-ie10"> <![endif]-->
<html class="no-js" lang="es">
	<head>
        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />

		<meta class="temp" name="description" content="Grupo Automotriz, 31 Agencias, 14 Marcas, 13 Ciudades, Seminuevos, Talleres, Contacto, Suscríbete, © Copyright 2015 Camcar, Aviso de Privacidad."/>
        <meta class="temp" name="copyright"content="© Copyright 2015 Camcar">
        <meta class="temp" name="robots" content="index, follow">
        <link class="temp" rel="alternate" hreflang="es-MX" href="http://camcar.mx/sitio" />

		<title>Camcar Grupo Automotriz</title>

        <link href="http://fonts.googleapis.com/css?family=Roboto:100,400,300,700,400italic,500%7CMontserrat:400,700" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="../css/import-sitio.css">

        <link rel="apple-touch-icon" href="../img/ico/apple-touch-icon.png">
        <link rel="shortcut icon" href="../img/ico/camcaricon.ico">

        <!--[if lt IE 9]>
            <script src="../../lib/assets/plugins/html5shiv/html5shiv.min.js"></script>
        <![endif]-->
        <!--[if lt IE 10]>
            <script src="../../lib/assets/plugins/media-match/media.match.min.js"></script>
            <script src="../../lib/assets/plugins/respond/respond.min.js"></script>
        <![endif]-->

        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-60582942-1', 'auto');
            ga('send', 'pageview');
        </script>

        <script>
            var nav = navigator.appName;

            if(nav == "Microsoft Internet Explorer"){
                // Detectamos si nos visitan desde IE
                if(nav == "Microsoft Internet Explorer"){
                    // Convertimos en minusculas la cadena que devuelve userAgent
                    var ie = navigator.userAgent.toLowerCase();
                    // Extraemos de la cadena la version de IE
                    var version = parseInt(ie.split('msie')[1]);

                    // Dependiendo de la version mostramos un resultado
                    switch(version){
                        case 6:
                            alert("Estas usando IE 6, es obsoleto. \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        case 7:
                            alert("Estas usando IE 7, es obsoleto \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        case 8:
                            alert("Estas usando IE 8, es obsoleto \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        /*case 9:
                            alert("Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v10 y v11 ");
                            console.log("Estas usando IE 9, mas o menos compatible");
                            break;*/
                        default:
                            console.log("Usas una version compatible");
                            break;
                    }
                }
            }
        </script>

        <script src="../lib/modernizr.js"></script>
	</head>
	<body id="index" class="sitio">
		<!-- Auxiliar Temporal Inputs's DIV -->
    	<div id='hidden-inputs-session'></div>
    	<!-- Auxiliar Temporal Inputs's DIV -->
    	<div id='hidden-inputs-temporal'></div>

        <!-- Start Site Header -->
        <header class="navbar navigation-bar-header nav-content">
            <div class="container container-site sp-cont">
                <!--<div class="search-function">
                    <a href="#" class="search-trigger"><i class="fa fa-search"></i></a>
                </div>-->
                <a class="visible-sm visible-xs mobile-toggle" id="menu-toggle">
                    <!--<i class="fa fa-bars"></i>-->
                    <div class="bar-1"></div>
                    <div class="bar-2"></div>
                </a>
                <a class="visible-xs-home-link visible-sm visible-xs" href="#">
                    <img alt="Logo" class="logo" src="../img/logos/logo_camcar.png" alt="Lincoln Cavsa">
                </a>
                <!-- Main Navigation -->
                <nav class="main-navigation toggle-menu navigation-bar" role="navigation">
                    <a class="home-link main-navigator-home-link" href="#">
                        <img alt="Logo" class="logo" src="../img/logos/logo_camcar.png" alt="Lincoln Cavsa">
                    </a>
                    <ul class="sf-menu navigation-bar">
                        <li><a id="return_index" class="current cur-hover menu-toggle-close">Inicio</a></li>
                        <li><a id="go-agencies-news" class="cur-hover menu-toggle-close">Agencias</a></li>
                        <li class="has-dropdown">
                            <a id="sem-agencies" class="cur-hover">Seminuevos</a>
                            <ul class="subnav">
                                <li><a id="go-agencies" class="cur-hover menu-toggle-close">Agencias</a></li>
                                <li><a id="go-inventories" class="cur-hover menu-toggle-close">Inventarios</a></li>
                            </ul>
                        </li>
                        <li class=""><a id="go-workshop" class="cur-hover menu-toggle-close">Talleres</a></li>
                        <li class=""><a id="go-rental" class="cur-hover menu-toggle-close">Rentas</a></li>
                        <li class=""><a id="go-news" class="cur-hover menu-toggle-close">Noticias</a></li>
                        <li class=""><a id="sem-contact" class="cur-hover menu-toggle-close">Nosotros</a></li>
                        <li class="visible-sm visible-xs visible-xs-poeple"><a href="../login/" id="sem-people-camcar" class="cur-hover">Gente Camcar</a></li>
                    </ul>
                    <a href="../login/" class="vin_people none-visible-xs" id="sem-people-camcar"><i class="fa fa-user"></i></a>
                </nav>
            </div>
        </header>
        <!-- End Start Site Header -->

    	<!--Templates's DIV-->
    	<div class="wrapper_content_interactive" id='content-temporal-interactive'></div>

        <!-- Begin: Footer News -->
        <section class="footer-news footer-content" style="background-color: #b21117 !important;">
            <div class="container">
                <div class="row">
                    <div class="col-md-1 col-md-1"></div>
                    <div class="col-md-10 col-md-10">
                        <!-- Begin MailChimp Signup Form -->
                        <div id="mc_embed_signup">
                            <form action="//camcar.us6.list-manage.com/subscribe/post?u=eb6adc86fe16ad4e6562f80c1&amp;id=93e761d2cf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                <div id="mc_embed_signup_scroll">
                                    <h4 class="h-widget">
                                        Suscríbete a nuestro boletín informativo y entérate de nuestras promociones.
                                    </h4>
                                    <div class="indicates-required">
                                        <span class="asterisk">
                                            <i class="fa fa-asterisk"></i>
                                        </span>
                                        Campo requerido
                                    </div>
                                    <div class="col-md-3 col-md-3">
                                        <div class="mc-field-group">
                                            <fieldset>
                                                <label for="mce-EMAIL"></label>
                                                <input
                                                    class="input-newsletter validate-required"
                                                    type="email"
                                                    name="EMAIL"
                                                    class=""
                                                    id="mce-EMAIL"
                                                    placeholder="Correo Electrónico"
                                                    data-validation-data="required|email">
                                                <p class="invalid-message" id="error_mensaje">Este campo es obligatorio<span>&nbsp;</span></p>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-md-3">
                                        <div class="mc-field-group">
                                            <fieldset>
                                                <label for="mce-FNAME"></label>
                                                <input
                                                    class="input-newsletter validate-required"
                                                    type="text"
                                                    name="FNAME"
                                                    class=""
                                                    id="mce-FNAME"
                                                    placeholder="Nombre(s)"
                                                    data-validation-data="required|name">
                                                <p class="invalid-message" id="error_mensaje">Este campo es obligatorio<span>&nbsp;</span></p>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-md-3">
                                        <div class="mc-field-group">
                                            <fieldset>
                                                <label for="mce-LNAME"></label>
                                                <input
                                                    class="input-newsletter validate-required"
                                                    type="text"
                                                    name="LNAME"
                                                    class=""
                                                    id="mce-LNAME"
                                                    placeholder="Apellido(s)"
                                                    data-validation-data="required|name">
                                                <p class="invalid-message" id="error_mensaje">Este campo es obligatorio<span>&nbsp;</span></p>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-md-2">
                                        <div id="mce-responses" class="clear">
                                            <div class="response" id="mce-error-response" style="display:none"></div>
                                            <div class="response" id="mce-success-response" style="display:none"></div>
                                        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                        <div style="position: absolute; left: -5000px;">
                                            <input type="text" name="b_eb6adc86fe16ad4e6562f80c1_93e761d2cf" tabindex="-1" value="">
                                        </div>
                                        <div class="clear">
                                            <div class="linkContainer ctaContainer-button text-center">
                                                <button type="submit" value="Subscribe" name="subscribe" style="font-size: 1.3em; display: block; margin-top: 5px; padding: 10px 45px;" class="secondary" id="mc-embedded-subscribe">Suscríbete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-1 col-md-1"></div>
                                </div>
                            </form>
                        </div>
                        <!--End mc_embed_signup-->
                    </div>
                    <div class="col-md-1 col-md-1"></div>
                </div>
            </div>
        </section>
        <!-- End: Footer News -->

        <!-- Begin: Footer container -->
        <footer class="footer-6 footer-content" style="padding-top: 35px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-md-12">
                        <h5 style="">Síguenos en: </h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                        <a href="https://www.facebook.com/CamcarMexico" target="_blank" class="button py4 button-transparent bg-facebook col-md-12 col-xs-12">
                            <i class="social_facebook"></i>
                            Facebook
                        </a>
                        <div class="clearfix"></div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <a href="https://twitter.com/CamcarMexico" target="_blank" class="button py4 button-transparent bg-twitter col-md-12 col-xs-12">
                            <i class="social_twitter"></i>
                            Twitter
                        </a>
                        <div class="clearfix"></div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <a href="https://youtube.com/c/CamcarMx" target="_blank" class="button py4 button-transparent bg-youtube col-md-12 col-xs-12">
                            <i class="social_youtube"></i>
                            Youtube
                        </a>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="footer-lower">
                            <span>© Copyright 2015 Camcar<span><a id="go-privacy">Aviso de Privacidad</a></span></span>
                            <ul class="social-links">
                                <!--<li><a href="https://www.facebook.com/LandroverGDL" target="_blank"><i class="social_facebook"></i></a></li>
                                <li><a href="https://twitter.com/lrcarsgdl" target="_blank"><i class="social_twitter"></i></a></li>
                                <li><a href="https://www.youtube.com/user/LandRoverMx" target="_blank"><i class="social_youtube"></i></a></li>
                                <li><a href="http://instagram.com/LandRoverGuadalajara" target="_blank"><i class="social_instagram"></i></a></li>
                                <ul class="social-links">
                                <li><a href="https://www.facebook.com/SeminuevosPremiumGDL" target="_blank"><i class="social_facebook"></i></a></li>-->
                                <li><div class="log-medigraf" style="margin-top: 10px;"><a href="http://medigraf.com.mx" target="_blank"><div class="medigraf"></div></a></div></li>
                            </ul>
                        </div>
                    </div>
                </div><!--end of row-->

            </div><!--end of container-->
        </footer>
        <!--   End: Footer container -->

        <!-- back to top -->
        <a href="#0" class="back-to-top cd-top">
            <i class="fa fa-angle-double-up fa-3x animation-pulse" style=""></i>
        </a>

		<!-- MAIN -->
		<script src="../lib/site/jquery-1.11.2.js"></script>
		<!--<script src="../lib/modernizr.js"></script>-->
		<script src="../lib/site/bootstrap.js"></script>
		<!-- CORE -->
		<script src="../lib/jquery.gdb.js"></script>
		<script src="../lib/jquery-ui.js"></script>
		<script src="../lib/underscore.js"></script>
		<script src="../lib/moment.js"></script>
		<script src="../lib/accounting.js"></script>
		<script src="../lib/finch.js"></script>
        <!-- Plugins -->
        <script src="../lib/site/jquery.appear.js"></script>
        <script src="../lib/site/jquery.countTo.js"></script>
        <script src="../lib/site/waypoints.js"></script>
        <script src="../lib/site/waypoints-sticky.js"></script>
        <script src="../lib/site/wow-animated.js"></script>
        <!-- HANDLEBARS -->
        <script src="../lib/handlebars.runtime.js"></script>
        <!-- TEMPLATES -->
        <script src='templates/min/templates.min.js'></script>
        <!-- FORMS -->
        <script src="../lib/forms.js"></script>
        <script src="../lib/sha512.js"></script>
        <!-- GOOGLE API -->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCqo-F2TnMAABZvfV5yTQLlWvUCJlJViU&amp;sensor=false"></script>
		<!-- PLUGINS -->
		<!-- CORE JS -->
        <?php /*
		<script src='js/min/core.min.js'></script>
        */ ?>
	    <script src='js/objects.js'></script>
	    <script src='js/method.js'></script>
	    <script src='js/model.js'></script>
	    <script src='js/room.js'></script>
	    <script src='js/main.js'></script>
	</body>
</html>

