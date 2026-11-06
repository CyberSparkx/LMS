import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Award, 
  Users, 
  Send 
} from 'lucide-react';
import './AboutContactView.css';

export default function AboutContactView({ initialTab = 'about' }) {
  const [activeSubTab, setActiveSubTab] = useState(initialTab);
  const [inquirySent, setInquirySent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveSubTab(initialTab);
  }, [initialTab]);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="about-contact-container">
      <div className="subtab-toggle-pill">
        <button
          type="button"
          className={`subtab-btn ${activeSubTab === 'about' ? 'active' : ''}`}
          onClick={() => {
            setActiveSubTab('about');
            navigate('/about');
          }}
        >
          About Suraj CS Hub
        </button>
        <button
          type="button"
          className={`subtab-btn ${activeSubTab === 'contact' ? 'active' : ''}`}
          onClick={() => {
            setActiveSubTab('contact');
            navigate('/contact');
          }}
        >
          Contact & Center Location
        </button>
      </div>

      {activeSubTab === 'about' ? (
        <div className="about-view-wrapper">
          <div className="about-header-text">
            <span className="about-badge">EXCELLENCE SINCE 2014</span>
            <h2 className="about-title">About Suraj CS Hub</h2>
            <p className="about-lead">
              Suraj CS Hub is a premier computer education center dedicated to providing accessible, practical, and certified IT training.
            </p>
          </div>

          <div className="about-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-ico-box">
                <Users size={22} />
              </div>
              <h3>Strict 4-Student Batches</h3>
              <p>
                Unlike overcrowded coaching centers, we cap each batch at strictly 4 students. You get your own dedicated PC, instant doubt clearing, and personal mentorship.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-ico-box">
                <Award size={22} />
              </div>
              <h3>Govt. Recognized Diplomas</h3>
              <p>
                Our ADCA, DCA, and CCC certifications are recognized for government exams, private enterprise hiring, and university college degree credits.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-ico-box">
                <Building2 size={22} />
              </div>
              <h3>Hybrid LMS + Android App</h3>
              <p>
                Students receive access to our modern LMS portal and offline Android app to rewatch lab videos, download notes, and track fee payment receipts.
              </p>
            </div>
          </div>

          <div className="mentor-spotlight-box">
            <div className="mentor-photo-wrap">
              <img src="/assets/mentor.jpg" alt="Prof. Suraj" className="mentor-photo-large" />
            </div>
            <div className="mentor-bio-text">
              <span className="founder-tag">HEAD INSTRUCTOR & FOUNDER</span>
              <h3>Prof. Suraj</h3>
              <p>
                With over 12+ years of hands-on teaching experience, Prof. Suraj has mentored 60,000+ students across ADCA diplomas, web development, data structures, and university curricula.
              </p>
              <div className="bio-bullets">
                <div className="bullet-row">
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>1-on-1 practical lab training every day</span>
                </div>
                <div className="bullet-row">
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>100% placement & job-interview preparation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="contact-view-wrapper">
          <div className="contact-grid">
            {/* Center Info */}
            <div className="contact-info-panel">
              <span className="contact-badge">GET IN TOUCH</span>
              <h2>Visit Our Computer Center</h2>
              <p className="contact-p">
                Drop by our campus during lab hours or give us a call to discuss admission and batch timings.
              </p>

              <div className="center-details-list">
                <div className="detail-item">
                  <MapPin size={20} className="detail-ico" />
                  <div>
                    <strong>Campus Address:</strong>
                    <p>Suraj CS Hub, Main Road, Near Central Market, Commercial Complex 2nd Floor</p>
                  </div>
                </div>

                <div className="detail-item">
                  <Phone size={20} className="detail-ico" />
                  <div>
                    <strong>Phone / WhatsApp:</strong>
                    <p>+91 98765 43210 / +91 91234 56789</p>
                  </div>
                </div>

                <div className="detail-item">
                  <Mail size={20} className="detail-ico" />
                  <div>
                    <strong>Email Support:</strong>
                    <p>admissions@surajcshub.com</p>
                  </div>
                </div>

                <div className="detail-item">
                  <Clock size={20} className="detail-ico" />
                  <div>
                    <strong>Lab Operating Hours:</strong>
                    <p>Monday – Saturday: 7:00 AM – 8:30 PM (Sunday Closed)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="contact-form-panel">
              {!inquirySent ? (
                <form onSubmit={handleInquirySubmit} className="inquiry-form">
                  <h3>Send Quick Admission Inquiry</h3>
                  <p>Leave your details and Prof. Suraj will reach out with the latest batch schedule.</p>

                  <div className="field-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="e.g. Rahul Sharma" required />
                  </div>

                  <div className="field-group">
                    <label>Phone / WhatsApp Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>

                  <div className="field-group">
                    <label>Course Interested In</label>
                    <select required>
                      <option>ADCA (12 Months Diploma)</option>
                      <option>DCA (6 Months Diploma)</option>
                      <option>Full-Stack Web Engineering</option>
                      <option>Python & Machine Learning</option>
                      <option>CCC (Computer Concepts)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-send-inquiry">
                    <Send size={15} />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="inquiry-success-box">
                  <CheckCircle2 size={44} className="inquiry-success-check" />
                  <h3>Inquiry Received!</h3>
                  <p>Thank you! Our admission desk will call or WhatsApp you shortly with fee details and available seat slots.</p>
                  <button type="button" className="btn-subtab-reset" onClick={() => setInquirySent(false)}>
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
