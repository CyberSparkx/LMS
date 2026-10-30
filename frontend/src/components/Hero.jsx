import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Sparkles, 
  ShieldCheck, 
  Code, 
  CheckCircle2, 
  Flame, 
  BookOpen, 
  Users, 
  Terminal, 
  Layers, 
  ArrowRight, 
  Star,
  Smartphone,
  Cpu,
  Award
} from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';

export default function Hero({ onOpenReserve }) {
  const [activeCourseTab, setActiveCourseTab] = useState('dsa');
  const [phoneScreenTab, setPhoneScreenTab] = useState('focus');
  const floatingCardsRef = useRef([]);

  useEffect(() => {
    // GSAP Floating micro-animation for floating cards
    const ctx = gsap.context(() => {
      gsap.to('.float-card-1', {
        y: '-=12',
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.float-card-2', {
        y: '+=14',
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });
      gsap.to('.float-card-3', {
        y: '-=10',
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      });
      gsap.to('.float-card-4', {
        y: '+=11',
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" aria-label="Hero Section">
      {/* Background Ripple Circles (Concentric Rings from reference design) */}
      <div className="hero-ripple-backdrop" aria-hidden="true">
        <div className="ripple-ring ring-1"></div>
        <div className="ripple-ring ring-2"></div>
        <div className="ripple-ring ring-3"></div>
        <div className="ripple-ring ring-4"></div>
        <div className="ripple-ring ring-5"></div>
      </div>

      <div className="hero-content-wrapper">
        {/* Top Floating Badge (Social Proof Pill from Reference Image 2) */}
        <div className="hero-top-badge">
          <div className="badge-avatar-group">
            <img src="/assets/student.jpg" alt="Student 1" className="badge-avatar" />
            <img src="/assets/mentor.jpg" alt="Mentor" className="badge-avatar" />
            <div className="badge-avatar badge-avatar-fallback">
              <Star size={12} fill="#F59E0B" color="#F59E0B" />
            </div>
          </div>
          <span className="badge-text">
            <strong>60K+</strong> Students Mentored &bull; 4.9/5 Rating
          </span>
        </div>

        {/* Main Display Headline (Matching Reference Image 1 & 2) */}
        <h1 className="hero-main-title">
          <span>Welcome</span>
          <span className="title-break">To Suraj CS Hub</span>
        </h1>

        <p className="hero-subtext-lead">
          The premier Computer Science academy for BCA, MCA, B.Tech & coding enthusiasts.
          Master Algorithms, Full-Stack Architecture, and AI with live mentor guidance.
        </p>

        {/* Primary Action Buttons */}
        <div className="hero-cta-group">
          <button 
            type="button" 
            className="btn-primary-hero"
            onClick={onOpenReserve}
          >
            <span>Explore Courses</span>
            <ArrowRight size={18} />
          </button>

          <button 
            type="button" 
            className="btn-glass-hero"
            onClick={onOpenReserve}
          >
            <Play size={16} fill="currentColor" />
            <span>Book Free Demo Class</span>
          </button>
        </div>

        {/* Interactive Visual Showcase Grid */}
        <div className="hero-showcase-stage">
          {/* Left Hook Text (Exact placement as Image 1: 'The ultimate shopping hack is here') */}
          <div className="stage-left-hook">
            <span className="hook-pill-label">Next-Gen LMS</span>
            <h2 className="hook-headline">
              The ultimate<br />
              coding mastery<br />
              is here.
            </h2>
            <div className="hook-feature-bullets">
              <div className="bullet-item">
                <CheckCircle2 size={16} className="bullet-icon" />
                <span>Zero boring theory</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} className="bullet-icon" />
                <span>1-on-1 Daily Code Review</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} className="bullet-icon" />
                <span>Campus & Online Batches</span>
              </div>
            </div>
          </div>

          {/* Central Device Mockup (Matching the Phone Mockup in Reference Image 1) */}
          <div className="stage-center-device">
            <div className="phone-mockup-frame">
              {/* Phone Speaker & Dynamic Island */}
              <div className="phone-dynamic-island">
                <div className="island-camera"></div>
              </div>

              {/* In-Phone App Interface */}
              <div className="phone-screen-content">
                {/* App Topbar */}
                <div className="app-topbar">
                  <div className="student-profile-mini">
                    <img src="/assets/student.jpg" alt="Current Student" className="student-pfp" />
                    <div className="student-pfp-info">
                      <span className="pfp-greeting">Hello!</span>
                      <strong className="pfp-name">Naren Roy</strong>
                    </div>
                  </div>
                  <div className="app-streak-pill">
                    <Flame size={13} className="flame-icon" />
                    <span>14d</span>
                  </div>
                </div>

                {/* In Focus Badge / Card */}
                <div className="app-focus-card">
                  <div className="focus-header">
                    <span className="focus-tag">
                      <span className="pulsing-dot"></span>
                      IN FOCUS LIVE
                    </span>
                    <span className="focus-time">7:30 PM Today</span>
                  </div>
                  <h4 className="focus-course-title">
                    DSA & Graph Algorithms Masterclass
                  </h4>
                  <div className="focus-mentor-row">
                    <img src="/assets/mentor.jpg" alt="Prof. Suraj" className="focus-mentor-img" />
                    <div className="focus-mentor-text">
                      <span className="mentor-name">Prof. Suraj</span>
                      <span className="mentor-role">Lead CS Faculty</span>
                    </div>
                    <button 
                      type="button" 
                      className="btn-join-live"
                      onClick={() => alert("Joining live stream session with Prof. Suraj...")}
                    >
                      Join
                    </button>
                  </div>
                </div>

                {/* Enrolled Courses Tab & Progress */}
                <div className="app-modules-section">
                  <div className="modules-header">
                    <span>Active Tracks</span>
                    <span className="badge-count">3 Ongoing</span>
                  </div>

                  <div className="module-item-card">
                    <div className="module-icon-box code-box">
                      <Terminal size={15} />
                    </div>
                    <div className="module-info">
                      <div className="module-title-row">
                        <span className="module-name">Full-Stack MERN & Next.js</span>
                        <span className="module-perc">84%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '84%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="module-item-card">
                    <div className="module-icon-box ai-box">
                      <Cpu size={15} />
                    </div>
                    <div className="module-info">
                      <div className="module-title-row">
                        <span className="module-name">Python & Machine Learning</span>
                        <span className="module-perc">65%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="module-item-card">
                    <div className="module-icon-box dsa-box">
                      <Layers size={15} />
                    </div>
                    <div className="module-info">
                      <div className="module-title-row">
                        <span className="module-name">C++ / Java Core & OOPs</span>
                        <span className="module-perc">92%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom App Navigation */}
                <div className="app-bottom-nav">
                  <div className="app-nav-icon active">
                    <BookOpen size={16} />
                  </div>
                  <div className="app-nav-icon">
                    <Code size={16} />
                  </div>
                  <div className="app-nav-icon">
                    <Users size={16} />
                  </div>
                  <div className="app-nav-icon">
                    <Award size={16} />
                  </div>
                </div>
              </div>

              {/* Hand Grip Visual Depth (Shadow beneath phone) */}
              <div className="phone-hand-shadow"></div>
            </div>
          </div>

          {/* Right Hook & Store Badges (Matching Image 1: 'Bye bye spam...' + App Store & Google Play) */}
          <div className="stage-right-hook">
            <div className="right-mentor-quote-card">
              <img src="/assets/student.jpg" alt="Student Review" className="quote-avatar" />
              <div className="quote-text-group">
                <p className="quote-title">"Cleared my tech interviews in 3 months!"</p>
                <span className="quote-author">Pooja Nair &bull; Placed at Top Product Co</span>
              </div>
            </div>

            <p className="right-subtext-lead">
              Bye bye rote learning. See you later confusing tutorials. Welcome to real-world code architecture.
            </p>

            {/* App Store & Google Play Action Pills */}
            <div className="store-buttons-group">
              <button 
                type="button" 
                className="btn-store-pill"
                onClick={onOpenReserve}
              >
                <Smartphone size={16} />
                <div className="store-pill-text">
                  <span className="store-small">Student App</span>
                  <strong className="store-bold">App Store</strong>
                </div>
              </button>

              <button 
                type="button" 
                className="btn-store-pill"
                onClick={onOpenReserve}
              >
                <Play size={16} fill="currentColor" />
                <div className="store-pill-text">
                  <span className="store-small">Get it on</span>
                  <strong className="store-bold">Google Play</strong>
                </div>
              </button>
            </div>
          </div>

          {/* Floating Glassmorphic Cards (Orbiting like in Image 1 & 2) */}
          
          {/* Card 1: Left Float Card (100% Practical Labs) */}
          <div className="floating-card float-card-1">
            <div className="float-card-icon-wrap icon-green">
              <ShieldCheck size={20} />
            </div>
            <div className="float-card-content">
              <h5 className="float-card-title">100% Practical Labs</h5>
              <p className="float-card-desc">Production-grade projects on GitHub</p>
            </div>
          </div>

          {/* Card 2: Right Float Card (15+ Tech Stacks) */}
          <div className="floating-card float-card-2">
            <div className="float-card-icon-wrap icon-indigo">
              <Code size={20} />
            </div>
            <div className="float-card-content">
              <h5 className="float-card-title">15+ Tech Stacks</h5>
              <div className="tech-tags-mini">
                <span>C++</span>
                <span>Java</span>
                <span>React</span>
                <span>Python</span>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Left Float Card (Mentor Availability) */}
          <div className="floating-card float-card-3">
            <img src="/assets/mentor.jpg" alt="Prof. Suraj" className="float-avatar" />
            <div className="float-card-content">
              <div className="mentor-status-line">
                <span className="online-beacon"></span>
                <span className="status-label">Online for Doubts</span>
              </div>
              <h5 className="float-card-title">Prof. Suraj</h5>
              <span className="float-card-desc">12+ Yrs CS Mentorship</span>
            </div>
          </div>

          {/* Card 4: Top Right Success Badge */}
          <div className="floating-card float-card-4">
            <div className="float-card-icon-wrap icon-amber">
              <Award size={20} />
            </div>
            <div className="float-card-content">
              <h5 className="float-card-title">98.4% Placement</h5>
              <span className="float-card-desc">Average 8.2 LPA Package</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
