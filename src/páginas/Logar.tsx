import React from "react";
import Formulário from "../componentes/Formulário";
import { Corpo } from "../styled-components/FormularioStyled";

const inputs = [
    {
        id: 1,
        placeholder: 'Insira o seu e-mail',
        name: 'email'
    },
    {
        id: 2,
        placeholder: 'Insira a sua senha',
        name: 'senha'
    }
]

function Logar(){
    return(
        <Corpo>
            <Formulário itens={inputs} url={'logar'} />
        </Corpo>
    );
}

export default Logar;