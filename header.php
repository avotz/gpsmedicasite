<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gpsmedicasite
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<header class="flex justify-between px-4 py-2 items-center shadow">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="w-16">
			<img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="GPS Médica">
		</a>
		<nav class="main-navigation">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
					'container_class' => 'menu-container',
					'menu_class' => 'hidden sm:flex font-bold sm:space-x-8 text-xl',
				)
			);
			?>
			
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
	