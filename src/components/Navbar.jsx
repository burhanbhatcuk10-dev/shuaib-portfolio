import React from 'react';
import { BarChart3, ArrowUpRight, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileDetails } from '../data/portfolioData';

export default function Navbar() {
  const { currentTheme, themeName, setThemeName, themes } = useTheme();

  return (
    <nav style={{ backgroundColor: `${currentTheme.bg}ee`, borderColor: currentTheme.border }} className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{ backgroundColor: currentTheme.primary }} className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black shadow-md">
            <BarChart3 size={22} />
          </div>
          <div>
            <span className="text-lg font-extrabold tracking-wider block">{profileDetails.name}</span>
            <span style={{ color: currentTheme.primary }} className="text-xs font-semibold tracking-wide uppercase">MIS & Data Analyst</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: currentTheme.textMuted }}>
          <a href="#overview" className="hover:text-slate-900 transition-colors">Overview</a>
          <a href="#skills" className="hover:text-slate-900 transition-colors">Expertise</a>
          <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
          <a href="#certifications" className="hover:text-slate-900 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-200/60 p-1.5 rounded-xl border" style={{ borderColor: currentTheme.border }}>
            <Palette size={15} style={{ color: currentTheme.primary }} className="ml-1 hidden sm:block" />
            {Object.keys(themes).map((tKey) => (
              <button
                key={tKey}
                onClick={() => setThemeName(tKey)}
                title={themes[tKey].name}
                style={{ backgroundColor: themes[tKey].primary, transform: themeName === tKey ? 'scale(1.15)' : 'scale(1)' }}
                className="w-5 h-5 rounded-full transition-transform shadow-sm focus:outline-none"
              />
            ))}
          </div>

          <a
            href={`mailto:${profileDetails.email}`}
            style={{ backgroundColor: currentTheme.primary }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-xl transition-all shadow-md hover:opacity-90"
          >
            <span>Contact</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}