import styled from 'styled-components'
import Container from 'react-bootstrap/Container';

const App = styled(Container)`
  @media all and (max-width: 820px) {
    flex-direction: column;
  }
`

export default App
