---
layout: page
title: Portfolio
permalink: /portfolio/
---
### This page is currently under developpement 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Tabs</title>
    <style>
        #portfolio-tabs {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .tab-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 20px;
        }
        .tab {
            height: 200px; /* Set a fixed height */
            flex-basis: calc(25% - 20px);
            position: relative;
            cursor: pointer;
            overflow: hidden;
            transition: transform 0.3s ease;
            background-color: white;
            aspect-ratio: 16 / 9; /* Maintain a consistent aspect ratio */
        }
        .tab:hover {
            transform: scale(1.05);
        }
        .tab img {
            width: 100%;
            height: 100%;
            object-fit: contain; /* This ensures the entire image is visible */
        }
        .tab-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(6, 79, 141, 0.8); /* Blue shade */
            color: white;
            padding: 10px;
            text-align: center;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        .tab:hover .tab-overlay {
            transform: translateY(0);
        }
        .short-title {
            font-size: 16px;
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }
        .tab-divider {
            border: 0;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.5);
            margin: 5px 0;
        }
        .long-title {
            font-size: 14px;
            display: block;
        }
        .modal-overlay {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.7);
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
        .modal-title {
            font-size: 24px;
            margin-bottom: 10px;
            padding-right: 30px;
        }
        .modal-divider {
            border: 0;
            height: 1px;
            background-color: #ccc;
            margin: 10px 0;
        }
        .modal-description {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
        }
        .close-btn {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
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
            gap: 20px;
        }
        .project-image {
            flex-basis: 100%;
        }
        .project-image img {
            max-width: 100%;
            height: auto;
        }
        .project-description {
            flex-basis: 100%;
        }
        @media (min-width: 768px) {
            .project-image,
            .project-description {
                flex-basis: calc(50% - 10px);
            }
        }
        @media (max-width: 767px) {
            .tab {
                flex-basis: calc(50% - 20px);
            }
        }
        @media (max-width: 480px) {
            .tab {
                flex-basis: 100%;
            }
        }
    </style>
</head>
<body>
    <div id="portfolio-tabs">
        <div class="tab-container">
            <div class="tab" data-tab="project1">
                <img src="/assets/img/portfolio/Stephenson et al. 2020.png" alt="Project 1">
                <div class="tab-overlay">
                    <span class="short-title">Cetacean biodiversity modelling</span>
                    <hr class="tab-divider">
                    <span class="long-title">Modelling cetacean biodiversity in New Zealand waters</span>
                </div>
            </div>
            <div class="tab" data-tab="project2">
                <img src="/assets/img/portfolio/Pimiento et al. 2024.png" alt="Project 2">
                <div class="tab-overlay">
                    <span class="short-title">Global shark biodiversity</span>
                    <hr class="tab-divider">
                    <span class="long-title">Assessing elasmobranch functional diversity at the global scale</span>
                </div>
            </div>
            <div class="tab" data-tab="project3">
                <img src="/assets/img/portfolio/HEB_2G_males_clusters.pdf" alt="Project 3">
                <div class="tab-overlay">
                    <span class="short-title">Hierarchical Edge Bundling</span>
                    <hr class="tab-divider">
                    <span class="long-title">Analyses of cardiometabolic biomarkers</span>
                </div>
            </div>
            <div class="tab" data-tab="project4">
                <img src="{{ site.baseurl }}/assets/images/project4-thumbnail.jpg" alt="Project 4">
                <div class="tab-overlay">
                    <span class="short-title">Project 4 Name</span>
                    <hr class="tab-divider">
                    <span class="long-title">Detailed description of Project 4</span>
                </div>
            </div>
        </div>
        <div id="modal-overlay" class="modal-overlay">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2 class="modal-title"></h2>
                <hr class="modal-divider">
                <p class="modal-description"></p>
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
                <img src="/assets/img/portfolio/Pimiento et al. 2024.png" alt="Project 2">
            </div>
            <div class="project-description">
                <h2>Elasmobranch functional diversity</h2>
                <p>Description of Project 2. Explain the key features and results of your project here.</p>
                <p>
                    <a href="https://github.com/Pimiento-Research-Group/sharks-FD_biodiv_global" target="_blank">GitHub Repository</a> |
                    <a href="https://www.nature.com/articles/s41467-023-43212-3" target="_blank">Pimiento et al. 2024</a>
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
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.tab');
            const modalOverlay = document.getElementById('modal-overlay');
            const modalTitle = document.querySelector('.modal-title');
            const modalDescription = document.querySelector('.modal-description');
            const modalBody = document.getElementById('modal-body');
            const closeBtn = document.querySelector('.close-btn');
            const projectInfo = {
                project1: {
                    title: "Cetacean Biodiversity Modelling",
                    description: "A comprehensive study on the distribution and diversity of cetacean species in New Zealand waters."
                },
                project2: {
                    title: "Project 2 Title",
                    description: "Brief description of Project 2 and its significance in the field of study."
                },
                project3: {
                    title: "Project 3 Title",
                    description: "Overview of Project 3, highlighting its unique aspects and contributions to the research area."
                },
                project4: {
                    title: "Project 4 Title",
                    description: "Summary of Project 4, emphasizing its goals, methodology, and key findings."
                }
            };
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.getAttribute('data-tab');
                    const template = document.getElementById(`${tabId}-template`);
                    if (template) {
                        modalTitle.textContent = projectInfo[tabId].title;
                        modalDescription.textContent = projectInfo[tabId].description;
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
</body>
</html>