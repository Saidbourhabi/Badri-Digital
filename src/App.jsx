import './App.css'
import { Route, Routes } from 'react-router-dom'

// pages imports
import Home from './pages/home/home'
// 404 page
import NotFound from './pages/NotFound'
// layouts impots
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
        {/*  404 page route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
