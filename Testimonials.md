---
layout: about
title: Testimonials  
description: >
  Testimonials 
hide_description: true
---

{% include testimonial-slider.html %}

<style>
  /* Make navigation arrows visible */
  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
    opacity: 1;
    visibility: visible;
  }
  
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 24px;
    font-weight: bold;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.7);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  console.log("DOM loaded, initializing Swiper");
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
      delay: 12000,
      disableOnInteraction: false
    }
  });
  console.log("Swiper initialized:", swiper);
</script>