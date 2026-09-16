import React from 'react';

export default function CtaBanner({ onOpenDemoModal }) {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-12 overflow-hidden bg-gradient-to-r from-slate-900 via-[#002B49] to-[#005288] border border-slate-800 shadow-2xl">
          <div className="absolute -right-10 -top-10 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                Next Steps
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Ready to Upgrade Your Substation Fleet to Predictive Autonomy?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-medium">
                Schedule a 1-on-1 technical walkthrough with our high-voltage engineers. We will analyze your single-line diagram and configure a tailored monitoring solution.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition shadow-md text-center cursor-pointer"
              >
                Book Engineering Session
              </button>
              <a
                href="mailto:info@ruggedmonitoring.com"
                className="w-full py-3.5 px-6 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition text-center border border-slate-700"
              >
                Contact Technical Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
