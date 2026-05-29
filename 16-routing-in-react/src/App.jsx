import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componets/Navbar';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));

const App = () => {
  return (
    <>
      <div className='h-screen w-screen bg-black text-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>

  )
}

export default App