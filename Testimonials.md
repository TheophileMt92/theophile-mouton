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
    console.log("Destroying existing Swiper instance");
    swiper.destroy(true, true);
  }
  const swiperElement = document.querySelector('.js-testimonials-slider');
  if (!swiperElement) {
    console.error("Swiper element not found");
    return;
  }
  const slides = swiperElement.querySelectorAll('.swiper-slide');
  console.log(`Found ${slides.length} slides`);
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
  // Force update and reinitialization
  setTimeout(() => {
    console.log("Forcing Swiper update");
    swiper.update();
    swiper.slideToLoop(0);
  }, 100);
}
function whenImagesLoaded(selector, callback) {
  const images = document.querySelectorAll(selector + ' img');
  let loaded = 0;
  const totalImages = images.length; 
  if (totalImages === 0) {
    console.log("No images found, calling callback immediately");
    callback();
    return;
  }
  images.forEach(img => {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener('load', imageLoaded);
      img.addEventListener('error', imageLoaded);
    }
  });
  function imageLoaded() {
    loaded++;
    console.log(`Image loaded: ${loaded}/${totalImages}`);
    if (loaded === totalImages) {
      console.log("All images loaded, calling callback");
      callback();
    }
  }
}
window.addEventListener('load', () => {
  console.log("Window load event fired");
  whenImagesLoaded('.js-testimonials-slider', initSwiper);
});
// Reinitialize on window resize
window.addEventListener('resize', () => {
  console.log("Window resized, reinitializing Swiper");
  initSwiper();
})
</script>