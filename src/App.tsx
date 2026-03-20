import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProductsPage from '@/pages/ProductsPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
