import React, { useState } from 'react';
import Hero3DCover from './components/Hero3DCover';
import StyleSelector from './components/StyleSelector';
import MatchResults from './components/MatchResults';
import FooterCTA from './components/FooterCTA';

function App() {
  const [selectedStyle, setSelectedStyle] = useState('toon');

  const handleGetStarted = () => {
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Hero with Spline Cover */}
      <Hero3DCover onPrimaryClick={handleGetStarted} />

      {/* Style selector */}
      <div className="px-4">
        <StyleSelector value={selectedStyle} onChange={setSelectedStyle} />
      </div>

      {/* Results / Guidance */}
      <div className="px-4">
        <MatchResults selected={selectedStyle} />
      </div>

      {/* Footer CTA */}
      <div className="px-4">
        <FooterCTA />
      </div>
    </div>
  );
}

export default App;
