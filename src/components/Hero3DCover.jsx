import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Rocket } from 'lucide-react';

const Hero3DCover = ({ onPrimaryClick }) => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm/none font-medium tracking-wide">ArtStyle Match • 3D • Modern • Vibrant</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Match your art with the perfect 3D animation style
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Explore colorful, stylized pipelines and discover animation looks that fit your vision. Pick styles, preview vibes, and curate a showcase instantly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onPrimaryClick}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Rocket className="h-5 w-5" />
            Get started
          </button>
          <a
            href="#showcase"
            className="rounded-xl bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            View showcase
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3DCover;
