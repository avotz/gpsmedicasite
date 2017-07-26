<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * Template Name: Page Home 
 * @package gpsmedica
 */

get_header(); ?>

	<section class="banner">
		
		 <div class="banner-functions">
		 	<a href="http://app.gpsmedica.com" target="_blank" class="banner-functions-item">
		 	    <figure class="banner-functions-item-img" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner1.png');"></figure>
		 		<span>Buscar médico</span>
		 	</a>
		 	<a href="http://app.gpsmedica.com" target="_blank" class="banner-functions-item">
		 	    <figure class="banner-functions-item-img" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner2.png');"></figure>
		 		<span>Buscar clínica</span>
		 	</a>
		 	<a href="http://app.gpsmedica.com" target="_blank" class="banner-functions-item">
		 	    <figure class="banner-functions-item-img" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner3.png');"></figure>
		 		<span>Ver agenda</span>
		 	</a>
		 	<a href="http://app.gpsmedica.com" target="_blank" class="banner-functions-item">
		 	    <figure class="banner-functions-item-img" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner4.png');"></figure>
		 		<span>Mi expediente</span>
		 	</a>
		 </div>
	  	 <div class="owl-carousel">
	  	 	
	  	
	  	  <div class="item" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner1.jpg');">
	  	  	
		  	  		
		  	  		<!-- <div class="item-info"> -->
		  	  			<a href="http://app.gpsmedica.com" target="_blank"></a>
		  	  		<!-- </div> -->
		  	  		
		  	  
	  	  </div>
	  	  <div class="item" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner2.jpg');">
	  	  	
		  	  		
		  	  		<!-- <div class="item-info">
		  	  			<p>a signature of excellence!</p>
		  	  			<h2>GPS Medica</h2>
		  	  		</div> -->
		  	  		<a href="http://app.gpsmedica.com" target="_blank"></a>
		  	  		
		  	  
	  	  </div>
	  	  <div class="item" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner3.jpg');">
	  	  	
		  	  		
		  	  		<!-- <div class="item-info">
		  	  			<p>a signature of excellence!</p>
		  	  			<h2>GPS Medica</h2>
		  	  		</div> -->
		  	  		<a href="http://app.gpsmedica.com" target="_blank"></a>
		  	  
	  	  </div>
	  	  <div class="item" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner4.jpg');">
	  	  	
		  	  		
		  	  	<!-- 	<div class="item-info">
		  	  			<p>a signature of excellence!</p>
		  	  			<h2>GPS Medica</h2>
		  	  		</div> -->
		  	  		<a href="http://app.gpsmedica.com" target="_blank"></a>
		  	  
	  	  </div>
	  	  
	  </div>
	  	 
	  	  	  
	
		
	</section>
	<section id="features" class="features">
		<div class="inner">
			<h2>Caracteristicas</h2>
			<div class="features-container">
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/buscar-medico.png" alt="">
					</a>
					<div class="feature-info">
						<h3><a href="http://app.gpsmedica.com" target=" _blank">Médico o Clínica</a></h3>
						<p>Buscador que te permite encontrar médicos o clínicas cerca de tu posicion o de acuerdo a tus parametros de busqueda</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/compartir.png" alt="">
					</a>
					<div class="feature-info">
					    <h3><a href="http://app.gpsmedica.com" target=" _blank">Compartir y Reservar</a></h3>
						
						<p>Puesdes compartir la ubicación de un médico o reservar una cita</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/agenda-medico.png" alt="">
					</a>
					<div class="feature-info">
					    <h3><a href="http://app.gpsmedica.com" target=" _blank">Agenda de Médico</a></h3>
						<p>Puedes consultar la agenda del médico para saber cual dia esta disponible para tu atención</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/agenda-clinica.png" alt="">
					</a>
					<div class="feature-info">
					    <h3><a href="http://app.gpsmedica.com" target=" _blank">Agenda de Clínica</a></h3>

						<p>Puedes consulta la agenda de una clínica para saber cual médico te funciona mejor</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/pacientes.png" alt="">
					</a>
					<div class="feature-info">
						<h3><a href="http://app.gpsmedica.com" target=" _blank">Pacientes</a></h3>
						<p>Puedes tener tantos paciente crear conveniente en tu cuenta.</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/expediente.png" alt="">
					</a>
					<div class="feature-info">
					 	<h3><a href="http://app.gpsmedica.com" target=" _blank">Mi Expediente</a></h3>
						
						<p>Tienes a disposición tu expediente personal para tu propio control</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="video">
		<div class="inner">
			<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
			<div class="vid">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/YTd0mnzkWo8" frameborder="0" allowfullscreen></iframe>
			</div>
		</div>
	</section>
	<section class="getapp">
		<div class="inner">
			<div class="getapp-container">
				<div class="getapp-info">
					<h2>Obtener la aplicación!</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum perspiciatis, id maxime. In commodi fuga hic earum dignissimos est aut distinctio autem eaque quae repellat aperiam expedita tempore, quia. Aspernatur?</p>
				</div>
				<div class="getapp-links">
					<a href="#"><img src="<?php echo get_template_directory_uri();  ?>/img/android.png" alt=""></a>
					<a href="#"><img src="<?php echo get_template_directory_uri();  ?>/img/ios.png" alt=""></a>
				</div>
				
			</div>
			
		</div>
	</section>
	<section class="contact">
		<div class="inner">
			<div class="contact-container">
				<p>Lorem ipsum dolor sit amet?</p>
				<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
				<a href="#" class="btn btn-orange">Contáctenos</a>
			</div>
			
		</div>
	</section>
	<section class="social">
		<div class="inner">
			<div class="social-container">
				<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
				<a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
				<a href="#" class="google"><i class="fa fa-google-plus"></i></a>
				<a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
			</div>
			
		</div>
	</section>
	
<?php

get_footer();
