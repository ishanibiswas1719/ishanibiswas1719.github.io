import { useState } from "react";
import { Link } from "react-router-dom";
import { PageIntro } from "../Layout";
import MediaLightbox from "../MediaLightbox";
import { fieldStories } from "../media";
import { workItems } from "../portfolio";

const fieldMedia = fieldStories.flatMap((story) => story.media);

export default function WorkPage() {
  const [activeMedia, setActiveMedia] = useState<number | null>(null);

  return (
    <div className="work-page">
      <PageIntro
        eyebrow="03 / Work archive"
        title={<>Ideas, research &<br /><em>things made real.</em></>}
        note="A growing shelf of event concepts, industry research and first-hand documentation from work and learning delivered on the ground."
      />

      <section className="work-shelf">
        {workItems.map((item) => (
          <article className={`work-feature theme-${item.theme}`} key={item.slug} data-reveal>
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

      <section className="field-archive" aria-labelledby="field-archive-title">
        <header className="field-archive-heading" data-reveal>
          <div>
            <p className="eyebrow">Field notes · selected documentation</p>
            <h2 id="field-archive-title">Where the work<br /><em>met the real world.</em></h2>
          </div>
          <p>
            Venue identity, sponsor visibility, audience experience and operational detail—documented across live delivery and an international industrial visit.
          </p>
        </header>

        <div className="field-stories">
          {fieldStories.map((story) => (
            <article className="field-story" key={story.title}>
              <div className="field-story-copy" data-reveal>
                <p className="field-story-number">{story.number}</p>
                <p className="eyebrow">{story.eyebrow}</p>
                <h3>{story.title}</h3>
                <div className="field-story-meta"><span>{story.location}</span><span>{story.year}</span></div>
                <p>{story.summary}</p>
                <aside><b>My lens</b><span>{story.contribution}</span></aside>
              </div>
              <div className={`field-media-grid media-count-${story.media.length}`} data-reveal>
                {story.media.map((media) => {
                  const mediaIndex = fieldMedia.findIndex((item) => item.src === media.src);
                  return (
                    <button
                      className={media.type === "video" ? "field-media-card is-video" : "field-media-card"}
                      type="button"
                      onClick={() => setActiveMedia(mediaIndex)}
                      aria-label={`Open ${media.type}: ${media.caption}`}
                      key={media.src}
                    >
                      <img
                        src={media.type === "video" ? media.poster : media.src}
                        alt={media.alt}
                        loading="lazy"
                        style={{ objectPosition: media.focalPoint }}
                      />
                      {media.type === "video" && <span className="video-badge">Play video ▶</span>}
                      <small>{media.caption}</small>
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <MediaLightbox
        items={fieldMedia}
        activeIndex={activeMedia}
        onChange={setActiveMedia}
        onClose={() => setActiveMedia(null)}
      />
    </div>
  );
}
