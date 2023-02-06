import Pedro from "/imagens/Pedro.png";
import Natan from "/imagens/Natan.png";
import Guilherme from "/imagens/Guilherme.png";
import Francisco from "/imagens/Francisco.png";
import Lucas from "/imagens/Lucas.png.jpeg";
import styles from'./equipe.module.css';
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";

function Equipe() {
  return (
    <>
     <center>
        <h1 className={styles.TituloPrincipal}>Nossa Equipe</h1>
      </center>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Pedro} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Pedro </span>Moura
              </h2>
              <h5>Co-Facilitador</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/plfmoura">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="https://www.instagram.com/wpeedro/">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="https://www.linkedin.com/in/pedro-moura-48a29819a/">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Natan} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Natan</span> Brito
              </h2>
              <h5>G. Engajamento</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/m4sterUniverse">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="https://www.linkedin.com/in/natan-silva-brito-junior-13720a199/">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Guilherme} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Guilherme </span>Felipe
              </h2>
              <h5>G. Conteúdo</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/GUINITH">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="https://www.instagram.com/gml_fp55/">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-felipe-dos-santos-b74b4721a/">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Francisco} />
            </div>
              <h2>
                <span>Fancisco</span> William
              </h2>
              <h5>Colaborador</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/WillianXG">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="https://www.linkedin.com/in/francisco-willian-dos-santos-silva-36072b250/">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Lucas} alt="Perfil-do-Colaborador" />
            </div>
              <h2>Lucas Lopes</h2>
              <h5>Colaborador</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/lacmlopes">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Equipe;