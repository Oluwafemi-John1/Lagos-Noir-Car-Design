import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpecSheet: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-white overflow-hidden h-screen flex flex-col font-tech selection:bg-primary selection:text-background-dark">
      {/* Top Nav */}
      <header className="flex-none z-50 border-b border-[#283933] bg-[#111816]/90 backdrop-blur-md">
        <div className="px-6 md:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => navigate('/')}>
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined !text-[24px]">diamond</span>
            </div>
            <h2 className="text-white text-lg font-display font-bold leading-tight tracking-wider">LAGOS NOIR</h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <button onClick={() => navigate('/')} className="text-white text-sm font-medium hover:text-primary transition-colors">Showroom</button>
            <button onClick={() => navigate('/concierge')} className="text-white text-sm font-medium hover:text-primary transition-colors">Concierge</button>
            <button onClick={() => navigate('/vault')} className="text-white text-sm font-medium hover:text-primary transition-colors">The Vault</button>
          </nav>
          <div className="flex gap-3">
            <button onClick={() => navigate('/concierge')} className="flex h-9 items-center justify-center rounded bg-primary px-4 text-[#111816] text-sm font-bold tracking-wide hover:bg-primary/90 transition-all">
              <span>CONCIERGE</span>
            </button>
            <button className="flex size-9 items-center justify-center rounded bg-[#283933] text-white hover:bg-[#334155] transition-colors">
              <span className="material-symbols-outlined !text-[20px]">person</span>
            </button>
            <button className="flex size-9 items-center justify-center rounded bg-[#283933] text-white hover:bg-[#334155] transition-colors">
              <span className="material-symbols-outlined !text-[20px]">notifications</span>
            </button>
          </div>
        </div>
        <div className="px-6 md:px-10 py-2 flex flex-wrap gap-2 text-xs border-t border-[#283933]">
          <button onClick={() => navigate('/')} className="text-[#9db9b0] hover:text-white transition-colors">Showroom</button>
          <span className="text-[#9db9b0]">/</span>
          <span className="text-[#9db9b0]">Inventory</span>
          <span className="text-[#9db9b0]">/</span>
          <span className="text-primary font-medium">2024 Maybach S680</span>
        </div>
      </header>

      {/* Main Split */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left Stage */}
        <section className="relative w-full lg:w-[60%] h-[50vh] lg:h-full bg-black flex flex-col justify-center overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Side profile of a luxury Mercedes-Maybach S-Class" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] ease-linear scale-100 hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlw9LaCbSnxYduq8QvfX47oHL-3ndA8XIyBZ6NZzA5irnoSmfZA-cFuDmq77Ry9Xu0TKAOINbFGWEhyuEVp-FD7Iuw7tParRzZBmgxa2-W1HGXRZE8-JFLt1bLd4kmTFgUbXKbAsD6u6Uatu9iyG2lGYGwqSxvjC0OOTv1mQxsukLTq5_8nG5kh_rwInu1uSuez1Ov7yiCLgKSYZnAoeseq4w7BeNgkZSt35SU27SU9AnSNd6qurYRK7txVdHaRj3BnYEzOdhDK56I" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/50 via-transparent to-background-dark/50"></div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
            <div className="glass-panel rounded-full px-2 py-2 flex items-center gap-2">
              <button className="size-10 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <span className="text-xs font-mono tracking-widest text-muted">01 / 08</span>
              <button className="size-10 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <button className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary/20 hover:border-primary/50 transition-all group/360">
              <span className="material-symbols-outlined text-primary group-hover/360:animate-spin">360</span>
              <span className="text-xs font-bold tracking-wider text-white">INTERIOR</span>
            </button>
          </div>

          <div className="absolute top-8 right-8 z-20">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/40 backdrop-blur-sm border border-white/10">
              <div className="size-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary">Live Feed</span>
            </div>
          </div>
        </section>

        {/* Right Terminal */}
        <section className="w-full lg:w-[40%] h-[50vh] lg:h-full bg-background-dark border-l border-border-dark flex flex-col relative z-10 shadow-2xl overflow-hidden">
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 pb-32">
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">Virgil Abloh Edition</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 text-muted border border-white/10">1 of 150</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2 leading-tight">2024 Mercedes-Maybach <span className="italic font-normal text-muted">S680</span></h1>
              <p className="text-sm text-muted font-light leading-relaxed max-w-md">
                The ultimate expression of automotive luxury. Finished in Obsidian Black and High-Tech Silver two-tone paintwork.
              </p>
            </div>

            <div className="mb-10 glass-panel p-6 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-white">payments</span>
              </div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">Landed Cost (Lagos)</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl lg:text-4xl font-bold font-tech text-primary tracking-tight">₦620,000,000</span>
              </div>
              <div className="mt-4 flex gap-4 text-xs text-muted border-t border-white/10 pt-3">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
                  <span>Clearing Included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
                  <span>Insured Transit</span>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-display font-semibold text-white mb-4 border-b border-border-dark pb-2">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors relative group">
                  <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Engine</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-white">6.0L Biturbo V12</span>
                    <span className="material-symbols-outlined text-[12px] text-muted cursor-help">info</span>
                  </div>
                </div>
                <div className="p-3 rounded border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Mileage</p>
                  <p className="text-sm font-medium text-white">124 KM <span className="text-muted text-[10px]">(Delivery)</span></p>
                </div>
                <div className="p-3 rounded border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Location</p>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-yellow-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-white">High Seas (Atlantic)</span>
                  </div>
                </div>
                <div className="p-3 rounded border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <p className="text-[10px] text-muted uppercase tracking-wider mb-1">VIN</p>
                  <p className="text-sm font-mono text-white tracking-wider">W1K...89X</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-display font-semibold text-white mb-4 border-b border-border-dark pb-2">Provenance & Title</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <span className="material-symbols-outlined text-[16px]">gavel</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Customs Cleared</p>
                      <p className="text-xs text-muted">Apapa Port Authority verified</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
                <div className="flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Duty Paid</p>
                      <p className="text-xs text-muted">Full taxes remitted</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Dock */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-background-dark/95 backdrop-blur-xl border-t border-border-dark z-30">
            <div className="flex flex-col gap-3">
              <button onClick={() => navigate('/concierge')} className="w-full h-12 rounded bg-primary text-background-dark font-bold font-tech uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(16,183,127,0.3)] hover:shadow-[0_0_30px_rgba(16,183,127,0.5)]">
                <span>Reserve Allocation</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button onClick={() => navigate('/concierge')} className="w-full h-10 rounded border border-border-dark text-white font-medium text-sm font-tech uppercase tracking-wide hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-muted">chat</span>
                <span>Ask Concierge</span>
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-muted opacity-60">
              <span className="material-symbols-outlined text-[12px]">lock</span>
              <span>256-bit Encrypted Transaction</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SpecSheet;