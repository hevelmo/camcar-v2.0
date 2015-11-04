/* ------------------------------------------------------ *\
    [Variables] 'Zone'
\* ------------------------------------------------------ */
    var section;
    var IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
        isIE = /msie/i.test( navigator.userAgent );
/* ------------------------------------------------------ *\
    [functions] validateEmail
\* ------------------------------------------------------ */
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\., ;:\s@\"] + (\.[^<>()[\]\\., ;:\s@\"] + )*)|(\". + \"))@((\[[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\])|(([a-zA-Z\-0-9] + \.) + [a-zA-Z] {2, }))$/;
        //return re.test(email);
        return true;
    }
/* ------------------------------------------------------ *\
    [functions] resetAlert
\* ------------------------------------------------------ */
    //It performs whit alertify libary an css
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
    [Methods] inputVal
\* ------------------------------------------------------ */
    var inputValMetdods = {
        isIntegerKP: function (event) {
            return /\d/.test(String.fromCharCode(event.keyCode));
        }
    }
/* ------------------------------------------------------ *\
    [Methods] addStyles
\* ------------------------------------------------------ */
    var addStylesMethod = {
        addStylesHome : function() {
            //new_el_attributes = {'id': 'myId', 'class': 'myClass', 'value' : '2', 'data-my-data' : '2', 'name' : 'myName'}
            //appendOne('div#my_div', 'div', new_el_attributes, '', 0);
            stylesHomeAttributes = [
                ['link', {'id' : 'content-add-style-home', 'rel': 'stylesheet', 'class':'link-home', 'href': 'css/sections/contact.css'}, '', 0]
            ];
            appendMulti(domEl.recurrent_head, stylesHomeAttributes);

            linkContactAttributes = [
                ['link', {'id': 'content-add-styles-contact', 'rel': 'stylesheet', 'class': 'link-contact', 'href': 'css/sections/contact.css'}, '', 0],
                ['link', {'id': 'content-add-styles-contact-shosen', 'rel': 'stylesheet', 'class': 'link-contact', 'href': 'css/plugins/jquery.chosen/chosen.css'}, '', 0]
            ];
            SUK.appendMulti('head', linkContactAttributes);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] cleanStyles
\* ------------------------------------------------------ */

/* ------------------------------------------------------ *\
    [Metodos] Favicon
\* ------------------------------------------------------ */
    var favicon = {
        load_favicon: function() {
            favicon.change("../resources/public/img/PROcaricon.ico");
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
    [Methods] loadTemplates
\* ------------------------------------------------------ */
    var loadTemplatesMethods = {
        loadTemplateHome : function() {
            CAMIN.loadTemplate(tempsNames.recurrent_welcome_home, domEl.div_recurrent);
        }
    }
/* ------------------------------------------------------ *\
 [Methods] Home
\* ------------------------------------------------------ */
    //This group of methods will be not used it's only example, remove it later
    var demoMethods = {
        changeLan : function (event) {
            var lan, date, newDate;
            lan = CAMIN.getValue($(this));
            date = $(domEl.h3_demo_date).data('date');
            newDate = CAMIN.momentToRoman(date, lan);
            $(domEl.h3_demo_date).text(newDate);
        }
    }

