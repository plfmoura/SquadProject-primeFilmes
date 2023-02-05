import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

export default function Cadastro() {
    
    const [ newUser, setNewUser] = useState('')
    const [ newPassword, setNewPassword] = useState('')
    const [ usuarios, setUsuarios] = useState([])
    const [ resposta, setResposta] = useState(false)
    
    const pegarUsuarios = () => {
        const url = `https://json-server-md3.onrender.com/users/`
        axios.get(url)
        .then(( response ) => setUsuarios(response.data))
    }
    
    useEffect(() => {
        console.log(resposta)
    }, [resposta])
    

    const verificarUsuarios = () => {
        pegarUsuarios()
        setResposta(false)
        usuarios.map(( item ) => {
            let verificar = item.email
            if(verificar.includes(newUser)){
                setResposta(true)
                console.log(resposta)
            } else {
                setResposta(false)
            }
            if(resposta === true){
            console.log('Nomes iguais')
            } else {
                console.log('Não encontrei nomes iguais')
                registrarUsuario()
            }
        })
    }
    
    const registrarUsuario = () => {
        const url = `https://json-server-md3.onrender.com/users/`
        axios.post(url, {
            email: newUser,
            password: newPassword
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <div>
      <Form style={{marginTop: "10rem"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" onChange={(e) => setNewUser(e.target.value) } placeholder="Digite seu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" onChange={(e) => setNewPassword(e.target.value) } placeholder="Digite sua senha" />
            </Form.Group>
            <Form.Text className="text-muted">
              Nunca compartilhe seus dados cadastrais.
            </Form.Text>
            <Button
            variant="primary"
            onClick={verificarUsuarios}
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            Cadastrar
          </Button>
          </Form>
    </div>
  )
}
