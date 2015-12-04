<?php

function domEl() {
	// SECTION PREOWNED
	$section_mew_preowned_page_header = 'content-new-preowned-page-header';
	$section_mew_preowned_page_content = 'content-new-preowned-page-content';
    return array(
    	'recurrent_head' => 'head',
    	'recurrent_body' => 'body',
    	// NAVIGATION
		'site_navbar' => '#content-site-navbar-interactive',
		'site_menubar' => '#content-site-menubar-interactive',
    	//GENERAL HI DIVS
    	'div_hidden_inputs_session' => 'div#hidden-inputs-session',
    	'div_hidden_inputs_temporal' => 'div#hidden-inputs-temporal',
    	'div_recurrent' => 'div#content-temporal-interactive',
    	// RECURRENT SECTION NEW PREOWNED
    	'_section_mew_preowned_page_header' => $section_mew_preowned_page_header,
    	'_section_mew_preowned_page_header_name' => '#' . $section_mew_preowned_page_header,
    	'_section_mew_preowned_page_content' => $section_mew_preowned_page_content,
    	'_section_mew_preowned_page_content_name' => '#' . $section_mew_preowned_page_content,
    );
}
