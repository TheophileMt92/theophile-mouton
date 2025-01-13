---
layout: page
title: Portfolio
permalink: /portfolio/
---

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
/* New styles for specific projects */
.tab[data-tab="project8"] img {
    width: 185%; /* Make the image larger than the container */
    height: 185%; /* Make the image larger than the container */
    object-fit: cover;
    /* Center the enlarged image */
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.tab[data-tab="project4"] img {
    width: 200%; /* Make the image larger than the container */
    height: 200%; /* Make the image larger than the container */
    object-fit: cover;
    /* Center the enlarged image */
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.tab[data-tab="project3"] img {
    width: 200%; /* Make the image larger than the container */
    height: 200%; /* Make the image larger than the container */
    object-fit: cover;
    /* Center the enlarged image */
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
/* Rest of your existing styles */
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
        <div class="tab" data-tab="project8">
                <img src="/assets/img/portfolio/Global_fishing_map.png" alt="Project 8">
                <div class="tab-overlay">
                    <span class="short-title">Global Fishing Effort</span>
                    <hr class="tab-divider">
                    <span class="long-title">Machine Learning for Fishing Estimates</span>
                </div>
            </div>
        <div class="tab" data-tab="project7">
                <img src="/assets/img/portfolio/Mouton et al. 2024_MPAs.png" alt="Project 7">
                <div class="tab-overlay">
                    <span class="short-title">Protection of Shark and Ray Areas</span>
                    <hr class="tab-divider">
                    <span class="long-title">Evaluating the governance and protection of sharks and rays</span>
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
        <template id="project8-template">
    <div class="project-container">
        <div class="project-description">
            <p>I was hired by <a href="https://www.catalinapimiento.com/" target="_blank">Dr. Catalina Pimiento</a> from the University of Zurich to compile and analyze global fishing effort datasets for a research project.</p>
            </div>
            <div class="project-description">
             <p> For this, I used Global Fishing Watch’s latest datasets of fishing hours from Automatic Identification System (AIS) detections and fishing vessel detections from Sentinel-1 Synthetic Aperture Radar (SAR) imagery processing. These databases include dozens to hundreds of millions of records and are the best datasets for estimating fishing effort globally.</p>
            </div>
            <div class="project-image">
            <img src="/assets/img/portfolio/AIS_fishing_map.png" alt="Fig. 1">
            </div>
            <div class="project-image">
            <img src="/assets/img/portfolio/SAR_fishing_map.png" alt="Fig. 2">
            </div>
            <div class="project-description">
             <p></p>
            <p> However, while AIS-based datasets offer unique information on global fishing effort, in some areas of the world (such as the Coral Triangle or the Caribbean Sea), fishing vessels do not broadcast AIS information. Nonetheless, fishing activity is detected in these regions through satellite imagery processing. To convert fishing vessel detections into estimated fishing hours in areas with only SAR detections, I built a machine learning-based predictive model (using random forest modeling) to predict fishing hours in these regions. The model included more than 150,000 records as training data and environmental predictors, such as the distance to ports, to improve performance. I also performed spatially blocked cross-validation and prediction to overcome spatial autocorrelation. As a result, my model explained 80% of the variation in fishing hours, and I was able to confidently predict fishing hours in 60,000 ocean grid cells.</p>
        </div>
            <div class="project-image">
            <img src="/assets/img/portfolio/predicted_plot_SAR_only.png" alt="Fig. 3">
            </div>
        <div class="project-description">
             <p></p>
            <p> In a second step, I used the same approach to predict estimated fishing hours in every ocean grid cell. I built a random forest model of fishing hours according to a wide range of environmental descriptors, including bathymetry, distance to ports, and marine protected area locations. This generated the map of estimated fishing hours in every ocean cell of the world, with the model explaining more than 75% of the variation in fishing hours.</p>
        </div>
        <div class="project-image">
            <img src="/assets/img/portfolio/Global_fishing_map.png" alt="Fig. 4">
            </div>
        <div class="project-description">
             <p></p>
            <p>
                    <a href="https://github.com/TheophileMt92/GFW-Global-fishing-hours" target="_blank">GitHub Repository</a> 
                </p>
        </div>
        </div>
</template>
    <template id="project7-template">
    <div class="project-container">
        <div class="project-description">
            <p>I led and published <a href="https://www.sciencedirect.com/science/article/pii/S0308597X24004482?via%3Dihub" target="_blank">an article in Marine Policy</a> with 45 co-authors from Academia, Governments and NGOs under the supervision of <a href="https://www.linkedin.com/in/rima-jabado-93656a6b/?originalSubdomain=ae" target="_blank">Dr. Rima Jabado</a>, the Chair of the <a href="https://www.iucnssg.org/" target="_blank">IUCN SSC Shark Specialist Group</a>. The article is titled: <i>"Shortfalls in the protection of Important Shark and Ray Areas undermine shark conservation efforts in the Central and South American Pacific"</i>. </p>
            </div>
            <div class="project-image">
            <img src="/assets/img/portfolio/Mouton et al. 2024_Fig. 1.jpeg" alt="Fig. 1">
            </div>
            <div class="project-description">
             <p></p>
            <p> The project consisted of (i) assessing trends in Marine Protected Area (MPA) expansion and extent across the 12 nations of the region; (ii) quantifying the spatial overlap between MPAs and Important Shark and Ray Areas (ISRAs); and (iii) evaluating the effectiveness of the current MPA governance structure at protecting sharks and their critical habitat. We did this by utilising a combination of text analyses, statistical modelling (GLMM, PCA, Clustering) and GIS tools (sf, ArcGis).</p>
        </div>
            <div class="project-image">
            <img src="/assets/img/portfolio/Mouton et al. 2024_Fig. 2.jpeg" alt="Fig. 2">
            </div>
        <div class="project-description">
             <p></p>
            <p> There has been a recent rapid increase in the establishment of MPAs with 90 % of current MPAs in the region designated since 2010. Yet, El Salvador, Guatemala, Peru, and Honduras still protect less than 10 % of their waters. We find that ISRAs overlap with all MPAs by only 15.6 % and with no-take MPAs by 7.3 %. Of 182 MPAs identified, 41.8 % do not have a management plan, comprising 39.8 % of the total MPA extent. Mexico, Costa Rica, and Colombia have relatively strong governance frameworks in place and, along with Panama, Honduras, and Ecuador, represent the highest overlap between MPAs and ISRAs. However, the contribution of the remaining six countries to shark protection via MPAs is low based on limited spatial overlap with ISRAs (less than 2 % each).</p>
        </div>
        <div class="project-image">
            <img src="/assets/img/portfolio/Mouton et al. 2024_Fig. 5.jpeg" alt="Fig. 5">
            </div>
        <div class="project-description">
             <p></p>
            <p> As countries mobilise to meet the 30×30 target, we propose considering ISRAs as a key component of spatial planning when designing new MPAs, designating existing partially protected areas as no-take zones, or reshaping the boundaries of existing MPAs.</p>
            <p>
                    <a href="https://github.com/TheophileMt92/ISRA_R12_MPA_overlaps" target="_blank">GitHub Repository</a> |
                    <a href="https://www.sciencedirect.com/science/article/pii/S0308597X24004482?via%3Dihub" target="_blank">Mouton et al. 2024 (Marine Policy)</a>
                </p>
        </div>
        </div>
</template>
<template id="project6-template">
    <div class="project-container">
        <div class="project-description">
            <p>I was a postdoctoral researcher and scientific coordinator for the <a href="https://www.iucnssg.org/" target="_blank">IUCN SSC Shark Specialist Group</a> during a year, working on the <a href="https://sharkrayareas.org/" target="_blank">Important Shark and Ray Areas project</a>. </p>
            <p>As I started the job, we tackled the Mediterranean and Black Seas Region and I was responsible for coordinating research in France, Monaco and Italy. The project resulted in the publication of 65 ISRAs, read the report <a href="https://sharkrayareas.org/download/mediterranean-and-black-seas-regional-compendium-of-important-shark-and-ray-areas/" target="_blank">here</a>. A video of the workshop held in Thessaloniki, Greece is accessible below.</p>
        </div>
        <div class="project-video">
            <a href="https://www.youtube.com/watch?v=vghKtCjsP-g" target="_blank">
                <img src="https://img.youtube.com/vi/vghKtCjsP-g/0.jpg" alt="ISRA MED Workshop video">
            </a>
        </div>
        <div class="project-description">
             <p></p>
            <p>We later tackled the Western Indian Ocean Region and I was responsible for coordinating research in Seychelles, the Chagos Archipelago, La Réunion, Mauritius and the United Arab Emirates. The project resulted in the publication of 125 ISRAs, read the report <a href="https://sharkrayareas.org/download/western-indian-ocean-regional-compendium-of-important-shark-and-ray-areas/" target="_blank">here</a>. A video of the workshop held in Durban, South Africa is accessible below.</p>
        </div>
        <div class="project-video">
            <a href="https://www.youtube.com/watch?v=T5jFvc3bX4E" target="_blank">
                <img src="https://img.youtube.com/vi/T5jFvc3bX4E/0.jpg" alt="ISRA WIO Workshop video">
            </a>
        </div>
    </div>
</template>
    <template id="project5-template">
        <div class="project-container">
            <div class="project-description">
                <p>I was hired by <a href="https://uchile.cl/portafolio-academico/portafolio-academico/academico/49064" target="_blank">Prof. María Paulina Correa Burrows</a> from the Universidad de Chile to apply Hierchical Edge Bundling (HEB) to cardiometabolic health markers for a study on the effects of obesity on the health of teenagers. I produced ten different HEBs, a quarto document and publication ready charts for this consultancy. The project is publicly accessible on my <a href="https://github.com/TheophileMt92/Hierarchal-Edge-Bundling" target="_blank">GitHub Repository</a> </p>
                <div class="project-image">
                <img src="/assets/img/portfolio/HEB_2G_males_clusters.png" alt="Project 2">
            </div>
            </div>
        </div>
    </template>
    <template id="project4-template">
        <div class="project-container">
            <div class="project-description">
                <p>A group of researchers led by <a href="https://www.catalinapimiento.com/" target="_blank">Dr. Catalina Pimiento</a> and <a href="https://fableprieur.weebly.com/" target="_blank">Prof. Fabien Leprieur</a>, and including myself, investigated the functional diversity of sharks and rays in the world.</p>
                <p>The group created a trait dataset of > 1000 species to assess elasmobranch functional diversity and compare it against previously studied facets (taxonomic and phylogenetic), to identify species- and spatial- conservation priorities. This consisted of using global spatial datasets of shark and ray distributions and macroecological statistical analyses (generalised modelling, ordination methods, spatial mapping methods etc.). </p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Pimiento et al. 2024_2maps.png" alt="Project 3">
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
                <p>A group of researchers led by <a href="https://www.ncl.ac.uk/nuact/fellows/profile/fabricestephenson.html" target="_blank">Dr. Fabrice Stephenson</a> and myself, and involving internationally renowned cetacean ecologists, such as <a href="https://mmi.oregonstate.edu/people/leigh-g-torres">Leigh G. Torres</a> and <a href="https://usys.ethz.ch/en/people/profile.MjIyODg5.TGlzdC82MzcsMzIwMTk3MjIy.html">Camille Albouy</a> investigated the spatial distribution of cetacean biodiversity in New Zealand waters. This project led to three research papers published in Rank A journals.</p>
                <p><a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ddi.13035" target="_blank">The first publication</a> involved modelling the spatial distribution of cetaceans in New Zealand. For this, we curated a national database of cetacean sightings at sea (>7000 sightings) and used Boosted Regression Tree and Relative Environmental Suitability modelling to predict the distribution of 30 species and species richness within New Zealand's EEZ. <a href="https://docs.niwa.co.nz/library/public/NZAEBR-240.pdf" target="_blank">A report</a> was also published and prepared for Fisheries New Zealand (Ministry for Primary Industries). </p>
            </div>  
            <div class="project-image">
                <img src="/assets/img/portfolio/Stephenson et al. 2020.png" alt="Project 4">
            </div>
            <div class="project-description">
                <p><a href="https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecs2.3633" target="_blank">The second publication</a> used the prioritisation software <a href="https://zonationteam.github.io/Zonation5/" target="_blank">Zonation</a> to identify cetacean richness hotspots for conservation management. We investigated how varying levels of uncertainty in predictions of the taxa' occurrence layers would affect our interpretation of cetacean hotspots.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Stephenson et al. 2021.png" alt="Project 4">
            </div>
            <div class="project-description">
                <p>In <a href="https://www.sciencedirect.com/science/article/abs/pii/S0006320722000374" target="_blank">the third publication</a> we modelled spatial patterns of taxonomic, functional, and phylogenetic diversity of cetaceans. We examined areas of congruence among hotspots of richness and uniqueness components of biodiversity and measured the contribution of species to biodiversity. </p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2022 Biocons.png" alt="Project 4">
            </div>
            <p>
                    <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ddi.13035" target="_blank">Stephenson et al. 2020 (Diversity and Distributions)</a> |
                    <a href="https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecs2.3633" target="_blank">Stephenson et al. 2021 (Ecosphere)</a> |
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0006320722000374" target="_blank">Mouton et al. 2022 (Biological Conservation)</a> 
                </p>
        </div>
    </template>
    <template id="project2-template">
    <div class="project-container">
        <div class="project-description">
            <p>This project constituted the core of my PhD project. I designed and led studies on temporal changes in biodiversity under climate and land-use change using databases from New Zealand's national network monitoring programs. I collaborated with scientists during this research, mostly <a href="https://tonkinlab.org/" target="_blank">Assoc. Prof. Jonathan Tonkin</a> and <a href="https://glowabio.org/authors/mathieu-floury/" target="_blank">Dr. Mathieu Floury</a>. </p>
        </div>
        <div class="project-image">
            <img src="/assets/img/portfolio/Mouton et al. 2020 map.png" alt="Project 5" style="width: 60%; height: auto;">
        </div>
        <div class="project-description">
            <p>In <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/gcb.15389" target="_blank">the first publication</a>, I assessed temporal changes in taxonomic and functional spatial beta-diversity of river macroinvertebrates and possible drivers of these changes using Hierarchical Generalised Additive Modelling. We observed long-term, mostly climate-induced, temporal trends towards taxonomic homogenization but functional differentiation among macroinvertebrate assemblages.</p>
        </div>
        <div class="project-image">
            <img src="/assets/img/portfolio/Mouton et al. 2020 GCB Fig 1.png" alt="Project 5">
        </div> 
        <div class="project-description">
            <p>In <a href="https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/ecog.06148" target="_blank">the second publication</a> I examined changes in population size and range shifts of species pools, and related these to taxonomy and functional traits. We found that increases in population and species range size were more prevalent than decreases in population and range size. Species shifted their ranges towards higher latitudes on average by 50 km per decade. Despite little to no relationship with taxonomy, we uncovered distinct relationships between functional traits and population trends and latitudinal species range shifts.</p>
        </div>
        <div class="project-image">
            <img src="/assets/img/portfolio/Mouton et al. 2022 FD spaces.jpg" alt="Project 5">
        </div>
        <div class="project-description">
            <p>This work was also showcased in <a href="https://issuu.com/naturevolve/docs/issue_12_naturevolve" target="_blank">Issue 12</a> of the science magasine NatureVolve, page 32.</p>
        </div>
        <p>
                    <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/gcb.15389" target="_blank">Mouton et al. 2020 (Global Change Biology)</a> |
                    <a href="https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/ecog.06148" target="_blank">Mouton et al. 2022 (Ecography)</a> |
                    <a href="https://issuu.com/naturevolve/docs/issue_12_naturevolve" target="_blank">NatureVolve (Issue 12)</a> 
                </p>
    </div>
</template>
    <template id="project1-template">
        <div class="project-container">
            <div class="project-description">
                <p>This was my first project while working at the <a href="https://niwa.co.nz/" target="_blank">National Institute for Water and Atmospheric Reseach</a>. It led to my <a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969718351507" target="_blank">first scientific publication</a>. I compiled a database of native and non-native macrophyte abundance in Waikato Region (New Zealand) streams, a matrix of 11 functional traits and data on associated natural and human-driven processes.</p>
            </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2018 map.png" alt="Project 5" style="width: 40%; height: auto;">
            </div>
            <div class="project-description">
                <p>I used a three-way ordination technic (RLQ analysis), multidimentional functional diversity indices and a model-averaging procedure to determine the functional response of macrophytes to anthropogenic disturbances. This demonstrated that stream reach-scale habitat disturbances were associated to a dominance of more productive species, equating to a greater abundance of non-native species. </p>
                </div>
            <div class="project-image">
                <img src="/assets/img/portfolio/Mouton et al. 2018 diverging barplot.png" alt="Project 5" style="width: 60%; height: auto;">
            </div>
            <div class="project-description">
                <p>These results suggest that the conservation and restoration of riparian vegetation that provides substantial shading and hydromorphologically diverse in-stream habitat, would have beneficial direct and indirect effects on ecosystem functioning, and contribute to the mitigation of land-use impacts.</p>
            </div>
            <p>
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969718351507" target="_blank">Mouton et al. 2019 (Science of the Total Environment)</a> 
                </p>
        </div>
    </template>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
    const tabContainer = document.querySelector('.tab-container');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');
    const projectInfo = {
         project8: {
            title: "Global Fishing Effort Analysis",
            description: "Utilizing Advanced Machine Learning Techniques to Estimate Fishing Hours Across the World's Oceans."
        },
         project7: {
            title: "Protection of Sharks and Rays",
            description: "Evaluating the governance and protection of sharks and rays in the Central and South American Pacific."
        },
        project6: {
            title: "Important Shark and Ray Areas",
            description: "Mapping critical habitat of Sharks, Rays and Chimaeras across the globe."
        },
        project5: {
            title: "Hierarchical Edge Bundling",
            description: "Applying Hierarchical Edge Bundling to cardiometabolic health markers"
        },
        project4: {
            title: "Functional diversity of sharks and rays",
            description: "Macroecological analyses of shark biodiversity, overlaps with industrial fishing pressure and with marine protected areas."
        },
        project3: {
            title: "Cetacean Biodiversity Modelling in New Zealand Waters",
            description: "A comprehensive study on the distribution and diversity of cetacean species in New Zealand waters."
        },
        project2: {
            title: "Macroecological analyses of biodiversity change",
            description: "Time-series analyses of biodiversity facing climate and land-use change: New Zealand's Rivers as case study"
        },
        project1: {
            title: "Functional diversity response to habitat disturbances",
            description: "Analysing native and non-native stream macrophyte assemblage response to habitat disturbances in an agricultural landscape."
        }
    };
    tabContainer.addEventListener('click', function(event) {
        const tab = event.target.closest('.tab');
        if (tab) {
            const tabId = tab.getAttribute('data-tab');
            const template = document.getElementById(`${tabId}-template`);
            if (template) {
                modalTitle.textContent = projectInfo[tabId].title;
                modalDescription.textContent = projectInfo[tabId].description;
                modalBody.innerHTML = '';
                modalBody.appendChild(template.content.cloneNode(true));
                modalOverlay.style.display = 'block';
            }
        }
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