import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import './App.scss';
import Navbar from './components/Navbar';
import Quote from './pages/Quote/Quote';
import Home from './pages/Home/Home';

const App = () => (
  <div className="App">
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  </div>
);

export default App;
