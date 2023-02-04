import styles from '../../components/Rodapé/footer.module.css'
import { FaFacebookF, FaInstagramSquare, FaYoutube, FaTwitter } from "react-icons/fa";




function Footer(){

    return(
    <>
    <footer className={styles.Footer}>
<div className={styles.redeSociais}>
<div className={styles.redeSociaisItens}><a href=""><FaFacebookF/></a> </div>
<div className={styles.redeSociaisItens}><a href=""><FaInstagramSquare/></a></div>
<div className={styles.redeSociaisItens}><a href=""><FaYoutube/></a> </div>
<div className={styles.redeSociaisItens}><a href=""><FaTwitter/></a> </div>
   </div>


  <div className={styles.Finalizacao}>
    
    <div className={styles.FinalizacaoItens}>
    <ul>
    <h5>Dúvidas</h5>
   <li><a href="">Quem Somos?</a></li>
   <li><a href="">Nossos Parceiros</a></li>
   <li><a href="">Política de Cookies</a></li>
   <li><a href="">Política de Privacidade</a></li>
    </ul>
    </div>

    
    <div className={styles.FinalizacaoItens}>
    <ul>
    <h5>Ajuda</h5>
    <li><a href="">Termo Uso</a></li>
   <li><a href="">Entrar em Contato</a></li>
   <li><a href="">Formas de Pagamento</a></li>
   <li><a href="">Código de Serviços</a></li>
   <li><a href="">Central de Atendimento</a></li>
    </ul>
    </div>


    
    <div className={styles.FinalizacaoItens}>
    <ul>
    <h5>Cliente</h5>
   <li><a href="">Minha Conta?</a></li>
   <li><a href="">Meus Pedidos</a></li>
   <li><a href="">Meus tickets</a></li>
    </ul>
    </div>

     

</div>
<div className={styles.textoFinal}>
  <p>&copy;Prime Filmes 2023</p>
  </div>
    </footer>
    </>
    )
}

export default Footer