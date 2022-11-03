import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { __VITE_APP__ } from '../../utils/constants'
import Container from './styles';
import { CATEGORIES } from './constants';

interface Props {
  routes: any
}

const SideBar = ({ routes }: Props) => {
  const [category, setCategory] = useState('')

  return (
    <Container className='side-bar d-flex flex-column flex-shrink-0 p-3 text-bg-light'>
      <Link to={routes.home} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-bold text-decoration-none p-3">
        {__VITE_APP__.APP_NAME}
      </Link>

      <Nav variant="pills" className="flex-column" defaultActiveKey={routes.home}>
        {CATEGORIES.map(item => (
          <Nav.Item key={item.slug}>
            <Link
              to={`${routes.categories.replace(':category', item.slug)}`}
              onClick={() => setCategory(item.slug)}
              className={`nav-link ${category === item.slug ? 'active' : ''}`}
            >
              {item.title}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  )
}

export default SideBar
