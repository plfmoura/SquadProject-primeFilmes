import Carousel from 'react-bootstrap/Carousel';
import style from './carrousel.module.css'

function HomeCarrousel({ image, title, sub }) {
  return (
    <Carousel style={{marginTop: "8%"}}>
      <Carousel.Item interval={5000}>
        <img
          className={style.carouselImage}
          src={image}
          alt={title}
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{sub}.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className={style.carouselImage}
          src={image}
          alt={title}
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{sub}.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className={style.carouselImage}
          src={image}
          alt={title}
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{sub}.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarrousel;