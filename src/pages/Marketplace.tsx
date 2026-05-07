import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star, 
  CheckCircle, 
  Plus, 
  Package, 
  Hammer, 
  Truck, 
  Construction,
  Layers,
  Pipette,
  ChevronRight
} from 'lucide-react';

const categories = [
  { name: 'All', icon: <Layers size={18} />, count: '4,200+' },
  { name: 'Cement', icon: <Package size={18} />, count: '850' },
  { name: 'Steel', icon: <Hammer size={18} />, count: '1,200' },
  { name: 'Bricks', icon: <Construction size={18} />, count: '2,100' },
  { name: 'Machinery', icon: <Truck size={18} />, count: '150' },
  { name: 'Paint', icon: <Pipette size={18} />, count: '900' },
];

const priceTickers = [
  { material: 'Steel (TMT)', price: '$650', change: '+2.4%', trend: 'up' },
  { material: 'Cement (OPC)', price: '$4.50', change: '-0.8%', trend: 'down' },
  { material: 'River Sand', price: '$120', change: '0.0%', trend: 'stable' },
  { material: 'Red Bricks', price: '$0.08', change: '+1.2%', trend: 'up' },
];

const mockMaterials = [
  { id: 1, name: 'Premium OPC Cement', category: 'Cement', price: 450, unit: 'bag', rating: 4.8, reviews: 124, supplier: 'UltraTech Supplies', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400' },
  { id: 2, name: 'Grade 500D TMT Bars', category: 'Steel', price: 65000, unit: 'ton', rating: 4.9, reviews: 89, supplier: 'Tata Steel Hub', image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=400' },
  { id: 3, name: 'Red Clay Bricks', category: 'Bricks', price: 8, unit: 'piece', rating: 4.5, reviews: 340, supplier: 'Local Bricks Co.', image: 'https://images.unsplash.com/photo-1590069230010-090967527663?q=80&w=400' },
  { id: 4, name: 'Heavy Duty Excavator', category: 'Machinery', price: 5000, unit: 'day', rating: 4.7, reviews: 15, supplier: 'JCB Rentals', image: 'https://images.unsplash.com/photo-1579456223287-2195325881f1?q=80&w=400' },
  { id: 5, name: 'Acrylic Emulsion Paint', category: 'Paint', price: 2100, unit: 'bucket', rating: 4.6, reviews: 56, supplier: 'Asian Paints Store', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=400' },
  { id: 6, name: 'White Sand', category: 'Sand', price: 1200, unit: 'truck', rating: 4.2, reviews: 45, supplier: 'River Sand Sourcing', image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=400' },
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockMaterials.filter(m => 
    (selectedCategory === 'All' || m.category === selectedCategory) &&
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-20">
      {/* Dynamic Price Ticker */}
      <div className="flex bg-[#0A4D8C] h-14 items-center overflow-hidden whitespace-nowrap rounded-[20px] shadow-premium mb-8">
        <div className="bg-[#42A5F5] h-full px-6 flex items-center gap-2 font-black text-[10px] text-[#0A4D8C] uppercase tracking-widest shrink-0 z-10">
           <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
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
           Live Index
        </div>
        <div className="flex gap-12 px-8 animate-infinite-scroll">
          {[...priceTickers, ...priceTickers].map((tick, i) => (
            <div key={i} className="flex items-center gap-4 text-white/90 text-xs font-bold font-mono">
              <span>{tick.material}:</span>
              <span className="text-[#42A5F5]">{tick.price}</span>
              <span className={tick.trend === 'up' ? 'text-emerald-400' : tick.trend === 'down' ? 'text-rose-400' : 'text-gray-400'}>
                {tick.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Search Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-12 rounded-[56px] relative overflow-hidden flex flex-col justify-center min-h-[320px]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#42A5F5]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100">Market Verified</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-black text-[#0A4D8C] mb-8 font-display tracking-tight leading-[1.1]">
               Source Materials at <br /> <span className="text-[#42A5F5]">Manufacturer Rates.</span>
             </h1>
             <div className="relative max-w-xl group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1565C0] transition-colors" size={24} />
                <input 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Query global inventory..." 
                  className="w-full bg-white/50 border border-transparent rounded-[24px] py-6 pl-16 pr-8 text-lg font-medium outline-none focus:bg-white focus:border-[#42A5F5]/30 focus:ring-8 focus:ring-[#42A5F5]/5 transition-all shadow-inner"
                />
             </div>
          </div>
        </div>

        <div className="bg-[#0A4D8C] p-12 rounded-[56px] text-white flex flex-col justify-between shadow-premium relative overflow-hidden group">
           <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
           <div className="relative z-10">
              <ShoppingCart size={40} className="text-[#42A5F5] mb-8" />
              <h3 className="text-2xl font-black mb-4 font-display">Bulk Procurement</h3>
              <p className="text-blue-100/70 font-medium leading-relaxed text-sm mb-10">
                Automated tender system for large-scale orders with guaranteed delivery schedules.
              </p>
           </div>
           <button className="bg-white text-[#0A4D8C] w-full py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#42A5F5] hover:text-white transition-all">
              Initialize RFQ
           </button>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center gap-6 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center gap-4 px-10 py-5 rounded-[32px] font-black whitespace-nowrap transition-all border-2 text-[10px] uppercase tracking-widest ${
              selectedCategory === cat.name 
              ? 'bg-[#0A4D8C] text-white border-[#0A4D8C] shadow-premium scale-105' 
              : 'bg-white/40 text-gray-400 border-white hover:border-[#42A5F5]/30 hover:text-gray-600'
            }`}
          >
            <span className={selectedCategory === cat.name ? 'text-[#42A5F5]' : 'text-gray-300'}>{cat.icon}</span>
            {cat.name}
            <span className={`ml-2 font-mono ${selectedCategory === cat.name ? 'text-white/40' : 'text-gray-300'}`}>[{cat.count}]</span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -12 }}
            className="group glass-card rounded-[48px] overflow-hidden border border-white/50 shadow-premium transition-all duration-500 bg-white/20"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                 <div className="glass-card px-4 py-2 rounded-2xl text-[9px] font-black text-[#0A4D8C] uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl border-white/40">
                    <CheckCircle size={14} className="text-emerald-500" />
                    Verified
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D8C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-10">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <div className="text-[10px] font-black text-[#42A5F5] uppercase tracking-[0.3em] mb-2">{item.category}</div>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-[#0A4D8C] transition-colors leading-tight">{item.name}</h3>
                 </div>
                 <button className="bg-gray-50 text-gray-400 p-4 rounded-2xl hover:bg-[#0A4D8C] hover:text-white transition-all shadow-sm">
                   <ShoppingCart size={20} />
                 </button>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-black text-gray-900">{item.rating}</span>
                </div>
                <div className="h-1 w-1 bg-gray-300 rounded-full" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest truncate">{item.supplier}</p>
              </div>
              
              <div className="flex flex-col gap-6 pt-10 border-t border-gray-100">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Index Price</div>
                    <div className="text-3xl font-black text-[#0A4D8C] tracking-tight">
                      ${item.price.toLocaleString()}
                      <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest ml-2">/{item.unit}</span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                     <TrendingUpModern size={18} />
                  </div>
                </div>
                <button className="w-full bg-[#F5F7FA] text-[#0A4D8C] py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.22em] hover:bg-[#0A4D8C] hover:text-white transition-all">
                  Procurement Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center p-32 bg-white/40 rounded-[56px] border-2 border-dashed border-gray-100 text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-200 mb-8">
            <Layers size={40} />
          </div>
          <h3 className="text-2xl font-black text-[#0A4D8C] font-display mb-2">Null Inventory State</h3>
          <p className="text-gray-400 font-medium">No assets matching the current query parameters were discovered.</p>
        </div>
      )}
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
