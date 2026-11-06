import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Camera } from 'lucide-react';
import './ImageGallerySection.css';

export default function ImageGallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: '/assets/gallery-teaching.jpg',
      title: 'Faculty Live Teaching',
      tag: 'Live Lecture & Lab',
      badge: 'Instructor Live',
      cardTheme: 'theme-lime',
      rotation: -12,
      xOffset: -155,
      yOffset: 6,
      description: 'Prof. Suraj guiding students step-by-step through Python logic, data structures, and practical coding on lab monitors.'
    },
    {
      id: 2,
      src: '/assets/gallery-center.jpg',
      title: 'Modern Computer Lab',
      tag: 'Campus Infrastructure',
      badge: 'Dedicated Workstations',
      cardTheme: 'theme-cyan',
      rotation: -4,
      xOffset: -52,
      yOffset: -8,
      description: 'Spacious, air-conditioned computer center equipped with high-speed workstations, ergonomic seating, and gigabit internet.'
    },
    {
      id: 3,
      src: '/assets/gallery-mentor.jpg',
      title: '1-on-1 Lab Guidance',
      tag: 'Doubt Clearance',
      badge: 'Code Reviews',
      cardTheme: 'theme-emerald',
      rotation: 5,
      xOffset: 52,
      yOffset: -6,
      description: 'Zero doubts left unresolved. Instructors review code directly at student screens, providing real-time feedback and guidance.'
    },
    {
      id: 4,
      src: '/assets/gallery-students.jpg',
      title: '4-Seat Dedicated Batches',
      tag: 'Focused Learning',
      badge: 'Micro-Batch (4 Seats)',
      cardTheme: 'theme-peach',
      rotation: 13,
      xOffset: 155,
      yOffset: 6,
      description: 'Strict 4-student cap per batch ensures maximum personal attention, peer collaboration, and a distraction-free learning atmosphere.'
    }
  ];

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="spencer-gallery-section" id="gallery" aria-label="Campus & Lab Gallery">
      <div className="spencer-gallery-container">
        
        {/* Top Metadata Location Tag (Like Brooklyn, New York in reference) */}
        <div className="spencer-top-meta">
          <span className="meta-location">CAMPUS & LAB LIFE &bull; SURAJ CS HUB</span>
          <span className="meta-contact">SURAJCSHUB@GMAIL.COM &bull; ADMISSIONS OPEN</span>
        </div>

        {/* Big Bold Headline (Exact condensed uppercase style as SPENCER GABOR in reference) */}
        <h2 className="spencer-main-title">
          SURAJ CS HUB
        </h2>

        {/* Centerpiece: 4 Overlapping Fanned Gallery Photo Cards */}
        <div className="spencer-fanned-cards-wrap">
          <div className="fanned-photo-deck">
            {galleryItems.map((item, idx) => {
              const isHovered = hoveredIndex === idx;
              const rotation = isHovered ? 0 : item.rotation;
              const scale = isHovered ? 1.08 : 1;
              const y = isHovered ? item.yOffset - 16 : item.yOffset;

              return (
                <div
                  key={item.id}
                  className={`spencer-photo-card card-${idx + 1} ${item.cardTheme} ${isHovered ? 'is-hovered' : ''}`}
                  style={{
                    transform: `rotate(${rotation}deg) translate(${item.xOffset}px, ${y}px) scale(${scale})`,
                    zIndex: isHovered ? 50 : idx + 10
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActivePhotoIndex(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo: ${item.title}`}
                >
                  <div className="photo-card-inner">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="spencer-img" 
                      loading="lazy" 
                    />
                    <div className="card-hover-overlay">
                      <span className="overlay-tag">{item.tag}</span>
                      <strong className="overlay-title">{item.title}</strong>
                      <span className="overlay-click-hint">Click to enlarge</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Diffused Shadow beneath the photo deck (from reference) */}
          <div className="fanned-shadow-layer" aria-hidden="true"></div>
        </div>

        {/* Huge Light-Gray Background / Watermark Typography (Exact 2-line layout as in reference) */}
        <div className="spencer-watermark-typography" aria-hidden="true">
          <span>COMPUTER LAB,</span>
          <span>STUDENTS &amp; TEACHING</span>
        </div>

        {/* Bottom Sub-Meta & Curriculum Badges (Like CLIENTS INCLUDE in reference) */}
        <div className="spencer-bottom-clients">
          <span className="bottom-tagline">TRAINING MODULES INCLUDE</span>
          <p className="bottom-courses-list">
            ADCA DIPLOMA (12 MOS) &bull; DCA DIPLOMA (6 MOS) &bull; FULL-STACK WEB (MERN) &bull; PYTHON & AI &bull; NIELIT CCC EXAM PREP
          </p>
        </div>

      </div>

      {/* Interactive Lightbox Zoom Modal */}
      {activePhotoIndex !== null && (
        <div className="gallery-lightbox-backdrop" onClick={() => setActivePhotoIndex(null)}>
          <div className="lightbox-modal-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-close-btn"
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>

            <button 
              type="button" 
              className="lightbox-nav-btn prev-btn"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              type="button" 
              className="lightbox-nav-btn next-btn"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            <div className="lightbox-image-wrap">
              <img 
                src={galleryItems[activePhotoIndex].src} 
                alt={galleryItems[activePhotoIndex].title} 
                className="lightbox-full-img"
              />
            </div>

            <div className="lightbox-caption">
              <span className="caption-tag">{galleryItems[activePhotoIndex].tag}</span>
              <h4 className="caption-title">{galleryItems[activePhotoIndex].title}</h4>
              <p className="caption-desc">{galleryItems[activePhotoIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
