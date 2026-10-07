import { contactLocation, links } from "../data/portfolio.js";
import ArrowIcon from "./ArrowIcon.jsx";

function ContactSection() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="content-section section-wrap contact-section">
      <div className="contact-intro">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>
          Let&apos;s <span>Connect</span>
        </h2>
        <p>Feel free to reach out!</p>
      </div>

      <div className="contact-layout">
        <aside className="contact-info" aria-labelledby="contact-info-heading">
          <h3 id="contact-info-heading">Contact Information</h3>
          <a className="contact-detail" href={`mailto:${links.email}`}>
            <span>Email</span>
            <strong>{links.email}</strong>
            <ArrowIcon diagonal />
          </a>
          <div className="contact-detail">
            <span>Location</span>
            <strong>{contactLocation}</strong>
          </div>
          <div className="contact-socials">
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon diagonal />
              </a>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub <ArrowIcon diagonal />
              </a>
            )}
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button className="button button-primary contact-submit" type="submit">
            Send Message <ArrowIcon />
          </button>
          <p className="contact-form-note">
            Your email app will open with your message ready to send.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
