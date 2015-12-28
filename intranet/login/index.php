<?php

	include '../../incorporate/db_connect.php';
    include '../../incorporate/functions.php';
    sec_session_start();
    if (login_check($mysqli) == true) {
        header('Location: ../../intranet/admin');
    }

?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html lang="en" class="no-js css-menubar lt-ie10"> <![endif]-->
<html class="no-js css-menubar" lang="en">
	<head>
        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />

		<title>CAMCAR Ingresar</title>

        <link rel="stylesheet" href="../../css/import-login.css">

        <link rel="apple-touch-icon" href="../../img/ico/apple-touch-icon.png">
        <link rel="shortcut icon" href="../../img/ico/camcaricon.ico">

        <!--[if lt IE 9]>
		    <script src="../../lib/plugins/html5shiv/html5shiv.min.js"></script>
		<![endif]-->
		<!--[if lt IE 10]>
		    <script src="../../lib/plugins/media-match/media.match.min.js"></script>
		    <script src="../../lib/plugins/respond/respond.min.js"></script>
		<![endif]-->
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
        <script src="../../lib/modernizr.js"></script>
		<script src="../../lib/assets/plugins/breakpoints/breakpoints.js"></script>
		<script>
			Breakpoints();
		</script>
	</head>
	<body class="page-login-v2 layout-full page-dark">
		<!--[if lt IE 8]>
        	<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    	<![endif]-->
    	<!-- Page -->
		<div class="page animsition" data-animsition-in="fade-in" data-animsition-out="fade-out">
			<div class="page-content">
				<div class="page-brand-info">
					<div class="brand">
						<img class="brand-img brand-img-resp" src="../../img/logos/logo-camcar-ver-white@2x.png" alt="Camcar Grupo Automotriz, ve por más...">
					</div>
				</div>
				<!-- Page Login Main -->
				<div class="page-login-main">
					<div class="brand visible-xs">
						<img class="brand-img brand-img-visible-xs-resp" src="../../img/logos/logo-camcar-hor-white@2x.png" alt="Camcar Grupo Automotriz, ve por más...">
					</div>
					<h3 class="font-size-24">Ingresar</h3>
					<!-- Form -->
					<form method="post" action="process_login.php">
						<div class="form-group">
							<label class="sr-only" for="inputEmail">Usuario</label>
							<input type="email" class="form-control camcar-remark-input" id="inputEmail" name="email" placeholder="Usuario">
						</div>
						<div class="form-group">
							<label class="sr-only" for="inputPassword">Contraseña</label>
							<input type="password" class="form-control camcar-remark-input" id="inputPassword" name="password" placeholder="Contraseña">
						</div>
						<div class="form-group text-center  clearfix">
							<a class="form__link" href="../../sitio">
								<i class="fa fa-chevron-left"></i> Regresar
							</a>
						</div>
						<button type="submit" class="form__submit button button-outline bg-red-camcar white-camcar button-resp col-sm-6 col-md-12" style="padding: 1em; margin: 0 auto;" onclick="formhash(this.form, this.form.password);">
							<i class="fa fa-user fa-lg fa-fw"></i> Ingresar
						</button>
					</form>
					<!-- End Form -->

					<footer class="page-copyright">
						<p>© 2015. CAMCAR.</p>
					</footer>
				</div>
				<!-- End Page Login Main -->
			</div>
		</div>
		<!-- End Page -->

		<!-- MAIN -->
		<script src="../../lib/jquery.js"></script>
		<script src="../../lib/bootstrap.js"></script>

		<!-- CORE -->
		<script src="../../lib/jquery.gdb.js"></script>
		<script src="../../lib/jquery-ui.js"></script>
		<script src="../../lib/underscore.js"></script>
		<script src="../../lib/moment.js"></script>
		<script src="../../lib/accounting.js"></script>
		<script src="../../lib/finch.js"></script>

		<!-- HANDLEBARS -->
		<script src="../../lib/handlebars.runtime.js"></script>

		<!-- FORMS -->
		<script src="../../lib/forms.js"></script>
		<script src="../../lib/sha512.js"></script>

		<!-- PLUGINS -->
		<script src="../../lib/assets/plugins/animsition/jquery.animsition.js"></script>
		<script src="../../lib/assets/plugins/asscroll/jquery-asScroll.js"></script>
		<script src="../../lib/assets/plugins/mousewheel/jquery.mousewheel.js"></script>
		<script src="../../lib/assets/plugins/asscrollable/jquery.asScrollable.all.js"></script>
		<script src="../../lib/assets/plugins/ashoverscroll/jquery-asHoverScroll.js"></script>

		<script src="../../lib/assets/plugins/switchery/switchery.js"></script>
		<script src="../../lib/assets/plugins/intro-js/intro.js"></script>
		<script src="../../lib/assets/plugins/screenfull/screenfull.js"></script>
		<script src="../../lib/assets/plugins/slidepanel/jquery-slidePanel.js"></script>

		<!--Plugins For This Page Login -->
		<script src="../../lib/assets/plugins/jquery-placeholder/jquery.placeholder.js"></script>

		<!--SCRIPTS -->
		<script src="../../lib/assets/run/core.js"></script>
		<script src="../../lib/assets/run/site.js"></script>

		<script src="../../lib/assets/run/sections/menu.js"></script>
		<script src="../../lib/assets/run/sections/menubar.js"></script>
		<script src="../../lib/assets/run/sections/gridmenu.js"></script>
		<script src="../../lib/assets/run/sections/sidebar.js"></script>

		<script src="../../lib/assets/run/configs/config-colors.js"></script>
		<script src="../../lib/assets/run/configs/config-tour.js"></script>

		<script src="../../lib/assets/run/components/asscrollable.js"></script>
		<script src="../../lib/assets/run/components/animsition.js"></script>
		<script src="../../lib/assets/run/components/slidepanel.js"></script>
		<script src="../../lib/assets/run/components/switchery.js"></script>

		<!--Scripts For This Page Login -->
		<script src="../../lib/assets/run/components/jquery-placeholder.js"></script>


		<?php /*
		<!-- TEMPLATES -->
		<script src='templates/min/templates.min.js'></script>
		<!-- CORE JS -->
		<script src='js/min/core.min.js'></script>
	    <script src='js/objects.js'></script>
	    <script src='js/method.js'></script>
	    <script src='js/model.js'></script>
	    <script src='js/room.js'></script>
	    <script src='js/main.js'></script>
		*/ ?>

		<script>
		    (function(document, window, $) {
		      'use strict';

		      var Site = window.Site;
		      $(document).ready(function() {
		        Site.run();
		      });
		    })(document, window, jQuery);
		</script>

	</body>
</html>
