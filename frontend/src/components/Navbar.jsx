import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Download, 
  User, 
  ArrowRight, 
  Menu, 
  X, 
  BookOpen, 
  Clock, 
  Phone, 
  Sparkles,
  Star,
  Image,
  Info 
} from 'lucide-react';
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
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'batches', label: 'Batches', icon: Clock },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'download-app', label: 'Download App', icon: Download },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  // Auto-close mobile menu on Escape key or when resizing back to desktop
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (tabId) => {
    if (tabId === 'download-app') {
      onOpenDownloadApp();
    } else {
      onSelectTab(tabId);
    }
    setMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    onSelectTab('home');
    setMobileMenuOpen(false);
  };

  return (
    <nav className="framed-navbar-wrapper" aria-label="Main Navigation">
      <div className="floating-pill-menu">
        {/* Left Mascot Badge */}
        <button 
          type="button"
          className="nav-mascot-badge" 
          onClick={handleHomeClick}
          title="Suraj CS Hub - Home"
          aria-label="Suraj CS Hub Home"
        >
          <div className="mascot-pixel-box">
            <Terminal size={17} strokeWidth={2.4} />
          </div>
        </button>

        {/* Center Navigation Links (Desktop only, >1024px) */}
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

          {/* Primary Action Button (Blue pill) */}
          <button 
            type="button" 
            className="nav-cta-blue-pill"
            onClick={onOpenBookSeat}
          >
            <span>Book Seat</span>
          </button>

          {/* Mobile Menu Toggle Button (<= 1024px) */}
          <button 
            type="button" 
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="nav-mobile-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Dropdown Menu Card */}
      {mobileMenuOpen && (
        <div className="nav-mobile-dropdown" role="menu">
          <div className="nav-mobile-items-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`nav-mobile-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  role="menuitem"
                >
                  <div className="nav-mobile-item-left">
                    <span className="nav-mobile-icon-box">
                      <Icon size={17} />
                    </span>
                    <span className="nav-mobile-item-label">{item.label}</span>
                  </div>
                  <ArrowRight size={14} className="nav-mobile-chevron" />
                </button>
              );
            })}
          </div>

          <div className="mobile-action-divider" />

          <div className="nav-mobile-bottom-actions">
            <button 
              type="button" 
              className="nav-mobile-item highlight"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              role="menuitem"
            >
              <div className="nav-mobile-item-left">
                <span className="nav-mobile-icon-box highlight-icon">
                  <User size={17} />
                </span>
                <span className="nav-mobile-item-label">
                  {currentUser ? `${currentUser.name.split(' ')[0]} (My Account)` : 'Student Login / Portal'}
                </span>
              </div>
              <ArrowRight size={14} className="nav-mobile-chevron" />
            </button>

            <button 
              type="button" 
              className="nav-mobile-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookSeat();
              }}
            >
              Book Seat Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
