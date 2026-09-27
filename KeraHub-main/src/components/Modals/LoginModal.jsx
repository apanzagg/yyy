import React, { useState } from 'react';
import { X, Lock, Mail, KeyRound, ShieldCheck, ArrowRight, Sparkles, User, Store, Sprout } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('admin@kerahub.id');
  const [password, setPassword] = useState('••••••••');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMsg('Harap isi Email dan Kata Sandi.');
      return;
    }
    setErrorMsg('');
    onLoginSuccess({
      name: 'Admin KeraHub',
      email: email,
      role: 'Admin Node 01'
    });
  };

  const handleQuickLogin = (roleName, roleEmail) => {
    setEmail(roleEmail);
    onLoginSuccess({
      name: roleName,
      email: roleEmail,
      role: roleName
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 liquid-glass-modal-backdrop animate-fade-in">
      <div className="liquid-glass-modal max-w-md w-full p-6 sm:p-8 relative text-slate-900 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full bg-white/70 hover:bg-white text-slate-500 hover:text-slate-900 transition-all border border-white/80 shadow-2xs"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D190E] to-[#1B4D24] text-[#A3E635] flex items-center justify-center mx-auto mb-3 border border-white/30 shadow-md">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Masuk ke KeraHub</h2>
          <p className="text-xs text-slate-500 mt-1">
            Autentikasi keamanan akses Terminal Dashboard Big Data Sirkular KERALOOP.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50/80 border border-red-200 text-red-700 text-xs rounded-2xl text-center font-medium backdrop-blur-md">
            {errorMsg}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Email Pengguna</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@kerahub.id"
                className="w-full bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#2E7D32] focus:bg-white transition-all shadow-2xs"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Kata Sandi</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#2E7D32] focus:bg-white transition-all shadow-2xs"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 btn-liquid-dark text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 group"
          >
            Masuk ke Dashboard
            <ArrowRight className="w-4 h-4 text-[#A3E635] group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Quick Demo Access Bar */}
        <div className="mt-6 pt-5 border-t border-white/60">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center mb-3">
            Akses Cepat Demo Pengujian:
          </span>
          <div className="space-y-2">
            <button
              onClick={() => handleQuickLogin('Admin KeraHub', 'admin@kerahub.id')}
              className="w-full py-2.5 px-3 bg-white/80 hover:bg-white text-[#2E7D32] border border-white/90 rounded-2xl text-xs font-bold transition-all flex items-center justify-between shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5" />
                <span>Masuk Demo Admin Node 01</span>
              </div>
              <span className="text-[10px] bg-[#0D190E] text-[#A3E635] px-2 py-0.5 rounded-full font-mono">1-Click</span>
            </button>

            <button
              onClick={() => handleQuickLogin('Mitra BarberStudio 88', 'salon88@kerahub.id')}
              className="w-full py-2.5 px-3 bg-white/60 hover:bg-white/90 text-slate-700 border border-white/80 rounded-2xl text-xs font-bold transition-all flex items-center justify-between shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <Store className="w-3.5 h-3.5 text-slate-500" />
                <span>Masuk Demo Mitra Salon</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Mitra</span>
            </button>

            <button
              onClick={() => handleQuickLogin('Kelompok Tani Pak Supri', 'tani.supri@kerahub.id')}
              className="w-full py-2.5 px-3 bg-white/60 hover:bg-white/90 text-slate-700 border border-white/80 rounded-2xl text-xs font-bold transition-all flex items-center justify-between shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                <span>Masuk Demo Petani</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Petani</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
