import React, { useState } from 'react';
import { SearchCode, Search, CheckCircle2, ShieldCheck, MapPin, Calendar, Truck, Sprout, User, ArrowRight } from 'lucide-react';
import { BATCH_LIST } from '../data/mockData';

export default function TraceabilityPage({ showToast, onOpenCertificateModal }) {
  const [searchInput, setSearchInput] = useState('KP-2026-001');
  const [activeBatch, setActiveBatch] = useState(BATCH_LIST[0]);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = BATCH_LIST.find(b => b.id.toLowerCase() === searchInput.trim().toLowerCase());
    if (found) {
      setActiveBatch(found);
      showToast(`Data batch ${found.id} berhasil ditemukan!`, 'success');
    } else {
      showToast(`Nomor batch "${searchInput}" tidak ditemukan. Menampilkan sampel KP-2026-001`, 'error');
      setActiveBatch(BATCH_LIST[0]);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <SearchCode className="w-6 h-6 text-[#2E7D32]" />
            Traceability & Batch Transparency
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Lacak rekam jejak digital limbah keratin dari salon hingga menjadi KeraPad di tangan petani.
          </p>
        </div>

        <span className="text-xs font-bold text-[#2E7D32] bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-2xl flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
          Sertifikat Provenansi Terverifikasi
        </span>
      </div>

      {/* Search Input Box Card */}
      <div className="kera-card p-6 bg-gradient-to-br from-white via-slate-50 to-emerald-50/40">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto space-y-3 text-center">
          <label className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
            Masukkan Kode Batch KeraPad (Contoh: KP-2026-001, KP-2026-002, KP-2026-018)
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="KP-2026-001"
                className="w-full bg-white border border-slate-300 rounded-2xl pl-11 pr-4 py-3 text-sm font-mono font-bold text-slate-900 focus:outline-none focus:border-[#2E7D32] shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              Lacak Batch
            </button>
          </div>
          <div className="flex justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <span>Sampel Cepat:</span>
            {BATCH_LIST.map(b => (
              <button
                key={b.id}
                type="button"
                onClick={() => {
                  setSearchInput(b.id);
                  setActiveBatch(b);
                  showToast(`Menampilkan rekam jejak ${b.id}`, 'info');
                }}
                className="text-[#2E7D32] font-mono font-bold hover:underline"
              >
                {b.id}
              </button>
            ))}
          </div>
        </form>
      </div>

      {/* Batch Overview & Provenance Result Card */}
      {activeBatch && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Metadata Details Table */}
          <div className="space-y-4">
            <div className="kera-card p-6 border-2 border-emerald-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Nomor Batch</span>
                  <h3 className="text-2xl font-extrabold text-[#2E7D32] font-mono">{activeBatch.id}</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#2E7D32] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">Tanggal Produksi:</span>
                  <span className="font-bold text-slate-800">{activeBatch.prodDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Asal Salon Mitra:</span>
                  <span className="font-bold text-[#2E7D32]">{activeBatch.salons.join(', ')}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Tanggal Penjemputan Limbah:</span>
                  <span className="font-bold text-slate-800">{activeBatch.pickupDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Status Sterilisasi & Sanitasi:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block mt-0.5">
                    {activeBatch.sanitationStatus}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Status Produksi:</span>
                  <span className="font-bold text-slate-800">{activeBatch.prodStatus}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Status Distribusi:</span>
                  <span className="font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded-md inline-block mt-0.5">
                    {activeBatch.distStatus}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Petani Penerima Manfaat:</span>
                  <span className="font-bold text-slate-900">{activeBatch.farmer}</span>
                </div>
              </div>

              {/* Certificate Modal Trigger Button (Saran 3) */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenCertificateModal(activeBatch)}
                  className="w-full py-2.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Cetak / Preview Sertifikat Provenansi
                </button>
              </div>
            </div>

            <div className="kera-card p-5 bg-slate-900 text-white">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">QR Code Verification</span>
              <p className="text-xs text-slate-300 mt-1">
                KeraPad dilengkapi cetakan QR Code pada kemasan untuk verifikasi keaslian dan audit sirkularitas.
              </p>
            </div>
          </div>

          {/* Right Column: Vertical Timeline Provenance Journey */}
          <div className="lg:col-span-2 kera-card p-6">
            <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#2E7D32]" />
              Rekam Jejak Alur Perjalanan Batch (Vertical Timeline)
            </h3>

            <div className="relative pl-6 border-l-2 border-emerald-200 space-y-6">
              
              {/* Step 1: Penampungan Salon */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#2E7D32] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  1
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900">Pengumpulan Limbah Salon</span>
                    <span className="text-[10px] text-slate-400 font-mono">{activeBatch.pickupDate}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Limbah keratin dikumpulkan dari mitra <span className="font-bold text-[#2E7D32]">{activeBatch.salons.join(' & ')}</span> dengan total bobot {activeBatch.hairWeightUsed}.
                  </p>
                </div>
              </div>

              {/* Step 2: Ingestion & Big Data Registration */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#2E7D32] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  2
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900">Registrasi Big Data & QC KeraHub</span>
                    <span className="text-[10px] text-slate-400 font-mono">{activeBatch.pickupDate}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Limbah didata di sistem KeraHub Bengkulu, dilakukan uji pH dasar dan sortasi fisik.
                  </p>
                </div>
              </div>

              {/* Step 3: Sterilisasi & Sanitasi Termal */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#2E7D32] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  3
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900">Sanitasi Steril Autoclave 121°C</span>
                    <span className="text-[10px] text-emerald-700 font-bold">LULUS STERILISASI</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Proses pemanasan 121°C selama 30 menit. Bebas patogen & siap diproses menjadi biomaterial.
                  </p>
                </div>
              </div>

              {/* Step 4: Pencetakan & Pengeringan KeraPad */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#2E7D32] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  4
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900">Pencetakan Biomaterial</span>
                    <span className="text-[10px] text-slate-400 font-mono">{activeBatch.prodDate}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Pencampuran perekat biomaterial alami & dehidrasi oven menghasilkan {activeBatch.unitsProduced} unit KeraPad.
                  </p>
                </div>
              </div>

              {/* Step 5: Distribusi Petani */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  5
                </div>
                <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#2E7D32]">Penyaluran ke Petani Hidroponik</span>
                    <span className="text-[10px] text-emerald-800 font-bold">{activeBatch.distStatus}</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    Penerima Manfaat: <span className="font-bold text-slate-900">{activeBatch.farmer}</span>.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}
