<?php

// Your php code goes here

// function app_resources() {
	// wp_enqueue_style('style', get_stylesheet_uri());
// 	wp_enqueue_script('main_js', get_template_directory_uri() . '/js/main.js', NULL, 1.0, true );
// 	wp_localize_script('main_js', 'magicalData', array(
// 		'nonce' => wp_create_nonce('wp_rest'),
// 		'siteURL' => get_site_url()
// 	));
// 	// wp_enqueue_script('app_js', get_stylesheet_directory_uri() . '/js/app.jsx', NULL, 1.0, true );
// }

// add_action('wp_enqueue_scripts', 'app_resources');

wp_enqueue_script( 'wpangle-script', get_stylesheet_directory_uri() . '/dist/wpangle/*' , array(), null, true );

  $url = trailingslashit( home_url() );
  $path = trailingslashit( parse_url( $url, PHP_URL_PATH ) );

  wp_scripts()->add_data( 'wpangle-script', 'data', sprintf
    ( 'var NeomorphSettings = %s;',
      wp_json_encode(
        array(
          'title' => get_bloginfo( 'name', 'display' ),
          'path' => $path,
          'URL' => array(
            'api' => esc_url_raw(
              get_rest_url( null, '/wp/v2' )
            ),
            'root' => esc_url_raw( $url ),
          ),
          // Woo Commerce Settings
          // 'woo' => array(
          //     'url' => esc_url_raw( 'https://localhost/celestial/wp-json/wc/v2/' ),
          //     'consumer_key' => 'ck_803bcdcaa73d3a406a0f107041b07ef6217e05b9',
          //     'consumer_secret' => 'cs_c50ba3a77cc88c3bf46ebac49bbc96de3a543f03'
          // ),
        )
      )
    )
  );


// Solves 'wp-admin visual editor not appearing'
  // define('CONCATENATE_SCRIPTS', false);

// add_action('wp_enqueue_scripts', 'neomorph-script');

function default_expanded_footer() {
	echo "<ul class='nav cols four'>
		<li>Create the Expanded Footer</li>
	</ul>" ;
}

// This theme uses post thumbnails
add_theme_support( 'post-thumbnails' );

// Changing excerpt length
function new_excerpt_length($length) {
return 10;
}
add_filter('excerpt_length', 'new_excerpt_length');

// Changing excerpt more
function new_excerpt_more($more) {
return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');

// Add various fields to the JSON output
function neomorph_register_fields() {
  // Add Author Name
  register_rest_field( 'post',
    'author_name',
    array(
      'get_callback'      => 'neomorph_get_author_name',
      'update_callback'   => null,
      'schema'            => null
    )
  );
	// Add Featured Image
	register_rest_field( 'post',
	  'featured_image_src',
	  array(
      'get_callback'      => 'neomorph_get_image_src',
      'update_callback'   => null,
      'schema'            => null
		)
  );
  // Add Published Date
  register_rest_field( 'post',
    'published_date',
    array(
    'get_callback'      => 'neomorph_published_date',
    'update_callback'   => null,
    'schema'            => null
    )
  );
}
add_action( 'rest_api_init', 'neomorph_register_fields' );

function neomorph_get_author_name( $object, $field_name, $request ) {
  return get_the_author_meta( 'display_name' );
}
function neomorph_get_image_src( $object, $field_name, $request ) {
	if($object[ 'featured_media' ] == 0) {
	  return $object[ 'featured_media' ];
	}
	 $feat_img_array = wp_get_attachment_image_src( $object[ 'featured_media' ], 'thumbnail', true );
  return $feat_img_array[0];
}
function neomorph_published_date( $object, $field_name, $request ) {
  return get_the_time('F j, Y');
}


?>
