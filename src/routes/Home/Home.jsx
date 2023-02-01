import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeCardPrincipal from '../../components/HomeCardPrincipal'
import HomeCarrousel from '../../components/HomeCarrousel'
import style from './home.module.css'

export default function Home() {

  const [ movies, setMovies ] = useState([])
  // const [ top, setTop ] = useState([])

  const getMovies = () => {
    var endPoints = []
    for(let i = 1; i < 11; i++) {
        endPoints.push(`https://json-server-md3.onrender.com/filmes/${i}/`)
    }
    axios.all(endPoints
        .map((endPoint) => axios
            .get(endPoint)))
            .then((response) => setMovies(response))
            .catch((error) => console.log(error))
  }

  console.log(movies)
  
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className={style.home}>
      <HomeCarrousel />
      <article className={style.popularContainer}>
        <div className={style.alingTitle}>
          <h2>Novidades para o nosso 2023</h2>
          <p>Trailler dessas novidades para esquentar nosso inicio de ano!</p>
        </div>
        <div className={style.popularArea}>
          <section>
            <HomeCardPrincipal video={"https://www.youtube.com/embed/o8VZAXuMUIg"} title={"YouTube Video Player"} />
              <div>
                <p>O casal Jeniffer Aniston e Adam Saddler precisam desvendar o desaparecimento de Maharaja, interpretado por Adeel Akhtar, 
                sequestrado no dia do casamento em sua ilha particular. Nick e Andrey, então, 
                se deparam com uma missão de alto risco em Paris. Dirigido por Jeremy Garelick, o 
                longa estreia no dia:</p>
                <span>31 de março em nossa plataforma de streaming</span>.
              </div>
          </section>
          <section>
            <HomeCardPrincipal video={"https://www.youtube.com/embed/iRa1o0OGQUc"} title={"YouTube Video Player"} />
            <div>
              <p>Em sua 4ª continução épica, Transformers: O Despertar das Feras traz mais uma aventura épica pelo universo dos transformers. Ambientada nos anos 1990, o filme apresentará os Maximals, Predacons e Terrorcons à batalha existente na Terra entre Autobots e Decepticons.</p>
              <p>E aí, a torcida está para qual lado dessa vez dominar a terra?</p>
            </div>
          </section>
        </div>
      </article>
      <div className={style.filmesContainer}>
        <div className={style.alingTitle}>
          <h2>Filmes em cartaz</h2>
          <p>Veja o nosso Top 10 filmes mais assistidos da semana.</p>
        </div>
        <div className={style.filmesContent}>
        {
          movies.map(( item, key ) => 
            <HomeCard image={item.data.img[0]} key={key} id={item.data.id} title={item.data.nome} />
          )
        }          
        </div>
      </div>
    </div>
  )
}