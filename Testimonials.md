---
layout: about
title: Testimonials  
description: >
  Testimonials 
hide_description: true
---

{% include testimonial-slider.html %}

<style>
.tm-cta { max-width: 1000px; margin: 2.4rem auto 1rem; border: 1px solid #dfe5e9; border-left: 4px solid #193747; background: #f4f7f9; border-radius: 4px; padding: 1.1rem 1.3rem; }
.tm-cta h2 { margin: 0 0 .4rem; font-size: 1.2rem; color: #193747; border: 0; }
.tm-cta p { margin: 0 0 .7rem; line-height: 1.55; font-size: .95rem; }
.tm-cta a.tm-btn { display: inline-block; background: #193747; color: #fff; padding: .45rem 1.05rem; border-radius: 3px; font-size: .88rem; text-decoration: none; margin: .2rem .45rem 0 0; }
.tm-cta a.tm-btn:hover { background: #2a5a74; color: #fff; }
.tm-cta a.tm-btn.ghost { background: transparent; color: #193747; border: 1px solid #193747; }
.tm-btns { display: block; }
.tm-cta small { display: block; margin: .7rem 0 0; color: #5a6a74; font-size: .82rem; }
</style>

<div class="tm-cta">
  <h2>Worked with me? Leave a testimonial</h2>
  <p>If we've worked together on a project, a workshop or a paper, I'd be grateful for a few words about the experience. I review each one and add it here.</p>
  <div class="tm-btns"><a class="tm-btn" href="mailto:theophile.mouton92@gmail.com?subject=Testimonial%20for%20theophile-mouton.com&body=Hi%20Th%C3%A9ophile%2C%0A%0AHere%20is%20a%20testimonial%20for%20your%20website.%0A%0AName%20%28as%20it%20should%20appear%29%3A%0ARole%20and%20organisation%3A%0AHow%20we%20worked%20together%3A%0A%0ATestimonial%3A%0A%0A%0AI%20agree%20to%20my%20name%2C%20role%20and%20testimonial%20being%20published%20on%20theophile-mouton.com.%0A">Send by email</a>
  <a class="tm-btn ghost" href="https://github.com/TheophileMt92/theophile-mouton/issues/new?template=testimonial.yml">Submit on GitHub</a></div>
  <small>Email is private. GitHub submissions are visible on the repository's public issue page until they're published here.</small>
</div>


<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  console.log("DOM loaded, initializing Swiper");
  var swiper = new Swiper('.js-testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    observer: true,
    observeParents: true,
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
  document.querySelectorAll('.js-testimonials-slider img').forEach(function (im) { if (!im.complete) im.addEventListener('load', function () { swiper.updateAutoHeight(0); }); });
  console.log("Swiper initialized:", swiper);
</script>