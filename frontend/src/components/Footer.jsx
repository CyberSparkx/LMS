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
  ArrowRight, 
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
    <footer className="hub-join-footer" id="join-us" aria-label="Website Footer">
      <div className="join-footer-fullwidth-section">
        
        {/* Top Text - Exact Match to Reference Design */}
        <div className="join-typography-wrap">
          <h2 className="join-main-title">Join Us!</h2>
          <p className="join-sub-title">Reserve your workstation in our next 4-student batch.</p>

          {/* Action CTAs */}
          <div className="join-action-row">
            <button 
              type="button" 
              className="join-primary-btn"
              onClick={onOpenBookSeat}
            >
              <span>Reserve Workstation (4 Seats/Batch)</span>
              <ArrowRight size={16} />
            </button>
            <button 
              type="button" 
              className="join-secondary-btn"
              onClick={onOpenDownloadApp}
            >
              <Download size={16} />
              <span>Get Android App</span>
            </button>
          </div>
        </div>

        {/* Artwork Centerpiece - Characters Illustration */}
        <div className="join-illustration-container">
          <img 
            src="/assets/footer-characters-transparent.png" 
            alt="Students community at Suraj CS Hub" 
            className="join-characters-image"
          />
        </div>

        {/* Full-bleed Grounding Baseline spanning 100% edge-to-edge */}
        <div className="join-ground-line" aria-hidden="true"></div>

        {/* Clean Grounded Minimalist Footer Navigation */}
        <div className="join-bottom-nav">
          <div className="bottom-nav-top-row">
            {/* Brand Logo & Name */}
            <div className="bottom-brand-badge" onClick={() => onSelectTab('home')}>
              <div className="brand-mascot-circle">
                <Terminal size={18} strokeWidth={2.4} />
              </div>
              <div className="brand-names">
                <span className="brand-hub-name">SURAJ CS HUB</span>
                <span className="brand-hub-tag">Computer Training Center &amp; LMS</span>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="bottom-links-strip" aria-label="Footer Navigation Links">
              <button type="button" onClick={() => handleLinkClick('courses')}>Courses</button>
              <button type="button" onClick={() => handleLinkClick('batches')}>Batches</button>
              <button type="button" onClick={() => handleLinkClick('gallery')}>Gallery</button>
              <button type="button" onClick={() => handleLinkClick('about')}>About</button>
              <button type="button" onClick={onOpenLogin} className="accent-link">
                <User size={14} />
                <span>Student LMS</span>
              </button>
              <button type="button" onClick={onOpenDownloadApp} className="accent-link">
                <Download size={14} />
                <span>Android APK</span>
              </button>
            </nav>

            {/* Direct Helpline */}
            <div className="bottom-helpline-box">
              <Phone size={14} className="helpline-icon" />
              <a href="tel:+919876543210">+91 98765 43210</a>
              <span className="bullet-sep">&bull;</span>
              <a href="mailto:surajcshub@gmail.com">surajcshub@gmail.com</a>
            </div>
          </div>

          {/* Legal / Copyright Bottom Bar */}
          <div className="bottom-nav-legal-row">
            <span className="legal-copyright">
              &copy; {new Date().getFullYear()} <strong>Suraj CS Hub</strong>. All rights reserved. Strict 4-Student Micro-Batches.
            </span>

            <div className="legal-reminder-tag">
              <Calendar size={13} />
              <span>Monthly fee due on the 5th of each month</span>
            </div>

            <div className="legal-policy-links">
              <button type="button" onClick={() => setActivePolicyModal('privacy')}>Privacy Policy</button>
              <span>&bull;</span>
              <button type="button" onClick={() => setActivePolicyModal('terms')}>Terms of Service</button>
              <span>&bull;</span>
              <button type="button" onClick={() => setActivePolicyModal('refund')}>Refund Policy</button>
            </div>
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
