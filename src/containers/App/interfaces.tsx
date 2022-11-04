
import { Genres } from '../../components/NavBar/interfaces';
import { Movies } from '../../components/Card/interfaces';

export interface Props {
  genres: Genres;
  movies: Movies;
  favorites: Movies;
  deletes: Movies;
  error: string;
  getGenresActionHandler: Function;
  getMoviesActionHandler: Function;
  favoriteMovieActionHandler: Function;
  unfavoriteMovieActionHandler: Function;
  deleteMovieActionHandler: Function;
  restoreMovieActionHandler: Function;
  addMovieActionHandler: Function
}
