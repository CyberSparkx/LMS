import React, { useState } from 'react';
import { Terminal, Download, User, ArrowRight, Menu, X, BookOpen, Clock, Phone, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ 
  activeTab, 
  onSelectTab, 
  onOpenLogin, 
  onOpenBookSeat, 
  onOpenDownloadApp,
  currentUser 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'courses', label: 'Courses' },
    { id: 'batches', label: 'Batches' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'download-app', label: 'Download App' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId) => {
    if (tabId === 'download-app') {
      onOpenDownloadApp();
    } else {
      onSelectTab(tabId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="framed-navbar-wrapper" aria-label="Main Navigation">
      <div className="floating-pill-menu">
        {/* Left Icon Badge (like the doodle avatar in reference) */}
        <button 
          type="button"
          className="nav-mascot-badge" 
          onClick={() => onSelectTab('home')}
          title="Suraj CS Hub - Home"
          aria-label="Suraj CS Hub Home"
        >
          <div className="mascot-pixel-box">
            <Terminal size={17} strokeWidth={2.4} />
          </div>
        </button>

        {/* Center Navigation Links (Exact reference pill styling) */}
        <div className="nav-links-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link-btn ${activeTab === item.id ? 'is-active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="nav-right-actions">
          {/* Login / Profile Button */}
          <button 
            type="button" 
            className="nav-login-btn"
            onClick={onOpenLogin}
            title={currentUser ? "View Student Profile" : "Login to Student Portal"}
          >
            <User size={15} />
            <span className="login-text">
              {currentUser ? currentUser.name.split(' ')[0] : 'Login'}
            </span>
          </button>

          {/* Primary Action Button (Blue pill like 'Work with Me' in reference) */}
          <button 
            type="button" 
            className="nav-cta-blue-pill"
            onClick={onOpenBookSeat}
          >
            <span>Book Seat</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            type="button" 
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="nav-mobile-dropdown">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-mobile-item"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-action-divider"></div>
          <button 
            type="button" 
            className="nav-mobile-item highlight"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenLogin();
            }}
          >
            <User size={16} />
            <span>{currentUser ? 'My Profile & LMS' : 'Student Login'}</span>
          </button>
          <button 
            type="button" 
            className="nav-mobile-cta"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBookSeat();
            }}
          >
            Book Seat
          </button>
        </div>
      )}
    </nav>
  );
}
