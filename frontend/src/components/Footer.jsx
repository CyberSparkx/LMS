import React, { useState } from 'react';
import { 
  Terminal, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Download, 
  User, 
  ShieldCheck, 
  ChevronRight, 
  X,
  FileText,
  Calendar,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import './Footer.css';

export default function Footer({
  onSelectTab,
  onOpenLogin,
  onOpenBookSeat,
  onOpenDownloadApp
}) {
  const [activePolicyModal, setActivePolicyModal] = useState(null); // 'privacy' | 'terms' | 'refund' | null

  const handleLinkClick = (tabId) => {
    if (tabId === 'download-app') {
      onOpenDownloadApp();
    } else {
      onSelectTab(tabId);
    }
  };

  return (
    <footer className="hub-footer" aria-label="Website Footer">
      {/* Top Pre-Footer Banner / Callout */}
      <div className="footer-cta-banner">
        <div className="cta-banner-content">
          <div className="cta-badge">
            <Sparkles size={14} />
            <span>Strict 4-Student Micro-Batches</span>
          </div>
          <h3 className="cta-banner-title">
            Ready to master practical computer skills with 1-on-1 mentorship?
          </h3>
          <p className="cta-banner-desc">
            Reserve your dedicated terminal today. Only 4 students per batch ensure personalized attention from day one.
          </p>
        </div>
        <div className="cta-banner-actions">
          <button 
            type="button" 
            className="footer-btn-primary"
            onClick={onOpenBookSeat}
          >
            <span>Book Seat Online</span>
            <ChevronRight size={16} />
          </button>
          <button 
            type="button" 
            className="footer-btn-secondary"
            onClick={onOpenDownloadApp}
          >
            <Download size={16} />
            <span>Get Android App</span>
          </button>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="hub-footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Center Profile */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <div className="footer-mascot-box">
                <Terminal size={22} strokeWidth={2.4} />
              </div>
              <div className="brand-text-block">
                <span className="brand-title">SURAJ CS HUB</span>
                <span className="brand-subtitle">Computer Training Center &amp; LMS</span>
              </div>
            </div>

            <p className="brand-mission">
              Empowering students with industry-relevant computer education, hands-on coding labs, and strict 4-seat micro-batches for uncompromised learning.
            </p>

            <div className="center-contact-list">
              <div className="contact-item">
                <MapPin size={17} className="contact-icon" />
                <span>Station Road, Tech Zone, Suraj CS Hub Campus</span>
              </div>
              <div className="contact-item">
                <Phone size={17} className="contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210 (Admissions Helpline)</a>
              </div>
              <div className="contact-item">
                <Mail size={17} className="contact-icon" />
                <a href="mailto:surajcshub@gmail.com">surajcshub@gmail.com</a>
              </div>
              <div className="contact-item">
                <Clock size={17} className="contact-icon" />
                <span>Mon – Sat: 7:00 AM – 8:30 PM &bull; Sunday Closed</span>
              </div>
            </div>

            <div className="status-indicator-pill">
              <span className="pulsing-green-dot"></span>
              <span>Admissions Open &bull; 6 Daily Slots</span>
            </div>
          </div>

          {/* Column 2: Flagship Courses */}
          <div className="footer-col">
            <h4 className="footer-col-title">Courses &amp; Tracks</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => handleLinkClick('courses')}>
                  ADCA Diploma (12 Months)
                  <span className="link-tag">Popular</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('courses')}>
                  DCA Diploma (6 Months)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('courses')}>
                  Full-Stack Web Development (MERN)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('courses')}>
                  Python &amp; Machine Learning
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('courses')}>
                  NIELIT CCC Exam Preparation
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('courses')}>
                  Tally Prime &amp; GST Accounting
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Timings */}
          <div className="footer-col">
            <h4 className="footer-col-title">Lab &amp; Batches</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => handleLinkClick('batches')}>
                  Batch Schedules (6 Daily Slots)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('batches')}>
                  Morning 1: 7:00 AM – 8:30 AM
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('batches')}>
                  Morning 2: 8:30 AM – 10:00 AM
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('batches')}>
                  Evening 2: 5:30 PM – 7:00 PM
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('batches')}>
                  Evening 3: 7:00 PM – 8:30 PM
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('gallery')}>
                  Campus &amp; Lab Photo Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Student LMS & Android App */}
          <div className="footer-col">
            <h4 className="footer-col-title">Student Portal &amp; App</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={onOpenLogin} className="highlighted-link">
                  <User size={15} />
                  <span>Student LMS Login</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenDownloadApp} className="highlighted-link">
                  <Download size={15} />
                  <span>Download Android APK (v1.2.4)</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenBookSeat}>
                  Reserve Seat Online
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setActivePolicyModal('refund')}>
                  Refund &amp; Cancellation Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setActivePolicyModal('privacy')}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setActivePolicyModal('terms')}>
                  Terms of Service
                </button>
              </li>
            </ul>

            <div className="app-direct-badge-box" onClick={onOpenDownloadApp}>
              <div className="apk-icon-circle">
                <Download size={18} />
              </div>
              <div className="apk-badge-text">
                <strong>Android LMS App</strong>
                <span>Direct APK Download &bull; 18.4 MB</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} <strong>Suraj CS Hub</strong>. All rights reserved. Govt. Recognized IT Training Institute.
            </p>
          </div>

          <div className="bottom-center">
            <span className="fee-reminder-pill">
              <Calendar size={13} />
              Monthly fees due on the 5th of each month
            </span>
          </div>

          <div className="bottom-right-policies">
            <button type="button" onClick={() => setActivePolicyModal('privacy')}>Privacy</button>
            <span>&bull;</span>
            <button type="button" onClick={() => setActivePolicyModal('terms')}>Terms</button>
            <span>&bull;</span>
            <button type="button" onClick={() => setActivePolicyModal('refund')}>Refund Policy</button>
          </div>
        </div>
      </div>

      {/* Policy Modals */}
      {activePolicyModal && (
        <div className="policy-modal-backdrop" onClick={() => setActivePolicyModal(null)}>
          <div className="policy-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="policy-close-btn"
              onClick={() => setActivePolicyModal(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {activePolicyModal === 'privacy' && (
              <div className="policy-content">
                <div className="policy-header">
                  <ShieldCheck size={28} className="policy-title-icon" />
                  <h3>Privacy Policy</h3>
                </div>
                <p className="policy-date">Last Updated: October 2026</p>
                <div className="policy-body">
                  <h4>1. Information We Collect</h4>
                  <p>Suraj CS Hub collects student full names, contact phone numbers, email addresses, date of birth, and identity documentation solely for academic enrollment and verification.</p>
                  
                  <h4>2. Student Records &amp; Documents</h4>
                  <p>In accordance with center security policies, student mark sheets and government IDs are stored securely in read-only format for student accounts. Only verified administrators may upload or update verification documents.</p>
                  
                  <h4>3. Data Security &amp; LMS Access</h4>
                  <p>We do not sell, rent, or trade your personal data. Credentials and academic histories are encrypted and protected against unauthorized access.</p>
                </div>
              </div>
            )}

            {activePolicyModal === 'terms' && (
              <div className="policy-content">
                <div className="policy-header">
                  <FileText size={28} className="policy-title-icon" />
                  <h3>Terms of Service</h3>
                </div>
                <p className="policy-date">Effective: Academic Year 2026</p>
                <div className="policy-body">
                  <h4>1. Batch Adherence &amp; Micro-Batch Rules</h4>
                  <p>To preserve our 4-student-per-batch quality guarantee, students must attend their designated time slot. Seat swapping is not permitted without prior admin approval.</p>
                  
                  <h4>2. Monthly Fee Schedule</h4>
                  <p>Tuition fees are charged on a monthly billing cycle and are due on the 5th of each month. Access to online LMS videos and lab practice materials may be temporarily restricted if dues remain unpaid past the grace period.</p>
                  
                  <h4>3. Pass-Out Permanent Access</h4>
                  <p>Students who successfully graduate and clear all dues retain lifetime access to their enrolled course notes and materials at no extra charge.</p>
                </div>
              </div>
            )}

            {activePolicyModal === 'refund' && (
              <div className="policy-content">
                <div className="policy-header">
                  <CheckCircle2 size={28} className="policy-title-icon" />
                  <h3>Refund &amp; Cancellation Policy</h3>
                </div>
                <p className="policy-date">Enacted: October 2026</p>
                <div className="policy-body">
                  <h4>1. Seat Booking Deposit</h4>
                  <p>When you reserve a terminal online, a seat is permanently locked and removed from public availability to guarantee your workstation.</p>
                  
                  <h4>2. 10-Day Cancellation Window</h4>
                  <p>Cancellation requests submitted within <strong>10 days</strong> of the successful booking date are eligible for a <strong>50% refund</strong> of the booking amount. After 10 days, bookings are strictly non-refundable.</p>
                  
                  <h4>3. Refund Processing</h4>
                  <p>All refund requests must be verified by the center administration and will be returned to the original payment source within 5–7 business days.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
