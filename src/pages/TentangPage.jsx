import React from 'react';
import { Info, Target, Compass, Award, ShieldCheck, Leaf, Heart, Users } from 'lucide-react';
import { SDGS_LIST } from '../data/mockData';

export default function TentangPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Overview Banner */}
      <div className="kera-card p-8 bg-gradient-to-br from-white via-[#F4FBF7] to-emerald-50 border border-emerald-200">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#2E7D32] px-3 py-1 rounded-full text-xs font-bold mb-4">
          <Info className="w-4 h-4" />
          Tentang Proyek Riset KERALOOP
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          KERALOOP: Ekosistem Ekonomi Digital Sirkular Limbah Keratin Rambut
        </h1>

        <p className="text-sm text-slate-700 leading-relaxed bg-white/80 p-5 rounded-2xl border border-emerald-100 shadow-sm font-medium">
          KERALOOP merupakan konsep ekosistem ekonomi digital sirkular yang menghubungkan salon, penyedia logistik, fasilitas pengolahan, dan petani hidroponik melalui platform KeraHub untuk mengubah limbah rambut menjadi biomaterial KeraPad sebagai alternatif media tanam yang lebih berkelanjutan.
        </p>
      </div>

      {/* Visi & Misi Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="kera-card p-6 border-l-4 border-l-[#2E7D32]">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2E7D32] flex items-center justify-center mb-4">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Visi KERALOOP</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mewujudkan kemandirian media tanam hidroponik perkotaan berbasis biomaterial sirkular terdaur ulang yang beremisi rendah, efisien, dan berdampak nyata bagi pertumbuhan ekonomi lokal.
          </p>
        </div>

        <div className="kera-card p-6 border-l-4 border-l-emerald-500">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Misi KERALOOP</h3>
          <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
            <li>Membangun platform digital terintegrasi untuk pendataan & pelacakan limbah keratin.</li>
            <li>Memproduksi KeraPad tersterilisasi berkualitas tinggi sebagai substitusi rockwool.</li>
            <li>Mendorong pemberdayaan ekonomi sirkular antara sektor salon, logistik, dan kelompok tani.</li>
          </ul>
        </div>

      </div>

      {/* Target SDGs Section */}
      <div className="kera-card p-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
            Komitmen Pembangunan Berkelanjutan
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Target SDGs (Sustainable Development Goals)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Proyek KERALOOP secara langsung mendukung 5 poin tujuan pembangunan berkelanjutan PBB.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SDGS_LIST.map((sdg, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/50 transition-colors">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#2E7D32] text-white inline-block mb-3">
                {sdg.code}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">{sdg.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{sdg.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
