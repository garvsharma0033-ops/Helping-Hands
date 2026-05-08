import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Hammer, User, LogOut, Menu, X, ShoppingBag, Briefcase, Home, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { user, profile, signOut } = useAuth();
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);


  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass-card rounded-[32px] px-8 py-4 flex items-center justify-between border border-white/20 shadow-premium">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="bg-[#0A4D8C] p-2.5 rounded-xl text-white group-hover:rotate-6 transition-all shadow-lg active:scale-95">
            <Hammer size={24} />
          </div>
          <span className="font-bold text-2xl tracking-tighter text-[#0A4D8C] hidden sm:block">Helping Hands</span>
        </Link>


        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="hidden md:block text-sm font-bold text-[#0A4D8C] hover:text-[#1565C0] transition-colors">Go to App</Link>
              <div className="relative group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0A4D8C] to-[#42A5F5] p-0.5 cursor-pointer shadow-lg"
                >
                  <div className="w-full h-full rounded-[14px] bg-white overflow-hidden p-0.5">
                    {profile?.photoURL ? (
                      <img src={profile.photoURL} alt="Avatar" className="w-full h-full object-cover rounded-[12px]" />
                    ) : (
                      <div className="w-full h-full rounded-[12px] bg-gray-50 flex items-center justify-center">
                        <User className="text-gray-400" size={18} />
                      </div>
                    )}
                  </div>
                </motion.div>
                
                {/* Profile Dropdown */}
                <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-3xl shadow-premium border border-gray-100 p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50">
                   <div className="px-4 py-2 border-b border-gray-50 mb-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">User Console</p>
                        <p className="text-sm font-bold text-gray-900 truncate">{profile?.displayName || 'Builder'}</p>
                    </div>
                  <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-2xl transition-colors">
                    <Home size={18} />
                    Dashboard
                  </Link>
                  <button onClick={() => signOut()} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-2xl transition-colors">
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sm font-bold text-gray-500 hover:text-[#0A4D8C] transition-colors hidden sm:block">Login</Link>
              <Link to="/login" className="bg-[#0A4D8C] text-white px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#1565C0] transition-all shadow-lg shadow-[#0A4D8C]/20 hover:scale-105 active:scale-95">
                Launch Platform
              </Link>
            </div>
          )}
          
          <button 
            onClick={() => setIsSideDrawerOpen(true)}
            className="lg:hidden p-2 text-gray-400 hover:text-[#0A4D8C] transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Side Drawer Mobile Overlay */}
      <AnimatePresence>
        {isSideDrawerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSideDrawerOpen(false)}
              className="fixed inset-0 bg-[#0A4D8C]/20 backdrop-blur-md z-[-1]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-[100vh] w-[280px] bg-white shadow-2xl p-8 flex flex-col z-50"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Menu</span>
                <button onClick={() => setIsSideDrawerOpen(false)} className="p-2 text-gray-400 hover:text-[#0A4D8C]">
                  <X size={24} />
                </button>
              </div>


              <div className="mt-auto py-8 border-t border-gray-100">
                <Link to="/login" onClick={() => setIsSideDrawerOpen(false)} className="w-full flex items-center justify-center p-4 bg-[#0A4D8C] text-white rounded-2xl font-bold">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
