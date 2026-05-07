import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F5F7FA] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block relative">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Navbar Overlay Toggle */}
        <div className="lg:hidden h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-[#0A4D8C] p-2 rounded-lg text-white">
                <span className="font-bold text-lg">H</span>
             </div>
             <span className="font-bold text-[#0A4D8C]">Helping Hands</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-gray-400 hover:text-[#0A4D8C]"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Global Header (Hidden on Mobile, replaced by navbar toggle) */}
        <div className="hidden lg:block">
           <Header />
        </div>

        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 no-scrollbar blueprint-bg relative">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0A4D8C]/20 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[280px] z-[101]"
            >
               <div className="h-full bg-[#0A4D8C] flex flex-col">
                  <div className="h-20 flex items-center justify-between px-8 border-b border-white/10 shrink-0">
                    <span className="text-white font-bold text-xl uppercase tracking-widest">Navigation</span>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/60">
                      <X size={24} />
                    </button>
                  </div>
                  <Sidebar isCollapsed={false} setIsCollapsed={() => {}} />
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
