import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Layout from './components/Layout';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpasssward from './pages/Forgotpasssward';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy'
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import RefundPolicy from './pages/RefundPolicy'
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='store' element={<OurStore />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blogs/:id' element={<SingleBlog />} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path ='login' element={<Login />} />
            <Route path ='forgot-password' element={<Forgotpasssward />} />
            <Route path ='signup' element={<Signup />} />
            <Route path ='reset-password' element={<Resetpassword />} />
            <Route path ='privacy-policy' element={<PrivacyPolicy />} />
            <Route path ='shipping-policy' element={<ShippingPolicy />} />
            <Route path ='term-conditions' element={<TermsAndCondition />} />
            <Route path ='refund-policy' element={<RefundPolicy />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
 </>
  );
}

export default App;
