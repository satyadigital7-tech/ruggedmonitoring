import React, { useState } from 'react';
import {
  Flame,
  ArrowRight,
  ShieldCheck,
  Activity,
  CircleDollarSign,
  Boxes,
  Gauge,
  TrendingUp,
  Box,
  CheckCircle2,
} from 'lucide-react';

export default function RmEyeModulesBento({ onOpenDemoModal }) {
  const [ivmMouse, setIvmMouse] = useState({ x: 50, y: 50 });

  const handleIvmMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setIvmMouse({ x: Math.round(x), y: Math.round(y) });
  };

  return (
    <section
      id="rm-eye-modules-section"
      className="py-14 sm:py-20 bg-slate-50/50 text-slate-900 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#005288] block mb-2">
            UNIFIED ENTERPRISE SOFTWARE ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-[40px] font-extrabold text-[#002B49] tracking-tight mb-3">
            RM EYE - Electrical Asset Health &amp; Predictive Analytics
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium max-w-3xl mx-auto leading-relaxed">
            14+ interconnected software modules bringing AI-powered analytics, IIoT sensors, edge gateways, and condition monitoring into one unified enterprise platform.
          </p>
        </div>

        {/* 5-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          {/* CARD 1 (IVM) - Thermal Camera Scan */}
          <div
            onMouseMove={handleIvmMouseMove}
            className="lg:col-span-2 group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col justify-between min-h-[360px] sm:min-h-[460px] pro-card cursor-crosshair"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/images/ivm_thermal.jpg"
                alt="IR Substation Thermal Scan"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#005288] text-white text-[11px] font-mono font-bold tracking-wide shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>MODULE: IVM</span>
              </span>
            </div>

            {/* Interactive Target Reticle */}
            <div className="relative z-10 mx-auto my-auto p-3.5 bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/20 text-center transition-all duration-150 transform group-hover:scale-105 shadow-xl">
              <div className="w-9 h-9 mx-auto mb-1 rounded-lg bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-400 relative">
                <Flame className="w-4 h-4 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-white block font-bold">
                Max Temp: {(108.4 + ivmMouse.x * 0.05).toFixed(1)}°C
              </span>
              <span className="text-[9px] font-mono text-emerald-400 block">
                Reticle: [{ivmMouse.x}, {ivmMouse.y}]
              </span>
            </div>

            <div className="relative z-10 p-5 text-white">
              <h3 className="text-sm sm:text-base font-bold leading-tight mb-2 text-white">
                IR &amp; Thermal Video Monitoring
              </h3>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group/btn"
              >
                <span>Module Datasheet</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 2 (APM) - Central Hero APM Dashboard */}
          <div className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col justify-between min-h-[380px] sm:min-h-[460px] pro-card">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/apm_fleet.jpg"
                alt="Substation Transformer Fleet APM"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E] via-[#0A182F]/75 to-[#070E1E]/80"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            </div>

            <div className="relative z-10 p-4 flex justify-between items-center">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#005288] text-white text-[11px] font-mono font-bold tracking-wide shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>MODULE: APM</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md font-bold">
                Fleet Status: Optimal
              </span>
            </div>

            <div className="relative z-10 px-3 sm:px-6 my-auto">
              <div className="rounded-2xl p-4 sm:p-5 bg-slate-900/85 backdrop-blur-xl border border-white/15 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      FLEET HEALTH INDEX
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">98%</span>
                      <span className="text-xs sm:text-sm font-semibold text-emerald-400 flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5 inline" />
                        <span>Very Good</span>
                      </span>
                    </div>
                  </div>

                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-emerald-400/40 flex items-center justify-center bg-emerald-500/10 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                    <div
                      className="absolute inset-0 rounded-full border-2 border-t-emerald-400 border-r-emerald-400 border-b-transparent border-l-transparent animate-spin"
                      style={{ animationDuration: '7s' }}
                    ></div>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>Continuous IEEE Thermal Modeling</span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 pt-3 border-t border-white/10 text-center font-mono">
                  <div className="bg-white/5 p-1.5 rounded-lg">
                    <span className="text-[8px] sm:text-[9px] text-slate-400 uppercase block">TOTAL</span>
                    <span className="text-xs sm:text-sm font-bold text-white">128</span>
                  </div>
                  <div className="bg-white/5 p-1.5 rounded-lg border border-emerald-500/20">
                    <span className="text-[8px] sm:text-[9px] text-emerald-400 uppercase block">HEALTHY</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400">112</span>
                  </div>
                  <div className="bg-white/5 p-1.5 rounded-lg border border-amber-500/20">
                    <span className="text-[8px] sm:text-[9px] text-amber-400 uppercase block">WARN</span>
                    <span className="text-xs sm:text-sm font-bold text-amber-400">12</span>
                  </div>
                  <div className="bg-white/5 p-1.5 rounded-lg border border-rose-500/20">
                    <span className="text-[8px] sm:text-[9px] text-rose-400 uppercase block">CRITICAL</span>
                    <span className="text-xs sm:text-sm font-bold text-rose-400">4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 p-4 sm:p-5 pt-0 text-white">
              <h3 className="text-base sm:text-lg font-bold leading-tight mb-2 text-white">
                Asset Performance Management
              </h3>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group/btn"
              >
                <span>Explore APM Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* COLUMN 3: AIP, DVM, INP */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* AIP Card */}
            <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between flex-1 pro-card min-h-[145px]">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/aip_planner.jpg"
                  alt="Asset Investment Planner"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-[#005288] text-white text-[10px] font-mono font-bold">
                  <span>AIP</span>
                </span>
                <CircleDollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="relative z-10 text-white pt-2">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">Asset Investment Planner</h3>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center space-x-1 text-[11px] font-semibold text-sky-400 hover:text-sky-300 mt-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* DVM Card */}
            <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between flex-1 pro-card min-h-[155px]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
                  alt="Device Management"
                  className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-[#005288] text-white text-[10px] font-mono font-bold">
                  <span>DVM</span>
                </span>
              </div>
              <div className="relative z-10 my-1 p-2 rounded-lg bg-slate-950/70 backdrop-blur-sm border border-white/10">
                <div className="text-[9px] text-slate-400 font-mono">Connected Devices</div>
                <div className="text-lg font-extrabold text-white font-mono flex items-center justify-between">
                  <span>248 Gateways</span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded font-bold">
                    Active
                  </span>
                </div>
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Device &amp; Cyber Management
                </h3>
              </div>
            </div>

            {/* INP Card */}
            <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between flex-1 pro-card min-h-[145px]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                  alt="Inventory Planner"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-teal-700 text-white text-[10px] font-mono font-bold">
                  <span>INP</span>
                </span>
                <Boxes className="w-4 h-4 text-teal-300" />
              </div>
              <div className="relative z-10 text-white pt-2">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">Inventory Planner</h3>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center space-x-1 text-[11px] font-semibold text-sky-400 hover:text-sky-300 mt-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 4: SAS & ALM */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* SAS Card */}
            <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between flex-1 pro-card min-h-[210px] sm:min-h-[225px]">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/sas_scada.jpg"
                  alt="Substation Automation SCADA"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-700 text-white text-[10px] font-mono font-bold">
                  <span>SAS</span>
                </span>
                <Gauge className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="relative z-10 my-1 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 font-mono text-[10px]">
                <div className="flex justify-between items-center text-slate-400 mb-1">
                  <span className="text-[9px] uppercase tracking-wider">METER DATA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-center font-bold text-slate-200">
                  <div className="bg-white/10 p-1 rounded">11.02</div>
                  <div className="bg-white/10 p-1 rounded">125.4</div>
                  <div className="bg-white/10 p-1 rounded">2.653</div>
                  <div className="bg-white/10 p-1 rounded">2.694</div>
                </div>
              </div>

              <div className="relative z-10 text-white">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">Substation Automation</h3>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center space-x-1 text-[11px] font-semibold text-sky-400 hover:text-sky-300 mt-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* ALM Card */}
            <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between flex-1 pro-card min-h-[210px] sm:min-h-[225px]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="Asset Life Cycle Manager"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-teal-700 text-white text-[10px] font-mono font-bold">
                  <span>ALM</span>
                </span>
                <TrendingUp className="w-4 h-4 text-teal-300" />
              </div>

              <div className="relative z-10 my-2 px-2 py-1 bg-slate-950/70 rounded-lg border border-white/10">
                <svg viewBox="0 0 100 24" className="w-full h-6 text-emerald-400 stroke-current fill-none">
                  <path d="M0,18 Q20,10 40,15 T70,5 T100,12" strokeWidth="2" />
                </svg>
                <div className="text-[9px] font-mono text-slate-400 text-right">Remaining Life: 24.8 yrs</div>
              </div>

              <div className="relative z-10 text-white">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Asset Life Cycle Manager
                </h3>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center space-x-1 text-[11px] font-semibold text-sky-400 hover:text-sky-300 mt-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 5 (DTN) - Digital Twin */}
          <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col justify-between min-h-[360px] sm:min-h-[460px] pro-card">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/dtn_twin.jpg"
                alt="Digital Twin Wireframe"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-sky-950/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#005288] text-white text-[11px] font-mono font-bold tracking-wide shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>MODULE: DTN</span>
              </span>
            </div>

            <div className="relative z-10 mx-auto my-auto p-4 bg-slate-950/70 backdrop-blur-md rounded-2xl border border-sky-400/30 text-center shadow-xl">
              <div className="w-11 h-11 mx-auto mb-2 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                <Box className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono font-bold text-sky-300">3D CAD Model Sync</div>
              <div className="text-[9px] font-mono text-slate-400 mt-0.5">Latency &lt; 15ms</div>
            </div>

            <div className="relative z-10 p-5 text-white">
              <h3 className="text-base sm:text-lg font-bold leading-tight mb-2 text-white">
                Substation Digital Twin
              </h3>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group/btn"
              >
                <span>Explore Digital Twin</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
