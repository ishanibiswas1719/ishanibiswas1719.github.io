import { Link } from "react-router-dom";
import { PageIntro } from "../Layout";
import { experiences } from "../portfolio";

export default function CreativeExperiencePage() {
  return (
    <div className="experience-page">
      <PageIntro
        eyebrow="02 / Experience"
        title={<>From concourse<br />to <em>ceremony.</em></>}
        note="The best event work is almost invisible: every asset is in place, every stakeholder knows the next move, and the audience only sees the magic."
      />

      <section className="experience-timeline" aria-label="Work experience">
        {experiences.map((experience, index) => (
          <article className="experience-story" key={experience.company} data-reveal>
            <div className="experience-number">0{index + 1}</div>
            <div className="experience-meta">
              <p>{experience.period}</p>
              <span>{experience.context}</span>
            </div>
            <div className="experience-main">
              <a href={experience.companyUrl} target="_blank" rel="noreferrer" className="company-link">
                {experience.company} ↗
              </a>
              <h2>{experience.role}</h2>
              <p className="experience-summary">{experience.summary}</p>
              <ul>
                {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
            <div className="experience-doodle" aria-hidden="true">
              {index === 0 ? <><span className="stadium-ring" /><b>match<br />ready</b></> : <><span className="position-mark">×</span><b>place.<br />check.<br />adapt.</b></>}
            </div>
          </article>
        ))}
      </section>

      <section className="experience-quote" data-reveal>
        <p>“Live events change the plan.<br /><em>Preparation protects the outcome.</em>”</p>
        <Link to="/playbook">See how I work →</Link>
      </section>
    </div>
  );
}
