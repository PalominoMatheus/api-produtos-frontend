import React, { useState } from "react";
import {Link} from 'react-router-dom';

import {Form, Container, ConteudoDiv, ConteudoTitulo, ButtonAction, ButtonInfo, Label, Input, Titulo, AlertSuccess, AlertDanger, Button} from "./styles";

export const Cadastrar = () => {

  const [produto, setProduto] = useState({
    titulo: '',
    descricao: ''
  });

  const [status, setStatus] = useState({
    type:'',
    mensagem:''
  })

  const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value});

  const cadProduto = async e =>{
    e.preventDefault();
    //console.log(produto.titulo);

    await fetch("http://localhost/pj_port/cadastrar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({produto})
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson)
      if(responseJson.error){
        setStatus({
          type: 'erro',
          mensagem: responseJson.mensagem
        });
        }else{
          setStatus({
            type: 'success',
            mensagem: responseJson.mensagem
          })
        }
    }).catch(() => {
      setStatus({
        type: 'erro',
        mensagem: 'Produto não cadastrado, tente novamente mais tarde!'
      })
    })
  }

  return (
    <Container>
      <ConteudoDiv>
        <ConteudoTitulo>
          <Titulo>Cadastrar</Titulo>
          <ButtonAction>   
              <Link to="/">
                <ButtonInfo>Listar</ButtonInfo>
              </Link>            
          </ButtonAction>
        </ConteudoTitulo>

        {status.type === 'erro'? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
        {status.type === 'success'? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
        
        <Form onSubmit={cadProduto}>
            <Label>Título: </Label>
            <Input type="text" name="titulo" placeholder="Título do produto" onChange={valorInput}/><br/><br/>

            <Label>Descrição: </Label>
            <Input type="text" name="descricao" placeholder="Descrição do produto" onChange={valorInput}/><br/><br/>

            <Button type="submit">Cadastrar</Button>
        </Form>
      </ConteudoDiv>
    </Container>
  );
}
