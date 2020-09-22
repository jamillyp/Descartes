import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import Navegador from '../src/components/Navegador';
import Nav from '../src/components/SubNav';

import './styles/Global.css'
function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <Navegador />
          <Nav />
          <Routes />
        </BrowserRouter>    
    </div>
  );
}

export default App;
