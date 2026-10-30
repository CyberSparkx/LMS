import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  BookOpen, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenCourses, onOpenBatches, onOpenDownloadApp, onOpenBookSeat }) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  // 7 Fanned-Out Cards representing the core offerings of the computer center
  const fannedCards = [
    {
      id: 1,
      title: "Android LMS App",
      category: "APK v1.2.4",
      rotation: -14,
      yOffset: 24,
      theme: "dark-teal",
      tag: "Download APK",
      icon: <Smartphone size={18} />,
      details: "Offline videos, notes & fee receipts on your phone",
      stat: "Free APK",
      onClick: onOpenDownloadApp
    },
    {
      id: 2,
      title: "ADCA Diploma",
      category: "12 Months Track",
      rotation: -9,
      yOffset: 10,
      theme: "navy",
      tag: "Govt. Approved",
      icon: <Award size={18} />,
      details: "Office, Tally Prime, Web Design & Hardware",
      stat: "₹750/mo",
      onClick: onOpenCourses
    },
    {
      id: 3,
      title: "Full-Stack Web",
      category: "Job Oriented",
      rotation: -4,
      yOffset: 2,
      theme: "ocean",
      tag: "Live Projects",
      icon: <Code size={18} />,
      details: "React, Node.js, MongoDB & RESTful APIs",
      stat: "4 Seats Left",
      onClick: onOpenCourses
    },
    {
      id: 4,
      title: "4-Seat Batches",
      category: "Suraj CS Hub",
      rotation: 0,
      yOffset: 0,
      theme: "featured-slate",
      tag: "Strict Cap",
      icon: <Users size={18} />,
      details: "Only 4 students per batch for 100% individual focus",
      stat: "6 Daily Slots",
      isCenter: true,
      onClick: onOpenBatches
    },
    {
      id: 5,
      title: "Python & AI",
      category: "Data Science",
      rotation: 4,
      yOffset: 2,
      theme: "emerald",
      tag: "Modern Tech",
      icon: <Cpu size={18} />,
      details: "Core Python, Pandas, Automation & Machine Learning",
      stat: "4 Months",
      onClick: onOpenCourses
    },
    {
      id: 6,
      title: "DCA Diploma",
      category: "6 Months Track",
      rotation: 9,
      yOffset: 10,
      theme: "indigo",
      tag: "Certified",
      icon: <BookOpen size={18} />,
      details: "Computer Fundamentals, MS Office, Internet & DTP",
      stat: "₹700/mo",
      onClick: onOpenCourses
    },
    {
      id: 7,
      title: "Student LMS",
      category: "Learning Portal",
      rotation: 14,
      yOffset: 24,
      theme: "crimson-coral",
      tag: "Self-Paced",
      icon: <Layers size={18} />,
      details: "Track monthly payments, attendance, mark sheets & notes",
      stat: "24/7 Access",
      onClick: onOpenCourses
    }
  ];

  return (
    <section className="fanned-hero-section" aria-label="Hero Section">
      <div className="hero-typography-container">
        {/* Large Display Title matching reference image typography */}
        <h1 className="hero-fanned-title">
          <span className="title-top-line">COMPUTER TRAINING</span>
          <span className="title-pixel-line">CENTER</span>
        </h1>

        <p className="hero-fanned-subtitle">
          Designing unique careers that make practical computer learning feel a little better.
        </p>

        {/* Quick Tags matching center specialties */}
        <div className="hero-quick-badges">
          <span className="quick-pill">
            <span className="green-bullet"></span> 4 Students Per Batch
          </span>
          <span className="quick-pill">Govt. Recognized Certification</span>
          <span className="quick-pill">Offline & Online Access</span>
        </div>
      </div>

      {/* Centerpiece: Fanned-out Cards Deck (Exact match to reference image) */}
      <div className="fanned-deck-wrapper">
        <div className="fanned-deck-container">
          {fannedCards.map((card, idx) => {
            const isHovered = hoveredCardIndex === idx;
            const currentRotation = isHovered ? 0 : card.rotation;
            const currentY = isHovered ? card.yOffset - 18 : card.yOffset;
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
                aria-label={`View ${card.title} - ${card.category}`}
              >
                {/* Card Screen Interface Frame */}
                <div className="card-mock-screen">
                  {/* Miniature Top Status Pill */}
                  <div className="mock-top-header">
                    <span className="mock-category">{card.category}</span>
                    <span className="mock-badge">{card.tag}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mock-body">
                    <div className="mock-icon-wrap">
                      {card.icon}
                    </div>
                    <h3 className="mock-title">{card.title}</h3>
                    <p className="mock-details">{card.details}</p>
                  </div>

                  {/* Bottom Stat / Action */}
                  <div className="mock-footer">
                    <span className="mock-stat-badge">{card.stat}</span>
                    <span className="mock-arrow-action">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Bottom Sawtooth Border from Reference Image (Person removed per prompt) */}
      <div className="bottom-sawtooth-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 36" preserveAspectRatio="none" className="sawtooth-svg">
          <polygon points="
            0,36 0,20 20,0 40,20 60,0 80,20 100,0 120,20 140,0 160,20 180,0 200,20 220,0 240,20 260,0 280,20 300,0 320,20 340,0 360,20 380,0 400,20 420,0 440,20 460,0 480,20 500,0 520,20 540,0 560,20 580,0 600,20 620,0 640,20 660,0 680,20 700,0 720,20 740,0 760,20 780,0 800,20 820,0 840,20 860,0 880,20 900,0 920,20 940,0 960,20 980,0 1000,20 1020,0 1040,20 1060,0 1080,20 1100,0 1120,20 1140,0 1160,20 1180,0 1200,20 1200,36
          " fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
