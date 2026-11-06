// Course curriculum data for the learning view
// Each course maps to modules -> lessons

export const courseContent = {
  adca: {
    id: 'adca',
    title: 'ADCA Diploma',
    fullTitle: 'Advanced Diploma in Computer Applications',
    totalLessons: 24,
    modules: [
      {
        id: 'adca-m0',
        title: 'Module 00 — Orientation & Setup',
        lessons: [
          { id: 'adca-m0-l1', title: 'Welcome to ADCA Diploma', duration: '8 min', type: 'video', completed: true },
          { id: 'adca-m0-l2', title: 'Lab Rules & PC Setup', duration: '12 min', type: 'video', completed: true },
        ],
      },
      {
        id: 'adca-m1',
        title: 'Module 01 — Computer Fundamentals',
        lessons: [
          { id: 'adca-m1-l1', title: 'Day 1 – Introduction to Computers', duration: '45 min', type: 'video', completed: true },
          { id: 'adca-m1-l2', title: 'Day 2 – Operating Systems & Windows 11', duration: '50 min', type: 'video', completed: false },
          { id: 'adca-m1-l3', title: 'Day 3 – File Management & Storage', duration: '40 min', type: 'video', completed: false },
          { id: 'adca-m1-l4', title: 'Day 4 – Internet & Email Essentials', duration: '35 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'adca-m2',
        title: 'Module 02 — MS Office Suite',
        lessons: [
          { id: 'adca-m2-l1', title: 'Day 1 – MS Word Basics', duration: '55 min', type: 'video', completed: false },
          { id: 'adca-m2-l2', title: 'Day 2 – Advanced Word Formatting', duration: '50 min', type: 'video', completed: false },
          { id: 'adca-m2-l3', title: 'Day 3 – MS Excel Fundamentals', duration: '60 min', type: 'video', completed: false },
          { id: 'adca-m2-l4', title: 'Day 4 – Advanced Excel & Formulas', duration: '65 min', type: 'video', completed: false },
          { id: 'adca-m2-l5', title: 'Day 5 – MS PowerPoint Presentation', duration: '45 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'adca-m3',
        title: 'Module 03 — Tally Prime with GST',
        lessons: [
          { id: 'adca-m3-l1', title: 'Day 1 – Tally Prime Introduction', duration: '55 min', type: 'video', completed: false },
          { id: 'adca-m3-l2', title: 'Day 2 – Ledgers & Accounting Groups', duration: '60 min', type: 'video', completed: false },
          { id: 'adca-m3-l3', title: 'Day 3 – GST Billing & Invoicing', duration: '70 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'adca-m4',
        title: 'Module 04 — Web Design (HTML & CSS)',
        lessons: [
          { id: 'adca-m4-l1', title: 'Day 1 – HTML Structure & Tags', duration: '50 min', type: 'video', completed: false },
          { id: 'adca-m4-l2', title: 'Day 2 – CSS Styling & Layout', duration: '55 min', type: 'video', completed: false },
          { id: 'adca-m4-l3', title: 'Day 3 – Building a Complete Webpage', duration: '65 min', type: 'video', completed: false },
        ],
      },
    ],
  },

  dca: {
    id: 'dca',
    title: 'DCA Diploma',
    fullTitle: 'Diploma in Computer Applications',
    totalLessons: 16,
    modules: [
      {
        id: 'dca-m0',
        title: 'Module 00 — Getting Started',
        lessons: [
          { id: 'dca-m0-l1', title: 'Welcome & Orientation', duration: '8 min', type: 'video', completed: true },
        ],
      },
      {
        id: 'dca-m1',
        title: 'Module 01 — Computer Basics',
        lessons: [
          { id: 'dca-m1-l1', title: 'Day 1 – Computer Fundamentals', duration: '45 min', type: 'video', completed: true },
          { id: 'dca-m1-l2', title: 'Day 2 – Windows & File Management', duration: '40 min', type: 'video', completed: false },
          { id: 'dca-m1-l3', title: 'Day 3 – Internet & Email', duration: '35 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'dca-m2',
        title: 'Module 02 — MS Office',
        lessons: [
          { id: 'dca-m2-l1', title: 'Day 1 – MS Word', duration: '50 min', type: 'video', completed: false },
          { id: 'dca-m2-l2', title: 'Day 2 – MS Excel Basics', duration: '55 min', type: 'video', completed: false },
          { id: 'dca-m2-l3', title: 'Day 3 – MS PowerPoint', duration: '45 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'dca-m3',
        title: 'Module 03 — Hindi & English Typing',
        lessons: [
          { id: 'dca-m3-l1', title: 'Day 1 – Typing Technique & Speed', duration: '50 min', type: 'video', completed: false },
          { id: 'dca-m3-l2', title: 'Day 2 – Hindi Typing (Mangal)', duration: '55 min', type: 'video', completed: false },
          { id: 'dca-m3-l3', title: 'Day 3 – Speed Test & Practice', duration: '45 min', type: 'video', completed: false },
        ],
      },
    ],
  },

  fullstack: {
    id: 'fullstack',
    title: 'Full‑Stack Web Dev',
    fullTitle: 'Full‑Stack Web Development (MERN Stack)',
    totalLessons: 20,
    modules: [
      {
        id: 'fs-m0',
        title: 'Module 00 — Setup & Orientation',
        lessons: [
          { id: 'fs-m0-l1', title: 'Welcome & VS Code Setup', duration: '15 min', type: 'video', completed: true },
          { id: 'fs-m0-l2', title: 'Git & GitHub Basics', duration: '30 min', type: 'video', completed: true },
        ],
      },
      {
        id: 'fs-m1',
        title: 'Module 01 — HTML & CSS Foundations',
        lessons: [
          { id: 'fs-m1-l1', title: 'Day 1 – HTML5 Semantic Structure', duration: '55 min', type: 'video', completed: false },
          { id: 'fs-m1-l2', title: 'Day 2 – CSS3 Flexbox & Grid', duration: '60 min', type: 'video', completed: false },
          { id: 'fs-m1-l3', title: 'Day 3 – Responsive Design', duration: '50 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'fs-m2',
        title: 'Module 02 — JavaScript & TypeScript',
        lessons: [
          { id: 'fs-m2-l1', title: 'Day 1 – Modern JS (ES6+)', duration: '65 min', type: 'video', completed: false },
          { id: 'fs-m2-l2', title: 'Day 2 – DOM & Events', duration: '55 min', type: 'video', completed: false },
          { id: 'fs-m2-l3', title: 'Day 3 – TypeScript Basics', duration: '60 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'fs-m3',
        title: 'Module 03 — React 19',
        lessons: [
          { id: 'fs-m3-l1', title: 'Day 1 – Components & JSX', duration: '65 min', type: 'video', completed: false },
          { id: 'fs-m3-l2', title: 'Day 2 – Hooks & State', duration: '70 min', type: 'video', completed: false },
          { id: 'fs-m3-l3', title: 'Day 3 – React Router & API Calls', duration: '65 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'fs-m4',
        title: 'Module 04 — Node.js & MongoDB',
        lessons: [
          { id: 'fs-m4-l1', title: 'Day 1 – Node.js & Express REST API', duration: '70 min', type: 'video', completed: false },
          { id: 'fs-m4-l2', title: 'Day 2 – MongoDB & Mongoose', duration: '65 min', type: 'video', completed: false },
          { id: 'fs-m4-l3', title: 'Day 3 – Full‑Stack Project', duration: '90 min', type: 'video', completed: false },
        ],
      },
    ],
  },

  python: {
    id: 'python',
    title: 'Python & AI Track',
    fullTitle: 'Python Programming & Data Science',
    totalLessons: 16,
    modules: [
      {
        id: 'py-m0',
        title: 'Module 00 — Environment Setup',
        lessons: [
          { id: 'py-m0-l1', title: 'Python Installation & VS Code', duration: '15 min', type: 'video', completed: true },
        ],
      },
      {
        id: 'py-m1',
        title: 'Module 01 — Python Fundamentals',
        lessons: [
          { id: 'py-m1-l1', title: 'Day 1 – Variables, Data Types & I/O', duration: '55 min', type: 'video', completed: false },
          { id: 'py-m1-l2', title: 'Day 2 – Control Flow & Loops', duration: '55 min', type: 'video', completed: false },
          { id: 'py-m1-l3', title: 'Day 3 – Functions & Modules', duration: '60 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'py-m2',
        title: 'Module 02 — OOPs',
        lessons: [
          { id: 'py-m2-l1', title: 'Day 1 – Classes & Objects', duration: '60 min', type: 'video', completed: false },
          { id: 'py-m2-l2', title: 'Day 2 – Inheritance & Polymorphism', duration: '55 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'py-m3',
        title: 'Module 03 — Data Science with Pandas & NumPy',
        lessons: [
          { id: 'py-m3-l1', title: 'Day 1 – NumPy Arrays', duration: '60 min', type: 'video', completed: false },
          { id: 'py-m3-l2', title: 'Day 2 – Pandas DataFrames', duration: '65 min', type: 'video', completed: false },
          { id: 'py-m3-l3', title: 'Day 3 – Data Visualisation', duration: '55 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'py-m4',
        title: 'Module 04 — Machine Learning Intro',
        lessons: [
          { id: 'py-m4-l1', title: 'Day 1 – Scikit‑Learn Basics', duration: '65 min', type: 'video', completed: false },
          { id: 'py-m4-l2', title: 'Day 2 – Model Training & Evaluation', duration: '70 min', type: 'video', completed: false },
          { id: 'py-m4-l3', title: 'Day 3 – Project: Prediction Model', duration: '80 min', type: 'video', completed: false },
        ],
      },
    ],
  },

  tally: {
    id: 'tally',
    title: 'Tally Prime + GST',
    fullTitle: 'Financial Accounting & Taxation',
    totalLessons: 12,
    modules: [
      {
        id: 'tl-m0',
        title: 'Module 00 — Getting Started',
        lessons: [
          { id: 'tl-m0-l1', title: 'Welcome & Tally Installation', duration: '10 min', type: 'video', completed: true },
        ],
      },
      {
        id: 'tl-m1',
        title: 'Module 01 — Tally Prime Fundamentals',
        lessons: [
          { id: 'tl-m1-l1', title: 'Day 1 – Company Creation & Ledgers', duration: '55 min', type: 'video', completed: false },
          { id: 'tl-m1-l2', title: 'Day 2 – Voucher Entries', duration: '60 min', type: 'video', completed: false },
          { id: 'tl-m1-l3', title: 'Day 3 – Inventory Management', duration: '55 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'tl-m2',
        title: 'Module 02 — GST & Taxation',
        lessons: [
          { id: 'tl-m2-l1', title: 'Day 1 – GST Setup & Configuration', duration: '60 min', type: 'video', completed: false },
          { id: 'tl-m2-l2', title: 'Day 2 – GST Invoicing & E‑Way Bills', duration: '65 min', type: 'video', completed: false },
          { id: 'tl-m2-l3', title: 'Day 3 – TDS & Payroll', duration: '60 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'tl-m3',
        title: 'Module 03 — Reports & Analysis',
        lessons: [
          { id: 'tl-m3-l1', title: 'Day 1 – Balance Sheet & P&L', duration: '55 min', type: 'video', completed: false },
          { id: 'tl-m3-l2', title: 'Day 2 – MIS Reports', duration: '50 min', type: 'video', completed: false },
        ],
      },
    ],
  },

  ccc: {
    id: 'ccc',
    title: 'NIELIT CCC Prep',
    fullTitle: 'Course on Computer Concepts (NIELIT)',
    totalLessons: 12,
    modules: [
      {
        id: 'ccc-m0',
        title: 'Module 00 — Orientation',
        lessons: [
          { id: 'ccc-m0-l1', title: 'Welcome & Exam Pattern Overview', duration: '12 min', type: 'video', completed: true },
        ],
      },
      {
        id: 'ccc-m1',
        title: 'Module 01 — Computer Fundamentals (CCC Syllabus)',
        lessons: [
          { id: 'ccc-m1-l1', title: 'Day 1 – Computer Basics & Hardware', duration: '50 min', type: 'video', completed: false },
          { id: 'ccc-m1-l2', title: 'Day 2 – Operating System & Windows', duration: '45 min', type: 'video', completed: false },
          { id: 'ccc-m1-l3', title: 'Day 3 – LibreOffice Writer', duration: '50 min', type: 'video', completed: false },
          { id: 'ccc-m1-l4', title: 'Day 4 – LibreOffice Calc & Impress', duration: '50 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'ccc-m2',
        title: 'Module 02 — Internet & Digital Literacy',
        lessons: [
          { id: 'ccc-m2-l1', title: 'Day 1 – Internet, Email & e‑Governance', duration: '45 min', type: 'video', completed: false },
          { id: 'ccc-m2-l2', title: 'Day 2 – Cyber Security Basics', duration: '40 min', type: 'video', completed: false },
        ],
      },
      {
        id: 'ccc-m3',
        title: 'Module 03 — Mock Tests & Exam Prep',
        lessons: [
          { id: 'ccc-m3-l1', title: 'Mock Test 1 — Full Set', duration: '60 min', type: 'quiz', completed: false },
          { id: 'ccc-m3-l2', title: 'Mock Test 2 — Full Set', duration: '60 min', type: 'quiz', completed: false },
          { id: 'ccc-m3-l3', title: 'Final Revision & Tips', duration: '30 min', type: 'video', completed: false },
        ],
      },
    ],
  },
};

