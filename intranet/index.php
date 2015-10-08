<?php
    //include '../incorporate/db_connect.php';
    //include '../incorporate/functions.php';
    //sec_session_start();
    /*if (login_check($mysqli) == true) {
        header('Location: admin');
    }*/
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html lang="en" class="no-js css-menubar lt-ie10"> <![endif]-->
<html class="no-js css-menubar" lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">

		<meta name="description" content="login">
		<meta name="author" content="">

		<title>Camcar | Login</title>

		<link rel="apple-touch-icon" href="../resources/public/intranet/ico/apple-touch-icon-camcar.png">
  		<link rel="shortcut icon" href="../resources/public/img/camcaricon.ico">

		<link rel="stylesheet" href="../resources/public/intranet/css/import-login.css">
		<!--[if lt IE 9]>
    		<script src="../resources/public/intranet/lib/plugins/html5shiv/html5shiv.min.js"></script>
		<![endif]-->

  		<!--[if lt IE 10]>
    		<script src="../resources/public/intranet/lib/plugins/media-match/media.match.min.js"></script>
			<script src="../resources/public/intranet/lib/plugins/respond/respond.min.js"></script>
		<![endif]-->

		<!-- Scripts -->
  		<script src="../resources/public/intranet/lib/plugins/modernizr/modernizr.js"></script>
  		<script src="../resources/public/intranet/lib/plugins/breakpoints/breakpoints.js"></script>
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
          				<img class="brand-img" src="../resources/public/intranet/img/login/logo-vrcal-white-camcar-241-165.png" alt="...">
        			</div>
      			</div>
      			<div class="page-login-main">
        			<div class="brand visible-xs">
          				<img class="brand-img" src="../resources/public/intranet/img/login/logo-hor-camcar.png" alt="...">
        			</div>
        			<h3 class="page-login-main-title font-size-24">Sign In</h3>

        			<form method="post" action="login-v2.html">
      					<div class="form-group">
            				<label class="sr-only" for="inputEmail">Email</label>
            				<input type="email" class="form-control page-login-main-input-focus" id="inputEmail" name="email" placeholder="Email" autofocus>
          				</div>
          				<div class="form-group">
            				<label class="sr-only" for="inputPassword">Password</label>
            				<input type="password" class="form-control page-login-main-input-focus" id="inputPassword" name="password" placeholder="Password">
          				</div>
          				<div class="form-group page-login-main-return clearfix">
          					<a href="../sitio" class="form__link pull-right" href="#">
				                <i class="fa fa-chevron-left"></i> Regresar
				            </a>
          				</div>
          				<button type="submit" class="btn btn-primary btn-block btn-bg-camcar">
          					<i class="fa fa-user fa-lg fa-fw"></i> Ingresar
          				</button>
        			</form>

    				<footer class="page-copyright">
          				<p>© 2015. CAMCAR GRUPO AUTOMOTIZ.</p>
        			</footer>
      			</div>
    		</div>
		</div>
		<!-- End Page -->

		<!-- Core  -->
		<script src="../resources/public/intranet/lib/plugins/jquery/jquery.js"></script>
		<script src="../resources/public/intranet/lib/plugins/bootstrap/bootstrap.js"></script>
		<script src="../resources/public/intranet/lib/plugins/animsition/jquery.animsition.js"></script>
		<script src="../resources/public/intranet/lib/plugins/asscroll/jquery-asScroll.js"></script>
		<script src="../resources/public/intranet/lib/plugins/mousewheel/jquery.mousewheel.js"></script>
		<script src="../resources/public/intranet/lib/plugins/asscrollable/jquery.asScrollable.all.js"></script>
		<script src="../resources/public/intranet/lib/plugins/ashoverscroll/jquery-asHoverScroll.js"></script>

		<!-- Plugins -->
		<script src="../resources/public/intranet/lib/plugins/switchery/switchery.min.js"></script>
		<script src="../resources/public/intranet/lib/plugins/intro-js/intro.js"></script>
		<script src="../resources/public/intranet/lib/plugins/screenfull/screenfull.js"></script>
		<script src="../resources/public/intranet/lib/plugins/slidepanel/jquery-slidePanel.js"></script>

		<!-- Plugins For This Page -->
		<script src="../resources/public/intranet/lib/plugins/jquery-placeholder/jquery.placeholder.js"></script>

		<!-- Scripts -->
		<script src="../resources/public/intranet/lib/assets/core.js"></script>
		<script src="../resources/public/intranet/lib/assets/site.js"></script>

		<script src="../resources/public/intranet/lib/assets/sections/menu.js"></script>
		<script src="../resources/public/intranet/lib/assets/sections/menubar.js"></script>
		<script src="../resources/public/intranet/lib/assets/sections/gridmenu.js"></script>
		<script src="../resources/public/intranet/lib/assets/sections/sidebar.js"></script>

		<script src="../resources/public/intranet/lib/assets/configs/config-colors.js"></script>
		<script src="../resources/public/intranet/lib/assets/configs/config-tour.js"></script>

		<script src="../resources/public/intranet/lib/assets/components/asscrollable.js"></script>
		<script src="../resources/public/intranet/lib/assets/components/animsition.js"></script>
		<script src="../resources/public/intranet/lib/assets/components/slidepanel.js"></script>
		<script src="../resources/public/intranet/lib/assets/components/switchery.js"></script>
		<script>
    		(function(document, window, $) {
  				'use strict';
      			var Site = window.Site;
      			$(document).ready(function() {
        			Site.run();
      			});
    		})(document, window, jQuery);
		</script>

		<!--Core js-->
        <!--<script src='../resources/public/lib/moment.js'></script>-->
        <!--<script src='../resources/public/lib/finch.js'></script>-->

        <!--<script type="text/JavaScript" src="../resources/public/lib/sha512.js"></script>-->
        <!--<script type="text/JavaScript" src="../resources/public/lib/forms.js"></script>-->
        <!--<script src='../resources/public/lib/action.js'></script>-->
	</body>
</html>
