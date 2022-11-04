import { memo, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import NavBar from '../../components/NavBar';
import Movies from '../../components/Movies';
import Details from '../../components/Details';
import FormMovie from '../../components/FormMovie';
import Error from '../../components/Error';
import { TYPES } from '../../components/Card/constants'

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
  getMoviesRequestAction,
  getMoviesFavoriteAction,
  getMoviesUnfavoriteAction,
  getMoviesDeleteAction,
  getMoviesUndeleteAction,
  getMoviesAddAction
} from '../../utils/services/getMovies/actions'
import {
  makeDataSelector as makeDataSelectorGenres
} from '../../utils/services/getGenres/selectors'
import {
  makeDataSelector as makeDataSelectorMovies,
  makeFavoritesSelector,
  makeDeletesSelector
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
  favorites,
  deletes,
  error,
  getGenresActionHandler,
  getMoviesActionHandler,
  favoriteMovieActionHandler,
  unfavoriteMovieActionHandler,
  deleteMovieActionHandler,
  restoreMovieActionHandler,
  addMovieActionHandler
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
        <NavBar
          genres={genres}
          onSearch={(e: any) => getMoviesActionHandler(e)}
        />

        {error && <Error message={error} />}

        <Routes>
          <Route path={routes.addMovie} element={<FormMovie genres={genres.data} onSave={(e: any) => addMovieActionHandler(e)} />} />
          <Route path={routes.movie} element={<Details />} />
          <Route path={routes.home} element={<Movies
            movies={movies}
            type={TYPES.list}
            onFavorite={(e: any) => favoriteMovieActionHandler(e)}
            onDelete={(e: any) => deleteMovieActionHandler(e)}
          />} />
          <Route path={routes.favorites} element={<Movies
            movies={favorites}
            type={TYPES.favorite}
            onFavorite={(e: any) => unfavoriteMovieActionHandler(e)}
          />} />
          <Route path={routes.deletes} element={<Movies
            movies={deletes}
            type={TYPES.deletes}
            onDelete={(e: any) => restoreMovieActionHandler(e)}
          />} />
        </Routes>
      </Container.Content>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  genres: makeDataSelectorGenres(),
  movies: makeDataSelectorMovies(),
  favorites: makeFavoritesSelector(),
  deletes: makeDeletesSelector(),
  error: makeDataSelectorError()
})

export const mapDispatchToProps = (dispatch: Function) => ({
  getGenresActionHandler: () => dispatch(getGenresRequestAction()),
  getMoviesActionHandler: ({ offset, limit, genreId, title }: any) => dispatch(getMoviesRequestAction({ offset, limit, genreId, title })),
  favoriteMovieActionHandler: (data: any) => dispatch(getMoviesFavoriteAction({ data })),
  unfavoriteMovieActionHandler: (data: any) => dispatch(getMoviesUnfavoriteAction({ data })),
  deleteMovieActionHandler: (data: any) => dispatch(getMoviesDeleteAction({ data })),
  restoreMovieActionHandler: (data: any) => dispatch(getMoviesUndeleteAction({ data })),
  addMovieActionHandler: (data: any) => dispatch(getMoviesAddAction({ data })),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  memo
)(App)
