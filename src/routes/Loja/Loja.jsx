import React, {useEffect, useState} from 'react'
import style from './loja.module.css'
import axios from 'axios'
import FilmesCard from '../../components/LojaCard'

export default function Filmes() {

  const [movies, setMovies ] = useState([])

  const getMovies = () =>{
    let url = `https://json-server-md3.onrender.com/alimentos`
    axios.get(url).then((response) => setMovies(response.data))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className={style.lojaContainer}>
      <h1 className={style.titulo}>Catálogo de Produtos</h1>
      <div className={style.lojaContent}>
        {
          movies.map(( item ) => 
            <FilmesCard 
              image={item.img} 
              title={item.nome}
              preco={item.preco}
              />
          )
        }
      </div>
    </div>
  )
}

