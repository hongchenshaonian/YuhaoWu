---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about-me"></span>
# 👋 Welcome to my homepage!

<div class="intro-text">

<p>I am an <strong>undergraduate student</strong> and <strong>research assistant</strong> at <strong>Wuhan Polytechnic University</strong> under the supervision of <a href="https://www.scopus.com/authid/detail.uri?authorId=49362047300" target="_blank" rel="noopener noreferrer" style="color: #0366d6; font-weight: 700;">Prof. Xiantao Qin</a>. Since February 2024, I have been conducting independent research in Prof. Qin’s group. Within the field of <strong>civil engineering</strong>, my work centers on engineering materials at the interface of <strong>materials engineering</strong> and <strong>chemical engineering</strong>.</p>

<p>My previous research has centered on key topics in <strong>low-carbon cementitious composites, hydration chemistry, CO<sub>2</sub> mineralization, waste valorisation, microstructure–property relationships</strong>.</p>

<p>In the future, I hope to pursue research across science and engineering to develop new approaches that address real-world challenges and contribute to a more sustainable future.</p>

<p>Please feel free to contact me at <strong>richard.yuhao.wu@gmail.com</strong> or by phone at <strong>+86 130 1800 3983</strong>.</p>

</div>


<style>
/* Intro copy spacing */
.intro-text p { margin: 0 0 1.05em 0; }
.intro-text p:last-child { margin-bottom: 0; }

