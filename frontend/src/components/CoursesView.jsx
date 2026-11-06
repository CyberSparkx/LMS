import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Database, 
  Code2, 
  Cpu, 
  Receipt, 
  Megaphone, 
  ArrowRight 
} from 'lucide-react';
import './CoursesView.css';

// Abstract Geometric SVG Illustrations — Strict 2-Color Palette (Brand Blue #0077ff & Dark Slate #111422)
function Art1() {
  return (
    <svg viewBox="0 0 130 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="art-svg">
      <rect x="75" y="15" width="45" height="75" rx="4" fill="#ffffff" fillOpacity="0.15" />
      <path d="M75 25H120 M75 35H120 M75 45H120 M75 55H120 M75 65H120 M75 75H120" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="80" cy="70" r="22" fill="#ffffff" fillOpacity="0.2" />
      <circle cx="80" cy="70" r="16" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx="80" cy="70" r="10" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx="50" cy="78" r="16" fill="#ffffff" fillOpacity="0.3" />
      <path d="M36 78 Q50 67 64 78 M38 84 Q50 73 62 84 M42 89 Q50 80 58 89" stroke="#005cd2" strokeWidth="1.2" strokeOpacity="0.5" />
    </svg>
  );
}

function Art2() {
  return (
    <svg viewBox="0 0 130 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="art-svg">
      <path d="M70 15 H120 V70 Q70 70 70 15 Z" fill="#dbeafe" fillOpacity="0.8" />
      <path d="M70 26 Q108 26 120 54 M70 38 Q104 38 120 65" stroke="#0077ff" strokeWidth="1.3" strokeOpacity="0.7" />
      <rect x="90" y="48" width="35" height="42" rx="3" fill="#0077ff" fillOpacity="0.9" />
      <path d="M90 56 H125 M90 64 H125 M90 72 H125 M90 80 H125" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.55" />
      <circle cx="74" cy="72" r="20" fill="#111422" fillOpacity="0.9" />
      <path d="M58 72 Q74 58 90 72 M60 78 Q74 65 88 78 M64 84 Q74 73 84 84" stroke="#93c5fd" strokeWidth="1.2" strokeOpacity="0.85" />
    </svg>
  );
}

function Art3() {
  return (
    <svg viewBox="0 0 130 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="art-svg">
      <path d="M65 90 V42 Q92 14 120 42 V90 Z" fill="#eff6ff" fillOpacity="0.9" />
      <path d="M75 90 V46 Q92 26 110 46 V90 M85 90 V54 Q92 38 100 54 V90" stroke="#0077ff" strokeWidth="1.3" strokeOpacity="0.65" />
      <rect x="85" y="50" width="40" height="40" rx="4" fill="#0077ff" fillOpacity="0.9" />
      <path d="M85 60 H125 M85 70 H125 M85 80 H125" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.6" />
      <circle cx="68" cy="70" r="20" fill="#111422" fillOpacity="0.9" />
      <path d="M52 70 Q68 56 84 70 M54 76 Q68 63 82 76 M58 82 Q68 71 78 82" stroke="#60a5fa" strokeWidth="1.2" strokeOpacity="0.85" />
    </svg>
  );
}

function Art4() {
  return (
    <svg viewBox="0 0 130 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="art-svg">
      <path d="M55 90 Q55 58 88 58 Q120 58 120 90 Z" fill="#dbeafe" fillOpacity="0.8" />
      <path d="M62 90 Q62 66 88 66 Q113 66 113 90 M69 90 Q69 74 88 74 Q106 74 106 90" stroke="#0077ff" strokeWidth="1.2" strokeOpacity="0.6" />
      <circle cx="104" cy="54" r="21" fill="#0077ff" fillOpacity="0.9" />
      <path d="M86 54 Q104 42 122 54 M88 60 Q104 48 120 60 M92 66 Q104 55 116 66" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.75" />
      <circle cx="60" cy="80" r="11" fill="#111422" fillOpacity="0.9" />
      <circle cx="60" cy="80" r="7" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.7" />
    </svg>
  );
}

