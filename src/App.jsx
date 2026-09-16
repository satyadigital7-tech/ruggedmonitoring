import React, { useState } from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RmEyeModulesBento from './components/RmEyeModulesBento';
import StatsStrip from './components/StatsStrip';
import AssetEcosystemExplorer from './components/AssetEcosystemExplorer';
import SensorsHardware from './components/SensorsHardware';
import RmEyePlatformDashboard from './components/RmEyePlatformDashboard';
import ArchitecturePipeline from './components/ArchitecturePipeline';
import RoiCalculator from './components/RoiCalculator';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => setIsDemoModalOpen(true);
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-[#0284C7] selection:text-white relative">
      <BackgroundParticles />
      <TopUtilityBar />
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      <main>
        <HeroSection onOpenDemoModal={handleOpenDemoModal} />
        <RmEyeModulesBento onOpenDemoModal={handleOpenDemoModal} />
        <StatsStrip />
        <AssetEcosystemExplorer onOpenDemoModal={handleOpenDemoModal} />
        <SensorsHardware onOpenDemoModal={handleOpenDemoModal} />
        <RmEyePlatformDashboard onOpenDemoModal={handleOpenDemoModal} />
        <ArchitecturePipeline />
        <RoiCalculator onOpenDemoModal={handleOpenDemoModal} />
        <Testimonials />
        <CtaBanner onOpenDemoModal={handleOpenDemoModal} />
      </main>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}
