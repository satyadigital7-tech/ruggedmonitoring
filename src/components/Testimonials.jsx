import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        'The GaAs fiber optic temp probes gave us accurate internal hotspot data during peak summer grid dispatch that our traditional PT100 sensors completely miscalculated.',
      title: 'Chief Substation Engineer',
      location: 'Transmission System Operator • North America',
    },
    {
      quote:
        'RM EYE alerted us to high-frequency partial discharge on our 400kV bushing 3 weeks prior to any visible thermal signature, preventing a multi-million euro outage.',
      title: 'Head of Asset Management',
      location: 'Renewables & Hydro Utility • Western Europe',
    },
    {
      quote:
        'Integrating 180 transformers via IEC 61850 with Rugged Monitoring edge gateways was seamless. Support from their engineering team is unmatched.',
      title: 'Operations Director',
      location: 'Heavy Smelting & Chemical Plant • APAC',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#005288] font-mono">
            Proven In The Field
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Trusted by Critical Infrastructure Operators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex text-amber-500 space-x-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic font-medium">
                  "{rev.quote}"
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900">{rev.title}</h4>
                <p className="text-[11px] text-slate-500 font-mono">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
