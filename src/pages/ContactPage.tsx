export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-stage">
        <div className="contact-copy">
          <p className="eyebrow">06 / Next steps</p>
          <h1>Let’s make the<br />next idea <em>real.</em></h1>
          <p>I’m exploring branding, advertising strategy, experiential marketing and AI-enabled project roles across sports, agencies and ambitious brands.</p>
        </div>

        <div className="contact-pass">
          <div className="pass-top"><span>ALL ACCESS</span><small>CAREER / 2026</small></div>
          <div className="pass-body">
            <img src="/images/ishani-portrait.jpg" alt="Ishani Biswas" />
            <div><small>Name</small><strong>Ishani Biswas</strong><small>Focus</small><strong>Brand + experience strategy</strong></div>
          </div>
          <div className="barcode" aria-hidden="true" />
        </div>

        <div className="contact-options">
          <a href="mailto:ishanibiswas017@gmail.com"><span>Email</span><strong>ishanibiswas017@gmail.com</strong><i>↗</i></a>
          <a href="tel:+917605060507"><span>Call</span><strong>+91 76050 60507</strong><i>↗</i></a>
          <a href="https://www.linkedin.com/in/ishani-biswas-6a5760292" target="_blank" rel="noreferrer"><span>Connect</span><strong>LinkedIn</strong><i>↗</i></a>
        </div>
        <p className="contact-note">Available for opportunities in India · Open to travel</p>
      </section>
    </div>
  );
}
