import React, { useState } from 'react';
import {
  ChevronDown,
  Search,
  Menu,
  X,
  Thermometer,
  Cpu,
  Activity,
  Zap,
  Shield,
  RefreshCw,
} from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Official Rugged Monitoring Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-[1.03]"
            aria-label="Rugged Monitoring Homepage"
          >
            <img
              src="https://www.ruggedmonitoring.com/wp-content/uploads/2025/03/RMES-New-logo-1.png"
              alt="Rugged Monitoring Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain select-none transition-filter group-hover:brightness-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-slate-800">
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-[#005288] transition-colors py-2 cursor-pointer animated-nav-link">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#005288]" />
              </button>
              <div className="absolute top-full -left-4 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-2 flex flex-col space-y-1">
                  <a
                    href="#sensors-hardware"
                    className="p-2.5 rounded-lg hover:bg-sky-50/80 transition-all flex items-center space-x-3 text-slate-800 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-[#005288] group-hover/item:scale-110 transition-transform">
                      <Thermometer className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-slate-900 group-hover/item:text-[#005288]">
                        IIoT sensors &amp; Fiber Optics
                      </span>
                      <span className="text-[10px] text-slate-500">GaAs Optical probes</span>
                    </div>
                  </a>

                  <a
                    href="#sensors-hardware"
                    className="p-2.5 rounded-lg hover:bg-purple-50/80 transition-all flex items-center space-x-3 text-slate-800 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 group-hover/item:scale-110 transition-transform">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-slate-900 group-hover/item:text-purple-600">
                        Edge devices &amp; Gateways
                      </span>
                      <span className="text-[10px] text-slate-500">IEC 61850 Station Bus</span>
                    </div>
                  </a>

                  <a
                    href="#sensors-hardware"
                    className="p-2.5 rounded-lg hover:bg-emerald-50/80 transition-all flex items-center space-x-3 text-slate-800 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover/item:scale-110 transition-transform">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-slate-900 group-hover/item:text-emerald-600">
                        Transformer monitoring &amp; Bushings
                      </span>
                      <span className="text-[10px] text-slate-500">Continuous Tan-δ &amp; DGA</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-[#005288] transition-colors py-2 cursor-pointer animated-nav-link">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#005288]" />
              </button>
              <div className="absolute top-full -left-4 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-2 flex flex-col space-y-1">
                  <a
                    href="#asset-ecosystem"
                    className="p-2.5 rounded-lg hover:bg-slate-50 transition flex items-center space-x-3 text-slate-800 group/item"
                  >
                    <Zap className="w-4 h-4 text-[#005288] group-hover/item:scale-120 transition-transform" />
                    <span className="text-xs font-semibold">Transformer monitoring</span>
                  </a>
                  <a
                    href="#asset-ecosystem"
                    className="p-2.5 rounded-lg hover:bg-slate-50 transition flex items-center space-x-3 text-slate-800 group/item"
                  >
                    <Shield className="w-4 h-4 text-[#005288] group-hover/item:scale-120 transition-transform" />
                    <span className="text-xs font-semibold">GIS &amp; AIS Switchgear</span>
                  </a>
                  <a
                    href="#asset-ecosystem"
                    className="p-2.5 rounded-lg hover:bg-slate-50 transition flex items-center space-x-3 text-slate-800 group/item"
                  >
                    <RefreshCw className="w-4 h-4 text-[#005288] group-hover/item:scale-120 transition-transform" />
                    <span className="text-xs font-semibold">Motors &amp; Generators</span>
                  </a>
                </div>
              </div>
            </div>

            <a href="#rm-eye-platform" className="hover:text-[#005288] transition-colors animated-nav-link relative flex items-center space-x-1">
              <span>RM EYE</span>
              <span className="px-1.5 py-0.2 rounded-full bg-sky-100 text-[#005288] text-[9px] font-bold font-mono animate-pulse">
                v5.2
              </span>
            </a>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-[#005288] transition-colors py-2 cursor-pointer animated-nav-link">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#005288]" />
              </button>
              <div className="absolute top-full -left-4 w-60 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-2 flex flex-col space-y-1 text-slate-800 text-xs">
                  <a href="#roi-calculator" className="p-2.5 rounded-lg hover:bg-slate-50 transition hover:text-[#005288] font-medium">
                    Power Utilities &amp; Grid
                  </a>
                  <a href="#roi-calculator" className="p-2.5 rounded-lg hover:bg-slate-50 transition hover:text-[#005288] font-medium">
                    Renewables &amp; Wind/Solar
                  </a>
                  <a href="#roi-calculator" className="p-2.5 rounded-lg hover:bg-slate-50 transition hover:text-[#005288] font-medium">
                    Industrial &amp; Heavy Smelting
                  </a>
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-[#005288] transition-colors py-2 cursor-pointer animated-nav-link">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#005288]" />
              </button>
              <div className="absolute top-full -left-4 w-52 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-2 flex flex-col space-y-1 text-slate-800 text-xs">
                  <a href="#architecture" className="p-2 rounded-lg hover:bg-slate-50 transition hover:text-[#005288]">
                    Company Overview
                  </a>
                  <a href="#stats-strip" className="p-2 rounded-lg hover:bg-slate-50 transition hover:text-[#005288]">
                    Global Footprint
                  </a>
                  <a href="#architecture" className="p-2 rounded-lg hover:bg-slate-50 transition hover:text-[#005288]">
                    Certifications &amp; Standards
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Header Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenDemoModal}
              className="relative overflow-hidden px-6 py-2.5 rounded-full bg-[#111827] hover:bg-black text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 group cursor-pointer"
            >
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></span>
              <span>Contact us</span>
            </button>

            <div className="relative flex items-center">
              {searchFocused && (
                <input
                  type="text"
                  placeholder="Search assets, specs..."
                  autoFocus
                  onBlur={() => setSearchFocused(false)}
                  className="w-48 bg-slate-100 text-xs text-slate-800 rounded-full px-3 py-1.5 focus:outline-none border border-sky-400 animate-fadeIn"
                />
              )}
              <button
                onClick={() => setSearchFocused(!searchFocused)}
                className="p-2 text-slate-700 hover:text-[#005288] transition-colors rounded-full hover:bg-slate-100 cursor-pointer"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-black focus:outline-none cursor-pointer transition-transform duration-200"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 rotate-90 transition-transform" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-3 text-slate-800 shadow-xl animate-fadeIn">
          <a
            href="#sensors-hardware"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold py-1.5 hover:text-[#005288] border-b border-slate-50 transition-colors"
          >
            Products
          </a>
          <a
            href="#asset-ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold py-1.5 hover:text-[#005288] border-b border-slate-50 transition-colors"
          >
            Solutions
          </a>
          <a
            href="#rm-eye-platform"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold py-1.5 hover:text-[#005288] border-b border-slate-50 transition-colors"
          >
            RM EYE Software
          </a>
          <a
            href="#roi-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold py-1.5 hover:text-[#005288] border-b border-slate-50 transition-colors"
          >
            Industries &amp; ROI
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold py-1.5 hover:text-[#005288] transition-colors"
          >
            About Us &amp; Architecture
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full text-center py-3 rounded-full bg-[#111827] text-white font-bold text-sm shadow-md"
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
