---
layout: page
title: Portfolio
permalink: /portfolio/
---
### This page is currently under developpement 

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
            height: 200px;
            flex-basis: calc(25% - 20px);
            position: relative;
            cursor: pointer;
            overflow: hidden;
            transition: transform 0.3s ease;
            background-color: white;
            aspect-ratio: 16 / 9;
            border: 2px solid #D3D3D3;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .tab:hover {
            transform: scale(1.05);
        }
        .tab img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        .tab-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(6, 79, 141, 0.8);
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
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
        }
        .project-description {
            width: 100%;
            text-align: left;
            margin-bottom: 20px;
        }
        .project-image {
            width: 100%;
            text-align: center;
        }
        .project-image img {
            max-width: 75%;
            height: auto;
            display: block;
            margin: 20px auto;
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
                <img src="/assets/img/portfolio/HEB_2G_males_clusters.png" alt="Project 3">
                <div class="tab-overlay">
                    <span class="short-title">Hierarchical Edge Bundling</span>
                    <hr class="tab-divider">
                    <span class="long-title">Analyses of cardiometabolic biomarkers</span>
                </div>
            </div>
            <div class="tab" data-tab="project4">
                <img src="/assets/img/portfolio/Mouton et al. 2020 map.png" alt="Project 4">
                <div class="tab-overlay">
                    <span class="short-title">Climate change and river biodiversity</span>
                    <hr class="tab-divider">
                    <span class="long-title">Time series analyses of biodiversity change</span>
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
        <div class="project-description">
            <p>A group of researchers led by <a href="https://www.ncl.ac.uk/nuact/fellows/profile/fabricestephenson.html" target="_blank">Dr. Fabrice Stephenson</a> and myself, and involving internationally renowned cetacean ecologists, such as <a href="https://mmi.oregonstate.edu/people/leigh-g-torres">Leigh G. Torres</a> and <a href="https://usys.ethz.ch/en/people/profile.MjIyODg5.TGlzdC82MzcsMzIwMTk3MjIy.html">Camille Albouy</a> investigated the spatial distribution of cetacean biodiversity in New Zealand waters. This project led to three research papers published in Rank A journals.</p>
            <p><a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ddi.13035" target="_blank">The first publication</a> involved modelling the spatial distribution of cetaceans in New Zealand. For this, we curated a national database of cetacean sightings at sea (>7000 sightings) and used Boosted Regression Tree and Relative Environmental Suitability modelling to predict the distribution of 30 species and species richness within New Zealand's EEZ. <a href="https://docs.niwa.co.nz/library/public/NZAEBR-240.pdf" target="_blank">A report</a> was also published and prepared for Fisheries New Zealand (Ministry for Primary Industries). </p>
        </div>  
        <div class="project-image">
            <img src="/assets/img/portfolio/Stephenson et al. 2020.png" alt="Project 1">
        </div>
        <div class="project-description">
            <p><a href="https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecs2.3633" target="_blank">The second publication</a> used the prioritisation software Zonation to identify cetacean richness hotspots for conservation management. We investigated how varying levels of uncertainty in predictions of the taxa' occurrence layers would affect our interpretation of cetacean hotspots.</p>
        </div>
        <div class="project-image">
            <img src="/assets/img/portfolio/Stephenson et al. 2021.png" alt="Project 1">
        </div>
        <div class="project-description">
            <p>In <a href="https://www.sciencedirect.com/science/article/abs/pii/S0006320722000374" target="_blank">the third publication</a> we modelled spatial patterns of taxonomic, functional, and phylogenetic diversity of cetaceans. We examined areas of congruence among hotspots of richness and uniqueness components of biodiversity and measured the contribution of species to biodiversity. </p>
        </div>
        <div class="project-image">
            <img src="/assets/img/portfolio/Mouton et al. 2022 Biocons.png" alt="Project 1">
        </div>
    </div>
</template>
<template id="project2-template">
    <div class="project-container">
        <div class="project-description">
            <p>A group of researchers led by <a href="https://www.catalinapimiento.com/" target="_blank">Dr. Catalina Pimiento</a> and <a href="https://fableprieur.weebly.com/" target="_blank">Prof. Fabien Leprieur</a> investigated the functional diversity of sharks and rays in the world.</p>
            <p>The group created a trait dataset of > 1000 species to assess elasmobranch functional diversity and compare it against previously studied facets (taxonomic and phylogenetic), to identify species- and spatial- conservation priorities.</p>
        </div>
        <div class="project-image">
            <img src="/assets/img/portfolio/Pimiento et al. 2024_2maps.png" alt="Project 2">
        </div>
        <div class="project-description">
            <p>The spatial analyses showed that elasmobranch functional richness is concentrated along continental shelves and around oceanic islands, with 18 distinguishable hotspots. These hotspots only marginally overlap with those of other biodiversity facets, reflecting a distinct spatial fingerprint of functional diversity. </p> 
            <p> Elasmobranch biodiversity facets converge with fishing pressure along the coast of China, which emerged as a critical frontier in conservation. Meanwhile, several components of elasmobranch functional diversity fall in high seas and/or outside the global network of marine protected areas.</p>
            <p>These results highlight acute vulnerability of the world's elasmobranchs' functional diversity and reveal global priorities for elasmobranch functional biodiversity previously overlooked.</p>
            <p>
                <a href="https://github.com/Pimiento-Research-Group/sharks-FD_biodiv_global" target="_blank">GitHub Repository</a> |
                <a href="https://www.nature.com/articles/s41467-023-43212-3" target="_blank">Pimiento et al. 2024 (Nature communications)</a>
            </p>
        </div>
    </div>
</template>
    <template id="project3-template">
        <div class="project-container">
            <div class="project-description">
                <p>I was hired by <a href="https://uchile.cl/portafolio-academico/portafolio-academico/academico/49064" target="_blank">Prof. María Paulina Correa Burrows</a> from the Universidad de Chile to apply Hierchical Edge Bundling (HEB) to cardiometabolic health markers for a study on the effects of obesity on the health of teenagers. I produced ten different HEBs, a quarto document and publication ready charts for this consultancy. The project is publicly accessible on my <a href="https://github.com/TheophileMt92/Hierarchal-Edge-Bundling" target="_blank">GitHub Repository</a> </p>
                <div class="project-image">
                <img src="/assets/img/portfolio/HEB_2G_males_clusters.png" alt="Project 3">
            </div>
            </div>
        </div>
    </template>
    <template id="project4-template">
        <div class="project-container">
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2022 Fig. 3.jpg" alt="Project 4">
            </div>
            <div class="project-description">
                <p>This project constituted the core of my PhD project. I designed and led studies on temporal changes in biodiversity under climte and land-use change using databases from New Zealand's national network monitoring programs.</p>
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2020 map.png" alt="Project 4">
            </div>
                <p>In <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/gcb.15389" target="_blank">the first publication</a>. I assessed temporal changes in taxonomic and functional spatial beta-diversity of river macroinvertebrates and possible drivers of these changes using Hierarchical Generalised Additive Modelling. We observed long-term, mostly climate-induced, temporal trends towards taxonomic homogenization but functional differentiation among macroinvertebrate assemblages.</p>
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2020 GCB Fig 1.png" alt="Project 4">
            </div> 
                <p>In <a href="https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/ecog.06148" target="_blank">the second publication</a>. I examined changes in population size and range shifts of species pools, and related these to taxonomy and functional traits. We found poleward species colonisations and increasing extirpations over time in northern locations. Increases in population and species range size were more prevalent than decreases in population and range size. Species shifted their ranges towards higher latitudes on average by 50 km per decade. Despite little to no relationship with taxonomy, we uncovered distinct relationships between functional traits and population trends and latitudinal species range shifts.</p>
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2022 Fig. 3 cut.png" alt="Project 4">
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
                    title: "Cetacean Biodiversity Modelling in New Zealand Waters",
                    description: "A comprehensive study on the distribution and diversity of cetacean species in New Zealand waters."
                },
                project2: {
                    title: "Functional diversity of sharks and rays",
                    description: "Macroecological analyses of shark biodiversity, overlaps with industrial fishing pressure and with marine protected areas."
                },
                project3: {
                    title: "Hierarchical Edge Bundling",
                    description: "Applying Hierarchical Edge Bundling to cardiometabolic health markers"
                },
                project4: {
                    title: "Macroecological analyses of biodiversity change",
                    description: "Time-series analyses of biodiversity facing climate and land-use change: New Zealand's Rivers as case study"
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