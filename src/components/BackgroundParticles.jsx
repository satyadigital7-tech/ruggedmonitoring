import React from 'react';

export default function BackgroundParticles() {
  const particles = Array.from({ length: 16 }).map((_, i) => {
    const size = Math.floor(Math.random() * 5) + 3;
    const left = Math.random() * 98;
    const duration = Math.floor(Math.random() * 14) + 12;
    const delay = Math.random() * 12;
    return { id: i, size, left, duration, delay };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="bg-orb bg-orb-1 -top-24 -left-32"></div>
      <div className="bg-orb bg-orb-2 top-1/3 -right-40"></div>
      <div className="bg-orb bg-orb-3 bottom-1/4 -left-40"></div>
      <div className="absolute inset-0 bg-grid-animated opacity-40"></div>

      {particles.map((p) => (
        <div
          key={p.id}
          className="bg-particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
