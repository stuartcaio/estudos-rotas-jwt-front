import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registrar from './páginas/Registrar';
import Sistema from './styled-components/Sistema';
import Logar from './páginas/Logar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/sistema' element={<Sistema />} />
      <Route path='/registrar' element={<Registrar />} />
      <Route path='/logar' element={<Logar />} />
    </Routes>
  </Router>
);