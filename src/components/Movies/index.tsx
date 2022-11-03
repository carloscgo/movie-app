import { Col, Row, Button } from 'react-bootstrap';
import Card from '../Card'
import { Props } from './interfaces';

const Movies = ({ movies, onLoadMore }: Props) => {
  return (
    <div className='d-flex flex-column'>
      <div className='p-4'>
        <Row xs={1} md={2} lg={4} className="g-4">
          {movies.data.map((movie: any) => (
            <Col key={movie.id}>
              <Card movie={movie} />
            </Col>
          ))}
        </Row>
      </div>

      <div className='w-100 p-4 mt-3 mb-4 d-flex align-items-center justify-content-center'>
        <Button
          type="button"
          variant="secondary"
          disabled={movies.loading}
          onClick={() => onLoadMore()}
        >
          {movies.loading ? 'Cargando....' : 'Cargar Más'}
        </Button>
      </div>
    </div>
  )
}

export default Movies
