import React, { useState } from 'react';
import { Calculator, ShieldAlert, Clock, TrendingDown } from 'lucide-react';

export default function RoiCalculator({ onOpenDemoModal }) {
  const [assets, setAssets] = useState(25);
  const [age, setAge] = useState(18);
  const [cost, setCost] = useState(35000);

  // Dynamic ROI calculation formula
  const ageFactor = 1 + age / 35;
  const estimatedOutageHoursAvoided = assets * 0.85 * ageFactor;
  const totalSavings = Math.round(estimatedOutageHoursAvoided * cost);
  const riskAvoided = Math.min(96.4, 75 + age * 0.45);

  return (
    <section id="roi-calculator" className="py-16 sm:py-20 relative bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200 shadow-lg relative overflow-hidden spotlight-card">
          <div className="max-w-2xl mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#005288] font-mono">
              <Calculator className="w-3.5 h-3.5" />
              <span>Business Impact Simulator</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              Calculate Electrical Asset Health &amp; Predictive Maintenance ROI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Estimate financial risk mitigation by transitioning from scheduled periodic inspections to continuous Condition monitoring with IIoT sensors and Edge devices.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Sliders */}
            <div className="md:col-span-7 space-y-5 sm:space-y-6">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-sky-300 transition-colors">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <label htmlFor="assets-range" className="text-slate-700 font-semibold flex items-center space-x-1.5">
                    <span>Number of Critical Transformers / Assets</span>
                  </label>
                  <span className="text-[#005288] font-bold text-sm bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {assets} Assets
                  </span>
                </div>
                <input
                  id="assets-range"
                  type="range"
                  min="2"
                  max="150"
                  value={assets}
                  onChange={(e) => setAssets(parseInt(e.target.value, 10))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#005288] transition-all"
                />
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-purple-300 transition-colors">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <label htmlFor="age-range" className="text-slate-700 font-semibold">
                    Average Asset Age
                  </label>
                  <span className="text-purple-600 font-bold text-sm bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    {age} Years
                  </span>
                </div>
                <input
                  id="age-range"
                  type="range"
                  min="1"
                  max="45"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value, 10))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600 transition-all"
                />
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <label htmlFor="cost-range" className="text-slate-700 font-semibold">
                    Est. Hourly Outage / Production Loss ($)
                  </label>
                  <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ${cost.toLocaleString()} / hr
                  </span>
                </div>
                <input
                  id="cost-range"
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={cost}
                  onChange={(e) => setCost(parseInt(e.target.value, 10))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 transition-all"
                />
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="md:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 text-center space-y-4 shadow-xl interactive-glow">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-mono font-bold">
                Estimated 3-Year Protection Value
              </span>

              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-600 font-mono tracking-tight transform hover:scale-105 transition-transform">
                ${totalSavings.toLocaleString()}
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 font-mono text-left pt-3 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 flex items-center space-x-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                    <span>Avoided Catastrophic Risk:</span>
                  </span>
                  <span className="text-slate-900 font-bold">{riskAvoided.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Expected Payback Horizon:</span>
                  </span>
                  <span className="text-[#005288] font-bold">&lt; 7 Months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 flex items-center space-x-1">
                    <TrendingDown className="w-3.5 h-3.5 text-slate-400" />
                    <span>DGA &amp; Maintenance Cut:</span>
                  </span>
                  <span className="text-emerald-600 font-bold">42% Annual</span>
                </div>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3 rounded-xl bg-[#005288] hover:bg-[#003e66] text-white font-bold text-xs tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Customized Fleet Engineering Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
