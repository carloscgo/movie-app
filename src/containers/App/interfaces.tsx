
import { Genres } from '../../components/NavBar/interfaces';
import { Movies } from '../../components/Card/interfaces';

export interface Props {
  genres: Genres,
  movies: Movies,
  error: string,
  getGenresActionHandler: Function,
  getMoviesActionHandler: Function
}
