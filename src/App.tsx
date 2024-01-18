import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './router/AppRouter'
import Navbar from './components/logic/Navbar/Navbar';
import Footer from './components/logic/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
