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
		
		
	  	 
	  	  <div class="item" style="background-image: url('<?php echo get_template_directory_uri();  ?>/img/banner.png');">
	  	  	
		  	  		
		  	  		<div class="item-info">
		  	  			<p>a signature of excellence!</p>
		  	  			<h2>GPS Medica</h2>
		  	  		</div>
		  	  		
		  	  
	  	  </div>
	  	  
	  	 
	  	  	  
	
		
	</section>
	<section id="features" class="features">
		<div class="inner">
			<h2>Caracteristicas</h2>
			<div class="features-container">
				<div class="features-item">
					<div class="feature-img">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature1.png" alt="">
					</div>
					<div class="feature-info">
						<h3>REALTIME BENEFITS</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus assumenda ex deleniti voluptatibu.</p>
					</div>
				</div>
				<div class="features-item">
					<div class="feature-img">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature2.png" alt="">
					</div>
					<div class="feature-info">
						<h3>REALTIME BENEFITS</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus assumenda ex deleniti voluptatibu.</p>
					</div>
				</div>
				<div class="features-item">
					<div class="feature-img">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature3.png" alt="">
					</div>
					<div class="feature-info">
						<h3>REALTIME BENEFITS</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus assumenda ex deleniti voluptatibu.</p>
					</div>
				</div>
				<div class="features-item">
					<div class="feature-img">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature4.png" alt="">
					</div>
					<div class="feature-info">
						<h3>REALTIME BENEFITS</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus assumenda ex deleniti voluptatibu.</p>
					</div>
				</div>
				<div class="features-item">
					<div class="feature-img">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature5.png" alt="">
					</div>
					<div class="feature-info">
						<h3>REALTIME BENEFITS</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus assumenda ex deleniti voluptatibu.</p>
					</div>
				</div>
				<div class="features-item">
					<div class="feature-img">
						<img src="<?php echo get_template_directory_uri();  ?>/img/feature6.png" alt="">
					</div>
					<div class="feature-info">
						<h3>REALTIME BENEFITS</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus assumenda ex deleniti voluptatibu.</p>
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
