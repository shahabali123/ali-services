import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import FloatingWhatsApp from './common/FloatingWhatsApp'
import HomePage from './home/HomePage'
import BlogPage from './blogs/BlogPage'
import BlogDetail from './blogs/BlogDetail.jsx'
import NotFound from './common/NotFound'
import Contact from './contact/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/:id' element={<BlogDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
