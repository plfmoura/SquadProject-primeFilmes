import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeCardPrincipal from '../../components/HomeCardPrincipal'
import HomeCarrousel from '../../components/HomeCarrousel'
import style from './home.module.css'

export default function Home() {

  const [ movies, setMovies ] = useState([])

  const getMovies = () => {
    let url = `https://json-server-md3.onrender.com/filmes`
    axios.get(url).then((response) => setMovies(response.data)).catch(console.error("nada nada"))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
    {
      movies.get((item) => console.log(item[1].img))
      // <HomeCarrousel />

    }
      <div className={style.popularArea}>
        <HomeCardPrincipal />
        <HomeCardPrincipal />
      </div>
      <div className={style.filmesContainer}>
        <h1>Filmes em cartaz</h1>
        <p>Veja o nosso Top 10 filmes mais assistidos da semana.</p>
        <div className={style.filmesContent}>
          {
            movies.map(( item, key ) => 
            <HomeCard title={item.nome} image={item.img[0]} id={key +1} />
            )
          }
        <p>Ver mais...</p>
        </div>
      </div>
    </>
  )
}
