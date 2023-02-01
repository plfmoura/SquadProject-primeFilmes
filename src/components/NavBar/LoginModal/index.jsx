import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p onClick={handleShow} style={{color: "#fff", cursor: "pointer", textTransform: "uppercase"}}>
        Login
      </p>

      <Modal show={show} onHide={handleClose} style={{marginTop: "8%"}}>
        <Modal.Body 
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <LoginForm />
          <Button variant="primary" onClick={handleClose} style={{backgroundColor: "#333", borderColor: "#333"}}>
            Entrar
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}>
            <p><a href='#' style={{color: "#333"}}>Registre-se</a></p>
            <p><a href='#' style={{color: "#333"}}>Problemas para fazer login?</a></p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}