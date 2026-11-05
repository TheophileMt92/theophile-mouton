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
.rs-theme { display: grid; grid-template-columns: 9fr 11fr; gap: 1.5rem; align-items: start; border: 1px solid #dfe5e9; border-radius: 4px; background: #fff; padding: 1.2rem; margin: 0 0 1.4rem; }
.rs-theme.flip { grid-template-columns: 11fr 9fr; }
.rs-theme.flip .rs-figs { order: 2; }
.rs-figs { display: flex; flex-direction: column; gap: .9rem; }
.rs-fig { margin: 0; }
.rs-fig img { display: block; width: 100%; height: auto; border-radius: 3px; }
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
  .rs-theme.flip .rs-figs { order: 0; }
}
</style>

<div class="rs">

<p class="rs-lede">My research uses large biodiversity, environmental and satellite datasets to ask where species are, how they are changing, and whether protection and management are keeping up. It runs from New Zealand rivers and coastlines to the global ocean, and almost all of it is built as reproducible code.</p>

<div class="rs-stats">
  <div class="rs-stat"><b>13</b><span>peer-reviewed papers</span></div>
  <div class="rs-stat"><b>5</b><span>as first author</span></div>
  <div class="rs-stat"><b>1</b><span>more as a preprint</span></div>
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
  <div class="rs-figs">
    <figure class="rs-fig"><img src="/assets/img/portfolio/pap_sciadv_ses.png" alt="Global map of standardised effect sizes of species range coverage by no-take marine protected areas"><figcaption>Gap analysis: how well no-take protected areas cover species ranges compared with a null model of random placement (blue better, red worse than chance).</figcaption></figure>
    <figure class="rs-fig"><img src="/assets/img/portfolio/res_gap_iucn.png" alt="Percentage of range protected by no-take MPAs for each IUCN Red List category"><figcaption>Share of each species' range inside no-take protected areas, by IUCN Red List category: threatened species are no better covered.</figcaption></figure>
    <figure class="rs-fig"><img src="/assets/img/portfolio/pap_sciadv_bivar.png" alt="Bivariate map of conservation priority against industrial fishing effort"><figcaption>Conservation priorities from reinforcement learning, set against industrial fishing effort.</figcaption></figure>
  </div>
  <div>
    <p class="rs-kicker">Global macroecology</p>
    <h3>Area-based management and conservation prioritisation</h3>
    <p>How well does the global network of marine protected areas cover biodiversity, and where should new protection go? With the Pimiento Research Group, I combined range maps for about 1,000 species with measures of extinction risk, ecological function and evolutionary history. I ran a gap analysis against a spatially explicit null model, then used reinforcement learning to optimise where a 10% protection target would do the most good, set against where industrial fishing concentrates.</p>
    <p>The study system is sharks and rays, one of the most threatened groups in the ocean; the methods apply to any taxon or region.</p>
    <ul class="rs-papers">
      <li class="first"><strong>Mouton T.L.</strong> et al. <a href="https://doi.org/10.1101/2025.11.28.691085">Global gaps and priorities for shark and ray conservation.</a> <em>bioRxiv</em> preprint <span class="yr">2025</span></li>
      <li>Pimiento C. et al. <a href="https://doi.org/10.1038/s41467-023-43212-3">Functional diversity of sharks and rays is highly vulnerable and supported by unique species and locations worldwide.</a> <em>Nature Communications</em> <span class="yr">2023</span></li>
      <li>Kocáková K. et al. <a href="https://doi.org/10.1111/geb.70315">FINS: a global occurrence dataset of fossil neoselachians.</a> <em>Global Ecology and Biogeography</em> <span class="yr">2026</span> (<a href="https://fins-app.shinyapps.io/FINS_App/">app</a>)</li>
    </ul>
  </div>
</div>

