import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import CourseLearnView from './components/CourseLearnView';
import AboutContactView from './components/AboutContactView';
import NotFoundView from './components/NotFoundView';
import LoginModal from './components/LoginModal';
import DownloadAppModal from './components/DownloadAppModal';
import ReservationModal from './components/ReservationModal';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDownloadAppModalOpen, setIsDownloadAppModalOpen] = useState(false);
  const [isBookSeatModalOpen, setIsBookSeatModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const lenisRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle route and hash scroll transitions smoothly
  useEffect(() => {
    const lenis = lenisRef.current;

    // Direct section routes (e.g. /gallery or /reviews)
    if (location.pathname === '/gallery') {
      setTimeout(() => {
        const el = document.getElementById('gallery');
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: -60, duration: 1.2 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (location.pathname === '/reviews') {
      setTimeout(() => {
        const el = document.getElementById('reviews');
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: -60, duration: 1.2 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // Hash navigation (e.g. /#gallery or /#reviews)
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          if (lenis) lenis.scrollTo(el, { offset: -60, duration: 1.2 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Normal page transition: scroll to top
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location.pathname, location.hash]);

  // Derive active tab from current URL pathname and hash
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/courses') return 'courses';
    if (path === '/batches') return 'batches';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    if (path === '/gallery' || location.hash === '#gallery') return 'gallery';
    if (path === '/reviews' || location.hash === '#reviews') return 'reviews';
    if (path === '/') return 'home';
    return '';
  };

  const handleSelectTab = (tabId) => {
    const lenis = lenisRef.current;

    switch (tabId) {
      case 'home':
        if (location.pathname === '/') {
          if (lenis) lenis.scrollTo(0, { duration: 0.8 });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          navigate('/');
        }
        break;

      case 'courses':
        navigate('/courses');
        break;

      case 'batches':
        navigate('/batches');
        break;

      case 'about':
        navigate('/about');
        break;

      case 'contact':
        navigate('/contact');
        break;

      case 'gallery':
        if (location.pathname === '/') {
          const el = document.getElementById('gallery');
          if (el) {
            if (lenis) lenis.scrollTo(el, { offset: -60, duration: 1.2 });
            else el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate('/#gallery');
        }
        break;

      case 'reviews':
        if (location.pathname === '/') {
          const el = document.getElementById('reviews');
          if (el) {
            if (lenis) lenis.scrollTo(el, { offset: -60, duration: 1.2 });
            else el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate('/#reviews');
        }
        break;

      default:
        navigate('/');
    }
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Home Page Component
  const HomePage = (
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
  );

  const isLearnPage = location.pathname.includes('/learn');

  return (
    <div className="app-viewport-wrapper">
      <div className="stage-framed-container">
        {/* Floating Pill Navbar — hidden on learning pages */}
        {!isLearnPage && (
          <Navbar
            activeTab={getActiveTab()}
            onSelectTab={handleSelectTab}
            onOpenLogin={() => setIsLoginModalOpen(true)}
            onOpenBookSeat={() => setIsBookSeatModalOpen(true)}
            onOpenDownloadApp={() => setIsDownloadAppModalOpen(true)}
            currentUser={currentUser}
          />
        )}

        {/* View Router based on URL Routes */}
        <main className={`main-content-area${isLearnPage ? ' no-nav-padding' : ''}`}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={HomePage} />
            <Route 
              path="/courses" 
              element={<CoursesView onBookSeat={() => setIsBookSeatModalOpen(true)} />} 
            />
            <Route 
              path="/batches" 
              element={<BatchesView onBookSeat={() => setIsBookSeatModalOpen(true)} />} 
            />
            <Route 
              path="/about" 
              element={<AboutContactView initialTab="about" onBookSeat={() => setIsBookSeatModalOpen(true)} />} 
            />
            <Route 
              path="/contact" 
              element={<AboutContactView initialTab="contact" onBookSeat={() => setIsBookSeatModalOpen(true)} />} 
            />

            {/* Direct Section URL Aliases */}
            <Route path="/gallery" element={HomePage} />
            <Route path="/reviews" element={HomePage} />

            {/* Course Learning Page */}
            <Route path="/courses/:courseId/learn" element={<CourseLearnView />} />

            {/* 404 Catch-All Route */}
            <Route path="*" element={<NotFoundView onGoHome={() => handleSelectTab('home')} />} />
          </Routes>
        </main>

        {/* Comprehensive Center Footer — hidden on learning pages */}
        {!isLearnPage && (
          <Footer
            onSelectTab={handleSelectTab}
            onOpenLogin={() => setIsLoginModalOpen(true)}
            onOpenBookSeat={() => setIsBookSeatModalOpen(true)}
            onOpenDownloadApp={() => setIsDownloadAppModalOpen(true)}
          />
        )}
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
