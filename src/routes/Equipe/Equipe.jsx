import Pedro from '../../components/imagens/Pedro.png';
import Natan from '../../components/imagens/Natan.png';
import Guilherme from '../../components/imagens/Guilherme.png';
import Francisco from '../../components/imagens/Francisco.png';
import Lucas from '../../components/imagens/Lucas.png.jpeg'
import './equipe.css'
import { FaInstagramSquare, FaGithub, FaLinkedin  } from 'react-icons/fa';



function Equipe(){
    return(
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <center><h1>Nossa Equipe</h1></center>
<div className="Conteiner">
<div className="Card">
<div className='content'>
        <div className='Foto'>
        <center><img src={Pedro} alt="Perfil-do-Colaborador" /></center>
        </div>
       <center><h2><span>Pedro</span>Moura</h2></center> 
        <center><h5>Facilitador</h5></center>
        <center>
        <br />
        <div className='Redes-sociais'>
        <a href="https://github.com/plfmoura">< FaGithub/></a>
       <a href="#"><FaInstagramSquare/></a>
      <a href="https://www.linkedin.com/in/pedro-moura-48a29819a/"><FaLinkedin/></a>
        </div>
       </center>
    </div>
</div>

<div className='Card'>
    <div className='content'>
        <div className='Foto'>
        <center><img src={Natan} alt="Perfil-do-Colaborador" /></center>
        </div>
       <center><h2><span>Natan</span> Brito</h2></center> 
        <center><h5>G. Engajamento</h5></center>
        <center>
        <br />
        <div className='Redes-sociais'>
        <a href="https://github.com/m4sterUniverse">< FaGithub/></a>
       <a href="#"><FaInstagramSquare/></a>
      <a href="https://www.linkedin.com/in/natan-silva-brito-junior-13720a199/"><FaLinkedin/></a>
        </div>
       </center>
    </div>
</div>


<div className='Card'>
    <div className='content'>
        <div className='Foto'>
        <center><img src={Guilherme} alt="Perfil-do-Colaborador" /></center>
        </div>
       <center><h2><span>Guilherme </span>Felipe</h2></center> 
        <center><h5>G. Conteúdo</h5></center>
        <center>
        <br />
        <div className='Redes-sociais'>
        <a href="https://github.com/GUINITH">< FaGithub/></a>
       <a href="https://www.instagram.com/gml_fp55/"><FaInstagramSquare/></a>
      <a href="https://www.linkedin.com/in/guilherme-felipe-dos-santos-b74b4721a/"><FaLinkedin/></a>
        </div>
       </center>
    </div>
</div>


<div className='Card'>
    <div className='content'>
        <div className='Foto'>
        <center><img src={Francisco} /></center>
        </div>
       <center><h2><span>Fancisco</span> William</h2></center> 
        <center><h5>Co-Facilitador</h5></center>
        <center>
        <br />
        <div className='Redes-sociais'>
        <a href="https://github.com/WillianXG">< FaGithub/></a>
       <a href="#"><FaInstagramSquare/></a>
      <a href="https://www.linkedin.com/in/francisco-willian-dos-santos-silva-36072b250/"><FaLinkedin/></a>
        </div>
       </center>
    </div>
</div>


<div className='Card'>
    <div className='content'>
        <div className='Foto'>
        <center><img src={Lucas} alt="Perfil-do-Colaborador" /></center>
        </div>
       <center><h2>Lucas Lopes</h2></center> 
        <center><h5>Colaborador</h5></center>
        <center>
        <br />
        <div className='Redes-sociais'>
        <a href="https://github.com/lacmlopes">< FaGithub/></a>
       <a href="#"><FaInstagramSquare/></a>
      <a href="#"><FaLinkedin/></a>
        </div>
       </center>
    </div>
</div>



</div>


    </>
    )
}

export default Equipe