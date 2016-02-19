$(document).ready(function() {
    /* ------------------------------------------------------ *\
     [METHOS Control] Serialize Form
    \* ------------------------------------------------------ */
        //This method change a form into a JSON
        $.fn.serializeFormJSON = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
    /* ------------------------------------------------------ *\
     [METHOS Control] Currency Format
    \* ------------------------------------------------------ */
        Number.prototype.format = function(n, x) {
            var re = '(\\d)(?=(\\d{' + (x || 3) + '}) + ' + (n > 0 ? '\\.' : '$') + ')';
            return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
        };
    /* ------------------------------------------------------ *\
        EVENT CONTROL
    \* ------------------------------------------------------ */

    $(domEl.recurrent_body).on('click', domEl.dropdown_animate_nav_header, animateNavMethod.animateNav);

    $(domEl.recurrent_body).on('click', '#menu_bar_toggle', toggleMenuBarMethod.toggleMenuBar);

    // SLIDEPANEL
    //$(domEl.div_recurrent).on('click', domEl._widget_toggle_slide_panel, handleSlidePanelMethods.toggleSlidePanel);
    // CLOSE SLIDEPANEL
    //$(domEl.body_recurrent).on('click', domEl._close_slide_panel, handleSlidePanelMethods.clickCloseSlidePanel);

    // SECTIONS
    $(domEl.recurrent_body).on('click', domEl.go_section_home, goSectionMethods.goSection_home);
    $(domEl.recurrent_body).on('click', domEl.go_section_agreement, goSectionMethods.goSection_agreement);
    $(domEl.recurrent_body).on('click', domEl.go_section_directory, goSectionMethods.goSection_directory);

    //DIRECTORY
    $(domEl.div_recurrent).on('keyup', domEl.input_directory_search, viewSectionWelcomeDirectoryMethods.keyupSearch);
    $(domEl.div_recurrent).on('blur', domEl.input_directory_search, viewSectionWelcomeDirectoryMethods.blurSearch);
    $(domEl.div_recurrent).on('click', domEl._epy_sorter, viewSectionWelcomeDirectoryMethods.clickSorter)

    // CALL MODAL OVERLAY
    $(domEl.div_recurrent).on('click', '.call-modal-ovarlay.birthday', callModalOverlayMethod.callModalOverlay);
});