function Art5() {
  return (
    <svg viewBox="0 0 130 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="art-svg">
      <path d="M72 16 H120 V64 Q72 64 72 16 Z" fill="#dbeafe" fillOpacity="0.8" />
      <path d="M72 28 Q108 28 120 52 M72 40 Q104 40 120 60" stroke="#0077ff" strokeWidth="1.2" strokeOpacity="0.65" />
      <rect x="76" y="48" width="44" height="40" rx="4" fill="#0077ff" fillOpacity="0.9" />
      <path d="M76 58 L112 88 M84 48 L120 78 M96 48 L120 68" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.65" />
      <circle cx="96" cy="32" r="11" fill="#ffffff" fillOpacity="0.9" />
      <circle cx="96" cy="32" r="6" fill="#111422" fillOpacity="0.85" />
      <circle cx="72" cy="78" r="16" fill="#111422" fillOpacity="0.85" />
      <path d="M59 78 Q72 67 85 78 M61 83 Q72 73 83 83" stroke="#93c5fd" strokeWidth="1.1" strokeOpacity="0.7" />
    </svg>
  );
}

function Art6() {
  return (
    <svg viewBox="0 0 130 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="art-svg">
      <path d="M76 90 V46 Q100 22 120 46 V90 Z" fill="#eff6ff" fillOpacity="0.85" />
      <path d="M84 90 V52 Q100 34 114 52 V90 M92 90 V58 Q100 44 108 58 V90" stroke="#0077ff" strokeWidth="1.2" strokeOpacity="0.6" />
      <path d="M64 90 Q64 62 92 62 V90 Z" fill="#0077ff" fillOpacity="0.9" />
      <path d="M69 90 Q69 68 92 68 M75 90 Q75 75 92 75 M81 90 Q81 82 92 82" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.6" />
      <circle cx="104" cy="50" r="14" fill="#111422" fillOpacity="0.9" />
      <circle cx="104" cy="50" r="9" stroke="#93c5fd" strokeWidth="1.1" strokeOpacity="0.7" />
    </svg>
  );
}

