import { Link, useParams } from "react-router-dom";
import { workItems } from "../portfolio";

export default function WorkDetailPage() {
  const { slug } = useParams();
  const item = workItems.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <section className="not-found paper-section">
        <p className="eyebrow">That folder is empty</p>
        <h1>Project not found.</h1>
        <Link to="/work">Return to the work archive →</Link>
      </section>
    );
  }

  return (
    <article className={`case-study case-${item.theme}`}>
      <header className="case-hero">
        <div className="case-title-block">
          <Link className="back-link" to="/work">← Work archive</Link>
          <p>{item.category} · {item.year}</p>
          <h1>{item.title}</h1>
          <div className="case-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <div className="case-cover-wrap">
          <img src={item.cover} alt={`Cover of ${item.title}`} />
          <span>{item.pages}</span>
        </div>
      </header>

      <section className="case-brief">
        <div><p className="eyebrow">The brief</p><h2>{item.brief}</h2></div>
        <div className="case-role"><small>My contribution</small><p>{item.role}</p></div>
      </section>

      <section className="case-highlights">
        {item.highlights.map((highlight, index) => (
          <article key={highlight.title}>
            <span>0{index + 1}</span>
            <h3>{highlight.title}</h3>
            <p>{highlight.text}</p>
          </article>
        ))}
      </section>

      <section className="case-previews">
        <div className="case-previews-heading">
          <p className="eyebrow">Inside the document</p>
          <h2>A few pages<br /><em>from the work.</em></h2>
        </div>
        <div className="preview-collage">
          {item.previews.map((preview, index) => (
            <figure className={`preview preview-${index + 1}`} key={preview.src}>
              <img src={preview.src} alt={preview.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="case-document">
        <div>
          <p className="eyebrow">Full work sample</p>
          <h2>Curious about<br />the details?</h2>
          <p>Open the complete original PDF or save a copy to read later.</p>
        </div>
        <div className="document-actions">
          <a href={item.document} target="_blank" rel="noreferrer">Open PDF ↗</a>
          <a href={item.document} download>Download ↓</a>
        </div>
      </section>
    </article>
  );
}
