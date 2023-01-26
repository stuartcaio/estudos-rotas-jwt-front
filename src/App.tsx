import React from 'react';
import './css/reset.css';
import { Botão, Botões, Corpo } from './styled-components/HomeStyled';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Corpo>
      <Botões>
        <Link to={'/registrar'}>
          <Botão>Registrar</Botão>
        </Link>
        <Link to={'/logar'}>
          <Botão>Logar</Botão>
        </Link>
      </Botões>
    </Corpo>
  );
}

export default App;