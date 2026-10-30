import React from 'react';
import { Clock, Users, Calendar, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import './BatchesView.css';

export default function BatchesView({ onBookSeat }) {
  const batches = [
    {
      id: 'm1',
      title: 'Morning Batch 1',
      time: '7:00 AM – 8:30 AM',
      type: 'Morning Slot',
      capacity: 4,
      booked: 3,
      available: 1,
      status: 'Fast Filling',
      instructor: 'Prof. Suraj',
      target: 'BCA / B.Tech College Students (Pre-College)'
    },
    {
      id: 'm2',
      title: 'Morning Batch 2',
      time: '8:30 AM – 10:00 AM',
      type: 'Morning Slot',
      capacity: 4,
      booked: 4,
      available: 0,
      status: 'Fully Booked',
      instructor: 'Prof. Suraj',
      target: 'ADCA & Advanced Excel Diploma Students'
    },
    {
      id: 'm3',
      title: 'Morning Batch 3',
      time: '10:00 AM – 11:30 AM',
      type: 'Morning Slot',
      capacity: 4,
      booked: 2,
      available: 2,
      status: 'Available',
      instructor: 'Prof. Suraj',
      target: 'DCA & Basic Office Productivity'
    },
    {
      id: 'e1',
      title: 'Afternoon Batch 1',
      time: '2:00 PM – 3:30 PM',
      type: 'Afternoon Slot',
      capacity: 4,
      booked: 1,
      available: 3,
      status: 'Available',
      instructor: 'Faculty Assistant',
      target: 'Typing & CCC Exam Fast Track'
    },
    {
      id: 'e2',
      title: 'Evening Batch 2',
      time: '5:30 PM – 7:00 PM',
      type: 'Evening Slot',
      capacity: 4,
      booked: 3,
      available: 1,
      status: 'Fast Filling',
      instructor: 'Prof. Suraj',
      target: 'Full-Stack Web & Python Development'
    },
    {
      id: 'e3',
      title: 'Evening Batch 3',
      time: '7:00 PM – 8:30 PM',
      type: 'Evening Slot',
      capacity: 4,
      booked: 2,
      available: 2,
      status: 'Available',
      instructor: 'Prof. Suraj',
      target: 'Working Professionals & College Seniors'
    }
  ];

  return (
    <div className="batches-page-container">
      <div className="batches-header-group">
        <span className="batches-pretitle">LAB TIMINGS & SEAT CAPACITY</span>
        <h2 className="batches-main-title">Daily 4-Seat Batch Schedule</h2>
        <p className="batches-desc">
          To ensure personal attention and hands-on lab time, every batch is strictly limited to <strong>maximum 4 students</strong>.
        </p>
      </div>

      <div className="batches-grid">
        {batches.map((batch) => {
          const isFull = batch.available === 0;

          return (
            <div key={batch.id} className={`batch-card ${isFull ? 'is-full' : ''}`}>
              <div className="batch-header-row">
                <span className="batch-slot-type">{batch.type}</span>
                <span className={`batch-status-chip ${isFull ? 'full' : 'open'}`}>
                  {batch.status}
                </span>
              </div>

              <h3 className="batch-title">{batch.title}</h3>

              <div className="batch-time-box">
                <Clock size={16} className="batch-time-ico" />
                <strong>{batch.time}</strong>
              </div>

              <div className="seat-meter-box">
                <div className="seat-meter-header">
                  <span>Lab Seat Availability</span>
                  <strong>{batch.available} of 4 Available</strong>
                </div>
                <div className="seat-progress-track">
                  <div 
                    className={`seat-progress-bar ${isFull ? 'red' : 'blue'}`}
                    style={{ width: `${(batch.booked / batch.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="batch-focus-note">
                <span className="focus-label">Batch Focus:</span>
                <p>{batch.target}</p>
              </div>

              <button
                type="button"
                className={`btn-batch-action ${isFull ? 'disabled' : ''}`}
                disabled={isFull}
                onClick={onBookSeat}
              >
                <span>{isFull ? 'Join Waiting List' : 'Reserve In This Slot'}</span>
                {!isFull && <ArrowRight size={14} />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
