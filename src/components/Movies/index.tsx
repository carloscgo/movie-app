import { Col, Row } from 'react-bootstrap';
import Card from '../Card'
import { Props } from './interfaces';

const Movies = ({ movies, onFavorite, onDelete, type }: Props) => {
  return (
    <div className='d-flex flex-column'>
      {movies.loading && (
        <div className='w-100 p-4 mt-3 mb-1 d-flex align-items-center justify-content-center'>
          <label
            className="text-white"
          >
            Cargando....
          </label>
        </div>
      )}

      <div className='p-4'>
        <Row xs={1} md={2} lg={4} className="g-4">
          {movies.data.map((movie: any) => (
            <Col key={movie.id}>
              <Card movie={movie} onFavorite={onFavorite} onDelete={onDelete} type={type} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Movies
