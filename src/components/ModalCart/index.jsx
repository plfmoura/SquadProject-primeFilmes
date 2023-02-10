import React from 'react'
import style from './cart.module.css'
import { Button } from 'react-bootstrap'

const BACKGROUND_STYLE = {
  position: 'fixed',
  overflow: 'hidden',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-beetwen',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: 'black'
}

const ALIGN_CONTENT = {
  width: "35vw",
  height: "70vh",
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem"
}

export default function Modal({ isOpen, children, finalizar, fechar, total }) {
  
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={ALIGN_CONTENT}>
          <div className={style.titleDiv}>
            <h1 className={style.titleModal}>Ingressos Selecionados</h1>
            <hr style={{color: "black"}} />
          </div>
          <div>{children}</div> 
          <div>
            <Button variant="primary" onClick={ finalizar }>Finalizar compra</Button>{' '}
            <Button variant="danger" onClick={ fechar }>Fechar</Button>{' '}
            <Button variant="success" disabled>Total: R${ total }</Button>
          </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

