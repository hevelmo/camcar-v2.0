(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tmp_adm_section_new_preowned_page_content'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <!-- Panel Static Lables -->\n        <div class=\"panel panel-bordered not-rounded\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Agregar información</h3>\n            </div>\n            <div class=\"panel-body container-fluid pb15\">\n                <form autocomplete=\"off\" id='new-sen'>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Agencia</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione agencia -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Categoría</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione categoría -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Marca</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione marca -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"clearfix visible-lg-block\"></div>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Modelo</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione modelo -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Transmisión</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione transmisión -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Color</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione color -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"clearfix visible-lg-block\"></div>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Interior</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione interior -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Año</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione año -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Cilindros</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <select class=\"camcar-remark-select selectpicker\" data-plugin=\"selectpicker\">\n                                <option>- Seleccione cilindros -</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"clearfix visible-lg-block\"></div>\n                    <div class=\"col-sm-4 col-sm-offset-4  \" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Precio</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <input class='new-sen-input form-control camcar-remark-input stl-input' id='new-sen-price' name='sen_price' type='text' />\n                        </div>\n                    </div>\n                    <div class=\"clearfix visible-lg-block\"></div>\n                    <div class=\"col-sm-12\" id='div-new-sen-agency-container'>\n                        <div class=\"form-group form-material\">\n                            <label class=\"control-label mb10 red-camcar red-camcar\" for=\"new-sen-agency\"><i class=\"fa fa-asterisk fa-fw\"></i> Descripción</label>\n                            <div id='div-select-new-sen-agency'></div>\n                            <textarea class='form-control camcar-remark-textarea stl-text-area' id='new-sen-description' name='sen_description'></textarea>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"panel-footer clearfix pt30 pb30\">\n                <div class=\"col-sm-6\" id='div-new-sen-agency-container'>\n                    <div class=\"form-group form-material\">\n                        <button class='button button-outline bg-red-camcar not-rounded red-camcar button-resp col-sm-6 col-md-12' id='new-sen-save' style=\"padding: 1em; margin: 0 auto;\">\n                            Guardar\n                        </button>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" id='div-new-sen-agency-container'>\n                    <div class=\"form-group form-material\">\n                        <button class='button button-outline bg-white-camcar not-rounded white-camcar button-resp col-sm-6 col-md-12' id='new-sen-clean' style=\"padding: 1em; margin: 0 auto;\">\n                            Limpiar\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Panel Static Lables -->\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <!-- Panel Static Lables -->\n        <div class=\"panel not-rounded\">\n            <div class=\"panel-body container-fluid\">\n                <div class=\"col-sm-6 col-sm-offset-3\">\n                    <div class=\"form-group form-material\">\n                        <button class='button button-outline button-to-ico bg-red-camcar bg-active-red-camcar red-camcar col-sm-12' id='new-sen-seminuevos-list' style=\"padding: 0.5em;\">\n                            <i class=\"navi-nav-icons-movil-preowned-list-v2 fa-3x fa-lg fa-fw\"></i>\n                            Listado seminuevos\n                        </button>\n                    </div>\n                </div>\n            </div>\n        <!-- End Panel Static Lables -->\n    </div>\n</div>";
},"useData":true});
templates['tmp_adm_section_new_preowned_page_header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <h1 class=\"page-title page-font-family page-text-transform page-font-color page-paddings\">\n        <span class=\"page-span-icon icon-color\">\n            <i class=\"navi-nav-icons-movil-preowned-add-v2\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"page-span-title page-span-font font-color\">\n            agregar seminuevo\n        </span>\n    </h1>\n";
},"useData":true});
templates['tmp_adm_site_menubar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--<div class=\"site-menubar\">-->\n    <div class=\"site-menubar-body\">\n        <div>\n            <div>\n                <ul class=\"site-menu\">\n                    <!--<li class=\"site-menu-category\">General</li>-->\n                    <li id=\"site-adm-section-intranet\" class=\"site-menu-item has-sub\">\n                        <a href=\"../welcome/\" data-slug=\"layout\">\n                            <i class=\"site-menu-icon navi-nav-icons-home-v1 fa-3x\" aria-hidden=\"true\"></i>\n                            <span class=\"site-menu-title\">Intranet</span>\n                        </a>\n                    </li>\n                    <li id=\"site-adm-section-new-preowned\" class=\"site-menu-item has-sub\">\n                        <a id=\"go-adm-section-new-preowned\" data-slug=\"layout\">\n                            <i class=\"site-menu-icon navi-nav-icons-movil-preowned-add-v2 fa-3x\" aria-hidden=\"true\"></i>\n                            <span class=\"site-menu-title\">Agregar Seminuevo</span>\n                        </a>\n                    </li>\n                    <li id=\"site-adm-section-get-list-preowned\" class=\"site-menu-item has-sub\">\n                        <a id=\"go-adm-section-get-list-preowned\" data-slug=\"layout\">\n                            <i class=\"site-menu-icon navi-nav-icons-movil-preowned-list-v2 fa-3x\" aria-hidden=\"true\"></i>\n                            <span class=\"site-menu-title\">Listado Seminuevos</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"site-menubar-footer\">\n        <a href=\"javascript: void(0);\" class=\"fold-show\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"\">\n            <!--<span class=\"icon wb-settings\" aria-hidden=\"true\"></span>-->\n        </a>\n        <a href=\"javascript: void(0);\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"\">\n            <!--<span class=\"icon wb-eye-close\" aria-hidden=\"true\"></span>-->\n        </a>\n        <a href='../../logout/' class=\"hint--top\" data-hint=\"Cerrar Sesión\">\n            <span class=\"icon wb-power\" aria-hidden=\"true\"></span>\n        </a>\n    </div>\n<!--</div>-->\n";
},"useData":true});
templates['tmp_adm_site_navbar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--<nav class=\"site-navbar navbar navbar-default navbar-fixed-top navbar-mega\" rol=\"navigation\">-->\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle hamburger hamburger-close navbar-toggle-left hided\" data-toggle=\"menubar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"hamburger-bar\"></span>\n        </button>\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-target=\"#site-navbar-collapse\" data-toggle=\"collapse\">\n            <i class=\"icon wb-more-horizontal\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"navbar-brand navbar-brand-center site-gridmenu-toggle\" data-toggle=\"gridmenu\">\n            <img class=\"navbar-brand-logo navbar-brand-site-logo\" src=\"../../img/logos/logo-camcar-hor-white@2x.png\" title=\"Remark\">\n            <!--<span class=\"navbar-brand-text\"> Remark</span>-->\n        </div>\n        <!--<button type=\"button\" class=\"navbar-toggle collapsed\" data-target=\"#site-navbar-search\" data-toggle=\"collapse\">\n            <span class=\"sr-only\">Toggle Search</span>\n            <i class=\"icon wb-search\" aria-hidden=\"true\"></i>\n        </button>-->\n    </div>\n    <div class=\"navbar-container container-fluid\">\n        <!-- Navbar Collapse -->\n        <div class=\"collapse navbar-collapse navbar-collapse-toolbar\" id=\"site-navbar-collapse\">\n            <!-- Navbar Toolbar -->\n            <ul class=\"nav navbar-toolbar dp-header\">\n                <li class=\"hidden-float\" id=\"toggleMenubar\">\n                    <a data-toggle=\"menubar\" href=\"#\" role=\"button\">\n                        <i class=\"icon hamburger hamburger-arrow-left\">\n                            <span class=\"sr-only\">Toggle menubar</span>\n                            <span class=\"hamburger-bar\"></span>\n                        </i>\n                    </a>\n                </li>\n                <!--<li>\n                    <a id=\"go-section-home\" aria-expanded=\"false\" data-animation=\"fade\" role=\"button\">Inicio</a>\n                </li>-->\n                <!--\n                <li class=\"dp-top\">\n                    <a href=\"#\" class=\"dp-navlink\">\n                        Seminuevos <i class=\"icon wb-chevron-down-mini\" aria-hidden=\"true\"></i>\n                    </a>\n                    <div class=\"dp-navlink-menu\">\n                        <ul>\n                            <li><a href=\"\">Nuevo</a></li>\n                            <li><a href=\"\">Listado</a></li>\n                        </ul>\n                    </div>\n                </li>\n                <li class=\"dropdown dropdown-fw dropdown-mega\">\n                    <a class=\"dropdown-toggle dt-navlink\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\" data-animation=\"fade\" role=\"button\">Seminuevos <i class=\"icon wb-chevron-down-mini\" aria-hidden=\"true\"></i></a>\n                    <ul class=\"dropdown-menu dp-navlink-menu\" role=\"menu\">\n                        <li>Nuevo</li>\n                        <li>Listado</li>\n                    </ul>\n                </li>-->\n            </ul>\n            <!-- End Navbar Toolbar -->\n            <!-- Navbar Toolbar Right -->\n            <ul class=\"nav navbar-toolbar navbar-right navbar-toolbar-right\">\n                <li class=\"dropdown\">\n                    <a data-toggle=\"dropdown\" href=\"javascript:void(0)\" title=\"Notifications\" aria-expanded=\"false\" data-animation=\"scale-up\" role=\"button\">\n                        <i class=\"icon wb-bell\" aria-hidden=\"true\"></i>\n                        <span class=\"badge badge-danger up\">5</span>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-menu-right dropdown-menu-media\" role=\"menu\">\n                        <li class=\"dropdown-menu-header\" role=\"presentation\">\n                            <h5>NOTIFICATIONS</h5>\n                            <span class=\"label label-round label-danger\">New 5</span>\n                        </li>\n                        <li class=\"list-group\" role=\"presentation\">\n                            <div data-role=\"container\">\n                                <div data-role=\"content\">\n                                    <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                                        <div class=\"media\">\n                                            <div class=\"media-left padding-right-10\">\n                                                <i class=\"icon wb-order bg-red-600 white icon-circle\" aria-hidden=\"true\"></i>\n                                            </div>\n                                            <div class=\"media-body\">\n                                                <h6 class=\"media-heading\">A new order has been placed</h6>\n                                                <time class=\"media-meta\" datetime=\"2015-06-12T20:50:48+08:00\">5 hours ago</time>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                                        <div class=\"media\">\n                                            <div class=\"media-left padding-right-10\">\n                                                <i class=\"icon wb-user bg-green-600 white icon-circle\" aria-hidden=\"true\"></i>\n                                            </div>\n                                            <div class=\"media-body\">\n                                                <h6 class=\"media-heading\">Completed the task</h6>\n                                                <time class=\"media-meta\" datetime=\"2015-06-11T18:29:20+08:00\">2 days ago</time>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                                        <div class=\"media\">\n                                            <div class=\"media-left padding-right-10\">\n                                                <i class=\"icon wb-settings bg-red-600 white icon-circle\" aria-hidden=\"true\"></i>\n                                            </div>\n                                            <div class=\"media-body\">\n                                                <h6 class=\"media-heading\">Settings updated</h6>\n                                                <time class=\"media-meta\" datetime=\"2015-06-11T14:05:00+08:00\">2 days ago</time>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                                        <div class=\"media\">\n                                            <div class=\"media-left padding-right-10\">\n                                                <i class=\"icon wb-calendar bg-blue-600 white icon-circle\" aria-hidden=\"true\"></i>\n                                            </div>\n                                            <div class=\"media-body\">\n                                                <h6 class=\"media-heading\">Event started</h6>\n                                                <time class=\"media-meta\" datetime=\"2015-06-10T13:50:18+08:00\">3 days ago</time>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                                        <div class=\"media\">\n                                            <div class=\"media-left padding-right-10\">\n                                                <i class=\"icon wb-chat bg-orange-600 white icon-circle\" aria-hidden=\"true\"></i>\n                                            </div>\n                                            <div class=\"media-body\">\n                                                <h6 class=\"media-heading\">Message received</h6>\n                                                <time class=\"media-meta\" datetime=\"2015-06-10T12:34:48+08:00\">3 days ago</time>\n                                            </div>\n                                        </div>\n                                    </a>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"dropdown-menu-footer\" role=\"presentation\">\n                            <a class=\"dropdown-menu-footer-btn\" href=\"javascript:void(0)\" role=\"button\">\n                                <i class=\"icon wb-settings\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a href=\"javascript:void(0)\" role=\"menuitem\">\n                                All notifications\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"dropdown\">\n                    <a class=\"navbar-avatar dropdown-toggle hint--left\" data-hint=\"<?php echo htmlentities('Asesor'); ?>\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\" data-animation=\"scale-up\" role=\"button\">\n                        <span class=\"avatar avatar-online\">\n                            <img src=\"../../img/logos/ico-camcar.png\" alt=\"...\">\n                            <i></i>\n                        </span>\n                    </a>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                        <!--<li role=\"presentation\">\n                            <a href=\"javascript:void(0)\" role=\"menuitem\"><i class=\"icon wb-user\" aria-hidden=\"true\"></i> Profile</a>\n                        </li>\n                        <li role=\"presentation\">\n                            <a href=\"javascript:void(0)\" role=\"menuitem\"><i class=\"icon wb-payment\" aria-hidden=\"true\"></i> Billing</a>\n                        </li>\n                        <li role=\"presentation\">\n                            <a href=\"javascript:void(0)\" role=\"menuitem\"><i class=\"icon wb-settings\" aria-hidden=\"true\"></i> Settings</a>\n                        </li>\n                        <li class=\"divider\" role=\"presentation\"></li>\n                        -->\n                        <li role=\"presentation\">\n                            <a href='../../logout/' role=\"menuitem\"><i class=\"icon wb-power\" aria-hidden=\"true\"></i> Cerrar Sesión </a>\n                        </li>\n                    </ul>\n                </li>\n                <li>\n                </li>\n            </ul>\n            <!-- End Navbar Toolbar Right -->\n        </div>\n        <!-- End Navbar Collapse -->\n    </div>\n<!--</nav>-->\n";
},"useData":true});
})();