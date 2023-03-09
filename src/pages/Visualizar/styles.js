import styled from "styled-components";

export const Container = styled.section`
    max-width: 960px;
    margin: 30px auto;
    box-shadow: 0 0 1em #6c757d;
    padding: 20px;
`;

export const ConteudoTitulo = styled.section`
    display: flex; 
    justify-content: space-between;
`;

export const ButtonAction = styled.section`
    margin: 15px 0;
`;

export const ButtonInfo = styled.button`
    background-color: #30949d;
    font-family: Source Sans Pro, sans-serif;
    color: #fff;
    padding: 6px 10px;
    border:none;
    border-radius: 4px;   
    cursor:pointer;
    font-size: 18px; 
    :hover{
        border: 1px solid black;
        color: black;
    }
`;

export const Titulo = styled.h1`
    color: #3e3e3e;
    font-size: 23px;
    font-family: Source Sans Pro, sans-serif;
`;

export const ConteudoProd = styled.p`
    color: #3e3e3e;
    font-size: 16px;
    font-family: Source Sans Pro, sans-serif;
    padding: 10px 10px;
    background-color: #ecf7f7;

`;
