import { memo, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar';
import Movies from '../../components/Movies';
import Details from '../../components/Details';

import { Movie } from '../../components/Card/interfaces'
import { routes } from '../../utils/constants'
import {
  connect,
  createStructuredSelector,
  compose,
  useInjectReducer,
  useInjectSaga,
} from '../../utils/services'
import {
  getGenresRequestAction
} from '../../utils/services/getGenres/actions'
import {
  makeDataSelector as makeDataSelectorGenres
} from '../../utils/services/getGenres/selectors'
import reducerGenres from '../../utils/services/getGenres/reducer'
import sagaGenres from '../../utils/services/getGenres/saga'

import Container from './styles';
import { Props } from './interfaces';

const moviesList: Array<Movie> = [{
  id: 1,
  img: 'https://via.placeholder.com/3000',
  title: "Movie Title",
  date: '15/10/2011',
  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
}]

const App: any = ({ genres, getGenresActionHandler }: Props) => {
  useInjectReducer({ key: 'genres', reducer: reducerGenres })
  useInjectSaga({ key: 'genres', saga: sagaGenres })

  useEffect(() => {
    getGenresActionHandler()
  }, [])

  return (
    <Container fluid className="d-flex flex-nowrap p-0 h-100 bg-secondary">
      <Container.Content>
        <NavBar genres={genres} />

        <Routes>
          <Route path={routes.favorites} element={<div>favorites</div>} />
          <Route path={routes.addMovie} element={<div>addMovie</div>} />
          <Route path={routes.categories} element={<div>categories</div>} />
          <Route path={routes.movie} element={<Details />} />
          <Route path={routes.home} element={<Movies movies={moviesList} />} />
        </Routes>
      </Container.Content>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  genres: makeDataSelectorGenres()
})

export const mapDispatchToProps = (dispatch: Function) => ({
  getGenresActionHandler: () =>
    dispatch(getGenresRequestAction())
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  memo
)(App)
