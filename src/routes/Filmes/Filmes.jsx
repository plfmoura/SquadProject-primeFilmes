import React, { useEffect, useState } from 'react'
import style from './filmes.module.css'
import axios from 'axios'
import FilmesCard from '../../components/FilmesCard'
import { Button, Form } from 'react-bootstrap'
import Loading from '../../components/Loading'
import Modal from '../../components/ModalCart'
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

  useEffect(()=>{
    console.log(total)
  }, [cart])

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

  return (
    <>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      <ul>
       
      {cart.map(item => (
          <li key={item.id} className={style.itemCarrinho}>
            {item.nome} - ${item.preco} x {item.quantity}
            <div className={style.cartIconClose} onClick={() => removeFromCart(item)}> <CloseIcon /> </div>
          </li>
        ))}
        <li className={style.totalCart}>Total: R${total}</li>
        <div className={style.btns}>
         <Button variant="primary"  onClick={() => setOpenModal2(true)}>Finalizar compra</Button>{' '}
          <Button variant="danger" onClick={() => setOpenModal(false)}>Fechar</Button>{' '}
          </div>
      </ul>
    </Modal>
    
    <Modal
      isOpen={openModal2}
      setModalOpen={() => setOpenModal2(!openModal2)}>
      <h3 className={style.finalCart}>Obrigado pela compra!</h3>
      <br/>
      <br/>
      <center><Button variant="danger" onClick={() => {modalClose(); setCart([])}}>Fechar</Button>{' '}</center>
    </Modal>
      <div className={style.filmesContainer}>
      <div className={style.bgFilmes}></div>
      <div onClick={() => setOpenModal(true)} className={style.cartIcon}> <ShoppingCartIcon /> </div>

        <Form className={style.searchInput}>
          <Form.Control
            type="search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => moviesFilter(e.target.value)}
          />
          <Button variant="light">Search</Button>
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

