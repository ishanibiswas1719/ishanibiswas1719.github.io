import { Link } from "react-router-dom";
import { PageIntro } from "../Layout";
import { skills } from "../portfolio";

const steps = [
  { number: "01", verb: "Read", title: "Understand the brief", text: "Map the brand requirements, venue conditions, asset inventory, stakeholders and non-negotiable timelines." },
  { number: "02", verb: "Align", title: "Connect the moving parts", text: "Keep venue management, operations, accreditation and local teams clear on ownership and sequence." },
  { number: "03", verb: "Place", title: "Execute with precision", text: "Supervise signage, backdrops, mats, dugouts and sponsor assets against approved positions and standards." },
  { number: "04", verb: "Check", title: "Protect the finish", text: "Run quality-control checks, flag discrepancies and adapt quickly when the venue or match schedule changes." },
  { number: "05", verb: "Deliver", title: "Support the live moment", text: "Stay available through match-day operations, ceremonies and presentation protocols until the final handover." },
];

export default function PlaybookPage() {
  return (
    <div className="playbook-page">
      <PageIntro
        eyebrow="04 / Process"
        title={<>My match-day<br /><em>playbook.</em></>}
        note="A practical rhythm for turning a brand brief into an accurate, venue-ready and broadcast-conscious live environment."
      />

      <section className="play-steps">
        {steps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <p>{step.verb}</p>
            <h2>{step.title}</h2>
            <div className="step-line" aria-hidden="true" />
            <small>{step.text}</small>
          </article>
        ))}
      </section>

      <section className="skills-board">
        <div><p className="eyebrow">In the kit bag</p><h2>Skills I bring<br />to the team</h2></div>
        <div className="skill-stickers">
          {skills.map((skill, index) => <span style={{ "--i": index } as React.CSSProperties} key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="playbook-next">
        <span className="whistle" aria-hidden="true">◖</span>
        <p>Planning is useful.<br /><em>Knowing when to adapt is the real skill.</em></p>
        <Link to="/work">See the thinking in action →</Link>
      </section>
    </div>
  );
}
