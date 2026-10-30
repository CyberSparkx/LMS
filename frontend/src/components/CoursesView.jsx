import React, { useState } from 'react';
import { 
  Award, 
  Code, 
  Cpu, 
  BookOpen, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Filter,
  Layers
} from 'lucide-react';
import './CoursesView.css';

export default function CoursesView({ onBookSeat }) {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 'adca',
      title: 'ADCA (Advanced Diploma in Computer Applications)',
      category: 'diploma',
      duration: '12 Months',
      difficulty: 'Beginner to Advanced',
      monthlyFee: '₹750',
      totalFee: '₹9,000',
      seatsLeft: 2,
      badge: 'Most Popular',
      color: 'blue-accent',
      description: 'Comprehensive computer training covering MS Office, Advanced Excel, Tally Prime with GST, HTML/CSS Web Design, and PC Assembly.',
      highlights: [
        'Govt. Recognized Diploma Certificate',
        'Tally Prime + GST Billing & Accounting',
        'Web Designing with HTML5 & CSS3',
        'Strict 4-student practical lab session'
      ]
    },
    {
      id: 'dca',
      title: 'DCA (Diploma in Computer Applications)',
      category: 'diploma',
      duration: '6 Months',
      difficulty: 'Beginner',
      monthlyFee: '₹700',
      totalFee: '₹4,200',
      seatsLeft: 3,
      badge: 'Core Diploma',
      color: 'indigo-accent',
      description: 'Foundational computer diploma for job seekers, college students, and office work readiness with hands-on typing and productivity tools.',
      highlights: [
        'Computer Fundamentals & Windows OS',
        'MS Word, Excel, PowerPoint & Access',
        'English & Hindi Fast Typing Certification',
        'Internet, Emailing & Digital Services'
      ]
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Web Development (MERN)',
      category: 'programming',
      duration: '6 Months',
      difficulty: 'Intermediate',
      monthlyFee: '₹1,200',
      totalFee: '₹7,200',
      seatsLeft: 1,
      badge: 'Placement Oriented',
      color: 'green-accent',
      description: 'Master modern frontend & backend web engineering. Build live full-stack web applications with React, Node.js, Express, and MongoDB.',
      highlights: [
        'Modern JavaScript (ES6+) & TypeScript',
        'React 19 & Next.js Single Page Apps',
        'Node.js REST API & MongoDB Database',
        'GitHub portfolio with 5 live deployed projects'
      ]
    },
    {
      id: 'python',
      title: 'Python, Machine Learning & AI Track',
      category: 'programming',
      duration: '4 Months',
      difficulty: 'Intermediate',
      monthlyFee: '₹1,500',
      totalFee: '₹6,000',
      seatsLeft: 2,
      badge: 'High Demand',
      color: 'purple-accent',
      description: 'From Python basics to algorithmic problem solving, automated scripts, data analysis with Pandas, and machine learning foundations.',
      highlights: [
        'Python syntax, OOPs & Data Structures',
        'Data analysis with NumPy & Pandas',
        'Machine Learning models with Scikit-Learn',
        'Live practical mini-projects'
      ]
    },
    {
      id: 'ccc',
      title: 'CCC (Course on Computer Concepts)',
      category: 'short-term',
      duration: '3 Months',
      difficulty: 'Beginner',
      monthlyFee: '₹600',
      totalFee: '₹1,800',
      seatsLeft: 4,
      badge: 'Govt. Exam Prep',
      color: 'amber-accent',
      description: 'Targeted preparation for NIELIT CCC exam required for various state and central government competitive examinations.',
      highlights: [
        'Official NIELIT syllabus mapped',
        'Mock exams & online test practice',
        'LibreOffice Suite (Writer, Calc, Impress)',
        '100% first-attempt pass guarantee'
      ]
    }
  ];

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(c => c.category === filter);

  return (
    <div className="courses-page-container">
      <div className="courses-header-section">
        <span className="courses-pretitle">SURAJ CS HUB CURRICULUM</span>
        <h2 className="courses-main-title">Certified Computer Courses</h2>
        <p className="courses-subtitle">
          Every course features 100% practical lab sessions in our strict <strong>4-students-per-batch</strong> setup.
        </p>

        {/* Category Filters */}
        <div className="courses-filter-tabs">
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
            className={`filter-tab ${filter === 'short-term' ? 'active' : ''}`}
            onClick={() => setFilter('short-term')}
          >
            Short-Term (CCC)
          </button>
        </div>
      </div>

      {/* Grid of Courses */}
      <div className="courses-cards-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className={`course-card-item ${course.color}`}>
            <div className="card-top-tags">
              <span className="course-badge">{course.badge}</span>
              <span className="seats-tag">
                <Users size={13} />
                {course.seatsLeft} of 4 seats open
              </span>
            </div>

            <h3 className="course-card-title">{course.title}</h3>
            <p className="course-card-desc">{course.description}</p>

            <div className="course-meta-pills">
              <span className="meta-pill">
                <Clock size={13} />
                {course.duration}
              </span>
              <span className="meta-pill">
                <Layers size={13} />
                {course.difficulty}
              </span>
            </div>

            <div className="course-highlights-box">
              {course.highlights.map((h, i) => (
                <div key={i} className="highlight-point">
                  <CheckCircle2 size={14} className="hl-check" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="course-card-footer">
              <div className="pricing-info">
                <span className="price-monthly"><strong>{course.monthlyFee}</strong> /month</span>
                <span className="price-total">Total: {course.totalFee}</span>
              </div>

              <button 
                type="button" 
                className="btn-book-course-seat"
                onClick={onBookSeat}
              >
                <span>Book Seat</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
