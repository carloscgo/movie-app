import Alert from 'react-bootstrap/Alert';
import { Props } from './interfaces';

const Error = ({ message }: Props) => {
  return (
    <Alert variant="danger">
      {message}
    </Alert>
  )
}

export default Error
