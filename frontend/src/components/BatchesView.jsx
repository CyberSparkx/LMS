import React, { useState } from 'react';
import { Clock, ArrowRight, Lock, Users } from 'lucide-react';
import './BatchesView.css';

export default function BatchesView({ onBookSeat }) {
  const [slotFilter, setSlotFilter] = useState('all');

  const batches = [
    {
      id: 'm1',
      title: 'Morning Batch 1',
      time: '7:00 AM – 8:30 AM',
      type: 'morning',
      slotLabel: 'Morning Slot',
      capacity: 4,
      booked: 3,
      instructor: 'Prof. Suraj',
      target: 'BCA / B.Tech College Students',
    },
    {
      id: 'm2',
      title: 'Morning Batch 2',
      time: '8:30 AM – 10:00 AM',
      type: 'morning',
      slotLabel: 'Morning Slot',
      capacity: 4,
      booked: 4,
      instructor: 'Prof. Suraj',
      target: 'ADCA & Advanced Excel Diploma',
    },
    {
      id: 'm3',
      title: 'Morning Batch 3',
      time: '10:00 AM – 11:30 AM',
      type: 'morning',
      slotLabel: 'Morning Slot',
      capacity: 4,
      booked: 2,
      instructor: 'Prof. Suraj',
      target: 'DCA & Basic Office Productivity',
    },
    {
      id: 'a1',
      title: 'Afternoon Batch 1',
      time: '2:00 PM – 3:30 PM',
      type: 'afternoon',
      slotLabel: 'Afternoon Slot',
      capacity: 4,
      booked: 1,
      instructor: 'Faculty Assistant',
      target: 'Typing & CCC Exam Fast Track',
    },
    {
      id: 'e2',
      title: 'Evening Batch 2',
      time: '5:30 PM – 7:00 PM',
      type: 'evening',
      slotLabel: 'Evening Slot',
      capacity: 4,
      booked: 3,
      instructor: 'Prof. Suraj',
      target: 'Full‑Stack Web & Python Dev',
    },
    {
      id: 'e3',
      title: 'Evening Batch 3',
      time: '7:00 PM – 8:30 PM',
      type: 'evening',
      slotLabel: 'Evening Slot',
      capacity: 4,
      booked: 2,
      instructor: 'Prof. Suraj',
      target: 'Working Professionals & Seniors',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Slots' },
    { key: 'morning', label: 'Morning' },
    { key: 'afternoon', label: 'Afternoon' },
    { key: 'evening', label: 'Evening' },
  ];

  const filtered = batches.filter(b => slotFilter === 'all' || b.type === slotFilter);

  return (
    <div className="batches-page-container">
      {/* Header */}
      <div className="batches-header-group">
        <span className="batches-pretitle">LAB TIMINGS & SEAT CAPACITY</span>
        <h2 className="batches-main-title">Daily 4‑Seat Batch Schedule</h2>
        <p className="batches-desc">
          Every batch is strictly limited to <strong>4 learners</strong> — one dedicated PC per student, zero sharing.
        </p>
        <div className="batches-filter-row">
          {filters.map(f => (
            <button
              key={f.key}
              type="button"
              className={`batch-filter-pill ${slotFilter === f.key ? 'active' : ''}`}
              onClick={() => setSlotFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="batches-grid">
        {filtered.map(batch => {
          const available = batch.capacity - batch.booked;
          const isFull = available === 0;
          const pct = Math.round((batch.booked / batch.capacity) * 100);

          return (
            <div key={batch.id} className={`batch-card ${isFull ? 'is-full' : ''}`}>

              {/* Top row: slot tag + status */}
              <div className="batch-top-row">
                <span className="batch-slot-tag">{batch.slotLabel}</span>
                <span className={`batch-status-badge ${isFull ? 'badge-full' : available === 1 ? 'badge-urgent' : 'badge-open'}`}>
                  {!isFull && <span className="badge-dot" />}
                  {isFull ? 'Fully Booked' : available === 1 ? 'Only 1 Left' : `${available} Seats Open`}
                </span>
              </div>

              {/* Title */}
              <h3 className="batch-card-title">{batch.title}</h3>

              {/* Time chip */}
              <div className="batch-time-chip">
                <Clock size={14} className="time-ico" />
                <span>{batch.time}</span>
                <span className="time-sep">·</span>
                <span className="time-dur">90 Min Session</span>
              </div>

              {/* Seat dots visualiser */}
              <div className="batch-seats-block">
                <div className="seats-label-row">
                  <Users size={13} className="seats-ico" />
                  <span className="seats-label">
                    {isFull ? '0 of 4 seats available' : `${available} of 4 seats available`}
                  </span>
                </div>
                <div className="seat-dots-row">
                  {Array.from({ length: batch.capacity }).map((_, i) => (
                    <span
                      key={i}
                      className={`seat-dot ${i < batch.booked ? 'dot-taken' : 'dot-open'}`}
                    />
                  ))}
                </div>
                {/* Thin progress bar */}
                <div className="seat-bar-track">
                  <div
                    className={`seat-bar-fill ${isFull ? 'fill-full' : 'fill-active'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              {/* Focus area */}
              <div className="batch-focus-row">
                <span className="focus-tag">Focus</span>
                <span className="focus-text">{batch.target}</span>
              </div>

              {/* CTA */}
              {isFull ? (
                <button type="button" className="btn-batch btn-waiting" onClick={onBookSeat}>
                  <Lock size={14} />
                  <span>Join Waiting List</span>
                </button>
              ) : (
                <button type="button" className="btn-batch btn-reserve" onClick={onBookSeat}>
                  <span>Reserve In This Slot</span>
                  <ArrowRight size={14} className="btn-arrow" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
