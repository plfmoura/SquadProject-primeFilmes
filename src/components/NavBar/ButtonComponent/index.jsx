import Button from 'react-bootstrap/Button';

function ButtonComponent({ variant, value}) {
  return ( <Button variant={variant}>{value}</Button> )
}

export default ButtonComponent;