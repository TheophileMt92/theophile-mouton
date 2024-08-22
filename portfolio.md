---
layout: page
title: Portfolio
permalink: /portfolio/
---

# My Portfolio

<div id="portfolio-tabs">
  <div class="tab-container">
    <div class="tab" data-tab="project1">
      <img src="/assets/img/portfolio/Stephenson et al. 2020.png" alt="Project 1">
      <h3>Project 1</h3>
    </div>
    <div class="tab" data-tab="project2">
      <img src="{{ site.baseurl }}/assets/images/project2-thumbnail.jpg" alt="Project 2">
      <h3>Project 2</h3>
    </div>
    <div class="tab" data-tab="project3">
      <img src="{{ site.baseurl }}/assets/images/project3-thumbnail.jpg" alt="Project 3">
      <h3>Project 3</h3>
    </div>
    <div class="tab" data-tab="project4">
      <img src="{{ site.baseurl }}/assets/images/project4-thumbnail.jpg" alt="Project 4">
      <h3>Project 4</h3>
    </div>
  </div>

  <div id="project1" class="tab-content">
    <div class="project-container">
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/images/project1-full.jpg" alt="Project 1">
      </div>
      <div class="project-description">
        <h2>Project 1 Title</h2>
        <p>Description of Project 1. This is where you can provide details about the project, its objectives, and outcomes.</p>
        <p>
          <a href="https://github.com/yourusername/project1" target="_blank">GitHub Repository</a> |
          <a href="https://example.com/publication1" target="_blank">Publication</a>
        </p>
      </div>
    </div>
  </div>

  <div id="project2" class="tab-content">
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
  </div>

  <div id="project3" class="tab-content">
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
  </div>

  <div id="project4" class="tab-content">
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
  </div>
</div>

<style>
  .tab-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .tab {
    width: calc(25% - 15px);
    height: 450px; /* Increased height */
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .tab img {
    width: 100%;
    height: 375px; /* Increased height */
    object-fit: cover;
    flex-grow: 1;
  }

  .tab h3 {
    padding: 15px;
    margin: 0;
    text-align: center;
    background-color: #f1f1f1;
  }

  .tab:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
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
      height: 400px;
    }

    .tab img {
      height: 325px;
    }
  }

  @media (max-width: 600px) {
    .tab {
      width: 100%;
      height: 350px;
    }

    .tab img {
      height: 275px;
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
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        const content = document.getElementById(tabId);

        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          tabContents.forEach(tc => tc.style.display = 'none');
          content.style.display = 'block';
          content.scrollIntoView({behavior: 'smooth'});
        }
      });
    });
  });
</script>