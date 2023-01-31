import Carousel from 'react-bootstrap/Carousel';
import style from './carrousel.module.css'

function HomeCarrousel() {

  const dataCarousel = [
    {image: "https://i.ytimg.com/vi/IK1sEiHodZg/maxresdefault.jpg", title: "A mulher Rei", sub: `"Curvem-se para a guerreira mais excepcional que já existiu. #AMulherRei em breve exclusivamente nos cinemas!"`},
    {image: "https://sm.ign.com/ign_pt/news/g/guardians-/guardians-of-the-galaxy-vol-3-the-first-trailer-and-a-brand_zdju.jpg", title: "Guardiões da Galáxia", sub: `"Ainda não se sabem muitos detalhes da trama, mas a conclusão da trilogia acompanha o grupo de heróis desajustados precisa salvar o universo novamente enquanto Peter Quill tenta se ajustar à ausência de Gamora. O grupo também deve enfrentar Adam Warlock, revelado em uma cena pós-crédito do segundo longa. "`},
    {image: "https://sobresagas.com.br/wp-content/uploads/2020/03/John-Wick-4.jpg", title: "John Wick, Capitílo 4", sub: `"Sem a esperança de um futuro promissor, o que acontecerá e qual será o destino do protagonista são incógnitas que além de atiçar a curiosidade do público, faz com que, inclusive, muitos fãs percam o sono e só pensem nesse assunto."`},
    {image: "https://m.media-amazon.com/images/M/MV5BMmNhN2Y2YjItNzQ4ZS00M2NiLWJhNDQtODg2MjE3NDI1MzcyXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_.jpg", title: "Aquaman, o Reino perdido", sub: `"Embora não se saiba muito sobre a trama do novo filme, a produção deve contar com o retorno de Patrick Wilson (Invocação do Mal), como Mestre dos Oceanos, Amber Heard (Liga da Justiça), como Mera, além de Yahya Abdul-Matteen II (Watchmen), como o vingativo vilão o Arraia-Negra."`}
  ]

  return (
    <Carousel style={{marginTop: "9.5%"}}>
      {
        dataCarousel.map(( item ) => 
          <Carousel.Item interval={5000}>
            <img
              className={style.carouselImage}
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption>
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