import { Routes, Route } from "react-router-dom";
import { routes } from '../../utils/constants'
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';

import Container from './styles';

const App = () => {
  return (
    <Container fluid className="d-flex flex-nowrap p-0 h-100">
      <SideBar routes={routes} />

      <div className="d-flex m-4 flex-column" style={{ border: '1px solid red' }}>
        <NavBar />

        <Routes>
          <Route path={routes.favorites} element={<div>favorites</div>} />
          <Route path={routes.addMovie} element={<div>addMovie</div>} />
          <Route path={routes.categories} element={<div>categories</div>} />
          <Route path={routes.home} element={<div>home</div>} />
        </Routes>
      </div>
    </Container>
  )
}

export default App
