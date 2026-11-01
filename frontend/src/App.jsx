import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ImageGallerySection from './components/ImageGallerySection';
import ReviewsSection from './components/ReviewsSection';
import CoursesView from './components/CoursesView';
import BatchesView from './components/BatchesView';
import AboutContactView from './components/AboutContactView';
import LoginModal from './components/LoginModal';
import DownloadAppModal from './components/DownloadAppModal';
import ReservationModal from './components/ReservationModal';
import Footer from './components/Footer';
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

  const handleSelectTab = (tabId) => {
    if (tabId === 'about') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else if (tabId === 'gallery') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('gallery');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else if (tabId === 'reviews') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('reviews');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      setActiveTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-viewport-wrapper">
      <div className="stage-framed-container">
        {/* Floating Pill Navbar */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onOpenLogin={() => setIsLoginModalOpen(true)}
          onOpenBookSeat={() => setIsBookSeatModalOpen(true)}
          onOpenDownloadApp={() => setIsDownloadAppModalOpen(true)}
          currentUser={currentUser}
        />

        {/* View Router based on navigation tab */}
        <main className="main-content-area">
          {activeTab === 'home' && (
            <>
              <Hero
                onOpenCourses={() => handleSelectTab('courses')}
                onOpenBatches={() => handleSelectTab('batches')}
                onOpenDownloadApp={() => setIsDownloadAppModalOpen(true)}
                onOpenBookSeat={() => setIsBookSeatModalOpen(true)}
              />
              <AboutSection
                onOpenCourses={() => handleSelectTab('courses')}
                onOpenBatches={() => handleSelectTab('batches')}
                onOpenBookSeat={() => setIsBookSeatModalOpen(true)}
              />
              <ImageGallerySection />
              <ReviewsSection />
            </>
          )}

          {activeTab === 'courses' && (
            <CoursesView onBookSeat={() => setIsBookSeatModalOpen(true)} />
          )}

          {activeTab === 'batches' && (
            <BatchesView onBookSeat={() => setIsBookSeatModalOpen(true)} />
          )}

          {activeTab === 'contact' && (
            <AboutContactView initialTab="contact" />
          )}
        </main>

        {/* Comprehensive Center Footer */}
        <Footer
          onSelectTab={handleSelectTab}
          onOpenLogin={() => setIsLoginModalOpen(true)}
          onOpenBookSeat={() => setIsBookSeatModalOpen(true)}
          onOpenDownloadApp={() => setIsDownloadAppModalOpen(true)}
        />
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
