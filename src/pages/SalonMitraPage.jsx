import React, { useState } from 'react';
import { Search, Filter, Store, Phone, MapPin, Eye, Calendar, Plus, CheckCircle, Clock, AlertCircle, X, Save } from 'lucide-react';
import { SALON_LIST } from '../data/mockData';

const EMPTY_FORM = {
  name: '',
  address: '',
  type: '',
  contact: '',
  wasteVolume: '',
};

export default function SalonMitraPage({ onOpenSalonModal, showToast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [salons, setSalons] = useState(SALON_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const filteredSalons = salons.filter(salon => {
    const matchesSearch = salon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          salon.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || salon.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenModal = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Nama salon wajib diisi';
    if (!form.address.trim()) e.address = 'Alamat wajib diisi';
    if (!form.type) e.type = 'Pilih jenis tempat usaha';
    if (!form.contact.trim()) e.contact = 'Kontak person wajib diisi';
    if (!form.wasteVolume || isNaN(form.wasteVolume) || Number(form.wasteVolume) <= 0)
      e.wasteVolume = 'Masukkan estimasi volume limbah yang valid (kg/minggu)';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    const newSalon = {
      id: `SLN-${String(salons.length + 1).padStart(3, '0')}`,
      name: form.name.trim(),
      address: form.address.trim(),
      type: form.type,
      contact: form.contact.trim(),
      wasteVolume: `${form.wasteVolume} kg/minggu`,
      totalWasteContributed: '0 kg',
      status: 'Menunggu',
      lastPickup: '-',
      nextPickup: '-',
      location: { lat: -3.7928, lng: 102.2608, zone: 'Bengkulu Kota - Zona 1' },
      history: [],
    };

    setSalons(prev => [newSalon, ...prev]);
    showToast(`Salon mitra "${form.name}" berhasil didaftarkan!`, 'success');
    handleCloseModal();
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="space-y-6">

      {/* Header & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Store className="w-6 h-6 text-[#2E7D32]" />
            Daftar Salon Mitra KeraHub
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Kelola data {salons.length} mitra salon & barbershop penyedia limbah keratin di Kota Bengkulu.
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-4 py-2.5 rounded-2xl text-xs font-bold shadow-md transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Salon Mitra
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="kera-card p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Cari nama salon atau alamat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-[#2E7D32] focus:bg-white transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-500 font-medium">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-2xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#2E7D32]"
          >
            <option value="All">Semua Status</option>
            <option value="Sudah Diambil">Sudah Diambil</option>
            <option value="Terjadwal">Terjadwal</option>
            <option value="Menunggu">Menunggu</option>
          </select>
        </div>
      </div>

      {/* Salon Table */}
      <div className="kera-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Nama Salon</th>
                <th className="py-3.5 px-6">Alamat</th>
                <th className="py-3.5 px-6">Volume Estimasi</th>
                <th className="py-3.5 px-6">Status Pickup</th>
                <th className="py-3.5 px-6">Tanggal Pickup</th>
                <th className="py-3.5 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredSalons.map((salon) => (
                <tr key={salon.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#2E7D32] font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {salon.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">{salon.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{salon.type}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 max-w-xs truncate">{salon.address}</td>
                  <td className="py-4 px-6 font-bold text-[#2E7D32]">{salon.wasteVolume}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                      salon.status === 'Sudah Diambil'
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                        : salon.status === 'Terjadwal'
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'bg-amber-100 text-amber-700 border border-amber-200'
                    }`}>
                      {salon.status === 'Sudah Diambil' && <CheckCircle className="w-3.5 h-3.5" />}
                      {salon.status === 'Terjadwal' && <Clock className="w-3.5 h-3.5" />}
                      {salon.status === 'Menunggu' && <AlertCircle className="w-3.5 h-3.5" />}
                      {salon.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 font-medium">{salon.nextPickup}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onOpenSalonModal(salon)}
                      className="inline-flex items-center gap-1 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#2E7D32] px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
              {filteredSalons.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-xs text-slate-400">
                    Tidak ada salon yang sesuai filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Modal Tambah Salon ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 p-6 sm:p-8 relative">

            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Store className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">Daftarkan Salon Mitra Baru</h2>
                <p className="text-[11px] text-slate-400">Isi data salon/barbershop penyedia limbah keratin</p>
              </div>
            </div>

            <div className="space-y-4">

              {/* Nama Salon */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Nama Salon / Barbershop *</label>
                <input
                  type="text"
                  placeholder="Contoh: Glamour Hair Studio"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Jenis */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Jenis Tempat Usaha *</label>
                <select
                  value={form.type}
                  onChange={(e) => handleChange('type', e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                    errors.type ? 'border-red-400 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">-- Pilih Jenis --</option>
                  <option value="Barbershop">Barbershop</option>
                  <option value="Beauty Salon">Beauty Salon</option>
                  <option value="Salon & Spa">Salon & Spa</option>
                </select>
                {errors.type && <p className="text-[10px] text-red-500 mt-1">{errors.type}</p>}
              </div>

              {/* Alamat */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Alamat Lengkap *</label>
                <input
                  type="text"
                  placeholder="Contoh: Jl. Sudirman No. 55, Kota Bengkulu"
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                    errors.address ? 'border-red-400 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {errors.address && <p className="text-[10px] text-red-500 mt-1">{errors.address}</p>}
              </div>

              {/* Kontak & Volume (2 col) */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">Kontak Person *</label>
                  <input
                    type="text"
                    placeholder="Nama & No. HP"
                    value={form.contact}
                    onChange={(e) => handleChange('contact', e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                      errors.contact ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.contact && <p className="text-[10px] text-red-500 mt-1">{errors.contact}</p>}
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">Estimasi Limbah (kg/minggu) *</label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="Contoh: 2.5"
                    value={form.wasteVolume}
                    onChange={(e) => handleChange('wasteVolume', e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                      errors.wasteVolume ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.wasteVolume && <p className="text-[10px] text-red-500 mt-1">{errors.wasteVolume}</p>}
                </div>
              </div>
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
                Daftarkan Salon
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
