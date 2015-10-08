!function(){var gdbFactory=function(jQuery){var $=jQuery,GDB=function(modelsToMonitorObject,userOptionsObject){var GDB=this;GDB.helpers={isEventSupported:function(t){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},n=document.createElement(e[t]||"div");t="on"+t;var o=t in n;return o||(n.setAttribute(t,"return;"),o="function"==typeof n[t]),n=null,o},escapeForRegEx:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}};var options={rootElementSelectorString:"body",templateOpeningDelimiter:"<<",templateClosingDelimiter:">>",realtime:!0,renderOnInitialization:!0,dataBindToAttr:"data-bindto",dataWatchingAttr:"data-watching",dataTemplateAttr:"data-gdb-template",dataParseWithAttr:"data-parsewith",bindAsTextOnly:!1,insertPolyfills:!0,debugLogging:!1,modelChangeCallback:null,elementChangeCallback:null};void 0!==userOptionsObject&&(options=$.extend(options,userOptionsObject)),options.insertPolyfills===!0&&loadPolyFills();var modelsToMonitor=modelsToMonitorObject;GDB.getBoundElementFromModelPath=function(t){return $("["+options.dataBindToAttr+"="+t+"]")},GDB.getModelPathFromBoundElement=function(t){var e=$(t);return e.is("["+options.dataBindToAttr+"]")?e.attr(options.dataBindToAttr):!1},GDB.getValueFromModelPath=function(t){var e=$.extend(!0,{},modelsToMonitor);if("undefined"!=typeof t){t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");for(var n=t.split(".");n.length;){var o=n.shift();if(!(o in e))return;e=e[o]}return e}},GDB.render=function(){var t="["+options.dataBindToAttr+"],["+options.dataWatchingAttr+"]";$(t).each(function(){setElementsToValue($(this),GDB.getValueFromModelPath($(this).attr(options.dataBindToAttr)))})};var setElementsToValue=function($element,value){$element.each(function(){if($(this).is("["+options.dataWatchingAttr+"]["+options.dataParseWithAttr+"]"))var newValue=eval("modelsToMonitor."+$(this).attr(options.dataParseWithAttr)+".in()");else if($(this).is("["+options.dataWatchingAttr+"]["+options.dataTemplateAttr+"]")){var modelLocations=$(this).attr(options.dataWatchingAttr).split(","),template=$(this).attr(options.dataTemplateAttr);modelLocations.forEach(function(t,e){template=template.replace(new RegExp(GDB.helpers.escapeForRegEx(options.templateOpeningDelimiter)+(e+1)+GDB.helpers.escapeForRegEx(options.templateClosingDelimiter),"g"),GDB.getValueFromModelPath(t.trim()))}),newValue=template}else newValue=value;$(this).is("input,select,textarea")?$(this).is(":checkbox")?$element.each(function(){var t=$(this),e=!1;newValue.forEach(function(n){t.val()==n&&(t.is(":checked")||t.prop("checked",!0),e=!0)}),e||t.prop("checked",!1)}):$(this).is(":radio")?$element.each(function(){var t=$(this);t.attr("value")==newValue?t.prop("checked",!0):t.prop("checked",!1)}):$(this).is("["+options.dataWatchingAttr+"]["+options.dataTemplateAttr+"]:focus")||$(this).val()!=newValue&&$(this).val(newValue):options.bindAsTextOnly?$(this).is("["+options.dataWatchingAttr+"]["+options.dataTemplateAttr+"]:focus")||$(this).text()!=newValue&&$(this).text(newValue):$(this).is("["+options.dataWatchingAttr+"]["+options.dataTemplateAttr+"]:focus")||$(this).html()!=newValue&&$(this).html(newValue)})};options.renderOnInitialization&&GDB.render();var listenForEvents=(options.realtime?(GDB.helpers.isEventSupported("input")?"input":"keyup")+" paste ":"")+" change blur";$(options.rootElementSelectorString).on(listenForEvents,"["+options.dataBindToAttr+"],["+options.dataTemplateAttr+"],["+options.dataParseWithAttr+"]",function(e){var $this=$(this),value="";if($this.is("["+options.dataBindToAttr+"],["+options.dataParseWithAttr+"],["+options.dataTemplateAttr+"]")){var modelLocation=$this.attr(options.dataBindToAttr);value=$this.is("input,select,textarea")?$this.is(":checkbox")?$("["+options.dataBindToAttr+"='"+$this.attr(options.dataBindToAttr)+"'][name='"+$this.attr("name")+"']:checked").map(function(){return $(this).val()}).toArray():$this.val():options.bindAsTextOnly?$this.text():$this.html();var rawValue=value;if(value=$.isArray(value)?JSON.stringify(value):"'"+value.replace(/'/g,"\\'").replace(/\n/g,"\\n")+"'",modelLocation&&eval("modelsToMonitor."+modelLocation+"="+value),$this.is("["+options.dataParseWithAttr+"]")&&eval("modelsToMonitor."+$this.attr(options.dataParseWithAttr)+".out("+value+")"),$this.is("["+options.dataWatchingAttr+"]["+options.dataTemplateAttr+"]")){var splitBys=$(this).attr(options.dataTemplateAttr).split(new RegExp(GDB.helpers.escapeForRegEx(options.templateOpeningDelimiter)+"\\d+"+GDB.helpers.escapeForRegEx(options.templateClosingDelimiter),"g")),toDelete=[];splitBys.forEach(function(t,e){0===t.length?toDelete.push(e):splitBys[e]=GDB.helpers.escapeForRegEx(t)});var subtract=0;toDelete.forEach(function(t){splitBys.splice(parseInt(t)-subtract,1),subtract++});var modelLocationValuesArray=[],valueArray=rawValue.split(new RegExp(splitBys.join("|"),"g")),indexArray=$(this).attr(options.dataTemplateAttr).split(new RegExp(splitBys.join("|"),"g")),modelLocations=$(this).attr(options.dataWatchingAttr).split(",");indexArray.forEach(function(t,e){var n=parseInt(t.replace(new RegExp(GDB.helpers.escapeForRegEx(options.templateOpeningDelimiter)+"|"+GDB.helpers.escapeForRegEx(options.templateClosingDelimiter),"g"),""))-1;modelLocationValuesArray.push({location:modelLocations[n].trim(),value:"undefined"==typeof valueArray[e]?'""':JSON.stringify(valueArray[e])})}),modelLocationValuesArray.forEach(function(modelLocationAndValue){console.log("modelsToMonitor."+modelLocationAndValue.location+"="+modelLocationAndValue.value),eval("modelsToMonitor."+modelLocationAndValue.location+"="+modelLocationAndValue.value)})}options.debugLogging&&console.log(modelLocation+" is now equal to "+value+' as per changes made in the view as witnessed by the "'+e.type+'" event.'),"function"==typeof options.elementChangeCallback?(options.debugLogging&&console.log("Bound element change callback executed for change in "+modelLocation),options.elementChangeCallback({locationPathString:modelLocation,$boundElement:$this,newValue:options.bindAsTextOnly?$this.text():$this.html()})):options.debugLogging&&console.log("No callback supplied for bound element change thus no function was called")}});var observeObjects=function(t,e,n){n=n||[],$.each(t,function(t,o){if(null!==o&&("object"==typeof o||o instanceof Array)&&function(){var t=!0;return n.forEach(function(e){e===o&&(t=!1)}),t}()){n.push(o);var i="";i="undefined"==typeof e?""+t:isNaN(t)?e+"."+t:e+"["+t+"]",Object.observe(o,function(t){t.forEach(function(t){var e=isNaN(t.name)?"."+t.name:"["+t.name+"]",a=i+e,r="["+options.dataBindToAttr+"='"+a+"'],["+options.dataWatchingAttr+"*='"+a+",'],["+options.dataWatchingAttr+"$='"+a+"']",s=t.object[t.name],l=t.type,c=$(r);if(("object"==typeof s||s instanceof Array)&&observeObjects(o,i,n),setElementsToValue(c,s),$.isArray(s))var u=JSON.stringify(s);else u="'"+s+"'";options.debugLogging&&console.log(i+e+" is now equal to "+u+" as observed in the model."),"function"==typeof options.modelChangeCallback?(options.debugLogging&&console.log("Model change callback executed for change in "+i+e),options.modelChangeCallback({locationPathString:a,$boundElements:c,newValue:s,oldValue:l})):options.debugLogging&&console.log("No callback supplied for model change thus no function was called")})}),observeObjects(o,i,n)}})};observeObjects(modelsToMonitor)},loadPolyFills=function(){Object.observe||!function(t,e){function n(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}var o=function(t){var n=t.call(t),o=typeof o;return"object"==typeof e.alert?function(e){return n===t.call(e)||!!e&&typeof e.toString==o&&typeof e.valueOf==o&&/^\s*\bfunction\b/.test(""+e)}:function(e){return n===t.call(e)}}(t.prototype.toString),i=function(){return!!e.setImmediate}(),a=function(){return i?function(t){return setImmediate(t)}:function(t){return setTimeout(t,10)}}(),r=function(){return i?function(t){clearImmediate(t)}:function(t){clearTimeout(t)}}(),s=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},l=function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e},c=function(t){return"undefined"==typeof t?!1:"get"in t||"set"in t},u=function(t,e){if("object"!=typeof t)throw new TypeError("Object.observeObject called on non-object");if(o(e)===!1)throw new TypeError("Object.observeObject: Expecting function");if(Object.isFrozen(e)===!0)throw new TypeError("Object.observeObject: Expecting unfrozen function")},p=function(){var t=[],e=function(e,n){u(e,n),Object.getNotifier(e).addListener(n),-1===t.indexOf(e)?t.push(e):Object.getNotifier(e)._checkPropertyListing()};e.prototype.deliverChangeRecords=function(t){Object.getNotifier(t).deliverChangeRecords()},t.lastScanned=0;var n=function(t){return function(){var e=0,o=t.length,i=new Date,r=!1;for(e=t.lastScanned;o>e&&!r;e++)Object.getNotifier(t[e])._checkPropertyListing(),r=new Date-i>100;t.lastScanned=o>e?e:0,a(n)}}(t);return a(n),e}(),d=function(t){var e=[],n=[],o=!1,i=[],u=[],p=this;Object.defineProperty(p,"_watching",{enumerable:!0,get:function(t){return function(){return t}}(t)});var d=function(t,e){var n=(typeof t[e],Object.getOwnPropertyDescriptor(t,e));if("getNotifier"===e||c(n)||!n.enumerable)return!1;if(t instanceof Array&&s(e)){var o=i.length;return i[o]=e,u[o]=t[e],!0}return function(e,n){i[e]=n,u[e]=t[n],Object.defineProperty(t,n,{get:function(){return u[e]},set:function(o){l(u[e],o)||(Object.getNotifier(t).queueUpdate(t,n,"updated",u[e]),u[e]=o)}})}(i.length,e),!0};p._checkPropertyListing=function(t){var e,n,o,a,r,l=p._watching,c=Object.keys(l),f=0,h=c.length,g=i.slice(0),m=!t;for(l instanceof Array&&(r=i.length),f=0;h>f;f++)e=c[f],o=l[e],n=typeof o,-1===(a=i.indexOf(e))?d(l,e)&&m&&p.queueUpdate(l,e,"new",null,l[e]):(l instanceof Array&&s(e)&&u[a]!==o&&(m&&p.queueUpdate(l,e,"updated",u[a],o),u[a]=o),g.splice(g.indexOf(e),1));if(l instanceof Array&&l.length!==r&&m&&p.queueUpdate(l,"length","updated",r,l),m)for(h=g.length,f=0;h>f;f++)a=i.indexOf(g[f]),p.queueUpdate(l,g[f],"deleted",u[a]),i.splice(a,1),u.splice(a,1)},p.addListener=function(t){var n=e.indexOf(t);-1===n&&e.push(t)},p.removeListener=function(t){var n=e.indexOf(t);n>-1&&e.splice(n,1)},p.listeners=function(){return e},p.queueUpdate=function(t,e,n,o){this.queueUpdates([{type:n,object:t,name:e,oldValue:o}])},p.queueUpdates=function(t){var e,i=this,s=0,l=t.length||0;for(s=0;l>s;s++)e=t[s],n.push(e);o&&r(o),o=a(function(){o=!1,i.deliverChangeRecords()})},p.deliverChangeRecords=function(){var t=0,o=e.length;for(t=0;o>t;t++)e[t]&&(e[t]===console.log?console.log(n):e[t](n));n=[]},p._checkPropertyListing(!0)},f=[],h=[];t.getNotifier=function(t){var e=h.indexOf(t),n=e>-1?f[e]:!1;return n||(e=h.length,h[e]=t,n=f[e]=new d(t)),n},t.observe=function(t,e){return n(t)?void 0:new p(t,e)},t.unobserve=function(t,e){u(t,e);var n=h.indexOf(t),o=n>-1?f[n]:!1;o&&(o.removeListener(e),0===o.listeners().length&&(h.splice(n,1),f.splice(n,1)))}}(Object,this)};return GDB};"function"==typeof define&&define.amd?define("gdb",["jquery"],function(t){return gdbFactory(t)}):jQuery(function(){window.GDB=gdbFactory(window.jQuery)})}();