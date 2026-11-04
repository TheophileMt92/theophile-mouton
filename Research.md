---
layout: page
title: Research
description: >
  Quantitative research on biodiversity, protection gaps and fishing pressure, from regional surveys to global satellite data.
hide_description: true
---

<style>
.rs { max-width: 1000px; margin: 0 auto; color: #24323b; }
.rs a { color: #193747; text-decoration: underline; text-underline-offset: 2px; }
.rs a:hover { color: #2a5a74; }
.rs-lede { font-size: 1.02rem; line-height: 1.6; margin: 0 0 1.2rem; }
.rs-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: .8rem; margin: 0 0 1rem; }
.rs-stat { border: 1px solid #dfe5e9; border-radius: 4px; padding: .85rem .7rem; text-align: center; background: #fff; }
.rs-stat b { display: block; font-size: 1.55rem; color: #193747; line-height: 1.1; }
.rs-stat span { font-size: .84rem; color: #5a6a74; }
.rs-btns { margin: 0 0 1.6rem; }
.rs .rs-btn { display: inline-block; background: #193747; color: #fff; padding: .45rem 1.05rem; border-radius: 3px; font-size: .88rem; text-decoration: none; margin: .3rem .45rem 0 0; }
.rs .rs-btn:hover { background: #2a5a74; color: #fff; }
.rs .rs-btn.ghost { background: transparent; color: #193747; border: 1px solid #193747; }
.rs .rs-btn.ghost:hover { background: #f4f7f9; }
.rs-methods { display: flex; flex-wrap: wrap; gap: .4rem; margin: 0 0 2.2rem; }
.rs-methods span { background: #eef3f6; color: #193747; border-radius: 999px; padding: .26rem .72rem; font-size: .83rem; }
.rs-theme { display: grid; grid-template-columns: 2fr 3fr; gap: 1.5rem; align-items: start; border: 1px solid #dfe5e9; border-radius: 4px; background: #fff; padding: 1.2rem; margin: 0 0 1.4rem; }
.rs-theme.flip { grid-template-columns: 3fr 2fr; }
.rs-theme.flip .rs-fig { order: 2; }
.rs-fig { margin: 0; }
.rs-fig img { width: 100%; max-height: 300px; object-fit: contain; background: #f7f9fa; border-radius: 3px; }
.rs-fig figcaption { font-size: .78rem; color: #5a6a74; margin: .35rem 0 0; line-height: 1.4; }
.rs-kicker { margin: 0 0 .2rem; font-size: .78rem; letter-spacing: .06em; text-transform: uppercase; color: #5a6a74; }
.rs-theme h3 { margin: 0 0 .5rem; font-size: 1.2rem; color: #193747; }
.rs-theme p { margin: 0 0 .7rem; font-size: .94rem; line-height: 1.6; }
.rs-papers { list-style: none; margin: 0; padding: 0; font-size: .88rem; line-height: 1.5; }
.rs-papers li { padding: .4rem 0 .4rem .75rem; border-left: 3px solid #c9d5dc; margin: 0 0 .4rem; }
.rs-papers li.first { border-left-color: #193747; }
.rs-papers .yr { color: #5a6a74; }
.rs-note { font-size: .82rem; color: #5a6a74; margin: -.4rem 0 1.6rem; }
@media (max-width: 760px) {
  .rs-stats { grid-template-columns: repeat(2, 1fr); }
  .rs-theme, .rs-theme.flip { grid-template-columns: 1fr; }
  .rs-theme.flip .rs-fig { order: 0; }
}
</style>

<div class="rs">

<p class="rs-lede">My research uses large biodiversity, environmental and satellite datasets to ask where species are, how they are changing, and whether protection and management are keeping up. It runs from New Zealand rivers and coastlines to the global ocean, and almost all of it is built as reproducible code.</p>

<div class="rs-stats">
  <div class="rs-stat"><b>13</b><span>peer-reviewed papers</span></div>
  <div class="rs-stat"><b>5</b><span>as first author</span></div>
  <div class="rs-stat"><b>1</b><span>more in revision, <em>Science Advances</em></span></div>
  <div class="rs-stat"><b>5</b><span>scientific reports</span></div>
</div>

<div class="rs-btns">
  <a class="rs-btn" href="/Publications/">Full publication list</a>
  <a class="rs-btn ghost" href="https://scholar.google.com/citations?user=iiZ0klkAAAAJ&hl=en">Google Scholar</a>
  <a class="rs-btn ghost" href="/cv/#academic">Academic CV</a>
</div>

<div class="rs-methods">
  <span>Spatial conservation prioritisation</span><span>Reinforcement learning</span><span>Random forests and gradient forests</span><span>Species distribution and density models</span><span>Null and permutation models</span><span>Mixed effects and quantile regression</span><span>Functional and phylogenetic diversity</span><span>Satellite and vessel-tracking data</span><span>R, Python and Quarto</span>
</div>

<p class="rs-note">In each list, a dark bar marks a first-author paper.</p>

<div class="rs-theme">
  <figure class="rs-fig"><img src="/assets/img/portfolio/pap_sciadv_bivar.png" alt="Bivariate map of shark and ray conservation priority against industrial fishing effort"><figcaption>Conservation priority against industrial fishing effort, from the <em>Science Advances</em> manuscript.</figcaption></figure>
  <div>
    <p class="rs-kicker">Global scale</p>
    <h3>Where to protect sharks and rays</h3>
    <p>Sharks and rays are among the most threatened animals in the ocean. With the Pimiento Research Group, I mapped which species and places carry unique functions and evolutionary history, measured how little of it no-take protected areas cover, and used reinforcement learning to find where new protection would do the most good, set against where industrial fishing concentrates.</p>
    <ul class="rs-papers">
      <li class="first"><strong>Mouton T.L.</strong> et al. Global gaps and priorities for shark and ray conservation. <em>Science Advances</em>, in revision (<a href="https://doi.org/10.1101/2025.11.28.691085">preprint</a>, <a href="https://github.com/TheophileMt92/CAPTAIN_elasmo_manuscript">code</a>)</li>
      <li>Pimiento C. et al. <a href="https://doi.org/10.1038/s41467-023-43212-3">Functional diversity of sharks and rays is highly vulnerable and supported by unique species and locations worldwide.</a> <em>Nature Communications</em> <span class="yr">2023</span></li>
      <li>Kocáková K. et al. <a href="https://doi.org/10.1111/geb.70315">FINS: a global occurrence dataset of fossil neoselachians.</a> <em>Global Ecology and Biogeography</em> <span class="yr">2026</span> (<a href="https://fins-app.shinyapps.io/FINS_App/">app</a>)</li>
    </ul>
  </div>
</div>

<div class="rs-theme flip">
  <figure class="rs-fig"><img src="/assets/img/portfolio/Mouton%20et%20al.%202024_MPAs.png" alt="Overlap between Important Shark and Ray Areas and marine protected areas in the Central and South American Pacific"><figcaption>Important Shark and Ray Areas against marine protected areas, Central and South American Pacific.</figcaption></figure>
  <div>
    <p class="rs-kicker">Science to policy</p>
    <h3>Protection gaps in critical habitat</h3>
    <p>As scientific coordinator for the IUCN SSC Shark Specialist Group, I worked with more than 60 experts to identify Important Shark and Ray Areas, then tested how well existing protected areas actually cover them. The answer, region after region, is very little, especially once fishing is taken into account.</p>
    <ul class="rs-papers">
      <li class="first"><strong>Mouton T.L.</strong> et al. <a href="https://doi.org/10.1016/j.marpol.2024.106448">Shortfalls in the protection of Important Shark and Ray Areas undermine shark conservation efforts in the Central and South American Pacific.</a> <em>Marine Policy</em> <span class="yr">2024</span></li>
      <li>Cochran J.E.M. et al. <a href="https://doi.org/10.1002/ece3.72690">Only one percent of Important Shark and Ray Areas in the Western Indian Ocean are fully protected from fishing pressure.</a> <em>Ecology and Evolution</em> <span class="yr">2026</span></li>
      <li>Rohner C.A. et al. <a href="https://doi.org/10.1016/j.isci.2025.113192">Important Shark and Ray Areas can inform conservation planning in the Mediterranean and Black Seas.</a> <em>iScience</em> <span class="yr">2025</span></li>
      <li>Regional compendia: <a href="https://doi.org/10.59216/ssg.isra.2023.r3">Mediterranean and Black Seas</a> <span class="yr">2023</span>, <a href="https://doi.org/10.59216/ssg.isra.2023.r7">Western Indian Ocean</a> <span class="yr">2024</span></li>
    </ul>
  </div>
</div>

<div class="rs-theme">
  <figure class="rs-fig"><img src="/assets/img/portfolio/new_fishing_effort_beyond_ais.png" alt="Estimated fishing effort beyond AIS coverage from Sentinel-1 radar detections"><figcaption>Fishing effort estimated from radar where AIS goes quiet.</figcaption></figure>
  <div>
    <p class="rs-kicker">Open analyses</p>
    <h3>Fishing pressure seen from space</h3>
    <p>Much of my recent work uses public satellite data to measure human pressure at sea: vessel tracking (AIS), Sentinel-1 radar and slick detections. These are open, reproducible analyses, each with its code.</p>
    <ul class="rs-papers">
      <li><a href="https://github.com/TheophileMt92/fishing-effort-beyond-ais">Mapping fishing effort beyond AIS</a>: a random forest on paired AIS and radar detections</li>
      <li><a href="https://theophilemt92.github.io/gfw-fleet-comparison/">How the world's industrial fishing fleets compare</a>, and how much the answer depends on what you divide by</li>
      <li><a href="https://theophilemt92.github.io/mpa-oil-slicks/">Oil slicks inside marine protected areas</a>, 2023 to 2025</li>
    </ul>
  </div>
</div>

<div class="rs-theme flip">
  <figure class="rs-fig"><img src="/assets/img/portfolio/Mouton%20et%20al.%202020%20GCB%20Fig%201.png" alt="Temporal trends in taxonomic and functional diversity of river macroinvertebrates"><figcaption>Taxonomic homogenisation and functional differentiation in New Zealand rivers.</figcaption></figure>
  <div>
    <p class="rs-kicker">Global change</p>
    <h3>Biodiversity change under climate and land use</h3>
    <p>My PhD used three decades of national monitoring data to separate the effects of climate and land use on freshwater communities, showing that species composition and ecological function can respond in opposite directions. Related work tracks how nutrient enrichment reshapes coastal lagoon communities.</p>
    <ul class="rs-papers">
      <li class="first"><strong>Mouton T.L.</strong> et al. <a href="https://doi.org/10.1111/gcb.15389">Increasing climate-driven taxonomic homogenization but functional differentiation among river macroinvertebrate assemblages.</a> <em>Global Change Biology</em> <span class="yr">2020</span></li>
      <li class="first"><strong>Mouton T.L.</strong> et al. <a href="https://doi.org/10.1111/ecog.06148">Climate and land-use driven reorganisation of structure and function in river macroinvertebrate communities.</a> <em>Ecography</em> <span class="yr">2022</span></li>
      <li class="first"><strong>Mouton T.L.</strong> et al. <a href="https://doi.org/10.1016/j.scitotenv.2018.12.277">Environmental filtering of native and non-native stream macrophyte assemblages.</a> <em>Science of the Total Environment</em> <span class="yr">2019</span></li>
      <li>Jones A.G. et al. <a href="https://doi.org/10.24072/pcjournal.499">Disentangling the effects of eutrophication and natural variability on macrobenthic communities across French coastal lagoons.</a> <em>Peer Community Journal</em> <span class="yr">2024</span></li>
    </ul>
  </div>
</div>

<div class="rs-theme">
  <figure class="rs-fig"><img src="/assets/img/portfolio/Mouton%20et%20al.%202022%20Biocons.png" alt="Spatial mismatch between taxonomic, functional and phylogenetic diversity of New Zealand cetaceans"><figcaption>Mismatch between diversity facets of New Zealand cetaceans.</figcaption></figure>
  <div>
    <p class="rs-kicker">National scale</p>
    <h3>Mapping and protecting marine life in New Zealand</h3>
    <p>At NIWA I modelled where New Zealand's whales and dolphins live and classified its seafloor communities with machine learning, work that fed conservation planning for Fisheries New Zealand and the Department of Conservation.</p>
    <ul class="rs-papers">
      <li class="first"><strong>Mouton T.L.</strong> et al. <a href="https://doi.org/10.1016/j.biocon.2022.109484">Spatial mismatch in diversity facets reveals contrasting protection for New Zealand's cetacean biodiversity.</a> <em>Biological Conservation</em> <span class="yr">2022</span></li>
      <li>Stephenson F. et al. <a href="https://doi.org/10.1111/ddi.13035">Modelling the spatial distribution of cetaceans in New Zealand waters.</a> <em>Diversity and Distributions</em> <span class="yr">2020</span></li>
      <li>Stephenson F. et al. <a href="https://doi.org/10.1002/ecs2.3633">Cetacean conservation planning in a global diversity hotspot.</a> <em>Ecosphere</em> <span class="yr">2021</span></li>
      <li>Stephenson F. et al. <a href="https://doi.org/10.3389/fmars.2021.792712">Development of a seafloor community classification for the New Zealand region using a gradient forest approach.</a> <em>Frontiers in Marine Science</em> <span class="yr">2022</span></li>
    </ul>
  </div>
</div>

</div>
