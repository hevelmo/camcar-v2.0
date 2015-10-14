<?php
	/*
	include '../incorporate/db_connect.php';
    include '../incorporate/functions.php';
    sec_session_start();
    if (login_check($mysqli) == true) {
        header('Location: admin');
    }
	*/
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
		<title>CAMCAR | Login</title>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>
        <link rel="stylesheet" href="css/import-login.css">
        <link rel="apple-touch-icon" href="../resources/public/img/ico/apple-touch-icon.png">
        <link rel="shortcut icon" href="../resources/public/img/ico/favicon.ico">
        <!--[if lt IE 9]>
		    <script src="../resources/public/lib/plugins/html5shiv/html5shiv.min.js"></script>
		<![endif]-->
		<!--[if lt IE 10]>
		    <script src="../resources/public/lib/plugins/media-match/media.match.min.js"></script>
		    <script src="../resources/public/lib/plugins/respond/respond.min.js"></script>
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
        <script src="../resources/public/lib/main/modernizr/modernizr.js"></script>
		<script src="../resources/public/lib/main/breakpoints/breakpoints.js"></script>
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
						<img class="brand-img" src="../resources/public/img/logos/logo@2x.png" alt="...">
					</div>
				</div>
				<!-- Page Login Main -->
				<div class="page-login-main">
					<div class="brand visible-xs">
						<img class="brand-img" src="../resources/public/img/logos/logo-blue@2x.png" alt="...">
					</div>
					<h3 class="font-size-24">Login</h3>
					<!-- Form -->
					<form method="post" action="process_login.php">
						<div class="form-group">
							<label class="sr-only" for="inputEmail">Usuario</label>
							<input type="email" class="form-control" id="inputEmail" name="email" placeholder="Usuario">
						</div>
						<div class="form-group">
							<label class="sr-only" for="inputPassword">Contraseña</label>
							<input type="password" class="form-control" id="inputPassword" name="password" placeholder="Contraseña">
						</div>
						<div class="form-group clearfix">
							<a class="pull-right" href="forgot-password.html">Regresar</a>
						</div>
						<button type="submit" class="btn btn-primary btn-block">Ingresar</button>
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
		<script src="../resources/public/lib/main/jquery/jquery.js"></script>
		<script src="../resources/public/lib/main/bootstrap/bootstrap.js"></script>

		<script src="../resources/public/lib/plugins/animsition/jquery.animsition.js"></script>
		<script src="../resources/public/lib/plugins/asscroll/jquery-asScroll.js"></script>
		<script src="../resources/public/lib/plugins/mousewheel/jquery.mousewheel.js"></script>
		<script src="../resources/public/lib/plugins/asscrollable/jquery.asScrollable.all.js"></script>
		<script src="../resources/public/lib/plugins/ashoverscroll/jquery-asHoverScroll.js"></script>

		<!-- plugins -->
		<script src="../resources/public/lib/plugins/switchery/switchery.js"></script>
		<script src="../resources/public/lib/plugins/intro-js/intro.js"></script>
		<script src="../resources/public/lib/plugins/screenfull/screenfull.js"></script>
		<script src="../resources/public/lib/plugins/slidepanel/jquery-slidePanel.js"></script>

		<!--Plugins For This Page Login -->
		<script src="../resources/public/lib/plugins/jquery-placeholder/jquery.placeholder.js"></script>

		<!--Scripts -->
		<script src="../resources/public/lib/run/init/core.js"></script>
		<script src="../resources/public/lib/run/init/site.js"></script>

		<script src="../resources/public/lib/run/sections/menu.js"></script>
		<script src="../resources/public/lib/run/sections/menubar.js"></script>
		<script src="../resources/public/lib/run/sections/gridmenu.js"></script>
		<script src="../resources/public/lib/run/sections/sidebar.js"></script>

		<script src="../resources/public/lib/run/configs/config-colors.js"></script>
		<script src="../resources/public/lib/run/configs/config-tour.js"></script>

		<script src="../resources/public/lib/run/components/asscrollable.js"></script>
		<script src="../resources/public/lib/run/components/animsition.js"></script>
		<script src="../resources/public/lib/run/components/slidepanel.js"></script>
		<script src="../resources/public/lib/run/components/switchery.js"></script>

		<!--Scripts For This Page Login -->
		<script src="../resources/public/lib/run/components/jquery-placeholder.js"></script>

		<!-- CORE -->
		<script src="../resources/public/lib/core/jquery.gdb-1.2.0/jquery.gdb-1.2.0.js"></script>
		<script src="../resources/public/lib/core/jquery.ui-1.10.3/jquery-ui-1.10.3.js"></script>
		<script src="../resources/public/lib/core/underscore-1.6.0/underscore-1.6.0.js"></script>
		<script src="../resources/public/lib/core/moment-2.0.0/moment-2.0.0.js"></script>
		<script src="../resources/public/lib/core/accounting-0.4.1/accounting-0.4.1.js"></script>
		<script src="../resources/public/lib/core/finch-0.5.13/finch-0.5.13.js"></script>

		<script src="../resources/public/lib/core/forms/sha512.js"></script>
		<script src="../resources/public/lib/core/forms/forms.js"></script>

		<!-- CORE JS -->
	    <!--
	    <script src='js/objects.js'></script>
	    <script src='js/method.js'></script>
	    <script src='js/model.js'></script>
	    <script src='js/room.js'></script>
	    <script src='js/main.js'></script>
	    -->
		<script src='js/min/core.min.js'></script>

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
