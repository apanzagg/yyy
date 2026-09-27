import React from 'react';
import { Leaf, Heart, ArrowUpRight, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                KERALOOP
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ekosistem Ekonomi Digital Sirkular KeraPad Berbasis Big Data Limbah Keratin Rambut untuk Pertanian Perkotaan Berkelanjutan.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Prototipe Platform Digital Sirkular</span>
            </div>
          </div>

          {/* Col 2: Tentang & Navigasi */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigasi Utama
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('landing')} className="hover:text-emerald-400 transition-colors">
                  Beranda Landing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard', 'home')} className="hover:text-emerald-400 transition-colors">
                  Dashboard Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard', 'salon')} className="hover:text-emerald-400 transition-colors">
                  Salon Mitra
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard', 'pengolahan')} className="hover:text-emerald-400 transition-colors">
                  Alur Pengolahan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard', 'traceability')} className="hover:text-emerald-400 transition-colors">
                  Traceability Batch
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Proposal & SDGs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              SDGs & Circularity
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                SDG 8: Decent Work & Economic Growth
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                SDG 11: Sustainable Cities & Communities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                SDG 12: Responsible Consumption
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                SDG 13: Climate Action
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                SDG 17: Partnerships for the Goals
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Informasi */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kontak Penelitian
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>KeraHub Central Node, Bengkulu, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>keraloop.research@instinct.ac.id</span>
              </div>
              <div className="pt-2">
                <span className="inline-block bg-slate-800 border border-slate-700 text-emerald-300 px-3 py-1.5 rounded-xl text-[11px] font-semibold">
                  Riset KERALOOP Digital Node 01
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 KERALOOP Project. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Didesain dengan presisi untuk Ekonomi Sirkular Berkelanjutan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
