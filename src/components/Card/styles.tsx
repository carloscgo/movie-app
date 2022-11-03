import styled from 'styled-components'
import Card from 'react-bootstrap/Card';

const CardMovie = styled(Card)`
  .footer {
    display: flex;
    justify-content: space-between;
  }

  .content {
    height: 115px;
  }

  .link {
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
      opacity: .5;
    }
  }
`

export default CardMovie
