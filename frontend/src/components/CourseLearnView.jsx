import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  PlayCircle,
  ClipboardList,
  Menu,
  X,
  Clock,
  BookOpen,
  Award,
} from 'lucide-react';
import { courseContent } from '../data/courseContent';
import './CourseLearnView.css';

export default function CourseLearnView() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courseContent[courseId];

  // Flatten all lessons for navigation
  const allLessons = useMemo(() => {
    if (!course) return [];
    return course.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleTitle: m.title })));
  }, [course]);

  // Find first incomplete lesson as default
  const defaultLessonId = useMemo(() => {
    if (!allLessons.length) return null;
    const first = allLessons.find(l => !l.completed);
    return first ? first.id : allLessons[0].id;
  }, [allLessons]);

  const [activeLessonId, setActiveLessonId] = useState(defaultLessonId);
  const [expandedModules, setExpandedModules] = useState(() => {
    if (!course) return {};
    const exp = {};
    course.modules.forEach(m => { exp[m.id] = true; });
    return exp;
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(() => {
    if (!course) return new Set();
    return new Set(
      course.modules.flatMap(m => m.lessons.filter(l => l.completed).map(l => l.id))
    );
  });

  if (!course) {
    return (
      <div className="clv-not-found">
        <h2>Course not found</h2>
        <button type="button" className="clv-back-link" onClick={() => navigate('/courses')}>
          ← Back to Courses
        </button>
      </div>
    );
  }

  const activeLesson = allLessons.find(l => l.id === activeLessonId);
  const activeLessonIndex = allLessons.findIndex(l => l.id === activeLessonId);
  const prevLesson = activeLessonIndex > 0 ? allLessons[activeLessonIndex - 1] : null;
  const nextLesson = activeLessonIndex < allLessons.length - 1 ? allLessons[activeLessonIndex + 1] : null;

  const totalLessons = allLessons.length;
  const doneCount = completedLessons.size;
  const progressPct = Math.round((doneCount / totalLessons) * 100);

  function toggleModule(moduleId) {
    setExpandedModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
  }

  function handleCompleteAndContinue() {
    setCompletedLessons(prev => new Set([...prev, activeLessonId]));
    if (nextLesson) setActiveLessonId(nextLesson.id);
  }

  return (
    <div className="clv-root">
      {/* Top Bar */}
      <header className="clv-topbar">
        <div className="clv-topbar-left">
          <button
            type="button"
            className="clv-sidebar-toggle"
            onClick={() => setSidebarOpen(o => !o)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <button
            type="button"
            className="clv-back-btn"
            onClick={() => navigate('/courses')}
            aria-label="Back to courses"
          >
            <ChevronLeft size={18} />
            <span>Courses</span>
          </button>
          <span className="clv-topbar-title">{course.title}</span>
        </div>

        <div className="clv-topbar-right">
          <span className="clv-discuss-link">
            <BookOpen size={15} />
            Discuss
          </span>
          <div className="clv-nav-btns">
            <button
              type="button"
              className="clv-nav-btn"
              disabled={!prevLesson}
              onClick={() => prevLesson && setActiveLessonId(prevLesson.id)}
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <button
              type="button"
              className="clv-complete-btn"
              onClick={handleCompleteAndContinue}
            >
              <CheckCircle2 size={16} />
              {completedLessons.has(activeLessonId) ? 'Next Lesson' : 'Complete & Continue'}
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </header>

      <div className="clv-body">
        {/* Sidebar Overlay (mobile) */}
        {sidebarOpen && (
          <div
            className="clv-sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside className={`clv-sidebar ${sidebarOpen ? 'is-open' : ''}`}>
          {/* Progress */}
          <div className="clv-progress-block">
            <div className="clv-progress-bar-track">
              <div className="clv-progress-bar-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="clv-progress-label">
              <strong>{progressPct}%</strong> completed &nbsp;·&nbsp; {doneCount}/{totalLessons} lessons
            </span>
          </div>

          {/* Course Discussions */}
          <div className="clv-sidebar-discussions">
            <BookOpen size={15} />
            <span>Course Discussions</span>
          </div>

          {/* Module List */}
          <div className="clv-modules-list">
            {course.modules.map(module => {
              const isExpanded = expandedModules[module.id];
              const moduleDone = module.lessons.filter(l => completedLessons.has(l.id)).length;
              return (
                <div key={module.id} className="clv-module">
                  <button
                    type="button"
                    className="clv-module-header"
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="clv-module-title-row">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      <span className="clv-module-title">{module.title}</span>
                    </div>
                    <span className="clv-module-meta">{moduleDone}/{module.lessons.length}</span>
                  </button>

                  {isExpanded && (
                    <ul className="clv-lessons-list">
                      {module.lessons.map(lesson => {
                        const isActive = lesson.id === activeLessonId;
                        const isDone = completedLessons.has(lesson.id);
                        return (
                          <li key={lesson.id}>
                            <button
                              type="button"
                              className={`clv-lesson-row ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}`}
                              onClick={() => {
                                setActiveLessonId(lesson.id);
                                setSidebarOpen(false);
                              }}
                            >
                              <span className="clv-lesson-icon">
                                {isDone ? (
                                  <CheckCircle2 size={15} className="icon-done" />
                                ) : lesson.type === 'quiz' ? (
                                  <ClipboardList size={15} className="icon-quiz" />
                                ) : (
                                  <PlayCircle size={15} className="icon-play" />
                                )}
                              </span>
                              <span className="clv-lesson-title">{lesson.title}</span>
                              <span className="clv-lesson-dur">{lesson.duration}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="clv-main">
          {/* Video / Content Area */}
          <div className="clv-video-wrapper">
            <div className="clv-video-placeholder">
              <div className="clv-video-inner">
                <div className="clv-play-ring">
                  <PlayCircle size={64} className="clv-play-icon" />
                </div>
                <p className="clv-video-hint">{activeLesson?.title}</p>
                <span className="clv-video-dur">
                  <Clock size={14} />
                  {activeLesson?.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="clv-lesson-info">
            <div className="clv-lesson-info-top">
              <div>
                <p className="clv-lesson-module-label">{activeLesson?.moduleTitle}</p>
                <h2 className="clv-lesson-heading">{activeLesson?.title}</h2>
              </div>
              {completedLessons.has(activeLessonId) && (
                <span className="clv-done-badge">
                  <CheckCircle2 size={14} /> Completed
                </span>
              )}
            </div>

            <div className="clv-lesson-desc">
              <p>
                This is a live instructor‑led session at <strong>Suraj CS Hub</strong>.
                Each lab session is strictly limited to <strong>4 students</strong> per slot,
                ensuring dedicated PC access and personal guidance from Prof. Suraj throughout
                the class.
              </p>
            </div>

            {/* Stats Row */}
            <div className="clv-stats-row">
              <div className="clv-stat-chip">
                <Clock size={14} /> {activeLesson?.duration}
              </div>
              <div className="clv-stat-chip">
                <Award size={14} /> Govt. Recognised Certificate
              </div>
              <div className="clv-stat-chip">
                <BookOpen size={14} /> 4‑Seat Micro‑Batch
              </div>
            </div>

            {/* Complete CTA */}
            <div className="clv-bottom-cta">
              <button
                type="button"
                className="clv-complete-cta-btn"
                onClick={handleCompleteAndContinue}
              >
                <CheckCircle2 size={16} />
                {completedLessons.has(activeLessonId) ? 'Go to Next Lesson' : 'Complete & Continue'}
                <ChevronRight size={16} />
              </button>
              {prevLesson && (
                <button
                  type="button"
                  className="clv-prev-cta-btn"
                  onClick={() => setActiveLessonId(prevLesson.id)}
                >
                  <ChevronLeft size={16} /> Previous Lesson
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

