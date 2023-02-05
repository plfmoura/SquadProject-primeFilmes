import React, { useEffect, useState } from 'react'
import style from './filmes.module.css'
import axios from 'axios'
import FilmesCard from '../../components/FilmesCard'
import { Button, Form } from 'react-bootstrap'
import Modal from '../../components/ModalCart'

export default function Filmes() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState()
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal, setOpenModal] = useState(false)


  const getMovies = () => {
    let url = `https://json-server-md3.onrender.com/filmes`
    axios.get(url).then((response) => setMovies(response.data))
  }

  const moviesFilter = (name) => {
    let moviesResults = [];
    if (name === '') {
      getMovies();
    }

    let search = name.toLowerCase()
    for(var i in movies){
        if(movies[i].nome.toLowerCase().includes(search.toLowerCase())){
          moviesResults.push(movies[i]);
        }
      setMovies(moviesResults);
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const modalClose = function () {
    setOpenModal(false)
    setOpenModal2(false)
  }


  return (
    <>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>

        <ul>

          {cart.map(item => (
            <li key={item.id}>
              {item.nome} - ${item.preco}

            </li>

          ))}
          <button onClick={() => setOpenModal2(true)}>Finalizar compra</button>
          <button onClick={() => setOpenModal(false)}>Fechar</button>

        </ul>
      </Modal>

      <Modal
        isOpen={openModal2}
        setModalOpen={() => setOpenModal2(!openModal2)}>
        Obrigado pela compra!
        <br></br>
        <button onClick={modalClose}>Fechar</button>

      </Modal>
      <div className={style.filmesContainer}>
        <h1 className={style.titulo}>Catálogo de filmes</h1>
      <button onClick={() => setOpenModal(true)}>Abrir Modal</button>

        <Form className={style.searchInput}>
          <Form.Control
            type="search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => moviesFilter(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <div className={style.filmesContent}>
          {
            movies.map((item, key) =>
              <FilmesCard
                image={item.img[0]}
                title={item.nome}
                preco={item.preco}
                key={key}
                onPress={()=> addToCart(item)}
              />
            )

          }
        </div>
      </div>
    </>
  )
}

