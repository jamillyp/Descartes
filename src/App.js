import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import Navegador from '../src/components/Navegador';
import Nav from '../src/components/SubNav';
import Footer from '../src/components/Footer';

import './styles/Global.css'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navegador />
          <Nav />
          <Footer></Footer>
          <Routes />
        </BrowserRouter>    
    </div>
  );
}

export default App;
