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
	  	  	
		  	  		
		  	  		 <div class="item-info">
		  	  			<p>a signature of excellence!</p>
		  	  			<h2>GPS Médica</h2>
		  	  		</div> 
		  	  		
		  	  
	  	  </div>

	  	  <div class="item" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner2.jpg');">
	  	  	
		  	  		
		  	  		
		  	  		 <div class="item-info">
		  	  			<p>Ubica el médico o clinica privada que deseas en el lugar de su consulta</p>
		  	  			<h2>Busca</h2>
		  	  		</div> 
		  	  		
		  	  
	  	  </div>
		<div class="item" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner4.jpg');">
	  	  	
		  	  		 <div class="item-info">
		  	  			<p>Consulta la agenda del médico y reserva en línea</p>
		  	  			<h2>Reserva</h2>
		  	  		</div> 
		  	  
		  	  		<!-- <a href="http://app.gpsmedica.com" target="_blank"></a> -->
		  	  
	  	  </div>
	  	  <div class="item" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner3.jpg');">
	  	  	
		  	  			<div class="item-info">
		  	  			<p>Almacena fácil en tu expediente tus datos</p>
		  	  			<h2>Expediente Clínico</h2>
		  	  		</div> 
		  	  		
		  	  		<!-- <a href="http://app.gpsmedica.com" target="_blank"></a> -->
		  	  
	  	  </div>
	  	 
	  	  
	  </div>
	  	 
	  	  	  
	
		
	</section>
	<section id="features" class="features">
		<div class="inner">
			<h2>Caracteristicas</h2>
			<div class="features-container">
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature1.png" alt="">
					</a>
					<div class="feature-info">
						<h3><a href="http://app.gpsmedica.com" target=" _blank">Médico o Clínica</a></h3>
						<p>Ubica el médico que deseas en el lugar de su consulta. Busca una clínica privada y descubre que médicos le colaboran</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature2.png" alt="">
					</a>
					<div class="feature-info">
					    <h3><a href="http://app.gpsmedica.com" target=" _blank">Reserva tu cita</a></h3>
						
						<p>Consulta la agenda del médico y reserva en línea</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature4.png" alt="">
					</a>
					<div class="feature-info">
					    <h3><a href="http://app.gpsmedica.com" target=" _blank">Ubicación GPS</a></h3>
						<p>Descubre cómo llegar a tu médico o clínica deseada</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature5.png" alt="">
					</a>
					<div class="feature-info">
					    <h3><a href="http://app.gpsmedica.com" target=" _blank">Tu Control Personal</a></h3>

						<p>Almacena fácil en tu expediente tus datos personales como Azúcar, Presión y Medicamentos</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature7.png" alt="">
					</a>
					<div class="feature-info">
						<h3><a href="http://app.gpsmedica.com" target=" _blank">Tu Expediente Clínico</a></h3>
						<p>Creamos un expediente clínico universal de uso exclusivo médico al que podrá acceder otro médico con tu autorización en el momento requerido</p>
					</div>
				</div>
				<div class="features-item">
					<a class="feature-img" href="http://app.gpsmedica.com" target=" _blank">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature6.png" alt="">
					</a>
					<div class="feature-info">
					 	<h3><a href="http://app.gpsmedica.com" target=" _blank">Recibe recordatorios</a></h3>
						
						<p>Ya no olvidarás más tus citas importantes. El sistema recordará tu cita automáticamente</p>
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
				<a href="#contact-popup" class="btn btn-orange contact-popup-link">Contáctenos</a>
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
