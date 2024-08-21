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
  console.log("DOM fully loaded and parsed");
  initSwiper();
});
function initSwiper() {
  console.log("Initializing Swiper");
  var swiperElement = document.querySelector('.js-testimonials-slider');
  if (!swiperElement) {
    console.error("Swiper element not found");
    return;
  }
  try {
    var swiper = new Swiper('.js-testimonials-slider', {
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
    if (swiper.autoplay && swiper.autoplay.running) {
      console.log("Autoplay is running");
    } else {
      console.log("Autoplay is not running");
    }
  } catch (error) {
    console.error('Error initializing Swiper:', error);
  }
}
</script>