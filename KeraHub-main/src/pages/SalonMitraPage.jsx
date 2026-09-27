import React, { useState } from 'react';
import { Search, Filter, Store, Phone, MapPin, Eye, Calendar, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { SALON_LIST } from '../data/mockData';

export default function SalonMitraPage({ onOpenSalonModal, showToast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredSalons = SALON_LIST.filter(salon => {
    const matchesSearch = salon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          salon.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || salon.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
            Kelola data 20 mitra salon & barbershop penyedia limbah keratin di Kota Bengkulu.
          </p>
        </div>

        <button
          onClick={() => showToast('Formulir pendaftaran salon baru siap digunakan', 'info')}
          className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-4 py-2.5 rounded-2xl text-xs font-bold shadow-md transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Salon Mitra
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="kera-card p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
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

        {/* Status Dropdown */}
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
                  
                  {/* Nama Salon */}
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

                  {/* Alamat */}
                  <td className="py-4 px-6 text-slate-600 max-w-xs truncate">
                    {salon.address}
                  </td>

                  {/* Volume Limbah */}
                  <td className="py-4 px-6 font-bold text-[#2E7D32]">
                    {salon.wasteVolume}
                  </td>

                  {/* Status Badge */}
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

                  {/* Tanggal Pickup */}
                  <td className="py-4 px-6 text-slate-500 font-medium">
                    {salon.nextPickup}
                  </td>

                  {/* Button Detail */}
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
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
