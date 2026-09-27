// Mock Data for KERALOOP Digital Circular Ecosystem Prototype

export const SYSTEM_STATS = {
  salonMitra: 20,
  limbahTerkumpul: 30, // kg
  batchDiproses: 18,
  petani: 12,
  keraPadTerjual: 145,
  co2Dikurangi: 486, // kg/tahun
};

export const SALON_LIST = [
  {
    id: "SLN-001",
    name: "BarberStudio 88",
    address: "Jl. Ratu Samban No. 12, Kota Bengkulu",
    contact: "0812-3456-7890 (Rian)",
    type: "Barbershop",
    wasteVolume: "3.2 kg/minggu",
    totalWasteContributed: "14.5 kg",
    status: "Sudah Diambil",
    lastPickup: "2026-07-28",
    nextPickup: "2026-08-04",
    location: { lat: -3.7928, lng: 102.2608, zone: "Bengkulu Kota - Zona 1" },
    history: [
      { date: "2026-07-28", weight: "3.2 kg", courier: "Budi Santoso", batchId: "KP-2026-018" },
      { date: "2026-07-21", weight: "3.0 kg", courier: "Budi Santoso", batchId: "KP-2026-014" },
      { date: "2026-07-14", weight: "2.8 kg", courier: "Agus Pratama", batchId: "KP-2026-010" }
    ]
  },
  {
    id: "SLN-002",
    name: "Glow & Beauty Salon",
    address: "Jl. Suprapto No. 45, Kota Bengkulu",
    contact: "0852-9876-5432 (Siti)",
    type: "Beauty Salon",
    wasteVolume: "2.5 kg/minggu",
    totalWasteContributed: "11.2 kg",
    status: "Terjadwal",
    lastPickup: "2026-07-25",
    nextPickup: "2026-08-01",
    location: { lat: -3.7980, lng: 102.2640, zone: "Bengkulu Kota - Zona 1" },
    history: [
      { date: "2026-07-25", weight: "2.5 kg", courier: "Agus Pratama", batchId: "KP-2026-016" },
      { date: "2026-07-18", weight: "2.4 kg", courier: "Agus Pratama", batchId: "KP-2026-012" }
    ]
  },
  {
    id: "SLN-003",
    name: "Gentlemen Cut & Care",
    address: "Jl. Sudirman No. 102, Gading Cempaka",
    contact: "0821-1122-3344 (Andi)",
    type: "Barbershop",
    wasteVolume: "4.1 kg/minggu",
    totalWasteContributed: "18.0 kg",
    status: "Menunggu",
    lastPickup: "2026-07-20",
    nextPickup: "2026-08-02",
    location: { lat: -3.8040, lng: 102.2780, zone: "Gading Cempaka - Zona 2" },
    history: [
      { date: "2026-07-20", weight: "4.1 kg", courier: "Budi Santoso", batchId: "KP-2026-013" },
      { date: "2026-07-13", weight: "3.9 kg", courier: "Agus Pratama", batchId: "KP-2026-009" }
    ]
  },
  {
    id: "SLN-004",
    name: "Chic Hair & Spa",
    address: "Jl. Kinibalu No. 18, Muara Bangkahulu",
    contact: "0813-7788-9900 (Dewi)",
    type: "Beauty Salon",
    wasteVolume: "1.8 kg/minggu",
    totalWasteContributed: "7.8 kg",
    status: "Sudah Diambil",
    lastPickup: "2026-07-29",
    nextPickup: "2026-08-05",
    location: { lat: -3.7750, lng: 102.2710, zone: "Muara Bangkahulu - Zona 3" },
    history: [
      { date: "2026-07-29", weight: "1.8 kg", courier: "Rizky Ramadhan", batchId: "KP-2026-017" }
    ]
  },
  {
    id: "SLN-005",
    name: "Mahkota Salon Studio",
    address: "Jl. Salak No. 3, Lingkar Timur",
    contact: "0853-4455-6677 (Maya)",
    type: "Hair Studio",
    wasteVolume: "3.5 kg/minggu",
    totalWasteContributed: "15.0 kg",
    status: "Terjadwal",
    lastPickup: "2026-07-24",
    nextPickup: "2026-08-01",
    location: { lat: -3.8120, lng: 102.2890, zone: "Lingkar Timur - Zona 2" },
    history: [
      { date: "2026-07-24", weight: "3.5 kg", courier: "Rizky Ramadhan", batchId: "KP-2026-015" }
    ]
  },
  {
    id: "SLN-006",
    name: "Kingsman Barbershop",
    address: "Jl. Zainul Arifin No. 89, Singaran Pati",
    contact: "0819-2233-4455 (Hendra)",
    type: "Barbershop",
    wasteVolume: "2.9 kg/minggu",
    totalWasteContributed: "12.1 kg",
    status: "Menunggu",
    lastPickup: "2026-07-22",
    nextPickup: "2026-08-02",
    location: { lat: -3.8190, lng: 102.2950, zone: "Singaran Pati - Zona 2" },
    history: [
      { date: "2026-07-22", weight: "2.9 kg", courier: "Budi Santoso", batchId: "KP-2026-014" }
    ]
  }
];

