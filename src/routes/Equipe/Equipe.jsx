import Pedro from "/imagens/Pedro.png";
import Natan from "/imagens/Natan.png";
import Guilherme from "/imagens/Guilherme.png";
import Francisco from "/imagens/Francisco.png";
import Lucas from "/imagens/Lucas.png.jpeg";
import "./equipe.css";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";

function Equipe() {
  return (
    <>
      <center>
        <h1 className="titulo-principal">Nossa Equipe</h1>
      </center>
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="foto">
                <img src={Pedro} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Pedro </span>Moura
              </h2>
              <h5>Facilitador</h5>
              <div className="redes-sociais">
                <a href="https://github.com/plfmoura">
                  <FaGithub className="social-icons"/>
                </a>
                <a href="https://www.instagram.com/wpeedro/">
                  <FaInstagramSquare className="social-icons"/>
                </a>
                <a href="https://www.linkedin.com/in/pedro-moura-48a29819a/">
                  <FaLinkedin className="social-icons"/>
                </a>
              </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="foto">
                <img src={Natan} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Natan</span> Brito
              </h2>
              <h5>G. Engajamento</h5>
              <div className="redes-sociais">
                <a href="https://github.com/m4sterUniverse">
                  <FaGithub className="social-icons"/>
                </a>
                <a href="">
                  <FaInstagramSquare className="social-icons"/>
                </a>
                <a href="https://www.linkedin.com/in/natan-silva-brito-junior-13720a199/">
                  <FaLinkedin className="social-icons"/>
                </a>
              </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="foto">
                <img src={Guilherme} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Guilherme </span>Felipe
              </h2>
              <h5>G. Conteúdo</h5>
              <div className="redes-sociais">
                <a href="https://github.com/GUINITH">
                  <FaGithub className="social-icons"/>
                </a>
                <a href="https://www.instagram.com/gml_fp55/">
                  <FaInstagramSquare className="social-icons"/>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-felipe-dos-santos-b74b4721a/">
                  <FaLinkedin className="social-icons"/>
                </a>
              </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="foto">
                <img src={Francisco} />
            </div>
              <h2>
                <span>Fancisco</span> William
              </h2>
              <h5>Co-Facilitador</h5>
              <div className="redes-sociais">
                <a href="https://github.com/WillianXG">
                  <FaGithub className="social-icons"/>
                </a>
                <a href="">
                  <FaInstagramSquare className="social-icons"/>
                </a>
                <a href="https://www.linkedin.com/in/francisco-willian-dos-santos-silva-36072b250/">
                  <FaLinkedin className="social-icons"/>
                </a>
              </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="foto">
                <img src={Lucas} alt="Perfil-do-Colaborador" />
            </div>
              <h2>Lucas Lopes</h2>
              <h5>Colaborador</h5>
              <div className="redes-sociais">
                <a href="https://github.com/lacmlopes">
                  <FaGithub className="social-icons"/>
                </a>
                <a href="">
                  <FaInstagramSquare className="social-icons"/>
                </a>
                <a href="">
                  <FaLinkedin className="social-icons"/>
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Equipe;