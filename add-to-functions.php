function my_enqueue_scripts() {
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'my_enqueue_scripts');


function my_enqueue_event_scripts() {
    wp_enqueue_script('fetch-events', get_template_directory_uri() . '/js/fetch-events.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'my_enqueue_event_scripts');
