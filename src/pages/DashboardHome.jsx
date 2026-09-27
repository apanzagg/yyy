import React from 'react';
import { 
  Store, 
  Truck, 
  Cpu, 
  Sprout, 
  ShoppingBag, 
  Leaf, 
  TrendingUp, 
  Calendar,
  ArrowUpRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { SYSTEM_STATS, WASTE_CHART_DATA, WASTE_PIE_DATA, TODAY_PICKUPS } from '../data/mockData';

export default function DashboardHome({ onNavigate, showToast }) {
  
  const cards = [
    { title: "Salon Mitra", val: SYSTEM_STATS.salonMitra, unit: "Mitra Aktif", icon: Store, color: "text-[#2E7D32]", bg: "bg-emerald-50", tab: 'salon' },
    { title: "Logistik Penjemputan", val: "4", unit: "Hari Ini", icon: Truck, color: "text-blue-600", bg: "bg-blue-50", tab: 'penjemputan' },
    { title: "Batch Pengolahan", val: SYSTEM_STATS.batchDiproses, unit: "Batch", icon: Cpu, color: "text-purple-600", bg: "bg-purple-50", tab: 'pengolahan' },
    { title: "Petani Penerima", val: SYSTEM_STATS.petani, unit: "Kelompok Tani", icon: Sprout, color: "text-emerald-700", bg: "bg-emerald-50", tab: 'supply' },
    { title: "KeraPad Terjual", val: SYSTEM_STATS.keraPadTerjual, unit: "Unit", icon: ShoppingBag, color: "text-amber-600", bg: "bg-amber-50", tab: 'marketplace' },
    { title: "CO₂ Berpotensi Dikurangi", val: `${SYSTEM_STATS.co2Dikurangi} kg`, unit: "Per Tahun", icon: Leaf, color: "text-[#2E7D32]", bg: "bg-emerald-50", tab: 'statistik' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#2E7D32] via-[#1B5E20] to-emerald-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              Node Monitoring Central Bengkulu
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dashboard Ringkasan Ekosistem KERALOOP
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
              Pantau arus pasokan limbah keratin rambut salon, jadwal logistik kurir, status sanitasi batch KeraPad, dan dampaknya bagi petani hidroponik secara real-time.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('dashboard', 'penjemputan')}
              className="bg-white hover:bg-emerald-50 text-[#2E7D32] px-4 py-2.5 rounded-2xl text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              + Jadwal Pickup
            </button>
            <button
              onClick={() => onNavigate('dashboard', 'traceability')}
              className="bg-emerald-800/80 hover:bg-emerald-800 text-white border border-emerald-700 px-4 py-2.5 rounded-2xl text-xs font-semibold backdrop-blur-sm transition-all"
            >
              Cari Batch KP-2026
            </button>
          </div>
        </div>
      </div>

      {/* Top 6 Stat Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div
              key={idx}
              onClick={() => onNavigate('dashboard', c.tab)}
              className="kera-card p-4 cursor-pointer hover:scale-[1.02] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl ${c.bg} ${c.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <span className="text-[11px] text-slate-400 font-semibold">{c.title}</span>
              </div>
              <div className="mt-3">
                <h3 className={`text-xl sm:text-2xl font-extrabold ${c.color}`}>
                  {c.val}
                </h3>
                <span className="text-[10px] text-slate-500 font-medium">{c.unit}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section: Volume Limbah (Line) & Distribusi (Pie) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Volume Area Chart */}
        <div className="lg:col-span-2 kera-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#2E7D32]" />
                Volume Limbah Terkumpul per Minggu (kg)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Tren pengumpulan dari 20 salon mitra di Bengkulu</p>
            </div>
            <span className="text-xs font-bold text-[#2E7D32] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Total: 30 kg
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WASTE_CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#2E7D32" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="week" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#E2E8F0', fontSize: '12px' }}
                  formatter={(value) => [`${value} kg`, 'Volume Limbah']}
                />
                <Area type="monotone" dataKey="volume" stroke="#2E7D32" strokeWidth={2.5} fillOpacity={1} fill="url(#colorVol)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Waste Distribution */}
        <div className="kera-card p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Distribusi Asal Limbah
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Persentase kontribusi berdasarkan jenis tempat usaha</p>
          </div>

          <div className="h-48 w-full my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={WASTE_PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {WASTE_PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Proporsi']} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
            {WASTE_PIE_DATA.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-600 font-medium">{item.name}</span>
                </div>
                <span className="font-bold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row: Today's Pickups Feed */}
      <div className="kera-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#2E7D32]" />
              Jadwal Penjemputan Limbah Hari Ini
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Pantau lokasi dan status armada kurir logistik</p>
          </div>
          <button
            onClick={() => onNavigate('dashboard', 'penjemputan')}
            className="text-xs font-bold text-[#2E7D32] hover:underline flex items-center gap-1"
          >
            Lihat Semua Jadwal
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TODAY_PICKUPS.map((pkp) => (
            <div key={pkp.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="font-mono text-slate-400">{pkp.time}</span>
                  <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                    pkp.status === 'Selesai'
                      ? 'bg-emerald-100 text-emerald-800'
                      : pkp.status === 'Dalam Perjalanan'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {pkp.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{pkp.salon}</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">Kurir: {pkp.courier}</p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">Estimasi:</span>
                <span className="font-bold text-[#2E7D32]">{pkp.weightEst}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
