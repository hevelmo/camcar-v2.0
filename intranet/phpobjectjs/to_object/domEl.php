<?php

function domEl() {
	// SECTION HOME
	$welcome_page_header_name = 'content-welcome-page-header';
	$welcome_page_content_name = 'content-welcome-page-content';
	$welcome_widgets_first_row_name = 'content-welcome-widgets-first-row';
	$panel_perfil = 'panel_perfil';
	$today_birthday = 'today_birthday';
	$today_aniversary = 'today_aniversary';
	// SECTION AGREEMENT
	$agreement_page_content = 'content-agreement-page-content';
    return array(
    	'recurrent_head' => 'head',
    	'recurrent_body' => 'body',
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
	    //HOME
	    '_home_panel_perfil_name' => $panel_perfil,
	    '_home_panel_perfil' => '#' . $panel_perfil,

	    '_home_today_birthday_name' => $today_birthday,
	    '_home_today_birthday' => '#' . $today_birthday,

	    '_home_today_aniversary_name' => $today_aniversary,
	    '_home_today_aniversary' => '#' . $today_aniversary,
    );
}
