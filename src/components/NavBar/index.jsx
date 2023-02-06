import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
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
  
  const user = { name: 'admin', password: 'admin'}
  const navigate = useNavigate()

  const singIn = () => {
    if( user.name === email && user.password === password){
        setSingin(true)
        handleClose()
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
        <ul className={style.menuNavigation}>
          <li><NavLink className={style.menuItem} to="/" end>Home</NavLink></li>       
          <li><NavLink className={style.menuItem} to="/filmes" end>Filmes</NavLink></li>          
          <li><NavLink className={style.menuItem} to="/equipe" end>Equipe</NavLink></li>     
          <li><NavLink className={style.menuItem} to="/cart" end>Loja</NavLink></li>     
          {
            singin ? ( <li className={style.menuItem} onClick={ singOut }>Sair</li>)
             : (<LoginModal 
              onPress={ singIn } 
              email={(e) => setEmail(e.target.value)}
              password={(e) => setPassword(e.target.value)}
              show={show} onShow={handleShow} 
              onClose={handleClose}
              className={style.menuItem}
              />)
          }
        </ul>
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
