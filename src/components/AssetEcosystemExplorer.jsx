import React, { useState } from 'react';
import { Zap, Activity, RefreshCw, Disc, Check, FileText, Info } from 'lucide-react';

export default function AssetEcosystemExplorer({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('transformer');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const assetData = {
    transformer: {
      title: 'Power Transformer Fleet Health',
      badge: 'Core Flagship Area',
      desc: 'Direct optical winding temperature sensing with zero calibration drift, combined with online continuous DGA and acoustic partial discharge monitoring.',
      points: [
        { name: 'Fiber Optic GaAs Winding Probes', spec: 'Real-time thermal hotspot with zero EMI latency' },
        { name: 'Multi-Gas DGA (H₂, CH₄, C₂H₂, CO)', spec: 'Photoacoustic spectroscopy detecting arcing & overheating' },
        { name: 'Bushing Capacitance & Power Factor', spec: 'Continuous Relative Tan Delta tracking C1 / C2' },
      ],
      hotspots: [
        { id: 'bushing', label: 'Bushing Tap', value: 'Tan-δ: 0.28% (Normal)', x: 28, y: 12 },
        { id: 'gaas', label: 'GaAs Winding Probe', value: 'Temp: 68.4°C (Normal)', x: 37, y: 47 },
        { id: 'dga', label: 'Photoacoustic DGA', value: 'H₂: 12 ppm, C₂H₂: 0 ppm', x: 14, y: 65 },
      ],
      svg: (
        <svg viewBox="0 0 320 200" className="w-full h-full text-[#005288]" fill="none" stroke="currentColor">
          <rect x="70" y="50" width="180" height="120" rx="12" strokeWidth="2" className="text-slate-400" fill="#F8FAFC" />
          <path d="M100 50 L90 20 M160 50 L160 18 M220 50 L230 20" strokeWidth="3" className="text-sky-600" strokeLinecap="round" />
          <circle cx="90" cy="20" r="6" fill="#0284C7" className="animate-pulse cursor-pointer hover:scale-125 transition-transform" />
          <circle cx="160" cy="18" r="6" fill="#0284C7" className="animate-pulse cursor-pointer hover:scale-125 transition-transform" />
          <circle cx="230" cy="20" r="6" fill="#0284C7" className="animate-pulse cursor-pointer hover:scale-125 transition-transform" />
          <path d="M110 80 Q130 70 130 95 Q130 120 110 120" strokeWidth="2" strokeDasharray="3 3" className="text-emerald-600" />
          <path d="M160 80 Q180 70 180 95 Q180 120 160 120" strokeWidth="2" strokeDasharray="3 3" className="text-emerald-600" />
          <path d="M210 80 Q230 70 230 95 Q230 120 210 120" strokeWidth="2" strokeDasharray="3 3" className="text-emerald-600" />
          
          {/* Animated Hotspot Ring */}
          <circle cx="120" cy="95" r="8" fill="none" stroke="#F43F5E" strokeWidth="1.5" className="animate-ripple" />
          <circle cx="120" cy="95" r="4" fill="#F43F5E" className="cursor-pointer" />
          <text x="135" y="98" fill="#1E293B" fontSize="8" fontFamily="monospace" fontWeight="bold">GaAs Probe 01</text>
          
          <rect x="40" y="120" width="30" height="15" rx="3" strokeWidth="1.5" className="text-purple-600 cursor-pointer" fill="#F3E8FF" />
          <text x="44" y="131" fill="#7E22CE" fontSize="7" fontFamily="monospace" fontWeight="bold">DGA</text>
        </svg>
      ),
    },
    switchgear: {
      title: 'GIS & AIS Medium/High Voltage Switchgear',
      badge: 'Substation Protection',
      desc: 'Non-intrusive UHF sensors for continuous partial discharge localization, combined with wireless infrared contact temperature monitoring.',
      points: [
        { name: 'UHF Partial Discharge Couplers', spec: 'Bandwidth up to 2.0 GHz for void & particle detection' },
        { name: 'Non-Contact Infrared Busbar Temp', spec: 'Continuous hot-joint detection on cable terminations' },
        { name: 'SF6 Gas Density & Purity Monitoring', spec: 'Digital pressure/temperature normalized leakage rate' },
      ],
      hotspots: [
        { id: 'uhf', label: 'UHF PD Sensor', value: 'PD Level: < 5 pC (Healthy)', x: 48, y: 25 },
        { id: 'ir', label: 'IR Joint Sensor', value: 'Contact Temp: 42.1°C', x: 38, y: 52 },
      ],
      svg: (
        <svg viewBox="0 0 320 200" className="w-full h-full text-purple-600" fill="none" stroke="currentColor">
          <rect x="50" y="60" width="220" height="90" rx="10" strokeWidth="2" className="text-slate-400" fill="#F8FAFC" />
          <line x1="80" y1="105" x2="240" y2="105" strokeWidth="3" className="text-purple-600" />
          <circle cx="120" cy="105" r="8" strokeWidth="2" className="text-slate-800" fill="#FFF" />
          <circle cx="200" cy="105" r="8" strokeWidth="2" className="text-slate-800" fill="#FFF" />
          <circle cx="120" cy="105" r="3" fill="#0284C7" className="animate-pulse" />
          <rect x="145" y="45" width="30" height="15" rx="3" strokeWidth="1.5" className="text-[#005288]" fill="#E0F2FE" />
          <text x="150" y="56" fill="#005288" fontSize="8" fontFamily="monospace" fontWeight="bold">UHF PD</text>
        </svg>
      ),
    },
    rotating: {
      title: 'Large Motors & Hydro/Turbine Generators',
      badge: 'Dynamic Machines',
      desc: 'End-turn stator winding temperature profiling, tri-axial bearing vibration analysis, and rotor magnetic flux leakage detection.',
      points: [
        { name: 'Stator Slot RTD & Fiber Optic Strips', spec: 'High dielectric strength slots with EMI rejection' },
        { name: 'Tri-Axial Accelerometer Array', spec: 'Velocity and acceleration envelope for bearing cage faults' },
        { name: 'Rotor Inter-Turn Short Detection', spec: 'Magnetic flux air-gap coil measurement' },
      ],
      hotspots: [
        { id: 'vib', label: 'Tri-Axial Vibration', value: 'RMS: 1.4 mm/s (Iso 10816 Good)', x: 50, y: 22 },
      ],
      svg: (
        <svg viewBox="0 0 320 200" className="w-full h-full text-emerald-600" fill="none" stroke="currentColor">
          <circle cx="160" cy="105" r="60" strokeWidth="2" className="text-slate-400" fill="#F8FAFC" />
          <circle cx="160" cy="105" r="35" strokeWidth="2" strokeDasharray="4 4" className="text-emerald-600 animate-spin" style={{ transformOrigin: '160px 105px', animationDuration: '15s' }} />
          <circle cx="160" cy="105" r="8" fill="#1E293B" />
          <circle cx="160" cy="45" r="4" fill="#0284C7" className="animate-ping" />
          <circle cx="160" cy="45" r="4" fill="#0284C7" />
          <text x="175" y="48" fill="#1E293B" fontSize="8" fontFamily="monospace" fontWeight="bold">Vibration Tri-Axial</text>
        </svg>
      ),
    },
    bushings: {
      title: 'High-Voltage Bushings & Critical Cable Terminations',
      badge: 'Dielectric Safety',
      desc: 'Continuous Relative Power Factor (Tan Delta) calculation with automated phase balancing to catch moisture ingress and paper degradation.',
      points: [
        { name: 'Direct Tap Adapters with Surge Protection', spec: 'Ruggedized weatherproof adapter for test tap connection' },
        { name: 'Continuous Capacitance (C1) Shift Tracking', spec: 'Sensitivity < 0.1% for layer puncture alerts' },
        { name: 'Distributed Temperature Acoustic Sensing', spec: 'For HV underground cable transmission links' },
      ],
      hotspots: [
        { id: 'tap', label: 'Bushing Test Tap', value: 'Capacitance C1: 342 pF (+0.02%)', x: 58, y: 70 },
      ],
      svg: (
        <svg viewBox="0 0 320 200" className="w-full h-full text-amber-600" fill="none" stroke="currentColor">
          <polygon points="135,160 185,160 175,40 145,40" strokeWidth="2" className="text-slate-400" fill="#F8FAFC" />
          <line x1="125" y1="60" x2="195" y2="60" strokeWidth="2" className="text-amber-600" />
          <line x1="120" y1="85" x2="200" y2="85" strokeWidth="2" className="text-amber-600" />
          <line x1="115" y1="110" x2="205" y2="110" strokeWidth="2" className="text-amber-600" />
          <line x1="110" y1="135" x2="210" y2="135" strokeWidth="2" className="text-amber-600" />
          <circle cx="185" cy="140" r="5" fill="#0284C7" className="animate-pulse" />
          <text x="195" y="143" fill="#0284C7" fontSize="8" fontFamily="monospace" fontWeight="bold">Tan-δ Tap</text>
        </svg>
      ),
    },
  };

  const currentAsset = assetData[activeTab];

  return (
    <section id="asset-ecosystem" className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#005288] font-mono">
            Multi-Asset Condition Monitoring
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One Intelligent Ecosystem for All Critical High-Voltage Assets
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Click across asset classes to inspect real-time sensor placement, telemetry acquisition methods, and predictive indicators.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-start sm:justify-center mb-8 sm:mb-10 overflow-x-auto pb-3 scrollbar-none px-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 min-w-max space-x-1">
            <button
              onClick={() => {
                setActiveTab('transformer');
                setActiveHotspot(null);
              }}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'transformer'
                  ? 'bg-[#005288] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Power Transformers</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('switchgear');
                setActiveHotspot(null);
              }}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'switchgear'
                  ? 'bg-[#005288] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>GIS &amp; AIS Switchgear</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('rotating');
                setActiveHotspot(null);
              }}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'rotating'
                  ? 'bg-[#005288] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Motors &amp; Generators</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('bushings');
                setActiveHotspot(null);
              }}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'bushings'
                  ? 'bg-[#005288] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Disc className="w-4 h-4" />
              <span>Bushings &amp; Cables</span>
            </button>
          </div>
        </div>

        {/* Explorer Stage */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-slate-50/80 rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200 shadow-xs">
          {/* SVG Diagram Area */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-inner relative min-h-[260px] sm:min-h-[380px] flex items-center justify-center overflow-hidden">
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-xs font-mono text-slate-500 flex items-center space-x-2 z-10">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
              <span className="font-bold">{activeTab.toUpperCase()} TELEMETRY SCHEMATIC</span>
            </div>

            <div className="w-full max-w-md mx-auto aspect-video flex items-center justify-center relative pt-4 sm:pt-0">
              {currentAsset.svg}

              {/* Clickable Hotspots overlay buttons */}
              {currentAsset.hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/spot cursor-pointer"
                  title={h.label}
                >
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500 flex items-center justify-center group-hover/spot:scale-125 transition-transform shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>
                  </span>

                  {/* Active Tooltip popup */}
                  {activeHotspot === h.id && (
                    <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 w-48 bg-slate-900 text-white text-[10px] font-mono p-2.5 rounded-xl shadow-2xl z-30 border border-sky-400/40 animate-fadeIn">
                      <div className="flex items-center space-x-1 text-sky-400 font-bold mb-1">
                        <Info className="w-3 h-3" />
                        <span>{h.label}</span>
                      </div>
                      <div className="text-slate-300 font-semibold">{h.value}</div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-slate-100/90 text-slate-600 text-[9px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-200 shadow-2xs hidden sm:block">
              Interactive Blueprint: Click hotspots to inspect live telemetry
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div>
              <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono uppercase bg-sky-100 text-[#005288] border border-sky-200 font-bold">
                {currentAsset.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">{currentAsset.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                {currentAsset.desc}
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
              {currentAsset.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-sky-400 transition-colors"
                >
                  <div className="w-5 h-5 rounded bg-sky-100 flex items-center justify-center text-[#005288] mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs font-semibold">{pt.name}</div>
                    <div className="text-[11px] text-slate-500 font-mono">{pt.spec}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 sm:pt-4 border-t border-slate-200 flex items-center space-x-4">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold transition flex items-center justify-center space-x-2 shadow-2xs cursor-pointer group"
              >
                <span>View Complete Spec Sheet</span>
                <FileText className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
