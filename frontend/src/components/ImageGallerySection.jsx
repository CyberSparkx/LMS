import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Users, 
  Award, 
  Terminal, 
  Sparkles,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import './ImageGallerySection.css';

export default function ImageGallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'lab', label: 'Computer Lab' },
    { id: 'students', label: 'Micro-Batches' },
    { id: 'mentorship', label: 'Prof. Suraj Mentorship' },
    { id: 'practice', label: 'Live Lab Practice' },
  ];

  // Collage items matching the exact reference layout
  const collageItems = [
    // --- Column 1 (Left): 2 Stacked Square Photos ---
    {
      id: 'c1-top',
      type: 'photo',
      column: 1,
      category: 'lab',
      src: '/assets/gallery-center.jpg',
      title: 'High-Speed Computer Center',
      tag: 'Campus Infrastructure',
      aspectClass: 'mosaic-square',
      description: 'Fully air-conditioned computer center equipped with high-speed workstations, ergonomic seating, and gigabit internet.'
    },
    {
      id: 'c1-bottom',
      type: 'photo',
      column: 1,
      category: 'practice',
      src: '/assets/student.jpg',
      title: 'Dedicated Student Workstation',
      tag: 'Individual Terminal',
      aspectClass: 'mosaic-square',
      description: 'One student per computer policy. No shared screens, no rotation, and uninterrupted 90-minute daily practical slots.'
    },

    // --- Column 2 (Center-Left): Tall Hero Portrait (Michelangelo position) ---
    {
      id: 'c2-hero',
      type: 'photo',
      column: 2,
      category: 'mentorship',
      src: '/assets/gallery-teaching.jpg',
      title: 'Faculty Live Instruction',
      tag: 'Live Coding Demo',
      aspectClass: 'mosaic-tall-hero',
      isHero: true,
      description: 'Daily hands-on lab sessions with Prof. Suraj. Every line of code, algorithmic logic, and web project is built together live.'
    },

    // --- Column 3 (Center): Vertical Photo + Badge + Circular Disc ---
    {
      id: 'c3-top',
      type: 'photo',
      column: 3,
      category: 'mentorship',
      src: '/assets/gallery-mentor.jpg',
      title: 'Side-by-Side Debugging',
      tag: 'Doubt Clearance',
      aspectClass: 'mosaic-vertical',
      description: 'Zero unresolved syntax errors. Instructors review code directly at student monitors, providing immediate feedback.'
    },
    {
      id: 'c3-badge',
      type: 'badge',
      column: 3,
      category: 'students',
      aspectClass: 'mosaic-badge-box',
      badgeIcon: Users,
      badgeTitle: '4-Seat Cap',
      badgeSub: 'Micro-Batch'
    },
    {
      id: 'c3-circle',
      type: 'photo',
      column: 3,
      category: 'mentorship',
      src: '/assets/mentor.jpg',
      title: 'Prof. Suraj — Lead Mentor',
      tag: 'Faculty Lead',
      aspectClass: 'mosaic-circle-disc',
      isCircle: true,
      description: 'Master mentor with over a decade of computer education experience mentoring students in practical CS fundamentals.'
    },

    // --- Column 4 (Right): Wide Photo + Vertical Photo + Emblem ---
    {
      id: 'c4-top',
      type: 'photo',
      column: 4,
      category: 'students',
      src: '/assets/gallery-students.jpg',
      title: 'Micro-Batch Collaboration',
      tag: '4 Students / Slot',
      aspectClass: 'mosaic-wide',
      description: 'Strict 4-student cap per batch ensures maximum personal attention, peer collaboration, and a quiet learning atmosphere.'
    },
    {
      id: 'c4-bottom',
      type: 'photo',
      column: 4,
      category: 'practice',
      src: '/assets/gallery-teaching.jpg',
      title: 'Full-Stack & Python Labs',
      tag: 'Applied Curriculum',
      aspectClass: 'mosaic-vertical-alt',
      description: 'Industry-standard training covering MERN Full-Stack, Python Programming, ADCA Diploma, and Govt. Certifications.'
    },
    {
      id: 'c4-badge',
      type: 'badge',
      column: 4,
      category: 'lab',
      aspectClass: 'mosaic-badge-emblem',
      badgeIcon: Award,
      badgeTitle: 'Govt. Certified',
      badgeSub: 'ISO & NIELIT'
    }
  ];

  // Photos only for the Lightbox modal
  const photoItems = collageItems.filter((item) => item.type === 'photo');

  const handleOpenLightbox = (photoItem) => {
    const idx = photoItems.findIndex((p) => p.id === photoItem.id);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    }
  };

  const handleNextPhoto = () => {
    setActiveLightboxIndex((prev) => (prev + 1) % photoItems.length);
  };

  const handlePrevPhoto = () => {
    setActiveLightboxIndex((prev) => (prev - 1 + photoItems.length) % photoItems.length);
  };

  const isItemActive = (item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  };

  return (
    <section className="mosaic-gallery-section" id="gallery" aria-label="Campus & Lab Gallery">
      <div className="mosaic-gallery-wrapper">
        
        {/* Section Header */}
        <div className="mosaic-gallery-header">
          <span className="mosaic-kicker">CAMPUS & LAB LIFE &bull; SURAJ CS HUB</span>
          <h2 className="mosaic-headline">Experience Our Computer Lab</h2>
          <p className="mosaic-subheadline">
            Explore our daily 4-student practical lab sessions, dedicated terminals, and side-by-side instruction with Prof. Suraj.
          </p>
        </div>

        {/* Top Category Filter Tabs (Matching Reference: Red Active Pill + Outline Buttons) */}
        <div className="mosaic-filter-bar" role="tablist" aria-label="Filter photo gallery">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`mosaic-filter-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Centerpiece: Scattered Masonry Art Collage Wall */}
        <div className="mosaic-art-canvas">
          
          {/* Decorative Red Dot 1 (Large Bauhaus accent dot on left) */}
          <div className="red-accent-dot dot-large" aria-hidden="true" />

          {/* Decorative Red Dot 2 & 3 (Medium & small accent dots in center) */}
          <div className="red-accent-dot dot-medium" aria-hidden="true" />
          <div className="red-accent-dot dot-small" aria-hidden="true" />

          {/* 4 Asymmetric Columns */}
          <div className="mosaic-wall-grid">

            {/* Column 1 (Left): Square 1 & Square 2 */}
            <div className="mosaic-col col-1">
              {collageItems.filter((i) => i.column === 1).map((item) => {
                const active = isItemActive(item);
                return (
                  <div
                    key={item.id}
                    className={`mosaic-card-frame ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}
                    onClick={() => handleOpenLightbox(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo: ${item.title}`}
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
                    <div className="mosaic-card-overlay">
                      <span className="card-tag">{item.tag}</span>
                      <strong className="card-title">{item.title}</strong>
                      <span className="card-expand-hint"><Maximize2 size={13} /> Enlarge</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 (Hero): Michelangelo Tall Portrait */}
            <div className="mosaic-col col-2">
              {collageItems.filter((i) => i.column === 2).map((item) => {
                const active = isItemActive(item);
                return (
                  <div
                    key={item.id}
                    className={`mosaic-card-frame ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}
                    onClick={() => handleOpenLightbox(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo: ${item.title}`}
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
                    <div className="mosaic-card-overlay">
                      <span className="card-tag">{item.tag}</span>
                      <strong className="card-title">{item.title}</strong>
                      <span className="card-expand-hint"><Maximize2 size={13} /> Enlarge</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 3 (Center): Vertical Rect + Badge + Round Disc */}
            <div className="mosaic-col col-3">
              {/* Item 4: Vertical rect */}
              {collageItems.filter((i) => i.id === 'c3-top').map((item) => {
                const active = isItemActive(item);
                return (
                  <div
                    key={item.id}
                    className={`mosaic-card-frame ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}
                    onClick={() => handleOpenLightbox(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo: ${item.title}`}
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
                    <div className="mosaic-card-overlay">
                      <span className="card-tag">{item.tag}</span>
                      <strong className="card-title">{item.title}</strong>
                      <span className="card-expand-hint"><Maximize2 size={13} /> Enlarge</span>
                    </div>
                  </div>
                );
              })}

              {/* Item 5: Small square badge */}
              {collageItems.filter((i) => i.id === 'c3-badge').map((item) => {
                const IconComponent = item.badgeIcon;
                const active = isItemActive(item);
                return (
                  <div key={item.id} className={`mosaic-badge-card ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}>
                    <div className="badge-icon-box">
                      <IconComponent size={18} />
                    </div>
                    <div className="badge-text-wrap">
                      <span className="badge-title">{item.badgeTitle}</span>
                      <span className="badge-sub">{item.badgeSub}</span>
                    </div>
                  </div>
                );
              })}

              {/* Item 6: Circular Dolphin Disc Frame */}
              {collageItems.filter((i) => i.id === 'c3-circle').map((item) => {
                const active = isItemActive(item);
                return (
                  <div
                    key={item.id}
                    className={`mosaic-card-frame ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}
                    onClick={() => handleOpenLightbox(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View mentor photo: ${item.title}`}
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
                    <div className="mosaic-card-overlay circle-overlay">
                      <span className="card-tag">{item.tag}</span>
                      <strong className="card-title">{item.title}</strong>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 4 (Right): Wide Photo + Vertical Photo + Emblem Badge */}
            <div className="mosaic-col col-4">
              {/* Item 8: Wide rect */}
              {collageItems.filter((i) => i.id === 'c4-top').map((item) => {
                const active = isItemActive(item);
                return (
                  <div
                    key={item.id}
                    className={`mosaic-card-frame ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}
                    onClick={() => handleOpenLightbox(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo: ${item.title}`}
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
                    <div className="mosaic-card-overlay">
                      <span className="card-tag">{item.tag}</span>
                      <strong className="card-title">{item.title}</strong>
                      <span className="card-expand-hint"><Maximize2 size={13} /> Enlarge</span>
                    </div>
                  </div>
                );
              })}

              {/* Row with Item 9 (Vertical) & Item 10 (Small Badge) */}
              <div className="col-4-split-row">
                {collageItems.filter((i) => i.id === 'c4-bottom').map((item) => {
                  const active = isItemActive(item);
                  return (
                    <div
                      key={item.id}
                      className={`mosaic-card-frame ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}
                      onClick={() => handleOpenLightbox(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View photo: ${item.title}`}
                    >
                      <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
                      <div className="mosaic-card-overlay">
                        <span className="card-tag">{item.tag}</span>
                        <strong className="card-title">{item.title}</strong>
                        <span className="card-expand-hint"><Maximize2 size={13} /> Enlarge</span>
                      </div>
                    </div>
                  );
                })}

                {collageItems.filter((i) => i.id === 'c4-badge').map((item) => {
                  const IconComponent = item.badgeIcon;
                  const active = isItemActive(item);
                  return (
                    <div key={item.id} className={`mosaic-badge-card ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}>
                      <div className="badge-icon-box emblem-icon-box">
                        <IconComponent size={18} />
                      </div>
                      <div className="badge-text-wrap">
                        <span className="badge-title">{item.badgeTitle}</span>
                        <span className="badge-sub">{item.badgeSub}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="mosaic-bottom-bar">
          <div className="bottom-pill-tag">
            <CheckCircle2 size={15} className="bottom-tag-icon" />
            <span>Strict 4 Students Per Lab Slot</span>
          </div>
          <div className="bottom-pill-tag">
            <CheckCircle2 size={15} className="bottom-tag-icon" />
            <span>One PC Per Learner &bull; No Shared Screens</span>
          </div>
          <div className="bottom-pill-tag">
            <CheckCircle2 size={15} className="bottom-tag-icon" />
            <span>Daily 90-Min Practical Coding</span>
          </div>
        </div>

      </div>

      {/* Interactive Lightbox Zoom Modal */}
      {activeLightboxIndex !== null && (
        <div 
          className="gallery-lightbox-backdrop" 
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-modal-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-close-btn"
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>

            <button 
              type="button" 
              className="lightbox-nav-btn prev-btn"
              onClick={handlePrevPhoto}
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              type="button" 
              className="lightbox-nav-btn next-btn"
              onClick={handleNextPhoto}
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            <div className="lightbox-image-wrap">
              <img 
                src={photoItems[activeLightboxIndex].src} 
                alt={photoItems[activeLightboxIndex].title} 
                className="lightbox-full-img"
              />
            </div>

            <div className="lightbox-caption">
              <span className="caption-tag">{photoItems[activeLightboxIndex].tag}</span>
              <h4 className="caption-title">{photoItems[activeLightboxIndex].title}</h4>
              <p className="caption-desc">{photoItems[activeLightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
