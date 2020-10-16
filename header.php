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
	<header class=" px-4 py-2 sm:py-0 items-center shadow relative border-t-4 border-primary2 bg-red-500" x-data="{ showMenu: false }">
		<div class="flex justify-between items-center container mx-auto">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="w-16">
				<img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="GPS Médica">
			</a>
			<nav class="main-navigation hidden sm:block">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
						'container_class' => 'menu-container',
						'menu_class' => 'flex font-bold sm:space-x-8 text-xl',
					)
				);
				?>
				
			</nav><!-- #site-navigation -->
			<nav class="mobile-navigation sm:hidden absolute bg-white left-0 right-0 top-90 z-10 w-full px-4 " :class="{ 'hidden' : !showMenu }" @click.away="showMenu = false">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'mobile-menu',
						'container_class' => 'menu-container',
						'menu_class' => 'font-bold divide-y divide-gray-200',
					)
				);
				?>
				
			</nav><!-- #mobile-navigation -->
			<button @click="showMenu = !showMenu" class="text-primary sm:hidden"><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
		</div>
		
	</header><!-- #masthead -->
	