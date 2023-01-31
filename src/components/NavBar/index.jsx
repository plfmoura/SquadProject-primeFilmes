import { Search } from '@mui/icons-material'
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import React from 'react'
import { NavLink } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';
import LoginModal from './LoginModal';
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
        <div style={{backgroundColor: "red", display: "flex"}}>
          <LocalActivityIcon fontSize='large' className={style.ticketLogo}/>
          <p className={style.menuItem}>Prime Video</p>
        </div>
        <ul className={style.menuNavigation}>
          <li><NavLink className={style.menuItem} to="/" end>Home</NavLink></li>       
          <li><NavLink className={style.menuItem} to="/filmes" end>Filmes</NavLink></li>          
          <li><NavLink className={style.menuItem} to="/loja" end>Loja</NavLink></li>       
          <LoginModal />
        </ul>
      </div>
      <div className={style.secondContent}>
          <div className={style.filmesAtalho}>
            {
              filmes.map(( item, id ) => 
                <p key={id}>{item}</p>
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
