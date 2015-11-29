<?php
function domEl() {
    $start_site_navbar = 'content-start-site-navbar';
    return array(
    	'recurrent_head' => 'head',
    	'recurrent_body' => 'body',
    	// BACK TO TOP
    	'_back_to_top' => '.back-to-top',
    	//GENERAL HI DIVS
    	'div_hidden_inputs_session' => 'div#hidden-inputs-session',
    	'div_hidden_inputs_temporal' => 'div#hidden-inputs-temporal',
    	'div_recurrent' => 'div#content-temporal-interactive',
        // MAIN NAVIGATION
        '_start_site_navbar' => $start_site_navbar,
        '_start_site_navbar_name' => '#' . $start_site_navbar,
        // VALIDATION
        'validate_required' => '.validate-required',
    );
}
