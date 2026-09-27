import React, { useState } from 'react';
import { MapPin, Layers, Store, TrendingUp, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { SALON_LIST } from '../data/mockData';

export default function SupplyMappingPage({ showToast }) {
  const [selectedZone, setSelectedZone] = useState('All');

  const zones = [
    { id: 'All', name: 'Semua Zona', count: 20 },
    { id: 'Zona 1', name: 'Zona 1 - Bengkulu Kota (Ratu Samban & Suprapto)', count: 8 },
    { id: 'Zona 2', name: 'Zona 2 - Gading Cempaka & Lingkar Timur', count: 7 },
    { id: 'Zona 3', name: 'Zona 3 - Muara Bangkahulu', count: 5 }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#2E7D32]" />
            Supply Mapping Spasial Limbah
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Visualisasi pemetaan spasial sebaran mitra salon dan ketersediaan pasokan bahan baku keratin.
          </p>
        </div>

        <span className="text-xs font-bold text-[#2E7D32] bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-2xl flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#2E7D32]" />
          Visualisasi Pemetaan Wilayah
        </span>
      </div>

      {/* Top 4 Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="kera-card p-5">
          <span className="text-[11px] text-slate-400 font-semibold">Total Mitra Salon</span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">20 Salon</h3>
          <span className="text-[10px] text-emerald-700 font-medium">Tersebar di Kota Bengkulu</span>
        </div>
        <div className="kera-card p-5">
          <span className="text-[11px] text-slate-400 font-semibold">Zona Aktif</span>
          <h3 className="text-2xl font-extrabold text-[#2E7D32] mt-1">3 Kluster</h3>
          <span className="text-[10px] text-slate-500 font-medium">Cakupan Rute Logistik</span>
        </div>
        <div className="kera-card p-5">
          <span className="text-[11px] text-slate-400 font-semibold">Estimasi Pasokan</span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">30 kg/bulan</h3>
          <span className="text-[10px] text-emerald-700 font-medium">Keratin Murni</span>
        </div>
        <div className="kera-card p-5">
          <span className="text-[11px] text-slate-400 font-semibold">Prediksi Mingguan</span>
          <h3 className="text-2xl font-extrabold text-emerald-700 mt-1">35 kg</h3>
          <span className="text-[10px] text-slate-500 font-medium">Target Ekspansi</span>
        </div>
      </div>

      {/* Main Map Box & Zone Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Map Visualization Canvas Mockup */}
        <div className="lg:col-span-2 kera-card p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2E7D32]" />
              Peta Sebaran Mitra & Heatmap Kepadatan Limbah
            </h3>
            <span className="text-xs text-slate-400 font-mono">Bengkulu Coordinates: -3.7928, 102.2608</span>
          </div>

          {/* Interactive Map Visual Container */}
          <div className="h-96 bg-slate-950 rounded-3xl relative overflow-hidden flex items-center justify-center p-6 text-white border border-slate-800">
            {/* Map styling grid & background SVG */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            {/* Heatmap Glow Circles */}
            <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>

            {/* Indonesia & Bengkulu Coast Outline Mockup */}
            <svg className="w-full h-full absolute inset-0 opacity-30" viewBox="0 0 600 400">
              <path d="M 50,80 Q 150,120 250,220 T 550,350" fill="none" stroke="#64748B" strokeWidth="2" />
              <path d="M 120,100 Q 200,180 300,280" fill="none" stroke="#334155" strokeWidth="6" />
            </svg>

            {/* Interactive Salon Location Markers */}
            {SALON_LIST.map((sln, idx) => (
              <div 
                key={sln.id}
                onClick={() => showToast(`Lokasi ${sln.name}: ${sln.address}`, 'info')}
                className={`absolute cursor-pointer group hover:scale-125 transition-transform`}
                style={{
                  top: `${25 + (idx * 12) % 60}%`,
                  left: `${20 + (idx * 15) % 65}%`
                }}
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-emerald-400 opacity-60"></span>
                  <div className="w-7 h-7 rounded-full bg-[#2E7D32] border-2 border-white flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Marker Hover Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-[10px] p-2 rounded-xl border border-slate-700 whitespace-nowrap shadow-xl z-20">
                  <p className="font-bold text-emerald-400">{sln.name}</p>
                  <p className="text-slate-300">{sln.wasteVolume}</p>
                </div>
              </div>
            ))}

            {/* KeraHub Central Facility Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2E7D32] border-2 border-emerald-300 p-3 rounded-2xl shadow-2xl text-center z-10">
              <span className="text-[10px] uppercase font-bold text-emerald-200 block">Hub Utama</span>
              <p className="text-xs font-bold text-white">Fasilitas KeraHub Bengkulu</p>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-[10px] space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Salon Barbershop (Mitra Aktif)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]"></span>
                <span>Fasilitas Pengolahan KeraHub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Zone Selector Card */}
        <div className="space-y-4">
          <div className="kera-card p-5">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-[#2E7D32]" />
              Filter Kluster Zona
            </h3>

            <div className="space-y-2">
              {zones.map((z) => (
                <button
                  key={z.id}
                  onClick={() => {
                    setSelectedZone(z.id);
                    showToast(`Menampilkan sebaran ${z.name}`, 'info');
                  }}
                  className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition-all border ${
                    selectedZone === z.id
                      ? 'bg-emerald-50 text-[#2E7D32] border-emerald-200 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{z.name}</span>
                    <span className="bg-white px-2 py-0.5 rounded-md text-[10px] font-bold border border-slate-200">
                      {z.count} Salon
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="kera-card p-5">
            <h4 className="text-xs font-bold text-slate-900 mb-2">Informasi Potensi Wilayah</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Kepadatan salon tertinggi berada di Zona 1 (Ratu Samban). Estimasi akumulasi limbah keratin dapat memenuhi target 30 kg/bulan untuk 18 batch KeraPad.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
