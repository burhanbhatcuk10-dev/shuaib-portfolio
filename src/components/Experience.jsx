import React from 'react';
import { Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const { currentTheme } = useTheme();

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto border-t" style={{ borderColor: currentTheme.border }}>
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Professional Journey</h2>
        <p style={{ color: currentTheme.textMuted }} className="text-sm sm:text-base">Demonstrated career progression across high-performance analytical environments.</p>
      </div>

      <div className="space-y-6">
        {experienceData.map((exp, idx) => (
          <div key={idx} style={{ backgroundColor: currentTheme.card, borderColor: currentTheme.border }} className="border p-8 rounded-3xl relative overflow-hidden shadow-md">
            <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary, borderColor: currentTheme.border }} className="absolute top-0 right-0 px-5 py-2 font-semibold text-xs rounded-bl-2xl border-l border-b">
              {exp.period}
            </div>
            <div className="flex items-start gap-4">
              <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="p-3 rounded-2xl shrink-0 mt-1">
                <Briefcase size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <h4 style={{ color: currentTheme.primary }} className="text-sm font-semibold">{exp.company}</h4>
                <p style={{ color: currentTheme.textMuted }} className="text-sm leading-relaxed pt-2">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}