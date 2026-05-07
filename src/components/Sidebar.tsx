import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Briefcase, 
  Home, 
  Bot, 
  ChevronLeft, 
  ChevronRight,
  Hammer,
  Settings,
  Bell,
  Search,
  User,
  LogOut,
  LayoutDashboard
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const location = useLocation();
  const { signOut } = useAuth();
  
  const navLinks = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard size={22} /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingBag size={22} /> },
    { name: 'Job Portal', path: '/jobs', icon: <Briefcase size={22} /> },
    { name: 'Real Estate', path: '/real-estate', icon: <Home size={22} /> },
    { name: 'AI Assistant', path: '/assistant', icon: <Bot size={22} /> },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className="glass-sidebar h-screen flex flex-col transition-all duration-300 relative z-50 overflow-hidden"
    >
      {/* Brand */}
      <div className="h-20 flex items-center px-6 gap-3 mb-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-[#42A5F5] p-2 rounded-xl text-[#0A4D8C] shadow-lg shadow-[#42A5F5]/20 shrink-0">
             <Hammer size={24} />
          </div>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-lg tracking-tighter text-white"
            >
              Helping Hands
            </motion.span>
          )}
        </Link>
      </div>

      {/* Nav Section */}
      <nav className="flex-1 px-4 space-y-2 py-4">
        <p className={`text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4 px-2 ${isCollapsed ? 'hidden' : 'block'}`}>
          Main Console
        </p>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-4 p-3.5 rounded-2xl transition-all group relative ${
                isActive 
                ? 'bg-white/10 text-[#42A5F5] shadow-inner' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                {link.icon}
              </div>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-bold text-sm tracking-tight"
                >
                  {link.name}
                </motion.span>
              )}
              {isActive && isCollapsed && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#42A5F5] rounded-l-full shadow-glow" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 space-y-2 border-t border-white/5">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center gap-4 p-3.5 rounded-2xl text-white/60 hover:text-white hover:bg-white/5 transition-all mb-4 group"
        >
          {isCollapsed ? <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" /> : <ChevronLeft size={22} className="group-hover:-translate-x-1 transition-transform" />}
          {!isCollapsed && <span className="font-bold text-sm">Collapse Sidebar</span>}
        </button>

        <button 
          onClick={() => signOut()}
          className="w-full flex items-center gap-4 p-3.5 rounded-2xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all font-bold group"
        >
          <LogOut size={22} className="shrink-0 group-hover:rotate-12 transition-transform" />
          {!isCollapsed && <span className="text-sm">Sign Out System</span>}
        </button>
      </div>
    </motion.aside>
  );
}
