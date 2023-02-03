import React from 'react'
import style from './homeCardPrincipal.module.css'

export default function HomeCardPrincipal({ video, title }) {

  const handleClick = () => {
    console.log('clique')
  }
  return (
    <div className={style.cardContainer}>
      <iframe 
        width="560" 
        height="315" 
        src={video} 
        title={title} 
        allowFullScreen={false}
        onMouseOver={ handleClick }
        onMouseOut={ handleClick }

        ></iframe>
    </div>
  )
}