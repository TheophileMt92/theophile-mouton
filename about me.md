---
layout: about
title: About me  
description: >
  An about me paragraph 
hide_description: true
---
<style>
  .about-me-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
  }

  .profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: 4px solid white;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .about-me-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .about-me-text p {
    width: calc(50% - 110px);
    margin: 10px 0;
  }

  .about-me-text p:nth-child(odd) {
    padding-right: 110px;
  }

  .about-me-text p:nth-child(even) {
    padding-left: 110px;
  }

  @media (max-width: 600px) {
    .profile-picture {
      position: static;
      transform: none;
      margin: 0 auto 20px;
      display: block;
    }

    .about-me-text p {
      width: 100%;
      padding: 0 !important;
    }
  }
</style>

<div class="about-me-container">
  <img class="profile-picture" src="https://github.com/TheophileMt92/theophile-mouton/raw/gh-pages/assets/img/DSCF7388_cropped.jpg" alt="Theo's profile picture" />
  <div class="about-me-text">
    <p>
      Hi, I'm Theo! I am a data analyst and researcher with a PhD in macroecology.
    </p>
    <p>
      My journey has taken me through crown institutes, universities, and international organisations. 
    </p>
    <p>
      Adept in scientific writing and utilizing advanced programming and computer modelling tools, I've consistently transformed data or ideas, into impactful research findings. 
    </p>
    <p>
      I'm enthusiastic about connecting with like-minded professionals and organizations to make a meaningful impact on the world's ecological and social challenges. Let's collaborate for a sustainable and resilient future!
    </p>
  </div>
</div>

<h2> Education </h2> 
<li>Ph.D., Ecology | University Claude Bernard Lyon I, France (<strong>2023</strong>)</li> 
<li>M.S., Ecology | University of Pau and Pays de l'Adour, France (<strong>2016</strong>)</li> 
<li>B.S., Ecology | University of Montpellier 2, France (<strong>2014</strong>)</li>