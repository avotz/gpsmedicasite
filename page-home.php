<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 * Template Name: Page Home 
 * @package gpsmedicasite
 */

get_header();

get_template_part('template-parts/banner');
?>

<div class="py-12 bg-white" id="features">
	<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<p class="text-base leading-6 text-primary font-semibold tracking-wide uppercase">Características</p>
			<h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-12">
				Explora todas nuestras funcionalidades
			</h3>
			
		</div>

		<div class="mt-16">
			<ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				<li>
					<div class="flex">
						<div class="flex-shrink-0">
							<div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary2 text-white">
								<!-- Heroicon name: globe-alt -->
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"></path></svg>
							</div>
						</div>
						<div class="ml-4">
							<h4 class="text-lg leading-6 font-medium text-gray-900">Expediente Clínico</h4>
							<p class="mt-2 text-base leading-6 text-gray-500">
								Lleva el control de toma de Presión, Glicemia, Medicamentos y mas
							</p>
						</div>
					</div>
				</li>
				<li class="mt-10 md:mt-0">
					<div class="flex">
						<div class="flex-shrink-0">
							<div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary2 text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path></svg>
								</div>
						</div>
						<div class="ml-4">
							<h4 class="text-lg leading-6 font-medium text-gray-900">Reserva tu cita</h4>
							<p class="mt-2 text-base leading-6 text-gray-500">
								Busca un médico o clínica privada y reserva tu cita
							</p>
						</div>
					</div>
				</li>
				<li class="mt-10 md:mt-0">
					<div class="flex">
						<div class="flex-shrink-0">
							<div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary2 text-white">
								<!-- Heroicon name: lightning-bolt -->
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
							</div>
						</div>
						<div class="ml-4">
							<h4 class="text-lg leading-6 font-medium text-gray-900">Agenda Médica</h4>
							<p class="mt-2 text-base leading-6 text-gray-500">
								Consulte su historial de citas médicas
							</p>
						</div>
					</div>
				</li>
				<li class="mt-10 md:mt-0">
					<div class="flex">
						<div class="flex-shrink-0">
							<div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary2 text-white">
								<!-- Heroicon name: annotation -->
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
								</svg>
							</div>
						</div>
						<div class="ml-4">
							<h4 class="text-lg leading-6 font-medium text-gray-900">Control de médicamentos</h4>
							<p class="mt-2 text-base leading-6 text-gray-500">
								Lleva un control de recordatorio de toma de medicamentos
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
<span class="border-t border-gray-300 block max-w-screen-md mx-auto my-8"></span>
<div class="py-12 bg-white " >
	<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
		<div class="lg:text-center">
			<p class="text-base leading-6 text-primary font-semibold tracking-wide uppercase">Aplicacón:</p>
			<h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-12">
				Descarga la app y lleva el control de tu salud
			</h3>
			
		</div>

		<div class="mt-10 text-center flex justify-center gap-2">
			<a href="https://play.google.com/store/apps/details?id=com.doctorbluecr.app" target="_blank" class="w-36 block"><img src="<?php echo get_template_directory_uri(); ?>/img/GetItOnGooglePlay_Badge_Web_color_Spanish.png" alt="Google Play" class="w-full h-full" /></a>
			<a href="https://apps.apple.com/app/doctor-blue/id6504412792" target="_blank" class="w-36 block"><img src="<?php echo get_template_directory_uri(); ?>/img/Download_on_the_App_Store_Badge_ES_RGB_blk_100217.svg" alt="App Store" class="w-full h-full" /></a>
		</div>
	</div>
</div>
<div class="py-12 bg-white " >
	<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
		<div class="lg:text-center">
			<p class="text-base leading-6 text-primary font-semibold tracking-wide uppercase">¿Tienes una consulta?</p>
			<h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-12">
				No dudes en preguntarnos, estamos a tu disposición
			</h3>
			
		</div>

		<div class="mt-10 text-center">
			<button class="js-open bg-primary text-white text-xl px-4 py-2 hover:bg-secondary hover:text-gray-900">Contáctenos</button>
		</div>
	</div>
</div>

<?php
get_footer();
