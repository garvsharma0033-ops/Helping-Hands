import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  MapPin, 
  Users, 
  Search, 
  Map as MapIcon, 
  Plus, 
  Clock, 
  Landmark, 
  Heart,
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';

const mockJobs = [
  { id: 1, title: 'Senior Site Engineer', company: 'BuildRight Construction', location: 'Dubai, UAE', salary: 'AED 15,000 - 20,000', type: 'Full-time', experience: '5-8 years', posted: '2 days ago', verified: true },
  { id: 2, title: 'Heavy Machine Operator', company: 'Global Foundation Ltd.', location: 'London, UK', salary: '£3,000 - 4,500', type: 'Contract', experience: '3-5 years', posted: '5 hours ago', verified: true },
  { id: 3, title: 'Safety Compliance Officer', company: 'SafetyFirst Structures', location: 'Singapore', salary: 'SGD 5,500 - 7,000', type: 'Full-time', experience: '4-6 years', posted: '1 day ago', verified: false },
  { id: 4, title: 'Architectural Consultant', company: 'Modern Living Designs', location: 'New York, USA', salary: '$8,000 - 12,000', type: 'Remote / Freelance', experience: '10+ years', posted: '3 days ago', verified: true },
  { id: 5, title: 'Electrician (Commercial)', company: 'PowerGrid Solutions', location: 'Mumbai, India', salary: '₹40,000 - 60,000', type: 'Full-time', experience: '2-4 years', posted: '6 hours ago', verified: true },
];

export default function JobPortal() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-20">
      {/* Search Header */}
      <div className="glass-card p-12 rounded-[56px] relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#42A5F5]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-3 mb-6">
             <span className="px-3 py-1 bg-[#1565C0] text-white text-[10px] font-black uppercase tracking-widest rounded-full">Recruitment Engine</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A4D8C] mb-4 tracking-tight font-display leading-[1.1]">
            Build Your <span className="text-[#42A5F5]">Legacy.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg max-w-xl">
            Connecting enterprise projects with the world's most elite construction specialists.
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div className="relative flex-1 sm:w-80 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1565C0] transition-colors" size={24} />
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Query skills or roles..." 
              className="w-full bg-white/50 border border-transparent rounded-[24px] py-6 pl-16 pr-8 text-lg font-medium outline-none focus:bg-white focus:border-[#42A5F5]/30 focus:ring-8 focus:ring-[#42A5F5]/5 transition-all shadow-inner"
            />
          </div>
          <button className="bg-[#0A4D8C] text-white px-10 py-6 rounded-[24px] font-black text-[10px] uppercase tracking-widest hover:bg-[#1565C0] shadow-premium transition-all active:scale-95 flex items-center justify-center gap-3">
            <Plus size={24} />
            Launch Tender
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Job Listings */}
        <div className="xl:col-span-2 space-y-8">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-xl font-black text-[#0A4D8C] font-display uppercase tracking-widest">Global Opportunities</h3>
            <div className="flex gap-4">
               <button className="flex items-center gap-3 text-[10px] font-black text-gray-400 hover:text-[#42A5F5] uppercase tracking-widest">
                 <Landmark size={18} />
                 Market Filters
               </button>
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card p-10 rounded-[48px] border border-white/50 shadow-premium hover:scale-[1.01] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#42A5F5]/5 rounded-full blur-[40px] translate-x-12 -translate-y-12" />
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                  <div className="flex items-start gap-8 flex-1">
                    <div className="w-24 h-24 bg-white shadow-xl rounded-[32px] flex items-center justify-center shrink-0 border border-gray-50 group-hover:scale-110 transition-transform text-[#0A4D8C] group-hover:bg-[#0A4D8C] group-hover:text-white">
                      <Briefcase size={36} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                         <div className="text-[10px] font-black text-[#42A5F5] uppercase tracking-[0.2em]">{job.company}</div>
                         {job.verified && <ShieldCheck size={16} className="text-[#42A5F5]" />}
                      </div>
                      <h4 className="text-2xl font-black text-gray-900 group-hover:text-[#0A4D8C] transition-colors font-display">{job.title}</h4>
                      
                      <div className="flex flex-wrap items-center gap-3 mt-6">
                        {[
                          { icon: <MapPin size={14} />, text: job.location },
                          { icon: <Clock size={14} />, text: job.posted },
                          { icon: <Star size={14} />, text: job.experience }
                        ].map((tag, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[10px] font-black text-gray-400 bg-white/40 px-4 py-2 rounded-xl uppercase tracking-widest border border-white">
                             <span className="text-[#42A5F5]">{tag.icon}</span>
                             {tag.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col items-end justify-between lg:justify-center gap-6 lg:pl-10 lg:border-l border-gray-100 min-w-[200px]">
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Contract Value</div>
                      <div className="text-2xl font-black text-[#0A4D8C] font-display">{job.salary}</div>
                    </div>
                    <button className="bg-[#0A4D8C] text-white px-10 py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest hover:bg-[#1565C0] shadow-xl shadow-[#0A4D8C]/20 transition-all flex items-center gap-3 group/btn">
                      Secure Role
                      <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-10">
          <div className="bg-[#0A4D8C] rounded-[56px] p-10 text-white relative overflow-hidden shadow-premium group">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
               <div className="w-16 h-16 bg-[#42A5F5]/20 rounded-3xl flex items-center justify-center mb-8">
                  <Users size={32} className="text-[#42A5F5]" />
               </div>
               <h3 className="text-2xl font-black mb-6 font-display">Talent Acquisition</h3>
               <p className="text-blue-100/70 font-medium leading-relaxed mb-10">
                 Identify high-performance teams with our AI-driven competency mapping system.
               </p>
               <button className="w-full bg-white text-[#0A4D8C] py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest hover:bg-[#42A5F5] hover:text-white transition-all shadow-xl">
                 Access Recruiter Core
               </button>
            </div>
          </div>

          <div className="glass-card rounded-[48px] p-10 border border-white/50 shadow-premium">
            <h3 className="text-xl font-black text-[#0A4D8C] font-display mb-8 uppercase tracking-widest">Market Demand</h3>
            <div className="space-y-4">
              {['Project Mgmt', 'BIM Architecture', 'Site Logistics', 'Sustainability', 'Heavy Machinery', 'Strategic Sourcing'].map(skill => (
                <div key={skill} className="flex justify-between items-center group cursor-pointer">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#42A5F5] group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors uppercase tracking-widest">{skill}</span>
                   </div>
                   <span className="text-[10px] font-black text-gray-300 font-mono">HIGH</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
