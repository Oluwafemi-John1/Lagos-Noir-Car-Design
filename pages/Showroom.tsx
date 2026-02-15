import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VEHICLES } from '../constants';

const Showroom: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = VEHICLES.filter(v => {
    const matchesCategory = filter === 'All' || v.type === filter || (filter === 'SUV & Armored' && v.type === 'SUV');
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || v.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background-dark text-white min-h-screen font-body overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
            <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
            <h1 className="font-display font-bold text-2xl tracking-widest text-white">LAGOS NOIR</h1>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <button className="text-white text-sm font-medium tracking-widest hover:text-primary transition-colors border-b border-primary pb-1">SHOWROOM</button>
            <button onClick={() => navigate('/vault')} className="text-muted text-sm font-medium tracking-widest hover:text-white transition-colors">THE VAULT</button>
            <button onClick={() => navigate('/concierge')} className="text-muted text-sm font-medium tracking-widest hover:text-white transition-colors">CONCIERGE</button>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded bg-secondary/10 border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-xs font-bold text-secondary tracking-wide uppercase">Concierge Online</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted material-symbols-outlined text-[18px] group-focus-within:text-primary transition-colors">search</span>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-black/40 text-white text-xs font-medium uppercase tracking-wider rounded-sm pl-9 pr-3 py-2 w-24 md:w-40 focus:w-32 md:focus:w-60 transition-all outline-none placeholder:text-muted/70"
                />
              </div>
              <button className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div onClick={() => navigate('/vault')} className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                <span className="font-display font-bold text-xs text-primary">YA</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative w-full h-[85vh] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614267613527-3081d604e382?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-background-dark/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-body text-xs font-bold tracking-[0.2em] uppercase">Private Collection</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Welcome, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Mr. Adebayo.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-xl leading-relaxed">
              The city sleeps, but we do not. Browse the silent wealth collection. Your allocation for the 2024 season is ready for review.
            </p>
            <div className="pt-4 flex gap-4">
              <button className="bg-primary text-black font-body font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-white transition-colors">
                View Manifest
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">Discover</span>
          <span className="material-symbols-outlined text-white">keyboard_arrow_down</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-20 max-w-[1440px] mx-auto px-6 py-20 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Sidebar */}
          <aside className="hidden lg:block w-48 sticky top-32 h-fit">
            <div className="glass-panel rounded-card p-6 flex flex-col gap-8">
              <div>
                <h3 className="font-display text-white text-lg font-semibold mb-6 italic">Filter By</h3>
                <div className="flex flex-col gap-4 items-start">
                  {['All', 'SUV & Armored', 'Supercar', 'Grand Tourer', 'Electric'].map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setFilter(cat === 'All' ? 'All' : cat)}
                      className={`${filter === (cat === 'All' ? 'All' : cat) ? 'text-primary border-b border-primary' : 'text-muted hover:text-white'} font-body font-bold text-sm uppercase tracking-wider transition-colors w-full text-left pb-1`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[1px] w-full bg-border-dark"></div>
              <div>
                <h3 className="font-display text-white text-lg font-semibold mb-6 italic">Status</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-muted text-sm hover:text-white cursor-pointer group">
                    <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Lagos Ground</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted text-sm hover:text-white cursor-pointer group">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="group-hover:translate-x-1 transition-transform">High Seas</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted text-sm hover:text-white cursor-pointer group">
                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Sourcing</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
              {filteredVehicles.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  onClick={() => navigate(`/inventory/${vehicle.id}`)}
                  className="vehicle-card group relative break-inside-avoid rounded-card overflow-hidden bg-surface cursor-pointer border border-white/5 hover:border-primary/50 transition-colors"
                >
                  <div className={`overflow-hidden relative ${vehicle.type === 'Supercar' ? 'aspect-video' : 'aspect-[3/4]'} ${vehicle.id === 'v3' ? 'aspect-square' : ''}`}>
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="card-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
                    <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${vehicle.status === 'Lagos Ground' ? 'bg-secondary animate-pulse' : vehicle.status === 'High Seas' ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">{vehicle.status}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col gap-1">
                    <div className="flex justify-between items-end mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-white italic">{vehicle.name}</h3>
                        <p className="text-muted text-xs font-body tracking-widest uppercase mt-1">{vehicle.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-body text-primary font-bold text-lg tracking-wide">{vehicle.price}</p>
                      </div>
                    </div>
                    <button className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 mt-4 w-full bg-white/10 hover:bg-primary hover:text-black backdrop-blur-md border border-white/20 text-white hover:border-primary font-body font-bold text-xs py-3 uppercase tracking-[0.15em] transition-all rounded-sm flex items-center justify-center gap-2">
                      View Manifest <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredVehicles.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center opacity-70">
                    <span className="material-symbols-outlined text-4xl mb-2 text-muted">search_off</span>
                    <p className="text-muted text-sm uppercase tracking-widest">No assets found matching your criteria.</p>
                </div>
            )}

            <div className="mt-20 flex flex-col items-center justify-center gap-4 text-center">
              <span className="text-primary material-symbols-outlined animate-spin text-4xl">sync</span>
              <p className="text-muted font-body text-sm tracking-widest uppercase">Decrypting more assets...</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-dark bg-background-dark py-12">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">diamond</span>
            <span className="font-display font-bold text-white tracking-widest text-sm">LAGOS NOIR © 2024</span>
          </div>
          <div className="flex gap-8">
            <a className="text-muted text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="text-muted text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors" href="#">Terms</a>
            <a className="text-muted text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors" href="#">Concierge Policy</a>
          </div>
        </div>
      </footer>

      {/* FAB */}
      <div className="fixed bottom-8 right-8 z-50">
        <button onClick={() => navigate('/concierge')} className="group flex items-center gap-3 bg-primary text-black px-5 py-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-1">
          <span className="font-body font-bold text-sm uppercase tracking-wide">Concierge</span>
          <span className="material-symbols-outlined">chat_bubble</span>
        </button>
      </div>
    </div>
  );
};

export default Showroom;