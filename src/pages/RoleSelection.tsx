import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Hammer, Truck, HardHat, Building, Briefcase, LayoutDashboard, Check } from 'lucide-react';

const roles = [
  { id: 'builder', title: 'Builder', desc: 'Oversee major construction projects and developments.', icon: <Building size={32} /> },
  { id: 'supplier', title: 'Supplier', desc: 'Provide raw materials and machinery to the industry.', icon: <Truck size={32} /> },
  { id: 'contractor', title: 'Contractor', desc: 'Expert service providers and project implementers.', icon: <Hammer size={32} /> },
  { id: 'worker', title: 'Worker', desc: 'Find labor jobs and showcase your construction skills.', icon: <HardHat size={32} /> },
  { id: 'real-estate-dealer', title: 'Real Estate', desc: 'Buy, sell, or rent premium property listings.', icon: <LayoutDashboard size={32} /> },
  { id: 'project-provider', title: 'Owner', desc: 'Provide projects and find the best teams to build.', icon: <Briefcase size={32} /> },
];

export default function RoleSelection() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);

  const handleComplete = async () => {
    if (!selected || !user) return;
    setLoading(true);
    try {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: selected,
        createdAt: new Date().toISOString(),
        verified: true,
        rating: 5,
        bio: '',
        skills: []
      });
      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] py-20 px-6 bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0A4D8C] mb-4">Choose Your Identity</h1>
          <p className="text-gray-500">Pick a role that best describes your position in the ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {roles.map((role) => (
            <motion.button
              key={role.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(role.id)}
              className={`p-8 rounded-[32px] text-left transition-all relative overflow-hidden group ${
                selected === role.id 
                ? 'bg-[#0A4D8C] text-white shadow-2xl shadow-[#0A4D8C]/30' 
                : 'glass-card border-2 border-transparent hover:border-[#42A5F5]/30 shadow-sm text-[#0A4D8C]'
              }`}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 transition-colors ${
                selected === role.id ? 'bg-white/10' : 'bg-[#42A5F5]/10 text-[#42A5F5]'
              }`}>
                {role.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{role.title}</h3>
              <p className={`text-sm leading-relaxed ${selected === role.id ? 'text-blue-100' : 'text-gray-500'}`}>
                {role.desc}
              </p>

              {selected === role.id && (
                <div className="absolute top-6 right-6 w-8 h-8 bg-white text-[#0A4D8C] rounded-full flex items-center justify-center animate-in zoom-in duration-200">
                  <Check size={18} strokeWidth={3} />
                </div>
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleComplete}
            disabled={!selected || loading}
            className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-200 bg-[#0A4D8C] rounded-full hover:bg-[#1565C0] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Confirm Role & Continue'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
