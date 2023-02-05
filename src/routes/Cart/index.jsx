import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './cart.module.css'
import FilmesCard from '../../components/LojaCard'
import Modal from '../../components/ModalCart';
const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    axios.get('https://json-server-md3.onrender.com/alimentos')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

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
  
const modalClose = function(){
  setOpenModal(false)
  setOpenModal2(false)
}


 
//   function modalClose(){
//     this.setOpenModal(false)
//     this.setOpenModal2(false)
// }

  return (
    <div className={style.lojaContainer}>
      <button onClick={() => setOpenModal(true)}>Abrir Modal</button>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      
        <ul>
         
        {cart.map(item => (
            <li key={item.id}>
              {item.nome} - ${item.preco} x {item.quantity}
              <button onClick={() => removeFromCart(item)}>Remover do Carrinho</button>
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

      <div className={style.lojaContainer}>
        <h1 className={style.titulo}>Catálogo de Produtos</h1>
        <div className={style.lojaContent}>
          {
            products.map((product) =>
              <>
                <FilmesCard
                  image={product.img}
                  title={product.nome}
                  preco={product.preco}
                  onPress={() => addToCart()}
                />

              
              </>
            )

          }

        </div>
      </div>
    </div>
  );
};

export default Cart;


{/* <h2>Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.nome} - R${product.preco}
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul> */}

