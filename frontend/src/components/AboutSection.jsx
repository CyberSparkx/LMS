import React from 'react';
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  BookOpen, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';
import './AboutSection.css';

export default function AboutSection({ onOpenCourses, onOpenBatches }) {
  const whyChooseUsPoints = [
    {
      id: 'batches',
      icon: <Users size={24} className="pillar-icon text-blue" />,
      title: 'Strict 4-Student Micro Batches',
      subtitle: 'Guaranteed 1-on-1 Focus',
      description: 'Unlike crowded coaching institutes with 30+ students per class, every batch at Suraj CS Hub is strictly capped at 4 students. You get your own dedicated PC workstation and daily personalized code review.'
    },
    {
      id: 'practical',
      icon: <Cpu size={24} className="pillar-icon text-emerald" />,
      title: '100% Practical & Project-First',
      subtitle: 'Zero Rote Learning',
      description: 'From Tally Prime accounting and Advanced Excel macros to full-stack React and MongoDB apps, all curriculum is learned by doing. Every concept is accompanied by real production labs on GitHub.'
    },
    {
      id: 'hybrid',
      icon: <Smartphone size={24} className="pillar-icon text-indigo" />,
      title: 'Campus Lab + Android LMS App',
      subtitle: 'Study Anywhere, Anytime',
      description: 'Receive exclusive access to our integrated web LMS portal and official Android APK. Re-watch recorded video explanations, download module PDFs, and track monthly fee dues on your phone.'
    },
    {
      id: 'certification',
      icon: <Award size={24} className="pillar-icon text-amber" />,
      title: 'Govt. & Industry Recognized Diplomas',
      subtitle: 'Career-Ready Credentials',
      description: 'Complete our authorized ADCA (12 Months) or DCA (6 Months) programs and earn government-recognized diploma certificates eligible for state/central government jobs and private sector employment.'
    }
  ];

  return (
    <section className="about-home-section" id="about" aria-label="About Suraj CS Hub">
      <div className="about-home-wrapper">
        
        {/* Section Header */}
        <div className="about-home-header">
          <span className="about-pill-tag">ABOUT OUR CENTER</span>
          <h2 className="about-headline">
            Where Personal Mentorship Meets Practical Engineering
          </h2>
          <p className="about-subheadline">
            Established under the vision of <strong>Prof. Suraj</strong>, Suraj CS Hub is a modern computer training institute and Learning Management platform designed for BCA, MCA, B.Tech students, and career changers.
          </p>
        </div>

        {/* Mission & Vision Split Grid */}
        <div className="mission-vision-grid">
          <div className="mv-card mission-card">
            <div className="mv-icon-badge badge-mission">
              <Target size={22} />
            </div>
            <div className="mv-content">
              <span className="mv-label">OUR MISSION</span>
              <h3 className="mv-title">Accessible, Hands-on Technical Mastery</h3>
              <p className="mv-desc">
                To eliminate superficial theory from computer training by providing structured, project-driven learning, rigorous practical lab hours, and transparent monthly fee access for every aspiring software learner.
              </p>
            </div>
          </div>

          <div className="mv-card vision-card">
            <div className="mv-icon-badge badge-vision">
              <Eye size={22} />
            </div>
            <div className="mv-content">
              <span className="mv-label">OUR VISION</span>
              <h3 className="mv-title">Individual-First Education for Every Student</h3>
              <p className="mv-desc">
                To establish an elite training benchmark where student success is never diluted in large classrooms. Through our strict 4-seat batch model and integrated LMS, no student is left behind with unresolved doubts.
              </p>
            </div>
          </div>
        </div>

        {/* "Why Choose Us" 4 Pillars Grid */}
        <div className="why-choose-header">
          <span className="section-mini-tag">WHY STUDENTS CHOOSE US</span>
          <h3 className="why-choose-title">Built Different from Traditional Coaching Centers</h3>
        </div>

        <div className="why-choose-grid">
          {whyChooseUsPoints.map((point) => (
            <div key={point.id} className="why-card">
              <div className="why-icon-frame">
                {point.icon}
              </div>
              <div className="why-body">
                <span className="why-subtitle">{point.subtitle}</span>
                <h4 className="why-title">{point.title}</h4>
                <p className="why-desc">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Spotlight & Center Standards Banner */}
        <div className="founder-trust-banner">
          <div className="founder-image-container">
            <img 
              src="/assets/mentor.jpg" 
              alt="Prof. Suraj - Lead Instructor & Founder" 
              className="founder-photo" 
            />
            <div className="founder-status-badge">
              <span className="pulsing-green-dot"></span>
              <span>12+ Years Teaching</span>
            </div>
          </div>

          <div className="founder-text-content">
            <span className="faculty-badge">LEAD FACULTY & FOUNDER</span>
            <h3 className="faculty-name">Prof. Suraj</h3>
            <p className="faculty-bio">
              "Over the past 12 years, I have seen hundreds of students struggle in massive classrooms where teachers rush through slides. At Suraj CS Hub, we intentionally cap our lab batches to just 4 students. When you sit in front of the computer, you write every line of code yourself, build confidence, and walk out with verified credentials."
            </p>

            <div className="faculty-check-list">
              <div className="check-item">
                <CheckCircle2 size={16} className="check-ico" />
                <span>Mentored 60,000+ students across ADCA, Web, & Python</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="check-ico" />
                <span>Daily 1-on-1 code reviews & doubt solving sessions</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="check-ico" />
                <span>Strict adherence to verified curriculum & lab standards</span>
              </div>
            </div>

            <div className="founder-cta-row">
              <button 
                type="button" 
                className="btn-faculty-batches"
                onClick={onOpenBatches}
              >
                <span>View Daily 4-Seat Slots</span>
                <ArrowRight size={15} />
              </button>
              <button 
                type="button" 
                className="btn-faculty-courses"
                onClick={onOpenCourses}
              >
                <span>Explore Certified Courses</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
