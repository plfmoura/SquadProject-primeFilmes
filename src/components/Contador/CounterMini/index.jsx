import React from 'react'
import style from '../contador.module.css'

export default function CounterMini({ title, number }) {
  return (
    <div className={style.counter}>
        <h3 className="counterTitle">{title}</h3>
        <p className="counterNumber">{number}</p>
    </div>
  )
}