/* Research Experience Timeline Styling */
.timeline-container {
  position: relative;
  padding-left: 20px;
  border-left: 2px solid #e1e4e8;
  margin-bottom: 30px;
  margin-left: 8px;
}
.timeline-item { position: relative; margin-bottom: 16px; }
.timeline-item::before {
  content: ''; position: absolute; left: -27px; top: 5px;
  width: 12px; height: 12px; background-color: #0366d6;
  border-radius: 50%; border: 2px solid #fff;
}
.timeline-date { font-weight: 600; color: #0366d6; font-size: 0.95em; margin-bottom: 2px; }
.timeline-content { font-size: 0.95em; color: #24292e; }

/* 现代化的 Show more 按钮 */
.timeline-details summary {
  display: inline-flex; align-items: center;
  margin-left: -20px;
  padding: 6px 14px; background-color: #f6f8fa;
  border: 1px solid #e1e4e8; border-radius: 20px;
  font-size: 0.85em; font-weight: 600; color: #586069;
  cursor: pointer; transition: all 0.2s ease; list-style: none;
}
.timeline-details summary:hover { background-color: #e1e4e8; color: #24292e; }
.timeline-details summary::-webkit-details-marker { display: none; }
.timeline-details[open] summary .summary-text { content: "Show less ▴"; }

/* Global Paper Box Hover Effect */
.paper-box {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  border-radius: 8px;
  padding: 14px;
  border: 1px solid #ececec;
  background-color: #ffffff;
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.paper-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  border-color: #e2e8f0;
}
.paper-box-image {
  flex: 0 0 32%;
  margin-right: 18px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
}
.paper-box.featured-paper .paper-box-image {
  flex-basis: 34%;
  max-width: 520px;
}
.paper-box-image video, .paper-box-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}
.paper-box-image.protected-figure {
  cursor: zoom-in;
  background: #f8fafc;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.paper-box-image.protected-figure:focus-visible {
  outline: 3px solid rgba(3, 102, 214, 0.45);
  outline-offset: 3px;
}
.paper-box-image.protected-figure img {
  pointer-events: none;
  -webkit-user-drag: none;
}
.paper-box-image.protected-figure::before,
.protected-image-stage::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 3;
  background: rgba(255, 255, 255, 0.01);
}
.paper-box-image.protected-figure .badge {
  z-index: 5;
}
.protected-image-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: rgba(15, 23, 42, 0.88);
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.protected-image-modal.is-open {
  display: flex;
}
.protected-image-dialog {
  position: relative;
  width: fit-content;
  max-width: calc(100vw - 36px);
  max-height: calc(100vh - 36px);
}
.protected-image-stage {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  cursor: zoom-out;
}
.protected-image-stage img {
  display: block;
  width: auto;
  max-width: calc(100vw - 36px);
  max-height: calc(100vh - 36px);
  pointer-events: none;
  -webkit-user-drag: none;
}
.protected-watermark {
  position: absolute;
  inset: 0;
  z-index: 4;
  display: block;
  pointer-events: none;
  overflow: hidden;
}
.protected-watermark span {
  position: absolute;
  left: var(--wm-x);
  top: var(--wm-y);
  display: block;
  color: rgba(107, 114, 128, 0.16);
  font-family: Arial, sans-serif;
  font-size: clamp(24px, 2.35vw, 40px);
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  transform: translate(-50%, -50%) rotate(-26deg);
}
.protected-watermark-warning {
  display: none;
}
.protected-watermark-warning.is-visible { display: block; }
.protected-watermark-warning span {
  color: rgba(107, 114, 128, 0.18);
}
.protected-image-close {
  position: absolute;
  top: -16px;
  right: -16px;
  z-index: 6;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: #ffffff;
  color: #111827;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
body.protected-image-open {
  overflow: hidden;
}
@media print {
  .paper-box-image.protected-figure,
  .protected-image-modal {
    display: none !important;
  }
}
.paper-box-text {
  flex: 1;
  min-width: 0;
  margin-left: -1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}
.paper-box-text .title {
  font-weight: 600;
  font-size: 1.06em;
  color: #1f2d3d;
  text-decoration: none;
  transition: color 0.2s ease;
}
.paper-box-text .title:hover { color: #0366d6; }
.paper-box-text .title a { color: inherit; text-decoration: none; }
.paper-box-text .title a:hover { color: #0366d6; }
.paper-box-text .authors { margin: 4px 0 3px 0; color: #333; font-size: 0.95em; }
.paper-box-text .venue { margin-bottom: 4px; color: #555; font-size: 0.95em; }
.paper-box-text .desc { font-size: 0.9em; margin: 6px 0 8px 0; color: #444; }
.paper-box-text .links a {
  margin-right: 10px;
  font-size: 0.9em;
  font-weight: 500;
  color: #0366d6;
  text-decoration: none;
}
.paper-box-text .links a:hover { text-decoration: underline; color: #005cc5; }
.badge {
  position: absolute; top: 6px; left: 6px;
  background: rgba(0, 0, 0, 0.72); color: #fff;
  padding: 2px 6px; border-radius: 4px; font-size: 0.75em;
  backdrop-filter: blur(4px);
}
.featured-work {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  gap: 6px;
  margin-left: 8px;
  padding: 4px 10px 4px 6px;
  border: 1px solid #f1b600;
  border-radius: 8px;
  background: #fffdf2;
  color: #c98a00;
  font-size: 0.78em;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}
.featured-work-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #d89b00;
  color: #ffffff;
  font-size: 12px;
  line-height: 1;
}

/* Education & Experience Cards */
.exp-card {
  display: flex; align-items: flex-start;
  background: #fdfdfd; border: 1px solid #eaeaea;
  border-radius: 8px; padding: 16px; margin-bottom: 16px;
  transition: background-color 0.2s;
}
.exp-card:hover { background: #f8f9fa; }
.exp-logo {
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  margin-right: 18px;
  border-radius: 4px;
  object-fit: contain;
}
.exp-content { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; min-height: 72px; }
.exp-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.exp-role { font-weight: 600; font-size: 1.05em; color: #24292e; margin: 0; }
.exp-role a { color: inherit; text-decoration: none; }
.exp-role a:hover,
.exp-role a:focus { color: #005cc5; text-decoration: none; }
.exp-time { font-size: 0.9em; color: #586069; white-space: nowrap; }
.exp-org { font-weight: 500; color: #0366d6; font-size: 0.95em; margin-bottom: 6px; }
.exp-desc { font-size: 0.9em; color: #444; margin: 0; line-height: 1.5; }

/* Highlights */
.highlight-award { font-weight: 600; color: #b31b1b; background: #fff0f0; padding: 2px 6px; border-radius: 4px; }
.highlight-honor { font-weight: 600; color: #005cc5; background: #f0f8ff; padding: 2px 6px; border-radius: 4px; }
.zh-translation { font-size: 0.85em; color: #666; font-weight: normal; }

@media (min-width: 900px) {
  #honors-awards + h1 + ul,
  #projects + h1 + ul {
    max-width: calc(100% - 12rem);
  }
}
</style>

<span class="anchor" id="education"></span>
# 🎓 Education

<div class="exp-card">
  <img src="{{ '/personal_image/Wuhan_Polytechnic_University_Emblem.svg.png' | relative_url }}" class="exp-logo" alt="Wuhan Polytechnic University logo">
  <div class="exp-content">
    <div class="exp-header">
      <h3 class="exp-role"><a href="https://www.whpu.edu.cn/" target="_blank" rel="noopener noreferrer">Wuhan Polytechnic University</a></h3>
      <span class="exp-time">Wuhan, China</span>
    </div>

    <div style="margin-top: 8px;">
      <div class="exp-header">
        <p class="exp-desc" style="font-size: 0.98em; margin: 0;"><em>Bachelor of Engineering in Architecture</em></p>
        <span class="exp-time">Sep. 2022 - Present</span>
      </div>
      <p class="exp-desc"><strong>GPA:</strong> 3.6/4</p>
    </div>

    <div style="margin-top: 12px;">
      <div class="exp-header">
        <p class="exp-desc" style="font-size: 0.98em; margin: 0;"><em>Minor in Electronic Information Engineering</em></p>
        <span class="exp-time">May 2023 - May 2025</span>
      </div>
      <p class="exp-desc"><strong>GPA:</strong> 3.6/4</p>
    </div>
  </div>
</div>


<span class="anchor" id="publications"></span>
# 📝 Publications
<div class='paper-box featured-paper'>
  <div class='paper-box-image'>
    <div class='badge'>JCR Q1</div>
    <img src="{{ '/personal_image/Sustainable Materials and Technologies-Wu-preview.jpg' | relative_url }}" data-full-src="{{ '/personal_image/Sustainable Materials and Technologies-Wu.jpg' | relative_url }}" alt="Sustainable Materials and Technologies publication image">
  </div>
  <div class='paper-box-text'>
    <div class="title"><a href="https://doi.org/10.1016/j.susmat.2026.e02016">Tailoring the performance of NaOH-activated phosphogypsum-GGBS-steel slag composites: Unraveling enhancement mechanisms through composition-property relationships</a><span class="featured-work"><span class="featured-work-icon">&#9733;</span><span>Featured Work</span></span></div>
    <div class="authors"><strong>Y. Wu</strong>, Z. Zheng, X. Wang, X. Li, G. Peng, Z. Liu, B. Hu, S. Zhu, J. Huang, X. Qin</div>
    <div class="venue"><em><strong>Sustainable Materials and Technologies</strong>, 48 (2026) e02016</em></div>
    <p class="desc"><strong>JCR Q1</strong>, Impact Factor = 9.2.</p>
  </div>
</div>

<div class='paper-box featured-paper'>
  <div class='paper-box-image'>
    <div class='badge'>JCR Q1</div>
    <img src="{{ '/images/project-placeholder.svg' | relative_url }}" alt="Construction and Building Materials revised publication placeholder">
  </div>
  <div class='paper-box-text'>
    <div class="title">In-situ Generation of Nanoscale Calcite and Monohydrocalcite via Low-L/S-Ratio Aqueous Carbonation of Alkali-Activated Steel Slag under Mild Conditions for Enhanced PG-GGBS Cementitious Materials<span class="featured-work"><span class="featured-work-icon">&#9733;</span><span>Featured Work</span></span></div>
    <div class="authors"><strong>Y. Wu</strong>, S. Zhu, Z. Liu, B. Hu, R. Luo, X. Qin</div>
    <div class="venue"><em><strong>Construction and Building Materials</strong></em></div>
    <p class="desc"><strong>JCR Q1</strong>, Impact Factor = 8.0. Status: Revised.</p>
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div class='badge'>JCR Q1</div>
    <img src="{{ '/images/project-placeholder.svg' | relative_url }}" alt="Journal of Environmental Management publication placeholder">
  </div>
  <div class='paper-box-text'>
    <div class="title"><a href="https://doi.org/10.1016/j.jenvman.2026.129753">Water resistance degradation and sulfate leaching behavior in phosphogypsum-based composite concrete: Simulation, mechanisms and coupling effects</a></div>
    <div class="authors">X. Wang, X. Qin, S. Zhu, G. Peng, <strong>Y. Wu</strong>, Z. Liu, B. Hu, J. Huang</div>
    <div class="venue"><em><strong>Journal of Environmental Management</strong>, 405 (2026) 129753</em></div>
    <p class="desc"><strong>JCR Q1</strong>, Impact Factor = 8.4.</p>
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div class='badge'>JCR Q1</div>
    <img src="{{ '/images/project-placeholder.svg' | relative_url }}" alt="Construction and Building Materials publication placeholder">
  </div>
  <div class='paper-box-text'>
    <div class="title"><a href="https://doi.org/10.1016/j.conbuildmat.2026.146819">Gel transformation promoted by Al-Na modification enhances the water resistance of phosphogypsum-based all solid waste cementitious materials</a></div>
    <div class="authors">G. Peng, S. Zhu, X. Wang, J. Zhang, <strong>Y. Wu</strong>, Z. Liu, B. Hu, X. Qin</div>
    <div class="venue"><em><strong>Construction and Building Materials</strong></em></div>
    <p class="desc"><strong>JCR Q1</strong>, Impact Factor = 8.0. 535 (2026) 146819.</p>
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div class='badge'>JCR Q1</div>
    <img src="{{ '/images/project-placeholder.svg' | relative_url }}" alt="ACS Applied Materials & Interfaces revised publication placeholder">
  </div>
  <div class='paper-box-text'>
    <div class="title">CO<sub>2</sub> Mineralization Pathways in Phosphogypsum-Based Cementitious Materials: Carbon Sequestration and Mechanical Enhancement</div>
    <div class="authors">J. Zhang, S. Zhu, G. Peng, X. Wang, <strong>Y. Wu</strong>, X. Qin</div>
    <div class="venue"><em><strong>ACS Applied Materials & Interfaces</strong></em></div>
    <p class="desc"><strong>JCR Q1</strong>, Impact Factor = 8.2. Status: Revised.</p>
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div class='badge'>JCR Q3</div>
    <img src="{{ '/images/project-placeholder.svg' | relative_url }}" alt="Journal of Material Cycles and Waste Management publication placeholder">
  </div>
  <div class='paper-box-text'>
    <div class="title"><a href="https://doi.org/10.1007/s10163-025-02425-y">Recycling phosphogypsum through two-stage calcination modification: development of high-performance all-solid-waste cementitious materials</a></div>
    <div class="authors">G. Peng, X. Qin, S. Zhu, X. Wang, J. Zhang, <strong>Y. Wu</strong>, Z. Liu, B. Hu, Jin Huang</div>
    <div class="venue"><em><strong>Journal of Material Cycles and Waste Management</strong>, 28 (2026) 445–464</em></div>
    <p class="desc"><strong>JCR Q3</strong>, Impact Factor = 3.0.</p>
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div class='badge'>EI Compendex</div>
    <img src="{{ '/images/project-placeholder.svg' | relative_url }}" alt="Science Technology and Engineering publication placeholder">
  </div>
  <div class='paper-box-text'>
    <div class="title"><a href="http://www.stae.com.cn/jsygc/article/abstract/2507214">Performance Optimization and Environmental Benefits of Nanosilica-Modified Phosphogypsum-Based Composite Concrete</a></div>
    <div class="authors">X. Wang, X. Qin, J. Zhang, G. Peng, S. Chen, <strong>Y. Wu</strong>, B. Hu, Z. Liu</div>
    <div class="venue"><em><strong>Science Technology and Engineering</strong></em></div>
    <p class="desc"><strong>EI Compendex</strong>. Status: Accepted.</p>
  </div>
</div>

<span class="anchor" id="patents"></span>
# 📰 Patents

<div class='paper-box'>
  <div class='paper-box-image'>
    <div class='badge'>Invention patent</div>
    <img src="{{ '/images/project-placeholder.svg' | relative_url }}" alt="Phosphogypsum cementitious material patent placeholder">
  </div>
  <div class='paper-box-text'>
    <div class="title"><a href="https://patents.google.com/patent/CN120590137A/en?oq=CN120590137A">Full-solid waste water-hardening cementitious material based on phosphogypsum and its preparation method and application</a></div>
    <div class="authors">X. Wang, X. Qin, Z. Zheng, <strong>Y. Wu</strong>, X. Li, G. Peng, Z. Liu, B. Hu, S. Zhu, J. Huang</div>
    <div class="venue"><em><strong>CN120590137A</strong>, 2025</em></div>
    <p class="desc">China Invention patent. Status: Pending.</p>
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div class='badge'>Utility model patent</div>
    <img src="{{ '/images/project-placeholder.svg' | relative_url }}" alt="Venetian blind patent placeholder">
  </div>
  <div class='paper-box-text'>
    <div class="title"><a href="https://patents.google.com/patent/CN223190347U/en?oq=CN223190347U">Venetian blind and adjusting mechanism</a></div>
    <div class="authors">H. Chen, Z. Li, <strong>Y. Wu</strong>, J. Han, Z. Tang, Y. Wang, C. Li</div>
    <div class="venue"><em><strong>CN223190347U</strong>, 2024</em></div>
    <p class="desc">China Utility model patent.</p>
  </div>
</div>

<span class="anchor" id="honors-awards"></span>
# 🏆 Awards

- **Second Prize**, The 19th 'Challenge Cup' National College Student Extracurricular Academic and Technological Works Competition, 2025. **(National Level)**
- **Second Prize**, The 13th Hubei Provincial 'Challenge Cup' College Students' Entrepreneurship Plan Competition, 2024. **(Provincial Level)**
- **Bronze Award**, Hubei Final of the China International College Students' Innovation Competition, 2024. **(Provincial Level)**
- **Second Prize**, The 11th International BIM Graduation Design Innovation Competition for Higher Education Institutions, 2025. **(National Level)**

<span class="anchor" id="projects"></span>
# 💻 Projects

- **Hubei Provincial Technological Innovation Program**, Key Technologies for Preparing Green Cementitious Materials from Phosphogypsum in Synergy with Multi-Source Solid Wastes and Industrial Demonstration of Multi-Scenario Applications, **No. 2025BCB081**.
- **Hubei Provincial Department of Education Science and Technology Plan Project**, Multi-Objective Optimization and Long-Term Performance Evolution Simulation of High-Belite Low-Carbon Phosphogypsum-Based Multi-Source Solid Waste Cementitious Materials, **Pending**.


<span class="anchor" id="research-experience"></span>
# 🔬 Research experience

<div class="timeline-container">
  <div class="timeline-item">
    <div class="timeline-date">2026.03</div>
    <div class="timeline-content">Released a public version of this academic homepage template with coding-agent-friendly onboarding.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2026.02</div>
    <div class="timeline-content">Refined the homepage structure to support publications, projects, honors, services, and CV maintenance.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2026.01</div>
    <div class="timeline-content">Added reusable publication cards, hover interactions, and a collapsible selected-projects section.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2025.12</div>
    <div class="timeline-content">Prepared placeholder content for interns, students, faculty, and research engineers to adapt quickly.</div>
  </div>

  <div class="timeline-item" style="margin-top: 16px;">
    <div class="timeline-date">2025.11</div>
    <div class="timeline-content">Set up GitHub Pages and an optional Google Scholar citation workflow for future customization.</div>
  </div>
  <!-- <details class="timeline-details">
    <summary class="timeline-summary">
      <span class="summary-text">Show more history ▾</span>
    </summary>
  </details> -->
</div>

<span class="anchor" id="services"></span>
# 💬 Services

- *2024.09 - 2025.01*, Teaching Assistant, Course Name, University Name.
- *2024.03 - 2024.06*, Reviewer / Organizer / Mentor, Program or Workshop Name.
- *2023.09 - 2024.01*, Volunteer Service / Reading Group / Lab Support, Organization Name.
