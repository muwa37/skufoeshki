import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/ui/CustomNavbar/CustomNavbar';
import AppRouter from './router/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
