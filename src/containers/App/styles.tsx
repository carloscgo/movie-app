import styled from 'styled-components'
import Container from 'react-bootstrap/Container';

const App: any = styled(Container)`
  @media all and (max-width: 820px) {
    flex-direction: column;
  }
`

App.Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export default App
