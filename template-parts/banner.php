<?php 
  $slides = [
    [
        'img' => 'banner1.jpg',
        'title' => 'Expediente Clínico',
        'subtitle' => 'Almacena fácil en tu expediente tus datos personales'
    ],
    [
        'img' => 'banner4.jpg',
        'title' => 'Buscar Médico',
        'subtitle' => 'Ubica el médico que deseas en el lugar de su consulta'
    ]
  ];
?>

<div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides h-screen-1/2">
    <?php foreach($slides as $slide) : ?>
        <li class="glide__slide bg-primary bg-cover bg-no-repeat h-full flex flex-col items-center justify-center text-center px-4" style="background-image:url(<?php echo get_template_directory_uri(); ?>/img/<?= $slide['img'] ?>")">
		  <h4 class="text-xl md:text-2xl text-gray-900"><?= $slide['subtitle'] ?></h4>
		  <h3 class="text-4xl md:text-6xl font-bold text-primary2"><?= $slide['title'] ?></h3>
      </li>
      <?php endforeach ?>
	</ul>
  </div>
  <div class="glide__arrows hidden md:block" data-glide-el="controls">
		<button class="glide__arrow glide__arrow--left absolute left-0 top-1/2 ml-4" data-glide-dir="<"><svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button>
		<button class="glide__arrow glide__arrow--right absolute right-0 top-1/2 mr-4" data-glide-dir=">"><svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
  </div>
  <div class="glide__bullets w-full text-center" data-glide-el="controls[nav]">
    <?php foreach($slides as $index => $slide) : ?>
        <button class="glide__bullet h-2 w-2 rounded-full opacity-50 bg-primary" data-glide-dir="=<?= $index ?>"></button>
    <?php endforeach ?>
  </div>
</div>