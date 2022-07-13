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
		'jquery', 
		get_stylesheet_directory_uri() . '/js/vendor/jquery-1.12.3.min.js',
		array(),
		'1.12.3',
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

/**
 * Display the page preloader.
 *
 * @since  1.0.0
 * @return void
 */
function hello_elementor_get_page_preloader() {

	echo '<div id="overlay">';
	 echo '<div class="container">';
	 echo '<div class="spinner"></div>';
	   echo '<span class="loadtext">LOADING...</span>';
	  echo '</div>';
	echo '</div>';
	
}

 //add SVG to allowed file uploads 
 function add_file_types_to_uploads($file_types){ $new_filetypes = array(); $new_filetypes['svg'] = 'image/svg+xml'; $file_types = array_merge($file_types, $new_filetypes ); return $file_types; } 

 add_action('upload_mimes', 'add_file_types_to_uploads'); 
