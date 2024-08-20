// Load Swiper library
document.addEventListener('DOMContentLoaded', function() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
  script.onload = initSwiper;
  document.head.appendChild(script);
});

function initSwiper() {
  console.log("Initializing Swiper");
  try {
    const swiper = new Swiper('.js-testimonials-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log("Swiper initialized:", swiper);
  } catch (error) {
    console.error('Error initializing Swiper:', error);
  }
}