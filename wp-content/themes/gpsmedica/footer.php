<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gpsmedica
 */

?>

	<footer class="footer">
		<div class="inner">
			<div class="footer-container">
				<?php wp_nav_menu( array(
		             'theme_location' => 'footer',
		             'menu_id' => 'footer-menu',
		             'container'       => 'nav',
		            'container_class' => 'footer-menu',
		            'container_id'    => '',
		            'menu_class'      => 'footer-menu-ul',
		              ) 
		          ); 
		          ?>
		          <div class="footer-address">
		          	 <p>Guanacaste, CR   |   info@gpsmedica.com   |   919.225.3825</p>
		          </div>
		          <div class="copy">
		          	<span>© Copyright 2017 GPS Medica.</span>
		          </div>
			</div>
		</div>
	</footer>

	 <div id="contact-popup" class="request-popup white-popup mfp-hide mfp-with-anim">
		<h3>Formulario de Contacto</h3>
         <?php  echo do_shortcode('[contact-form-7 id="17" title="Contact form"]') ;?>
              
        
    </div>

<?php wp_footer(); ?>

</body>
</html>
