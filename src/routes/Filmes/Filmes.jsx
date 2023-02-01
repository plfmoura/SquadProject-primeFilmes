import React, {useEffect, useState} from 'react'
import style from './filmes.module.css'
import axios from 'axios'
import FilmesCard from '../../components/FilmesCard'

export default function Filmes() {

  const [movies, setMovies ] = useState([])

  const getMovies = () =>{
    let url = `https://json-server-md3.onrender.com/filmes`
    axios.get(url).then((response) => setMovies(response.data))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className={style.filmesContainer}>
      <h1 className={style.titulo}>Catálogo de filmes</h1>
      <div className={style.filmesContent}>
        {
          movies.map(( item ) => 
            <FilmesCard 
              image={item.img[0]} 
              title={item.nome}
              preco={item.preco}
              />
          )
        }
      </div>
    </div>
  )
}

