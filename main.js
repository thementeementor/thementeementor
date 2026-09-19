import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Concept 2 Rank home">
      <span class="brand-mark"><span>V</span><i></i></span>
      <span class="brand-copy"><strong>CONCEPT 2 RANK</strong><small>Biology by Venkatesh K.</small></span>
    </a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="main-nav" aria-label="Main navigation">
      <a class="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#courses">Courses</a>
      <a href="#resources">Study Material</a>
      <a href="#videos">Videos</a>
      <a href="#gallery">Gallery</a>
      <a href="#testimonials">Student Speak</a>
      <a href="#contact">Contact</a>
      <a class="nav-cta" href="#courses"><span>▶</span> Start Learning <b>→</b></a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-glow"></div>
      <div class="hero-sidebar">
        <span class="quote-mark">“</span>
        <p>Right<br>Concepts<br>Create<br>Bright<br>Futures</p>
        <span class="yellow-stroke"></span>
      </div>
      <div class="hero-content">
        <p class="eyebrow">THE SMART WAY TO LEARN BIOLOGY</p>
        <h1>CONCEPT <em>2</em><br><strong>RANK</strong></h1>
        <div class="hero-divider"><span>SIMPLIFY</span><i></i><span>UNDERSTAND</span><i></i><span>PRACTICE</span><i></i><span>EXCEL</span></div>
        <p class="hero-script">Turning Biology Concepts<br>into Medical Dreams...</p>
        <div class="value-points">
          <div><span class="point-icon">◫</span><b>Concept<br>Clarity</b></div>
          <div><span class="point-icon">◉</span><b>Visual<br>Learning</b></div>
          <div><span class="point-icon">◎</span><b>Question<br>Practice</b></div>
          <div><span class="point-icon">▟</span><b>Performance<br>Tracking</b></div>
        </div>
        <a class="primary-btn" href="#courses">Explore My Courses <span>→</span></a>
      </div>
      <div class="hero-portrait">
        <div class="portrait-ring"></div>
        <img src="img.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Biology teacher in a maroon shirt">
        <div class="teacher-card"><strong>VENKATESH <b>K</b></strong><span>Sr. Zoology Faculty</span><small>Expert in Biology&nbsp; | &nbsp;NEET Faculty</small></div>
      </div>
      <div class="success-note"><span>NEET<br><b>SUCCESS</b></span><small>Turn your<br>dream into a rank</small></div>
      <div class="roadmap">
        <div class="road-step purple"><b>01</b><span>NCERT<br>FOUNDATION</span></div>
        <div class="road-step pink"><b>02</b><span>STRUCTURED<br>LEARNING</span></div>
        <div class="road-step orange"><b>03</b><span>CONCEPT<br>STRENGTHENING</span></div>
        <div class="road-step gold"><b>04</b><span>REVISION<br>& MCQ PRACTICE</span></div>
        <div class="road-step teal"><b>05</b><span>MOCK TESTS<br>& ANALYSIS</span></div>
        <div class="road-step green"><b>06</b><span>ACHIEVE<br>YOUR RANK</span></div>
      </div>
      <div class="hero-note">Better<br><i>Students</i><br>Brighter<br><i>Doctors</i><span class="note-line"></span></div>
    </section>

    <section class="stats" aria-label="Student results">
      <div class="stat"><span class="stat-icon">+</span><div><strong>200<span>+</span></strong><p>Students Selected<br>for MBBS</p></div></div>
      <div class="stat"><span class="stat-icon tooth">◉</span><div><strong>400<span>+</span></strong><p>Students Qualified for<br>BAMS &amp; BDS</p></div></div>
      <div class="stat"><span class="stat-icon people">●●</span><div><strong>200<span>+</span></strong><p>NEET Qualified<br>Students</p></div></div>
      <div class="stat"><span class="stat-icon cap">⌂</span><div><strong>300<span>+</span></strong><p>Students in<br>Other Courses</p></div></div>
      <div class="stat highlight"><span class="star">★</span><div><strong>Many Students</strong><p>Scored <b>180/180</b><br>in Zoology</p></div></div>
    </section>

    <section class="features" id="resources">
      <div class="feature"><span class="round-icon">▶</span><p>Digital<br>Classes</p></div>
      <div class="feature"><span class="round-icon">▤</span><p>Chapter Wise<br>Notes</p></div>
      <div class="feature"><span class="round-icon">?</span><p>MCQ Practice<br>&amp; Tests</p></div>
      <div class="feature"><span class="round-icon">↓</span><p>Study<br>Material</p></div>
      <div class="feature"><span class="round-icon">●</span><p>Doubt<br>Support</p></div>
      <div class="feature"><span class="round-icon">▥</span><p>Performance<br>Analysis</p></div>
      <div class="feature-tag">Learn<br><i>Practice</i><br>Achieve<span></span></div>
    </section>

    <section class="below-fold" id="about">
      <div><p class="eyebrow dark">WHY CONCEPT 2 RANK</p><h2>Build the right<br><em>concepts first.</em></h2></div>
      <p>Biology becomes easier when every chapter connects. Learn with clear explanations, smart revision, and practice designed to move you closer to your dream medical college.</p>
      <a class="outline-btn" href="#contact">Meet your mentor <span>→</span></a>
    </section>
    <section class="anchor-strip" id="courses"><h2>Courses built for every stage of your journey.</h2><a href="#contact">View all courses →</a></section>
    <section id="videos" class="hidden-anchor"></section><section id="gallery" class="hidden-anchor"></section><section id="testimonials" class="hidden-anchor"></section><section id="contact" class="hidden-anchor"></section>
  </main>
`

const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.main-nav')
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
})

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open')
    menuToggle.setAttribute('aria-expanded', 'false')
  })
})

const header = document.querySelector('.site-header')
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true })
