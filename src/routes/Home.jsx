import { Box } from '@mui/material'
import React, { useState } from 'react'
import HomeCard from '../components/HomeCard'

const [ movies, setMovies ] = useState([])

export default function Home() {
  return (
    <div>
      <Box display={"flex"}>
        {

        }
        <HomeCard />
      </Box>
    </div>
  )
}
