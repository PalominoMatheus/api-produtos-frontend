import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {Container, ConteudoTitulo, ButtonAction, Button, ButtonToView, Table, Titulo, ButtonToEdit, ButtonErase, AlertDanger, AlertSuccess} from "./styles";

export const Home = () => {

  const [data, setData] = useState([]);

  const [status, setStatus] = useState({
    "type":'',
    "mensagem": ''
  });

  const getProdutos = async () => {
    fetch("http://localhost/pj_port/index.php")
    .then((response) => response.json())
    .then((responseJson) => (
      //console.log(responseJson),
      setData(responseJson.records)
    ));
  } 

  const apagarProduto = async (idProduto) => {
    await fetch("http://localhost/pj_port/apagar.php?id=" + idProduto)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.erro){
        setStatus({
          type: 'erro',
          mensagem: responseJson.mensagem
        });
      }else{
        setStatus({
          type: 'success',
          mensagem: responseJson.mensagem
        });
        getProdutos();
      }
    }).catch(() => {
      setStatus({
        type: 'erro',
        mensagem: "Erro: Produto não apagado, tente novamente mais tarde!"
      });
    })
  };

  useEffect(() => {
    getProdutos();
  },[])

  return (
    <Container>
      <ConteudoTitulo>
        <Titulo>Listar</Titulo>
        <ButtonAction>
          <Link to="/cadastrar">
            <Button>Cadastrar</Button>
          </Link>
        </ButtonAction>
      </ConteudoTitulo>

      {status.type === 'erro'? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
      {status.type === 'success'? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>
                <Link to={"/visualizar/" + produto.id}>
                  <ButtonToView>Visualizar</ButtonToView>
                </Link>
                <Link to={"/editar/" + produto.id}>
                  <ButtonToEdit>Editar</ButtonToEdit>
                </Link>
                  <ButtonErase onClick={() => apagarProduto(produto.id)}>Apagar</ButtonErase>
              </td>
            </tr>            
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
