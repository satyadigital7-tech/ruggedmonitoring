import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Activity, PhoneCall } from 'lucide-react';

export default function HeroSection({ onOpenDemoModal }) {
  const heroRef = useRef(null);
  const finStageRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const stage = finStageRef.current;
    if (!hero || !stage) return;

    const isMobile = window.innerWidth < 640;
    const bladeCount = isMobile ? 22 : 36;

    stage.innerHTML = '';
    const bladeEls = [];

    for (let i = 0; i < bladeCount; i++) {
      const progress = i / (bladeCount - 1);
      const waveAngle = progress * Math.PI;
      const baseH = isMobile ? 220 : 320;
      const waveH = isMobile ? 70 : 115;
      const height = Math.round(baseH + Math.sin(waveAngle) * waveH);

      const rotY = ((progress - 0.48) * (isMobile ? 60 : 95)).toFixed(1);
      const skewY = ((progress - 0.48) * (isMobile ? 8 : 14)).toFixed(1);
      const animDelay = (progress * 2.2).toFixed(2);

      const div = document.createElement('div');
      div.className = 'fin-blade fin-animated rounded-md sm:rounded-lg';
      div.setAttribute('data-base-rot', rotY);
      div.setAttribute('data-base-skew', skewY);

      if (isMobile) {
        div.style.width = '12px';
        div.style.margin = '0 1px';
      } else {
        div.style.width = '24px';
      }

      div.style.height = `${height}px`;
      div.style.setProperty('--base-rot-y', `${rotY}deg`);
      div.style.setProperty('--base-skew', `${skewY}deg`);
      div.style.animationDelay = `-${animDelay}s`;
      div.style.transform = `translateY(0px) rotateY(${rotY}deg) skewY(${skewY}deg)`;

      stage.appendChild(div);
      bladeEls.push(div);
    }

    const applyRipple = (clientPositionX, clientPositionY) => {
      const rect = hero.getBoundingClientRect();
      const mouseNormX = (clientPositionX - rect.left) / rect.width;
      const mouseNormY = (clientPositionY - rect.top) / rect.height;

      const stageShiftX = (mouseNormX - 0.5) * (isMobile ? 18 : 30);
      const stageShiftY = (mouseNormY - 0.5) * (isMobile ? 8 : 15);
      const stageRotY = (mouseNormX - 0.5) * (isMobile ? 5 : 8);
      stage.style.transform = `translateX(${stageShiftX}px) translateY(${stageShiftY}px) rotateY(${stageRotY}deg)`;

      bladeEls.forEach((blade, index) => {
        const bladeProgress = index / (bladeCount - 1);
        const distance = Math.abs(mouseNormX - bladeProgress);
        const proximity = Math.max(0, 1 - distance * (isMobile ? 4.5 : 3.5));

        if (proximity > 0) {
          const baseRot = parseFloat(blade.getAttribute('data-base-rot'));
          const baseSkew = parseFloat(blade.getAttribute('data-base-skew'));
          const extraLift = proximity * (isMobile ? 16 : 24);
          const extraRot = (mouseNormX > bladeProgress ? -1 : 1) * proximity * (isMobile ? 8 : 12);

          blade.style.transform = `translateY(${-extraLift}px) rotateY(${baseRot + extraRot}deg) skewY(${baseSkew}deg) scale(1.04)`;
          blade.style.background = `linear-gradient(145deg, #ffffff 0%, #f1f5f9 40%, #bae6fd 80%, #94a3b8 100%)`;
          blade.style.boxShadow = `-4px 10px 18px rgba(0, 82, 136, 0.15), inset 1px 1px 0px rgba(255,255,255,1)`;
        } else {
          const baseRot = blade.getAttribute('data-base-rot');
          const baseSkew = blade.getAttribute('data-base-skew');
          blade.style.transform = `translateY(0px) rotateY(${baseRot}deg) skewY(${baseSkew}deg) scale(1)`;
          blade.style.background = '';
          blade.style.boxShadow = '';
        }
      });
    };

    const handleMouseMove = (e) => applyRipple(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        applyRipple(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleReset = () => {
      stage.style.transform = `translateX(0px) translateY(0px) rotateY(0deg)`;
      bladeEls.forEach((blade) => {
        const baseRot = blade.getAttribute('data-base-rot');
        const baseSkew = blade.getAttribute('data-base-skew');
        blade.style.transform = `translateY(0px) rotateY(${baseRot}deg) skewY(${baseSkew}deg) scale(1)`;
        blade.style.background = '';
        blade.style.boxShadow = '';
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('touchmove', handleTouchMove, { passive: true });
    hero.addEventListener('mouseleave', handleReset);
    hero.addEventListener('touchend', handleReset);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('touchmove', handleTouchMove);
      hero.removeEventListener('mouseleave', handleReset);
      hero.removeEventListener('touchend', handleReset);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative min-h-[80vh] xs:min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-white selection:bg-[#005288] selection:text-white pt-4 pb-12 sm:py-0"
    >
      {/* 3D Wave Cooling Fin Array Background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden hero-fin-perspective"
        id="fin-wave-container"
      >
        <div className="wave-sheen z-10"></div>
        <div
          ref={finStageRef}
          className="relative w-full max-w-[1400px] h-[320px] xs:h-[400px] sm:h-[560px] flex items-center justify-center sm:justify-between opacity-80 sm:opacity-85 transition-transform duration-200 scale-90 xs:scale-95 sm:scale-100 px-2"
          id="fin-wave-stage"
        ></div>
      </div>

      {/* Radial Background Gradient */}
      <div className="absolute inset-0 bg-radial from-white/40 via-white/70 to-white/95 pointer-events-none"></div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 pb-8 sm:pt-8 sm:pb-14 flex flex-col items-center">
        {/* Live Status Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-[10px] xs:text-[11px] sm:text-xs font-mono font-semibold mb-5 sm:mb-6 shadow-sm border border-slate-700/60 backdrop-blur-md hero-badge-float max-w-full">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide uppercase">
            Condition Monitoring &amp; AI Predictive Maintenance
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[34px] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-[900] tracking-[-0.04em] text-[#002B49] leading-[0.95] sm:leading-[0.92] uppercase select-none mb-4 sm:mb-6 drop-shadow-xs">
          <span className="block transition-transform duration-300 hover:scale-[1.01]">
            ONE HEALTH
          </span>
          <span className="block mt-0.5 sm:mt-3 transition-transform duration-300 hover:scale-[1.01] text-[#005288]">
            PLATFORM
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs xs:text-sm sm:text-2xl md:text-3xl font-[800] tracking-[0.08em] text-slate-900 uppercase mb-8 sm:mb-10 max-w-xs sm:max-w-2xl select-none leading-relaxed">
          FOR ALL ELECTRICAL ASSETS
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto relative overflow-hidden px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-[#005288] hover:bg-[#003E63] text-white font-bold text-xs sm:text-sm tracking-wide shadow-rm-btn transition-all duration-300 transform active:scale-95 flex items-center justify-center space-x-2.5 group cursor-pointer"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></span>
            <Activity className="w-4 h-4 text-sky-300 group-hover:scale-110 transition-transform" />
            <span>Predictive maintenance Platform</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm text-center active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#005288]" />
            <span>Request Engineering Walkthrough</span>
          </button>
        </div>

        {/* Asset Category Badges */}
        <div className="mt-8 sm:mt-14 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 text-[11px] sm:text-xs text-slate-700 font-medium max-w-sm sm:max-w-none w-full">
          <a
            href="#asset-ecosystem"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition text-left group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
            <span className="truncate font-semibold group-hover:text-[#005288]">Transformers</span>
          </a>

          <a
            href="#asset-ecosystem"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition text-left group"
          >
            <span className="w-2 h-2 rounded-full bg-[#005288] flex-shrink-0"></span>
            <span className="truncate font-semibold group-hover:text-[#005288]">GIS / AIS Switchgear</span>
          </a>

          <a
            href="#asset-ecosystem"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition text-left group"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
            <span className="truncate font-semibold group-hover:text-[#005288]">Rotating Machines</span>
          </a>

          <a
            href="#asset-ecosystem"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition text-left group"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
            <span className="truncate font-semibold group-hover:text-[#005288]">Bushings &amp; Cables</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce cursor-pointer p-1"
        onClick={() => {
          document.getElementById('rm-eye-modules-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
