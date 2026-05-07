import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, 
  Send, 
  Calculator, 
  ShieldAlert, 
  DraftingCompass, 
  TrendingDown, 
  MessageCircle, 
  Sparkles,
  Bot
} from 'lucide-react';
import { getAIResponse, getCostEstimation, getRiskPrediction, getMaterialQuantityPrediction } from '../services/gemini';
import Markdown from 'react-markdown';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I'm your Helping Hands AI Assistant. I can help you with cost estimations, risk predictions, material quantities, and site safety analysis. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await getAIResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting to my brain right now." }]);
    } finally {
      setLoading(false);
    }
  };

  const runSpecializedTool = async (tool: string) => {
    const prompt = tool === 'cost' ? "Estimation for a 3-bedroom villa in Mumbai" :
                   tool === 'risk' ? "Risk analysis for a 20-story residential tower" :
                   tool === 'quantity' ? "Material list for a 500sqft concrete slab" : "";
    
    setMessages(prev => [...prev, { role: 'user', text: `Run ${tool} analysis: ${prompt}` }]);
    setLoading(true);

    try {
      let response = '';
      if (tool === 'cost') response = await getCostEstimation(prompt);
      if (tool === 'risk') response = await getRiskPrediction(prompt);
      if (tool === 'quantity') response = await getMaterialQuantityPrediction(prompt);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Something went wrong with the specialized analysis." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Tools Sidebar */}
      <div className="lg:col-span-1 space-y-6 flex flex-col">
        <h2 className="text-2xl font-bold text-[#0A4D8C] mb-2 flex items-center gap-2">
          <Sparkles className="text-[#42A5F5]" size={24} />
          AI Toolbox
        </h2>
        
        <div className="flex flex-col gap-4">
          {[
            { id: 'cost', label: 'Cost Estimator', icon: <Calculator size={24} />, color: 'bg-blue-50 text-blue-600' },
            { id: 'risk', label: 'Risk Prediction', icon: <ShieldAlert size={24} />, color: 'bg-red-50 text-red-600' },
            { id: 'quantity', label: 'Material Predictor', icon: <DraftingCompass size={24} />, color: 'bg-purple-50 text-purple-600' },
            { id: 'delay', label: 'Delay Analysis', icon: <TrendingDown size={24} />, color: 'bg-orange-50 text-orange-600' },
          ].map((tool) => (
            <button
              key={tool.id}
              onClick={() => runSpecializedTool(tool.id)}
              className="flex items-center gap-4 p-5 glass-card rounded-[28px] hover:border-[#42A5F5] hover:shadow-xl transition-all text-left group"
            >
              <div className={`w-12 h-12 ${tool.color} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-sm`}>
                {tool.icon}
              </div>
              <div>
                <div className="font-bold text-[#0A4D8C] text-sm tracking-tight">{tool.label}</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Enterprise Tool</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-auto bg-[#0A4D8C] rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-[#0A4D8C]/20 border border-white/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#42A5F5]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h4 className="font-bold mb-3 flex items-center gap-2">
               <Bot size={18} className="text-[#42A5F5]" />
               Pro Tip
            </h4>
            <p className="text-xs text-blue-100 leading-relaxed font-medium">
              Refine estimations by specifying regional tax codes and local labor averages. AI matches current union rates.
            </p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="lg:col-span-3 flex flex-col glass-card rounded-[48px] overflow-hidden relative shadow-2xl shadow-[#0A4D8C]/5">
        {/* Chat Header */}
        <div className="p-8 border-b border-gray-100/50 flex items-center justify-between bg-white/40 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#0A4D8C] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#0A4D8C]/20 ai-pulse">
              <Bot size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A4D8C]">Project Intelligence</h3>
              <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em] mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Standard Operational
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <button className="w-10 h-10 flex items-center justify-center hover:bg-[#0A4D8C]/5 rounded-xl text-gray-400 transition-colors border border-transparent hover:border-gray-100">
               <MessageCircle size={20} />
             </button>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-12 space-y-12 no-scrollbar bg-gradient-to-b from-transparent to-[#F5F7FA]/30"
        >
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] p-10 rounded-[48px] relative ${
                m.role === 'user' 
                  ? 'bg-[#0A4D8C] text-white rounded-tr-none shadow-premium' 
                  : 'glass-card text-gray-800 rounded-tl-none border border-white'
              }`}>
                {m.role === 'assistant' && (
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[#1565C0] border border-gray-50">
                    <Sparkles size={24} />
                  </div>
                )}
                <div className="markdown-body prose prose-lg prose-slate prose-headings:text-[#0A4D8C] prose-p:font-medium prose-p:leading-relaxed prose-p:text-gray-900">
                  <Markdown>{m.text}</Markdown>
                </div>
              </div>
            </motion.div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="glass-card p-6 rounded-[32px] rounded-tl-none flex items-center gap-3">
                <div className="w-2 h-2 bg-[#42A5F5] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#42A5F5] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-[#42A5F5] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-10 bg-white/40 border-t border-gray-100/50 backdrop-blur-md">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-4 bg-white/80 border border-gray-100 p-2 pl-8 rounded-[40px] focus-within:ring-4 focus-within:ring-[#42A5F5]/10 focus-within:border-[#42A5F5] transition-all shadow-xl shadow-[#0A4D8C]/5"
          >
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for cost breakdown, site safety, or material advice..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold py-4 text-gray-700 placeholder:text-gray-400 placeholder:font-medium"
            />
            <button 
              disabled={loading || !input.trim()}
              className="bg-[#0A4D8C] text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-[#1565C0] disabled:opacity-50 disabled:shadow-none shadow-xl shadow-[#0A4D8C]/20 transition-all active:scale-90"
            >
              <Send size={24} />
            </button>
          </form>
          <div className="mt-4 text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
            Precision Engineering AI Support System
          </div>
        </div>
      </div>
    </div>
  );
}
