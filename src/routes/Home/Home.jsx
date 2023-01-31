import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeCardPrincipal from '../../components/HomeCardPrincipal'
import HomeCarrousel from '../../components/HomeCarrousel'
import style from './home.module.css'

export default function Home() {

  const [ movies, setMovies ] = useState([])
  const [ top, setTop ] = useState([])

  const getMovies = () => {
    let url = `https://json-server-md3.onrender.com/filmes`
    axios.get(url).then((response) => setMovies(response.data))
  }
  
  useEffect(() => {
    getMovies()
  }, [])


  return (
    <>
      <HomeCarrousel />
      <div className={style.popularArea}>
        <HomeCardPrincipal image={"https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/2cfcae7c-9731-11ed-aa6e-9587410378a2/chrome_2023-01-18_10-02-45.jpg"} />
        <HomeCardPrincipal image={"https://i.ytimg.com/vi/IK1sEiHodZg/maxresdefault.jpg"} />
      </div>
      <div className={style.filmesContainer}>
        <h1>Filmes em cartaz</h1>
        <p>Veja o nosso Top 10 filmes mais assistidos da semana.</p>
        <div className={style.filmesContent}>
        {
          movies.map(( item ) => 
            <HomeCard image={item.img[0]} key={item.id} id={item.id} title={item.nome} />
          )
        }          
        </div>
      </div>
    </>
  )
}
