import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 sm:pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-10 sm:pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-4">
            <a href="#" className="inline-block" aria-label="Rugged Monitoring Homepage">
              <img
                src="https://www.ruggedmonitoring.com/wp-content/uploads/2025/03/RMES-New-logo-1.png"
                alt="Rugged Monitoring Logo"
                className="h-10 sm:h-12 w-auto object-contain select-none bg-white/90 p-1.5 rounded-lg shadow-xs"
              />
            </a>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Global pioneer in fiber optic sensing, edge intelligence, and condition monitoring software for power generation, transmission, distribution, and heavy industrial assets.
            </p>
            <div className="flex space-x-3 text-slate-400 pt-1">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white border border-slate-700 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white border border-slate-700 transition"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white border border-slate-700 transition"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Asset Solutions */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Asset Solutions</h4>
            <ul className="space-y-2">
              <li>
                <a href="#asset-ecosystem" className="hover:text-white transition">
                  Power Transformers
                </a>
              </li>
              <li>
                <a href="#asset-ecosystem" className="hover:text-white transition">
                  GIS / AIS Switchgear
                </a>
              </li>
              <li>
                <a href="#asset-ecosystem" className="hover:text-white transition">
                  Motors &amp; Generators
                </a>
              </li>
              <li>
                <a href="#asset-ecosystem" className="hover:text-white transition">
                  Bushing Diagnostics
                </a>
              </li>
              <li>
                <a href="#asset-ecosystem" className="hover:text-white transition">
                  Cable Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Technology</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sensors-hardware" className="hover:text-white transition">
                  Fiber Optic Sensors
                </a>
              </li>
              <li>
                <a href="#rm-eye-platform" className="hover:text-white transition">
                  RM EYE APM Cloud
                </a>
              </li>
              <li>
                <a href="#sensors-hardware" className="hover:text-white transition">
                  Edge Gateway X8
                </a>
              </li>
              <li>
                <a href="#sensors-hardware" className="hover:text-white transition">
                  Online Multi-Gas DGA
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition">
                  IEC 61850 Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Global Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Application Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers &amp; Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Global Sales
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-[11px] text-slate-500 font-mono gap-3 text-center sm:text-left">
          <div>
            &copy; <span>{currentYear}</span> Rugged Monitoring Inc. All rights reserved. Enterprise React Concept.
          </div>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              ISO 9001:2015
            </a>
            <a href="#" className="hover:underline">
              IECEx Certified
            </a>
            <a href="#" className="hover:underline">
              Security Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
