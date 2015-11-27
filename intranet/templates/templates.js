(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tmp_demo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<br />\n<div align='center'>\n	<select id='lan-demo'>\n		<option value='es'>Español</option>\n		<option value='en'>English</option>\n	</select>\n	<h3 id='demo-date' data-date='"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.propa : depth0)) != null ? stack1.date : stack1), depth0))
    + "'><h3>\n</div>\n<script>\n	var date;\n	date = $('h3#demo-date').data('date');\n	newDate = PRO.momentToRoman(date, 'es');\n	$('h3#demo-date').text(newDate);\n</script>\n";
},"useData":true});
templates['tmp_home_window_aniversary'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <h4 class=\"panel-body-title\">FELICIDADES</h4>\n        <ul class=\"list-group list-group-dividered list-group-full\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.webservice : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li class=\"list-group-item\">\n                <small class=\"label label-round label-info pull-right\">Completed</small>\n                <p>\n                    <span>"
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.apellido_paterno || (depth0 != null ? depth0.apellido_paterno : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido_paterno","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.apellido_materno || (depth0 != null ? depth0.apellido_materno : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido_materno","hash":{},"data":data}) : helper)))
    + "</span>\n                    <span>"
    + alias4(((helper = (helper = helpers.aniversario || (depth0 != null ? depth0.aniversario : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aniversario","hash":{},"data":data}) : helper)))
    + " años</span>\n                </p>\n            </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <h4 class=\"panel-body-title\">NO HAY ANIVERSARIOS EL DÍA DE HOY</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Panel Aniversarios -->\n<div class=\"panel\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">ANIVERSARIOS</h3>\n    </div>\n    <div class=\"panel-body\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.webservice : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n<!-- End Panel Aniversarios -->\n";
},"useData":true});
templates['tmp_home_window_birthday'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <h4 class=\"panel-body-title\">FELICIDADES</h4>\n        <ul class=\"list-group list-group-dividered list-group-full\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.webservice : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li class=\"list-group-item\">\n                <div class=\"media\">\n                    <div class=\"media-left\">\n                        <a class=\"avatar avatar-online\" href=\"javascript:void(0)\">\n                            <img src=\"../../img/portraits/9.jpg\" class=\"avatar-img\" alt=\"\">\n                            <i></i>\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                        <div class=\"pull-right\">\n                            <button type=\"button\" class=\"btn btn-outline btn-default btn-sm\">Follow</button>\n                        </div>\n                        <div><span>"
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.apellido_paterno || (depth0 != null ? depth0.apellido_paterno : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido_paterno","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.apellido_materno || (depth0 != null ? depth0.apellido_materno : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido_materno","hash":{},"data":data}) : helper)))
    + "</span></div>\n                        <small>"
    + alias4(((helper = (helper = helpers.edad || (depth0 != null ? depth0.edad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"edad","hash":{},"data":data}) : helper)))
    + " años</small>\n                    </div>\n                </div>\n            </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <h4 class=\"panel-body-title\">NO HAY COMPLEAÑOS EL DÍA DE HOY</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Panel Cumpleaños -->\n<div class=\"panel\" id=\"followers\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">CUMPLEAÑOS</h3>\n    </div>\n    <div class=\"panel-body\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.webservice : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n<!-- End Panel Cumpleaños -->\n";
},"useData":true});
templates['tmp_home_window_perfil'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Panel Web Perfil -->\n<div class=\"widget widget-shadow\">\n	<div class=\"widget-content text-center bg-white padding-40\">\n		<div class=\"avatar avatar-100 margin-bottom-20\">\n			<img src=\"../../img/portraits/1.jpg\" class=\"avatar-img\" alt=\"\">\n		</div>\n		<p class=\"font-size-20 blue-grey-700\">Breno Bitencourt</p>\n		<p class=\"blue-grey-400 margin-bottom-20\">Web Designer</p>\n		<p class=\"margin-bottom-35\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>\n		<ul class=\"list-inline font-size-18 margin-bottom-35\">\n			<li>\n				<a class=\"blue-grey-400\" href=\"javascript:void(0)\">\n					<i class=\"icon bd-twitter\" aria-hidden=\"true\"></i>\n				</a>\n			</li>\n			<li class=\"margin-left-10\">\n				<a class=\"blue-grey-400\" href=\"javascript:void(0)\">\n					<i class=\"icon bd-facebook\" aria-hidden=\"true\"></i>\n				</a>\n			</li>\n			<li class=\"margin-left-10\">\n				<a class=\"blue-grey-400\" href=\"javascript:void(0)\">\n					<i class=\"icon bd-dribbble\" aria-hidden=\"true\"></i>\n				</a>\n			</li>\n			<li class=\"margin-left-10\">\n				<a class=\"blue-grey-400\" href=\"javascript:void(0)\">\n					<i class=\"icon bd-instagram\" aria-hidden=\"true\"></i>\n				</a>\n			</li>\n		</ul>\n		<button type=\"button\" class=\"btn btn-primary padding-horizontal-40\">Follow</button>\n	</div>\n</div>\n<!-- End Panel Web Perfil -->\n";
},"useData":true});
templates['tmp_welcome_home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page-header height-300 margin-bottom-30\">\n	<div class=\"text-center blue-grey-800 margin-top-50\">\n		<div class=\"font-size-50 margin-bottom-30 blue-grey-800\">Mount Mckinley</div>\n		<ul class=\"list-inline font-size-14\">\n			<li>\n				<i class=\"icon wb-map margin-right-5\" aria-hidden=\"true\"></i>\n				Central and southern Alaska\n			</li>\n			<li class=\"margin-left-20\">\n				<i class=\"icon wb-heart margin-right-5\" aria-hidden=\"true\"></i>\n				26,428\n			</li>\n		</ul>\n	</div>\n</div>\n<div class=\"page-content container-fluid\">\n	<div class=\"row\" data-plugin=\"matchHeight\" data-by-row=\"true\">\n\n	</div>\n</div>\n";
},"useData":true});
templates['tmp_welcome_page_content'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\" data-plugin=\"matchHeight\" data-by-row=\"true\" id=\"content-welcome-widgets-first-row\">\n</div>\n";
},"useData":true});
templates['tmp_welcome_page_header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center blue-grey-800 margin-top-50\">\n	<div class=\"font-size-50 margin-bottom-30 blue-grey-800\">Mount Mckinley</div>\n	<ul class=\"list-inline font-size-14\">\n		<li>\n			<i class=\"icon wb-map margin-right-5\" aria-hidden=\"true\"></i>\n			Central and southern Alaska\n		</li>\n		<li class=\"margin-left-20\">\n			<i class=\"icon wb-heart margin-right-5\" aria-hidden=\"true\"></i>\n			26,428\n		</li>\n	</ul>\n</div>\n";
},"useData":true});
})();