import React from 'react';
import { Search, Bell, Settings, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';

export default function Header() {
  const { profile } = useAuth();

  return (
    <header className="h-20 bg-white/40 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
      {/* Left Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1565C0] transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search tenders, materials, or sites..." 
            className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:bg-white focus:ring-4 focus:ring-[#42A5F5]/10 transition-all outline-none shadow-inner"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 ml-8">
        <div className="flex items-center gap-2 pr-6 border-r border-gray-100">
           <button className="p-3 text-gray-400 hover:text-[#0A4D8C] hover:bg-gray-100/50 rounded-xl transition-all relative">
             <Bell size={20} />
             <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
           </button>
           <button className="p-3 text-gray-400 hover:text-[#0A4D8C] hover:bg-gray-100/50 rounded-xl transition-all">
             <Settings size={20} />
           </button>
        </div>

        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="text-right hidden sm:block overflow-hidden max-w-[150px]">
            <p className="text-sm font-bold text-gray-900 leading-none mb-1 truncate">{profile?.displayName || 'Builder Pro'}</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{profile?.role || 'Senior Architect'}</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A4D8C] to-[#42A5F5] p-0.5 shadow-lg group-hover:shadow-[#42A5F5]/20 transition-all"
          >
            <div className="w-full h-full rounded-[14px] bg-white overflow-hidden p-0.5">
               {profile?.photoURL ? (
                 <img src={profile.photoURL} alt="Avatar" className="w-full h-full object-cover rounded-[12px]" />
               ) : (
                 <div className="w-full h-full rounded-[12px] bg-gray-50 flex items-center justify-center">
                   <User className="text-gray-400" size={20} />
                 </div>
               )}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
