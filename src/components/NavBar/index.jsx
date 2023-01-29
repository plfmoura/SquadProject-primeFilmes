import { Search } from '@mui/icons-material'
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import React from 'react'
import style from './navBar.module.css'

const filmes = ["Ação",
  "Aventura",
  "Cinema de arte",
  "Chanchada",
  "Comédia",
  "Comédia de ação",
  "Comédia de terror",
  "Comédia dramática",
  "Comédia romântica",
  "Dança",
  "Documentário",
  "Docuficção",
  "Drama",
  "Espionagem",
  "Faroeste",
  "Fantasia",
  "Fantasia científica",
  "Ficção científica",
  "Filmes com truques",
  "Filmes de guerra",
  "Mistério",
  "Musical",
  "Filme policial",
  "Romance",
  "Terror",
  "Thriller"]
  
export default function NavBar() {
  return (
    <div className={style.navBarContainer}>
      <div className={style.firstContent}>
        <LocalActivityIcon fontSize='large' className={style.ticketLogo}/>
        <ul className={style.menuNavigation}>
          <li className="menuItem">Home</li>
          <li className="menuItem">Filmes</li>
          <li className="menuItem">Loja</li>
          <li className="menuItem">Lançamentos</li>
        </ul>
        <input type="button" value="Login" />
      </div>
      <div className={style.secondContent}>
          <div className={style.filmesAtalho}>
            {
              filmes.map(( item ) => 
                <p>{item}</p>
              )
            }
          </div>
          <div className={style.searchContainer}>
            <Search sx={{transform: "rotate(90deg)", marginLeft: 1}}/>
            <input name="pesquisa" id="search-movies" placeholder='Busca...'/>
          </div>
      </div>
    </div>
  )
}
