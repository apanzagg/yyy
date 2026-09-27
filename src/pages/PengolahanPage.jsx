import React, { useState } from 'react';
import { Cpu, CheckCircle2, Clock, PlayCircle, AlertCircle, ChevronRight, Sparkles, Filter } from 'lucide-react';
import { BATCH_LIST } from '../data/mockData';

export default function PengolahanPage({ showToast }) {
  const [selectedBatchId, setSelectedBatchId] = useState('KP-2026-001');

  const selectedBatch = BATCH_LIST.find(b => b.id === selectedBatchId) || BATCH_LIST[0];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-[#2E7D32]" />
            Pengolahan Biomaterial KeraPad
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Pantau 7 tahapan pengolahan limbah keratin rambut di Fasilitas KeraHub.
          </p>
        </div>

        {/* Batch Selector Tabs */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
          {BATCH_LIST.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedBatchId(b.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedBatchId === b.id
                  ? 'bg-[#2E7D32] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {b.id}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Batch Details Overview Header Card */}
      <div className="kera-card p-6 bg-gradient-to-r from-[#2E7D32] via-[#1B5E20] to-emerald-950 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase bg-white/20 text-white px-2.5 py-0.5 rounded-full font-bold">
                Batch ID: {selectedBatch.id}
              </span>
              <span className="text-xs text-emerald-200">
                Tanggal Produksi: {selectedBatch.prodDate}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-white mt-2">
              Status Operasional Produksi: {selectedBatch.prodStatus}
            </h2>
            <p className="text-xs text-emerald-100/90 mt-1">
              Sumber Limbah: {selectedBatch.salons.join(', ')} ({selectedBatch.hairWeightUsed})
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-right">
            <span className="text-[10px] text-emerald-200 font-semibold block">Sertifikasi Sterilisasi</span>
            <p className="text-xs font-bold text-white mt-0.5">{selectedBatch.sanitationStatus}</p>
            <span className="text-[11px] text-emerald-300 font-bold block mt-1">Hasil: {selectedBatch.unitsProduced} Unit KeraPad</span>
          </div>
        </div>
      </div>

      {/* Pipeline Stages Horizontal Flow */}
      <div className="kera-card p-6">
        <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#2E7D32]" />
          Alur 7 Tahapan Pengolahan KeraPad
        </h3>

        {/* 7 Stages Timeline Horizontal Display */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          {selectedBatch.stages.map((stg, idx) => {
            const isCompleted = stg.status === 'Completed';
            const isProcessing = stg.status === 'Processing';
            const isWaiting = stg.status === 'Waiting';

            return (
              <div 
                key={idx}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-emerald-50/70 border-emerald-200 text-[#2E7D32]'
                    : isProcessing
                    ? 'bg-blue-50/80 border-blue-300 text-blue-800 ring-2 ring-blue-400/30'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span>Tahap 0{idx+1}</span>
                    {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    {isProcessing && <PlayCircle className="w-4 h-4 text-blue-600 animate-pulse" />}
                    {isWaiting && <Clock className="w-4 h-4 text-slate-400" />}
                  </div>

                  <h4 className="text-xs font-extrabold text-slate-900">{stg.name}</h4>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">{stg.note}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                    isCompleted
                      ? 'bg-emerald-100 text-emerald-800'
                      : isProcessing
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {stg.status}
                  </span>
                  <p className="text-[9px] text-slate-400 font-mono mt-1">{stg.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stage Explanations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="kera-card p-6">
          <h4 className="text-sm font-bold text-slate-900 mb-3">Prosedur Sanitasi & Sterilisasi Autoclave</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Untuk menjamin keamanan mikroba pada media tanam hidroponik, limbah keratin rambut melalui pemanasan termal bertekanan tinggi pada suhu 121°C selama 30 menit. Proses ini membunuh 100% patogen, bakteri, maupun jamur sebelum masuk ke tahap pencampuran perekat organik.
          </p>
        </div>
        <div className="kera-card p-6">
          <h4 className="text-sm font-bold text-slate-900 mb-3">Formulasi Bio-Binder & Mold Pressing</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Serat keratin yang telah disterilisasi dicampur dengan bio-binder organik ramah lingkungan berbasis pati singkong alami, kemudian dicetak menggunakan pad presisi untuk menghasilkan pori-pori retensi air presisi tinggi yang kompatibel dengan netpot hidroponik.
          </p>
        </div>
      </div>

    </div>
  );
}
