import { motion } from 'motion/react';
import { Hammer, Chrome } from 'lucide-react';
import { auth, googleProvider, signInWithPopup, db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Check if user has a profile
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        navigate('/dashboard');
      } else {
        navigate('/role-selection');
      }
    } catch (err: any) {
      setError('Failed to login with Google. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 bg-[#F5F7FA]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glass-card rounded-[40px] shadow-2xl p-10 border border-gray-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#42A5F5]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0A4D8C]/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-[#0A4D8C] p-4 rounded-3xl text-white mb-8 shadow-lg">
            <Hammer size={40} />
          </div>
          
          <h2 className="text-3xl font-bold text-[#0A4D8C] mb-2 text-center">Welcome Back</h2>
          <p className="text-gray-500 mb-10 text-center">Join the largest AI-driven construction ecosystem.</p>
          
          {error && (
            <div className="w-full p-4 mb-6 bg-red-50 text-red-600 rounded-2xl text-sm font-medium border border-red-100 animate-in fade-in zoom-in duration-200">
              {error}
            </div>
          )}

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-4 bg-white border-2 border-gray-100 py-4 px-6 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 hover:border-[#42A5F5] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-[#0A4D8C] border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-50 group-hover:scale-110 transition-transform">
                  <Chrome size={20} className="text-[#4285F4]" />
                </div>
                <span>Continue with Google</span>
              </>
            )}
          </button>

          <div className="mt-10 flex items-center gap-4 w-full">
            <div className="h-px bg-gray-100 flex-1"></div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">New Era of Building</span>
            <div className="h-px bg-gray-100 flex-1"></div>
          </div>

          <p className="mt-10 text-xs text-center text-gray-400 leading-relaxed max-w-[280px]">
            By continuing, you agree to Helping Hands' 
            <a href="#" className="text-[#1565C0] font-bold hover:underline ml-1">Terms of Service</a> and 
            <a href="#" className="text-[#1565C0] font-bold hover:underline ml-1">Privacy Policy</a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
