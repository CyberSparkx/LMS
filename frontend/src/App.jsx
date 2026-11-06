import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ImageGallerySection from './components/ImageGallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
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

  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, []);

  // Pause Lenis background scrolling when any modal is open
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (isLoginModalOpen || isDownloadAppModalOpen || isBookSeatModalOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isLoginModalOpen, isDownloadAppModalOpen, isBookSeatModalOpen]);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleSelectTab = (tabId) => {
    const lenis = lenisRef.current;
    const targetMap = {
      about: '#about',
      gallery: '#gallery',
      reviews: '#reviews',
      contact: '#contact-us',
    };

    if (targetMap[tabId]) {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.querySelector(targetMap[tabId]);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -60, duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 70);
    } else {
      setActiveTab(tabId);
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
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
              <ContactSection />
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
