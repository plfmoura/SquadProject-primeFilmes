import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './cart.module.css'
import FilmesCard from '../../components/LojaCard'

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('https://json-server-md3.onrender.com/alimentos')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={style.cartEx}>
      <h2>Carrinho</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.nome} - ${item.preco}
          </li>
        ))}
      </ul>
      <div className={style.lojaContainer}>
      <h1 className={style.titulo}>Catálogo de Produtos</h1>
      <div className={style.lojaContent}>
        {
          products.map(( product ) => 
          <>
            <FilmesCard 
              image={product.img} 
              title={product.nome}
              preco={product.preco}
              onPress={() => addToCart(product)}
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

