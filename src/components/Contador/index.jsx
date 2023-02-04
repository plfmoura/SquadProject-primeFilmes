import React from 'react'
import CounterMini from './CounterMini'
import style from './contador.module.css'
import UseCountDown from '../../Hooks/UseCountDown'

export default function Contador({ mes, dia, ano, hora }) {

    const [day, hour, minute, second] = UseCountDown(`${mes} ${dia}, ${ano} ${hora}`)
  return (
    <div className={style.counterContainer}>
      <div>
        <CounterMini title="Dias" number={day} />
        <label>:</label>
      </div>
      <div>
        <CounterMini title="Horas" number={hour} />
        <label>:</label>
      </div>
      <div>
        <CounterMini title="Minutos" number={minute} />
        <label>:</label><CounterMini title="Segundos" number={second} />
      </div>
    </div>
  )
}
