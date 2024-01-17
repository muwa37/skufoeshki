import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomFooter from './components/ui/CustomFooter/CustomFooter';
import CustomNavbar from './components/ui/CustomNavbar/CustomNavbar';
import AppRouter from './router/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar/>
      <AppRouter/>
      <CustomFooter/>
    </BrowserRouter>
  );
}

export default App;