export const TODAY_PICKUPS = [
  {
    id: "PKP-101",
    salon: "Glow & Beauty Salon",
    time: "09:30 WIB",
    courier: "Agus Pratama",
    status: "Terjadwal",
    route: "Rute 1 - Kampus Unib & Suprapto",
    weightEst: "2.5 kg"
  },
  {
    id: "PKP-102",
    salon: "Mahkota Salon Studio",
    time: "11:00 WIB",
    courier: "Rizky Ramadhan",
    status: "Dalam Perjalanan",
    route: "Rute 2 - Lingkar Timur Hub",
    weightEst: "3.5 kg"
  },
  {
    id: "PKP-103",
    salon: "Gentlemen Cut & Care",
    time: "14:00 WIB",
    courier: "Budi Santoso",
    status: "Menunggu",
    route: "Rute 3 - Gading Cempaka",
    weightEst: "4.1 kg"
  },
  {
    id: "PKP-104",
    salon: "BarberStudio 88",
    time: "16:00 WIB",
    courier: "Budi Santoso",
    status: "Selesai",
    route: "Rute 1 - Ratu Samban",
    weightEst: "3.2 kg"
  }
];

export const BATCH_LIST = [
  {
    id: "KP-2026-001",
    prodDate: "2026-07-15",
    salons: ["BarberStudio 88", "Glow & Beauty Salon"],
    pickupDate: "2026-07-12",
    sanitationStatus: "Lulus Uji Sterilisasi (Autoclave 121°C)",
    prodStatus: "Selesai Diproduksi",
    distStatus: "Tersalurkan ke Petani",
    farmer: "Kelompok Tani Hidroponik Hijau Mandiri (Pak Supri)",
    unitsProduced: 25,
    hairWeightUsed: "4.2 kg",
    currentStageIndex: 6, // 6 = Batch Siap
    stages: [
      { name: "Sortasi", status: "Completed", date: "2026-07-12", note: "Pemisahan kontaminan fisik (plastik/karet)" },
      { name: "Pencucian", status: "Completed", date: "2026-07-13", note: "Degreasing & pembilasan surfaktan bio" },
      { name: "Sanitasi", status: "Completed", date: "2026-07-13", note: "Termal Autoclave 121°C 30 menit" },
      { name: "Pencampuran", status: "Completed", date: "2026-07-14", note: "Pencampuran perekat biomaterial alami" },
      { name: "Pencetakan", status: "Completed", date: "2026-07-14", note: "Pressing cetakan mat 15x15 cm" },
      { name: "Pengeringan", status: "Completed", date: "2026-07-15", note: "Dehidrasi oven suhu rendah 60°C" },
      { name: "Batch Siap", status: "Completed", date: "2026-07-15", note: "Packaging & Sertifikasi QR Traceability" }
    ]
  },
  {
    id: "KP-2026-002",
    prodDate: "2026-07-22",
    salons: ["Gentlemen Cut & Care", "Kingsman Barbershop"],
    pickupDate: "2026-07-20",
    sanitationStatus: "Lulus Uji Sterilisasi (Autoclave 121°C)",
    prodStatus: "Selesai Diproduksi",
    distStatus: "Siap di Marketplace",
    farmer: "Stok Central KeraHub",
    unitsProduced: 30,
    hairWeightUsed: "5.5 kg",
    currentStageIndex: 6,
    stages: [
      { name: "Sortasi", status: "Completed", date: "2026-07-20", note: "Quality Control Serat Keratin" },
      { name: "Pencucian", status: "Completed", date: "2026-07-21", note: "Pembersihan minyak alami" },
      { name: "Sanitasi", status: "Completed", date: "2026-07-21", note: "Sanitasi Bebas Patogen" },
      { name: "Pencampuran", status: "Completed", date: "2026-07-22", note: "Formulasi KeraPad Medium" },
      { name: "Pencetakan", status: "Completed", date: "2026-07-22", note: "Molding Process" },
      { name: "Pengeringan", status: "Completed", date: "2026-07-22", note: "Curing Phase" },
      { name: "Batch Siap", status: "Completed", date: "2026-07-22", note: "Ready for Distribution" }
    ]
  },
  {
    id: "KP-2026-018",
    prodDate: "2026-07-29",
    salons: ["BarberStudio 88", "Chic Hair & Spa"],
    pickupDate: "2026-07-28",
    sanitationStatus: "Sedang Berjalan",
    prodStatus: "Dalam Proses Pengolahan",
    distStatus: "Belum Didistribusikan",
    farmer: "-",
    unitsProduced: 20,
    hairWeightUsed: "3.5 kg",
    currentStageIndex: 3, // Pencampuran
    stages: [
      { name: "Sortasi", status: "Completed", date: "2026-07-28", note: "Sorting berhasil" },
      { name: "Pencucian", status: "Completed", date: "2026-07-28", note: "Pencucian bersih" },
      { name: "Sanitasi", status: "Completed", date: "2026-07-29", note: "Sanitasi Autoclave OK" },
      { name: "Pencampuran", status: "Processing", date: "2026-07-29", note: "Pengadukan bio-binder" },
      { name: "Pencetakan", status: "Waiting", date: "-", note: "Antrean Mold" },
      { name: "Pengeringan", status: "Waiting", date: "-", note: "Antrean Oven" },
      { name: "Batch Siap", status: "Waiting", date: "-", note: "Pending QC" }
    ]
  }
];

