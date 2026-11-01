import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import './ReviewsSection.css';

export default function ReviewsSection() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const reviews = [
    {
      id: 1,
      name: 'Karan',
      time: '1 week ago',
      role: 'ADCA Diploma Batch',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'My learning experience is so nice, and faculty received me very politely. Practical lab experience is also very good. Very good performance. With only 4 students in the batch, I never experienced such personal attention. Very good service.'
    },
    {
      id: 2,
      name: 'Catherine',
      time: '10 days ago',
      role: 'Full-Stack Web (MERN)',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      text: 'I love the dedicated workstation and the instructor support is excellent. They respond in a timely manner with loads of practical tips about React, backend APIs, and real project deployment. Highly recommended for beginners and job seekers.'
    },
    {
      id: 3,
      name: 'Peter',
      time: '2 weeks ago',
      role: 'Python & AI Foundation',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'Visited the center and enrolled immediately. The infrastructure, particularly dedicated PC monitors, high-speed internet, and quiet lab atmosphere made daily practice effortless. Solved all my coding logic doubts on the spot.'
    },
    {
      id: 4,
      name: 'Priya',
      time: '3 weeks ago',
      role: 'NIELIT CCC Exam Prep',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      text: 'Cleared my NIELIT CCC exam on my first attempt with an "S" Grade! Daily mock tests on the lab system gave me enormous confidence. Suraj Sir explains concepts step-by-step until they are crystal clear.'
    },
    {
      id: 5,
      name: 'Rahul',
      time: '1 month ago',
      role: 'Tally Prime & Advanced Excel',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'The best computer training center in our area. Tally Prime with real GST invoicing and Excel formulas were taught thoroughly. Already got an offer as an accounts assistant!'
    },
    {
      id: 6,
      name: 'Sneha',
      time: '1 month ago',
      role: 'DCA Computer Applications',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
      text: 'Zero prior computer background when I joined. The 90-minute daily dedicated slot allowed me to practice without rushing. Friendly staff, great environment, and genuinely caring instructors.'
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollByAmount = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 342; // card width + gap
    scrollRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section className="customer-reviews-section" id="reviews" aria-label="Student Reviews">
      <div className="customer-reviews-wrapper">
        
        {/* Top Header: Centered headline + rating */}
        <div className="reviews-header-center">
          <h2 className="reviews-hero-heading">
            Read reviews,<br />
            learn with confidence.
          </h2>
          
          <div className="reviews-rating-bar">
            <span className="rating-score">4.9/5</span>
            <div className="trustpilot-badge">
              <span className="trustpilot-star-box" aria-hidden="true">
                <Star size={14} fill="#ffffff" color="#ffffff" strokeWidth={0} />
              </span>
              <span>Trustpilot</span>
            </div>
            <span className="rating-based-on">Based on 520+ reviews</span>
          </div>
        </div>

        {/* Main Grid: Left Sidebar + Right Horizontal Carousel */}
        <div className="reviews-main-grid">
          
          {/* Left Sidebar */}
          <div className="reviews-left-sidebar">
            <div className="sidebar-top">
              {/* Big Double Quote Icon matching reference */}
              <div className="quote-svg-mark" aria-hidden="true">
                <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6 37.6C5.6 37.6 0 31.6 0 23.2C0 12.8 8.8 4 20.4 0L22.8 4.4C14.4 7.2 10.4 12.4 9.6 17.6C10.8 17.2 12.4 16.8 14 16.8C20 16.8 24.8 21.2 24.8 27.2C24.8 33.2 20 37.6 13.6 37.6ZM36.8 37.6C28.8 37.6 23.2 31.6 23.2 23.2C23.2 12.8 32 4 43.6 0L46 4.4C37.6 7.2 33.6 12.4 32.8 17.6C34 17.2 35.6 16.8 37.2 16.8C43.2 16.8 48 21.2 48 27.2C48 33.2 43.2 37.6 36.8 37.6Z" fill="currentColor"/>
                </svg>
              </div>

              <h3 className="sidebar-heading">
                What our<br />
                students are<br />
                saying
              </h3>
            </div>

            {/* Carousel navigation controls (Arrows + line indicator) */}
            <div className="reviews-slider-controls">
              <button 
                type="button" 
                className="slider-nav-btn"
                onClick={() => scrollByAmount(-1)}
                disabled={!canScrollLeft}
                aria-label="Previous reviews"
              >
                <ArrowLeft size={18} strokeWidth={2.2} />
              </button>

              <div className="slider-progress-track" aria-hidden="true">
                <div 
                  className="slider-progress-bar" 
                  style={{ width: `${Math.max(25, scrollProgress)}%` }} 
                />
              </div>

              <button 
                type="button" 
                className="slider-nav-btn"
                onClick={() => scrollByAmount(1)}
                disabled={!canScrollRight}
                aria-label="Next reviews"
              >
                <ArrowRight size={18} strokeWidth={2.2} />
              </button>
            </div>
          </div>

          {/* Right Carousel Track */}
          <div className="reviews-carousel-viewport" ref={scrollRef}>
            <div className="reviews-cards-row">
              {reviews.map((item) => (
                <div key={item.id} className="review-bubble-card-item">
                  
                  {/* Speech Bubble Box */}
                  <div className="bubble-box">
                    <p className="bubble-text">
                      {item.text}
                    </p>

                    {/* 5 Green Stars */}
                    <div className="bubble-stars-row" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="bubble-star-icon" size={16} strokeWidth={0} />
                      ))}
                    </div>
                  </div>

                  {/* Student Avatar + Name + Time beneath the speech bubble */}
                  <div className="bubble-student-meta">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="student-avatar-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="student-avatar-fallback" style={{ display: 'none' }}>
                      {item.name.charAt(0)}
                    </div>
                    
                    <div className="student-text-group">
                      <span className="student-full-name">{item.name}</span>
                      <span className="student-time-tag">{item.time}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
