---
layout: page
title: Portfolio
permalink: /portfolio/
---
### This page is currently under developpement 

<div id="portfolio-tabs">
  <div class="tab-container">
    <div class="tab" data-tab="project1">
      <img src="/assets/img/portfolio/Stephenson et al. 2020.png" alt="Project 1">
      <div class="tab-overlay">
        <span>Cetacean biodiversity modelling</span>
      </div>
    </div>
    <div class="tab" data-tab="project2">
      <img src="{{ site.baseurl }}/assets/images/project2-thumbnail.jpg" alt="Project 2">
      <div class="tab-overlay">
        <span>Project 2 Name</span>
      </div>
    </div>
    <div class="tab" data-tab="project3">
      <img src="{{ site.baseurl }}/assets/images/project3-thumbnail.jpg" alt="Project 3">
      <div class="tab-overlay">
        <span>Project 3 Name</span>
      </div>
    </div>
    <div class="tab" data-tab="project4">
      <img src="{{ site.baseurl }}/assets/images/project4-thumbnail.jpg" alt="Project 4">
      <div class="tab-overlay">
        <span>Project 4 Name</span>
      </div>
    </div>
  </div>

  <div id="modal-overlay" class="modal-overlay">
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <div id="modal-body"></div>
    </div>
  </div>
</div>

<template id="project1-template">
  <div class="project-container">
    <div class="project-image">
      <img src="/assets/img/portfolio/Stephenson et al. 2020.png" alt="Project 1">
    </div>
    <div class="project-description">
      <h2>New Zealand's Cetacean Biodiversity</h2>
      <p>Description of Project 1. This is where you can provide details about the project, its objectives, and outcomes.</p>
      <p>
        <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ddi.13035" target="_blank">Stephenson et al. 2020</a>
        <a href="https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecs2.3633" target="_blank">Stephenson et al. 2021</a>
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0006320722000374" target="_blank">Mouton et al. 2022</a>
      </p>
    </div>
  </div>
</template>

<template id="project2-template">
  <div class="project-container">
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/images/project2-full.jpg" alt="Project 2">
    </div>
    <div class="project-description">
      <h2>Project 2 Title</h2>
      <p>Description of Project 2. Explain the key features and results of your project here.</p>
      <p>
        <a href="https://github.com/yourusername/project2" target="_blank">GitHub Repository</a> |
        <a href="https://example.com/publication2" target="_blank">Publication</a>
      </p>
    </div>
  </div>
</template>

<template id="project3-template">
  <div class="project-container">
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/images/project3-full.jpg" alt="Project 3">
    </div>
    <div class="project-description">
      <h2>Project 3 Title</h2>
      <p>Description of Project 3. Highlight the main aspects and achievements of your project in this section.</p>
      <p>
        <a href="https://github.com/yourusername/project3" target="_blank">GitHub Repository</a> |
        <a href="https://example.com/publication3" target="_blank">Publication</a>
      </p>
    </div>
  </div>
</template>

<template id="project4-template">
  <div class="project-container">
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/images/project4-full.jpg" alt="Project 4">
    </div>
    <div class="project-description">
      <h2>Project 4 Title</h2>
      <p>Description of Project 4. Provide an overview of the project's goals and accomplishments here.</p>
      <p>
        <a href="https://github.com/yourusername/project4" target="_blank">GitHub Repository</a> |
        <a href="https://example.com/publication4" target="_blank">Publication</a>
      </p>
    </div>
  </div>
</template>

<style>
  .tab-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .tab {
    width: calc(25% - 15px);
    height: 315px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  .tab img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  .tab-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 128, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .tab-overlay span {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }

  .tab:hover .tab-overlay {
    opacity: 1;
  }

  .tab:hover img {
    transform: scale(1.1);
  }

  .modal-overlay {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    overflow-y: auto;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 1000px;
    position: relative;
    border-radius: 5px;
  }

  .close-btn {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .close-btn:hover,
  .close-btn:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .project-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .project-image {
    flex: 1;
    min-width: 300px;
    margin-right: 20px;
  }

  .project-image img {
    max-width: 100%;
    height: auto;
  }

  .project-description {
    flex: 2;
    min-width: 300px;
  }

  @media (max-width: 1200px) {
    .tab {
      width: calc(33.33% - 10px);
    }
  }

  @media (max-width: 900px) {
    .tab {
      width: calc(50% - 10px);
      height: 280px;
    }
  }

  @media (max-width: 600px) {
    .tab {
      width: 100%;
      height: 245px;
    }

    .project-container {
      flex-direction: column;
    }

    .project-image {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        const template = document.getElementById(`${tabId}-template`);
        
        if (template) {
          modalBody.innerHTML = '';
          modalBody.appendChild(template.content.cloneNode(true));
          modalOverlay.style.display = 'block';
        }
      });
    });

    closeBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target == modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
  });
</script>