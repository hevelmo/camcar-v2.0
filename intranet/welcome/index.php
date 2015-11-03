<?php
    /*
     * Copyright (C) 2015 CAMCAR Intranet
     *
    */
    /*
    include_once '../../incorporate/db_connect.php';
    include_once '../../incorporate/functions.php';

    sec_session_start();

    if (login_check($mysqli) != true) {
        header('Location: ../');
    } else {
        header('Location: ../admin');
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

        <title>CAMCAR | Intranet</title>

        <link rel="stylesheet" href="../css/import-intranet.css">

        <link rel="apple-touch-icon" href="../../resources/public/img/ico/apple-touch-icon.png">
        <link rel="shortcut icon" href="../../resources/public/img/ico/camcaricon.ico">

        <!--[if lt IE 9]>
		    <script src="../../resources/public/lib/assets/plugins/html5shiv/html5shiv.min.js"></script>
		<![endif]-->
		<!--[if lt IE 10]>
		    <script src="../../resources/public/lib/assets/plugins/media-match/media.match.min.js"></script>
		    <script src="../../resources/public/lib/assets/plugins/respond/respond.min.js"></script>
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
        <script src="../../resources/public/lib/modernizr.js"></script>
        <script src="../../resources/public/lib/assets/plugins/breakpoints/breakpoints.js"></script>
		<script>
	    	Breakpoints();
	  	</script>
	</head>
    <body class="dashboard">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" rol="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle hamburger hamburger-close navbar-toggle-left hided" data-toggle="menubar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="hamburger-bar"></span>
                </button>
                <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
                    <i class="icon wb-more-horizontal" aria-hidden="true"></i>
                </button>
                <div class="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
                    <img class="navbar-brand-logo navbar-brand-site-logo" src="../../resources/public/img/logos/logo-camcar-hor-white@2x.png" title="Remark">
                    <!--<span class="navbar-brand-text"> Remark</span>-->
                </div>
                <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-search" data-toggle="collapse">
                    <span class="sr-only">Toggle Search</span>
                    <i class="icon wb-search" aria-hidden="true"></i>
                </button>
            </div>
            <div class="navbar-container container-fluid">
                <!-- Navbar Collapse -->
                <div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
                    <!-- Navbar Toolbar -->
                    <ul class="nav navbar-toolbar">
                        <li class="hidden-float" id="toggleMenubar">
                            <a data-toggle="menubar" href="#" role="button">
                                <i class="icon hamburger hamburger-arrow-left">
                                    <span class="sr-only">Toggle menubar</span>
                                    <span class="hamburger-bar"></span>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-expanded="false" data-animation="fade" role="button">Inicio</a>
                        </li>
                        <li class="dropdown dropdown-fw dropdown-mega">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" data-animation="fade" role="button">Seminuevos <i class="icon wb-chevron-down-mini" aria-hidden="true"></i></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>Nuevo</li>
                                <li>Listado</li>
                            </ul>
                        </li>
                    </ul>
                    <!-- End Navbar Toolbar -->
                    <!-- Navbar Toolbar Right -->
                    <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
                        <li class="dropdown">
                            <a class="navbar-avatar dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" data-animation="scale-up" role="button">
                                <span class="avatar avatar-online">
                                    <img src="../../resources/public/img/logos/ico-camcar.png" alt="...">
                                    <i></i>
                                </span>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li role="presentation">
                                    <a href="javascript:void(0)" role="menuitem"><i class="icon wb-user" aria-hidden="true"></i> Profile</a>
                                </li>
                                <li role="presentation">
                                    <a href="javascript:void(0)" role="menuitem"><i class="icon wb-payment" aria-hidden="true"></i> Billing</a>
                                </li>
                                <li role="presentation">
                                    <a href="javascript:void(0)" role="menuitem"><i class="icon wb-settings" aria-hidden="true"></i> Settings</a>
                                </li>
                                <li class="divider" role="presentation"></li>
                                <li role="presentation">
                                    <a href="javascript:void(0)" role="menuitem"><i class="icon wb-power" aria-hidden="true"></i> Logout</a>
                                </li>
                            </ul>
                        </li>
                        <li></li>
                    </ul>
                    <!-- End Navbar Toolbar Right -->
                </div>
                <!-- End Navbar Collapse -->
            </div>
        </nav>
        <div class="site-menubar">
            <div class="site-menubar-body">
                <div>
                    <div>
                        <ul class="site-menu">
                            <li class="site-menu-category">General</li>
                            <li class="site-menu-item has-sub active open">
                                <a href="javascript:void(0)" data-slug="dashboard">
                                    <i class="site-menu-icon wb-dashboard" aria-hidden="true"></i>
                                    <span class="site-menu-title">Dashboard</span>
                                    <div class="site-menu-badge">
                                        <span class="badge badge-success">2</span>
                                    </div>
                                </a>
                                <ul class="site-menu-sub">
                                    <li class="site-menu-item active">
                                        <a class="animsition-link" href="index.html" data-slug="dashboard-v1">
                                            <i class="site-menu-icon " aria-hidden="true"></i>
                                            <span class="site-menu-title">Dashboard v1</span>
                                        </a>
                                    </li>
                                    <li class="site-menu-item">
                                        <a class="animsition-link" href="dashboard/v2.html" data-slug="dashboard-v2">
                                            <i class="site-menu-icon " aria-hidden="true"></i>
                                            <span class="site-menu-title">Dashboard v2</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="site-menubar-footer">
                <a href="javascript: void(0);" class="fold-show" data-placement="top" data-toggle="tooltip" data-original-title="Settings">
                    <!--<span class="icon wb-settings" aria-hidden="true"></span>-->
                </a>
                <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
                    <!--<span class="icon wb-eye-close" aria-hidden="true"></span>-->
                </a>
                <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
                    <span class="icon wb-power" aria-hidden="true"></span>
                </a>
            </div>
        </div>

        <!-- Page -->
        <div class="page">
            <div class="page-content padding-30 container-fluid">
            </div>
        </div>
        <!-- End Page -->

        <!-- Footer -->
        <footer class="site-footer">
            <span class="site-footer-legal">© 2015 <a href="http://themeforest.net/item/remark-responsive-bootstrap-admin-template/11989202">Remark</a></span>
        </footer>

        <!-- MAIN -->
        <script src="../../resources/public/lib/jquery.js"></script>
        <script src="../../resources/public/lib/bootstrap.js"></script>

        <!-- CORE -->
        <script src="../../resources/public/lib/jquery.gdb.js"></script>
        <script src="../../resources/public/lib/jquery-ui.js"></script>
        <script src="../../resources/public/lib/underscore.js"></script>
        <script src="../../resources/public/lib/moment.js"></script>
        <script src="../../resources/public/lib/accounting.js"></script>
        <script src="../../resources/public/lib/finch.js"></script>

        <!-- HANDLEBARS -->
        <script src="../../resources/public/lib/handlebars.runtime.js"></script>

        <!-- FORMS -->
        <script src="../../resources/public/lib/forms.js"></script>
        <script src="../../resources/public/lib/sha512.js"></script>

        <!-- CORE JS -->
        <script src='../js/objects.js'></script>
        <script src='../js/method.js'></script>
        <script src='../js/model.js'></script>
        <script src='../js/room.js'></script>
        <script src='../js/main.js'></script>
        <!--
        -->
        <script src='../js/min/core.min.js'></script>
    </body>
</html>
