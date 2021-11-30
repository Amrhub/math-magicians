import React from 'react';
import Calculator from './components/Calculator';
import './App.scss';
import Navbar from './components/Navbar';
import Quote from './pages/Quote/Quote';
import Home from './pages/Home/Home';

const App = () => (
  <div className="App">
    <Navbar />
    <Calculator />
    <Quote />
    <Home />
  </div>
);

export default App;
