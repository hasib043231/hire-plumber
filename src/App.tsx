/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, Shield, Zap, Tool, Clock, MapPin, Star, CheckCircle, Search, ArrowRight } from 'lucide-react';
import Chat from './components/Chat';
import PlumberCard from './components/PlumberCard';
import { AppState, PlumberProfile } from './types';

const MOCK_PLUMBERS: PlumberProfile[] = [
  {
    id: 'p1',
    name: 'Alex Rivera',
    specialty: 'Master Plumber',
    rating: 4.9,
    reviews: 128,
    experience: '12 Years',
    baseRate: '৳850',
    imageUrl: 'https://picsum.photos/seed/alex/300/300'
  },
  {
    id: 'p2',
    name: 'Sarah Chen',
    specialty: 'Drain Specialist',
    rating: 4.8,
    reviews: 94,
    experience: '8 Years',
    baseRate: '৳750',
    imageUrl: 'https://picsum.photos/seed/sarah/300/300'
  }
];

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [currentPlumber, setCurrentPlumber] = useState<PlumberProfile | null>(null);

  const startDiagnosis = () => setState('chatting');
  const handleMatchReady = () => setState('matching');
  const handleBook = (plumber: PlumberProfile) => {
    setCurrentPlumber(plumber);
    setState('booked');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setState('landing')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <Droplets size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Plumb<span className="text-blue-600">Quick</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">How it works</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Emergency</a>
        </div>
        <button 
          onClick={startDiagnosis}
          className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm"
        >
          Fix it Now
        </button>
      </nav>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {state === 'landing' && (
            <motion.section 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Shield size={14} />
                  Verified Professionals in 30 mins
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                  Plumbing issues, <span className="text-blue-600">solved</span> in minutes.
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-md">
                  AI-powered diagnosis, instant cost estimates, and on-demand professional matching. No more waiting, no more guesswork.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={startDiagnosis}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                  >
                    Diagnose My Issue <ArrowRight size={20} />
                  </button>
                  <div className="flex items-center gap-4 px-4 py-2 border border-slate-200 rounded-xl bg-white">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                      ))}
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">4.9/5 Rating</div>
                      <div className="text-slate-500">From 2k+ happy homeowners</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="text-blue-600"><Clock size={24} /></div>
                    <div className="font-bold text-slate-900 leading-tight">Fast<br/>Response</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-blue-600"><Shield size={24} /></div>
                    <div className="font-bold text-slate-900 leading-tight">Fully<br/>Insured</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-blue-600"><Zap size={24} /></div>
                    <div className="font-bold text-slate-900 leading-tight">Expert<br/>Diagnosis</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -rotate-3 z-0"></div>
                <img 
                  src="https://picsum.photos/seed/plumber/800/600" 
                  alt="Professional Plumber" 
                  className="relative z-10 rounded-[2.5rem] shadow-2xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.section>
          )}

          {state === 'chatting' && (
            <motion.section 
              key="chat"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-4xl mx-auto px-6 py-12"
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Issue Diagnosis</h2>
                <p className="text-slate-500 text-sm">Tell us what's wrong and we'll estimate the cost and find a professional.</p>
              </div>
              <Chat onMatchReady={handleMatchReady} />
            </motion.section>
          )}

          {state === 'matching' && (
            <motion.section 
              key="matching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto px-6 py-12"
            >
              <div className="text-center mb-12">
                <div className="inline-block p-3 bg-blue-50 rounded-full text-blue-600 mb-4 animate-pulse">
                  <Search size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">We found matches!</h2>
                <p className="text-slate-500">Based on your diagnosis, these professionals are nearby and available.</p>
              </div>
              <div className="grid gap-6">
                {MOCK_PLUMBERS.map(p => (
                  <PlumberCard key={p.id} profile={p} onBook={() => handleBook(p)} />
                ))}
              </div>
            </motion.section>
          )}

          {state === 'booked' && (
            <motion.section 
              key="booked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto px-6 py-24 text-center"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">You're all set!</h2>
              <p className="text-lg text-slate-600 mb-8">
                {currentPlumber?.name} is on their way and should arrive within 30 minutes. Keep your phone handy!
              </p>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 text-left mb-8">
                <img src={currentPlumber?.imageUrl} className="w-16 h-16 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-slate-900">{currentPlumber?.name}</div>
                  <div className="text-sm text-slate-500 flex items-center gap-1">
                    <MapPin size={14} /> En route to your location
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setState('landing')}
                className="text-blue-600 font-bold hover:underline"
              >
                Return to Dashboard
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">
                <Droplets size={16} />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">PlumbQuick</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              The modern way to handle home maintenance. On-demand expertise, guaranteed quality.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="text-sm text-slate-500 space-y-2">
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
            <ul className="text-sm text-slate-500 space-y-2">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
          © 2026 PlumbQuick. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