export default function CoursesView({ onBookSeat }) {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 'adca',
      title: 'ADCA Diploma',
      subtitle: '12 Months • Strict 4 Seats',
      category: 'diploma',
      monthlyFee: '₹750/mo',
      bookingDeposit: '₹500 to reserve seat',
      isFeatured: true,
      topIcon: LayoutGrid,
      art: Art1,
      description: 'MS Office, Advanced Excel, Tally Prime with GST, HTML/CSS Web Design, and PC Assembly.'
    },
    {
      id: 'dca',
      title: 'DCA Diploma',
      subtitle: '6 Months • Strict 4 Seats',
      category: 'diploma',
      monthlyFee: '₹700/mo',
      bookingDeposit: '₹500 to reserve seat',
      isFeatured: false,
      topIcon: Database,
      art: Art2,
      description: 'Computer Fundamentals, MS Office Suite, Hindi/English typing, and everyday internet utility tools.'
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Web Dev',
      subtitle: '6 Months • Strict 4 Seats',
      category: 'programming',
      monthlyFee: '₹1,200/mo',
      bookingDeposit: '₹500 to reserve seat',
      isFeatured: false,
      topIcon: Code2,
      art: Art3,
      description: 'Modern JavaScript, React 19 single page apps, Node.js REST APIs, and MongoDB database.'
    },
    {
      id: 'python',
      title: 'Python & AI Track',
      subtitle: '4 Months • Strict 4 Seats',
      category: 'programming',
      monthlyFee: '₹1,500/mo',
      bookingDeposit: '₹500 to reserve seat',
      isFeatured: false,
      topIcon: Cpu,
      art: Art4,
      description: 'Python syntax, OOPs, algorithmic logic, Pandas data science, and Scikit-Learn machine learning.'
    },
    {
      id: 'tally',
      title: 'Tally Prime + GST',
      subtitle: '3 Months • Strict 4 Seats',
      category: 'accounting',
      monthlyFee: '₹800/mo',
      bookingDeposit: '₹500 to reserve seat',
      isFeatured: false,
      topIcon: Receipt,
      art: Art5,
      description: 'Hands-on GST billing, invoicing, E-Way bills, payroll, inventory, and financial balance sheets.'
    },
    {
      id: 'ccc',
      title: 'NIELIT CCC Prep',
      subtitle: '3 Months • Strict 4 Seats',
      category: 'short-term',
      monthlyFee: '₹600/mo',
      bookingDeposit: '₹500 to reserve seat',
      isFeatured: false,
      topIcon: Megaphone,
      art: Art6,
      description: 'Official NIELIT syllabus mapped, LibreOffice suite, online mock exams & 100% first-attempt pass prep.'
    }
  ];

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(c => c.category === filter);

  return (
    <div className="courses-page-container">
      {/* Header Section */}
      <div className="courses-header-section">
        <span className="courses-pretitle">SURAJ CS HUB CURRICULUM</span>
        <h1 className="courses-main-title">Certified Computer Programs</h1>
        <p className="courses-subtitle">
          Hands-on practical training with dedicated PC terminals in our strict <strong>4-students-per-batch</strong> setup.
        </p>

        {/* Filter Pills */}
        <div className="courses-filter-tabs" role="tablist" aria-label="Course categories">
          <button 
            type="button" 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Programs
          </button>
          <button 
            type="button" 
            className={`filter-tab ${filter === 'diploma' ? 'active' : ''}`}
            onClick={() => setFilter('diploma')}
          >
            Diplomas (ADCA & DCA)
          </button>
          <button 
            type="button" 
            className={`filter-tab ${filter === 'programming' ? 'active' : ''}`}
            onClick={() => setFilter('programming')}
          >
            Programming (Web & Python)
          </button>
          <button 
            type="button" 
            className={`filter-tab ${filter === 'accounting' ? 'active' : ''}`}
            onClick={() => setFilter('accounting')}
          >
            Accounting (Tally + GST)
          </button>
          <button 
            type="button" 
            className={`filter-tab ${filter === 'short-term' ? 'active' : ''}`}
            onClick={() => setFilter('short-term')}
          >
            Short-Term (CCC)
          </button>
        </div>
      </div>

      {/* Grid of Minimal Squarish Cards Matching Reference Architecture */}
      <div className="courses-cards-grid">
        {filteredCourses.map((course) => {
          const TopIcon = course.topIcon;
          const ArtComponent = course.art;

          return (
            <div 
              key={course.id} 
              className={`course-squarish-card ${course.isFeatured ? 'is-featured-blue' : 'is-clean-white'}`}
            >
              {/* Top Row: Icon in Top Right */}
              <div className="card-top-bar">
                <div className="card-top-icon">
                  <TopIcon size={22} strokeWidth={2.2} />
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="card-content-block">
                <h2 className="card-main-title">{course.title}</h2>
                <span className="card-track-subtitle">{course.subtitle}</span>
                <p className="card-short-desc">{course.description}</p>
              </div>

              {/* Bottom Area: Seat Booking Amount, Arrow Button & Geometric Art */}
              <div className="card-bottom-bar">
                {/* Left: Pricing & Arrow CTA */}
                <div className="card-bottom-left">
                  <div className="card-price-row">
                    <span className="card-fee-highlight">{course.monthlyFee}</span>
                    <span className="card-deposit-note">{course.bookingDeposit}</span>
                  </div>

                  <button 
                    type="button" 
                    className="card-arrow-cta-btn"
                    onClick={onBookSeat}
                    aria-label={`Book seat for ${course.title} - ${course.bookingDeposit}`}
                    title="Book Seat"
                  >
                    <ArrowRight size={18} strokeWidth={2.4} />
                  </button>
                </div>

                {/* Right: Abstract Geometric Sculpture (Matching Reference) */}
                <div className="card-art-box" aria-hidden="true">
                  <ArtComponent />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
