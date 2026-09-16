import React, { useEffect, useState, useRef } from 'react';

export default function StatsStrip() {
  const [counts, setCounts] = useState({
    sensors: 0,
    accuracy: 0,
    countries: 0,
    savings: 0,
  });
  const sectionRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasRun.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        hasRun.current = true;
        animateCounters();
      }
    };

    const animateCounters = () => {
      const duration = 1600;
      const steps = 50;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounts({
          sensors: Math.floor(500000 * progress),
          accuracy: +(99.8 * progress).toFixed(1),
          countries: Math.floor(45 * progress),
          savings: Math.floor(120 * progress),
        });

        if (step >= steps) {
          setCounts({
            sensors: 500000,
            accuracy: 99.8,
            countries: 45,
            savings: 120,
          });
          clearInterval(interval);
        }
      }, duration / steps);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initially in case already visible
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats-strip"
      className="border-y border-slate-200 bg-slate-50/80 backdrop-blur-md py-8 sm:py-10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="px-2 sm:px-4">
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-center justify-center">
              <span>{counts.sensors.toLocaleString()}</span>
              <span className="text-[#005288]">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 font-semibold">Fiber Optic Sensors Installed</p>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono">Globally Proven</span>
          </div>

          <div className="px-2 sm:px-4 pt-4 md:pt-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-center justify-center">
              <span>{counts.accuracy}</span>
              <span className="text-emerald-600">%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 font-semibold">Fault Detection Accuracy</p>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono">AI Winding &amp; DGA Models</span>
          </div>

          <div className="px-2 sm:px-4 pt-4 md:pt-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-center justify-center">
              <span>{counts.countries}</span>
              <span className="text-[#005288]">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 font-semibold">Countries with Live Grids</p>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono">Utilities &amp; Industrial</span>
          </div>

          <div className="px-2 sm:px-4 pt-4 md:pt-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-center justify-center">
              <span>$</span>
              <span>{counts.savings}</span>
              <span className="text-emerald-600">M+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 font-semibold">Outage Losses Prevented</p>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono">Calculated Asset Value</span>
          </div>
        </div>
      </div>
    </section>
  );
}
