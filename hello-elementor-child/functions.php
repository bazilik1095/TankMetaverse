<?php
/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function hello_elementor_child_enqueue_scripts() {
	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		'1.0.0'
	);

	wp_enqueue_script( 
		'scrolltrigger', 
		get_stylesheet_directory_uri() . '/js/vendor/ScrollTrigger.min.js',
		array(),
		'3.10.4',
		true
	);

	wp_enqueue_script( 
		'gsap', 
		get_stylesheet_directory_uri() . '/js/vendor/gsap.min.js',
		array(),
		'3.10.4',
		true
	);

	wp_enqueue_script( 
		'main-script', 
		get_stylesheet_directory_uri() . '/js/main.js',
		array(),
		'1.0.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20 );
