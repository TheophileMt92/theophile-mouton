---
layout: about
title: About me  
description: >
  An about me paragraph 
hide_description: true
---
<style>
  .about-me-container {
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .about-me-text {
    flex-grow: 1;
    padding-right: 30px;
  }

  .profile-picture-container {
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    position: relative;
  }

  .profile-picture {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: sticky;
    top: 20px;
  }

  @media (max-width: 600px) {
    .about-me-container {
      flex-direction: column-reverse;
    }

    .about-me-text {
      padding-right: 0;
      padding-top: 20px;
    }

    .profile-picture-container {
      width: 150px;
      height: 150px;
    }

    .profile-picture {
      position: static;
    }
  }
</style>

<div class="about-me-container">
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
  <div class="profile-picture-container">
    <img class="profile-picture" src="https://github.com/TheophileMt92/theophile-mouton/raw/gh-pages/assets/img/DSCF7388_cropped.jpg" alt="Theo's profile picture" />
  </div>
</div>

<h2> Education </h2> 
<li>Ph.D., Ecology | University Claude Bernard Lyon I, France (<strong>2023</strong>)</li> 
<li>M.S., Ecology | University of Pau and Pays de l'Adour, France (<strong>2016</strong>)</li> 
<li>B.S., Ecology | University of Montpellier 2, France (<strong>2014</strong>)</li>