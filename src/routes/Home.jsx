import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard'

export default function Home() {

  const [ movies, setMovies ] = useState([])

  const getMovies = () => {
    let url = `https://json-server-md3.onrender.com/filmes`
    axios.get(url).then((response) => setMovies(response.data))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <div className="popularArea">
        
      </div>
      <div style={{marginTop: "10%", backgroundColor: "#f1f1f1"}}>
        <h1>Filmes em cartaz</h1>
        <p>Trailers e horários dos filmes em cartaz nos cinemas</p>
        <Box display={"flex"} flexWrap={"wrap"} margin={'2rem'} alignItems={"center"} justifyContent={"center"}>
          {
            movies.map(( item ) => 
              <HomeCard title={item.nome} image={item.img[0]} />
            )
          }
        </Box>
      </div>
    </>
  )
}
