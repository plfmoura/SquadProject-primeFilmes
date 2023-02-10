import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import style from './carrousel.module.css'

function HomeCarrousel() {

  const dataCarousel = [
    {
      image: "/imagens/HomeCarousel/fast10.jpg", 
      title: "Velozes e Furiosos 10", 
      sub: `"O novo filme da franquia Velozes e Furiosos ganhou um pôster destacando Dominic Toretto (Vin Diesel). O filme estreia em maio e ganhará seu primeiro trailer no dia 10 de fevereiro."`,
      align: 'center'
    },
    {
      image: "/imagens/HomeCarousel/guardians.jpg", 
      title: "Guardiões da Galáxia", 
      sub: `"Ainda não se sabem muitos detalhes da trama, mas a conclusão da trilogia acompanha o grupo de heróis desajustados precisa salvar o universo novamente enquanto Peter Quill tenta se ajustar à ausência de Gamora. O grupo também deve enfrentar Adam Warlock, revelado em uma cena pós-crédito do segundo longa. "`,
      align: "center"
    },
    {
      image: "/imagens/HomeCarousel/john wick 4.jpg", 
      title: "John Wick, Capitulo 4", 
      sub: `"Sem a esperança de um futuro promissor, o que acontecerá e qual será o destino do protagonista são incógnitas que além de atiçar a curiosidade do público, faz com que, inclusive, muitos fãs percam o sono e só pensem nesse assunto."`,
      align: "center"
    },
    {
      image: "/imagens/HomeCarousel/aquaman.jpg",
      title: "Aquaman, o Reino perdido", 
      sub: `"Embora não se saiba muito sobre a trama do novo filme, a produção deve contar com o retorno de Patrick Wilson (Invocação do Mal), como Mestre dos Oceanos, Amber Heard (Liga da Justiça), como Mera, além de Yahya Abdul-Matteen II (Watchmen), como o vingativo vilão o Arraia-Negra."`,
      align: "top"
    }
  ]

  return (
    <Carousel className={style.carouselComponent}>
      {
        dataCarousel.map(( item, key ) => 
          <Carousel.Item interval={8000} key={key}>
            <img
              className={style.carouselImage}
              style={{objectPosition: item.align}}
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption className={style.captionContainer}>
              <h3>{item.title}</h3>
              <p>{item.sub}.</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      }
    </Carousel>
  );
}

export default HomeCarrousel;