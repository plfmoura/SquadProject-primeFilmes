import React, {useEffect, useState} from 'react'
import style from './filmes.module.css'
import axios from 'axios'
import FilmesCard from '../../components/FilmesCard'
import { Button, Form } from 'react-bootstrap'

export default function Filmes() {

  const [movies, setMovies ] = useState([])
  const [search, setSearch] = useState()

  const getMovies = () =>{
    let url = `https://json-server-md3.onrender.com/filmes`
    axios.get(url).then((response) => setMovies(response.data))
  }

  const moviesFilter = (name) => {
    let moviesResults = [];
    if (name === ''){
        getMovies();
    }

    let search = name.toLowerCase()
    for(var i in movies){
        if(movies[i].nome.toLowerCase().includes(search.toLowerCase())){
          moviesResults.push(movies[i]);
        }
        setMovies(moviesResults);
      }
      console.log(moviesResults)
}

  useEffect(() => {
    getMovies()
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
        </div>
      </div>
    </>
  )
}

