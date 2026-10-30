import React, { useState, useEffect } from 'react';
import { Code2, ArrowUpRight, Sparkles, User, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenReserve }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Programs');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Live Batches', href: '#batches' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Hub', href: '#about' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="Suraj CS Hub Home">
          <div className="brand-icon-wrapper">
            <Code2 size={20} className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Suraj CS Hub</span>
            <span className="brand-tag">CODE • LEARN • EXCEL</span>
          </div>
        </a>

        {/* Center Pill Navigation (From Design Reference) */}
        <nav className="center-pill-nav" aria-label="Main Navigation">
          <div className="nav-pill-wrapper">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                className={`nav-pill-item ${activeTab === link.name ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveTab(link.name);
                }}
              >
                {link.name}
              </button>
            ))}
          </div>
        </nav>

        {/* Right CTA Actions */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn-login"
            onClick={() => alert("Student Portal is opening soon! Reserve your seat to get early credentials.")}
          >
            <User size={15} />
            <span>Portal Login</span>
          </button>

          <button 
            type="button" 
            className="btn-reserve-pill"
            onClick={onOpenReserve}
          >
            <span>Reserve Seat</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mobile-drawer-footer">
            <button 
              type="button" 
              className="btn-reserve-pill full-width"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
            >
              <span>Reserve Seat</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
