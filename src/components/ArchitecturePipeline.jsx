import React from 'react';
import { Disc, HardDrive, CloudLightning, CheckCheck } from 'lucide-react';

export default function ArchitecturePipeline() {
  return (
    <section id="architecture" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#005288] font-mono">
            Resilient End-to-End Pipeline
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            From IIoT sensors to Enterprise ERP &amp; RM EYE
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            No single point of failure. Our dual-redundant architecture guarantees continuous Condition monitoring even in severe grid disturbance events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 relative">
          {/* Step 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl relative border border-slate-200 shadow-xs group hover:border-[#005288]/50 transition">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-300 group-hover:text-[#005288] transition mb-3 sm:mb-4">
              01
            </div>
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-[#005288] mb-3">
              <Disc className="w-5 h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">IIoT sensors</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              Fiber optic GaAs probes, UHF PD couplers, acoustic detectors, and Rogowski coils deployed directly on grid assets.
            </p>
            <div className="mt-4 text-[11px] font-mono text-[#005288] font-bold">Zero conductive path</div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl relative border border-slate-200 shadow-xs group hover:border-purple-500/50 transition">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-300 group-hover:text-purple-600 transition mb-3 sm:mb-4">
              02
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">Edge devices</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              Hardened Edge devices execute local thermal modeling, peak signal retention, and IEC 61850 SCADA mapping.
            </p>
            <div className="mt-4 text-[11px] font-mono text-purple-600 font-bold">IEC 61850 Station Bus</div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl relative border border-slate-200 shadow-xs group hover:border-emerald-500/50 transition">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-300 group-hover:text-emerald-600 transition mb-3 sm:mb-4">
              03
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
              <CloudLightning className="w-5 h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">RM EYE</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              Centralized platform providing AI-powered analytics, Electrical asset health indexing, and Predictive analytics.
            </p>
            <div className="mt-4 text-[11px] font-mono text-emerald-600 font-bold">Predictive analytics</div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl relative border border-slate-200 shadow-xs group hover:border-amber-500/50 transition">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-300 group-hover:text-amber-600 transition mb-3 sm:mb-4">
              04
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
              <CheckCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">Predictive maintenance</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              Automated Predictive maintenance workorders dispatched directly to SAP PM, IBM Maximo, or SCADA alarms.
            </p>
            <div className="mt-4 text-[11px] font-mono text-amber-600 font-bold">Zero Unplanned Downtime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
