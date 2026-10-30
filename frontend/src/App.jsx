import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesView from './components/CoursesView';
import BatchesView from './components/BatchesView';
import AboutContactView from './components/AboutContactView';
import LoginModal from './components/LoginModal';
import DownloadAppModal from './components/DownloadAppModal';
import ReservationModal from './components/ReservationModal';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDownloadAppModalOpen, setIsDownloadAppModalOpen] = useState(false);
  const [isBookSeatModalOpen, setIsBookSeatModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="app-viewport-wrapper">
      {/* Framed Canvas Mockup Container from Reference Design */}
      <div className="stage-framed-container">
        {/* Floating Pill Navbar with required computer center tabs */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={(tabId) => setActiveTab(tabId)}
          onOpenLogin={() => setIsLoginModalOpen(true)}
          onOpenBookSeat={() => setIsBookSeatModalOpen(true)}
          onOpenDownloadApp={() => setIsDownloadAppModalOpen(true)}
          currentUser={currentUser}
        />

        {/* View Router based on navigation tab */}
        <main className="main-content-area">
          {activeTab === 'home' && (
            <Hero
              onOpenCourses={() => setActiveTab('courses')}
              onOpenBatches={() => setActiveTab('batches')}
              onOpenDownloadApp={() => setIsDownloadAppModalOpen(true)}
              onOpenBookSeat={() => setIsBookSeatModalOpen(true)}
            />
          )}

          {activeTab === 'courses' && (
            <CoursesView onBookSeat={() => setIsBookSeatModalOpen(true)} />
          )}

          {activeTab === 'batches' && (
            <BatchesView onBookSeat={() => setIsBookSeatModalOpen(true)} />
          )}

          {activeTab === 'about' && (
            <AboutContactView initialTab="about" />
          )}

          {activeTab === 'contact' && (
            <AboutContactView initialTab="contact" />
          )}
        </main>

        {/* Micro Footer inside frame */}
        <footer className="framed-footer">
          <div className="footer-links-row">
            <button type="button" onClick={() => setActiveTab('courses')}>Courses</button>
            <span>&bull;</span>
            <button type="button" onClick={() => setActiveTab('batches')}>Batches (4 Seats/Lab)</button>
            <span>&bull;</span>
            <button type="button" onClick={() => setIsDownloadAppModalOpen(true)}>Android APK</button>
            <span>&bull;</span>
            <button type="button" onClick={() => setIsLoginModalOpen(true)}>Student LMS</button>
          </div>
          <span className="copyright-tag">&copy; {new Date().getFullYear()} Suraj CS Hub. All rights reserved.</span>
        </footer>
      </div>

      {/* Interactive Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onOpenDownloadApp={() => setIsDownloadAppModalOpen(true)}
      />

      <DownloadAppModal
        isOpen={isDownloadAppModalOpen}
        onClose={() => setIsDownloadAppModalOpen(false)}
      />

      <ReservationModal
        isOpen={isBookSeatModalOpen}
        onClose={() => setIsBookSeatModalOpen(false)}
      />
    </div>
  );
}
