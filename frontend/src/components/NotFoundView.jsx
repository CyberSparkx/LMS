import React from 'react';
import { Home, Terminal } from 'lucide-react';
import './NotFoundView.css';

export default function NotFoundView({ onGoHome }) {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-badge">
          <Terminal size={18} />
          <span>ERROR 404 &bull; PATH NOT FOUND</span>
        </div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-desc">
          The requested page doesn't exist or has moved. Return to our homepage to explore courses, batches, and lab life.
        </p>
        <div className="not-found-actions">
          <button type="button" className="not-found-home-btn" onClick={onGoHome}>
            <Home size={16} />
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
}

