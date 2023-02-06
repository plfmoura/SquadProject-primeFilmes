import React, {useEffect, useState} from 'react'
import style from './filmes.module.css'
import axios from 'axios'
import FilmesCard from '../../components/FilmesCard'
import { Button, Form } from 'react-bootstrap'
import Loading from '../../components/Loading'

export default function Filmes() {

  const [movies, setMovies ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const getMovies = () =>{
    let url = `https://json-server-md3.onrender.com/filmes`
    axios.get(url).then((response) => setMovies(response.data))
  }

  const moviesFilter = (name) => {
    let moviesResults = [];
    if (name === ''){
        getMovies();
    }
    console.log(name)

    let pesquisa = name.toLowerCase()
    for(var i in movies){
        if(movies[i].nome.includes(pesquisa)){
          moviesResults.push(movies[i]);
        }
        setMovies(moviesResults);
      }
      console.log(moviesResults)
}

  useEffect(() => {
    setTimeout(() => {getMovies()
      setLoading(true)
    }, 3000)
  }, [])

  return (
    <>
      <div className={style.filmesContainer}>
        <h1 className={style.titulo}>Catálogo de filmes</h1>
        <Form className={style.searchInput}>
        <Form.Control
          type="search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => moviesFilter(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        <div className={style.filmesContent}>
          {
            movies.map(( item, key ) => 
            <FilmesCard 
            image={item.img[0]} 
            title={item.nome}
            preco={item.preco}
            key={key}
            />
            )
            
          }
            {!loading && <Loading />}

        </div>
      </div>
    </>
  )
}

