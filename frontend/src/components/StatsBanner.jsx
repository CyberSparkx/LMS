import React from 'react';
import { Award, Users, BookOpen, Building2 } from 'lucide-react';
import './StatsBanner.css';

export default function StatsBanner() {
  const stats = [
    {
      icon: <Users size={22} className="stat-icon icon-blue" />,
      number: '60,000+',
      label: 'Students & Engineers Mentored',
      sub: 'Across BCA, MCA & B.Tech',
    },
    {
      icon: <Award size={22} className="stat-icon icon-amber" />,
      number: '98.4%',
      label: 'Placement & Exam Success',
      sub: 'Tier-1 Tech & MNC Placements',
    },
    {
      icon: <BookOpen size={22} className="stat-icon icon-green" />,
      number: '100+ Real Labs',
      label: 'Industry-Grade Projects',
      sub: 'Live codebases on GitHub',
    },
    {
      icon: <Building2 size={22} className="stat-icon icon-purple" />,
      number: '12+ Years',
      label: 'Excellence in CS Coaching',
      sub: 'Under Prof. Suraj mentorship',
    },
  ];

  return (
    <section className="stats-banner-section" aria-label="Key Achievements">
      <div className="stats-banner-container">
        {stats.map((item, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon-wrapper">{item.icon}</div>
            <div className="stat-text-group">
              <span className="stat-number">{item.number}</span>
              <strong className="stat-label">{item.label}</strong>
              <span className="stat-sub">{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
