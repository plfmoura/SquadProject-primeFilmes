import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import style from './private.module.css'
import axios from 'axios';
import PrivateForm from '../../components/PrivateForm';
import { useNavigate } from 'react-router-dom';

export default function Private() {
    useEffect(() => {
        getMovies()
    }, [])

    
    const navigate = useNavigate()
    const [ movies, setMovies ] = useState([])
    const [ id, setId ] = useState('')
    const [ nome, setNome ] = useState('')
    const [ preco, setPreco ] = useState('')
    const [ count, setCount ] = useState(0)

    const getMovies = () => {
        let url = `https://json-server-md3.onrender.com/filmes`
        axios.get(url).then((response) => setMovies(response.data))
    }

    const sendMovies = () => {
        let url = `https://json-server-md3.onrender.com/filmes`

        axios.post(url, {
            nome: nome,
            preco: preco
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });

        setCount(count + 1)
    }

    const deleteMovies = ( id ) => {
        axios.delete(`https://json-server-md3.onrender.com/filmes/${id}`)
        .then(() => console.log('Delete successfull'));
        setCount(count + 1)
    }

    const updateMovies = ( id ) => {
        const atualizar = { 
            id: id,
            nome: nome,
            preco: preco,
        };
        axios.put(`https://json-server-md3.onrender.com/filmes/${id}`, atualizar)
        setCount(count + 1)
    }

    const handlePost = () => {
        if(nome !== '' && preco !== ''){
            sendMovies()
        } else {
            alert('Escreva o nome do Filme')
        }
    }

    const handleDelete = ( identificador ) => {
        deleteMovies( identificador )
    }

    const handleUpdate = ( identificador, nomePut, precoPut ) => {
        updateMovies( identificador )
        setNome(nomePut);
        setPreco(precoPut);
    }

    useEffect(() => {
        getMovies()
    }, [count])

  return (
    <div className={style.privateContainer}>
        <div className={style.privateContent}>
            <PrivateForm 
                submit={() => { handlePost() }} 
                nome={(e) => setNome(e.target.value)}
                preco={(e) => setPreco(e.target.value)}
            />
            <Table striped bordered hover className={style.tableContent}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>preco</th>
                    <th>-</th>
                    <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map(( item ) => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.preco}</td>
                                <td> <Button variant="primary" 
                                    onClick={() => { 
                                        handleUpdate( item.id, item.nome, item.preco);
                                      }}>Atualizar</Button>{' '} </td>
                                <td> <Button variant="danger" onClick={() => { handleDelete( item.id ) }}>Apagar</Button>{' '} </td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        </div>
    </div>
  )
}
