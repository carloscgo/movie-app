import { Col, Row } from 'react-bootstrap';
import Card from '../Card'
import { Props } from './interfaces';

const Movies = ({ movies }: Props) => {
  return (
    <div className='p-4'>
      <Row xs={1} md={2} className="g-4">
        {movies.map((movie: any) => (
          <Col key={movie.id}>
            <Card movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Movies
