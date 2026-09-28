import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileDetails } from '../data/portfolioData';

export default function Contact() {
  const { currentTheme } = useTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t" style={{ borderColor: currentTheme.border }}>
      <div style={{ backgroundColor: currentTheme.card, borderColor: currentTheme.border }} className="border p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold">Let's Connect</h2>
            <p style={{ color: currentTheme.textMuted }} className="text-sm leading-relaxed">
              Open to analytical roles, MIS dashboard initiatives, and performance marketing collaborations. Reach out directly or send a message below.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="p-3 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ color: currentTheme.textMuted }} className="text-xs block">Phone</span>
                  <span className="text-sm font-semibold">{profileDetails.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="p-3 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ color: currentTheme.textMuted }} className="text-xs block">Email</span>
                  <span className="text-sm font-semibold">{profileDetails.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="p-3 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ color: currentTheme.textMuted }} className="text-xs block">Location</span>
                  <span className="text-sm font-semibold">{profileDetails.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-2xl border" style={{ borderColor: currentTheme.border }}>
                <div style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.primary }} className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Dispatched!</h3>
                <p style={{ color: currentTheme.textMuted }} className="text-sm">Thank you for reaching out. Shuaib will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label style={{ color: currentTheme.textMuted }} className="block text-xs font-semibold mb-1.5 uppercase tracking-wider">Your Name</label>
                  <input required type="text" placeholder="e.g. Jane Doe" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-sm focus:outline-none" style={{ borderColor: currentTheme.border, color: currentTheme.textMain }} />
                </div>

                <div>
                  <label style={{ color: currentTheme.textMuted }} className="block text-xs font-semibold mb-1.5 uppercase tracking-wider">Your Email</label>
                  <input required type="email" placeholder="e.g. jane@company.com" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-sm focus:outline-none" style={{ borderColor: currentTheme.border, color: currentTheme.textMain }} />
                </div>

                <div>
                  <label style={{ color: currentTheme.textMuted }} className="block text-xs font-semibold mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea required rows={4} placeholder="Discuss an opportunity..." className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-sm focus:outline-none resize-none" style={{ borderColor: currentTheme.border, color: currentTheme.textMain }} />
                </div>

                <button type="submit" style={{ backgroundColor: currentTheme.primary }} className="w-full py-4 rounded-xl text-white font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}