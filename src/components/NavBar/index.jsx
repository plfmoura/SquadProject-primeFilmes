import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import style from './navBar.module.css'
import { FaBars, FaTimes } from "react-icons/fa";
import './navBar.css'

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
  "Terror",
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
  const [ singin , setSingin ] = useState(false)
  const [ show, setShow ] = useState(false);
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const handleClose = () => {setShow(false)}
  const handleShow = () => {
    setShow(true)
    setPassword('');
    setEmail('');
  };

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  
  const user = { name: 'admin', password: 'admin'}
  const navigate = useNavigate()

  const singIn = () => {
    if( user.name === email && user.password === password){
        setSingin(true)
        handleClose()
        navigate('/private')
    } else if(email === '' || password === ''){
      alert('Preencha os campos vazios.')
    } else {
      alert('Usuários e Senha errados.')
    }
  }

  const singOut = () => {
    setSingin(false)
    handleClose()
    navigate('/')
  }

  const handleClick = () => {
    navigate('/filmes')
  }

  return (
    <div className={style.navBarContainer}>
      <div className={style.firstContent}>
        <div className={style.containerLogo}>
          <LocalActivityIcon fontSize='large' className={style.ticketLogo}/>
          <p className={style.menuItem}>Prime Filmes</p>
        </div>
        <nav ref={navRef} className={style.menuNavigation} id="navBar">
          <a><NavLink className={style.menuItem} to="/" end>Home</NavLink></a>       
          <a><NavLink className={style.menuItem} to="/filmes" end>Filmes</NavLink></a>         
          <a><NavLink className={style.menuItem} to="/equipe" end>Equipe</NavLink></a>     
          {
            singin ? ( <li className={style.menuItem} onClick={ singOut }>Sair</li> )
            : (<LoginModal 
              onPress={ singIn } 
              email={(e) => setEmail(e.target.value)}
              password={(e) => setPassword(e.target.value)}
              show={show} onShow={handleShow} 
              onClose={handleClose}
              className={style.menuItem}
              />)
          }
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
      <div className={style.secondContent}>
        <div className={style.filmesAtalho}>
          {
            filmes.map(( item, id ) => 
              <p onClick={handleClick} key={id}>{item}</p>
            )
          }
        </div>
      </div>
    </div>
  )
}
