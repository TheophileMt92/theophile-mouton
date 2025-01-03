---
layout: about
title: Testimonials  
description: >
  Testimonials 
hide_description: true
---

{% include testimonial-slider.html %}

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
// Wait for both DOM and Swiper script to be fully loaded
window.addEventListener('load', function() {
  setTimeout(function() {
    try {
      console.log("Initializing Swiper");
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
          delay: 4000,
          disableOnInteraction: false
        }
      });
      console.log("Swiper initialized:", swiper);
    } catch (error) {
      console.error("Error initializing Swiper:", error);
    }
  }, 100); // Small delay to ensure everything is loaded
});
</script>