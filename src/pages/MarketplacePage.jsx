import React, { useState } from 'react';
import { ShoppingBag, Sprout, Eye, CheckCircle2, ShieldCheck, Sparkles, X, Save, User, MapPin, Phone } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

const EMPTY_FORM = {
  farmerName: '',
  farmAddress: '',
  phone: '',
  productId: '',
  quantity: '',
};

export default function MarketplacePage({ onOpenProductModal, showToast }) {
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
    setIsSampleModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSampleModalOpen(false);
    setSubmitted(false);
  };

  const validate = () => {
    const e = {};
    if (!form.farmerName.trim()) e.farmerName = 'Nama kelompok tani / pemohon wajib diisi';
    if (!form.farmAddress.trim()) e.farmAddress = 'Alamat kebun / lokasi wajib diisi';
    if (!form.phone.trim()) e.phone = 'Nomor telepon wajib diisi';
    if (!form.productId) e.productId = 'Pilih produk KeraPad yang diminta';
    if (!form.quantity || isNaN(form.quantity) || Number(form.quantity) < 1)
      e.quantity = 'Jumlah unit minimal 1';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const selectedProduct = PRODUCTS.find(p => p.id === form.productId);

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
              <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-slate-50 rounded-2xl h-48 border border-emerald-100 flex items-center justify-center p-6 relative overflow-hidden mb-4 group-hover:border-emerald-300 transition-colors">
                <span className="absolute top-3 left-3 bg-[#2E7D32] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {prod.tag}
                </span>
                <div className="w-24 h-24 rounded-2xl bg-white border border-emerald-200 shadow-md flex items-center justify-center text-[#2E7D32] group-hover:scale-110 transition-transform">
                  <Sprout className="w-12 h-12 stroke-[1.5]" />
                </div>
              </div>

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
          onClick={handleOpenModal}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-2xl text-xs font-bold shadow-md transition-all flex-shrink-0"
        >
          Minta Sampel Uji Coba
        </button>
      </div>

      {/* ── Modal Permohonan Sampel ── */}
      {isSampleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 p-6 sm:p-8 relative">

            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900">Permohonan Sampel KeraPad</h2>
                    <p className="text-[11px] text-slate-400">Gratis untuk kelompok tani hidroponik mitra KeraHub</p>
                  </div>
                </div>

                <div className="space-y-4">

                  {/* Nama Kelompok Tani */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Nama Kelompok Tani / Pemohon *</label>
                    <input
                      type="text"
                      placeholder="Contoh: Kelompok Tani Hijau Makmur"
                      value={form.farmerName}
                      onChange={(e) => handleChange('farmerName', e.target.value)}
                      className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                        errors.farmerName ? 'border-red-400 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.farmerName && <p className="text-[10px] text-red-500 mt-1">{errors.farmerName}</p>}
                  </div>

                  {/* Alamat Kebun */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Alamat Kebun / Lokasi Budidaya *</label>
                    <input
                      type="text"
                      placeholder="Contoh: Desa Padang Serai, Kota Bengkulu"
                      value={form.farmAddress}
                      onChange={(e) => handleChange('farmAddress', e.target.value)}
                      className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                        errors.farmAddress ? 'border-red-400 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.farmAddress && <p className="text-[10px] text-red-500 mt-1">{errors.farmAddress}</p>}
                  </div>

                  {/* No. Telepon */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Nomor Telepon / WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="Contoh: 0812-3456-7890"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Produk & Jumlah */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">Produk KeraPad *</label>
                      <select
                        value={form.productId}
                        onChange={(e) => handleChange('productId', e.target.value)}
                        className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                          errors.productId ? 'border-red-400 bg-red-50' : 'border-slate-300'
                        }`}
                      >
                        <option value="">-- Pilih Produk --</option>
                        {PRODUCTS.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                      {errors.productId && <p className="text-[10px] text-red-500 mt-1">{errors.productId}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">Jumlah Unit *</label>
                      <input
                        type="number"
                        min="1"
                        max={selectedProduct?.stock || 99}
                        placeholder="Contoh: 5"
                        value={form.quantity}
                        onChange={(e) => handleChange('quantity', e.target.value)}
                        className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                          errors.quantity ? 'border-red-400 bg-red-50' : 'border-slate-300'
                        }`}
                      />
                      {errors.quantity && <p className="text-[10px] text-red-500 mt-1">{errors.quantity}</p>}
                    </div>
                  </div>

                  {/* Summary preview */}
                  {selectedProduct && form.quantity > 0 && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-xs text-emerald-900">
                      <p className="font-bold">Ringkasan Permohonan:</p>
                      <p className="mt-1">{form.quantity} unit <span className="font-semibold">{selectedProduct.name}</span> ({selectedProduct.size})</p>
                      <p className="text-emerald-700 font-bold">Gratis untuk uji coba perdana ✓</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 py-2.5 rounded-2xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 py-2.5 rounded-2xl text-xs font-bold bg-[#2E7D32] hover:bg-[#1B5E20] text-white transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Kirim Permohonan
                  </button>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#2E7D32]" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Permohonan Berhasil Dikirim!</h3>
                  <p className="text-xs text-slate-500 mt-1">Tim KeraHub akan menghubungi Anda dalam 1–2 hari kerja.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-left space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Pemohon:</span>
                    <span className="font-bold text-slate-800">{form.farmerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Produk:</span>
                    <span className="font-bold text-slate-800">{selectedProduct?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Jumlah:</span>
                    <span className="font-bold text-[#2E7D32]">{form.quantity} unit (gratis)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Kontak:</span>
                    <span className="font-bold text-slate-800">{form.phone}</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-full py-2.5 rounded-2xl text-xs font-bold bg-[#2E7D32] text-white hover:bg-[#1B5E20] transition-all shadow-md"
                >
                  Tutup
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
