import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Layout from './components/Layout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
 </>
  );
}

export default App;
