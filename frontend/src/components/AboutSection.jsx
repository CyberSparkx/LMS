import React from 'react';
import { ArrowRight, Play, Eye } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection({ onOpenCourses, onOpenBatches, onOpenBookSeat }) {
  return (
    <section className="bolt-about-section" id="about" aria-label="Photo Gallery & Inside Suraj CS Hub">
      <div className="bolt-about-wrapper">
        
        {/* Header matching reference image */}
        <div className="bolt-header-group">
          <h2 className="bolt-main-headline">
            It’s not magic.<br />
            It’s Suraj CS Hub.
          </h2>
          <p className="bolt-subheadline">
            Take a look inside our computer center, daily micro-batch lab sessions, and live hands-on teaching with Prof. Suraj.
          </p>
        </div>

        {/* Bento Image Gallery Grid (Matching exact 3-row layout in reference) */}
        <div className="bolt-bento-grid">
          
          {/* Row 1 - Card 1: Wide Card with Teacher Teaching Students Photo */}
          <div className="bento-card bento-wide card-finish-line">
            <div className="card-top-category">Teaching & Mentorship</div>
            <div className="card-text-content">
              <h3 className="card-bold-title">
                Inside the live<br />
                classroom sessions.
              </h3>
              <p className="card-description">
                Prof. Suraj guiding learners through real-time Python algorithms and full-stack logic on live monitors with zero rote memorization.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenBatches}
              >
                <span>More about our teaching</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Photo: Teacher Teaching Live */}
            <div className="card-gallery-photo-wrap photo-wide">
              <img 
                src="/assets/gallery-teaching.jpg" 
                alt="Teacher explaining code to students on computer screen" 
                className="bento-gallery-img" 
                loading="lazy"
              />
              <span className="photo-caption-pill">Live Lab Session</span>
            </div>
          </div>

          {/* Row 1 - Card 2: Narrow Card with 1-on-1 Mentor Guidance Photo */}
          <div className="bento-card bento-narrow card-boring-theory">
            <div className="card-top-category">1-on-1 Code Review</div>
            
            {/* Photo on top like reference */}
            <div className="card-gallery-photo-wrap photo-top">
              <img 
                src="/assets/gallery-mentor.jpg" 
                alt="Instructor helping student solve coding problem on laptop" 
                className="bento-gallery-img" 
                loading="lazy"
              />
              <span className="photo-caption-pill">Daily Doubt Lab</span>
            </div>

            <div className="card-text-content">
              <h3 className="card-bold-title">
                So long,<br />
                unresolved doubts.
              </h3>
              <p className="card-description">
                Direct side-by-side debugging where instructors inspect your syntax, review Git commits, and explain concepts until crystal clear.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenCourses}
              >
                <span>More about mentorship</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Row 2 - Card 3: Narrow Card with Computer Center Lab Photo */}
          <div className="bento-card bento-narrow card-career-impact">
            <div className="card-top-category">Campus Infrastructure</div>
            
            {/* Photo on top */}
            <div className="card-gallery-photo-wrap photo-top">
              <img 
                src="/assets/gallery-center.jpg" 
                alt="Modern computer training lab workstations and monitors" 
                className="bento-gallery-img" 
                loading="lazy"
              />
              <span className="photo-caption-pill">AC High-Speed Lab</span>
            </div>

            <div className="card-text-content">
              <h3 className="card-bold-title">
                Modern lab.<br />
                Dedicated PCs.
              </h3>
              <p className="card-description">
                Ergonomic workstations, high-speed fiber internet, power backup, and modern dev tools for all enrolled learners.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenCourses}
              >
                <span>View campus facilities</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Row 2 - Card 4: Wide Card with 4-Student Batch Group Photo */}
          <div className="bento-card bento-wide card-real-projects">
            <div className="card-top-category">4-Seat Micro-Batches</div>
            <div className="card-text-content">
              <h3 className="card-bold-title">
                Collaborative coding.<br />
                Real peer synergy.
              </h3>
              <p className="card-description">
                Our strict 4-students-per-batch policy ensures no overcrowding, strong peer collaboration, and full practical engagement every day.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenBatches}
              >
                <span>View batch timings</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Photo: 4 Students Coding Together */}
            <div className="card-gallery-photo-wrap photo-wide">
              <img 
                src="/assets/gallery-students.jpg" 
                alt="Four students coding and collaborating at desktop computers" 
                className="bento-gallery-img" 
                loading="lazy"
              />
              <span className="photo-caption-pill">4-Student Batch Lab</span>
            </div>
          </div>

          {/* Row 3 - Card 5: Wide Card with Individual Workstations Focus */}
          <div className="bento-card bento-wide card-fee-transparency">
            <div className="card-top-category">Student Focus</div>
            <div className="card-text-content">
              <h3 className="card-bold-title">
                Overcrowded classes?<br />
                No longer your problem.
              </h3>
              <p className="card-description">
                Every student receives their own dedicated PC terminal for the entire 90-minute daily slot. No waiting, no sharing screens.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenBatches}
              >
                <span>Reserve your workstation</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Photo: Workstation Lab */}
            <div className="card-gallery-photo-wrap photo-wide">
              <img 
                src="/assets/gallery-center.jpg" 
                alt="Individual student workstation at Suraj CS Hub" 
                className="bento-gallery-img" 
                loading="lazy"
              />
              <span className="photo-caption-pill">Dedicated Terminal</span>
            </div>
          </div>

          {/* Row 3 - Card 6: Narrow Action CTA Card (with Lightning Bolt) */}
          <div className="bento-card bento-narrow card-action-cta">
            <div className="cta-card-content">
              <h3 className="cta-headline">
                Now see<br />
                Suraj CS Hub<br />
                in action<br />
                for yourself.
              </h3>

              {/* Electric Yellow/Lime Lightning Bolt Graphic from Reference */}
              <div className="cta-lightning-bolt">
                <svg viewBox="0 0 100 120" fill="none" className="bolt-shape-svg" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="55,0 10,70 45,70 30,120 90,45 55,45" fill="#DFFF00" />
                </svg>
              </div>

              {/* Bottom Play Button Action */}
              <button 
                type="button" 
                className="btn-watch-demo"
                onClick={onOpenBookSeat}
              >
                <div className="demo-play-circle">
                  <Play size={14} fill="#111422" />
                </div>
                <span>Book free demo</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
