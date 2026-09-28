import React from 'react';
import { Database, MapPin, Send, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileDetails } from '../data/portfolioData';

export default function Hero() {
  const { currentTheme } = useTheme();

  return (
    <section id="overview" className="pt-36 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div style={{ backgroundColor: currentTheme.primary }} className="absolute top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full blur-[140px] opacity-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6">
          <div style={{ backgroundColor: currentTheme.card, borderColor: currentTheme.border, color: currentTheme.primary }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-xs">
            <span style={{ backgroundColor: currentTheme.primary }} className="w-2 h-2 rounded-full animate-ping" />
            <MapPin size={13} /> {profileDetails.location}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            Dynamic MIS & <span style={{ color: currentTheme.primary }}>Business Insights</span>
          </h1>

          <p style={{ color: currentTheme.textMuted }} className="text-base sm:text-lg max-w-2xl leading-relaxed">
            {profileDetails.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" style={{ backgroundColor: currentTheme.primary }} className="px-8 py-4 text-white font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 hover:opacity-90">
              Get in Touch <Send size={18} />
            </a>
            <a href="#experience" style={{ backgroundColor: currentTheme.card, borderColor: currentTheme.border, color: currentTheme.textMain }} className="px-8 py-4 border font-bold rounded-xl transition-all shadow-xs flex items-center gap-2 hover:bg-slate-50">
              Explore Experience <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Metric Widget */}
        <div className="lg:col-span-5">
          <div style={{ backgroundColor: currentTheme.card, borderColor: currentTheme.border }} className="border rounded-3xl p-6 shadow-xl space-y-6 relative">
            <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: currentTheme.border }}>
              <div className="flex items-center gap-3">
                <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="p-2.5 rounded-xl">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Analytics Engine</h3>
                  <p style={{ color: currentTheme.textMuted }} className="text-xs">Real-Time Profile Metrics</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 font-semibold border border-emerald-200">Verified</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border" style={{ borderColor: currentTheme.border }}>
                <span style={{ color: currentTheme.textMuted }} className="text-xs block mb-1">Core Expertise</span>
                <span style={{ color: currentTheme.primary }} className="text-sm font-extrabold">Advanced Excel & SQL</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border" style={{ borderColor: currentTheme.border }}>
                <span style={{ color: currentTheme.textMuted }} className="text-xs block mb-1">Accuracy Standard</span>
                <span className="text-sm font-extrabold text-slate-800">99.9% Audit</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex justify-between text-xs" style={{ color: currentTheme.textMuted }}>
                <span>MIS Dashboards & Modeling</span>
                <span style={{ color: currentTheme.primary }} className="font-bold">100%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div style={{ backgroundColor: currentTheme.primary }} className="h-full rounded-full w-full" />
              </div>
            </div>

            <div className="pt-2 border-t flex items-center justify-between text-xs" style={{ borderColor: currentTheme.border, color: currentTheme.textMuted }}>
              <span>Direct Phone:</span>
              <span className="font-mono font-bold" style={{ color: currentTheme.textMain }}>{profileDetails.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}