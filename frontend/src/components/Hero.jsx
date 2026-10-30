import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  BookOpen, 
  Award, 
  Users, 
  ArrowRight, 
  Layers, 
  Cpu 
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
    </section>
  );
}
