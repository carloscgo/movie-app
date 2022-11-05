
import { Movies } from '../Card/interface';

export interface Props {
  movies: Movies;
  onFavorite?: Function;
  onDelete?: Function;
  type: string;
};
