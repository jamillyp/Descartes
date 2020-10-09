import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import Navegador from '../src/components/Navegador';
import Nav from '../src/components/SubNav';
import { FooterContainer } from "./containers/footer";

import './styles/Global.css'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav /> 
          <Navegador />        
          <Routes />
          <FooterContainer /> 
        </BrowserRouter>  
    </div>
  );
}

export default App;
