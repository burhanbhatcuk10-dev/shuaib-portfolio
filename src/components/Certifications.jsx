import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const { currentTheme } = useTheme();

  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto border-t" style={{ borderColor: currentTheme.border }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Verified Certifications</h2>
          <div className="space-y-3">
            {certificationsData.map((cert, idx) => (
              <div key={idx} style={{ backgroundColor: currentTheme.card, borderColor: currentTheme.border }} className="border p-4 rounded-2xl flex items-center gap-4 shadow-xs">
                <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="p-2.5 rounded-xl shrink-0">
                  <Award size={20} />
                </div>
                <span className="text-sm font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Academic Background</h2>
          <div style={{ backgroundColor: currentTheme.card, borderColor: currentTheme.border }} className="border p-8 rounded-3xl space-y-6 shadow-md">
            <div className="flex items-start gap-4">
              <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="p-3 rounded-2xl shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bachelor of Technology (B.Tech) - CSE</h3>
                <h4 style={{ color: currentTheme.primary }} className="text-sm font-medium mt-1">Computer Science & Engineering</h4>
              </div>
            </div>

            <p style={{ color: currentTheme.textMuted, borderColor: currentTheme.border }} className="text-sm leading-relaxed border-t pt-4">
              <strong style={{ color: currentTheme.textMain }}>Core Coursework:</strong> Database Management Systems, Data Structures, Algorithms, Software Engineering, and Computer Applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 