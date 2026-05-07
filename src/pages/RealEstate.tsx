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
    <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-12">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-[56px] overflow-hidden group shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
          alt="Real Estate"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D8C] via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Discover <span className="text-[#42A5F5]">Premium</span> Living</h1>
            <div className="flex bg-white/20 backdrop-blur-xl p-2 rounded-full w-fit gap-2">
              {['Buy', 'Rent'].map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-8 py-3 rounded-full font-bold transition-all ${
                    activeType === type ? 'bg-white text-[#0A4D8C]' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/20 hidden lg:block">
            <div className="flex items-center gap-2 text-[#42A5F5] font-bold text-xs uppercase tracking-widest mb-1">
              <TrendingUp size={14} /> Market Trend
            </div>
            <div className="text-2xl font-bold text-white">+12.4% Annual appreciation</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <div className="lg:w-80 space-y-8">
           <div className="glass-card p-8 rounded-[40px] border border-gray-50 shadow-sm">
             <h3 className="text-xl font-bold text-[#0A4D8C] mb-8">Search Filters</h3>
             <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">Location</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input className="w-full bg-[#F5F7FA] border-none rounded-2xl py-3 pl-10 pr-4 text-sm font-medium" placeholder="City, Area, Project..." />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">Property Type</label>
                  <div className="flex flex-col gap-2">
                    {['All', 'Residential', 'Commercial', 'Industrial', 'Land'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex justify-between items-center ${
                          filter === cat ? 'bg-[#42A5F5]/10 text-[#0A4D8C]' : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {cat}
                        {filter === cat && <ChevronRight size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-[#0A4D8C] text-white py-4 rounded-2xl font-bold hover:bg-[#1565C0] shadow-lg shadow-[#0A4D8C]/20 transition-all">
                    Apply Filters
                  </button>
                </div>
             </div>
           </div>

           <div className="bg-[#1565C0] p-8 rounded-[40px] text-white relative overflow-hidden group shadow-xl">
             <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
             <Camera size={32} className="mb-6 opacity-80" />
             <h4 className="text-xl font-bold mb-4">Virtual Showcase</h4>
             <p className="text-blue-100 text-sm mb-8 leading-relaxed opacity-90">
               Experience properties in immersive 3D with our AI-powered virtual walkthroughs.
             </p>
             <button className="bg-white/20 backdrop-blur-sm w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/30 transition-all">
               Explore Virtual Tours
             </button>
           </div>
        </div>

        {/* Listings Grid */}
        <div className="flex-1 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#0A4D8C]">Premium Listings ({filtered.length})</h2>
            <div className="flex gap-2">
               <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-400">
                 <Filter size={18} />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-[40px] overflow-hidden border border-gray-50 shadow-sm hover:shadow-2xl group transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                  {p.featured && (
                    <div className="absolute top-6 left-6 bg-[#0A4D8C] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                      Featured
                    </div>
                  )}
                  <button className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl text-gray-400 hover:text-red-500 transition-colors shadow-lg">
                    <Heart size={20} />
                  </button>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[#0A4D8C] font-bold shadow-xl">
                    ${p.price.toLocaleString()}
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-[10px] font-bold text-[#42A5F5] uppercase tracking-widest mb-1">{p.category} • {p.type === 'Buy' ? 'For Sale' : 'To Rent'}</div>
                  <h3 className="text-2xl font-bold text-[#0A4D8C] mb-3 group-hover:text-[#42A5F5] transition-colors">{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-6">
                    <MapPin size={16} className="text-gray-400" />
                    {p.location}
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                         <Bed size={16} />
                       </div>
                       <span className="text-sm font-bold text-gray-700">{p.beds || '-'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                         <Bath size={16} />
                       </div>
                       <span className="text-sm font-bold text-gray-700">{p.baths || '-'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                         <Square size={16} />
                       </div>
                       <span className="text-sm font-bold text-gray-700">{p.sqft.toLocaleString()}</span>
                    </div>
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
