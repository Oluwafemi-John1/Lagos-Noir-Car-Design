import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GARAGE_ITEMS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 720 },
  { name: 'Feb', value: 740 },
  { name: 'Mar', value: 730 },
  { name: 'Apr', value: 780 },
  { name: 'May', value: 810 },
  { name: 'Jun', value: 850 },
];

const Vault: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark text-white font-tech antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-background-dark bg-grid-pattern">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-b-white/5">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
            <div className="text-primary">
              <span className="material-symbols-outlined text-[32px]">diamond</span>
            </div>
            <h1 className="font-display font-bold text-2xl tracking-tight text-white">LAGOS NOIR</h1>
          </div>
          <nav className="hidden md:flex items-center gap-12">
            <button onClick={() => navigate('/')} className="text-sm font-medium text-muted hover:text-white transition-colors uppercase tracking-widest">Showroom</button>
            <button className="text-sm font-medium text-primary uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-primary after:shadow-[0_0_8px_rgba(16,185,129,0.8)]">The Vault</button>
            <button onClick={() => navigate('/concierge')} className="text-sm font-medium text-muted hover:text-white transition-colors uppercase tracking-widest">Concierge</button>
          </nav>
          <div className="flex items-center gap-6">
            <div className="relative group cursor-pointer">
              <span className="material-symbols-outlined text-muted group-hover:text-white transition-colors">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-muted uppercase tracking-wider">Member</p>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Iretomiwa A.</p>
              </div>
              <div className="w-10 h-10 rounded-sm overflow-hidden border border-white/20">
                <img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoZCdd9rG4HrjVd3zy1YX6nu-nY4aft_VIC7NglAui3hUNp2Yxc9t6eoujzO582FH8HkPIsdX6G1o7mDPAGb2FZLShvTm_mD39e5HD61MGTL-QgFiBGT9yeq4hU91qZk8avNFwJlavmtBmZUHnh6D-qZ4stmqqC_jkiAWmWPfGSGQ4WurI3WfnkEjohqXWqc-U8_YRUvcJQHoBQO6W7lYwqL2RInPelE0jDZHH6GR8neFWBLA4b9GzLQM0qcxZux0gawDIkwErp4OF" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-12 flex-grow px-6 max-w-[1440px] mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Secure Asset Terminal</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">The Vault</h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            <span className="tracking-widest uppercase">Live Connection • Lagos, NG</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stat Card 1 */}
          <div className="glass-panel p-6 rounded-sm relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <Area type="monotone" dataKey="value" stroke="#10B981" fill="#10B981" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-4xl">account_balance_wallet</span>
            </div>
            <p className="text-muted text-xs uppercase tracking-widest mb-1 relative z-10">Total Garage Value</p>
            <div className="flex items-baseline gap-2 relative z-10">
              <h3 className="text-3xl font-bold text-white select-none">₦850,000,000</h3>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-primary/80 relative z-10">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+12.5% vs Last Valuation</span>
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="glass-panel p-6 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-4xl">garage_home</span>
            </div>
            <p className="text-muted text-xs uppercase tracking-widest mb-1">Cars Owned</p>
            <h3 className="text-3xl font-bold text-white">3 Vehicles</h3>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <span className="material-symbols-outlined text-sm">history</span>
              <span>Last acquisition: 2 months ago</span>
            </div>
          </div>
          {/* Stat Card 3 */}
          <div className="glass-panel p-6 rounded-sm relative overflow-hidden group border-primary/30">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 p-4 text-primary opacity-40 group-hover:opacity-60 transition-opacity">
              <span className="material-symbols-outlined text-4xl">directions_boat</span>
            </div>
            <p className="text-primary text-xs uppercase tracking-widest mb-1 font-bold">In Transit</p>
            <h3 className="text-3xl font-bold text-white text-glow">1 Pending</h3>
            <div className="mt-4 flex items-center gap-2 text-xs text-primary">
              <span className="material-symbols-outlined text-sm animate-spin">sync</span>
              <span>Tracking Active</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Map */}
          <div className="lg:col-span-8 glass-panel rounded-sm overflow-hidden flex flex-col min-h-[400px]">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-background-dark/50">
              <h3 className="font-display font-bold text-lg">Live Shipment: Maybach S680</h3>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">Vessel: MSC Orchestra</span>
                <span className="px-2 py-1 rounded bg-white/5 text-muted text-[10px] font-bold uppercase tracking-wider border border-white/10">ETA: 4 Days</span>
              </div>
            </div>
            <div className="relative flex-grow bg-[#0f1623] w-full h-full group">
              <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{backgroundImage: "radial-gradient(circle at 70% 60%, #1e293b 0%, #0B1120 60%)"}}>
                <svg className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
                    </pattern>
                  </defs>
                  <rect fill="url(#grid)" height="100%" width="100%"></rect>
                  <path className="opacity-50" d="M 200 100 Q 400 300 600 250 T 800 350" fill="none" stroke="#10B981" strokeDasharray="8 4" strokeWidth="2"></path>
                  <path d="M 200 100 Q 400 300 550 262" fill="none" stroke="#10B981" strokeWidth="2" style={{filter: "drop-shadow(0 0 4px #10B981)"}}></path>
                </svg>
              </div>
              <img alt="Map View" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy9qAIZMnte31G7NfN04ESekNJf_Stgwwu7efveEXHz0HWrXZ_haAdpYBt9eDr546Xbfm-uM2rOP-jYtDNOJ0gIsWaL8d20zmOf-w6o22hAxu96AJjItpcTUmryKvF0RDOdPsPpgEATTMHbLr8BuyaqdwkhsqKDaQBKtGZd-CrY_88yBklJsC6-PEG6C0FZr9QwZX8TQusVkYL_BeZJB14pKKb2qu5DlpnF1GxTCrW9Kmy_JctWzJsnZUG2W4fz_o8hz75xYQxLQLl" />
              <div className="absolute top-[45%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_10px_#10B981]"></span>
                </div>
                <div className="mt-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-primary/30 text-[10px] uppercase tracking-wider text-primary shadow-xl">
                    Current Location
                </div>
              </div>
            </div>
            {/* Stepper */}
            <div className="bg-background-dark/80 backdrop-blur-md border-t border-white/5 p-6">
              <div className="flex items-center justify-between relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10"></div>
                <div className="absolute top-1/2 left-0 w-2/3 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary -z-10 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-surface border border-primary flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <span className="material-symbols-outlined text-sm text-primary">check</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Sourced</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-surface border border-primary flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <span className="material-symbols-outlined text-sm text-primary">sailing</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Shipped</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                      <span className="material-symbols-outlined text-sm text-black font-bold">sync</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white font-bold text-glow">Clearing</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm text-muted">garage</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted font-bold">Delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Docs */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-sm h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-bold text-xl">The Archive</h3>
                <button className="text-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
              </div>
              <div className="flex-grow space-y-3 overflow-y-auto no-scrollbar pr-1">
                {[
                    {name: "Maybach_S680_Invoice.pdf", date: "Added 2 days ago • 2.4 MB", icon: "picture_as_pdf", color: "red"},
                    {name: "G63_AMG_Insurance.pdf", date: "Expires Dec 2024 • 1.1 MB", icon: "verified_user", color: "blue"},
                    {name: "Customs_Duty_Receipt_004.pdf", date: "Cleared Jan 2024 • 0.8 MB", icon: "receipt_long", color: "emerald"},
                    {name: "Rolls_Royce_Manifest.pdf", date: "Original Factory Build • 5.2 MB", icon: "folder_special", color: "yellow"}
                ].map((doc, idx) => (
                    <div key={idx} className="group flex items-center gap-4 p-3 rounded hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer">
                        <div className={`w-10 h-10 bg-${doc.color}-500/10 rounded flex items-center justify-center text-${doc.color}-400 border border-${doc.color}-500/20`}>
                            <span className="material-symbols-outlined">{doc.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white truncate group-hover:text-primary transition-colors">{doc.name}</p>
                            <p className="text-xs text-muted truncate">{doc.date}</p>
                        </div>
                        <span className="material-symbols-outlined text-muted group-hover:text-white">download</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Garage */}
        <div>
          <div className="flex justify-between items-end mb-6">
            <h3 className="font-display font-bold text-2xl text-white">My Garage</h3>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">
            {GARAGE_ITEMS.map((item) => (
              <div key={item.id} className="min-w-[320px] md:min-w-[400px] snap-center glass-panel rounded-sm overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 opacity-90"></div>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h4 className="font-display font-bold text-xl">{item.name}</h4>
                    <p className="text-muted text-xs uppercase tracking-wider">{item.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${item.status === 'Active' ? 'bg-primary text-background-dark' : 'bg-white/10 backdrop-blur-md text-white border border-white/10'}`}>
                        {item.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-[10px] text-muted uppercase tracking-wider">Mileage</p>
                      <p className="text-sm font-bold text-white">{item.mileage}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted uppercase tracking-wider">Next Service</p>
                      <p className="text-sm font-bold text-white">{item.nextService}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 px-3 border border-white/10 hover:border-primary text-xs font-bold uppercase tracking-wider text-white hover:text-primary transition-all rounded-sm flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">build</span> Service History
                    </button>
                    <button className="flex-1 py-2 px-3 bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider text-muted hover:text-white transition-all rounded-sm flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">currency_exchange</span> Sell Back
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div onClick={() => navigate('/')} className="min-w-[320px] md:min-w-[400px] snap-center glass-panel rounded-sm overflow-hidden group border-dashed border border-white/10 hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center p-12 cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white/5 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <span className="material-symbols-outlined text-3xl text-muted group-hover:text-primary transition-colors">add</span>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Acquire New Asset</h4>
              <p className="text-sm text-muted max-w-[200px]">Browse the showroom or speak to the concierge.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vault;