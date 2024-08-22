---
layout: page
title: Portfolio
permalink: /portfolio/
---

# My Portfolio

<div id="portfolio-tabs">
  <ul class="tab-list">
    <li class="tab active" data-tab="project1">Project 1</li>
    <li class="tab" data-tab="project2">Project 2</li>
    <li class="tab" data-tab="project3">Project 3</li>
  </ul>

  <div id="project1" class="tab-content active">
    <div class="project-container">
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/images/project1-chart.png" alt="Project 1 Chart">
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
        <img src="{{ site.baseurl }}/assets/images/project2-chart.png" alt="Project 2 Chart">
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
        <img src="{{ site.baseurl }}/assets/images/project3-chart.png" alt="Project 3 Chart">
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
</div>

<style>
  .tab-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .tab {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    border-bottom: none;
    margin-right: 5px;
  }

  .tab.active {
    background-color: #fff;
    border-bottom: 1px solid #fff;
  }

  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ccc;
    border-top: none;
  }

  .tab-content.active {
    display: block;
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

  @media (max-width: 768px) {
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

        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  });
</script>