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
              I’m Ishani—an early-career sports management professional interested in branding, advertising strategy and the point where an idea leaves the deck and meets a real audience.
            </p>
            <p>
              My experience sits between people, place and brand: coordinating venue stakeholders, protecting sponsor visibility, checking signage, supporting ceremonies and adapting when match day changes the plan.
            </p>
            <p>
              I’m drawn to sports, experiential marketing and creative strategy because they ask for both imagination and follow-through. I like learning unfamiliar tools, breaking a brief into workable parts and staying with the detail until the output is genuinely useful.
            </p>
            <p>
              AI is becoming part of that toolkit. I use it actively to research, challenge first ideas, organise information and prototype—while checking the work, refining the voice and taking responsibility for the final decision.
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
          <article><span>01</span><h3>Curiosity with follow-through</h3><p>Ask the extra question, learn the unfamiliar tool and stay with the task until the thinking becomes usable.</p></article>
          <article><span>02</span><h3>Details are the experience</h3><p>A straight mat, clean backdrop or accurate sponsor position can decide whether a space looks broadcast-ready.</p></article>
          <article><span>03</span><h3>Stay useful under pressure</h3><p>Listen, communicate early and move toward the solution when schedules or venue conditions change.</p></article>
          <article><span>04</span><h3>Use tools; own the judgment</h3><p>AI can widen the search and speed up a prototype. Context, verification and accountability still belong to the person using it.</p></article>
        </div>
      </section>

      <section className="about-ai-belief">
        <div className="belief-label"><span>Current curiosity</span><b>AI × SPORT</b></div>
        <blockquote>
          “Sports and live events reach huge audiences and are moving quickly on AI. I want to explore what responsible governance looks like when these systems shape officiating, sponsorship, broadcast decisions and fan experiences.”
        </blockquote>
        <div className="belief-context">
          <p>
            I don’t claim a formal AI-governance research background yet. What I bring is hands-on experience with compliance, sponsor assets and operational decisions under live-event pressure—a practical perspective I want to build on.
          </p>
          <Link to="/playbook">Explore my approach + AI lens →</Link>
        </div>
      </section>

      <section className="about-next">
        <p>Want the proof behind the story?</p>
        <Link to="/experience">Walk through my experience →</Link>
      </section>
    </div>
  );
}
