import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer className="mx-auto my-16 max-w-6xl rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-6 text-white backdrop-blur-lg">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h4 className="text-2xl font-bold">Ready to craft your style match?</h4>
          <p className="mt-1 text-white/75">Export moodboards, share links, and collaborate with your team.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
          >
            Start a free session
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-xl bg-white/10 p-3 text-white hover:bg-white/20" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-xl bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
