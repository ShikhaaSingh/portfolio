import { useState } from "react";
import { contactLocation, links } from "../data/portfolio.js";

function ContactSection() {
  const [submissionMessage, setSubmissionMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setSubmissionMessage("Please complete all fields before sending.");
      return;
    }

    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmissionMessage(
      "Your email app should open so you can review and send your message. If it doesn't, email",
    );
    window.location.href = mailto;
  }

  return (
    <section className="content-section section-wrap contact-section">
      <div className="contact-intro">
        <h2>
          Let&apos;s <span>Connect</span>
        </h2>
        <p>Feel free to reach out!</p>
      </div>

      <div className="contact-layout">
        <aside className="contact-info" aria-labelledby="contact-info-heading">
          <h3 id="contact-info-heading">Contact Information</h3>
          <a className="contact-detail" href={`mailto:${links.email}`}>
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                <path d="m4.5 7 7.5 6 7.5-6" />
              </svg>
            </span>
            <span className="contact-detail-copy">
              <span>Email</span>
              <strong>{links.email}</strong>
            </span>
          </a>
          <div className="contact-detail">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 10.2c0 5-7 10.3-7 10.3S5 15.2 5 10.2a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2.3" />
              </svg>
            </span>
            <span className="contact-detail-copy">
              <span>Location</span>
              <strong>{contactLocation}</strong>
            </span>
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
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="m21 3-7.2 18-3.7-7.1L3 10.2 21 3Z" />
              <path d="m10.1 13.9 4.5-4.5" />
            </svg>
            Send Message
          </button>
          {submissionMessage && (
            <p className="contact-form-note" role="status" aria-live="polite">
              {submissionMessage}{" "}
              <a href={`mailto:${links.email}`}>{links.email}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
