import React from 'react'
import style from './homeCardPrincipal.module.css'

export default function HomeCardPrincipal({ image, alt }) {
  return (
    <div className={style.cardContainer}>
      <img src={image} alt={alt} width="100%" height="100%"/>
    </div>
  )
}
