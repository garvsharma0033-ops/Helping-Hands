import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Search, 
  Filter, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Share2, 
  ChevronRight,
  TrendingUp,
  Landmark,
  Camera
} from 'lucide-react';

const mockProperties = [
  { id: 1, title: 'Quantum Skyline Residencies', type: 'Buy', category: 'Residential', price: 1200000, location: 'Business Bay, Dubai', beds: 3, baths: 4, sqft: 2400, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600', featured: true },
  { id: 2, title: 'The Pavilion Commercial Hub', type: 'Rent', category: 'Commercial', price: 15000, location: 'Canary Wharf, London', beds: 0, baths: 2, sqft: 5000, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600', featured: false },
  { id: 3, title: 'Eco-Vista Family Loft', type: 'Buy', category: 'Residential', price: 850000, location: 'Sunnyvale, CA, USA', beds: 4, baths: 3, sqft: 1800, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600', featured: true },
  { id: 4, title: 'Industrial Warehouse Alpha', type: 'Rent', category: 'Industrial', price: 25000, location: 'Tuas, Singapore', beds: 0, baths: 1, sqft: 12000, image: 'https://images.unsplash.com/photo-1586528116311-ad868a183577?q=80&w=600', featured: false },
  { id: 5, title: 'Zenith Parkside Terrace', type: 'Buy', category: 'Residential', price: 2100000, location: 'South Kensington, London', beds: 5, baths: 5, sqft: 3200, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600', featured: true },
];

export default function RealEstate() {
  const [filter, setFilter] = useState('All');
  const [activeType, setActiveType] = useState('Buy');

  const filtered = mockProperties.filter(p => 
    (filter === 'All' || p.category === filter) &&
    (p.type === activeType)
  );

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-[64px] overflow-hidden group shadow-premium">
        <img 
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
          alt="Real Estate"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D8C] via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="absolute bottom-12 left-12 right-12 flex flex-col lg:flex-row justify-between items-end gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
               <span className="px-3 py-1 bg-[#42A5F5] text-[#0A4D8C] text-[10px] font-black uppercase tracking-widest rounded-full">Global Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter font-display leading-[0.9]">
              High-Yield <br /> <span className="text-[#42A5F5]">Real Assets.</span>
            </h1>
            <div className="flex bg-white/10 backdrop-blur-2xl p-2 rounded-3xl w-fit border border-white/20">
              {['Buy', 'Rent'].map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                    activeType === type ? 'bg-white text-[#0A4D8C] shadow-xl' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-[40px] border border-white/20 hidden xl:block shadow-2xl">
            <div className="flex items-center gap-2 text-[#42A5F5] font-black text-[10px] uppercase tracking-widest mb-3">
              <TrendingUpModern size={16} /> Market Intelligence
            </div>
            <div className="text-3xl font-black text-white font-display">+12.4% <span className="text-xs font-bold text-blue-200 block uppercase tracking-widest mt-1">Annual Alpha</span></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-12">
        {/* Filters Sidebar */}
        <div className="xl:w-96 space-y-10">
           <div className="glass-card p-10 rounded-[48px] border border-white/50 shadow-premium">
             <h3 className="text-xl font-black text-[#0A4D8C] font-display mb-10 uppercase tracking-widest">Global Filter</h3>
             <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4">Coordinate Search</label>
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1565C0] transition-colors" size={20} />
                    <input className="w-full bg-gray-50/50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold placeholder:text-gray-300 outline-none focus:bg-white focus:ring-4 focus:ring-[#42A5F5]/5 transition-all" placeholder="City, Project, or Developer..." />
                  </div>
                </div>
                
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4">Asset Class</label>
                  <div className="flex flex-col gap-2">
                    {['All', 'Residential', 'Commercial', 'Industrial', 'Land'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`text-left px-5 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex justify-between items-center ${
                          filter === cat ? 'bg-[#0A4D8C] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        {cat}
                        {filter === cat && <ChevronRight size={16} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-[#0A4D8C] text-white py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest hover:bg-[#1565C0] shadow-premium transition-all">
                    Execute Query
                  </button>
                </div>
             </div>
           </div>

           <div className="bg-[#1565C0] p-10 rounded-[56px] text-white relative overflow-hidden group shadow-premium">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
             <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
               <Camera size={32} className="text-[#42A5F5]" />
             </div>
             <h4 className="text-2xl font-black mb-4 font-display">Neural Walkthrough</h4>
             <p className="text-blue-100/70 text-sm mb-10 leading-relaxed font-medium">
               Simulate presence in high-value assets with our AI-rendered immersive experiences.
             </p>
             <button className="bg-white/20 backdrop-blur-md w-full py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/30 transition-all">
               Initialize VR Core
             </button>
           </div>
        </div>

        {/* Listings Grid */}
        <div className="flex-1 space-y-12">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-2xl font-black text-[#0A4D8C] font-display uppercase tracking-widest">Active Assets ({filtered.length})</h2>
            <div className="flex gap-3">
               <button className="p-3 bg-white rounded-2xl text-gray-400 hover:text-[#0A4D8C] shadow-sm border border-gray-50 transition-all">
                 <Filter size={20} />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-[48px] overflow-hidden border border-white/50 shadow-premium group transition-all hover:scale-[1.02]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.title} />
                  {p.featured && (
                    <div className="absolute top-8 left-8 bg-[#0A4D8C] text-white px-5 py-2 rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] shadow-2xl">
                      Ultra High Net Worth
                    </div>
                  )}
                  <button className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl p-3.5 rounded-2xl text-gray-400 hover:text-red-500 transition-all shadow-premium">
                    <Heart size={24} />
                  </button>
                  <div className="absolute bottom-8 right-8 bg-[#42A5F5] px-6 py-3 rounded-2xl text-[#0A4D8C] font-black text-xl font-display shadow-premium">
                    ${p.price.toLocaleString()}
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="text-[10px] font-black text-[#42A5F5] uppercase tracking-[0.2em]">{p.category}</div>
                     <div className="h-1 w-1 rounded-full bg-gray-300" />
                     <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.type === 'Buy' ? 'Acquisition' : 'Leasehold'}</div>
                  </div>
                  <h3 className="text-2xl font-black text-[#0A4D8C] mb-4 group-hover:text-[#42A5F5] transition-colors font-display tracking-tight">{p.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-8">
                    <MapPin size={16} className="text-[#42A5F5]" />
                    {p.location}
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-50 pt-8 mt-auto">
                    <div className="flex items-center gap-6">
                      {[
                        { icon: <Bed size={18} />, val: p.beds || '-' },
                        { icon: <Bath size={18} />, val: p.baths || '-' },
                        { icon: <Square size={16} />, val: p.sqft.toLocaleString() }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 group/icon">
                           <div className="text-gray-300 group-hover/icon:text-[#42A5F5] transition-colors">{item.icon}</div>
                           <span className="text-sm font-black text-[#0A4D8C]">{item.val}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-12 h-12 bg-gray-50 items-center justify-center rounded-2xl text-[#0A4D8C] hover:bg-[#0A4D8C] hover:text-white transition-all hidden sm:flex shadow-sm">
                       <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendingUpModern({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
