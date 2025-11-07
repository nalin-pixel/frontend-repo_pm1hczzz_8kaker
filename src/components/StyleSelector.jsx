import React from 'react';
import { Palette, Wand2 } from 'lucide-react';

const STYLE_OPTIONS = [
  { id: 'toon', label: 'Toon Shaded', desc: 'Bold, graphic look with crisp edges.' },
  { id: 'pbr', label: 'PBR Realism', desc: 'Physically-based, lifelike materials.' },
  { id: 'lofi', label: 'Low-Poly', desc: 'Minimal geometry, pastel vibes.' },
  { id: 'neo', label: 'Neon Cyber', desc: 'Glows, emissive accents, chrome.' },
];

const StyleSelector = ({ value, onChange }) => {
  return (
    <section className="relative mx-auto -mt-16 max-w-6xl rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-white backdrop-blur-lg">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <Palette className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Choose your vibe</h2>
          <p className="text-sm text-white/70">Pick a style to match your artwork’s mood.</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {STYLE_OPTIONS.map((opt) => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`group rounded-xl border p-4 text-left transition ${
                active
                  ? 'border-white bg-white text-slate-900 shadow-lg'
                  : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{opt.label}</span>
                <Wand2 className={`h-5 w-5 ${active ? 'text-slate-900' : 'text-white/60'}`} />
              </div>
              <p className={`mt-1 text-sm ${active ? 'text-slate-700' : 'text-white/70'}`}>{opt.desc}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default StyleSelector;
