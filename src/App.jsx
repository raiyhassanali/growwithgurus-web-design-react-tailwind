
import './index.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Resources from './pages/Resources';
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/resources" element={<Resources />} />
      {/* Fallback routes or others as needed */}
      <Route path="/mdcat" element={<div className="text-white p-20 text-center">MDCAT Prep Page (Placeholder)</div>} />
      <Route path="/scholarships" element={<div className="text-white p-20 text-center">Scholarships Page (Placeholder)</div>} />
      <Route path="/workshops" element={<div className="text-white p-20 text-center">Workshops Page (Placeholder)</div>} />
      <Route path="/community" element={<div className="text-white p-20 text-center">Community Page (Placeholder)</div>} />
      <Route path="/contact" element={<div className="text-white p-20 text-center">Contact Us Page (Placeholder)</div>} />
      <Route path="/why-free" element={<div className="text-white p-20 text-center">Why Free Page (Placeholder)</div>} />
      <Route path="*" element={<div className="text-white p-20 text-center">404 - Page Not Found</div>} />
    </Routes>
  )
}

export default App
