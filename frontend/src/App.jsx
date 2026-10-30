import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import ReservationModal from './components/ReservationModal';
import './App.css';

export default function App() {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  return (
    <div className="page-wrapper">
      {/* Ambient Sheen in background */}
      <div className="ambient-sheen" aria-hidden="true"></div>

      {/* Floating Pill Navbar */}
      <Navbar onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Main Hero Section with Concentric Ripples & Center Phone Showcase */}
      <main>
        <Hero onOpenReserve={() => setIsReserveModalOpen(true)} />
        <StatsBanner />
      </main>

      {/* Interactive Reservation / Free Demo Modal */}
      <ReservationModal 
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />

      {/* Clean Modern Footer */}
      <footer className="hub-footer">
        <div className="footer-content">
          <p className="footer-brand">
            <strong>Suraj CS Hub</strong> &bull; Transforming CS Education & Software Careers
          </p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Suraj CS Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
