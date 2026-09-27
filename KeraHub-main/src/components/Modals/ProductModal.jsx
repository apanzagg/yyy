import React from 'react';
import { X, CheckCircle2, ShieldAlert, Sparkles, Sprout, ArrowRight } from 'lucide-react';

export default function ProductModal({ product, onClose, onOrderDemo }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual Banner & Tag */}
        <div className="bg-gradient-to-br from-emerald-50 via-emerald-100/50 to-slate-50 p-6 rounded-2xl border border-emerald-100 mb-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-2xl bg-white border border-emerald-200 shadow-md flex items-center justify-center text-[#2E7D32] flex-shrink-0">
            <Sprout className="w-12 h-12 stroke-[1.5]" />
          </div>
          <div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#2E7D32] text-white uppercase tracking-wider">
              {product.tag}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-2">{product.name}</h3>
            <p className="text-xs text-slate-600 mt-1 font-medium">{product.size}</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xl font-extrabold text-[#2E7D32]">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
              <span className="text-xs text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                Stok: {product.stock} pcs
              </span>
            </div>
          </div>
        </div>

        {/* Composition */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Komposisi Bahan Biomaterial
          </h4>
          <p className="text-xs text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
            {product.composition}
          </p>
        </div>

        {/* Keunggulan vs Rockwool */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#2E7D32]" />
            Keunggulan Utama (Alternatif Rockwool)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.advantages.map((adv, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <span>{adv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Spesifikasi Teknis KeraPad
          </h4>
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500">Densitas Media:</span>
              <span className="font-semibold text-slate-800">{product.specs.density}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500">Tingkat Keasaman (pH):</span>
              <span className="font-semibold text-slate-800">{product.specs.ph}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500">Daya Retensi Air:</span>
              <span className="font-semibold text-slate-800">{product.specs.waterRetention}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500">Ketahanan Pakai:</span>
              <span className="font-semibold text-slate-800">{product.specs.durability}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Pengelolaan Akhir (End-of-life):</span>
              <span className="font-semibold text-emerald-700">{product.specs.recyclability}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onOrderDemo(product)}
            className="w-full py-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-xs font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            Simulasi Permintaan Sampel Uji Petani
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
