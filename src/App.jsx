import './App.css'
import { Route, Routes } from 'react-router-dom'

// pages imports
import Home from './pages/home/home'
// 404 page
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
        {/*  404 page route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
