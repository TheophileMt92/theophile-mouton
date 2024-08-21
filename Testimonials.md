---
layout: about
title: Testimonials  
description: >
  Testimonials 
hide_description: true
---

{% include testimonial-slider.html %}

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
let swiper;
function initSwiper() {
  console.log("Initializing Swiper");
  if (swiper) {
    swiper.destroy(true, true);
  }
  swiper = new Swiper('.js-testimonials-slider', {
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
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    }
  });
  console.log("Swiper initialized:", swiper);
}
function tryInitSwiper() {
  if (document.readyState === 'complete') {
    initSwiper();
  } else {
    window.addEventListener('load', initSwiper);
  }
}
document.addEventListener('DOMContentLoaded', tryInitSwiper);
// Reinitialize on window resize
window.addEventListener('resize', initSwiper);
// Fallback initialization
setTimeout(initSwiper, 2000);
</script>