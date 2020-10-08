<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gpsmedicasite
 */

?>

	<footer class="site-footer">
		<div class=" bg-secondary text-center py-6 px-4">
			<div class="mx-auto max-w-screen-lg flex justify-center space-x-4">
				<a href="#" class="bg-primary2 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-white" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg></a>
				<a href="#" class="bg-primary2 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-white" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"/></svg></a>
				<a href="#" class="bg-primary2 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
			</div><!-- .site-info -->
		</div>
		<div class=" bg-primary text-center py-8 px-4 text-white">
			<div class="mx-auto max-w-screen-lg">
				<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-2',
							'menu_id'        => 'footer-menu',
							'container_class' => 'menu-container',
							'menu_class' => 'flex space-x-4 justify-center mb-8',
						)
					);
				?>
				<div class="mb-4">Guanacaste, CR. info@gpsmedica.com</div>
				<div class="">Copyright &copy; 2020 GPS Médica</div>
			</div><!-- .site-info -->
		</div>
	</footer><!-- #colophon -->


		
		<div class="modal hidden js-modal bg-primary fixed h-full w-full inset-0 flex flex-col justify-center items-center ">
			<h3 class="text-5xl text-white font-bold">¿Tiene una consulta?</h3>
			<p class="text-white text-2xl mb-6">No dudes en preguntarnos</p>
			<div class="modal-content bg-white px-8 py-8 max-w-screen-sm mx-4 relative z-10">
				<button class="js-close  text-primary absolute right-0 top-0 mr-4 mt-2"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
				
				<?php echo do_shortcode( '[contact-form-7 id="15" title="Formulario de contacto"]' ); ?>
				<!-- <button class="js-close  bg-primary text-white px-4 py-2 hover:bg-secondary hover:text-gray-900">Dismiss</button> -->
				
			</div>
		</div>
	



</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
