(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tmp_demo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<br />\n<div align='center'>\n	<select id='lan-demo'>\n		<option value='es'>Español</option>\n		<option value='en'>English</option>\n	</select>\n	<h3 id='demo-date' data-date='"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.propa : depth0)) != null ? stack1.date : stack1), depth0))
    + "'><h3>\n</div>\n<script>\n	var date;\n	date = $('h3#demo-date').data('date');\n	newDate = PRO.momentToRoman(date, 'es');\n	$('h3#demo-date').text(newDate);\n</script>\n";
},"useData":true});
templates['tmp_welcome_home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page\">\n	<div class=\"page-header height-300 margin-bottom-30\">\n		<div class=\"font-size-50 margin-bottom-30 blue-grey-800\">Mount Mckinley</div>\n		<ul class=\"list-inline font-size-14\">\n			<li>\n				<i class=\"icon wb-map margin-right-5\" aria-hidden=\"true\"></i>\n				Central and southern Alaska\n			</li>\n			<li class=\"margin-left-20\">\n				<i class=\"icon wb-heart margin-right-5\" aria-hidden=\"true\"></i>\n				26,428\n			</li>\n		</ul>\n	</div>\n</div>\n";
},"useData":true});
})();