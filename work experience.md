---
layout: page
title: Work experience
permalink: /work experience/
description: >
  Ten years of data science across consultancy, universities, research institutes and international organisations.
hide_description: true
---

<style>
.wx { max-width: 1000px; margin: 0 auto; color: #24323b; }
.wx a { color: #193747; text-decoration: underline; text-underline-offset: 2px; }
.wx a:hover { color: #2a5a74; }
.wx-lede { font-size: 1.02rem; line-height: 1.6; margin: 0 0 .9rem; }
.wx-btns { margin: 0 0 2rem; }
.wx .wx-btn { display: inline-block; background: #193747; color: #fff; padding: .45rem 1.05rem; border-radius: 3px; font-size: .88rem; text-decoration: none; margin: .3rem .45rem 0 0; }
.wx .wx-btn:hover { background: #2a5a74; color: #fff; }
.wx .wx-btn.ghost { background: transparent; color: #193747; border: 1px solid #193747; }
.wx .wx-btn.ghost:hover { background: #f4f7f9; }
.wx h2.wx-sec { margin: 2.4rem 0 1.2rem; font-size: 1.4rem; color: #193747; border-bottom: 2px solid #193747; padding-bottom: .35rem; }
.wx-tl { position: relative; padding-left: 1.6rem; }
.wx-tl::before { content: ""; position: absolute; left: .42rem; top: .4rem; bottom: .4rem; width: 2px; background: #c9d5dc; }
.wx-item { position: relative; margin: 0 0 1.3rem; }
.wx-item::before { content: ""; position: absolute; left: -1.6rem; top: 1.25rem; width: .9rem; height: .9rem; border-radius: 50%; background: #fff; border: 3px solid #193747; box-sizing: border-box; }
.wx-item.now::before { background: #193747; }
.wx-card { border: 1px solid #dfe5e9; border-radius: 4px; background: #fff; padding: 1.1rem 1.25rem; transition: box-shadow .2s ease; }
.wx-card:hover { box-shadow: 0 6px 18px rgba(25,55,71,.12); }
.wx-head { display: flex; gap: 1rem; align-items: center; margin: 0 0 .7rem; }
.wx-logo { flex: 0 0 96px; height: 56px; display: flex; align-items: center; justify-content: center; }
.wx-logo img { max-width: 96px; max-height: 56px; object-fit: contain; }
.wx-logo.duo img { max-width: 46px; }
.wx-logo.duo { gap: 4px; }
.wx-mono { width: 56px; height: 56px; border-radius: 50%; background: #193747; color: #fff; font-weight: 700; display: flex; align-items: center; justify-content: center; letter-spacing: .03em; }
.wx-title { flex: 1; min-width: 0; }
.wx-title h3 { margin: 0; font-size: 1.1rem; color: #193747; }
.wx-org { margin: .15rem 0 0; font-size: .93rem; color: #3c4c56; }
.wx-when { flex: 0 0 auto; align-self: flex-start; background: #eef3f6; color: #193747; border-radius: 999px; padding: .25rem .75rem; font-size: .82rem; font-weight: 600; white-space: nowrap; }
.wx-card ul { margin: 0 0 .5rem; padding-left: 1.15rem; font-size: .93rem; line-height: 1.6; }
.wx-card li { margin: 0 0 .25rem; }
.wx-links { margin: .4rem 0 0; font-size: .86rem; }
.wx-links a { margin-right: .9rem; }
.wx-clients { margin: .6rem 0 .2rem; max-width: 100%; height: auto; opacity: .9; }
.wx-tags { display: flex; flex-wrap: wrap; gap: .35rem; margin: .5rem 0 0; }
.wx-tags span { background: #eef3f6; color: #193747; border-radius: 999px; padding: .18rem .6rem; font-size: .78rem; }
.wx-edu { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.wx-edu div { border: 1px solid #dfe5e9; border-radius: 4px; padding: .9rem 1rem; background: #fff; font-size: .9rem; line-height: 1.5; }
.wx-edu b { display: block; color: #193747; font-size: .98rem; margin: 0 0 .2rem; }
.wx-edu .yr { color: #5a6a74; font-size: .82rem; }
@media (max-width: 720px) {
  .wx-head { flex-wrap: wrap; }
  .wx-logo { flex-basis: 70px; height: 44px; }
  .wx-logo img { max-width: 70px; max-height: 44px; }
  .wx-when { order: 3; }
  .wx-edu { grid-template-columns: 1fr; }
}
</style>

<div class="wx">

<p class="wx-lede">Ten years of data science across consultancy, universities, research institutes and international organisations, in New Zealand, France and Switzerland. Most recent first.</p>
<div class="wx-btns">
  <a class="wx-btn" href="/cv/">Download my CV</a>
  <a class="wx-btn ghost" href="/portfolio/">See the work</a>
</div>

<div class="wx-tl">

  <div class="wx-item now"><div class="wx-card">
    <div class="wx-head">
      <div class="wx-logo"><div class="wx-mono">DSA</div></div>
      <div class="wx-title"><h3>Founder and Data Consultant</h3><p class="wx-org">DataSphere Analytics &middot; Montpellier, remote</p></div>
      <span class="wx-when">2024 - present</span>
    </div>
    <ul>
      <li>Design, build and ship interactive Shiny applications end to end for research institutions, NGOs and government clients, from scoping to deployment and handover: <a href="https://fins-app.shinyapps.io/FINS_App/">FINS Explorer</a> and SAFE for the University of Zurich, <a href="https://cloudapps.france-bioinformatique.fr/dateback/">DateBack</a> for IRD and CNRS, and a survey dashboard with continuous integration for <a href="https://citizensforeurope.org/">Citizens for Europe</a>.</li>
      <li>Built, with Yan Holtz, an automated Quarto pipeline for the Government of Vanuatu that turns a cyclone scenario into a costed damage and response assessment (<a href="https://theophilemt92.github.io/vanuatu-disaster-report-demo/">public demo</a>).</li>
      <li>Led a working group's data pipeline at the Global Fishing Watch Mediterranean Data Lab (Rome, October 2026): one GitHub repository, a <a href="https://theophilemt92.github.io/gfw-med-data-lab/climate-env-ais/Quarto_report_CLIMATE-ENV-AIS.html">live Quarto report</a> and <a href="https://theophilemt92.github.io/gfw-med-data-lab/climate-env-ais/Quarto_slides_CLIMATE-ENV-AIS.html">slides that update themselves</a>.</li>
      <li>Wrote data visualisation tutorials for the R Graph Gallery (<a href="https://r-graph-gallery.com/character-interaction-analysis.html">chord diagram</a>, <a href="https://r-graph-gallery.com/web-sankey-diagram-with-highlight.html">Sankey with highlight</a>, <a href="https://r-graph-gallery.com/web-sankey-refugees.html">refugee flows</a>) and publication-ready network figures for the University of Chile.</li>
      <li>Published a reusable, branded <a href="https://theophilemt92.github.io/quarto-report-template/">Quarto report template</a> and a series of open analyses of satellite and vessel-tracking data, listed on the <a href="/portfolio/">portfolio</a>.</li>
    </ul>
    <img class="wx-clients" src="/assets/img/logos/Grid_of_logos.png" alt="Logos of DataSphere Analytics clients and partners">
    <div class="wx-tags"><span>R</span><span>Shiny</span><span>Quarto</span><span>Python</span><span>Git and GitHub</span><span>Client delivery</span></div>
  </div></div>

  <div class="wx-item"><div class="wx-card">
    <div class="wx-head">
      <div class="wx-logo"><img src="/assets/img/logos/IRD_logo.png" alt="IRD logo"></div>
      <div class="wx-title"><h3>Data Scientist, Postdoctoral Researcher</h3><p class="wx-org">IRD, French National Research Institute for Sustainable Development, BRIDGES programme &middot; Montpellier</p></div>
      <span class="wx-when">Jan - Jul 2026</span>
    </div>
    <ul>
      <li>Built an LLM-assisted extraction pipeline in Python with the Anthropic Claude API, pulling 27 structured fields from a corpus of more than 3,000 documents.</li>
      <li>Validated it at scale against blind manual coding: inter-rater agreement (Gwet's AC1), cluster bootstrap confidence intervals and McNemar's test.</li>
      <li>Delivered the screening and analysis system as a documented <a href="https://github.com/TheophileMt92/BRIDGES_litterature">public GitHub repository</a>, structured for reuse by the client team.</li>
    </ul>
    <div class="wx-tags"><span>Python</span><span>LLMs</span><span>Agreement statistics</span><span>Reproducibility</span></div>
  </div></div>

  <div class="wx-item"><div class="wx-card">
    <div class="wx-head">
      <div class="wx-logo"><img src="/assets/img/logos/UZH_logo.png" alt="University of Zurich logo"></div>
      <div class="wx-title"><h3>Data Scientist, Postdoctoral Researcher</h3><p class="wx-org">University of Zurich, Pimiento Research Group &middot; remote from Montpellier</p></div>
      <span class="wx-when">2025</span>
    </div>
    <ul>
      <li>Led a global conservation prioritisation of sharks and rays with CAPTAIN, a reinforcement learning algorithm in Python, optimising across about 1,000 species and three conservation criteria. Manuscript in revision at <em>Science Advances</em> (<a href="https://doi.org/10.1101/2025.11.28.691085">preprint</a>, <a href="https://github.com/TheophileMt92/CAPTAIN_elasmo_manuscript">code</a>).</li>
      <li>Trained a random forest on paired AIS and Sentinel-1 radar data to estimate fishing effort where vessels stop broadcasting (<a href="https://github.com/TheophileMt92/fishing-effort-beyond-ais">repo</a>).</li>
      <li>Ran a gap analysis of the global marine protected area network against a spatially explicit null model, with quantile and beta regression.</li>
      <li>Built the <a href="https://fins-app.shinyapps.io/FINS_App/">FINS</a> and SAFE Shiny applications for the group's open datasets (<a href="https://doi.org/10.1111/geb.70315">FINS paper</a>).</li>
    </ul>
    <div class="wx-tags"><span>Machine learning</span><span>Reinforcement learning</span><span>Satellite data</span><span>R and Python</span></div>
  </div></div>

  <div class="wx-item"><div class="wx-card">
    <div class="wx-head">
      <div class="wx-logo duo"><img src="/assets/img/logos/IUCN_logo_2.png" alt="IUCN logo"><img src="/assets/img/logos/SSG_logo.jpg" alt="Shark Specialist Group logo"></div>
      <div class="wx-title"><h3>Postdoctoral Researcher and Scientific Coordinator</h3><p class="wx-org">IUCN SSC Shark Specialist Group, Important Shark and Ray Areas &middot; remote</p></div>
      <span class="wx-when">2023 - 2024</span>
    </div>
    <ul>
      <li>Coordinated more than 60 scientists across international institutions to design, write, review and publish the regional compendia for the <a href="https://sharkrayareas.org/download/mediterranean-and-black-seas-regional-compendium-of-important-shark-and-ray-areas/">Mediterranean and Black Seas</a> and the <a href="https://sharkrayareas.org/download/western-indian-ocean-regional-compendium-of-important-shark-and-ray-areas/">Western Indian Ocean</a>, to deadline.</li>
      <li>Co-organised and delivered two expert workshops with more than 250 participants in total, in Thessaloniki and Durban.</li>
      <li>Led an analysis of protection shortfalls in the Central and South American Pacific with text mining, mixed effects models and spatial overlaps, published in <a href="https://www.sciencedirect.com/science/article/pii/S0308597X24004482"><em>Marine Policy</em></a>.</li>
    </ul>
    <div class="wx-tags"><span>Coordination</span><span>Workshops and training</span><span>Stakeholders</span><span>Spatial analysis</span></div>
  </div></div>

  <div class="wx-item"><div class="wx-card">
    <div class="wx-head">
      <div class="wx-logo"><img src="/assets/img/logos/MARBEC_logo.jpeg" alt="MARBEC logo"></div>
      <div class="wx-title"><h3>PhD in Macroecology (statistical modelling)</h3><p class="wx-org">MARBEC, University of Montpellier, degree from Université Claude Bernard Lyon 1</p></div>
      <span class="wx-when">2020 - 2023</span>
    </div>
    <ul>
      <li>Compiled, cleaned and modelled a 30-year database spanning 70 sites and more than 100 variables (biodiversity, climate, land use and habitat), building the full workflow in R.</li>
      <li>Assembled and managed a team of 15 scientists across three continents.</li>
      <li>Published three first-author papers, including <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/gcb.15389"><em>Global Change Biology</em></a> and <a href="https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/ecog.06148"><em>Ecography</em></a> (<a href="https://theses.fr/275299554">thesis</a>).</li>
    </ul>
    <div class="wx-tags"><span>Statistical modelling</span><span>Large datasets</span><span>R</span><span>Team leadership</span></div>
  </div></div>

  <div class="wx-item"><div class="wx-card">
    <div class="wx-head">
      <div class="wx-logo"><img src="/assets/img/logos/CESAB_logo.jpeg" alt="CESAB logo"></div>
      <div class="wx-title"><h3>Research Scientist</h3><p class="wx-org">CESAB, French Foundation for Research on Biodiversity &middot; Montpellier</p></div>
      <span class="wx-when">2021 - 2022</span>
    </div>
    <ul>
      <li>Built end-to-end R pipelines to format, clean and analyse a database of more than 9 million rows linking human population growth to protected area establishment across the United States over two centuries.</li>
      <li>Contributed to the <a href="https://parsecproject.org">PARSEC</a> project on reproducible, collaborative data science.</li>
    </ul>
    <div class="wx-tags"><span>Data pipelines</span><span>R</span><span>Census and land-use data</span></div>
  </div></div>

  <div class="wx-item"><div class="wx-card">
    <div class="wx-head">
      <div class="wx-logo"><img src="/assets/img/logos/Ifremer_logo.png" alt="Ifremer logo"></div>
      <div class="wx-title"><h3>Research Scientist</h3><p class="wx-org">Ifremer, French Research Institute for Exploitation of the Sea &middot; Sète</p></div>
      <span class="wx-when">2019 - 2020</span>
    </div>
    <ul>
      <li>Supported a coastal ecological monitoring network with data cleaning, analysis and reporting, and ran its fieldwork and laboratory campaigns.</li>
      <li>Led a mixed-method project: a trait database, multivariate statistics and generalised models, with weekly reporting to an expert panel (<a href="https://doi.org/10.24072/pcjournal.499">paper</a>).</li>
      <li>Hired and supervised an MSc student.</li>
    </ul>
    <div class="wx-tags"><span>Monitoring data</span><span>Multivariate statistics</span><span>Supervision</span></div>
  </div></div>

  <div class="wx-item"><div class="wx-card">
    <div class="wx-head">
      <div class="wx-logo"><img src="/assets/img/logos/NIWA_logo.png" alt="NIWA logo"></div>
      <div class="wx-title"><h3>Research Assistant</h3><p class="wx-org">NIWA, National Institute of Water and Atmospheric Research &middot; Hamilton, New Zealand</p></div>
      <span class="wx-when">2017 - 2019</span>
    </div>
    <ul>
      <li>Statistical programming, data processing and multivariate analyses for three research groups in marine and freshwater science.</li>
      <li>Species distribution modelling of New Zealand cetaceans and marine spatial classification with machine learning, for Fisheries New Zealand and the Department of Conservation (<a href="https://docs.niwa.co.nz/library/public/NZAEBR-240.pdf">report</a>, <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ddi.13035">paper</a>).</li>
      <li>Led a first-author paper in <a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969718351507"><em>Science of the Total Environment</em></a> and co-supervised an MSc student.</li>
    </ul>
    <div class="wx-tags"><span>Machine learning</span><span>Species distribution models</span><span>Data visualisation</span></div>
  </div></div>

</div>

<h2 class="wx-sec">Education</h2>
<div class="wx-edu">
  <div><b>PhD in Macroecology</b>Université Claude Bernard Lyon 1, research at the University of Montpellier<br><span class="yr">2020 - 2023</span></div>
  <div><b>MSc Dynamics of Aquatic Ecosystems</b>University of Pau and Pays de l'Adour, thesis at Massey University, New Zealand<br><span class="yr">2014 - 2016</span></div>
  <div><b>BSc Ecology and Organismal Biology</b>University of Montpellier<br><span class="yr">2012 - 2014</span></div>
</div>

</div>
