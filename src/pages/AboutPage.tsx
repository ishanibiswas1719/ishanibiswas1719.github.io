import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="about-page paper-section">
      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow">01 / About me</p>
          <h1>About <em>me</em></h1>
          <div className="about-paragraphs">
            <p>
              I’m Ishani—an early-career sports management professional who likes the part where a plan leaves the spreadsheet and meets a real venue.
            </p>
            <p>
              My experience sits between people, place and brand: coordinating venue stakeholders, protecting sponsor visibility, checking signage, supporting ceremonies and adapting when match day changes the plan.
            </p>
            <p>
              I’m drawn to sports, experiential marketing and live events because the details are practical, the energy is immediate, and good work becomes part of a memory shared by thousands of people.
            </p>
          </div>
        </div>
        <div className="about-photo collage-photo">
          <span className="photo-star">✦</span>
          <img src="/images/ishani-portrait.jpg" alt="Ishani Biswas" />
          <div className="about-note">comfortable with<br /><b>people, pressure<br />& moving parts.</b></div>
        </div>
      </section>

      <section className="about-numbers">
        <div><small>tournament environments</small><strong>4</strong><p>WPL · IPL · bilateral · ICC</p></div>
        <div><small>operations engagements</small><strong>2</strong><p>venue delivery & branding</p></div>
        <div><small>graduation year</small><strong>’26</strong><p>Bachelor’s in Sports Management</p></div>
      </section>

      <section className="values-section">
        <div className="values-title"><p className="eyebrow">The things I carry into every venue</p><h2>Values &<br /><em>philosophy</em></h2></div>
        <div className="values-grid">
          <article><span>01</span><h3>Clarity before speed</h3><p>Know the asset, owner, placement, timing and approval path before the clock gets loud.</p></article>
          <article><span>02</span><h3>Details are the experience</h3><p>A straight mat, clean backdrop or accurate sponsor position can decide whether a space looks broadcast-ready.</p></article>
          <article><span>03</span><h3>Stay useful under pressure</h3><p>Listen, communicate early and move toward the solution when schedules or venue conditions change.</p></article>
          <article><span>04</span><h3>Brand and audience belong together</h3><p>The strongest branding adds energy and meaning without getting in the way of the sport.</p></article>
        </div>
      </section>

      <section className="about-next">
        <p>Want the proof behind the story?</p>
        <Link to="/experience">Walk through my experience →</Link>
      </section>
    </div>
  );
}
