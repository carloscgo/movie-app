import { Link } from "react-router-dom";

import { routes } from '../../utils/constants'
import Container from './styles';
import { Props } from './interfaces';
import { TYPES } from './constants';

const Card = ({ movie, onFavorite, onDelete, type }: Props) => {
  const iconFavorite = {
    [TYPES.list]: 'bi-heart-fill',
    [TYPES.favorite]: 'bi-heartbreak-fill',
  }[type]
  const iconDelete = {
    [TYPES.list]: 'bi-trash-fill',
    [TYPES.deletes]: 'bi-check-square-fill'
  }[type]

  return (
    <Container style={{ width: '18rem' }} bg="dark" text="white">
      <Link to={routes.movie.replace(':id', movie.id)} state={movie}>
        <Container.Img
          variant="top"
          src={movie.img}
        />
      </Link>

      <Container.Body className="content">
        <Container.Title>{movie.title}</Container.Title>
        <Container.Text>
          {movie.date}
        </Container.Text>
      </Container.Body>

      <Container.Footer className="footer">
        {type !== TYPES.deletes && <i className={`bi ${iconFavorite} text-danger link`} onClick={() => onFavorite && onFavorite(movie)}></i>}
        {type !== TYPES.favorite && <i className={`bi ${iconDelete} text-secondary link`} onClick={() => onDelete && onDelete(movie)}></i>}
      </Container.Footer>
    </Container>
  )
}

export default Card
