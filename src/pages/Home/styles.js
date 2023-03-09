import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 30px auto;
    box-shadow: 0 0 1em #6c757d;
    border-radius: 6px;
    padding: 0px 60px 60px;
`;

export const ConteudoTitulo = styled.section`
    display: flex; 
    justify-content: space-between;
`;

export const ButtonAction = styled.section`
    margin: 20px 0;
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

export const ButtonToView = styled.button`
    background-color: #fff;
    font-family: Source Sans Pro, sans-serif;
    color: black;
    padding: 4px 6px;
    border:1px solid black;
    border-radius: 4px;   
    cursor:pointer;
    font-size: 12px; 
    margin-bottom: 3px;
    margin-left: 18px;
    :hover{
        border:none;
        color: #fff;
        background-color: #199ebd;
    }
`;

export const Titulo = styled.h1`
    color: #3e3e3e;
    font-size: 23px;
`;

export const Table = styled.table`
    width: 100%;
    th{
        background-color: #b085b7;
        color: #3e3e3e;
        padding: 8px;
        border-radius: 8px 8px 0px 0px;
    }
    td{
        background-color: #f6f6f6;
        color: #3e3e3e;
        padding: 8px;
        border-radius: 0px 0px 8px 8px;
    }
`;

export const ButtonToEdit = styled.button`
    background-color: #fff;
    font-family: Source Sans Pro, sans-serif;
    color: black;
    padding: 4px 16px;
    border:1px solid black;
    border-radius: 4px;   
    cursor:pointer;
    font-size: 12px; 
    margin-bottom: 3px;
    margin-left: 18px;
    :hover{
        border:none;
        color: #fff;
        background-color: #1db394;
    }
`;

export const ButtonErase = styled.button`
    background-color: #fff;
    font-family: Source Sans Pro, sans-serif;
    color: black;
    padding: 4px 13px;
    border:1px solid black;
    border-radius: 4px;   
    cursor:pointer;
    font-size: 12px; 
    margin-bottom: 3px;
    margin-left: 18px;
    :hover{
        border:none;
        color: #fff;
        background-color: #7b2331;
    }
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