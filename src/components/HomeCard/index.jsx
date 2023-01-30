import style from './card.module.css'

export default function HomeCard({ title, image, id }) {
  return (
  <div className={style.cardContainer}>
      <div className={style.rankingFilmes}>
        <p>{ id }</p>
      </div>
      <div className={style.cardContent}>
        <img src={ image }/>
        <h3 className={style.titleCard}>{ title }</h3>
      </div>
  </div>
  );
}