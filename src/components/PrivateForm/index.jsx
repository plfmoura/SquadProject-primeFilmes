import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './privateForm.module.css'

function PrivateForm({ nome, preco, img, desc, submit }) {
  return (
    <div className={style.formSticky}>
    <Form className={style.formContainer}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Insira o Nome" onChange={ nome }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          as="textarea"
          placeholder="Insira Descrição" 
          onChange={ desc }
          className={style.textArea}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Insira o URL" onChange={ img }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="preco" onChange={ preco }/>
      </Form.Group>
      <Button variant="success" type="button" onClick={ submit }>
        Enviar
      </Button>
    </Form>
    </div>

  );
}

export default PrivateForm;