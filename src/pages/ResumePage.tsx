import { PageIntro } from "../Layout";

export default function ResumePage() {
  return (
    <div className="resume-page paper-section">
      <PageIntro
        eyebrow="05 / Résumé & education"
        title={<>The one-page<br /><em>team sheet.</em></>}
        note="Experience, education and the practical skills I bring to events, brands, agencies and creative teams."
      />

      <section className="education-ticket" data-reveal>
        <div className="ticket-side"><span>EDU</span><strong>2023<br />—26</strong></div>
        <div className="ticket-main">
          <p>International Institute of Sports & Management</p>
          <h2>Bachelor’s in Sports Management</h2>
          <span>University of Mumbai</span>
        </div>
        <div className="ticket-score"><strong>7.91</strong><span>SGPA</span></div>
      </section>

      <section className="resume-viewer" data-reveal>
        <div className="resume-actions">
          <div><p className="eyebrow">Original résumé</p><h2>Everything at a glance.</h2></div>
          <div>
            <a href="/documents/Ishani-Biswas-CV.pdf" target="_blank" rel="noreferrer">Open PDF ↗</a>
            <a href="/documents/Ishani-Biswas-CV.pdf" download>Download ↓</a>
          </div>
        </div>
        <iframe src="/documents/Ishani-Biswas-CV.pdf" title="Ishani Biswas résumé" />
      </section>
    </div>
  );
}
