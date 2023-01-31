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

    function aoEnviar(e: any, URL: any){
        e.preventDefault();

        const usuarios = {
            nome,
            email,
            senha
        }

        if(URL === 'logar'){
            api.post('logar', usuarios).then((resposta) => {
                console.log(resposta);
                
                setEmail('');
                setSenha('');
    
                window.location.href='/sistema';
            }).catch(() => {
                alert('E-mail ou senha incorretos.');
            });
        }

        if(URL === 'registrar'){
            api.post('adicionar', usuarios).then((resposta) => {
                console.log(resposta);
                
                setNome('');
                setEmail('');
                setSenha('');
    
                window.location.href='/logar';
            }).catch((erro) => {
                if(erro?.resposta?.data?.menssage){
                    alert(erro.resposta.data?.menssage);
                } else{
                    alert('Aconteceu um erro ao efetuar o login.');
                }
            });
        }
    }

    function verificaValor(nomeDoInput: string){
        if(nomeDoInput === 'nome'){
            return nome;
        }

        if(nomeDoInput === 'email'){
            return email;
        }

        if(nomeDoInput === 'senha'){
            return senha;
        }
    }

    function verificaSetValor(e: any, nomeDoInput: string | number){
        if(nomeDoInput === 'nome'){
            return setNome(e);
        }

        if(nomeDoInput === 'email'){
            return setEmail(e);
        }

        if(nomeDoInput === 'senha'){
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
            <Formulario onSubmit={(e: any) => aoEnviar(e, props.url)} method="post">
                {mostraInputs()}
                <Botão type="submit">Enviar</Botão>
            </Formulario>
        </Corpo>
    );
}

export default Formulário;