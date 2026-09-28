import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  cyan: {
    name: 'Electric Cyan',
    bg: '#f8fafc',
    card: '#ffffff',
    border: '#e2e8f0',
    primary: '#0284c7',
    textMain: '#0f172a',
    textMuted: '#64748b',
    badgeBg: 'rgba(2, 132, 199, 0.08)',
  },
  emerald: {
    name: 'Emerald Data',
    bg: '#f4fbf7',
    card: '#ffffff',
    border: '#d1fae5',
    primary: '#059669',
    textMain: '#064e3b',
    textMuted: '#6b7280',
    badgeBg: 'rgba(5, 150, 105, 0.08)',
  },
  indigo: {
    name: 'Royal Indigo',
    bg: '#f8fafc',
    card: '#ffffff',
    border: '#e0e7ff',
    primary: '#4f46e5',
    textMain: '#1e1b4b',
    textMuted: '#64748b',
    badgeBg: 'rgba(79, 70, 229, 0.08)',
  },
  amber: {
    name: 'Sunset Amber',
    bg: '#fffbf0',
    card: '#ffffff',
    border: '#fef3c7',
    primary: '#d97706',
    textMain: '#451a03',
    textMuted: '#78350f',
    badgeBg: 'rgba(217, 119, 6, 0.08)',
  }
};

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('cyan');
  const currentTheme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, currentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);