import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import NuestraHistoria from './pages/NuestraHistoria/NuestraHistoria.jsx'
import NuestrosDulces from './pages/NuestrosDulces/NuestrosDulces.jsx'

// Página en blanco temporal: cada compañero reemplaza el element de su ruta por su vista
const paginaEnBlanco = <div style={{ minHeight: '60vh', background: '#faf7ef' }} />

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nuestros-dulces" element={<NuestrosDulces />} />
          <Route path="/por-encargo" element={paginaEnBlanco} />
          <Route path="/nuestra-historia" element={<NuestraHistoria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
