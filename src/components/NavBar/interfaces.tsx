
export interface Genres {
  loading: boolean;
  data: any[];
}

export interface Props {
  genres: Genres;
  onSearch: Function;
}
