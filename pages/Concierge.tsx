import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHAT_THREADS, MESSAGES } from '../constants';

const Concierge: React.FC = () => {
  const navigate = useNavigate();
  const [activeThread, setActiveThread] = useState('t1');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(MESSAGES);

  const handleSend = () => {
    if(!input.trim()) return;
    const newMsg = {
        id: Date.now().toString(),
        sender: 'Me',
        text: input,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        isUser: true
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  return (
    <div className="bg-background-dark font-display text-white overflow-hidden h-screen flex">
      {/* Sidebar Navigation */}
      <div className="relative hidden md:flex h-full w-20 flex-col bg-black border-r border-border-dark justify-between py-6 items-center z-20">
        <div className="flex flex-col gap-8 items-center">
          <div className="size-10 bg-primary/10 rounded flex items-center justify-center border border-primary/20 text-primary cursor-pointer" onClick={() => navigate('/')}>
            <span className="material-symbols-outlined text-2xl">diamond</span>
          </div>
          <nav className="flex flex-col gap-6">
            <button onClick={() => navigate('/')} className="p-2 text-muted hover:text-white hover:bg-white/5 rounded transition-colors group relative">
              <span className="material-symbols-outlined">garage_home</span>
              <span className="absolute left-14 bg-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border-dark z-50">Showroom</span>
            </button>
            <button className="p-2 text-primary bg-primary/10 rounded border border-primary/20 shadow-[0_0_15px_-3px_rgba(212,175,55,0.3)] group relative">
              <span className="material-symbols-outlined fill-1">forum</span>
              <span className="absolute top-0 right-0 size-2 bg-primary rounded-full"></span>
              <span className="absolute left-14 bg-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border-dark z-50">Concierge</span>
            </button>
            <button onClick={() => navigate('/vault')} className="p-2 text-muted hover:text-white hover:bg-white/5 rounded transition-colors group relative">
              <span className="material-symbols-outlined">lock</span>
              <span className="absolute left-14 bg-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border-dark z-50">The Vault</span>
            </button>
            <button className="p-2 text-muted hover:text-white hover:bg-white/5 rounded transition-colors group relative">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <button className="size-8 rounded-full bg-cover bg-center border border-border-dark opacity-80 hover:opacity-100 transition-opacity" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgrr_70UEMPdWvVDUhHs9y4zikZFKX7WT0RSzE4h6FBymzkkjp0BqJtO8gPO8GgLbIfZkeMDyvmsgszDoGLDDi7I_Ys6YEIrhs3axwp9AXDhmyo6dN_kvdDOeINCI0Xhll3eXqXHW_cg9N3ofMZsevI6wu1LcH87qB2m0i_ewCnj1mD09nA-Sm0vtPCNBqY81rlKSJGGOsBQY7seAceKDBmtih_rzfSAAKFvs7ELo8IxYkCvXvGvi58hYCfeOL17t4xtCN1nG_zWI_')"}}></button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative bg-[url('https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#000000]/95 backdrop-blur-sm"></div>
        <div className="relative z-10 flex w-full h-full max-w-[1920px] mx-auto">
            
          {/* Threads Sidebar */}
          <aside className="w-80 border-r border-border-dark bg-black/80 backdrop-blur-md flex flex-col hidden lg:flex">
            <div className="p-6 border-b border-border-dark flex justify-between items-center">
              <h2 className="font-serif text-xl font-semibold tracking-wide text-white">Communications</h2>
              <button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors">
                <span className="material-symbols-outlined text-xl">add_comment</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <div className="relative mb-6">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted material-symbols-outlined text-[18px]">search</span>
                <input className="w-full bg-white/5 border border-border-dark rounded pl-10 pr-4 py-2 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted" placeholder="Filter threads..." type="text"/>
              </div>
              {CHAT_THREADS.map(thread => (
                  <div key={thread.id} onClick={() => setActiveThread(thread.id)} className={`p-3 rounded border cursor-pointer transition-all ${activeThread === thread.id ? 'bg-primary/5 border-primary/20' : 'border-transparent hover:bg-white/5 hover:border-border-dark opacity-80 hover:opacity-100'}`}>
                    <div className="flex justify-between items-start mb-1">
                        <h3 className={`font-medium text-sm ${activeThread === thread.id ? 'text-white' : 'text-gray-300'}`}>{thread.name}</h3>
                        <span className={`text-[10px] font-mono ${activeThread === thread.id ? 'text-primary' : 'text-gray-500'}`}>{thread.time}</span>
                    </div>
                    <p className={`text-xs truncate ${activeThread === thread.id ? 'text-muted' : 'text-gray-500'}`}>{thread.lastMessage}</p>
                    {thread.isTyping && (
                        <div className="mt-2 flex items-center gap-2">
                            <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-[10px] text-primary tracking-widest uppercase">Typing...</span>
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </aside>

          {/* Main Chat */}
          <main className="flex-1 flex flex-col bg-background-dark/50 relative">
            <header className="h-16 border-b border-border-dark bg-black/90 backdrop-blur flex items-center justify-between px-6 z-10 shadow-lg shadow-black/20">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="size-9 rounded bg-cover bg-center border border-gray-600" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVz_qQp-u2SWXN63GCQPmp6gVBLGbjzHAhlTo0MVLXMyY8yml3OmV_fZcD8zoxckvG4fEfxSo3wEBBLd7akAvqX5B6eg8Gq2XdwtfkhsqI3tNKgeZe4_8ClId7_nOh0xeuM4uvlbMY7Z3mRrfXXwZs4Idqd7UsBASgqRZULGVEqtQdc_U0GUDXZ2lDrPWiVRsh_Oz9mwY4dFatXCBlz2j7Mf6R-VnH2jfVUeemi-OdI6nY4SADk5wRBzbzo6lxY-vs6En7H2jzaxDV')"}}></div>
                        <div className="absolute -bottom-0.5 -right-0.5 size-2.5 bg-primary border-2 border-black rounded-full"></div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-white font-medium text-sm">Sola - Lead Broker</h1>
                            <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded border border-primary/20 tracking-wider">VERIFIED AGENT</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted text-xs">
                            <span className="material-symbols-outlined text-[10px] text-primary">lock</span>
                            <span className="font-mono tracking-tight">End-to-End Encrypted: AES-256</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">call</span>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors lg:hidden">
                        <span className="material-symbols-outlined">info</span>
                    </button>
                </div>
            </header>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
                <div className="flex justify-center">
                    <span className="text-[10px] text-gray-600 font-mono bg-black/30 px-3 py-1 rounded-full border border-white/5">TODAY, OCTOBER 26</span>
                </div>
                {messages.map(msg => (
                    <div key={msg.id} className={`flex flex-col gap-1 max-w-[80%] ${msg.isUser ? 'self-end items-end' : 'self-start'}`}>
                        <div className={`p-4 rounded-lg text-sm leading-relaxed shadow-lg ${msg.isUser ? 'bg-primary text-black rounded-tr-none font-medium' : 'glass-panel text-gray-200 rounded-tl-none border-l-2 ' + (msg.isSystem ? 'border-l-primary' : '')}`}>
                            <p>{msg.text}</p>
                            {msg.attachment && (
                                <div className="mt-3 flex items-center gap-3 p-3 bg-black/40 border border-white/10 rounded hover:bg-black/60 transition-colors cursor-pointer group">
                                    <div className="size-10 bg-red-500/10 text-red-400 flex items-center justify-center rounded border border-red-500/20">
                                        <span className="material-symbols-outlined">picture_as_pdf</span>
                                    </div>
                                    <div className="flex flex-col overflow-hidden">
                                        <span className="text-xs font-medium text-white group-hover:text-primary transition-colors truncate">{msg.attachment.name}</span>
                                        <span className="text-[10px] text-gray-500">{msg.attachment.size} • {msg.attachment.type.toUpperCase()}</span>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-500 ml-auto group-hover:text-white">download</span>
                                </div>
                            )}
                        </div>
                        <span className="text-[10px] text-gray-600 mx-1">{msg.time}</span>
                    </div>
                ))}
            </div>

            <div className="p-6 bg-black/90 backdrop-blur border-t border-border-dark">
                <div className="relative flex items-end gap-3">
                    <button className="text-gray-400 hover:text-white p-2 rounded hover:bg-white/5 transition-colors mb-0.5">
                        <span className="material-symbols-outlined">attach_file</span>
                    </button>
                    <div className="flex-1 bg-white/5 border border-border-dark rounded focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                        <textarea 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                            className="w-full bg-transparent border-0 text-white text-sm focus:ring-0 placeholder:text-gray-600 resize-none py-3" 
                            placeholder="Type a message to Sola..." 
                            rows={1}
                        ></textarea>
                    </div>
                    <button onClick={handleSend} className="bg-primary hover:bg-primary/90 text-black p-2 rounded mb-0.5 transition-colors shadow-[0_0_15px_-3px_rgba(212,175,55,0.4)]">
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </div>
            </div>
          </main>

          {/* Context Panel */}
          <aside className="w-96 border-l border-border-dark bg-black/80 backdrop-blur-md hidden xl:flex flex-col">
            <div className="h-16 border-b border-border-dark flex items-center px-6">
                <h2 className="font-serif text-lg text-white">Transaction Details</h2>
            </div>
            <div className="p-6 flex-1 overflow-y-auto">
                <div className="group relative rounded overflow-hidden border border-border-dark bg-surface">
                    <div className="absolute top-3 left-3 z-10">
                        <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm border border-emerald-500/20 uppercase tracking-wider flex items-center gap-1">
                            <span className="size-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                            Lagos Ground
                        </span>
                    </div>
                    <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-ykQTmeAYup5CryVgvrmDyoNXidrvvjsXrd4d6QsayqQnb1ggZf0CiMjkuTNl5bzvC5nsS5zfHPrsDoQ49vntnFUgGX_XQVLoTbL-Guza0S7yuhASUctp5keErncMGio1mTO6BSLFiDakLCM4FlkpDW2fhEXnpueLhMMmwX5zPodlHGuEC1ZHMCex4lBZgHqaFSyeQ48u-PRhziy3Y2D0YUcMe_3TZ8lcdPN146vhy2iZMOYnlaiegH0STmbnQyEv42E9jxy9ksTG')"}}>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
                    </div>
                    <div className="p-5 relative -mt-10">
                        <h3 className="font-serif text-2xl text-white mb-1">2024 G63 AMG</h3>
                        <p className="text-muted text-xs font-mono mb-4">VIN: W1N...8922 • OBSIDIAN BLACK</p>
                        <div className="flex justify-between items-end border-t border-border-dark pt-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Total Landed Cost</span>
                                <span className="text-xl text-primary font-display font-medium">₦350,000,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 glass-panel p-5 rounded">
                    <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">payments</span>
                        Payment Required
                    </h4>
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Commitment Deposit (20%)</span>
                            <span className="text-white">₦70,000,000</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Logistics & Handling</span>
                            <span className="text-white">₦2,500,000</span>
                        </div>
                        <div className="h-px bg-border-dark my-2"></div>
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-white">Total Due Now</span>
                            <span className="text-primary">₦72,500,000</span>
                        </div>
                    </div>
                    <button className="w-full bg-primary hover:bg-yellow-500 text-black font-medium py-3 rounded text-sm uppercase tracking-wide transition-all shadow-[0_0_20px_-5px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">lock</span>
                        Secure Allocation
                    </button>
                    <p className="text-[10px] text-center text-gray-500 mt-3 flex justify-center items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">verified_user</span>
                        Funds held in escrow until delivery.
                    </p>
                </div>

                <div className="mt-6">
                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Documents</h4>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer transition-colors border border-transparent hover:border-border-dark">
                            <span className="material-symbols-outlined text-gray-500">description</span>
                            <div className="flex flex-col">
                                <span className="text-xs text-white">Invoice_#0092.pdf</span>
                                <span className="text-[10px] text-gray-600">Generated Oct 24</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer transition-colors border border-transparent hover:border-border-dark">
                            <span className="material-symbols-outlined text-gray-500">description</span>
                            <div className="flex flex-col">
                                <span className="text-xs text-white">Spec_Sheet_G63.pdf</span>
                                <span className="text-[10px] text-gray-600">Original Request</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Concierge;