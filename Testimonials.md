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
document.addEventListener('DOMContentLoaded', function() {
  initSwiper();
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
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      }
    });
    console.log("Swiper initialized:", swiper);
  } catch (error) {
    console.error('Error initializing Swiper:', error);
  }
}
</script>