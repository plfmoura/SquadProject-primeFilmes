import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmesCard from '../../components/FilmesCard'
import { Button, Form } from 'react-bootstrap'
import Loading from '../../components/Loading'
import Modal from '../../components/ModalCart'
import style from './filmes.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

export default function Filmes() {
  
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
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
    console.log(name)

    let search = name.toLowerCase()
    for(var i in movies){
        if(movies[i].nome.toLowerCase().includes(search.toLowerCase())){
          moviesResults.push(movies[i]);
        }
      setMovies(moviesResults);
    }
  }

  useEffect(() => {
    setTimeout(() => {getMovies()
      setLoading(true)
    }, 3000)
  }, [])

  const addToCart = (product) => {
    let newCart = [...cart];
    let index = newCart.findIndex(p => p.id === product.id);
    if (index === -1) {
      newCart.push({...product, quantity: 1});
    } else {
      newCart[index].quantity++;
    }
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    let newCart = [...cart];
    let index = newCart.findIndex(p => p.id === product.id);
    if (index !== -1) {
      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      } else {
        newCart.splice(index, 1);
      }
    }
    setCart(newCart);
  };

  const modalClose = function () {
    setOpenModal(false)
    setOpenModal2(false)
    total === 0
  }

  const total = cart.reduce((sum, item) => sum + item.preco, 0);  ''

  // video commands
  const video = document.querySelector('#video-background')

  return (
    <>
      <Modal 
        isOpen={openModal} 
        setModalOpen={() => setOpenModal(!openModal)}
        finalizar={() => setOpenModal2(true)}
        fechar={() => setOpenModal(false)}
        total={total.toFixed(2)}
      >
        <ul className={style.ticketContainer}>
        {cart.map(item => (
          <div className={style.ticketContent}>
              <CloseIcon onClick={() => removeFromCart(item)} className={style.cartIconClose}/>
              <li key={item.id} className={style.itemCarrinho}>
                {item.nome} - ${item.preco.toFixed(2)} x {item.quantity}
              </li>
          </div>
          ))}
        </ul>
    </Modal>
    
    <Modal 
      isOpen={openModal2}
      setModalOpen={() => setOpenModal2(!openModal2)}>
        {
          total === 0 ? (
            <div className={style.finalCart}>
              <h3>Seu carrinho de compras está vázio!</h3>
              <Button variant="danger" onClick={modalClose}>Fechar</Button>{' '}
            </div>
          ) : (
            <div className={style.finalCart}>
              <h3>Obrigado pela compra!</h3>
              <Button variant="danger" onClick={() => {modalClose(); setCart([])}}>Fechar</Button>{' '}
            </div> )
      }
    </Modal>
      <div className={style.filmesContainer}>
        <div className={style.bgFilmes} onMouseEnter={() => video.play()}>
          <div className={style.bgImage}>
            <video src="public/videos/couple-cinema.mp4" loop id="video-background"/>
          </div>
          <div className={style.anuncioContainer}>
            <h2>Venha para o <span>Pipoca Prime,</span></h2>
            <p>e concorra a Prêmios exclusivos para assinantes!!!</p>
            <a href="#">ver mais!</a>
          </div>
          <div className={style.bgOverlay}></div>
        </div>

        <div onClick={() => setOpenModal(true)} className={style.alignCartIcon}> 
          {
            total === 0 ? (<div className={style.cartIcon}><ShoppingCartIcon /></div> ) 
            : ( <div className={style.cartIconTrue}><ShoppingCartIcon /><span>R${total.toFixed(2)}</span></div>) 
          } 
        </div>
        <Form className={style.searchInput}>
          <Form.Control
            type="search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => moviesFilter(e.target.value)}
          />
          <Button variant="light">Buscar</Button>
        </Form>
        <div className={style.filmesContent}>
          {
            movies.map((item, key) =>
              <FilmesCard
                image={item.img[0]}
                preco={item.preco.toFixed(2)}
                key={key}
                onPress={()=> addToCart(item)}
              />
            )

          }
            {!loading && <Loading />}
        </div>
      </div>
    </>
  )
}