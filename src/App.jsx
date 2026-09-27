import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Toast from './components/Toast';
import SalonModal from './components/Modals/SalonModal';
import ProductModal from './components/Modals/ProductModal';
import CertificateModal from './components/Modals/CertificateModal';
import LoginModal from './components/Modals/LoginModal';

// Pages
import LandingPage from './pages/LandingPage';
import DashboardHome from './pages/DashboardHome';
import SalonMitraPage from './pages/SalonMitraPage';
import PenjadwalanPage from './pages/PenjadwalanPage';
import SupplyMappingPage from './pages/SupplyMappingPage';
import PengolahanPage from './pages/PengolahanPage';
import TraceabilityPage from './pages/TraceabilityPage';
import MarketplacePage from './pages/MarketplacePage';
import StatistikPage from './pages/StatistikPage';
import TentangPage from './pages/TentangPage';

export default function App() {
  // Navigation & Authentication State
  const [currentView, setCurrentView] = useState('landing'); // Initial view is Landing Page
  const [dashboardTab, setDashboardTab] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Modals & Toast State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeSalonModal, setActiveSalonModal] = useState(null);
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [activeCertificateModal, setActiveCertificateModal] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    setIsLoginModalOpen(false);
    setCurrentView('dashboard');
    showToast(`Selamat datang kembali, ${user.name}! Access Granted.`, 'success');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentView('landing');
    showToast('Anda telah keluar dari sistem KeraHub.', 'info');
  };

  const handleNavigate = (view, tab = 'home') => {
    if (view === 'dashboard' && !isAuthenticated) {
      setIsLoginModalOpen(true);
      showToast('Harap login terlebih dahulu untuk mengakses Dashboard.', 'warning');
      return;
    }

    setCurrentView(view);
    if (tab) setDashboardTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSalonModal = (salon) => {
    setActiveSalonModal(salon);
  };

  const handleOpenProductModal = (product) => {
    setActiveProductModal(product);
  };

  const handleOpenCertificateModal = (batch) => {
    setActiveCertificateModal(batch);
  };

  const handleSchedulePickupFromModal = (salon) => {
    setActiveSalonModal(null);
    setCurrentView('dashboard');
    setDashboardTab('penjemputan');
    showToast(`Penjadwalan pickup untuk ${salon.name} dibuka`, 'info');
  };

  const handleOrderDemoFromModal = (product) => {
    setActiveProductModal(null);
    showToast(`Simulasi permohonan sampel ${product.name} telah dikirim ke KeraHub!`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-100 selection:text-[#2E7D32]">
      
      {/* Navbar Sticky */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        dashboardTab={dashboardTab}
        setDashboardTab={setDashboardTab}
        showToast={showToast}
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        onOpenLoginModal={handleOpenLoginModal}
        onLogout={handleLogout}
      />

      {/* Main View Router */}
      {currentView === 'landing' ? (
        <LandingPage onNavigate={handleNavigate} showToast={showToast} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            
            {/* Sidebar for Dashboard Portal */}
            <Sidebar activeTab={dashboardTab} setActiveTab={setDashboardTab} />

            {/* Dashboard Sub-Page Views */}
            <main className="flex-1 min-w-0 pb-16">
              {dashboardTab === 'home' && <DashboardHome onNavigate={handleNavigate} showToast={showToast} />}
              {dashboardTab === 'salon' && <SalonMitraPage onOpenSalonModal={handleOpenSalonModal} showToast={showToast} />}
              {dashboardTab === 'penjemputan' && <PenjadwalanPage showToast={showToast} />}
              {dashboardTab === 'supply' && <SupplyMappingPage showToast={showToast} />}
              {dashboardTab === 'pengolahan' && <PengolahanPage showToast={showToast} />}
              {dashboardTab === 'traceability' && (
                <TraceabilityPage
                  showToast={showToast}
                  onOpenCertificateModal={handleOpenCertificateModal}
                />
              )}
              {dashboardTab === 'marketplace' && <MarketplacePage onOpenProductModal={handleOpenProductModal} showToast={showToast} />}
              {dashboardTab === 'statistik' && <StatistikPage />}
              {dashboardTab === 'tentang' && <TentangPage />}
              {dashboardTab === 'profil' && (
                <div className="kera-card p-8 text-center max-w-xl mx-auto space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2E7D32] font-bold text-2xl flex items-center justify-center mx-auto">
                    {currentUser?.name ? currentUser.name.substring(0, 2).toUpperCase() : 'KH'}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{currentUser?.name || 'Profil Admin KeraHub'}</h2>
                  <p className="text-xs text-slate-500">
                    Fasilitas Pengolahan & Terminal Big Data Sirkular KeraPad Node 01.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Pengguna:</span>
                      <span className="font-bold text-slate-800">{currentUser?.email || 'admin@kerahub.id'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Node ID:</span>
                      <span className="font-bold text-slate-800 font-mono">HUB-BGL-01</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Mitra Salon Terhubung:</span>
                      <span className="font-bold text-[#2E7D32]">20 Salon</span>
                    </div>
                  </div>
                </div>
              )}
            </main>

          </div>
        </div>
      )}

      {/* Global Modals & Toast Alerts */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <SalonModal
        salon={activeSalonModal}
        onClose={() => setActiveSalonModal(null)}
        onSchedulePickup={handleSchedulePickupFromModal}
      />

      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onOrderDemo={handleOrderDemoFromModal}
      />

      <CertificateModal
        batch={activeCertificateModal}
        onClose={() => setActiveCertificateModal(null)}
        onPrintToast={(msg) => showToast(msg, 'success')}
      />

      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
