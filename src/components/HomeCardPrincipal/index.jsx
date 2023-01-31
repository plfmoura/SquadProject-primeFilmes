import React from 'react'
import style from './homeCardPrincipal.module.css'

export default function HomeCardPrincipal({ video, title }) {
  return (
    <div className={style.cardContainer}>
      <iframe width="560" height="315" src={video} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='false'></iframe>
    </div>
  )
}
