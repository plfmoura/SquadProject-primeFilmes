import React, {useEffect, useState} from 'react'
import style from './filmes.module.css'
import axios from 'axios'
import HomeCard from '../../components/HomeCard'

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
<>
    <div>
      <h1 className={style.titulo}>Catálogo de Filmes</h1>
    </div>
        <div className={style.filmesContent}>
          {
            movies.map((item) => 
            <HomeCard title={item.nome} image={item.img[2]}/>
            )
          }
        </div>
  </>
  )
}
