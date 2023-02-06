import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import style from './cadastro.module.css'
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    
    const [ newUser, setNewUser] = useState('')
    const [ newPassword, setNewPassword] = useState('')
    const [ usuarios, setUsuarios] = useState([])
    const [ resposta, setResposta] = useState(false)
    
    const navigate = useNavigate()
    const pegarUsuarios = () => {
        const url = `https://json-server-md3.onrender.com/users/`
        axios.get(url)
        .then(( response ) => setUsuarios(response.data))
    }
    console.log(resposta)
    
    const verificarUsuarios = () => {
        pegarUsuarios()
        setResposta(false)
        usuarios.map(( item ) => {
            let verificar = item.email
            if(verificar.includes(newUser)){
                setResposta(true)
                console.log(resposta)
            } else {
                console.log(resposta)
            }
        })
        if(resposta === true){
            console.log('Nomes iguais')
        } else {
            registrarUsuario()
        }
    }

    const registrarUsuario = () => {
        setResposta(false)
        const url = `https://json-server-md3.onrender.com/users/`
        axios.post(url, {
            email: newUser,
            password: newPassword
        })

        function refreshPage() {
            window.location.reload(false);
        }
        alert('Usuario cadastrado com sucesso!')
        navigate('/')
    }

  return (
    <div className={style.cadastro}>
      <Form style={{marginTop: "10rem"}} className={style.formContainer}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" onChange={(e) => setNewUser(e.target.value) } placeholder="Digite seu melhor email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" onChange={(e) => setNewPassword(e.target.value) } placeholder="Digite uma senha" />
            </Form.Group>
            <Form.Text className="text-muted">
              {
                resposta ? (<p>O email já está cadastrado no sistema!</p>) : ('')
              }
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
