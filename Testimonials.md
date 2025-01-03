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
function initSwiper() {
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
      delay: 4000,
      disableOnInteraction: false
    }
  });
  return swiper;
}
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded, initializing Swiper");
  let swiper = initSwiper();
  // If Swiper doesn't initialize properly, try again after a short delay
  setTimeout(function() {
    if (!swiper.initialized) {
      console.log("Reinitializing Swiper");
      swiper = initSwiper();
    }
  }, 500);
});
</script>