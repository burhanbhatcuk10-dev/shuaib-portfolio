import React from 'react';
import { Database, TrendingUp, Terminal, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const { currentTheme } = useTheme();

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t" style={{ borderColor: currentTheme.border }}>
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Automated Skill Matrix</h2>
        <p style={{ color: currentTheme.textMuted }} className="text-sm sm:text-base">Categorized proficiencies optimized for executive data reporting and analytics workflows.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsCategories.map((group, idx) => (
          <div key={idx} style={{ backgroundColor: currentTheme.card, borderColor: currentTheme.border }} className="border p-8 rounded-3xl flex flex-col justify-between shadow-md">
            <div>
              <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                {idx === 0 ? <Database size={24} /> : idx === 1 ? <TrendingUp size={24} /> : <Terminal size={24} />}
              </div>
              <h3 className="text-xl font-bold mb-6">{group.category}</h3>
              <ul className="space-y-3.5">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} style={{ color: currentTheme.textMuted }} className="text-sm flex items-start gap-2.5">
                    <CheckCircle size={16} style={{ color: currentTheme.primary }} className="mt-0.5 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}