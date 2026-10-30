import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection({ onOpenCourses, onOpenBatches, onOpenBookSeat }) {
  return (
    <section className="bolt-about-section" id="about" aria-label="About Suraj CS Hub">
      <div className="bolt-about-wrapper">
        
        {/* Bolt-style Big Header */}
        <div className="bolt-header-group">
          <h2 className="bolt-main-headline">
            It’s not magic.<br />
            It’s Suraj CS Hub.
          </h2>
          <p className="bolt-subheadline">
            Here’s how 4-student micro-batches, hands-on lab projects, and certified coaching spark your computer science career faster.
          </p>
        </div>

        {/* Bento Grid layout matching the exact reference image */}
        <div className="bolt-bento-grid">
          
          {/* Row 1 - Card 1: Wide Card (Get students to the finish line) */}
          <div className="bento-card bento-wide card-finish-line">
            <div className="card-top-category">Batch Size</div>
            <div className="card-text-content">
              <h3 className="card-bold-title">
                Get every student<br />
                to the finish line.
              </h3>
              <p className="card-description">
                Strict 4-student cap per batch. Every learner gets a personal computer, dedicated lab time, and daily 1-on-1 code reviews.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenBatches}
              >
                <span>More about micro-batches</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Custom Illustration: Racing Cart / Student Sprinting to Finish */}
            <div className="card-graphic-wrapper graphic-cart">
              <svg viewBox="0 0 240 200" fill="none" className="custom-vector-art" xmlns="http://www.w3.org/2000/svg">
                {/* Red Finish Ribbon */}
                <path d="M10 130 C 50 110, 80 160, 140 125 C 190 100, 210 130, 235 110" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M120 120 C 130 90, 160 85, 180 70" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" fill="none" />
                
                {/* Tech Lab Cart / Coding Station */}
                <rect x="70" y="70" width="85" height="55" rx="10" transform="rotate(-15 70 70)" fill="#1E293B" />
                <rect x="80" y="80" width="65" height="35" rx="6" transform="rotate(-15 70 70)" fill="#38BDF8" opacity="0.3" />
                <circle cx="75" cy="145" r="14" fill="#0F172A" stroke="#CBD5E1" strokeWidth="3" />
                <circle cx="155" cy="125" r="14" fill="#0F172A" stroke="#CBD5E1" strokeWidth="3" />
                
                {/* Cheering Learner Arms & Legs */}
                <path d="M90 60 L105 30 L118 45" stroke="#10B981" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M120 50 L140 25 L155 35" stroke="#3B82F6" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="112" cy="22" r="9" fill="#FBBF24" />
                <circle cx="148" cy="18" r="9" fill="#F472B6" />
                
                {/* Speed Shadow */}
                <ellipse cx="120" cy="165" rx="60" ry="8" fill="#E2E8F0" />
              </svg>
            </div>
          </div>

          {/* Row 1 - Card 2: Narrow Card (So long, guest checkout -> So long, boring theory) */}
          <div className="bento-card bento-narrow card-boring-theory">
            <div className="card-top-category">Hybrid LMS</div>
            
            {/* Illustration on top like reference */}
            <div className="card-graphic-wrapper graphic-app-float">
              <svg viewBox="0 0 160 130" fill="none" className="custom-vector-art" xmlns="http://www.w3.org/2000/svg">
                {/* Phone Frame */}
                <rect x="42" y="15" width="76" height="100" rx="14" fill="#111827" />
                <rect x="47" y="24" width="66" height="82" rx="8" fill="#F8FAFC" />
                {/* Screen Content: LMS Code & Green Play Badge */}
                <rect x="52" y="32" width="56" height="18" rx="4" fill="#E0F2FE" />
                <circle cx="60" cy="41" r="4" fill="#0284C7" />
                <rect x="68" y="38" width="34" height="6" rx="3" fill="#0284C7" />
                
                <rect x="52" y="55" width="40" height="6" rx="3" fill="#CBD5E1" />
                <rect x="52" y="65" width="48" height="6" rx="3" fill="#E2E8F0" />
                <rect x="52" y="75" width="30" height="6" rx="3" fill="#E2E8F0" />

                {/* Animated Legs hanging out of phone */}
                <path d="M30 65 L48 78 L42 105" stroke="#10B981" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <ellipse cx="40" cy="108" rx="8" ry="4" fill="#1E293B" />
                
                <path d="M110 50 L125 70 L135 60" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <ellipse cx="138" cy="58" rx="8" ry="4" fill="#1E293B" />
              </svg>
            </div>

            <div className="card-text-content">
              <h3 className="card-bold-title">
                So long,<br />
                boring theory.
              </h3>
              <p className="card-description">
                LMS portal + official Android APK. Rewatch lab videos, study notes, and check attendance anytime.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenCourses}
              >
                <span>More about LMS app</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Row 2 - Card 3: Narrow Card (Twice the account creation -> Twice the career impact) */}
          <div className="bento-card bento-narrow card-career-impact">
            <div className="card-top-category">Certifications</div>
            
            {/* Graphic Illustration */}
            <div className="card-graphic-wrapper graphic-diploma">
              <svg viewBox="0 0 160 140" fill="none" className="custom-vector-art" xmlns="http://www.w3.org/2000/svg">
                {/* Hand Holding Smartphone */}
                <path d="M85 110 C 70 120, 60 90, 50 80 C 45 70, 48 60, 55 58 C 62 55, 68 62, 70 70" stroke="#D1D5DB" strokeWidth="14" strokeLinecap="round" fill="none" />
                <rect x="68" y="25" width="62" height="92" rx="12" fill="#1E293B" />
                <rect x="73" y="32" width="52" height="78" rx="7" fill="#FEF3C7" />
                {/* Diploma Seal on phone */}
                <circle cx="99" cy="65" r="16" fill="#F59E0B" />
                <circle cx="99" cy="65" r="12" fill="#FDE68A" />
                <path d="M93 80 L99 88 L105 80" fill="#D97706" />
                {/* Smiling Student Icon */}
                <circle cx="36" cy="45" r="14" fill="#FCA5A5" />
                <path d="M26 62 C 26 52, 46 52, 46 62" fill="#EF4444" />
              </svg>
            </div>

            <div className="card-text-content">
              <h3 className="card-bold-title">
                Twice the<br />
                career impact.
              </h3>
              <p className="card-description">
                Govt. recognized ADCA (12 Mos) & DCA (6 Mos) diplomas for government exams & IT recruitment.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenCourses}
              >
                <span>More about diplomas</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Row 2 - Card 4: Wide Card (Get them coming back for more -> Get them coding real projects) */}
          <div className="bento-card bento-wide card-real-projects">
            <div className="card-top-category">Practical Labs</div>
            <div className="card-text-content">
              <h3 className="card-bold-title">
                Get them coding<br />
                real projects. And more.
              </h3>
              <p className="card-description">
                From Tally Prime with GST and Advanced Excel to full-stack MERN, Python AI, and production APIs deployed to GitHub.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenCourses}
              >
                <span>More about curriculum</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Custom Illustration: Flying Tech Tools, Sneaker, Code Assets */}
            <div className="card-graphic-wrapper graphic-gear-pile">
              <svg viewBox="0 0 240 180" fill="none" className="custom-vector-art" xmlns="http://www.w3.org/2000/svg">
                {/* Stack of colorful tech cubes / assets */}
                <rect x="50" y="80" width="45" height="45" rx="8" fill="#10B981" />
                <rect x="40" y="115" width="55" height="30" rx="6" fill="#F43F5E" />
                
                {/* Bicycle / Rocket / Productivity element */}
                <circle cx="160" cy="55" r="14" stroke="#10B981" strokeWidth="4" fill="none" />
                <circle cx="195" cy="55" r="14" stroke="#10B981" strokeWidth="4" fill="none" />
                <path d="M160 55 L175 42 L185 55 L175 55 Z" stroke="#10B981" strokeWidth="3" fill="none" />

                {/* Sleek Sneaker / Coding Drive */}
                <path d="M120 120 C 130 90, 160 95, 175 110 L 210 115 C 215 125, 205 135, 185 138 L 130 138 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="3" />
                <path d="M125 138 L 210 138" stroke="#10B981" strokeWidth="6" strokeLinecap="round" />
                
                {/* Code Terminal Box */}
                <rect x="85" y="45" width="58" height="42" rx="7" fill="#1E293B" />
                <circle cx="95" cy="55" r="2.5" fill="#EF4444" />
                <circle cx="102" cy="55" r="2.5" fill="#F59E0B" />
                <circle cx="109" cy="55" r="2.5" fill="#10B981" />
                <path d="M96 68 L104 74 L96 80" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Row 3 - Card 5: Wide Card (Fraud no longer your problem -> Hidden fees no longer your problem) */}
          <div className="bento-card bento-wide card-fee-transparency">
            <div className="card-top-category">Payments</div>
            <div className="card-text-content">
              <h3 className="card-bold-title">
                Hidden fees. No longer<br />
                your problem.
              </h3>
              <p className="card-description">
                100% transparent monthly fees. Due on the 5th of each month, verified Razorpay payment receipts, and clear 10-day cancellation policies.
              </p>
              <button 
                type="button" 
                className="card-arrow-link"
                onClick={onOpenCourses}
              >
                <span>More about fees & policies</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Custom Illustration: Giant OK Hand Gesture with Sparkles */}
            <div className="card-graphic-wrapper graphic-ok-hand">
              <svg viewBox="0 0 240 180" fill="none" className="custom-vector-art" xmlns="http://www.w3.org/2000/svg">
                {/* Hand Doing 'OK' Sign */}
                <path d="M130 130 C 120 150, 100 170, 80 170 C 60 170, 70 140, 90 120 L 110 100" stroke="#E2E8F0" strokeWidth="18" strokeLinecap="round" fill="none" />
                
                {/* Big Hand Contour */}
                <path d="M140 110 C 130 90, 135 65, 148 65 C 160 65, 160 85, 160 100" stroke="#CBD5E1" strokeWidth="16" strokeLinecap="round" fill="none" />
                <path d="M165 95 C 160 70, 170 50, 185 50 C 198 50, 195 75, 190 95" stroke="#CBD5E1" strokeWidth="16" strokeLinecap="round" fill="none" />
                <path d="M190 90 C 190 65, 202 55, 215 58 C 225 60, 222 80, 215 105" stroke="#CBD5E1" strokeWidth="14" strokeLinecap="round" fill="none" />

                {/* Thumb + Index Finger Loop forming OK */}
                <circle cx="125" cy="85" r="26" stroke="#94A3B8" strokeWidth="16" fill="none" />

                {/* Sparkles / Yellow Stars */}
                <path d="M95 50 L98 40 L108 37 L98 34 L95 24 L92 34 L82 37 L92 40 Z" fill="#FACC15" />
                <path d="M115 28 L117 22 L123 20 L117 18 L115 12 L113 18 L107 20 L113 22 Z" fill="#FACC15" />
                
                {/* Student Figure relaxing under guarantee */}
                <circle cx="68" cy="115" r="12" fill="#C084FC" />
                <path d="M56 142 C 56 128, 80 128, 80 142 L 80 160 L 56 160 Z" fill="#8B5CF6" />
              </svg>
            </div>
          </div>

          {/* Row 3 - Card 6: Narrow Action CTA Card (Now see Bolt in action -> Now see Suraj CS Hub in action) */}
          <div className="bento-card bento-narrow card-action-cta">
            <div className="cta-card-content">
              <h3 className="cta-headline">
                Now see<br />
                Suraj CS Hub<br />
                in action<br />
                for yourself.
              </h3>

              {/* Yellow/Lime Bolt Lightning Graphic from Reference */}
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
