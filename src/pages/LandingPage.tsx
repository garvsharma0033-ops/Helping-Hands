import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Hammer, BrainCircuit, Users, Building2, ShoppingCart, ArrowRight, CheckCircle2, ChevronRight, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const stats = [
    { label: 'Active Projects', value: '1,200+', icon: <Building2 className="text-[#42A5F5]" /> },
    { label: 'Verified Partners', value: '850+', icon: <CheckCircle2 className="text-[#42A5F5]" /> },
    { label: 'AI Cost Saved', value: '$4.2M', icon: <BarChart3 className="text-[#42A5F5]" /> },
    { label: 'Market Transactions', value: '15k+', icon: <ShoppingCart className="text-[#42A5F5]" /> },
  ];

  const features = [
    {
      title: 'AI Cost Estimation',
      desc: 'Predict construction costs with 95% accuracy using our advanced Gemini-powered algorithms.',
      icon: <BrainCircuit size={24} />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Global Marketplace',
      desc: 'Connect directly with verified suppliers for cement, steel, and heavy machinery at bulk prices.',
      icon: <ShoppingCart size={24} />,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Contractor Ecosystem',
      desc: 'Hire skilled labor and contractors with verified skill sets and real-time rating systems.',
      icon: <Users size={24} />,
      color: 'bg-sky-50 text-sky-600'
    },
    {
      title: 'Real Estate Hub',
      desc: 'View virtual property showcases and manage premium listings with deep analytics.',
      icon: <Building2 size={24} />,
      color: 'bg-cyan-50 text-cyan-600'
    }
  ];

  return (
    <div className="flex flex-col blueprint-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#42A5F5]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#0A4D8C]/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-[#1565C0] text-sm font-bold mb-12 border border-[#42A5F5]/20 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#1565C0] animate-pulse"></span>
              <span>Propeling Construction Technology with AI</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#0A4D8C] mb-8 leading-[0.9] font-display"
            >
              BUILD THE <br /> FUTURE <span className="text-[#42A5F5]">NOW</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 mb-14 max-w-3xl leading-relaxed font-medium"
            >
              The industry-standard operating system for modern construction. Connect projects, scale operations, and automate your workflow with one unified ecosystem.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link to="/login" className="bg-[#0A4D8C] text-white px-12 py-6 rounded-3xl text-xl font-bold hover:bg-[#1565C0] transition-all shadow-premium hover:scale-105 active:scale-95 flex items-center gap-3 group">
                Deploy System
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/marketplace" className="bg-white/50 backdrop-blur-sm text-[#0A4D8C] border-2 border-white px-12 py-6 rounded-3xl text-xl font-bold hover:bg-white hover:shadow-xl transition-all">
                Market Analytics
              </Link>
            </motion.div>

            {/* Floating Elements Mockup */}
            <div className="absolute top-1/2 -left-48 lg:left-0 -translate-y-1/2 hidden xl:block opacity-40">
               <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-card p-6 rounded-3xl w-64 shadow-2xl"
               >
                 <div className="h-2 w-12 bg-[#42A5F5] rounded-full mb-4" />
                 <div className="space-y-2">
                   <div className="h-1.5 w-full bg-gray-100 rounded-full" />
                   <div className="h-1.5 w-3/4 bg-gray-100 rounded-full" />
                 </div>
               </motion.div>
            </div>

             <div className="absolute top-1/3 -right-48 lg:right-0 hidden xl:block opacity-40">
               <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-card p-6 rounded-3xl w-64 shadow-2xl"
               >
                 <div className="flex justify-between items-center mb-4">
                   <div className="h-6 w-6 bg-emerald-100 rounded-lg" />
                   <div className="h-1.5 w-12 bg-gray-100 rounded-full" />
                 </div>
                 <div className="h-8 w-full bg-[#0A4D8C]/5 rounded-xl" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Grid Alignment */}
      <section className="py-24 border-y border-gray-100 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-sm font-black text-[#42A5F5] uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                <div className="text-4xl md:text-5xl font-black text-[#0A4D8C] font-display mb-2 group-hover:scale-110 transition-transform cursor-default">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-[#0A4D8C] mb-4">Revolutionizing Construction Workflows</h2>
            <p className="text-gray-600 leading-relaxed">Everything you need to plan, build, and scale your construction projects in a single dashboard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 ${feature.color} flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A4D8C] mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {feature.desc}
                </p>
                <Link to="/login" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1565C0] hover:gap-3 transition-all">
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-[#0A4D8C] rounded-[48px] p-12 md:p-24 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#42A5F5]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight">Ready to build the future together?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Join thousands of builders and suppliers already using Helping Hands.</p>
              <Link to="/login" className="inline-block bg-white text-[#0A4D8C] px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-2xl">
                Get Started for Free
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0A4D8C] text-white py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg text-[#0A4D8C]">
                <Hammer size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight">Helping Hands</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-blue-100">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies</a>
              <a href="#" className="hover:text-white">Contact Us</a>
            </div>
            <div className="text-sm text-blue-200">
              © 2026 Helping Hands. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
