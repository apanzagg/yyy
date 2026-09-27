import React from 'react';
import {
  LayoutDashboard,
  Store,
  Truck,
  MapPin,
  Cpu,
  SearchCode,
  ShoppingBag,
  BarChart3,
  User,
  Info,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const sections = [
    {
      title: "Logistik & Pasokan",
      items: [
        { id: 'home', label: 'Dashboard Overview', icon: LayoutDashboard, badge: null },
        { id: 'salon', label: 'Salon Mitra', icon: Store, badge: '20' },
        { id: 'penjemputan', label: 'Penjemputan Pickup', icon: Truck, badge: '4 Hari Ini' },
        { id: 'supply', label: 'Supply Mapping', icon: MapPin, badge: null },
      ]
    },
    {
      title: "Pengolahan KeraHub",
      items: [
        { id: 'pengolahan', label: 'Pengolahan KeraPad', icon: Cpu, badge: 'Active' },
      ]
    },
    {
      title: "Distribusi & Petani",
      items: [
        { id: 'marketplace', label: 'Marketplace KeraPad', icon: ShoppingBag, badge: '3 Produk' },
      ]
    },
    {
      title: "Big Data & Riset",
      items: [
        { id: 'traceability', label: 'Traceability Batch', icon: SearchCode, badge: 'Verified' },
        { id: 'statistik', label: 'Statistik Analitik', icon: BarChart3, badge: null },
        { id: 'tentang', label: 'Tentang Keraloop', icon: Info, badge: null },
      ]
    }
  ];

  // Flat menu for mobile horizontal scroll
  const allItems = sections.flatMap(s => s.items);

  return (
    <>
      {/* Mobile Horizontal Scroll Tab Bar (< md) */}
      <div className="md:hidden w-full liquid-glass-card p-2 mb-4 overflow-x-auto no-scrollbar flex items-center gap-1.5 scroll-smooth">
        {allItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'btn-liquid-dark text-[#A3E635] shadow-md font-bold'
                  : 'bg-white/60 backdrop-blur-md text-slate-700 hover:bg-white/90 border border-white/60'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#A3E635]' : 'text-slate-500'}`} />
              <span className="whitespace-nowrap">{item.label}</span>
              {item.badge && (
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-[#A3E635] text-[#0D190E]' : 'bg-emerald-100/80 text-[#1B4D24]'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Desktop Categorized Sidebar (>= md) */}
      <aside className="w-64 liquid-glass-card min-h-[calc(100vh-6rem)] p-4 flex flex-col justify-between hidden md:flex sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
        <div className="space-y-4">
          
          {sections.map((sec, sIdx) => (
            <div key={sIdx}>
              <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0D190E] bg-white/50 backdrop-blur-md rounded-xl border border-white/70 mb-1.5 flex items-center gap-1.5 shadow-2xs">
                <Layers className="w-3 h-3 text-[#1B4D24]" />
                {sec.title}
              </div>

              <nav className="space-y-1">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-medium transition-all group ${
                        isActive
                          ? 'btn-liquid-dark text-[#A3E635] font-bold shadow-md scale-[1.02]'
                          : 'text-slate-700 hover:bg-white/70 hover:text-[#0D190E] hover:shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 transition-colors ${
                          isActive ? 'text-[#A3E635]' : 'text-slate-400 group-hover:text-[#0D190E]'
                        }`} />
                        <span>{item.label}</span>
                      </div>

                      {item.badge && (
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold transition-transform group-hover:scale-105 ${
                          isActive 
                            ? 'bg-[#A3E635] text-[#0D190E] shadow-2xs' 
                            : 'bg-emerald-50 text-[#1B4D24] border border-emerald-100/60'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}

        </div>

        {/* Bottom Promo / Info Widget */}
        <div className="pt-4 mt-4 border-t border-white/60">
          <div className="bg-gradient-to-br from-[#0D190E] via-[#142917] to-[#0A140B] p-4 rounded-2xl text-white relative overflow-hidden border border-white/10 shadow-lg">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-[#A3E635]/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-center gap-2 text-[#A3E635] text-[11px] font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#A3E635] animate-pulse" />
              <span>Big Data Circular</span>
            </div>
            <p className="text-xs font-bold text-white mb-1">
              Traceability QR Certificate
            </p>
            <p className="text-[10px] text-slate-300 leading-snug mb-3">
              Cetak Sertifikat Provenansi Digital resmi untuk verifikasi & audit sirkularitas.
            </p>
            <button
              onClick={() => setActiveTab('traceability')}
              className="w-full btn-liquid-lime text-[11px] font-bold py-2 px-3 flex items-center justify-center gap-1"
            >
              Lacak & Cetak Sertifikat
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
