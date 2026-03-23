import './App.css'
import { Route, Routes } from 'react-router-dom'

// pages imports
import Home from './pages/home/home'
import Portfolio from './pages/portfolio/portfolio'
import About from './pages/about/about'
import Blog from './pages/blog/blog'
import Article from './pages/blog/article'
import Contact from './pages/contact/contact'
// 404 page
import NotFound from './pages/NotFound'
// layouts impots
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
// UI components
import Loader from './components/ui/Loader'

function App() {

  return (
    <>
    <Loader duration={4000} />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog/:slug" element={<Article />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
        {/*  404 page route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
