import { Link } from "react-router-dom";
import { workItems } from "../portfolio";

export default function CreativeHomePage() {
  return (
    <div className="home-page">
      <section className="ribbon-hero" aria-labelledby="home-title">
        <div className="ribbon-title">
          <p className="eyebrow">Sports · stories · on-ground energy</p>
          <h1 id="home-title">Ishani’s<br /><em>playbook</em></h1>
          <div className="hero-ticket">
            <span>Admit one</span>
            <strong>Match-day<br />magic maker</strong>
            <small>Class of ’26</small>
          </div>
        </div>

        <nav className="ribbon-stack" aria-label="Explore the portfolio">
          <Link className="ribbon ribbon-about" to="/about">
            <span>01</span><strong>About the operator</strong>
            <img src="/images/ishani-portrait.jpg" alt="" />
            <i className="sparkle">✦</i>
          </Link>
          <Link className="ribbon ribbon-experience" to="/experience">
            <span>02</span><strong>From concourse to ceremony</strong><i>↗</i>
          </Link>
          <Link className="ribbon ribbon-work" to="/work">
            <span>03</span><strong>Selected work</strong>
            <img src="/images/work/red-bull-cover.jpg" alt="" />
          </Link>
          <Link className="ribbon ribbon-playbook" to="/playbook">
            <span>04</span><strong>My match-day playbook</strong><i className="ball">●</i>
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
          <h2>Sports runs on moments.<br /><em>I make sure the moment is ready.</em></h2>
          <p>
            I’m a sports management graduate with hands-on experience in venue coordination,
            stadium branding and match-day operations across major cricket tournaments.
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
          <div><strong>2</strong><span>operations engagements</span></div>
          <div><strong>7.91</strong><span>academic SGPA</span></div>
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

      <section className="home-cta">
        <p>Have a venue, a brand, or a big live moment?</p>
        <h2>Let’s make it<br /><em>land beautifully.</em></h2>
        <Link to="/contact">Start a conversation ↗</Link>
      </section>
    </div>
  );
}
