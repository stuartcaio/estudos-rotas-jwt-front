import React from "react";
import Formulário from "../componentes/Formulário";
import '../css/reset.css';
import { Formulario } from "../styled-components/FormularioStyled";

const inputs = [
    {
        id: 1,
        placeholder: 'Insira o seu nome',
        name: 'nome'
    },
    {
        id: 2,
        placeholder: 'Insira o seu e-mail',
        name: 'email'
    },
    {
        id: 3,
        placeholder: 'Insira a sua senha',
        name: 'senha'
    }
]

function Registrar(){
    return(
        <Formulário itens={inputs} url={'registrar'} />
    );
}

export default Registrar;