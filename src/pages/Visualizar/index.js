import React, { useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';
import {Container, ConteudoTitulo, Titulo, ButtonAction, ButtonInfo, ConteudoProd} from './styles';

export const Visualizar = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();    
    
    useEffect(() => {
        const getProduto = async () => {
            await fetch("http://localhost/pj_port/visualizar.php?id=" + id)
            .then((response) => response.json())
            .then ((responseJson) => {
                //console.log(responseJson);
                setData(responseJson.produto);
            });
        }
        getProduto();
    },[id]);
    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>Visualizar</Titulo>
                <ButtonAction>   
                    <Link to="/">
                        <ButtonInfo>Listar</ButtonInfo>
                    </Link>            
                </ButtonAction>
            </ConteudoTitulo>
            <ConteudoProd>ID: {data.id}</ConteudoProd>
            <ConteudoProd>Título: {data.titulo}</ConteudoProd>           
            <ConteudoProd>Descrição: {data.descricao}</ConteudoProd>
        </Container>
        
    );

}