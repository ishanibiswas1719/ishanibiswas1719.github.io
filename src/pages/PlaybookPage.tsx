import { Link } from "react-router-dom";
import { PageIntro } from "../Layout";
import { skills } from "../portfolio";

const steps = [
  { number: "01", verb: "Read", title: "Find the real question", text: "Map the audience, brand requirement, context, constraints and outcome before jumping to the visible answer." },
  { number: "02", verb: "Explore", title: "Build the option set", text: "Research references, use AI to widen the search, compare routes and look for the idea that best fits the brief." },
  { number: "03", verb: "Shape", title: "Turn insight into a system", text: "Structure the message, journey, asset plan and stakeholder sequence so the strategy can actually be delivered." },
  { number: "04", verb: "Test", title: "Prototype, check, refine", text: "Make the idea tangible, challenge assumptions, verify outputs and improve both the details and the story." },
  { number: "05", verb: "Deliver", title: "Own the final mile", text: "Communicate clearly, adapt when reality changes and stay responsible for the quality of the finished work." },
];

export default function PlaybookPage() {
  return (
    <div className="playbook-page">
      <PageIntro
        eyebrow="04 / Approach + AI"
        title={<>Curiosity needs<br /><em>a system.</em></>}
        note="My way of moving from a loose brief to clear thinking, an executable idea and a finish I can stand behind."
      />

      <section className="play-steps">
        {steps.map((step) => (
          <article key={step.number} data-reveal>
            <span>{step.number}</span>
            <p>{step.verb}</p>
            <h2>{step.title}</h2>
            <div className="step-line" aria-hidden="true" />
            <small>{step.text}</small>
          </article>
        ))}
      </section>

      <section className="ai-studio" aria-labelledby="ai-studio-title">
        <div className="ai-studio-heading" data-reveal>
          <p className="eyebrow">Inside my AI-assisted studio</p>
          <h2 id="ai-studio-title">Move faster.<br /><em>Think deeper.</em><br />Stay accountable.</h2>
          <p>
            I treat AI as an active collaborator for exploration and prototyping—not an autopilot for the final answer.
            The goal is better questions, clearer options and more time for judgment.
          </p>
        </div>
        <div className="ai-method-cards" data-reveal>
          <article><span>ASK</span><h3>Research & expand</h3><p>Surface references, clarify unfamiliar territory, compare perspectives and pressure-test the first idea.</p></article>
          <article><span>MAKE</span><h3>Prototype & communicate</h3><p>Structure decks, draft narratives, visualise directions and turn concepts into something people can react to.</p></article>
          <article><span>OWN</span><h3>Verify & decide</h3><p>Check claims, remove generic output, protect context and make the final recommendation with human judgment.</p></article>
        </div>
        <aside className="vibe-code-note" data-reveal>
          <span>Proof of practice ↗</span>
          <p>This portfolio was shaped through AI-assisted vibe coding: Ishani directed the story, structure, visual references and revisions while using AI to help turn the idea into a working site.</p>
        </aside>
      </section>

      <section className="governance-board">
        <div className="governance-title" data-reveal>
          <p className="eyebrow">Events · marketing · advertising · rooted in sport</p>
          <h2>What should responsible AI<br /><em>look like in creative work?</em></h2>
        </div>
        <div className="governance-grid" data-reveal>
          <article><span>01</span><p>Who is accountable when an AI-supported operational decision affects a live event?</p></article>
          <article><span>02</span><p>How should automated targeting, sponsorship or visibility decisions be explained and challenged?</p></article>
          <article><span>03</span><p>What should audiences know when AI shapes advertising, campaign content or personalised experiences?</p></article>
          <article><span>04</span><p>How do creative teams use AI at speed while protecting authorship, context and human judgment?</p></article>
        </div>
        <p className="governance-footnote" data-reveal>An emerging area of interest grounded in sports branding, sponsor compliance and live-event operations—and expanding into wider events, marketing and advertising practice.</p>
      </section>

      <section className="skills-board">
        <div data-reveal><p className="eyebrow">In the kit bag</p><h2>Skills I bring<br />to the team</h2></div>
        <div className="skill-stickers" data-reveal>
          {skills.map((skill, index) => <span style={{ "--i": index } as React.CSSProperties} key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="playbook-next" data-reveal>
        <span className="whistle" aria-hidden="true">◖</span>
        <p>Learn the tool. Question the output.<br /><em>Own what leaves the room.</em></p>
        <Link to="/work">See the thinking in action →</Link>
      </section>
    </div>
  );
}
