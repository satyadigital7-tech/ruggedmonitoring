import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    assetFocus: 'Power Transformers',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ email: '', company: '', assetFocus: 'Power Transformers', notes: '' });
      }, 300);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-200 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          <span className="text-xs font-mono text-[#005288] font-bold">ENGINEERING CONSULTATION</span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">Request Substation Simulator Access</h3>
          <p className="text-xs text-slate-600 font-medium">
            Get direct access to our live RM EYE testbed or request an asset condition monitoring audit for your facility.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 text-xs font-mono">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Work Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="engineer@utility-power.com"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#005288] font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Company / Utility</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="National Grid"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#005288] font-sans"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Primary Asset Focus</label>
                <select
                  value={formData.assetFocus}
                  onChange={(e) => setFormData({ ...formData, assetFocus: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-[#005288] font-sans"
                >
                  <option>Power Transformers</option>
                  <option>GIS / AIS Switchgear</option>
                  <option>Motors &amp; Generators</option>
                  <option>Bushing Monitoring</option>
                  <option>Full Substation Fleet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Project Scope / Notes</label>
              <textarea
                rows="3"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell us about voltage levels or upcoming retrofit timelines..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-[#005288] font-sans"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#005288] hover:bg-[#003e66] text-white font-bold text-xs font-sans tracking-wide transition shadow-xs mt-2 cursor-pointer"
            >
              Submit &amp; Open Live Demo Environment
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-center text-xs font-semibold flex flex-col items-center space-y-2">
            <CheckCircle className="w-8 h-8 text-emerald-600 animate-bounce" />
            <div>Request received! Redirecting to the interactive telemetry simulator...</div>
          </div>
        )}
      </div>
    </div>
  );
}
