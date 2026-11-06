import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import './ImageGallerySection.css';

export default function ImageGallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');

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
      aspectClass: 'mosaic-square'
    },
    {
      id: 'c1-bottom',
      type: 'photo',
      column: 1,
      category: 'practice',
      src: '/assets/student.jpg',
      title: 'Dedicated Student Workstation',
      aspectClass: 'mosaic-square'
    },

    // --- Column 2 (Center-Left): Tall Hero Portrait (Michelangelo position) ---
    {
      id: 'c2-hero',
      type: 'photo',
      column: 2,
      category: 'mentorship',
      src: '/assets/gallery-teaching.jpg',
      title: 'Faculty Live Instruction',
      aspectClass: 'mosaic-tall-hero',
      isHero: true
    },

    // --- Column 3 (Center): Vertical Photo + Badge + Circular Disc ---
    {
      id: 'c3-top',
      type: 'photo',
      column: 3,
      category: 'mentorship',
      src: '/assets/gallery-mentor.jpg',
      title: 'Side-by-Side Debugging',
      aspectClass: 'mosaic-vertical'
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
      aspectClass: 'mosaic-circle-disc',
      isCircle: true
    },

    // --- Column 4 (Right): Wide Photo + Vertical Photo + Emblem ---
    {
      id: 'c4-top',
      type: 'photo',
      column: 4,
      category: 'students',
      src: '/assets/gallery-students.jpg',
      title: 'Micro-Batch Collaboration',
      aspectClass: 'mosaic-wide'
    },
    {
      id: 'c4-bottom',
      type: 'photo',
      column: 4,
      category: 'practice',
      src: '/assets/gallery-teaching.jpg',
      title: 'Full-Stack & Python Labs',
      aspectClass: 'mosaic-vertical-alt'
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

  const isItemActive = (item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  };

  return (
    <section className="mosaic-gallery-section" id="gallery" aria-label="Campus & Lab Gallery">
      <div className="mosaic-gallery-wrapper">
        
        {/* Section Header with Black Kicker and Black Subtext */}
        <div className="mosaic-gallery-header">
          <span className="mosaic-kicker">CAMPUS &amp; LAB LIFE &bull; SURAJ CS HUB</span>
          <h2 className="mosaic-headline">Experience Our Computer Lab</h2>
          <p className="mosaic-subheadline">
            Explore our daily 4-student practical lab sessions, dedicated terminals, and side-by-side instruction with Prof. Suraj.
          </p>
        </div>

        {/* Top Category Filter Tabs */}
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
          
          {/* Decorative Blue Accent Dots */}
          <div className="mosaic-accent-dot dot-large" aria-hidden="true" />
          <div className="mosaic-accent-dot dot-medium" aria-hidden="true" />
          <div className="mosaic-accent-dot dot-small" aria-hidden="true" />

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
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
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
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
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
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
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

              {/* Item 6: Circular Disc Frame */}
              {collageItems.filter((i) => i.id === 'c3-circle').map((item) => {
                const active = isItemActive(item);
                return (
                  <div
                    key={item.id}
                    className={`mosaic-card-frame ${item.aspectClass} ${active ? 'is-spotlight' : 'is-dimmed'}`}
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
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
                  >
                    <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
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
                    >
                      <img src={item.src} alt={item.title} className="mosaic-card-img" loading="lazy" />
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
    </section>
  );
}
