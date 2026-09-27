import React from 'react';
import { BarChart3, TrendingUp, Cpu, ShoppingBag, Store, Leaf, Calendar } from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

export default function StatistikPage() {
  
  const monthlyData = [
    { month: 'Jan', volume: 18, pickup: 12, batch: 10, sold: 80, mitrabaru: 3 },
    { month: 'Feb', volume: 22, pickup: 15, batch: 12, sold: 95, mitrabaru: 4 },
    { month: 'Mar', volume: 25, pickup: 18, batch: 15, sold: 110, mitrabaru: 3 },
    { month: 'Apr', volume: 28, pickup: 20, batch: 16, sold: 130, mitrabaru: 5 },
    { month: 'Mei', volume: 30, pickup: 22, batch: 18, sold: 145, mitrabaru: 5 }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-[#2E7D32]" />
            Dashboard Analitik & Statistik Big Data
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Metrik analitik menyeluruh pertumbuhan ekosistem sirkular Keraloop.
          </p>
        </div>
      </div>

      {/* Grid of 6 Analytics Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Graph 1: Volume Limbah */}
        <div className="kera-card p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#2E7D32]" />
            Volume Limbah Terkumpul (kg/bulan)
          </h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} />
                <Tooltip />
                <Bar dataKey="volume" fill="#2E7D32" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Graph 2: Jumlah Pickup Logistik */}
        <div className="kera-card p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            Jumlah Frekuensi Pickup Logistik
          </h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} />
                <Tooltip />
                <Line type="monotone" dataKey="pickup" stroke="#2563EB" strokeWidth={2.5} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Graph 3: Produksi Batch KeraPad */}
        <div className="kera-card p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-600" />
            Jumlah Batch Produksi Terproses
          </h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} />
                <Tooltip />
                <Bar dataKey="batch" fill="#9333EA" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Graph 4: KeraPad Terjual & Penyaluran */}
        <div className="kera-card p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-amber-600" />
            KeraPad Terjual & Tersalurkan (Unit)
          </h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} />
                <Tooltip />
                <Line type="monotone" dataKey="sold" stroke="#D97706" strokeWidth={2.5} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}