<div class="rs-theme flip">
  <div class="rs-figs">
    <figure class="rs-fig"><img src="/assets/img/portfolio/res_mpa_cumulative.jpg" alt="Cumulative number and area of marine protected areas by IUCN category, 1940 to 2023"><figcaption>Cumulative number (A) and area (B) of marine protected areas by IUCN category in the Central and South American Pacific, 1940 to 2023.</figcaption></figure>
    <figure class="rs-fig"><img src="/assets/img/portfolio/res_mpa_lollipop.png" alt="Lollipop charts of EEZ coverage by no-take and all MPAs for 11 countries"><figcaption>Share of each country's exclusive economic zone under protection: expansion since 2010 (A) and extent in 2023 (B), no-take against all MPAs.</figcaption></figure>
  </div>
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
  <div class="rs-figs">
    <figure class="rs-fig"><img src="/assets/img/portfolio/new_chinese_fleet.png" alt="Animated map of Chinese industrial fishing effort accumulating through the year"><figcaption>A year of Chinese industrial fishing effort accumulating week by week, from AIS data (frame from the animation).</figcaption></figure>
    <figure class="rs-fig"><img src="/assets/img/portfolio/res_oil_slick_grid.png" alt="Grid of marine protected areas by country coloured by detected oil-slick area"><figcaption>Oil slicks inside marine protected areas, 2023 to 2025: each square is one MPA, coloured by the oil detected inside it, for the five most exposed countries.</figcaption></figure>
  </div>
  <div>
    <p class="rs-kicker">Open analyses</p>
    <h3>Human pressure at sea, seen from space</h3>
    <p>Much of my recent work uses public satellite data to measure human activity at sea: industrial fishing from vessel tracking (AIS) and Sentinel-1 radar, and oil pollution from radar slick detections. These are open, reproducible analyses, each with its code.</p>
    <ul class="rs-papers">
      <li><a href="https://github.com/TheophileMt92/gfw-chinese-fleet">A year of Chinese fleet effort</a>, animated</li>
      <li><a href="https://github.com/TheophileMt92/fishing-effort-beyond-ais">Mapping fishing effort beyond AIS</a>: a random forest on paired AIS and radar detections</li>
      <li><a href="https://theophilemt92.github.io/gfw-fleet-comparison/">How the world's industrial fishing fleets compare</a>, and how much the answer depends on what you divide by</li>
      <li><a href="https://theophilemt92.github.io/mpa-oil-slicks/">Oil slicks inside marine protected areas</a>, 2023 to 2025</li>
    </ul>
  </div>
</div>

<div class="rs-theme flip">
  <div class="rs-figs">
    <figure class="rs-fig"><img src="/assets/img/portfolio/Mouton%20et%20al.%202020%20GCB%20Fig%201.png" alt="Temporal trends in taxonomic and functional diversity of river macroinvertebrates"><figcaption>Taxonomic homogenisation and functional differentiation in New Zealand rivers.</figcaption></figure>
    <figure class="rs-fig"><img src="/assets/img/portfolio/Mouton%20et%20al.%202020%20map.png" alt="Map of New Zealand river monitoring sites"><figcaption>The national river monitoring sites behind the <em>Global Change Biology</em> study.</figcaption></figure>
  </div>
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
  <div class="rs-figs">
    <figure class="rs-fig"><img src="/assets/img/portfolio/Mouton%20et%20al.%202022%20Biocons.png" alt="Spatial mismatch between taxonomic, functional and phylogenetic diversity of New Zealand cetaceans"><figcaption>Mismatch between diversity facets of New Zealand cetaceans.</figcaption></figure>
    <figure class="rs-fig"><img src="/assets/img/portfolio/Stephenson%20et%20al.%202020.png" alt="Modelled probability of occurrence of a cetacean species in New Zealand waters with zoomed insets"><figcaption>Modelled probability of occurrence of a cetacean species across New Zealand's waters, with zoomed insets (Stephenson et al. 2020).</figcaption></figure>
  </div>
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
