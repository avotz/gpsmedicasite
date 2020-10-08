import 'alpinejs';
import Glide from '@glidejs/glide'
import './simpleModal.js';


new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay:2500
  }).mount();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});