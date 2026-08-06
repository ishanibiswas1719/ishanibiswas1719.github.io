import { useState } from "react";
import { Link } from "react-router-dom";
import MediaLightbox from "../MediaLightbox";
import { aboutSnapshots, mainPortrait } from "../media";

export default function AboutPage() {
  const [activeSnapshot, setActiveSnapshot] = useState<number | null>(null);

  return (
    <div className="about-page paper-section">
      <section className="about-hero">
        <div className="about-copy" data-reveal>
          <p className="eyebrow">01 / About me</p>
          <h1>About <em>me</em></h1>
          <div className="about-paragraphs">
            <p>
              I’m Ishani—an early-career events and brand professional interested in creative strategy and the point where an idea leaves the deck and meets a real audience.
            </p>
            <p>
              My experience sits between people, place and brand: coordinating venue stakeholders, protecting sponsor visibility, checking signage, supporting ceremonies and adapting when live conditions change the plan.
            </p>
            <p>
              I’m drawn to events, experiential marketing and creative strategy because they ask for both imagination and follow-through. I like learning unfamiliar tools, breaking a brief into workable parts and staying with the detail until the output is genuinely useful.
            </p>
            <p>
              AI is becoming part of that toolkit. I use it actively to research, challenge first ideas, organise information and prototype—while checking the work, refining the voice and taking responsibility for the final decision.
            </p>
          </div>
        </div>
        <div className="about-photo collage-photo" data-reveal>
          <span className="photo-star">✦</span>
          <img src={mainPortrait} alt="Ishani Biswas" />
          <div className="about-note">comfortable with<br /><b>people, pressure<br />& moving parts.</b></div>
        </div>
      </section>

      <section className="about-snapshots" aria-labelledby="about-snapshots-title">
        <div className="snapshot-heading" data-reveal>
          <p className="eyebrow">A few frames from the journey</p>
          <h2 id="about-snapshots-title">Click a photo.<br /><em>Come a little closer.</em></h2>
          <p>Personal curiosity, global venue learning and the on-ground environments that continue to shape how I think.</p>
        </div>
        <div className="snapshot-collage" data-reveal>
          {aboutSnapshots.map((snapshot, index) => (
            <button
              className={`snapshot-card snapshot-${index + 1}`}
              type="button"
              onClick={() => setActiveSnapshot(index)}
              aria-label={`Open photo: ${snapshot.caption}`}
              key={snapshot.src}
            >
              <img
                src={snapshot.src}
                alt={snapshot.alt}
                loading={index === 0 ? "eager" : "lazy"}
                style={{ objectPosition: snapshot.focalPoint }}
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>open ↗</small>
            </button>
          ))}
        </div>
      </section>

      <section className="about-numbers" data-reveal>
        <div><small>event & tournament environments</small><strong>10</strong><p>live events · tournaments · multi-venue delivery</p></div>
        <div><small>operations engagements</small><strong>7</strong><p>event delivery · branding · coordination</p></div>
        <div><small>graduation year</small><strong>’26</strong><p>Bachelor’s in Sports Management</p></div>
      </section>

      <section className="values-section">
        <div className="values-title" data-reveal><p className="eyebrow">The things I carry into every project</p><h2>Values &<br /><em>philosophy</em></h2></div>
        <div className="values-grid" data-reveal>
          <article><span>01</span><h3>Curiosity with follow-through</h3><p>Ask the extra question, learn the unfamiliar tool and stay with the task until the thinking becomes usable.</p></article>
          <article><span>02</span><h3>Details are the experience</h3><p>A straight mat, clean backdrop or accurate sponsor position can decide whether a space looks broadcast-ready.</p></article>
          <article><span>03</span><h3>Stay useful under pressure</h3><p>Listen, communicate early and move toward the solution when schedules or venue conditions change.</p></article>
          <article><span>04</span><h3>Use tools; own the judgment</h3><p>AI can widen the search and speed up a prototype. Context, verification and accountability still belong to the person using it.</p></article>
        </div>
      </section>

      <section className="about-ai-belief">
        <div className="belief-label" data-reveal><span>Current curiosity</span><b>AI × LIVE IDEAS</b></div>
        <blockquote data-reveal>
          “Events, marketing and creative strategy reach huge audiences and are moving quickly on AI. I want to explore responsible practice when these systems shape operations, advertising, sponsorship, content and audience experiences.”
        </blockquote>
        <div className="belief-context" data-reveal>
          <p>
            I don’t claim a formal AI-governance research background yet. What I bring is a sports-rooted, hands-on understanding of compliance, sponsor assets and operational decisions under live-event pressure—a practical perspective I want to extend into events, marketing, advertising and creative work.
          </p>
          <Link to="/playbook">Explore my approach + AI lens →</Link>
        </div>
      </section>

      <section className="about-next" data-reveal>
        <p>Want the proof behind the story?</p>
        <Link to="/experience">Walk through my experience →</Link>
      </section>

      <MediaLightbox
        items={aboutSnapshots}
        activeIndex={activeSnapshot}
        onChange={setActiveSnapshot}
        onClose={() => setActiveSnapshot(null)}
      />
    </div>
  );
}
