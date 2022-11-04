
import { Movies } from '../Card/interfaces'

export interface Props {
  movies: Movies;
  onFavorite?: Function;
  onDelete?: Function;
  type: string;
}
