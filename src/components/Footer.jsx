import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileDetails } from '../data/portfolioData';

export default function Footer() {
  const { currentTheme } = useTheme();

  return (
    <footer className="py-8 border-t text-center text-xs" style={{ borderColor: currentTheme.border, color: currentTheme.textMuted }}>
      <p>© {new Date().getFullYear()} {profileDetails.name}. All rights reserved. • Data Analyst MIS & Business Reporting</p>
    </footer>
  );
}