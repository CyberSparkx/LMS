import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Calendar, BookOpen, User, Phone, Mail } from 'lucide-react';
import './ReservationModal.css';

export default function ReservationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Full-Stack Web Engineering',
    mode: 'Campus Offline Batch',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-header">
              <div className="modal-badge">
                <Sparkles size={14} />
                <span>Admissions 2026</span>
              </div>
              <h3 className="modal-title">Reserve Your Seat</h3>
              <p className="modal-desc">
                Join Suraj CS Hub. Get 1-on-1 counseling, syllabus overview, and free demo access.
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="course-select">Select Course Track</label>
              <select 
                id="course-select"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                required
              >
                <option value="Full-Stack Web Engineering">Full-Stack Web (MERN + Next.js)</option>
                <option value="DSA & Competitive Coding">Data Structures & Algorithms (C++ / Java)</option>
                <option value="Python & AI Mastery">Python, Machine Learning & AI</option>
                <option value="BCA / MCA Academic Track">BCA / MCA / B.Tech Semester Coaching</option>
              </select>
            </div>

            <div className="form-group">
              <label>Learning Preference</label>
              <div className="mode-toggle-group">
                <button
                  type="button"
                  className={`mode-btn ${formData.mode === 'Campus Offline Batch' ? 'is-active' : ''}`}
                  onClick={() => setFormData({ ...formData, mode: 'Campus Offline Batch' })}
                >
                  🏫 Campus (Offline)
                </button>
                <button
                  type="button"
                  className={`mode-btn ${formData.mode === 'Live Interactive Online' ? 'is-active' : ''}`}
                  onClick={() => setFormData({ ...formData, mode: 'Live Interactive Online' })}
                >
                  💻 Live Online
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="name-input">Full Name</label>
              <div className="input-wrap">
                <User size={16} className="input-icon" />
                <input 
                  id="name-input"
                  type="text" 
                  placeholder="e.g. Naren Roy"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone-input">Phone Number</label>
                <div className="input-wrap">
                  <Phone size={16} className="input-icon" />
                  <input 
                    id="phone-input"
                    type="tel" 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Email Address</label>
                <div className="input-wrap">
                  <Mail size={16} className="input-icon" />
                  <input 
                    id="email-input"
                    type="email" 
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn-modal-submit">
              Confirm & Book Free Demo
            </button>
          </form>
        ) : (
          <div className="modal-success-view">
            <div className="success-icon-wrap">
              <CheckCircle size={44} className="success-check" />
            </div>
            <h3 className="success-title">Seat Reserved Successfully!</h3>
            <p className="success-desc">
              Welcome aboard, <strong>{formData.name || 'Learner'}</strong>! Our team and Prof. Suraj will contact you via WhatsApp / Call at <strong>{formData.phone}</strong> with demo class credentials and batch timings.
            </p>

            <div className="reservation-summary-card">
              <div className="summary-item">
                <span className="summary-label">Course:</span>
                <span className="summary-val">{formData.course}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Mode:</span>
                <span className="summary-val">{formData.mode}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Batch Starting:</span>
                <span className="summary-val">Next Monday</span>
              </div>
            </div>

            <button type="button" className="btn-modal-submit" onClick={handleReset}>
              Got It & Explore Hub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
