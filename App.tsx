import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Showroom from './pages/Showroom';
import SpecSheet from './pages/SpecSheet';
import Vault from './pages/Vault';
import Concierge from './pages/Concierge';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Showroom />} />
        <Route path="/inventory/:id" element={<SpecSheet />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/concierge" element={<Concierge />} />
      </Routes>
    </HashRouter>
  );
};

export default App;