import React from 'react';
import { ShoppingBag, Sprout, Eye, CheckCircle2, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

export default function MarketplacePage({ onOpenProductModal, showToast }) {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-[#2E7D32]" />
            Katalog Marketplace KeraPad
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Media tanam ramah lingkungan berbahan dasar serat keratin rambut salon tersterilisasi.
          </p>
        </div>

        <span className="text-xs font-bold text-[#2E7D32] bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-2xl flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
          100% Biodegradable & Compostable
        </span>
      </div>

      {/* Product Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((prod) => (
          <div key={prod.id} className="kera-card p-6 flex flex-col justify-between group">
            <div>
              {/* Product Mockup SVG Visual Box */}
              <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-slate-50 rounded-2xl h-48 border border-emerald-100 flex items-center justify-center p-6 relative overflow-hidden mb-4 group-hover:border-emerald-300 transition-colors">
                <span className="absolute top-3 left-3 bg-[#2E7D32] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {prod.tag}
                </span>

                <div className="w-24 h-24 rounded-2xl bg-white border border-emerald-200 shadow-md flex items-center justify-center text-[#2E7D32] group-hover:scale-110 transition-transform">
                  <Sprout className="w-12 h-12 stroke-[1.5]" />
                </div>
              </div>

              {/* Title & Specs */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#2E7D32] transition-colors">
                  {prod.name}
                </h3>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  {prod.status}
                </span>
              </div>

              <p className="text-xs text-slate-500 font-medium mb-3">{prod.size}</p>
              <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                {prod.composition}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block">Harga Satuan</span>
                  <span className="text-xl font-extrabold text-[#2E7D32]">
                    Rp {prod.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-semibold block">Stok KeraHub</span>
                  <span className="text-xs font-bold text-slate-800">{prod.stock} pcs</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenProductModal(prod)}
                className="w-full py-2.5 bg-slate-100 hover:bg-[#2E7D32] text-slate-700 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Eye className="w-4 h-4" />
                Lihat Detail Spesifikasi
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Information Banner */}
      <div className="kera-card p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Program Penyaluran Uji Coba KeraPad untuk Petani Bengkulu
          </h4>
          <p className="text-xs text-slate-300 mt-1">
            Kelompok tani hidroponik mitra KeraHub berhak menerima sampel KeraPad gratis untuk pengujian masa tanam pertama.
          </p>
        </div>
        <button
          onClick={() => showToast('Permohonan sampel uji petani telah terdaftar di database', 'success')}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-2xl text-xs font-bold shadow-md transition-all flex-shrink-0"
        >
          Minta Sampel Uji Coba
        </button>
      </div>

    </div>
  );
}
