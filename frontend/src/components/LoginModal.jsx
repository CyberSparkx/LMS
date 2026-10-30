import React, { useState } from 'react';
import { 
  X, 
  User, 
  Lock, 
  CheckCircle, 
  Download, 
  Calendar, 
  Clock, 
  Award, 
  Layers, 
  LogOut, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import './LoginModal.css';

export default function LoginModal({ isOpen, onClose, currentUser, onLogin, onLogout, onOpenDownloadApp }) {
  if (!isOpen) return null;

  const [role, setRole] = useState('student'); // 'student' or 'admin'
  const [identifier, setIdentifier] = useState('student@surajcshub.com');
  const [password, setPassword] = useState('••••••••');
  const [error, setError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!identifier) {
      setError('Please enter your email or Student ID.');
      return;
    }

    const userData = {
      name: identifier.includes('admin') ? 'Prof. Suraj (Admin)' : 'Naren Roy',
      email: identifier,
      role: identifier.includes('admin') ? 'admin' : 'student',
      studentId: 'SUR-2026-088',
      enrolledCourse: 'ADCA (Advanced Diploma) & Full-Stack Web',
      batch: 'Morning 2 (8:30 AM – 10:00 AM)',
      batchCapacity: '4 Seats (Fully Booked)',
      feeStatus: 'Paid for Current Month',
      nextDue: '5th November 2026',
      progress: 74,
      attendance: '96%',
      documents: [
        { name: 'Class 10 Marksheet', verified: true },
        { name: 'Class 12 Marksheet', verified: true },
        { name: 'Government ID Proof', verified: true },
        { name: 'Admission Confirmation Letter', verified: true }
      ]
    };

    onLogin(userData);
    setError('');
  };

  return (
    <div className="login-modal-backdrop" onClick={onClose}>
      <div className="login-modal-box" onClick={(e) => e.stopPropagation()} role="dialog">
        <button className="login-close-icon" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {currentUser ? (
          /* Student Profile & LMS Overview View */
          <div className="student-profile-view">
            <div className="profile-top-banner">
              <div className="student-badge-avatar">
                <div className="avatar-monogram">
                  {currentUser.name.charAt(0)}
                </div>
              </div>
              <div className="student-core-details">
                <span className="role-chip">Verified {currentUser.role === 'admin' ? 'Admin' : 'Student'}</span>
                <h3 className="profile-student-name">{currentUser.name}</h3>
                <span className="profile-student-id">ID: {currentUser.studentId}</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="profile-metrics-grid">
              <div className="metric-box">
                <span className="metric-title">Enrolled Course</span>
                <strong className="metric-val">{currentUser.enrolledCourse}</strong>
              </div>

              <div className="metric-box">
                <span className="metric-title">Batch Slot</span>
                <strong className="metric-val">{currentUser.batch}</strong>
                <span className="metric-sub">{currentUser.batchCapacity}</span>
              </div>

              <div className="metric-box">
                <span className="metric-title">Fee Status</span>
                <strong className="metric-val status-green">{currentUser.feeStatus}</strong>
                <span className="metric-sub">Next Due: {currentUser.nextDue}</span>
              </div>

              <div className="metric-box">
                <span className="metric-title">LMS Progress</span>
                <strong className="metric-val">{currentUser.progress}% Completed</strong>
                <div className="profile-progress-bar">
                  <div className="profile-progress-fill" style={{ width: `${currentUser.progress}%` }}></div>
                </div>
              </div>
            </div>

            {/* Documents Section (Read-Only Per Business Rules) */}
            <div className="profile-documents-section">
              <div className="docs-header">
                <span className="docs-title">Verified Documents (Admin Uploaded)</span>
                <span className="docs-note">Read-Only</span>
              </div>
              <div className="docs-list">
                {currentUser.documents.map((doc, i) => (
                  <div key={i} className="doc-item-row">
                    <div className="doc-left">
                      <CheckCircle size={15} className="doc-check-icon" />
                      <span>{doc.name}</span>
                    </div>
                    <button 
                      type="button" 
                      className="btn-doc-download"
                      onClick={() => alert(`Downloading verified document: ${doc.name}`)}
                    >
                      <Download size={13} />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Android APK Link from Dashboard (Per Project Requirements) */}
            <div className="profile-apk-callout">
              <div className="apk-callout-text">
                <strong>Suraj CS Hub Android App</strong>
                <p>Study on your phone, watch offline lectures & view fee receipts.</p>
              </div>
              <button 
                type="button" 
                className="btn-apk-pill"
                onClick={() => {
                  onClose();
                  onOpenDownloadApp();
                }}
              >
                <Download size={14} />
                <span>Get APK</span>
              </button>
            </div>

            {/* Logout Action */}
            <div className="profile-footer-actions">
              <button type="button" className="btn-logout" onClick={onLogout}>
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        ) : (
          /* Login Form */
          <div className="login-form-view">
            <div className="login-header-group">
              <span className="login-tag">LMS Portal</span>
              <h3 className="login-title">Student & Admin Login</h3>
              <p className="login-desc">
                Access your course lessons, batch schedule, documents & payment receipts.
              </p>
            </div>

            {/* Role Switcher */}
            <div className="role-switch-pill">
              <button
                type="button"
                className={`role-tab ${role === 'student' ? 'active' : ''}`}
                onClick={() => {
                  setRole('student');
                  setIdentifier('student@surajcshub.com');
                }}
              >
                Student Portal
              </button>
              <button
                type="button"
                className={`role-tab ${role === 'admin' ? 'active' : ''}`}
                onClick={() => {
                  setRole('admin');
                  setIdentifier('admin@surajcshub.com');
                }}
              >
                Admin Portal
              </button>
            </div>

            {error && (
              <div className="login-error-alert">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="login-inputs-form">
              <div className="input-field-group">
                <label>Email Address or Student ID</label>
                <div className="login-input-wrap">
                  <User size={16} className="login-icon" />
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="e.g. SUR-2026-088 or student@email.com"
                    required
                  />
                </div>
              </div>

              <div className="input-field-group">
                <div className="label-with-link">
                  <label>Password</label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link will be sent to your registered email."); }}>
                    Forgot password?
                  </a>
                </div>
                <div className="login-input-wrap">
                  <Lock size={16} className="login-icon" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-login-submit">
                <span>Sign In to Dashboard</span>
              </button>
            </form>

            <div className="demo-credentials-helper">
              <span className="helper-label">One-Click Demo Access:</span>
              <button
                type="button"
                className="btn-demo-quick"
                onClick={() => {
                  setIdentifier('student@surajcshub.com');
                  setPassword('demo1234');
                }}
              >
                Use Student Demo Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
