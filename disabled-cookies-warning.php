<?php
/**
 * Plugin Name: Disabled Cookies Warning
 * Plugin URI: https://github.com/ijerkov/disabled-cookies-warning
 * Description: A simple plugin to warn users if cookies are disabled in their browser.
 * Author: Ivo Jerković
 * Author URI: https://twitter.com/ijerkov
 * Version: 1.0.0
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') or die('No direct access allowed.');

class Disabled_Cookies_Warning {

	public function __construct() {
		add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
	}

	public function enqueue_scripts() {

		$plugin_data = get_plugin_data( WP_PLUGIN_DIR . '/' . plugin_basename( __FILE__ ) );
		wp_register_script('disabled-cookies-warning-script', plugin_dir_url(__FILE__) . 'js/disabled-cookies-warning.js', array(), $plugin_data['Version'], true);
		wp_enqueue_script('disabled-cookies-warning-script');
		wp_enqueue_style('disabled-cookies-warning-style', plugin_dir_url(__FILE__) . 'css/disabled-cookies-warning.css', array(), $plugin_data['Version']);

		add_filter('script_loader_tag', function ($tag, $handle) {
			if ('disabled-cookies-warning-script' !== $handle) {
				return $tag;
			}
			return str_replace(' src', ' defer src', $tag);
		}, 10, 2);
	}


}

new Disabled_Cookies_Warning();