import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp, db } from '../lib/firebase';
import { 
  Send, 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Paperclip, 
  Smile, 
  CheckCheck,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const mockContacts = [
  { id: '1', name: 'James Steel', role: 'Contractor', avatar: 'https://i.pravatar.cc/150?u=1', status: 'Online', lastMsg: 'I have the updated blueprints for the Nexus project.' },
  { id: '2', name: 'Sarah Materials', role: 'Supplier', avatar: 'https://i.pravatar.cc/150?u=2', status: 'Away', lastMsg: 'The cement truck is on its way to site B.' },
  { id: '3', name: 'Mike Builder', role: 'Builder', avatar: 'https://i.pravatar.cc/150?u=3', status: 'Offline', lastMsg: 'Let’s discuss the budget expansion tomorrow.' },
];

export default function Chat() {
  const { user, profile } = useAuth();
  const [activeContact, setActiveContact] = useState(mockContacts[0]);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real app, we'd use a unique chatId based on participants
    const q = query(
      collection(db, 'global_chat'), // Simplification for demo
      orderBy('createdAt', 'asc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !user) return;

    try {
      await addDoc(collection(db, 'global_chat'), {
        text: input,
        senderId: user.uid,
        senderName: profile?.displayName || 'Anonymous',
        senderRole: profile?.role || 'Guest',
        createdAt: serverTimestamp(),
      });
      setInput('');
    } catch (err) {
      console.error('Failed to send message', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-64px-48px)] my-6 rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl glass-card flex">
      {/* Sidebar */}
      <div className="w-[380px] border-r border-gray-100 hidden md:flex flex-col bg-white/50 backdrop-blur-md">
        <div className="p-8 border-b border-gray-50 space-y-6">
          <h2 className="text-2xl font-bold text-[#0A4D8C]">Messages</h2>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              placeholder="Search conversations..." 
              className="w-full bg-[#F5F7FA] border-none rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-[#42A5F5] transition-all"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-2">
          {mockContacts.map((contact) => (
            <motion.button
              key={contact.id}
              whileHover={{ x: 5 }}
              onClick={() => setActiveContact(contact)}
              className={`w-full flex items-center gap-4 p-4 rounded-3xl transition-all ${
                activeContact.id === contact.id ? 'bg-[#0A4D8C] text-white shadow-xl shadow-[#0A4D8C]/10' : 'hover:bg-gray-50 text-gray-800'
              }`}
            >
              <div className="relative flex-shrink-0">
                <img src={contact.avatar} className="w-14 h-14 rounded-2xl object-cover shadow-sm" alt={contact.name} />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white rounded-full ${
                  contact.status === 'Online' ? 'bg-green-500' : contact.status === 'Away' ? 'bg-yellow-500' : 'bg-gray-400'
                }`}></div>
              </div>
              <div className="flex-1 text-left overflow-hidden">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-sm truncate">{contact.name}</h4>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${activeContact.id === contact.id ? 'text-blue-200' : 'text-gray-400'}`}>
                    12:45
                  </span>
                </div>
                <div className={`text-xs font-medium truncate opacity-90 ${activeContact.id === contact.id ? 'text-blue-100' : 'text-gray-500'}`}>
                   {contact.lastMsg}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#F5F7FA]">
        {/* Header */}
        <div className="p-6 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between shadow-sm relative z-10">
          <div className="flex items-center gap-4">
            <img src={activeContact.avatar} className="w-12 h-12 rounded-2xl object-cover shadow-sm" alt={activeContact.name} />
            <div>
              <h3 className="font-bold text-[#0A4D8C]">{activeContact.name}</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{activeContact.role}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="p-3 text-gray-400 hover:text-[#0A4D8C] hover:bg-gray-50 rounded-2xl transition-all">
               <Phone size={20} />
             </button>
             <button className="p-3 text-gray-400 hover:text-[#0A4D8C] hover:bg-gray-50 rounded-2xl transition-all">
               <Video size={20} />
             </button>
             <button className="p-3 text-gray-400 hover:text-[#0A4D8C] hover:bg-gray-50 rounded-2xl transition-all">
               <MoreVertical size={20} />
             </button>
          </div>
        </div>

        {/* Messages Container */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-6 flex flex-col no-scrollbar"
        >
           {/* Mock System Message */}
           <div className="flex justify-center my-6">
             <div className="bg-white/50 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100">
               Project Channel Started • May 7, 2026
             </div>
           </div>

           {messages.map((m) => (
             <motion.div 
               key={m.id}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className={`flex flex-col ${m.senderId === user?.uid ? 'items-end' : 'items-start'}`}
             >
               <div className={`flex items-end gap-3 max-w-[70%] ${m.senderId === user?.uid ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex flex-col gap-1 ${m.senderId === user?.uid ? 'items-end' : 'items-start'}`}>
                    {m.senderId !== user?.uid && (
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-1">
                        {m.senderName} • {m.senderRole}
                      </span>
                    )}
                    <div className={`p-4 rounded-[2rem] shadow-sm relative group ${
                      m.senderId === user?.uid 
                      ? 'bg-[#0A4D8C] text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-50'
                    }`}>
                      <p className="text-sm font-medium leading-relaxed">{m.text}</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 px-4">
                      <span className="text-[9px] font-bold text-gray-400">
                        {m.createdAt ? new Date(m.createdAt.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Sending...'}
                      </span>
                      {m.senderId === user?.uid && <CheckCheck size={12} className="text-[#42A5F5]" />}
                    </div>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>

        {/* Message Input */}
        <div className="p-8 bg-white border-t border-gray-50 flex items-center gap-4 relative z-10">
          <button className="p-3 text-gray-400 hover:text-[#0A4D8C] transition-colors">
            <Paperclip size={24} />
          </button>
          
          <form onSubmit={handleSend} className="flex-1 relative">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your message here..."
              className="w-full bg-[#F5F7FA] border-none rounded-[1.5rem] py-4 px-6 text-sm font-medium focus:ring-2 focus:ring-[#42A5F5] transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#0A4D8C]">
              <Smile size={20} />
            </button>
          </form>

          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-[#0A4D8C] text-white p-4 rounded-2xl hover:bg-[#1565C0] disabled:opacity-50 disabled:shadow-none shadow-xl shadow-[#0A4D8C]/20 transition-all active:scale-95"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
