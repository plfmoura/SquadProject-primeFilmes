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
    const [ desc, setDesc ] = useState('')
    const [ img, setImg ] = useState([])
    const [ preco, setPreco ] = useState(Number)
    const [ count, setCount ] = useState(0)


    const getMovies = () => {
        let url = `https://json-server-md3.onrender.com/filmes`
        axios.get(url).then((response) => setMovies(response.data))
    }

    const sendMovies = () => {
        let url = `https://json-server-md3.onrender.com/filmes`

        axios.post(url, {
            nome: nome,
            preco: Number(preco),
            img: [img],
            descricao: desc
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
            preco: Number(preco),
            img: [img],
            descricao: desc
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
                img={(e) => setImg(e.target.value)}
                desc={(e) => setDesc(e.target.value)}
            />
            <Table striped bordered hover className={style.tableContent}>
                <thead style={{textAlign: "center"}}>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Ação</th>
                    <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map(( item ) => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.preco.toFixed(2)}</td>
                                <td> <Button variant="dark" 
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
