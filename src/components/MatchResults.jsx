import React from 'react';
import { Star, Brush } from 'lucide-react';

const STYLE_SUMMARY = {
  toon: {
    title: 'Toon Shaded Match',
    blurb: 'High-contrast colors, ink-like outlines, and playful motion cues work best.',
    tags: ['Cel Lines', 'Flat Shading', 'Snappy Timing'],
  },
  pbr: {
    title: 'PBR Realism Match',
    blurb: 'Detail-forward look with cinematic lighting and textured materials.',
    tags: ['Subsurface', 'HDRI', 'Raytraced Reflections'],
  },
  lofi: {
    title: 'Low-Poly Match',
    blurb: 'Pastel palettes and simplified forms for a charming minimal aesthetic.',
    tags: ['Dithered Shadows', 'Soft Gradients', 'Blocky Forms'],
  },
  neo: {
    title: 'Neon Cyber Match',
    blurb: 'Vibrant emissives, chrome surfaces, and motion glow trails.',
    tags: ['Glitch FX', 'Emissive', 'Chromatic'],
  },
};

const Pill = ({ children }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

const MatchResults = ({ selected }) => {
  const data = STYLE_SUMMARY[selected];
  if (!data) return null;
  return (
    <section id="showcase" className="mx-auto mt-10 max-w-6xl text-white">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
            <Star className="h-5 w-5 text-yellow-300" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{data.title}</h3>
            <p className="text-sm text-white/70">Tailored guidance based on your style pick.</p>
          </div>
        </div>
        <p className="text-white/85">{data.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {data.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h4 className="font-semibold">Look development tips</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
              <li>Leverage lighting presets to quickly iterate.</li>
              <li>Tune color grading to reinforce the vibe.</li>
              <li>Animate with timing that matches the style.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h4 className="flex items-center gap-2 font-semibold"><Brush className="h-4 w-4" /> Palette suggestions</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#B983FF'].map((c) => (
                <span
                  key={c}
                  className="h-8 w-8 rounded-lg border border-white/10"
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchResults;
