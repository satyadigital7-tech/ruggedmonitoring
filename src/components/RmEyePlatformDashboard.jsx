import React, { useState, useEffect, useRef } from 'react';
import { LayoutDashboard, Crosshair, AlertTriangle } from 'lucide-react';

export default function RmEyePlatformDashboard({ onOpenDemoModal }) {
  const [viewMode, setViewMode] = useState('dynamic');
  const [canvasHover, setCanvasHover] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let offset = 0;
    let animId;

    const render = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.07)';
      ctx.lineWidth = 1;
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Trip Limit Line (Red Dashed)
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.6)';
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(0, 35);
      ctx.lineTo(w, 35);
      ctx.stroke();
      ctx.setLineDash([]);

      // Winding Temp Sine Wave (Blue)
      ctx.strokeStyle = '#005288';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let x = 0; x < w * 0.7; x += 5) {
        const y =
          h * 0.65 -
          Math.sin((x + offset) * 0.03) * 20 -
          Math.cos((x + offset) * 0.015) * 15;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // AI Predicted Horizon Line (Purple Dashed)
      ctx.strokeStyle = '#9333EA';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      const startX = w * 0.7 - 5;
      const startY =
        h * 0.65 -
        Math.sin((startX + offset) * 0.03) * 20 -
        Math.cos((startX + offset) * 0.015) * 15;
      ctx.moveTo(startX, startY);
      for (let x = startX; x < w; x += 5) {
        const y =
          startY -
          (x - startX) * 0.25 -
          Math.sin((x + offset) * 0.04) * 8;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Interactive hover crosshairs on Canvas if hovered
      if (canvasHover) {
        ctx.strokeStyle = 'rgba(2, 132, 199, 0.4)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(canvasHover.x, 0);
        ctx.lineTo(canvasHover.x, h);
        ctx.stroke();

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(0, canvasHover.y);
        ctx.lineTo(w, canvasHover.y);
        ctx.stroke();

        ctx.setLineDash([]);
      }

      offset += 0.8;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [viewMode, canvasHover]);

  const handleCanvasMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = x / rect.width;
    const normY = 1 - y / rect.height;

    const calculatedTemp = (55 + normY * 50).toFixed(1);
    const timeOffset = (normX * 12).toFixed(1);

    setCanvasHover({ x, y, temp: calculatedTemp, time: timeOffset });
  };

  const viewDetails = {
    dynamic: {
      title: 'Dynamic Transformer Thermal & Overload Curve',
      subtitle: 'Calculated using IEEE C57.91-2011 Differential Equations',
    },
    dga: {
      title: 'Duval Triangle 1 & 4 Gas Ratio Diagnostics',
      subtitle: 'IEC 60599 Key Gas Fault Pattern Recognition (CH₄/H₂, C₂H₂/C₂H₄)',
    },
    fleet: {
      title: 'Consolidated Fleet Health & Failure Probability Index',
      subtitle: 'Fleet-wide Weibull hazard distribution curve with automated priority rank',
    },
  };

  return (
    <section id="rm-eye-platform" className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#005288] text-[11px] sm:text-xs font-mono font-bold">
            <span>AI-POWERED ANALYTICS &amp; PREDICTIVE MAINTENANCE</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet RM EYE: Predictive analytics for Electrical Asset Health
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Unified software platform combining AI-powered analytics, IEEE/IEC thermal dynamics, and automated Predictive maintenance dispatching.
          </p>
        </div>

        {/* Dashboard Visual Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-xl">
          {/* Header bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-3">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-xs font-mono text-slate-600 font-semibold pl-1 sm:pl-2">
                RM EYE Fleet Cloud &bull; v5.2 Enterprise
              </span>
            </div>

            {/* View Mode Buttons */}
            <div className="w-full sm:w-auto flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-[11px] sm:text-xs">
              <button
                onClick={() => setViewMode('dynamic')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shadow-2xs flex-1 sm:flex-none text-center cursor-pointer ${
                  viewMode === 'dynamic' ? 'bg-[#005288] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dynamic Loading
              </button>
              <button
                onClick={() => setViewMode('dga')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition flex-1 sm:flex-none text-center cursor-pointer ${
                  viewMode === 'dga' ? 'bg-[#005288] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                DGA Duval Triangle
              </button>
              <button
                onClick={() => setViewMode('fleet')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition flex-1 sm:flex-none text-center cursor-pointer ${
                  viewMode === 'fleet' ? 'bg-[#005288] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Fleet Risk Index
              </button>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Chart Panel */}
            <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between shadow-inner relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                    {viewDetails[viewMode].title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-mono">
                    {viewDetails[viewMode].subtitle}
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs text-[#005288] font-mono font-bold bg-sky-100 px-2 py-1 rounded border border-sky-200 self-start sm:self-auto flex items-center space-x-1">
                  <Crosshair className="w-3 h-3 text-[#005288] animate-spin" style={{ animationDuration: '10s' }} />
                  <span>Model Convergence: 99.9%</span>
                </span>
              </div>

              {/* Interactive Canvas */}
              <div
                onMouseMove={handleCanvasMouseMove}
                onMouseLeave={() => setCanvasHover(null)}
                className="w-full h-48 sm:h-64 relative flex items-end cursor-crosshair"
              >
                <canvas ref={canvasRef} className="w-full h-full"></canvas>

                {/* Hover readout overlay */}
                {canvasHover && (
                  <div
                    style={{ left: `${canvasHover.x + 10}px`, top: `${canvasHover.y - 40}px` }}
                    className="absolute bg-slate-900/90 text-white font-mono text-[10px] p-2 rounded-lg border border-sky-400 shadow-xl pointer-events-none z-20"
                  >
                    <div className="text-sky-400 font-bold">Time: +{canvasHover.time}h</div>
                    <div>Temp: {canvasHover.temp}°C</div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-200 text-[11px] sm:text-xs text-slate-600 font-mono gap-2">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-3 h-0.5 bg-[#005288] inline-block"></span>
                    <span>Actual Winding Temp</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <span className="w-3 h-0.5 bg-purple-600 inline-block"></span>
                    <span>AI Predicted (+6h)</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <span className="w-3 h-0.5 bg-rose-500 inline-block"></span>
                    <span>Trip Limit (105°C)</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-emerald-600 font-bold">
                  Adaptive Margin: +14.2 MVA
                </div>
              </div>
            </div>

            {/* Right Diagnostic Panel */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-amber-200 shadow-xs hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500 font-bold flex items-center space-x-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span>AI PREDICTION ALERT</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                    WARNING
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Insulation Loss of Life Accelerated
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Ambient temperature surge combined with 112% peak load projected at 16:00. Recommend load redirection to Substation North.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-mono pt-2 border-t border-slate-200">
                  <span>Probability: 92.4%</span>
                  <button onClick={onOpenDemoModal} className="text-[#005288] font-bold hover:underline cursor-pointer">
                    Execute Mitigation &rarr;
                  </button>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3 shadow-xs">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">
                  Connected Fleet Summary
                </span>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs p-2 rounded bg-white border border-slate-200 shadow-3xs hover:border-emerald-400 transition-colors">
                    <span className="text-slate-800 font-medium">Substation South TX-1</span>
                    <span className="text-emerald-600 font-mono font-bold">98.2% Health</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded bg-white border border-slate-200 shadow-3xs hover:border-emerald-400 transition-colors">
                    <span className="text-slate-800 font-medium">Harbor Wind Gen Step-Up</span>
                    <span className="text-emerald-600 font-mono font-bold">96.8% Health</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded bg-white border border-slate-200 shadow-3xs hover:border-amber-400 transition-colors">
                    <span className="text-slate-800 font-medium">Metro GIS Busbar 33kV</span>
                    <span className="text-amber-600 font-mono font-bold">84.1% Attention</span>
                  </div>
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-2 rounded-xl bg-slate-900 hover:bg-black text-xs font-semibold text-white transition flex items-center justify-center space-x-1.5 shadow-2xs cursor-pointer group"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span>Launch Live Full Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
