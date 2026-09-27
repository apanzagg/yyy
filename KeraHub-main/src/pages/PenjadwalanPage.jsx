import React, { useState } from 'react';
import { Truck, Calendar, MapPin, Clock, CheckCircle, Navigation, UserCheck, Plus, X, Save } from 'lucide-react';
import { TODAY_PICKUPS, SALON_LIST } from '../data/mockData';

const COURIERS = ['Budi Santoso', 'Agus Pratama', 'Rizky Ramadhan'];
const ROUTES = [
  'Rute 1 - Kampus Unib & Suprapto',
  'Rute 2 - Lingkar Timur Hub',
  'Rute 3 - Gading Cempaka',
  'Rute 4 - Ratu Samban',
];

const EMPTY_FORM = {
  salon: '',
  date: '',
  time: '',
  courier: '',
  route: '',
  weightEst: '',
};

export default function PenjadwalanPage({ showToast }) {
  const [selectedDate, setSelectedDate] = useState('2026-08-01');
  const [pickups, setPickups] = useState(TODAY_PICKUPS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const handleOpenModal = () => {
    setForm({ ...EMPTY_FORM, date: selectedDate });
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
    if (!form.salon) e.salon = 'Pilih salon mitra';
    if (!form.date) e.date = 'Pilih tanggal pickup';
    if (!form.time) e.time = 'Tentukan jam pickup';
    if (!form.courier) e.courier = 'Pilih kurir';
    if (!form.route) e.route = 'Pilih rute';
    if (!form.weightEst || isNaN(form.weightEst) || Number(form.weightEst) <= 0)
      e.weightEst = 'Masukkan estimasi berat (kg) yang valid';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    const newPickup = {
      id: `PKP-${Date.now()}`,
      salon: form.salon,
      time: `${form.time} WIB`,
      courier: form.courier,
      status: 'Terjadwal',
      route: form.route,
      weightEst: `${form.weightEst} kg`,
    };

    setPickups((prev) => [newPickup, ...prev]);

    if (form.date !== selectedDate) {
      setSelectedDate(form.date);
    }

    showToast(`Jadwal pickup untuk ${form.salon} berhasil dibuat!`, 'success');
    handleCloseModal();
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Truck className="w-6 h-6 text-[#2E7D32]" />
            Penjadwalan Pickup Limbah
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Atur dan pantau rute penjemputan limbah keratin oleh armada kurir KeraHub.
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-4 py-2.5 rounded-2xl text-xs font-bold shadow-md transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Buat Jadwal Baru
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column: Interactive Calendar & Summary */}
        <div className="space-y-4">
          <div className="kera-card p-5">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[#2E7D32]" />
              Kalender Operasional Kurir
            </h3>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  showToast(`Menampilkan jadwal untuk tanggal ${e.target.value}`, 'info');
                }}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#2E7D32]"
              />
              <p className="text-[11px] text-slate-500 mt-3">
                Terjadwal: <span className="font-bold text-[#2E7D32]">{pickups.length} Sesi Penjemputan</span>
              </p>
            </div>
          </div>

          {/* Route Info Box */}
          <div className="kera-card p-5 bg-gradient-to-br from-emerald-50 to-white">
            <h4 className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider mb-2">
              Status Armada Kurir
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-600">Kurir Aktif:</span>
                <span className="font-bold text-slate-900">3 Orang</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Rute Hari Ini:</span>
                <span className="font-bold text-slate-900">3 Rute Utama</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Estimasi Limbah:</span>
                <span className="font-bold text-[#2E7D32]">13.3 kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Pickup Table Today */}
        <div className="lg:col-span-2 space-y-6">
          <div className="kera-card p-6">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              Daftar Pickup ({selectedDate})
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Salon</th>
                    <th className="py-3 px-4">Jam</th>
                    <th className="py-3 px-4">Kurir</th>
                    <th className="py-3 px-4">Rute Optimasi</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {pickups.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{item.salon}</td>
                      <td className="py-3.5 px-4 text-slate-500 font-mono">{item.time}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.courier}</td>
                      <td className="py-3.5 px-4 text-slate-500">{item.route}</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          item.status === 'Selesai'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.status === 'Dalam Perjalanan'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Route Mockup Map */}
          <div className="kera-card p-6">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Navigation className="w-4 h-4 text-[#2E7D32]" />
              Mockup Visualisasi Rute Penjemputan Kota Bengkulu
            </h3>

            <div className="h-64 bg-slate-900 rounded-2xl relative overflow-hidden flex items-center justify-center p-6 text-white border border-slate-800">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#81C784_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 200">
                <path d="M 50,150 Q 150,50 250,120 T 450,70" fill="none" stroke="#81C784" strokeWidth="3" strokeDasharray="6 6" />
                <circle cx="50" cy="150" r="8" fill="#2E7D32" />
                <circle cx="150" cy="80" r="8" fill="#10B981" />
                <circle cx="250" cy="120" r="8" fill="#10B981" />
                <circle cx="450" cy="70" r="8" fill="#81C784" />
              </svg>

              <div className="relative z-10 w-full flex justify-between items-center text-xs">
                <div className="bg-slate-800/90 backdrop-blur-md p-3 rounded-xl border border-slate-700">
                  <p className="font-bold text-emerald-400">Node 01: Unib</p>
                  <p className="text-[10px] text-slate-400">BarberStudio 88</p>
                </div>
                <div className="bg-slate-800/90 backdrop-blur-md p-3 rounded-xl border border-slate-700">
                  <p className="font-bold text-emerald-400">Node 02: Suprapto</p>
                  <p className="text-[10px] text-slate-400">Glow & Beauty</p>
                </div>
                <div className="bg-emerald-600 text-white p-3 rounded-xl shadow-lg">
                  <p className="font-bold">KeraHub Central</p>
                  <p className="text-[10px] text-emerald-100">Fasilitas Pengolahan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal Tambah Jadwal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 p-6 sm:p-8 relative">

            {/* Close */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Truck className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">Buat Jadwal Pickup Baru</h2>
                <p className="text-[11px] text-slate-400">Isi detail penjemputan limbah keratin</p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">

              {/* Salon */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Salon Mitra *</label>
                <select
                  value={form.salon}
                  onChange={(e) => handleChange('salon', e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                    errors.salon ? 'border-red-400 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">-- Pilih Salon --</option>
                  {SALON_LIST.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
                {errors.salon && <p className="text-[10px] text-red-500 mt-1">{errors.salon}</p>}
              </div>

              {/* Tanggal & Jam */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">Tanggal Pickup *</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                      errors.date ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.date && <p className="text-[10px] text-red-500 mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">Jam Pickup *</label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                      errors.time ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.time && <p className="text-[10px] text-red-500 mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* Kurir */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Kurir *</label>
                <select
                  value={form.courier}
                  onChange={(e) => handleChange('courier', e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                    errors.courier ? 'border-red-400 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">-- Pilih Kurir --</option>
                  {COURIERS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.courier && <p className="text-[10px] text-red-500 mt-1">{errors.courier}</p>}
              </div>

              {/* Rute */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Rute Optimasi *</label>
                <select
                  value={form.route}
                  onChange={(e) => handleChange('route', e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                    errors.route ? 'border-red-400 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">-- Pilih Rute --</option>
                  {ROUTES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                {errors.route && <p className="text-[10px] text-red-500 mt-1">{errors.route}</p>}
              </div>

              {/* Estimasi Berat */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Estimasi Berat Limbah (kg) *</label>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  placeholder="Contoh: 3.5"
                  value={form.weightEst}
                  onChange={(e) => handleChange('weightEst', e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#2E7D32] bg-white transition-colors ${
                    errors.weightEst ? 'border-red-400 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {errors.weightEst && <p className="text-[10px] text-red-500 mt-1">{errors.weightEst}</p>}
              </div>
            </div>

            {/* Actions */}
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
                Simpan Jadwal
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
