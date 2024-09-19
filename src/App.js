import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LupaPassword from './components/LupaPassword';
import PulihkanAkun from './components/PulihkanAkun';
import AkunBerhasilDipulihkan from './components/AkunBerhasilDipulihkan';
import DaftarAkun1 from './components/DaftarAkun1';
import DaftarAkun2 from './components/DaftarAkun2';

function App() {
  return (
    <Router>
        <Routes>
          {/* Define route for each component */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/lupa-password" element={<LupaPassword />} />
          <Route path="/pulihkan-akun" element={<PulihkanAkun />} />
          <Route path="/akun-berhasil-dipulihkan" element={<AkunBerhasilDipulihkan />} />
          <Route path="/daftar-akun1" element={<DaftarAkun1 />} />
          <Route path="/daftar-akun2" element={<DaftarAkun2 />} />
        </Routes>
    </Router>
  );
}

export default App;
