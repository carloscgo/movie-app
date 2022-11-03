import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Form, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';

import Container from './styles';
import { ITEM } from './constants';
import { routes, __VITE_APP__ } from '../../utils/constants'
import { Props } from './interfaces';

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '1px solid var(--bs-gray-300)',
    color: state.isSelected ? 'white' : 'blue',
    padding: 10,
  }),
  control: () => ({
    width: 200,
    display: 'flex'
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const NavBar = ({ genres }: Props) => {
  const [menu, setMenu] = useState('')
  const [selectedOption, setSelectedOption] = useState({ value: '', label: 'All' });

  return (
    <Container fluid className='d-flex flex-wrap text-bg-dark'>
      <Link to={routes.home} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none p-3">
        <i className="bi bi-camera-reels logo"></i>
        <div className="text-bold">{__VITE_APP__.APP_NAME}</div>
      </Link>

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
        <Select
          defaultValue={selectedOption}
          onChange={(e: any) => setSelectedOption(e)}
          name="category"
          className="form-control"
          placeholder="Select a Category"
          styles={customStyles}
          isClearable={true}
          isSearchable={true}
          isLoading={genres.loading}
          options={genres.data}
        />

        <Form.Control type="search" placeholder="Search by Title" />

        <Button type="button" className="btn btn-light">
          <i className='bi bi-search-heart-fill'></i>
        </Button>
      </InputGroup>
    </Container>
  )
}

export default NavBar
