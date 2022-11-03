import { memo, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import NavBar from '../../components/NavBar';
import Movies from '../../components/Movies';
import Details from '../../components/Details';
import Error from '../../components/Error';

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
  getMoviesRequestAction
} from '../../utils/services/getMovies/actions'
import {
  makeDataSelector as makeDataSelectorGenres
} from '../../utils/services/getGenres/selectors'
import {
  makeDataSelector as makeDataSelectorMovies
} from '../../utils/services/getMovies/selectors'
import {
  makeDataSelector as makeDataSelectorError
} from '../../utils/services/getError/selectors'
import reducerGenres from '../../utils/services/getGenres/reducer'
import reducerMovies from '../../utils/services/getMovies/reducer'
import reducerError from '../../utils/services/getError/reducer'
import sagaGenres from '../../utils/services/getGenres/saga'
import sagaMovies from '../../utils/services/getMovies/saga'

import Container from './styles';
import { Props } from './interfaces';

const App: any = ({
  genres,
  movies,
  error,
  getGenresActionHandler,
  getMoviesActionHandler
}: Props) => {
  useInjectReducer({ key: 'genres', reducer: reducerGenres })
  useInjectSaga({ key: 'genres', saga: sagaGenres })

  useInjectReducer({ key: 'movies', reducer: reducerMovies })
  useInjectSaga({ key: 'movies', saga: sagaMovies })

  useInjectReducer({ key: 'error', reducer: reducerError })

  useEffect(() => {
    isEmpty(genres) && getGenresActionHandler()
  }, [])

  return (
    <Container fluid className="d-flex flex-nowrap p-0 main-content bg-secondary">
      <Container.Content>
        <NavBar genres={genres} paginate={movies.paginate} onSearch={(e: any) => getMoviesActionHandler({ ...e, offset: 0 })} />

        {error && <Error message={error} />}

        <Routes>
          <Route path={routes.favorites} element={<div>favorites</div>} />
          <Route path={routes.addMovie} element={<div>addMovie</div>} />
          <Route path={routes.categories} element={<div>categories</div>} />
          <Route path={routes.movie} element={<Details />} />
          <Route path={routes.home} element={<Movies movies={movies} onLoadMore={() => console.log('onLoadMore')} />} />
        </Routes>
      </Container.Content>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  genres: makeDataSelectorGenres(),
  movies: makeDataSelectorMovies(),
  error: makeDataSelectorError()
})

export const mapDispatchToProps = (dispatch: Function) => ({
  getGenresActionHandler: () => dispatch(getGenresRequestAction()),
  getMoviesActionHandler: ({ offset, limit, genreId, title }: any) => dispatch(getMoviesRequestAction({ offset, limit, genreId, title }))
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  memo
)(App)
