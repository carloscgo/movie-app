import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Form, InputGroup, Button } from 'react-bootstrap';
import Container from './styles';
import { ITEM } from './constants';

const NavBar = () => {
  const [menu, setMenu] = useState('')

  return (
    <Container className='d-flex flex-wrap'>
      <Nav className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        {ITEM.map(item => (
          <Nav.Item key={item.route}>
            <Link
              to={item.route}
              onClick={() => setMenu(item.route)}
              className={`nav-link link-dark px-2 ${menu === item.route ? 'active' : ''}`}
            >
              <i className={`bi ${item.icon}`}></i> {item.title}
            </Link>
          </Nav.Item>
        ))}
      </Nav>

      <InputGroup className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 input-search">
        <Form.Control type="search" placeholder="Search by Title" />

        <Button variant="outline-secondary">
          <i className='bi bi-search-heart-fill'></i>
        </Button>
      </InputGroup>
    </Container>
  )
}

export default NavBar