export const PRODUCTS = [
  {
    id: "PRD-01",
    name: "KeraPad Small",
    size: "5 cm x 5 cm x 3 cm (Kubus Netpot)",
    price: 3500,
    stock: 250,
    status: "Tersedia",
    tag: "Terlaris untuk Penyemaian",
    composition: "90% Serat Keratin Rambut Tersterilisasi + 10% Bio-Binder Organik",
    advantages: [
      "Mengandung serat keratin alami kaya Asam Amino",
      "Potensi slow-release nitrogen hingga 45 hari",
      "Aerasi & retensi air lebih optimal dibanding rockwool",
      "Lebih ramah lingkungan & 100% Biodegradable",
      "Mendukung ekonomi sirkular lokal"
    ],
    specs: {
      density: "0.12 g/cm³",
      ph: "6.2 - 6.8 (Netral Ideal)",
      waterRetention: "450%",
      durability: "3 - 6 Bulan di Sistem Hidroponik",
      recyclability: "Dapat dijadikan pupuk kompos pasca pakai"
    }
  },
  {
    id: "PRD-02",
    name: "KeraPad Medium",
    size: "15 cm x 15 cm x 5 cm (Mat Lembaran)",
    price: 12000,
    stock: 180,
    status: "Tersedia",
    tag: "Favorit Sayuran Daun",
    composition: "88% Serat Keratin Rambut Tersterilisasi + 12% Bio-Binder Organik",
    advantages: [
      "Kapasitas simpan nutrisi tinggi",
      "Pencegahan pembusukan akar akibat akumulasi airberlebih",
      "Meringankan bobot instalasi hidroponik",
      "Zero Microplastic Contamination"
    ],
    specs: {
      density: "0.15 g/cm³",
      ph: "6.5 - 6.8",
      waterRetention: "500%",
      durability: "6 Bulan",
      recyclability: "Compostable"
    }
  },
  {
    id: "PRD-03",
    name: "KeraPad Large",
    size: "100 cm x 15 cm x 7.5 cm (Slab NFT/NFT Pipe)",
    price: 48000,
    stock: 65,
    status: "Stok Terbatas",
    tag: "Skala Komersial Hidroponik",
    composition: "85% Serat Keratin Rambut + 15% Bio-Matrix Organik",
    advantages: [
      "Substitusi total Slab Rockwool Impor",
      "Pertumbuhan perakaran 22% lebih cepat berdasarkan uji riset",
      "Daya tahan struktur stabil tidak mudah rapuh"
    ],
    specs: {
      density: "0.18 g/cm³",
      ph: "6.4 - 6.7",
      waterRetention: "520%",
      durability: "6 - 8 Bulan",
      recyclability: "Compostable & Soil Conditioner"
    }
  }
];

