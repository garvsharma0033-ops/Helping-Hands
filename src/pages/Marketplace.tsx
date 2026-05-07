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
  { name: 'All', icon: <Layers size={18} /> },
  { name: 'Cement', icon: <Package size={18} /> },
  { name: 'Steel', icon: <Hammer size={18} /> },
  { name: 'Bricks', icon: <Construction size={18} /> },
  { name: 'Machinery', icon: <Truck size={18} /> },
  { name: 'Paint', icon: <Pipette size={18} /> },
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
    <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-8 glass-card p-10 rounded-[56px] relative overflow-hidden shadow-2xl shadow-[#0A4D8C]/5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#42A5F5]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-3 mb-2">
             <div className="w-1.5 h-6 bg-[#42A5F5] rounded-full"></div>
             <h1 className="text-4xl font-extrabold text-[#0A4D8C] tracking-tight">Marketplace</h1>
          </div>
          <p className="text-gray-500 font-bold text-sm tracking-tight uppercase opacity-70">Bulk Procurement Engine v4.0</p>
        </div>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-[450px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Source materials, machinery, tenders..."
              className="w-full bg-[#F5F7FA] border-none rounded-[32px] py-6 pl-16 pr-8 text-lg font-medium shadow-inner focus:ring-4 focus:ring-[#42A5F5]/20 focus:bg-white transition-all"
            />
          </div>
          <button className="bg-[#0A4D8C] text-white h-full px-10 py-6 rounded-[32px] font-bold hover:bg-[#1565C0] shadow-2xl shadow-[#0A4D8C]/20 transition-all flex items-center justify-center gap-3 active:scale-95">
            <Plus size={24} />
            <span className="hidden sm:inline">Post Inventory</span>
          </button>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center gap-4 overflow-x-auto pb-6 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center gap-3 px-8 py-4 rounded-[28px] font-bold whitespace-nowrap transition-all border-2 text-sm shadow-sm ${
              selectedCategory === cat.name 
              ? 'bg-[#0A4D8C] text-white border-[#0A4D8C] shadow-xl shadow-[#0A4D8C]/20 scale-105' 
              : 'bg-white text-gray-500 border-white hover:border-[#42A5F5]/30'
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className="group glass-card rounded-[48px] overflow-hidden border border-gray-50 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(10,77,140,0.15)] transition-all duration-500"
          >
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 glass-card px-4 py-2 rounded-2xl text-[10px] font-bold text-[#0A4D8C] uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl">
                 <CheckCircle size={14} className="text-emerald-500" />
                 Verified Dist.
              </div>
              <button className="absolute bottom-6 right-6 bg-white text-[#0A4D8C] p-4 rounded-3xl hover:bg-[#1565C0] hover:text-white transition-all shadow-2xl active:scale-90 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                <ShoppingCart size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="text-[10px] font-bold text-[#42A5F5] uppercase tracking-[0.3em] mb-3">{item.category}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate group-hover:text-[#0A4D8C] transition-colors">{item.name}</h3>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-gray-900 font-bold ml-1">{item.rating}</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">{item.reviews} reviews</span>
              </div>
              
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                 <Truck size={14} className="text-[#42A5F5]" />
                 {item.supplier}
              </p>
              
              <div className="flex justify-between items-end border-t border-gray-50 pt-8">
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">Unit Rate</div>
                  <div className="text-3xl font-black text-[#0A4D8C]">
                    ${item.price.toLocaleString()}
                    <span className="text-xs text-gray-400 font-bold lowercase ml-2 pr-2">/{item.unit}</span>
                  </div>
                </div>
                <ChevronRight className="text-gray-300 group-hover:text-[#42A5F5] group-hover:translate-x-2 transition-all" size={28} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center p-20 bg-white rounded-[40px] border border-gray-100 italic text-gray-400">
          <Layers size={48} className="mb-4 opacity-20" />
          No items found in this category.
        </div>
      )}
    </div>
  );
}
