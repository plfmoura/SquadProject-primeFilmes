import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

export default function LoginModal({ onPress, onClose, onShow, show, password, email }) {
  return (
    <div>
      <li
        onClick={onShow}
        style={{
          color: "#fff",
          cursor: "pointer",
          textTransform: "uppercase",
          fontSize: "1.04rem",
        }}
      >
        Entrar
      </li>

      <Modal show={show} onHide={onClose} style={{ marginTop: "8%" }}>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" onChange={ email } placeholder="Digite seu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" onChange={ password } placeholder="Digite sua senha" />
            </Form.Group>
            <Form.Text className="text-muted">
              Nunca compartilhe seus dados cadastrais.
            </Form.Text>
          </Form>
          <Button
            variant="primary"
            onClick={onPress}
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            Entrar
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>
              <NavLink 
                onClick={ onClose }
                to="/cadastro" 
                end
                >
                  Registre-se
                </NavLink>
            </p>
            <p>
              <a href="#" style={{ color: "#333" }}>
                Problemas para fazer login?
              </a>
            </p>
          </div>
        </Modal.Footer>
      </Modal>
  </div>
  );
}
