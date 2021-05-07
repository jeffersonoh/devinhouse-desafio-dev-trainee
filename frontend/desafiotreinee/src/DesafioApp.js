import React from 'react';
import './DesafioApp.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import ClienteCriar from './Components/Pages/ClienteCriar';
import Footer from './Components/Footer';

const DesafioApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<ClienteCriar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default DesafioApp;
