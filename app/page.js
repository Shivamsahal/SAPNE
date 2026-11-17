const programs = [
  {
    number: '01',
    title: 'Learning for every child',
    description:
      'We help make learning resources and supportive spaces more accessible to children in underserved communities.',
    theme: 'sage',
    icon: '✳',
  },
  {
    number: '02',
    title: 'Confidence for what’s next',
    description:
      'A little guidance can open a lot of doors. We encourage young people to imagine a future full of possibility.',
    theme: 'peach',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Digital skills, real-world futures',
    description:
      'By promoting digital literacy and online learning, we help learners find their place in a changing world.',
    theme: 'yellow',
    icon: '⌘',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="SAPNE home">
          <span className="brand-mark" aria-hidden="true">s</span>
          <span className="brand-name">sapne<span>.</span></span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#our-work">Our work</a>
          <a href="#about">Our story</a>
          <a href="#get-involved">Get involved</a>
        </nav>

        <a className="header-cta" href="mailto:contact@sapne-ngo.org?subject=Supporting%20SAPNE">
          Support our work <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/kids.jpg"
          alt="Schoolchildren smiling together on their way to class"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span /> A little hope goes a long way</p>
          <h1 id="hero-title">Every child<br />deserves a <em>chance</em><br />to dream.</h1>
          <p className="hero-copy">
            We believe education can change the shape of a future. Together, let’s make room for every dream to grow.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#our-work">Discover our work <span aria-hidden="true">↘</span></a>
            <a className="text-link hero-text-link" href="#about">Get to know SAPNE <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <p className="hero-note"><span>✳</span> Rooted in community. Growing with possibility.</p>
        <a className="scroll-cue" href="#about" aria-label="Scroll to learn about SAPNE">↓</a>
      </section>

      <section className="intro-section" id="about">
        <div className="intro-label">
          <span className="section-index">01 / WHO WE ARE</span>
          <span className="intro-spark" aria-hidden="true">✳</span>
        </div>
        <div className="intro-copy">
          <h2>Big dreams begin with <em>being seen.</em></h2>
          <p>
            SAPNE — Support Association for Promoting Nationwide Education — is an NGO working to bring more opportunity, encouragement, and learning within reach.
          </p>
          <a className="text-link" href="mailto:contact@sapne-ngo.org">Let’s make it happen <span aria-hidden="true">→</span></a>
        </div>
        <div className="intro-stamp" aria-label="Sapne means dreams">
          <span className="stamp-star">✳</span>
          <span>sapne means<br /><strong>dreams</strong></span>
        </div>
      </section>

      <section className="work-section" id="our-work">
        <div className="section-heading">
          <div>
            <span className="section-index">02 / WHAT WE BELIEVE IN</span>
            <h2>A brighter future,<br /><em>built together.</em></h2>
          </div>
          <p>Every child’s journey is different. Our work starts with a simple belief: the right support can help possibility take root.</p>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className={`program-card ${program.theme}`} key={program.number}>
              <div className="card-topline">
                <span>{program.number}</span>
                <span className="program-icon" aria-hidden="true">{program.icon}</span>
              </div>
              <div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
              <span className="card-bottom-mark" aria-hidden="true">SAPNE · LEARN · GROW</span>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <span className="quote-mark" aria-hidden="true">“</span>
        <p>When a child believes in tomorrow,<br />the whole world gets a little <em>brighter.</em></p>
        <span className="quote-flower" aria-hidden="true">✳</span>
      </section>

      <section className="involved-section" id="get-involved">
        <div className="involved-copy">
          <span className="section-index">03 / A PLACE FOR YOU</span>
          <h2>Dreams grow<br />better <em>together.</em></h2>
          <p>Share your time, ideas, or support. There’s more than one way to help a brighter future take shape.</p>
          <a className="button button-dark" href="mailto:contact@sapne-ngo.org?subject=I%27d%20love%20to%20get%20involved">
            Let’s make a difference <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="involved-art" aria-hidden="true">
          <div className="art-sun" />
          <div className="art-circle"><span>every<br />dream<br /><em>matters</em></span></div>
          <span className="art-spark art-spark-one">✳</span>
          <span className="art-spark art-spark-two">✳</span>
          <span className="art-caption">a hopeful future, made together</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">s</span>
          <span className="brand-name">sapne<span>.</span></span>
        </a>
        <p>Support Association for Promoting Nationwide Education</p>
        <a className="footer-email" href="mailto:contact@sapne-ngo.org">Say hello <span aria-hidden="true">↗</span></a>
        <span className="footer-credit">Made with hope, for every dream. © SAPNE</span>
      </footer>
    </main>
  );
}
