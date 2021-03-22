<?php

// Your php code goes here

function wpangle_build(){
  wp_enqueue_script( 'wpangle-script', get_stylesheet_directory_uri() . '/wp-content/themes/wpangle/dist/*' , array(), null, true );
}
add_action('wp_enqueue_scripts', 'wpangle_build');
// wp_enqueue_script( 'wpangle-script', get_stylesheet_directory_uri() . '/dist/*' , array(), null, true );

// wp_enqueue_script( 'r_my_app_runtime', "/wp-content/themes/wpangle/dist/wpangle/*.js", null, true );
//   wp_enqueue_script( 'r_my_app_styles', "/wp-content/themes/wpangle/dist/wpangle/*.css", null, true );
//   $url = trailingslashit( home_url() );
//   $path = trailingslashit( parse_url( $url, PHP_URL_PATH ) );

//   wp_scripts()->add_data( 'wpangle-script', 'data', sprintf
//     ( 'var wpangleSettings = %s;',
//       wp_json_encode(
//         array(
//           'title' => get_bloginfo( 'name', 'display' ),
//           'path' => $path,
//           'URL' => array(
//             'api' => esc_url_raw(
//               get_rest_url( null, '/wp/v2' )
//             ),
//             'root' => esc_url_raw( $url ),
//           ),
//         )
//       )
//     )
//   );


// // Solves 'wp-admin visual editor not appearing'
//   // define('CONCATENATE_SCRIPTS', false);

// add_action('wp_enqueue_scripts', 'wpangle-script');

// function default_expanded_footer() {
// 	echo "<ul class='nav cols four'>
// 		<li>Create the Expanded Footer</li>
// 	</ul>" ;
// }

// This theme uses post thumbnails | enables feature image using theme
add_theme_support( 'post-thumbnails');

// // Changing excerpt length
// function new_excerpt_length($length) {
// return 10;
// }
// add_filter('excerpt_length', 'new_excerpt_length');

// // Changing excerpt more
// function new_excerpt_more($more) {
// return '...';
// }
// add_filter('excerpt_more', 'new_excerpt_more');

// Add various fields to the JSON output
function wpangle_register_fields() {
  $wpangle_types = array('post', 'comments', 'projects');
  $wpangle_fields = array('author_name','featured_image_src','published_date');
  // place functions in an array with corresponding rest fields as keys


  register_rest_field( 'post',
    'author_name',
    array(
      'get_callback'      => 'wpangle_get_author_name',
      'update_callback'   => null,
      'schema'            => null
    )
  );
	// Add Featured Image
	register_rest_field( array( 'post', 'project' ),
	  'featured_image_src',
	  array(
      'get_callback'      => 'wpangle_get_image_src',
      'update_callback'   => null,
      'schema'            => null
		)
  );
  // register_rest_field( 'project',
	//   'featured_image_src',
	//   array(
  //     'get_callback'      => 'wpangle_get_image_src',
  //     'update_callback'   => null,
  //     'schema'            => null
	// 	)
  // );

  // Add Published Date
  register_rest_field( 'post',
    'published_date',
    array(
    'get_callback'      => 'wpangle_published_date',
    'update_callback'   => null,
    'schema'            => null
    )
  );
}
add_action( 'rest_api_init', 'wpangle_register_fields' );



function wpangle_get_author_name( $object, $field_name, $request ) {
  return get_the_author_meta( 'display_name' );
}
function wpangle_get_image_src( $object, $field_name, $request ) {
	if($object[ 'featured_media' ] == 0) {
	  return $object[ 'featured_media' ];
	}
	 $feat_img_array = wp_get_attachment_image_src( $object[ 'featured_media' ], 'medium_large', true );
  return $feat_img_array[0];
}

function wpangle_published_date( $object, $field_name, $request ) {
  return get_the_time('F j, Y');
}


?>
