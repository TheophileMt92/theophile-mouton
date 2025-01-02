---
layout: page
title: Portfolio
permalink: /portfolio/
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }
        .tab-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin: 0 auto;
            max-width: 1200px;
        }
        .tab {
            position: relative;
            cursor: pointer;
            overflow: hidden;
            aspect-ratio: 4/3;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        .tab:hover {
            transform: translateY(-5px);
        }
        .tab img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .tab-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 15px;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        .tab:hover .tab-overlay {
            transform: translateY(0);
        }
        .short-title {
            font-size: 1.2em;
            font-weight: bold;
            display: block;
        }
        .long-title {
            font-size: 0.9em;
            margin-top: 5px;
            display: block;
        }
        .tab-divider {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.5);
            margin: 10px 0;
        }
        #modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
        }
        .modal-content {
            position: relative;
            background: white;
            width: 90%;
            max-width: 1200px;
            margin: 50px auto;
            padding: 20px;
            border-radius: 10px;
            max-height: 90vh;
            overflow-y: auto;
        }
        .close-button {
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 24px;
            cursor: pointer;
            color: #333;
        }
        .project-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }
        .project-description {
            line-height: 1.6;
        }
        .project-image img {
            width: 100%;
            height: auto;
            border-radius: 5px;
        }
        @media (max-width: 768px) {
            .project-container {
                grid-template-columns: 1fr;
            }
        }
        a {
            color: #0066cc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="tab-container">
        <div class="tab" data-tab="project7">
            <img src="/assets/img/portfolio/MPA_shortfalls.png" alt="Project 7">
            <div class="tab-overlay">
                <span class="short-title">Protection of Sharks and Rays</span>
                <hr class="tab-divider">
                <span class="long-title">Shortfalls in the governance of marine protected areas</span>
            </div>
        </div>
        <div class="tab" data-tab="project6">
            <img src="/assets/img/portfolio/ISRAs e-atlas.png" alt="Project 6">
            <div class="tab-overlay">
                <span class="short-title">Important Shark and Ray Areas</span>
                <hr class="tab-divider">
                <span class="long-title">Mapping critical shark habitat accross the world</span>
            </div>
        </div>
        <div class="tab" data-tab="project5">
            <img src="/assets/img/portfolio/HEB_2G_males_clusters.png" alt="Project 5">
            <div class="tab-overlay">
                <span class="short-title">Hierarchical Edge Bundling</span>
                <hr class="tab-divider">
                <span class="long-title">Analyses of cardiometabolic biomarkers</span>
            </div>
        </div>
        <div class="tab" data-tab="project4">
            <img src="/assets/img/portfolio/Pimiento et al. 2024.png" alt="Project 4">
            <div class="tab-overlay">
                <span class="short-title">Global shark biodiversity</span>
                <hr class="tab-divider">
                <span class="long-title">Assessing elasmobranch functional diversity at the global scale</span>
            </div>
        </div>
        <div class="tab" data-tab="project3">
            <img src="/assets/img/portfolio/Stephenson et al. 2020.png" alt="Project 3">
            <div class="tab-overlay">
                <span class="short-title">Cetacean biodiversity modelling</span>
                <hr class="tab-divider">
                <span class="long-title">Modelling cetacean biodiversity in New Zealand waters</span>
            </div>
        </div>
        <div class="tab" data-tab="project2">
            <img src="/assets/img/portfolio/Mouton et al. 2020 map.png" alt="Project 2">
            <div class="tab-overlay">
                <span class="short-title">Climate change and river biodiversity</span>
                <hr class="tab-divider">
                <span class="long-title">Time series analyses of biodiversity change</span>
            </div>
        </div>
        <div class="tab" data-tab="project1">
            <img src="/assets/img/portfolio/Mouton et al. 2018 GAbs.png" alt="Project 1">
            <div class="tab-overlay">
                <span class="short-title">Functional diversity of stream macrophytes</span>
                <hr class="tab-divider">
                <span class="long-title">Evaluating macrophyte functional responses to anthropogenic disturbances</span>
            </div>
        </div>
    </div>
    <div id="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div id="modal-content"></div>
        </div>
    </div>
    <template id="project7-template">
        <div class="project-container">
            <div class="project-description">
                <p>A group of researchers led by <a href="https://www.iucnssg.org/" target="_blank">the IUCN SSC Shark Specialist Group</a> investigated the governance of Marine Protected Areas (MPAs) to protect threatened sharks and rays.</p>
                <p>We examined MPA design and implementation practices worldwide to identify key shortfalls in their ability to effectively protect sharks and rays. This analysis revealed critical gaps in current conservation approaches and provided recommendations for improving MPA effectiveness for elasmobranch conservation.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/MPA_shortfalls.png" alt="Project 7">
            </div>
        </div>
    </template>
    <template id="project6-template">
        <div class="project-container">
            <div class="project-description">
                <p>Working with the <a href="https://www.iucnssg.org/" target="_blank">IUCN SSC Shark Specialist Group</a>, I contributed to the development of an innovative e-atlas showcasing Important Shark and Ray Areas (ISRAs) across the globe.</p>
                <p>This comprehensive platform visualizes critical habitats essential for shark and ray species, integrating data from various sources to support conservation efforts and inform policy decisions.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/ISRAs e-atlas.png" alt="Project 6">
            </div>
        </div>
    </template>
    <template id="project5-template">
        <div class="project-container">
            <div class="project-description">
                <p>In collaboration with the <a href="https://www.inghaminstitute.org.au/" target="_blank">Ingham Institute</a>, I developed interactive visualizations of cardiometabolic biomarker networks.</p>
                <p>Using hierarchical edge bundling, we explored complex relationships between various biomarkers, enabling researchers to identify key patterns and potential therapeutic targets in cardiometabolic diseases.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/HEB_2G_males_clusters.png" alt="Project 5">
            </div>
        </div>
    </template>
    <template id="project4-template">
        <div class="project-container">
            <div class="project-description">
                <p>Working with an international team of researchers, we conducted a comprehensive analysis of global shark and ray functional diversity.</p>
                <p>This project involved developing novel analytical approaches to assess elasmobranch functional diversity patterns at the global scale, contributing to our understanding of these species' roles in marine ecosystems.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Pimiento et al. 2024.png" alt="Project 4">
            </div>
        </div>
    </template>
    <template id="project3-template">
        <div class="project-container">
            <div class="project-description">
                <p>In collaboration with <a href="https://www.niwa.co.nz/" target="_blank">NIWA</a>, we developed species distribution models for cetaceans in New Zealand waters.</p>
                <p>This research combined various environmental predictors and cetacean occurrence data to map biodiversity patterns and identify key areas for conservation.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Stephenson et al. 2020.png" alt="Project 3">
            </div>
        </div>
    </template>
    <template id="project2-template">
        <div class="project-container">
            <div class="project-description">
                <p>Working with <a href="https://www.irstea.fr/" target="_blank">INRAE</a>, we analyzed long-term biodiversity trends in French rivers under climate change.</p>
                <p>This project involved developing time series analysis methods to understand how river communities respond to environmental change.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2020 map.png" alt="Project 2">
            </div>
        </div>
    </template>
    <template id="project1-template">
        <div class="project-container">
            <div class="project-description">
                <p>In collaboration with <a href="https://www.irstea.fr/" target="_blank">INRAE</a>, we investigated the functional responses of aquatic plants to human disturbances.</p>
                <p>This research developed novel methods to analyze the relationships between environmental conditions and plant functional traits in river ecosystems.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2018 GAbs.png" alt="Project 1">
            </div>
        </div>
    </template>
    <script>
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        const closeButton = document.querySelector('.close-button');
        const tabs = document.querySelectorAll('.tab');
        const projectInfo = {
            project7: {
                title: "Protection of Sharks and Rays",
                description: "Analyzing shortfalls in the governance of marine protected areas for shark and ray conservation."
            },
            project6: {
                title: "Important Shark and Ray Areas",
                description: "Interactive visualization of critical habitats for shark and ray conservation"
            },
            project5: {
                title: "Hierarchical Edge Bundling",
                description: "Interactive visualization of cardiometabolic biomarker networks"
            },
            project4: {
                title: "Global shark biodiversity",
                description: "Analysis of elasmobranch functional diversity patterns"
            },
            project3: {
                title: "Cetacean biodiversity modelling",
                description: "Species distribution modelling of cetaceans in New Zealand"
            },
            project2: {
                title: "Climate change and river biodiversity",
                description: "Time series analysis of biodiversity changes in French rivers"
            },
            project1: {
                title: "Functional diversity of stream macrophytes",
                description: "Analysis of plant functional responses to human disturbances"
            }
        };
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const projectId = tab.getAttribute('data-tab');
                const template = document.getElementById(`${projectId}-template`);
                modalContent.innerHTML = template.innerHTML;
                modal.style.display = 'block';
            });
        });
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    </script>
</body>
</html>