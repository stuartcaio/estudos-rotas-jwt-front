import React from "react";
import { useState } from "react";
import { Botão, Corpo, Formulario, Input } from "../styled-components/FormularioStyled";
import api from "../Api";

type tipoInput = {
    id: number,
    placeholder: string,
    name: string
}

function Formulário(props: any){
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    function aoEnviar(e: any){
        e.preventDefault();

        const usuarios = {
            nome,
            email,
            senha
        }

        api.post('logar', usuarios).then((resposta) => {
            console.log(resposta);
            
            setEmail('');
            setSenha('');

            window.location.href='/sistema';
        })
    }

    function verificaValor(nomeDoInput: string){
        if(nomeDoInput == 'nome'){
            return nome;
        }

        if(nomeDoInput == 'email'){
            return email;
        }

        if(nomeDoInput == 'senha'){
            return senha;
        }
    }

    function verificaSetValor(e: any, nomeDoInput: string | number){
        console.log(nome);
        console.log(email);
        console.log(senha)

        if(nomeDoInput == 'email'){
            return setEmail(e);
        }

        if(nomeDoInput == 'senha'){
            return setSenha(e);
        }
    }

    function mostraInputs(){
        return props.itens.map((input: tipoInput) => {
            return <Input placeholder={input.placeholder} name={input.name} value={verificaValor(input.name)} onChange={(e: any) => {
                return verificaSetValor(e.target.value, input.name)
            }} key={input.id} required />
        })
    }

    return(
        <Corpo>
            {props.url == 'registrar' &&
            <Formulario action={'http://localhost:8080/adicionar'} method="post">
                {mostraInputs()}
                <Botão type="submit">Enviar</Botão>
            </Formulario>
            }

            {props.url == 'logar' &&
            <Formulario onSubmit={(e: any) => aoEnviar(e)} method="post">
                {mostraInputs()}
                <Botão type="submit">Enviar</Botão>
            </Formulario>
            }
        </Corpo>
    );
}

export default Formulário;