import styled from 'styled-components'
import Container from 'react-bootstrap/Container';

const NavBar = styled(Container)`
  .input-search {
    width: auto;
  }

  .nav-link {
    &:not(.active) {
      &:hover {
        color: var(--bs-primary) !important;
      }
    }

    &.active {
      color: var(--bs-primary) !important;
    }
  }
`

export default NavBar
