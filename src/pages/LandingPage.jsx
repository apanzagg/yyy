import React, { useState } from 'react';
import { 
  Scissors, 
  Truck, 
  Cpu, 
  Sprout, 
  ShoppingBag, 
  BarChart3, 
  SearchCode, 
  MapPin, 
  ArrowRight, 
  AlertTriangle, 
  Factory, 
  RefreshCw, 
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  Zap,
  Lock,
  Headphones,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck
} from 'lucide-react';
import { SYSTEM_STATS } from '../data/mockData';
import Footer from '../components/Footer';
import heroBg from '../assets/keraloop_hero_bg.png';
import kerapadPhoto from '../assets/kerapad_biomaterial_photo.png';

export default function LandingPage({ onNavigate, showToast }) {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const circularMethods = [
    {
      step: "01",
      title: "Penampungan Limbah Salon Mitra",
      desc: "Mitra salon & barbershop memilah limbah rambut sisa pemotongan ke dalam wadah steril khusus KeraHub.",
      tag: "Pengumpulan Pasokan"
    },
    {
      step: "02",
      title: "Logistik Pickup Terjadwal",
      desc: "Armada kurir KeraHub menjemput wadah limbah terpilah sesuai rute optimasi spasial mingguan.",
      tag: "Efisiensi Rute"
    },
    {
      step: "03",
      title: "Quality Control & Ingest Big Data",
      desc: "Limbah masuk ditimbang, diuji pH, dan diregistrasi ke terminal Big Data dengan QR Traceability.",
      tag: "Standardisasi Mutu"
    },
    {
      step: "04",
      title: "Sterilisasi Autoclave 121°C & Mold Pressing",
      desc: "Rambut dipanaskan suhu tinggi 121°C untuk mematikan patogen, lalu dicampur bio-binder alami.",
      tag: "Proses Bio-Engineered"
    },
    {
      step: "05",
      title: "Aplikasi KeraPad oleh Petani Hidroponik",
      desc: "Petani menggunakan KeraPad sebagai substitusi total rockwool dengan retensi air 450% lebih tinggi.",
      tag: "Pertanian Berkelanjutan"
    }
  ];

  const benefits = [
    {
      icon: Cpu,
      title: "Big Data & Traceability",
      desc: "Sistem pendataan terintegrasi dari salon hingga media tanam siap pakai."
    },
    {
      icon: Users,
      title: "Personalized Support",
      desc: "Pendampingan teknis langsung untuk mitra salon dan kelompok tani."
    },
    {
      icon: Sprout,
      title: "Sustainable Practices",
      desc: "Mengurangi limbah TPA & mensubstitusi media tanam rockwool ber-emisi."
    },
    {
      icon: ShieldCheck,
      title: "Certified Bio-Safety",
      desc: "Lulus uji steril Autoclave 121°C dan bebas patogen tanaman."
    }
  ];

  const successStories = [
    {
      name: "Pak Supri",
      role: "Ketua Kelompok Tani Hijau Mandiri",
      quote: "KeraPad memberikan daya retensi air yang sangat tinggi. Pertumbuhan akar kangkung & selada hidroponik kami 22% lebih cepat dibanding rockwool impor.",
      avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Ibu Sarah",
      role: "Pengelola BarberStudio 88",
      quote: "Penjemputan limbah rambut rutin dari KeraHub sangat membantu kebersihan salon kami. Bangga bisa berkontribusi pada ekonomi sirkular lokal.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6EF] text-[#0F1710]">
      
      {/* 1. AGRI-PRO LIQUID GLASS HERO BANNER */}
      <section className="pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[520px] sm:min-h-[580px] flex items-center justify-center text-center p-6 sm:p-12 shadow-2xl border border-white/20">
          
          {/* Background Image with Dark Overlay */}
          <img 
            src={heroBg} 
            alt="KERALOOP Sustainable Farming" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D190E]/95 via-[#0D190E]/60 to-[#0D190E]/40 backdrop-blur-[2px]"></div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xl border border-white/30 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-300 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#A3E635] animate-pulse" />
              <span>Ekosistem Digital Sirkular Biomaterial</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Sustainable circularity <br />
              <span className="text-[#A3E635] drop-shadow-sm">for a healthier planet</span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              Platform berbasis Big Data yang mengintegrasikan limbah keratin rambut salon, logistik cerdas, dan media tanam KeraPad ramah lingkungan untuk pertanian perkotaan berkelanjutan.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('dashboard', 'home')}
                className="w-full sm:w-auto btn-liquid-lime px-8 py-4 text-sm font-bold shadow-xl flex items-center justify-center gap-2 group"
              >
                <Lock className="w-4 h-4 text-[#0D190E]" />
                Masuk / Buka Dashboard System
                <ArrowRight className="w-4 h-4 text-[#0D190E] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('methods-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-7 py-4 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Pelajari Metode Sirkular
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "TRUSTED BY EVERYONE" / METRICS SECTION WITH LIQUID GLASS CARDS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-[#0D190E]">
            Trusted by everyone
          </h2>
          <p className="text-xs sm:text-sm text-[#5C665E] mt-2">
            Menginspirasi pertumbuhan, inovasi, dan keberlanjutan dalam ekosistem ekonomi sirkular.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="liquid-glass-card p-6 sm:p-8 flex flex-col justify-between h-44">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-[#5C665E]">Mitra Salon</span>
              <div className="p-2 rounded-xl bg-emerald-100/70 text-[#0D190E]">
                <Scissors className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0D190E]">{SYSTEM_STATS.salonMitra}</h3>
              <p className="text-[11px] text-[#5C665E] font-medium mt-1">Barbershop & Salon Aktif</p>
            </div>
          </div>

          <div className="liquid-glass-card p-6 sm:p-8 flex flex-col justify-between h-44">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-[#5C665E]">Limbah Keratin</span>
              <div className="p-2 rounded-xl bg-lime-100/70 text-[#0D190E]">
                <RefreshCw className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0D190E]">{SYSTEM_STATS.limbahTerkumpul}</h3>
              <p className="text-[11px] text-[#5C665E] font-medium mt-1">Kilogram Hair Waste</p>
            </div>
          </div>

          <div className="liquid-glass-card p-6 sm:p-8 flex flex-col justify-between h-44">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-[#5C665E]">KeraPad Diproduksi</span>
              <div className="p-2 rounded-xl bg-emerald-100/70 text-[#0D190E]">
                <Sprout className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0D190E]">1,000+</h3>
              <p className="text-[11px] text-[#5C665E] font-medium mt-1">Unit Biomaterial Tanam</p>
            </div>
          </div>

          <div className="liquid-glass-card p-6 sm:p-8 flex flex-col justify-between h-44">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-[#5C665E]">Kelompok Tani</span>
              <div className="p-2 rounded-xl bg-amber-100/70 text-[#0D190E]">
                <ShoppingBag className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0D190E]">{SYSTEM_STATS.petani}</h3>
              <p className="text-[11px] text-[#5C665E] font-medium mt-1">Penerima Manfaat</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. "OUR SERVICES" / MODUL EKOSISTEM */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-[#0D190E]">
            Our services
          </h2>
          <p className="text-xs sm:text-sm text-[#5C665E] mt-2">
            Kami menjembatani rantai pasok dari limbah salon hingga menjadi media pertanian berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div 
            onClick={() => onNavigate('dashboard', 'salon')}
            className="liquid-glass-card p-4 cursor-pointer group"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-4 relative bg-slate-200 border border-white/60">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" 
                alt="Salon Mitra & Logistics" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-[#0D190E] group-hover:text-emerald-700 transition-colors">
                KeraHub Supply Mapping & Salon Partner
              </h3>
              <p className="text-xs text-[#5C665E] mt-1.5 leading-relaxed">
                Pendataan spasial lokasi mitra salon barbershop serta rute penjemputan limbah teroptimasi.
              </p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('dashboard', 'pengolahan')}
            className="liquid-glass-card p-4 cursor-pointer group"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-4 relative bg-slate-200 border border-white/60">
              <img 
                src={kerapadPhoto} 
                alt="Sustainable Biomaterial Processing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-[#0D190E] group-hover:text-emerald-700 transition-colors">
                Sustainable Biomaterial Processing
              </h3>
              <p className="text-xs text-[#5C665E] mt-1.5 leading-relaxed">
                Sterilisasi suhu tinggi Autoclave 121°C & molding menjadi pad hidroponik siap pakai.
              </p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('dashboard', 'marketplace')}
            className="liquid-glass-card p-4 cursor-pointer group"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-4 relative bg-slate-200 border border-white/60">
              <img 
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=600" 
                alt="Distribution & Marketplace" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-[#0D190E] group-hover:text-emerald-700 transition-colors">
                KeraPad Distribution & Traceability
              </h3>
              <p className="text-xs text-[#5C665E] mt-1.5 leading-relaxed">
                Marketplace biomaterial bersertifikat digital QR untuk verifikasi keberlanjutan produk.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. "OUR AGRICULTURAL METHODS" / SHOWCASE ACCORDION SECTION */}
      <section id="methods-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-[#0D190E]">
            Our circular methods
          </h2>
          <p className="text-xs sm:text-sm text-[#5C665E] mt-2">
            Menggabungkan riset biomaterial dengan teknologi Big Data untuk menciptakan mata rantai sirkular yang transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Image Showcase */}
          <div className="lg:col-span-5 rounded-[2.5rem] overflow-hidden shadow-2xl h-[460px] relative border border-white/40">
            <img 
              src={kerapadPhoto} 
              alt="Circular Methods Hydroponic" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D190E]/90 via-[#0D190E]/30 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] font-bold text-[#A3E635] uppercase tracking-wider bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1 rounded-full w-max mb-2">
                Fasilitas KeraHub
              </span>
              <h3 className="text-xl font-bold">Produksi KeraPad Tersterilisasi</h3>
              <p className="text-xs text-slate-200 mt-1">Daya retensi air 450% & slow-release nitrogen alami.</p>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {circularMethods.map((m, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveAccordion(idx)}
                  className={`liquid-glass-card p-5 cursor-pointer transition-all ${
                    isOpen ? 'border-[#0D190E]/30 bg-white/90 shadow-md' : 'opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold font-mono px-2.5 py-1 rounded-xl ${
                        isOpen ? 'btn-liquid-dark text-[#A3E635]' : 'bg-white/70 text-slate-700 border border-white/80'
                      }`}>
                        {m.step}
                      </span>
                      <h4 className="text-sm font-bold text-[#0D190E]">{m.title}</h4>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#0D190E]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-slate-200/60 pl-10">
                      <p className="text-xs text-[#5C665E] leading-relaxed mb-2">{m.desc}</p>
                      <span className="inline-block text-[10px] font-bold bg-emerald-100/80 text-[#1B4D24] px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                        {m.tag}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. "BENEFITS TO BE A PARTNER WITH US" */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="liquid-glass-card p-8 sm:p-12 text-center">
          
          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D190E]">
              Benefits to be a partner with us
            </h2>
            <p className="text-xs sm:text-sm text-[#5C665E] mt-2">
              Bergabunglah dengan ekosistem KERALOOP untuk mendapatkan efisiensi dan transparansi rantai pasok sirkular.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/80 text-center flex flex-col items-center shadow-2xs hover:scale-105 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D190E] to-[#1B4D24] text-[#A3E635] flex items-center justify-center mb-4 border border-white/20 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0D190E] mb-2">{b.title}</h4>
                  <p className="text-xs text-[#5C665E] leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. "FARMING SUCCESS STORIES" */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-[#0D190E]">
            Farming success stories
          </h2>
          <p className="text-xs sm:text-sm text-[#5C665E] mt-2">
            Bagaimana inovasi KeraPad membantu kelompok tani meraih hasil panen hidroponik yang lebih baik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {successStories.map((story, idx) => (
            <div key={idx} className="liquid-glass-card p-6 sm:p-8 flex items-start gap-4">
              <img 
                src={story.avatar} 
                alt={story.name} 
                className="w-14 h-14 rounded-2xl object-cover flex-shrink-0 border-2 border-white shadow-md"
              />
              <div>
                <p className="text-xs text-[#141A15] italic leading-relaxed mb-4">
                  "{story.quote}"
                </p>
                <h4 className="text-sm font-bold text-[#0D190E]">{story.name}</h4>
                <p className="text-[11px] text-[#5C665E]">{story.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. "GROW WITH US" / BOTTOM CTA BANNER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden py-16 px-6 text-center text-white shadow-2xl border border-white/20">
          <img 
            src={heroBg} 
            alt="Grow with us" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D190E] via-[#0D190E]/90 to-[#0D190E]/70 backdrop-blur-[2px]"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Grow with us
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mulailah berkontribusi dalam rantai ekonomi sirkular limbah keratin rambut untuk masa depan pertanian hidroponik yang lebih bersih.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('dashboard', 'home')}
                className="btn-liquid-lime px-8 py-3.5 text-xs font-bold inline-flex items-center gap-2 shadow-xl"
              >
                <Lock className="w-4 h-4 text-[#0D190E]" />
                Masuk ke System Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
