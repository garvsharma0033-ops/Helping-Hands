import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Package, 
  Clock, 
  DollarSign, 
  CheckCircle2, 
  Briefcase,
  AlertTriangle,
  ChevronRight,
  Newspaper,
  LocateFixed,
  Building, 
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

export default function Dashboard() {
  const { profile } = useAuth();
  
  const stats = [
    { label: 'Total Managed Value', value: '$12.4M', icon: <DollarSign size={20} />, trend: '+14%', color: 'bg-indigo-50 text-indigo-600' },
    { label: 'Workforce Velocity', value: '94.2%', icon: <Users size={20} />, trend: '+2.1%', color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Active Tenders', value: '48', icon: <Briefcase size={20} />, trend: '-5%', color: 'bg-amber-50 text-amber-600' },
    { label: 'Procurement Gap', value: '1.2%', icon: <AlertTriangle size={20} />, trend: 'Stable', color: 'bg-rose-50 text-rose-600' },
  ];

  const recentProjects = [
    { name: 'Nexus Heights Residencies', status: 'Active', progress: 65, budget: '$1.2M', deadline: 'Oct 2026' },
    { name: 'Downtown Commercial Hub', status: 'Tendering', progress: 10, budget: '$4.5M', deadline: 'Jan 2027' },
    { name: 'Skyline Villa Estate', status: 'Final Phase', progress: 100, budget: '$800k', deadline: 'Ready' },
    { name: 'Port Industrial Zone', status: 'Active', progress: 32, budget: '$12.8M', deadline: 'Dec 2027' },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Welcome Hero Container */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-white/40 p-10 rounded-[48px] border border-white shadow-premium">
        <div>
           <div className="flex items-center gap-3 mb-4">
             <span className="px-3 py-1 bg-[#1565C0] text-white text-[10px] font-black uppercase tracking-widest rounded-full">System Active</span>
             <span className="text-xs font-bold text-gray-400 font-mono">ID: HH-2026-X9</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-[#0A4D8C] tracking-tight mb-2 font-display">
             Welcome back, <span className="text-[#42A5F5]">{profile?.displayName?.split(' ')[0] || 'Chief'}</span>.
           </h1>
           <p className="text-gray-500 font-medium max-w-xl">
             Your construction ecosystem is operating at peak efficiency. Here is the strategic overview for your managed assets.
           </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-[#0A4D8C] px-8 py-5 rounded-[24px] font-bold border border-gray-100 hover:shadow-xl transition-all active:scale-95 text-sm uppercase tracking-widest">
            Export Report
          </button>
          <button className="bg-[#0A4D8C] text-white px-8 py-5 rounded-[24px] font-bold hover:bg-[#1565C0] shadow-premium transition-all active:scale-95 text-sm uppercase tracking-widest flex items-center gap-2">
            <Plus size={18} />
            Command Center
          </button>
        </div>
      </div>

      {/* Grid Layout for Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-[40px] group hover:scale-[1.02] transition-all cursor-default"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-full ${
                stat.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-600' : 
                stat.trend === 'Stable' ? 'bg-gray-100 text-gray-600' : 'bg-rose-100 text-rose-600'
              }`}>
                {stat.trend}
              </span>
            </div>
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-3xl font-black text-[#0A4D8C] font-display">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Analytics Section */}
        <div className="xl:col-span-2 glass-card rounded-[48px] p-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-black text-[#0A4D8C] font-display mb-1">Fiscal Performance</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quarterly ecosystem spending & revenue</p>
            </div>
            <div className="flex bg-gray-50 p-1.5 rounded-2xl gap-2">
               {['6M', '1Y', 'ALL'].map(t => (
                 <button key={t} className={`px-4 py-2 text-[10px] font-black rounded-xl transition-all ${t === '6M' ? 'bg-white text-[#0A4D8C] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
                   {t}
                 </button>
               ))}
            </div>
          </div>
          <div className="h-[380px] -ml-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#42A5F5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#42A5F5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8', fontWeight: 700 }} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ stroke: '#42A5F5', strokeWidth: 2, strokeDasharray: '5 5' }}
                  contentStyle={{ backgroundColor: '#0A4D8C', borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px rgba(10, 77, 140, 0.2)' }}
                  itemStyle={{ color: '#fff', fontWeight: '900', fontSize: '14px' }}
                  labelStyle={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: '700', fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px' }}
                />
                <Area type="monotone" dataKey="value" stroke="#0A4D8C" strokeWidth={5} fillOpacity={1} fill="url(#chartGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Global Hub Sidebar */}
        <div className="space-y-10">
          <div className="glass-card rounded-[48px] p-10 flex flex-col h-full bg-gradient-to-br from-white/90 to-blue-50/50">
            <h3 className="text-xl font-black text-[#0A4D8C] font-display mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-[#42A5F5]/10 rounded-2xl flex items-center justify-center text-[#1565C0]">
                <Newspaper size={20} />
              </span>
              Industry Core
            </h3>
            <div className="space-y-8 flex-1">
              {[
                { title: 'Steel Futures Hit 24mo Low', meta: 'Materials • 5m ago', color: 'text-emerald-500' },
                { title: 'New ISO-2026 Standards Released', meta: 'Compliance • 2h ago', color: 'text-amber-500' },
                { title: 'Tender: Dubai Green City Phase IV', meta: 'Opportunities • 8h ago', color: 'text-indigo-500' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="group cursor-pointer"
                >
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">{item.meta}</p>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#1565C0] transition-colors leading-tight mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2">
                     <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full w-1/3 bg-current ${item.color}`} />
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="mt-12 bg-[#0A4D8C] text-white py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest shadow-lg shadow-[#0A4D8C]/20 hover:bg-[#1565C0] transition-all">
              Launch Intelligence Console
            </button>
          </div>
        </div>
      </div>

      {/* Projects and AI Strategic Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="glass-card rounded-[48px] p-10">
           <div className="flex justify-between items-center mb-8">
             <h3 className="text-2xl font-black text-[#0A4D8C] font-display">Mission Tracker</h3>
             <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-[#0A4D8C] transition-colors">
               <ChevronRight size={20} />
             </button>
           </div>
           <div className="space-y-4">
              {recentProjects.map((p, i) => (
                <div key={i} className="flex items-center gap-6 p-6 hover:bg-gray-50/80 rounded-[32px] transition-all border border-transparent hover:border-gray-100 group">
                   <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center shrink-0 border border-gray-50 group-hover:scale-110 transition-transform">
                      <Building className="text-[#1565C0]" size={24} />
                   </div>
                   <div className="flex-1 overflow-hidden">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-black text-gray-800 truncate">{p.name}</h4>
                        <span className="text-[10px] font-black text-[#42A5F5] uppercase tracking-widest">{p.budget}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} animate={{ width: `${p.progress}%` }} className="h-full bg-[#0A4D8C]" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 w-8">{p.progress}%</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-[#0A4D8C] rounded-[48px] p-12 relative overflow-hidden text-white flex flex-col justify-end shadow-premium group">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#42A5F5]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#42A5F5] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#42A5F5]/40 mb-10 ai-pulse">
               <BrainCircuit size={32} className="text-[#0A4D8C]" />
            </div>
            <div className="text-[10px] font-black text-[#42A5F5] uppercase tracking-[0.3em] mb-6">Strategic AI Core</div>
            <h3 className="text-3xl font-black mb-6 font-display leading-[1.1]">Optimization Signal Detected</h3>
            <p className="text-lg text-blue-100/80 font-medium mb-10 leading-relaxed">
              "We've detected a significant arbitrage opportunity in the <span className="text-white font-bold underline decoration-[#42A5F5] underline-offset-4">European Steel Derivatives</span> market. Executing bulk procurement through the <span className="font-bold text-white">Marketplace Engine</span> now could yield an estimated <span className="text-[#42A5F5] font-black">$42k savings</span> for current active projects."
            </p>
            <button className="bg-white text-[#0A4D8C] px-10 py-5 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-[#42A5F5] hover:text-white transition-all shadow-2xl flex items-center gap-3">
              Analyze Execution Plan
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Building2({ size, className }: { size: number, className?: string }) {
  return <Building size={size} className={className} />;
}