export const WASTE_CHART_DATA = [
  { week: "M01", volume: 4.2, batch: 2, co2: 68 },
  { week: "M02", volume: 5.8, batch: 3, co2: 94 },
  { week: "M03", volume: 6.5, batch: 4, co2: 105 },
  { week: "M04", volume: 8.1, batch: 5, co2: 131 },
  { week: "M05", volume: 5.4, batch: 4, co2: 88 },
  { week: "M06", volume: 30.0, batch: 18, co2: 486 }
];

export const WASTE_PIE_DATA = [
  { name: "Barbershop", value: 55, color: "#2E7D32" },
  { name: "Beauty Salon", value: 35, color: "#81C784" },
  { name: "Hair Studio & Spa", value: 10, color: "#10B981" }
];

export const SDGS_LIST = [
  {
    code: "SDG 8",
    title: "Pekerjaan Layak & Pertumbuhan Ekonomi",
    description: "Menciptakan nilai ekonomi baru dari limbah salon dan pemberdayaan kurir pengumpul lokal."
  },
  {
    code: "SDG 11",
    title: "Kota & Komunitas yang Berkelanjutan",
    description: "Mendukung ketahanan pangan perkotaan melalui pertanian hidroponik berbasis biomaterial daur ulang."
  },
  {
    code: "SDG 12",
    title: "Konsumsi & Produksi yang Bertanggung Jawab",
    description: "Menerapkan rantai pasok sirkular penuh dengan menggantikan rockwool berbahan baku fosil/mineral."
  },
  {
    code: "SDG 13",
    title: "Penanganan Perubahan Iklim",
    description: "Mereduksi emisi gas rumah kaca dari pembakaran/dekomposisi anaerob limbah rambut di TPA."
  },
  {
    code: "SDG 17",
    title: "Kemitraan untuk Mencapai Tujuan",
    description: "Menghubungkan multi-stakeholder: Usaha Salon, Logistik Digital, KeraHub, dan Komunitas Petani Perkotaan."
  }
];

export const TEAM_MEMBERS = [
  { name: "Tim Penelitian KeraLoop", role: "Pengembang Utama & Peneliti Biomaterial", org: "Universitas Bengkulu / Mahasiswa INSTINCT" },
  { name: "KeraHub Operations", role: "Manajemen Fasilitas & Quality Control", org: "Ekosistem Digital Keraloop" }
];
