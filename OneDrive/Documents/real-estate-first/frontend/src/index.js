import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HouseContextProvider>
  <BrowserRouter future={{ 
    v7_startTransition: true, 
    v7_relativeSplatPath: true 
  }}>
   <App />
   
   </BrowserRouter>
   </HouseContextProvider>
); 