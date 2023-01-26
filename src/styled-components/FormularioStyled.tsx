import styled from "styled-components";

export const Corpo = styled.body`
display: flex;
justify-content: center;
align-items: center;

width: 100vw;
height: 100vh;
`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

padding: 5rem;

border: 1px solid black;
border-radius: 15px;
`;

export const Input = styled.input`
width: 15rem;
height: 1rem;

padding: 0.5rem;

border-radius: 5px;
border: 1px solid grey;
`;

export const Botão = styled.button`
padding: 0.5rem;

border-radius: 5px;

width: 10rem;

background-color: black;
color: white;
`;