import React, { useState } from 'react';
import { 
  X, 
  Smartphone, 
  Download, 
  ShieldCheck, 
  FileCheck, 
  WifiOff, 
  Clock 
} from 'lucide-react';
import './DownloadAppModal.css';

export default function DownloadAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    // Trigger actual download of mock APK file
    const element = document.createElement("a");
    const file = new Blob([
      "Suraj CS Hub Official Android App Package (v1.2.4)\nRelease: Oct 2026\nComputer Training Center LMS APK"
    ], { type: 'application/vnd.android.package-archive' });
    element.href = URL.createObjectURL(file);
    element.download = "SurajCSHub_v1.2.4_release.apk";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="apk-modal-backdrop" onClick={onClose}>
      <div className="apk-modal-card" onClick={(e) => e.stopPropagation()} role="dialog">
        <button className="apk-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="apk-hero-header">
          <div className="apk-icon-frame">
            <Smartphone size={32} className="phone-svg-icon" />
          </div>
          <div className="apk-header-meta">
            <span className="apk-badge-release">OFFICIAL RELEASE</span>
            <h3 className="apk-modal-title">Suraj CS Hub Android App</h3>
            <span className="apk-version-info">Version 1.2.4 &bull; Updated Oct 2026 &bull; 18.4 MB</span>
          </div>
        </div>

        <p className="apk-tagline">
          Access your courses, watch lecture videos offline, review PDF notes, and track your monthly fee receipts on your Android device.
        </p>

        {/* Feature List */}
        <div className="apk-features-grid">
          <div className="apk-feat-item">
            <WifiOff size={16} className="feat-ico" />
            <div>
              <strong>Offline Mode</strong>
              <p>Download video lessons and study without internet</p>
            </div>
          </div>

          <div className="apk-feat-item">
            <FileCheck size={16} className="feat-ico" />
            <div>
              <strong>PDF Notes & Syllabi</strong>
              <p>Direct access to ADCA, DCA & Web Dev study files</p>
            </div>
          </div>

          <div className="apk-feat-item">
            <Clock size={16} className="feat-ico" />
            <div>
              <strong>Batch Timing Alerts</strong>
              <p>Push notifications for your 4-seat batch slot schedule</p>
            </div>
          </div>

          <div className="apk-feat-item">
            <ShieldCheck size={16} className="feat-ico" />
            <div>
              <strong>Secure Fee Receipts</strong>
              <p>Download verified receipts and view monthly due date</p>
            </div>
          </div>
        </div>

        {/* Download Action Section */}
        <div className="apk-action-box">
          <button 
            type="button" 
            className="btn-download-apk"
            onClick={handleDownload}
          >
            <Download size={18} />
            <span>{downloadStarted ? "Downloading APK (18.4 MB)..." : "Download APK Directly"}</span>
          </button>

          <span className="apk-security-tag">
            <ShieldCheck size={14} className="green-shield" />
            100% Virus-Free &bull; SHA-256 Verified by Suraj CS Hub
          </span>
        </div>

        {/* Changelog Accordion / Summary */}
        <div className="apk-changelog-box">
          <span className="changelog-title">What's New in v1.2.4:</span>
          <ul className="changelog-list">
            <li>Added dark mode support for nighttime coding sessions.</li>
            <li>New offline video download cache manager.</li>
            <li>Direct Razorpay fee payment integration for monthly dues.</li>
            <li>Bug fixes for student document viewer.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
