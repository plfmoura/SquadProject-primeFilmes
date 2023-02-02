import { Search } from '@mui/icons-material'
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import React from 'react'
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';
import style from './navBar.module.css'

const filmes = [
  "Ação",
  "Aventura",
  "Comédia",
  "Documentário",
  "Drama",
  "Espionagem",
  "Faroeste",
  "Fantasia",
  "Ficção científica",
  "Mistério",
  "Musical",
  "Filme policial",
  "Romance",
  "Terror"
  ]
  
export default function NavBar() {
  return (
    <div className={style.navBarContainer}>
      <div className={style.firstContent}>
        <div className={style.containerLogo}>
          <LocalActivityIcon fontSize='large' className={style.ticketLogo}/>
          <p className={style.menuItem}>Prime Filmes</p>
        </div>
        <ul className={style.menuNavigation}>
          <li><NavLink className={style.menuItem} to="/" end>Home</NavLink></li>       
          <li><NavLink className={style.menuItem} to="/filmes" end>Filmes</NavLink></li>          
          <li><NavLink className={style.menuItem} to="/loja" end>Loja</NavLink></li>      
          <li><NavLink className={style.menuItem} to="/equipe" end>Equipe</NavLink></li>     
          <li className={style.menuItem}><LoginModal /></li>
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
      </div>
    </div>
  )
}
