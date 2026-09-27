import React from 'react';
import { X, MapPin, Phone, Calendar, Weight, History, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function SalonModal({ salon, onClose, onSchedulePickup }) {
  if (!salon) return null;

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

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#2E7D32] flex items-center justify-center font-bold text-xl flex-shrink-0">
            {salon.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#2E7D32]">
                {salon.type}
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {salon.id}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{salon.name}</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {salon.address}
            </p>
          </div>
        </div>

        {/* Info Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] text-slate-400 font-medium">Estimasi Limbah</span>
            <p className="text-lg font-bold text-slate-800 mt-0.5">{salon.wasteVolume}</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] text-slate-400 font-medium">Total Terkumpul</span>
            <p className="text-lg font-bold text-[#2E7D32] mt-0.5">{salon.totalWasteContributed}</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] text-slate-400 font-medium">Status Penjemputan</span>
            <div className="mt-1">
              <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                salon.status === 'Sudah Diambil'
                  ? 'bg-emerald-100 text-emerald-700'
                  : salon.status === 'Terjadwal'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {salon.status === 'Sudah Diambil' && <CheckCircle className="w-3.5 h-3.5" />}
                {salon.status === 'Terjadwal' && <Clock className="w-3.5 h-3.5" />}
                {salon.status === 'Menunggu' && <AlertCircle className="w-3.5 h-3.5" />}
                {salon.status}
              </span>
            </div>
          </div>
        </div>

        {/* Contact & Next Pickup */}
        <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 font-medium">Kontak Person Salon</p>
            <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5">
              <Phone className="w-3.5 h-3.5 text-[#2E7D32]" />
              {salon.contact}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Jadwal Pickup Berikutnya</p>
            <p className="text-sm font-bold text-[#2E7D32] flex items-center gap-1.5 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-[#2E7D32]" />
              {salon.nextPickup}
            </p>
          </div>
          <button
            onClick={() => onSchedulePickup(salon)}
            className="w-full sm:w-auto px-4 py-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
          >
            Jadwalkan Penjemputan
          </button>
        </div>

        {/* Pickup History */}
        <div>
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3">
            <History className="w-4 h-4 text-[#2E7D32]" />
            Riwayat Penjemputan Limbah
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {salon.history.map((hist, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="font-semibold text-slate-800">{hist.date}</span>
                  <p className="text-[11px] text-slate-500">Kurir: {hist.courier}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#2E7D32]">{hist.weight}</span>
                  <p className="text-[10px] text-slate-400 font-mono">Batch: {hist.batchId}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
