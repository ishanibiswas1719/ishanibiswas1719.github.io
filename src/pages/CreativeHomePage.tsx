import { Link } from "react-router-dom";
import { workItems } from "../portfolio";

export default function CreativeHomePage() {
  return (
    <div className="home-page">
      <section className="ribbon-hero" aria-labelledby="home-title">
        <div className="ribbon-title">
          <p className="eyebrow">Brand strategy · live sport · AI-enabled creativity</p>
          <h1 id="home-title">Ishani’s<br /><em>playbook</em></h1>
          <div className="hero-ticket">
            <span>Admit one</span>
            <strong>Ideas that<br />show up IRL</strong>
            <small>Class of ’26</small>
          </div>
        </div>

        <nav className="ribbon-stack" aria-label="Explore the portfolio">
          <Link className="ribbon ribbon-about" to="/about">
            <span>01</span><strong>The person behind the playbook</strong>
            <img src="/images/ishani-portrait.jpg" alt="" />
            <i className="sparkle">✦</i>
          </Link>
          <Link className="ribbon ribbon-experience" to="/experience">
            <span>02</span><strong>Brands, venues & live pressure</strong><i>↗</i>
          </Link>
          <Link className="ribbon ribbon-work" to="/work">
            <span>03</span><strong>Campaign thinking & research</strong>
            <img src="/images/work/red-bull-cover.jpg" alt="" />
          </Link>
          <Link className="ribbon ribbon-playbook" to="/playbook">
            <span>04</span><strong>Strategy, systems & AI</strong><i className="ball">●</i>
          </Link>
          <Link className="ribbon ribbon-resume" to="/resume">
            <span>05</span><strong>Résumé & education</strong><i>↗</i>
          </Link>
          <Link className="ribbon ribbon-contact" to="/contact">
            <span>06</span><strong>Next fixture?</strong><i className="butterfly">༺</i>
          </Link>
        </nav>
        <p className="hero-page-no">01 / 07</p>
      </section>

      <section className="home-intro paper-section">
        <div className="intro-copy">
          <p className="eyebrow">Hello, I’m Ishani</p>
          <h2>I connect brand ideas<br /><em>to moments people can feel.</em></h2>
          <p>
            I’m a sports management graduate working at the intersection of branding,
            experiential strategy and live execution—with hands-on experience across major cricket tournaments
            and a growing AI-enabled creative practice.
          </p>
          <Link className="text-arrow" to="/about">Get to know me <span>→</span></Link>
        </div>
        <div className="intro-portrait collage-photo">
          <div className="tape" />
          <img src="/images/ishani-portrait.jpg" alt="Ishani Biswas smiling" />
          <p>calm under pressure,<br />curious by nature ✦</p>
        </div>
        <div className="intro-stats">
          <div><strong>4</strong><span>tournament environments</span></div>
          <div><strong>2</strong><span>deep-dive portfolio projects</span></div>
          <div><strong>AI</strong><span>used to explore, prototype & learn</span></div>
        </div>
      </section>

      <section className="role-compass" aria-labelledby="role-compass-title">
        <div className="role-compass-heading">
          <p className="eyebrow">Where I want to make an impact</p>
          <h2 id="role-compass-title">Part operator.<br /><em>Part brand thinker.</em></h2>
          <p>I bring a ground-level understanding of how a brand promise survives real venues, real audiences and real deadlines.</p>
        </div>
        <div className="role-cards">
          <article><span>01</span><h3>Branding & sponsor strategy</h3><p>Turning identity, rights and visibility requirements into consistent audience-facing moments.</p></article>
          <article><span>02</span><h3>Experiential advertising</h3><p>Building participatory ideas that connect product, place, culture and shareable behaviour.</p></article>
          <article><span>03</span><h3>Creative strategy & research</h3><p>Finding the useful insight, structuring the story and making the recommendation easy to act on.</p></article>
          <article><span>04</span><h3>AI-enabled workflows</h3><p>Using AI to explore faster, prototype clearly and ask better questions—then applying human judgment.</p></article>
        </div>
      </section>

      <section className="featured-work-section">
        <div className="section-heading-row">
          <div><p className="eyebrow">A peek inside the folder</p><h2>Selected work</h2></div>
          <Link className="text-arrow" to="/work">See the archive <span>→</span></Link>
        </div>
        <div className="home-work-grid">
          {workItems.map((item, index) => (
            <Link className={`home-work-card theme-${item.theme}`} to={`/work/${item.slug}`} key={item.slug}>
              <div className="home-work-image"><img src={item.cover} alt="" /></div>
              <div className="home-work-copy">
                <span>{item.number} / {item.category}</span>
                <h3>{item.shortTitle}</h3>
                <p>{item.summary}</p>
                <small>{index === 0 ? "Open the deck" : "Open the study"} ↗</small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="ai-teaser">
        <div className="ai-orbit" aria-hidden="true"><span>AI</span><i>✦</i></div>
        <div>
          <p className="eyebrow">A new question in my notebook</p>
          <h2>Sport is adopting AI quickly.<br /><em>Its governance needs to keep pace.</em></h2>
          <p>
            My experience with compliance under match-day pressure makes me curious about accountability
            when AI influences officiating, sponsorship decisions, broadcasts or fan experiences.
          </p>
          <Link className="text-arrow" to="/playbook">See how I use—and question—AI <span>→</span></Link>
        </div>
      </section>

      <section className="home-cta">
        <p>Have a brand question, a live brief, or a new tool to explore?</p>
        <h2>Let’s make it<br /><em>land beautifully.</em></h2>
        <Link to="/contact">Start a conversation ↗</Link>
      </section>
    </div>
  );
}
