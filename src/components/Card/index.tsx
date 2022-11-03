import { Link } from "react-router-dom";

import { routes } from '../../utils/constants'
import Container from './styles';
import { Props } from './interfaces';

const Card = ({ movie }: Props) => {
  return (
    <Container style={{ width: '18rem' }} bg="dark" text="white">
      <Link to={routes.movie.replace(':id', movie.id)} state={movie}>
        <Container.Img
          variant="top"
          src={movie.img}
        />
      </Link>

      <Container.Body>
        <Container.Title>{movie.title}</Container.Title>
        <Container.Text>
          {movie.date}
        </Container.Text>
      </Container.Body>

      <Container.Footer className="footer">
        <i className="bi bi-heart-fill text-danger link"></i>
        <i className="bi bi-trash-fill text-secondary link"></i>
      </Container.Footer>
    </Container>
  )
}

export default Card
