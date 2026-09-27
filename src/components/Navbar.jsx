import React, { useState } from 'react';
import { 
  Sprout, 
  LayoutDashboard, 
  Search, 
  Bell, 
  Menu, 
  X, 
  ChevronRight,
  ArrowUpRight,
  Leaf,
  Lock,
  LogOut,
  User,
  Sparkles
} from 'lucide-react';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  dashboardTab, 
  setDashboardTab, 
  showToast,
  isAuthenticated,
  currentUser,
  onOpenLoginModal,
  onLogout
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view, tab = 'home') => {
    if (view === 'dashboard' && !isAuthenticated) {
      onOpenLoginModal();
      setMobileMenuOpen(false);
      return;
    }

    setCurrentView(view);
    if (view === 'dashboard') {
      setDashboardTab(tab);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 liquid-glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand / Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('landing')}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0D190E] to-[#1B4D24] flex items-center justify-center text-[#A3E635] shadow-md border border-white/20 group-hover:scale-105 transition-all">
              <Leaf className="w-5 h-5 fill-[#A3E635]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#0D190E]">
                  KERALOOP
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-md text-[#0D190E] border border-white/80 shadow-2xs">
                  Circular Node
                </span>
              </div>
              <p className="text-[10px] text-[#5C665E] font-medium hidden sm:block">
                Digital Biomaterial Platform
              </p>
            </div>
          </div>

          {/* Center Navigation Links (Apple macOS / iOS Dynamic Island Pill Bar) */}
          <div className="hidden md:flex items-center gap-1 liquid-glass-dark-pill p-1.5 shadow-lg">
            <button
              onClick={() => handleNavClick('landing')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                currentView === 'landing'
                  ? 'bg-white/90 text-[#0D190E] shadow-sm font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Home Landing
            </button>
            <button
              onClick={() => handleNavClick('dashboard', 'home')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentView === 'dashboard'
                  ? 'btn-liquid-lime text-[#0D190E] shadow-sm font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Dashboard System
            </button>
            <button
              onClick={() => handleNavClick('dashboard', 'marketplace')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                currentView === 'dashboard' && dashboardTab === 'marketplace'
                  ? 'bg-white/90 text-[#0D190E] shadow-sm font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Marketplace
            </button>
            <button
              onClick={() => handleNavClick('dashboard', 'tentang')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                currentView === 'dashboard' && dashboardTab === 'tentang'
                  ? 'bg-white/90 text-[#0D190E] shadow-sm font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              About Us
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => showToast('Notifikasi: 2 pickup baru berhasil dijadwalkan hari ini', 'info')}
                  className="relative p-2 text-[#0D190E] hover:bg-white/80 rounded-full transition-all border border-transparent hover:border-white/60 shadow-2xs"
                  title="Notifikasi System"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#A3E635] rounded-full ring-2 ring-white animate-ping"></span>
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#A3E635] rounded-full ring-2 ring-white"></span>
                </button>

                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-[#0D190E] text-[#A3E635] font-bold text-xs flex items-center justify-center border border-white/20">
                    {currentUser?.name ? currentUser.name.substring(0, 2).toUpperCase() : 'KH'}
                  </div>
                  <div className="text-left text-xs">
                    <p className="font-bold text-[#0D190E] leading-tight">{currentUser?.name || 'Admin KeraHub'}</p>
                  </div>
                </div>

                <button
                  onClick={onLogout}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50/80 rounded-full transition-all border border-transparent hover:border-red-100"
                  title="Keluar / Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLoginModal}
                className="btn-liquid-lime px-5 py-2 text-xs font-bold flex items-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-[#0D190E]" />
                Masuk / Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0D190E] focus:outline-none bg-white/60 backdrop-blur-md rounded-2xl border border-white/70"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden liquid-glass-card border-t border-white/60 px-4 pt-3 pb-6 space-y-3 m-2 shadow-xl">
          <button
            onClick={() => handleNavClick('landing')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
              currentView === 'landing' ? 'btn-liquid-dark text-[#A3E635]' : 'text-slate-800'
            }`}
          >
            Home Landing
          </button>
          
          {isAuthenticated ? (
            <>
              <button
                onClick={() => handleNavClick('dashboard', 'home')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  currentView === 'dashboard' && dashboardTab === 'home' ? 'btn-liquid-dark text-[#A3E635]' : 'text-slate-800'
                }`}
              >
                Dashboard Overview
              </button>
              <button
                onClick={() => handleNavClick('dashboard', 'salon')}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800"
              >
                Salon Mitra
              </button>
              <button
                onClick={() => handleNavClick('dashboard', 'pengolahan')}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800"
              >
                Pengolahan KeraPad
              </button>
              <button
                onClick={onLogout}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-red-600 bg-red-50/80 border border-red-100 flex items-center justify-between"
              >
                <span>Keluar / Logout</span>
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLoginModal();
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-[#0D190E] btn-liquid-lime flex items-center justify-between"
            >
              <span>Masuk / Login ke Dashboard</span>
              <Lock className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
