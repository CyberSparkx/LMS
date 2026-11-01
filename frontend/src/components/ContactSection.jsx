import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 600);
  };

  return (
    <section className="minimal-contact-section" id="contact-us" aria-label="Get in touch">
      <div className="minimal-contact-container">
        <div className="minimal-contact-grid">
          
          {/* Left Column: Contact Information */}
          <div className="contact-info-col">
            <h2 className="contact-main-heading">Get in touch</h2>

            <div className="contact-info-block">
              <span className="contact-block-label">Email:</span>
              <a href="mailto:surajcshub@gmail.com" className="contact-block-val">
                surajcshub@gmail.com
              </a>
            </div>

            <div className="contact-info-block">
              <span className="contact-block-label">Phone:</span>
              <a href="tel:+919876543210" className="contact-block-val">
                +91 98765 43210
              </a>
            </div>

            <div className="contact-info-block">
              <span className="contact-block-label">Address:</span>
              <p className="contact-address-text">
                Suraj CS Hub, Main Road, Near Central Market,<br />
                Commercial Complex 2nd Floor, IT Training Wing
              </p>
            </div>

            <div className="contact-social-row">
              <span className="contact-block-label">Follow us</span>
              <div className="social-icons-group">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-circle-link" 
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-circle-link" 
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-circle-link" 
                  aria-label="LinkedIn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-circle-link" 
                  aria-label="Twitter / X"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-actual-form">
              <div className="form-two-cols">
                <div className="form-field-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write something...."
                  className="form-textarea"
                  rows={5}
                  required
                />
              </div>

              {submitted && (
                <div className="form-success-banner" role="status">
                  <CheckCircle2 size={18} />
                  <span>Thank you! Your message has been sent to Suraj CS Hub admissions.</span>
                </div>
              )}

              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
