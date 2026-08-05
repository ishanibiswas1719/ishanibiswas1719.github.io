import { Link } from "react-router-dom";
import { PageIntro } from "../Layout";
import { workItems } from "../portfolio";

export default function WorkPage() {
  return (
    <div className="work-page">
      <PageIntro
        eyebrow="03 / Work archive"
        title={<>Ideas, research &<br /><em>things made real.</em></>}
        note="A growing shelf of event concepts, industry research and—soon—photographs from work delivered on the ground."
      />

      <section className="work-shelf">
        {workItems.map((item) => (
          <article className={`work-feature theme-${item.theme}`} key={item.slug}>
            <div className="work-feature-image">
              <img src={item.cover} alt={`Cover of ${item.title}`} />
              <span>{item.pages}</span>
            </div>
            <div className="work-feature-copy">
              <p className="work-kicker">{item.number} / {item.category} / {item.year}</p>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link to={`/work/${item.slug}`}>Explore the project <span>↗</span></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="field-gallery">
        <div className="field-gallery-heading">
          <p className="eyebrow">Field gallery</p>
          <h2>Notes from<br /><em>the touchline</em></h2>
          <p>This space is designed to grow with match-day photographs, installation details and stories from future events.</p>
        </div>
        <div className="gallery-stack" aria-label="Future field gallery">
          <div className="gallery-card gallery-card-one"><span>01</span><strong>Venue set-up</strong><p>before the gates open</p></div>
          <div className="gallery-card gallery-card-two"><span>02</span><strong>Brand assets</strong><p>from placement to broadcast</p></div>
          <div className="gallery-card gallery-card-three"><span>03</span><strong>Live moments</strong><p>ceremonies, teams & delivery</p></div>
          <div className="gallery-coming-soon">photos<br />coming<br /><em>soon ✦</em></div>
        </div>
      </section>
    </div>
  );
}
