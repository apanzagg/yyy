import React from 'react';
import { X, ShieldCheck, QrCode, Award, CheckCircle2, FileText, Printer, Download } from 'lucide-react';

export default function CertificateModal({ batch, onClose, onPrintToast }) {
  if (!batch) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-10 relative text-slate-900">
        
        {/* Action Header Controls */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />
            <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider">
              Sertifikat Provenansi Sirkular Resmi KeraHub
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onPrintToast('Mencetak Dokumen Sertifikat Provenansi Digital (PDF)...')}
              className="flex items-center gap-1.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              Cetak / PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Container Document */}
        <div className="bg-gradient-to-br from-emerald-50/40 via-white to-slate-50 border-4 border-double border-emerald-800/30 p-6 sm:p-10 rounded-2xl relative shadow-inner">
          
          {/* Watermark Seal */}
          <div className="absolute right-6 top-6 opacity-10 pointer-events-none">
            <Award className="w-36 h-36 text-[#2E7D32]" />
          </div>

          {/* Top Title Header */}
          <div className="text-center mb-8 border-b-2 border-emerald-900/10 pb-6">
            <span className="text-[10px] font-extrabold tracking-widest text-[#2E7D32] uppercase block mb-1">
              KERALOOP DIGITAL CIRCULAR ECOSYSTEM NODE 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              SERTIFIKAT PROVENANSI BIOMATERIAL
            </h2>
            <p className="text-xs text-slate-500 font-mono mt-1">
              No. Sertifikat: CERT/KH-BGL/{batch.id}/2026
            </p>
          </div>

          {/* Certificate Main Text */}
          <p className="text-xs text-slate-700 leading-relaxed mb-6 text-center max-w-xl mx-auto font-serif italic">
            Dengan ini diterangkan bahwa batch biomaterial KeraPad di bawah ini telah terverifikasi penuh dalam sistem Big Data KeraHub, melalui proses pengumpulan tersterilisasi, dan memenuhi standar keberlanjutan sirkular.
          </p>

          {/* Details Table Grid */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 text-xs space-y-3 mb-8 shadow-sm">
            <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
              <span className="text-slate-400 font-semibold">Nomor Kode Batch:</span>
              <span className="font-bold text-[#2E7D32] font-mono">{batch.id}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
              <span className="text-slate-400 font-semibold">Tanggal Produksi:</span>
              <span className="font-bold text-slate-800">{batch.prodDate}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
              <span className="text-slate-400 font-semibold">Mitra Salon Penyedia Limbah:</span>
              <span className="font-bold text-slate-900">{batch.salons.join(', ')}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
              <span className="text-slate-400 font-semibold">Uji Sanitasi & Autoclave:</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                {batch.sanitationStatus}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
              <span className="text-slate-400 font-semibold">Volume Keratin Murni Digunakan:</span>
              <span className="font-bold text-slate-800">{batch.hairWeightUsed}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <span className="text-slate-400 font-semibold">Penerima Manfaat Akhir:</span>
              <span className="font-bold text-slate-900">{batch.farmer}</span>
            </div>
          </div>

          {/* Signatures & QR Verification Block */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-200">
            
            {/* QR Mockup */}
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center p-1">
                <QrCode className="w-10 h-10" />
              </div>
              <div className="text-[10px]">
                <p className="font-bold text-slate-800">Verifikasi QR Blockchain</p>
                <p className="text-slate-400 font-mono">HASH: 8f9a2b7c4d</p>
                <span className="text-emerald-700 font-bold">100% Verified</span>
              </div>
            </div>

            {/* Signature Block */}
            <div className="text-center sm:text-right text-xs">
              <p className="text-slate-400 text-[10px]">Kota Bengkulu, Indonesia</p>
              <p className="font-bold text-[#2E7D32] mt-0.5">Fasilitas Central KeraHub</p>
              <div className="h-10 flex items-center justify-center sm:justify-end my-1">
                <span className="font-serif italic text-slate-400 text-sm font-bold tracking-widest">
                  ~ KeraHub Research Team ~
                </span>
              </div>
              <p className="font-bold text-slate-900">Otoritas Sertifikasi KeraHub Node 01</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
