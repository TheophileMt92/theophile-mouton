---
layout: page
title: CV
permalink: /cv/
hide_description: true
description: >
  Download the CV of Théophile Mouton: a data science CV for analytics and consultancy roles, and an academic CV for research positions.
---

<style>
.cv { max-width: 1000px; margin: 0 auto; }
.cv-lede { font-size: 1.02rem; line-height: 1.6; margin: 0 0 1.4rem; }
.cv-switch { display: inline-flex; border: 2px solid #193747; border-radius: 999px; padding: 3px; margin: 0 0 1.4rem; background: #fff; }
.cv-switch button { border: 0; background: transparent; color: #193747; font: inherit; font-size: .95rem; font-weight: 600; padding: .5rem 1.2rem; border-radius: 999px; cursor: pointer; transition: background .2s, color .2s; }
.cv-switch button[aria-selected="true"] { background: #193747; color: #fff; }
.cv-switch button:focus-visible { outline: 3px solid #2a5a74; outline-offset: 2px; }
.cv-panel { display: none; }
.cv-panel.is-active { display: block; }
.cv-panel p { margin: 0 0 .9rem; line-height: 1.55; font-size: .97rem; }
.cv-btn { display: inline-block; background: #193747; color: #fff !important; padding: .45rem 1.05rem; border-radius: 3px; font-size: .88rem; text-decoration: none !important; margin: 0 .5rem .9rem 0; }
.cv-btn:hover { background: #2a5a74; }
.cv-btn.ghost { background: transparent; color: #193747 !important; border: 1px solid #193747; }
.cv-btn.ghost:hover { background: #f4f7f9; }
.cv-actions { display: block; margin: 0 0 .2rem; }
.cv-frame { width: 100%; height: 1100px; border: 1px solid #d6dde2; border-radius: 4px; background: #f4f7f9; }
@media (max-width: 640px) {
  .cv-switch { display: flex; }
  .cv-switch button { flex: 1; padding: .5rem .6rem; font-size: .88rem; }
  .cv-frame { height: 70vh; }
}
</style>

<div class="cv">

<p class="cv-lede">Two versions of my CV, depending on what you are looking for. Both cover the same career, told for a different reader.</p>

<div class="cv-switch" role="tablist" aria-label="Choose a CV">
  <button role="tab" id="tab-ds" aria-controls="panel-ds" aria-selected="true">Commercial data science</button>
  <button role="tab" id="tab-ac" aria-controls="panel-ac" aria-selected="false">Academic quantitative science</button>
</div>

<div class="cv-panel is-active" id="panel-ds" role="tabpanel" aria-labelledby="tab-ds">
  <p>For data science, analytics and consultancy roles: R and Python, web apps and dashboards (Shiny, React), reproducible digital reporting (Quarto), statistics and machine learning, LLM pipelines and client delivery. Two pages.</p>
  <div class="cv-actions">
    <a class="cv-btn" href="/assets/files/Theophile_Mouton_CV_Data_Science.pdf" download>Download PDF</a>
    <a class="cv-btn ghost" href="/assets/files/Theophile_Mouton_CV_Data_Science.pdf" target="_blank" rel="noopener">Open in new tab</a>
  </div>
  <iframe class="cv-frame" data-src="/assets/files/Theophile_Mouton_CV_Data_Science.pdf" title="Commercial data science CV"></iframe>
</div>

<div class="cv-panel" id="panel-ac" role="tabpanel" aria-labelledby="tab-ac">
  <p>For research, academic and science-policy roles: full publication list, appointments, grants, presentations, mentorship and technical skills.</p>
  <div class="cv-actions">
    <a class="cv-btn" href="/assets/files/Theophile_Mouton_CV_Academic.pdf" download>Download PDF</a>
    <a class="cv-btn ghost" href="/assets/files/Theophile_Mouton_CV_Academic.pdf" target="_blank" rel="noopener">Open in new tab</a>
  </div>
  <iframe class="cv-frame" data-src="/assets/files/Theophile_Mouton_CV_Academic.pdf" title="Academic CV"></iframe>
</div>

</div>

<script>
(function () {
  var tabs = document.querySelectorAll('.cv-switch [role="tab"]');
  function load(panel) {
    var f = panel.querySelector('iframe[data-src]');
    if (f && !f.src) f.src = f.getAttribute('data-src');
  }
  function show(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      var p = document.getElementById(t.getAttribute('aria-controls'));
      p.classList.toggle('is-active', on);
      if (on) load(p);
    });
    try { history.replaceState(null, '', tab.id === 'tab-ac' ? '#academic' : '#data-science'); } catch (e) {}
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var other = t === tabs[0] ? tabs[1] : tabs[0];
        other.focus(); show(other);
      }
    });
  });
  show(location.hash === '#academic' ? tabs[1] : tabs[0]);
})();
</script>
