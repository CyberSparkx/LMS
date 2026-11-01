import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenCourses, onOpenBatches, onOpenDownloadApp, onOpenBookSeat }) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const fannedCards = [
    {
      id: 1,
      title: "Android LMS App",
      headline: "Offline notes, lectures & fee receipts on phone.",
      byline: "BY PROF. SURAJ",
      dayNumber: "1.2",
      monthYear: "APK V1.2.4",
      rotation: -14,
      yOffset: 24,
      theme: "editorial-pink",
      tag: "Free APK",
      onClick: onOpenDownloadApp,
      illustration: (
        <svg viewBox="0 0 60 60" className="card-ref-illustration" fill="none" stroke="#111422" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="18" y="10" width="24" height="40" rx="4" />
          <line x1="26" y1="14" x2="34" y2="14" strokeWidth="1.8" />
          <polygon points="27,24 27,34 36,29" fill="#111422" />
          <path d="M 23 42 L 37 42" strokeWidth="2" />
          <circle cx="30" cy="46" r="1.5" fill="#111422" stroke="none" />
        </svg>
      )
    },
    {
      id: 2,
      title: "ADCA Diploma",
      headline: "Complete 1-year master diploma in computer apps.",
      byline: "BY PROF. SURAJ",
      dayNumber: "12",
      monthYear: "MONTHS",
      rotation: -9,
      yOffset: 10,
      theme: "editorial-white",
      tag: "Govt. Approved",
      onClick: onOpenCourses,
      illustration: (
        <svg viewBox="0 0 60 60" className="card-ref-illustration" fill="none" stroke="#111422" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M 30 14 L 16 7 L 16 18 L 30 23 Z" fill="#ffffff" strokeWidth="2.2" />
          <path d="M 30 14 L 44 7 L 44 18 L 30 23 Z" fill="#ffffff" strokeWidth="2.2" />
          <line x1="20" y1="10" x2="20" y2="20" strokeWidth="1.6" />
          <line x1="40" y1="10" x2="40" y2="20" strokeWidth="1.6" />
          <rect x="18" y="23" width="24" height="24" rx="1" fill="#ffffff" strokeWidth="2.2" />
          <rect x="22" y="27" width="3.5" height="3.5" />
          <rect x="28" y="27" width="3.5" height="3.5" fill="#111422" />
          <rect x="34" y="27" width="3.5" height="3.5" />
          <rect x="22" y="33" width="3.5" height="3.5" fill="#111422" />
          <rect x="28" y="33" width="3.5" height="3.5" />
          <rect x="34" y="33" width="3.5" height="3.5" fill="#111422" />
          <path d="M 27 47 L 27 40 L 33 40 L 33 47" strokeWidth="2" />
          <line x1="24" y1="47" x2="36" y2="47" strokeWidth="2.4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Full-Stack Web",
      headline: "Build production apps with React, Node & MongoDB.",
      byline: "BY PROF. SURAJ",
      dayNumber: "04",
      monthYear: "SEATS LEFT",
      rotation: -4,
      yOffset: 2,
      theme: "editorial-orange",
      tag: "Live Projects",
      onClick: onOpenCourses,
      illustration: (
        <svg viewBox="0 0 60 60" className="card-ref-illustration" fill="none" stroke="#111422" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="18" y="19" width="7" height="13" rx="1" />
          <path d="M 18 19 L 21.5 12 L 25 19 Z" />
          <line x1="18" y1="22" x2="25" y2="22" strokeWidth="1.6" />
          <rect x="28" y="13" width="8" height="16" rx="1" strokeWidth="2.4" />
          <path d="M 28 13 L 32 6 L 36 13 Z" strokeWidth="2.4" />
          <line x1="28" y1="17" x2="36" y2="17" strokeWidth="1.8" />
          <g transform="rotate(14 42 22)">
            <rect x="38" y="16" width="7" height="14" rx="1" />
            <path d="M 38 30 L 41.5 38 L 45 30 Z" fill="#111422" />
          </g>
          <path d="M 21.5 32 C 21.5 38, 19 41, 16 45" strokeWidth="1.8" />
          <path d="M 32 29 C 32 38, 30 42, 28 48" strokeWidth="2" />
          <path d="M 24 43 C 28 42, 32 44, 38 42 C 42 45, 45 44, 48 47" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      id: 4,
      title: "4-Seat Batches",
      headline: "Only 4 students per batch for 100% individual focus.",
      byline: "BY PROF. SURAJ",
      dayNumber: "04",
      monthYear: "MAX SEATS",
      rotation: 0,
      yOffset: 0,
      theme: "editorial-white",
      tag: "Strict Cap",
      isCenter: true,
      onClick: onOpenBatches,
      illustration: (
        <svg viewBox="0 0 60 60" className="card-ref-illustration" fill="none" stroke="#111422" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="14" y="12" width="32" height="20" rx="2" strokeWidth="2.2" />
          <line x1="20" y1="18" x2="28" y2="18" strokeWidth="1.8" />
          <line x1="20" y1="23" x2="36" y2="23" strokeWidth="1.8" />
          <path d="M 10 32 L 50 32 L 46 37 L 14 37 Z" strokeWidth="2.2" />
          <path d="M 16 22 C 20 21, 23 24, 26 24 C 29 24, 31 22, 34 22" strokeWidth="1.8" />
          <path d="M 44 20 C 40 22, 37 25, 34 28" strokeWidth="1.8" />
          <path d="M 23 28 C 25 31, 29 32, 32 31" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Python & AI",
      headline: "Learn Python automation, NumPy, Pandas & ML.",
      byline: "BY PROF. SURAJ",
      dayNumber: "04",
      monthYear: "MONTHS",
      rotation: 4,
      yOffset: 2,
      theme: "editorial-sage",
      tag: "Modern Tech",
      onClick: onOpenCourses,
      illustration: (
        <svg viewBox="0 0 60 60" className="card-ref-illustration" fill="none" stroke="#111422" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="18" y="16" width="24" height="24" rx="4" strokeWidth="2.2" />
          <rect x="23" y="21" width="14" height="14" rx="2" fill="#111422" stroke="none" />
          <line x1="23" y1="12" x2="23" y2="16" strokeWidth="2" />
          <line x1="30" y1="12" x2="30" y2="16" strokeWidth="2" />
          <line x1="37" y1="12" x2="37" y2="16" strokeWidth="2" />
          <line x1="23" y1="40" x2="23" y2="44" strokeWidth="2" />
          <line x1="30" y1="40" x2="30" y2="44" strokeWidth="2" />
          <line x1="37" y1="40" x2="37" y2="44" strokeWidth="2" />
          <line x1="14" y1="23" x2="18" y2="23" strokeWidth="2" />
          <line x1="14" y1="33" x2="18" y2="33" strokeWidth="2" />
          <line x1="42" y1="23" x2="46" y2="23" strokeWidth="2" />
          <line x1="42" y1="33" x2="46" y2="33" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 6,
      title: "DCA Diploma",
      headline: "Fundamentals, MS Office Suite, Internet & DTP.",
      byline: "BY PROF. SURAJ",
      dayNumber: "06",
      monthYear: "MONTHS",
      rotation: 9,
      yOffset: 10,
      theme: "editorial-orange",
      tag: "Certified",
      onClick: onOpenCourses,
      illustration: (
        <svg viewBox="0 0 60 60" className="card-ref-illustration" fill="none" stroke="#111422" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="16" y="14" width="28" height="32" rx="2" strokeWidth="2.2" />
          <line x1="22" y1="21" x2="34" y2="21" strokeWidth="2" />
          <line x1="22" y1="26" x2="38" y2="26" strokeWidth="1.8" />
          <line x1="22" y1="31" x2="32" y2="31" strokeWidth="1.8" />
          <circle cx="36" cy="38" r="4.5" fill="#111422" />
          <path d="M 34 42 L 32 47 L 36 45 L 40 47 L 38 42" fill="#111422" stroke="none" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Student LMS",
      headline: "Track payments, attendance, mark sheets & notes.",
      byline: "BY PROF. SURAJ",
      dayNumber: "24",
      monthYear: "7 ACCESS",
      rotation: 14,
      yOffset: 24,
      theme: "editorial-pink",
      tag: "Self-Paced",
      onClick: onOpenCourses,
      illustration: (
        <svg viewBox="0 0 60 60" className="card-ref-illustration" fill="none" stroke="#111422" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M 16 20 L 30 13 L 44 20 L 30 27 Z" strokeWidth="2.2" />
          <path d="M 16 27 L 30 34 L 44 27" strokeWidth="2.2" />
          <path d="M 16 34 L 30 41 L 44 34" strokeWidth="2.2" />
        </svg>
      )
    }
  ];

  return (
    <section className="fanned-hero-section" aria-label="Hero Section">

      {/* 1. TOP META — like "BROOKLYN, NEW YORK" */}
      <p className="hero-top-meta">BILASPUR, CHHATTISGARH</p>

      {/* 2. MAIN BOLD TITLE — like "SPENCER GABOR", big black, centered */}
      <h1 className="hero-main-name">
        SURAJ CS HUB
      </h1>

      {/* 3. FANNED CARDS DECK — center of the page */}
      <div className="fanned-deck-wrapper">
        <div className="fanned-deck-container">
          {fannedCards.map((card, idx) => {
            const isHovered = hoveredCardIndex === idx;
            const currentRotation = isHovered ? 0 : card.rotation;
            const currentY = isHovered ? card.yOffset - 22 : card.yOffset;
            const currentScale = isHovered ? 1.08 : 1;

            return (
              <div
                key={card.id}
                className={`deck-card ${card.theme} ${card.isCenter ? 'is-center-hero' : ''} ${isHovered ? 'is-hovered' : ''}`}
                style={{
                  transform: `rotate(${currentRotation}deg) translateY(${currentY}px) scale(${currentScale})`,
                  zIndex: isHovered ? 30 : idx + 1
                }}
                onMouseEnter={() => setHoveredCardIndex(idx)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                onClick={card.onClick}
                role="button"
                tabIndex={0}
                aria-label={`View ${card.title} - ${card.headline}`}
              >
                <div className="ref-card-interior">
                  <div className="ref-card-top-row">
                    <div className="ref-illustration-box">
                      {card.illustration}
                    </div>
                    <div className="ref-date-box">
                      <span className="ref-date-big">{card.dayNumber}</span>
                      <span className="ref-date-sub">{card.monthYear}</span>
                    </div>
                  </div>

                  <div className="ref-card-body">
                    <h3 className="ref-card-headline">{card.headline}</h3>
                  </div>

                  <div className="ref-card-footer">
                    <span className="ref-byline">{card.byline}</span>
                    <span className="ref-tag-pill">
                      <span>{card.tag}</span>
                      <ArrowUpRight size={12} strokeWidth={2.4} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. GHOST BIG TEXT — like "ILLUSTRATOR, DESIGNER & MURALIST" in light gray */}
      <p className="hero-ghost-tagline">
        COMPUTER TRAINING<br />CENTER
      </p>

      {/* 5. BOTTOM META — like "CLIENTS INCLUDE" + list */}
      <div className="hero-bottom-meta">
        <span className="hero-clients-label">COURSES INCLUDE</span>
        <span className="hero-clients-list">ADCA · DCA · FULL-STACK WEB · PYTHON & AI · ANDROID LMS · STUDENT PORTAL</span>
      </div>

    </section>
  );
}
