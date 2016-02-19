<?php

function domEl() {
	// SECTION HOME
	$welcome_page_header_name = 'content-welcome-page-header';
	$welcome_page_content_name = 'content-welcome-page-content';
	$welcome_widgets_first_row_name = 'content-welcome-widgets-first-row';
	$panel_perfil = 'panel_perfil';
	$today_birthday = 'today_birthday';
	$today_aniversary = 'today_aniversary';
	$today_agreements = 'today_agreements';
	// SECTION AGREEMENT
	$agreement_page_content = 'content-agreement-page-content';
	// SECTION DIRECTORY
	//$directory_page_content = 'content-directory-page-content';
	$directory_page_aside = 'content-directory-page-aside';
	$directory_page_main = 'content-directory-page-main';
    return array(
    	'recurrent_head' => 'head',
    	'recurrent_body' => 'body',
    	// NAVIGATION
		'site_navbar' => '#content-site-navbar-interactive',
		'site_menubar' => '#content-site-menubar-interactive',
        '_dd_menu_description' => '#dd-menu-description',
    	//GENERAL HI DIVS
    	'div_hidden_inputs_session' => 'div#hidden-inputs-session',
    	'div_hidden_inputs_temporal' => 'div#hidden-inputs-temporal',
    	'div_recurrent' => 'div#content-temporal-interactive',
    	// RECURRENTS SECTION HOME
    	'_home_page_header' => $welcome_page_header_name,
    	'_home_page_header_name' => '#' . $welcome_page_header_name,

		'_home_page_content' => $welcome_page_content_name,
    	'_home_page_content_name' => '#' . $welcome_page_content_name,

    	'_home_widget_first_row' => $welcome_widgets_first_row_name,
    	'_home_widget_first_row_name' => '#' . $welcome_widgets_first_row_name,
    	// RECURRENTS SECTION AGREEMENT
    	'_agreement_page_content' => $agreement_page_content,
    	'_agreement_page_content_name' => '#' . $agreement_page_content,
    	// RECURRENTS SECTION DIRECTORY
    	'_directory_page_aside' => $directory_page_aside,
    	'_directory_page_aside_name' => '#' . $directory_page_aside,
    	'_directory_page_main' => $directory_page_main,
    	'_directory_page_main_name' => '#' . $directory_page_main,
    	'div_recurrent_site_action' => '#content-site-action',
        '_directory_employees_list' => '#directory-employees-list',
        '_directory_employees_number' => '#directory-employees-number',
        'input_directory_search' => 'input#directory-search',
        '_epy_sorter' => '.epy-sorter',
    	// SLIDEPANEL
    	'div_recurrent_slidepanel' => '#content-slide-panel',
    	// EVENTS SECTION
    	'go_section_home' => '#go-section-home',
		'go_section_agreement' => '#go-section-agreement',
		'go_section_directory' => '#go-section-directory',
    	//SESSION AUXILIAR HIDDEN INPUTS
	    //'input_session_usr_username' => 'input#session-usr-username',
	    'input_session_usr_id' => 'input#session-usr-id',
	    'input_session_usr_type' => 'input#session-usr-type',
	    'input_session_usr_email' => 'input#session-usr-email',
	    'input_session_usr_agn_id' => 'input#session-usr-agn-id',
	    'input_session_usr_agn_name' => 'input#session-usr-agn-name',
	    'input_session_usr_agn_logo1' => 'input#session-usr-agn-logo1',
	    'input_session_usr_agn_logo2' => 'input#session-usr-agn-logo2',
	    'input_session_usr_agn_header' => 'input#session-usr-agn-header',
	    //AUXILIAR FORMAT CLASSES
	    '_percentage_d' => '.percentage-d',
        '_currency_h' => '.currency-h',
        '_real_v' => '.real-v',
        '_date_roman_h' => '.date-roman-h',
        '_date_roman_v' => '.date-roman-v',
        '_date_human_h' => '.date-human-h',
        '_date_human_v' => '.date-human-v',
	    //HOME
	    '_home_panel_perfil_name' => $panel_perfil,
	    '_home_panel_perfil' => '#' . $panel_perfil,

        '_profile_emp_name' => '#profile-emp-name',
        '_profile_emp_job' => '#profile-emp-job',
        '_profile_emp_agency' => '#profile-emp-agency',

	    '_home_today_birthday_name' => $today_birthday,
	    '_home_today_birthday' => '#' . $today_birthday,

	    '_home_today_aniversary_name' => $today_aniversary,
	    '_home_today_aniversary' => '#' . $today_aniversary,

	    '_home_today_agreements_name' => $today_agreements,
	    '_home_today_agreements' => '#' . $today_agreements,
    );
}
