import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    border-radius: 6px;
`;

export const ConteudoTitulo = styled.section`
    display: flex; 
    justify-content: space-between;
`;

export const ButtonAction = styled.section`
    margin: 20px 0;
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

export const AlertSuccess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 20px 0;
    border: 1px solid #badbcc;
    border-radius: 4px;
    padding: 7px;
    font-family: Source Sans Pro, sans-serif;
`;

export const AlertDanger = styled.p`
    background-color: #f8d7da;
    color: #842029;
    margin: 20px 0;
    border: 1px solid #f5c2c7;
    border-radius: 4px;
    padding: 7px;
    font-family: Source Sans Pro, sans-serif;
`;

export const Form = styled.form`
    margin: 0px auto;
`;

export const ConteudoDiv = styled.div`
    max-width: 960px;
    padding: 10px 30px 30px;
    font-family: Source Sans Pro, sans-serif;
`;

export const Label = styled.label`
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    margin-bottom: 16px;
    font-family: Source Sans Pro, sans-serif;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    font-family: Source Sans Pro, sans-serif;
    
`;

export const Button = styled.button`
    background-color: #b085b7;
    font-family: Source Sans Pro, sans-serif;
    color: #fff;
    padding: 8px 12px;
    border:none;
    border-radius: 4px;   
    cursor:pointer;
    font-size: 18px; 
    :hover{
        border: 1px solid black;
        color: black;
    }
`;

