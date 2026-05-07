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
    <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
      {/* Search Header */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-[#0A4D8C] mb-4 tracking-tight font-display">Construction <span className="text-[#42A5F5]">Careers</span></h1>
          <p className="text-gray-500 font-medium">Connecting the best talent with industry-leading projects.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 flex-[1.5]">
          <div className="relative flex-1">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search jobs, companies, or skills..."
              className="w-full glass-card border-none rounded-[32px] py-6 pl-16 pr-8 text-lg font-medium shadow-2xl shadow-[#0A4D8C]/5 focus:ring-2 focus:ring-[#42A5F5] transition-all"
            />
          </div>
          <button className="bg-[#0A4D8C] text-white px-10 py-6 rounded-[32px] font-bold hover:bg-[#1565C0] shadow-xl hover:shadow-[#0A4D8C]/20 transition-all active:scale-95 flex items-center justify-center gap-3">
            <Plus size={24} />
            <span>Post a Job</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Job Listings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-lg font-bold text-[#0A4D8C]">Available Positions ({filteredJobs.length})</h3>
            <div className="flex gap-4">
               <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#42A5F5]">
                 <Landmark size={18} />
                 Filters
               </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card p-8 rounded-[40px] border border-gray-50 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#42A5F5]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gray-50 rounded-[28px] flex items-center justify-center border border-gray-100 group-hover:bg-[#0A4D8C] transition-colors group-hover:text-white">
                      <Briefcase size={36} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-2xl font-bold text-gray-900 group-hover:text-[#0A4D8C] transition-colors">{job.title}</h4>
                        {job.verified && <ShieldCheck size={20} className="text-[#42A5F5]" />}
                      </div>
                      <div className="text-gray-500 font-bold text-sm tracking-wide">{job.company}</div>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-6">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-xl uppercase tracking-widest">
                          <MapPin size={14} className="text-[#42A5F5]" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-xl uppercase tracking-widest">
                          <Clock size={14} className="text-[#42A5F5]" />
                          {job.posted}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-xl uppercase tracking-widest">
                          <Star size={14} className="text-[#42A5F5]" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-end justify-between md:justify-center gap-4 text-right pt-4 md:pt-0 border-t md:border-t-0 border-gray-50">
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Budget</div>
                      <div className="text-xl font-bold text-[#0A4D8C]">{job.salary}</div>
                    </div>
                    <button className="bg-[#42A5F5] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#0A4D8C] shadow-lg shadow-[#42A5F5]/20 transition-all flex items-center gap-2">
                      Apply Now
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-[#0A4D8C] rounded-[48px] p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users size={28} className="text-[#42A5F5]" />
              Hire Talent
            </h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              We have over 10,000+ verified workers and contractors ready to start on your next project. Use AI to match skills automatically.
            </p>
            <button className="w-full bg-white text-[#0A4D8C] py-4 rounded-3xl font-bold hover:bg-blue-50 transition-all shadow-xl">
              Launch Recruiter Tool
            </button>
          </div>

          <div className="glass-card rounded-[40px] p-8 border border-gray-50 shadow-sm">
            <h3 className="text-xl font-bold text-[#0A4D8C] mb-6">Trending Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Project Mgmt', 'BIM Modeling', 'Site Engineering', 'Sustainability', 'Machinery Op', 'Concrete Tech', 'HVAC Expert'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-[#F5F7FA] text-gray-600 rounded-2xl text-sm font-bold border border-gray-100 hover:border-[#42A5F5] hover:text-[#42A5F5] cursor-pointer transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
