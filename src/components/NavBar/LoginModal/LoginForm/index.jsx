import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Digite seu email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Text className="text-muted">
          Nunca compartilhe seus dados cadastrais.
        </Form.Text>
    </Form>
  );
}

export default LoginForm;