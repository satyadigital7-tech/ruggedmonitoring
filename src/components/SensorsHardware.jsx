import React from 'react';
import {
  ThermometerSnowflake,
  ChevronRight,
  ExternalLink,
  Cpu,
  ActivitySquare,
} from 'lucide-react';

export default function SensorsHardware({ onOpenDemoModal }) {
  return (
    <section id="sensors-hardware" className="py-16 sm:py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005288] font-mono">
              Field-Proven Precision
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              IIoT sensors &amp; Edge devices Built for Extreme Environments
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mt-3 md:mt-0 font-medium">
            From oil-immersed EHV transformers to cryogenic applications, our IIoT sensors and Edge devices withstand highest magnetic fields and chemical exposure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-[#005288] mb-5 group-hover:scale-110 transition-transform">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">IIoT sensors &amp; Fiber Optics</h3>
                <span className="text-[10px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded font-semibold">
                  GaAs Tech
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-medium">
                High-precision IIoT sensors with complete immunity to electromagnetic fields (EMI/RFI/HV). Direct probe insertion in Transformer monitoring hot spots with zero drift.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#005288]" />
                  <span>Response Time: &lt; 200 ms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#005288]" />
                  <span>Temp Range: -200°C to +300°C</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#005288]" />
                  <span>Surge Withstand: Up to 1200 kV</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-[#005288] font-mono font-bold">Model: T-Sens / R501</span>
              <button
                onClick={onOpenDemoModal}
                className="text-slate-900 hover:text-[#005288] flex items-center space-x-1 font-semibold cursor-pointer"
              >
                <span>View Datasheet</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-5 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Substation Edge devices</h3>
                <span className="text-[10px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded font-semibold">
                  IEC 61850
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-medium">
                Industrial substation Edge devices executing real-time thermal models, AI-powered analytics, and multi-protocol SCADA mapping (DNP3, Modbus, MQTT).
              </p>

              <ul className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-600" />
                  <span>Dual Redundant Power Supply</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-600" />
                  <span>Operating Temp: -40°C to +85°C</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-600" />
                  <span>Native Fiber / Cellular Dual SIM</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-purple-600 font-mono font-bold">Model: RM-GATE-X8</span>
              <button
                onClick={onOpenDemoModal}
                className="text-slate-900 hover:text-[#005288] flex items-center space-x-1 font-semibold cursor-pointer"
              >
                <span>View Datasheet</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group sm:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                <ActivitySquare className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Online Bushing &amp; PD Monitors</h3>
                <span className="text-[10px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded font-semibold">
                  Continuous Tan-δ
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-medium">
                Simultaneous measurement of Relative Tan Delta, Capacitance drift, and UHF Partial Discharge for continuous Condition monitoring and insulation health.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Capacitance Accuracy: 0.1%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Integrated Surge Suppression</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Autonomous Phase Comparison</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-emerald-600 font-mono font-bold">Model: RM-BUSH-3P</span>
              <button
                onClick={onOpenDemoModal}
                className="text-slate-900 hover:text-[#005288] flex items-center space-x-1 font-semibold cursor-pointer"
              >
                <span>View Datasheet</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
