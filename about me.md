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
    max-width: 100%;
    padding: 20px 0;
  }

  .about-me-text {
    flex-grow: 1;
    padding-right: 30px;
  }

  .about-me-text p {
    margin: 0 0 15px 0;
  }

  .profile-picture-container {
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    position: relative;
    margin-right: 30px;
  }

  .profile-picture {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: sticky;
    top: 20px;
  }

  .services-container {
    margin-top: 2rem;
  }

  .service-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: transform 0.2s;
  }

  .service-card:hover {
    transform: translateY(-3px);
  }

  .service-title {
    color: #2c3e50;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }

  .service-description {
    color: #495057;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .about-me-container {
      flex-direction: column-reverse;
      padding: 20px;
    }

    .about-me-text {
      padding-right: 0;
      padding-top: 20px;
    }

    .profile-picture-container {
      width: 150px;
      height: 150px;
      margin-right: 0;
    }

    .profile-picture {
      position: static;
    }
  }
</style>

<div class="about-me-container">
  <div class="about-me-text">
    <p>
      Hi, I'm Theo! I am a <strong>freelance data scientist</strong> and researcher with a <strong>PhD in macroecology</strong>.
    </p>
    <p>
      My journey has taken me through <strong>crown institutes</strong>, <strong>universities</strong>, and <strong>international organisations</strong>. 
    </p>
    <p>
      Adept in <strong>scientific writing</strong> and utilizing <strong>advanced programming</strong> and <strong>computer modelling</strong> tools, I've consistently transformed data or ideas, into impactful research findings. 
    </p>
    <p>
      I'm <strong>currently accepting new consulting projects</strong> and would love to help transform your data challenges into opportunities. Reach out to discuss how we can work together to achieve your organization's objectives.
    </p>
  </div>
  <div class="profile-picture-container">
    <img class="profile-picture" src="https://github.com/TheophileMt92/theophile-mouton/raw/gh-pages/assets/img/DSCF7388_cropped.jpg" alt="Theo's profile picture" />
  </div>
</div>

<h2>Consulting Services</h2>
<div class="services-container">
  <p class="services-intro" style="margin-bottom: 2rem; line-height: 1.6;">
    As a consultant, I provide a wide range of analytical solutions and technical services tailored to the needs of my clients. My expertise includes:
  </p>
  
  <div class="service-card">
    <div class="service-title">Data Analysis and Visualization</div>
    <div class="service-description">
      Transforming complex datasets into actionable insights and creating clear, publication-ready visualizations using tools like <strong>R</strong>, <strong>ggplot2</strong>, and <strong>Quarto</strong>.
    </div>
  </div>

  <div class="service-card">
    <div class="service-title">Geospatial Analysis</div>
    <div class="service-description">
      Performing advanced geographic information system (GIS) analyses, including spatial modeling, mapping, and large-scale data integration, using tools such as <strong>ArcGIS</strong>, <strong>QGIS</strong>, <strong>R</strong>, and <strong>Python</strong>.
    </div>
  </div>

  <div class="service-card">
    <div class="service-title">Dynamic and Interactive Dashboards</div>
    <div class="service-description">
      Designing and developing interactive tools and dashboards, such as <strong>Shiny</strong> apps, to make data exploration and insights accessible in real time.
    </div>
  </div>

  <div class="service-card">
    <div class="service-title">Big Data Modeling and Statistical Analysis</div>
    <div class="service-description">
      Applying a wide range of statistical approaches—including regression models, machine learning algorithms, and Bayesian methods—to uncover patterns and generate predictions from complex datasets. My expertise also includes handling large-scale data processing, optimization, and model evaluation.
    </div>
  </div>

  <div class="service-card">
    <div class="service-title">Ecological and Biodiversity Research</div>
    <div class="service-description">
      Conducting and supporting research in conservation and ecology, from experimental design to manuscript development, with a focus on biodiversity conservation.
    </div>
  </div>

  <div class="service-card">
    <div class="service-title">Custom Analytical Solutions</div>
    <div class="service-description">
      Developing tailored workflows for data cleaning, formatting, and analysis to meet specific client needs, using <strong>Python</strong>, <strong>R</strong>, and other advanced tools.
    </div>
  </div>
</div>