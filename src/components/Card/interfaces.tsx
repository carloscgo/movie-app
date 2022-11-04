
export interface Movie {
  id: any;
  img: string;
  title: string;
  date: string;
  description: string;
}

export interface Movies {
  loading: boolean,
  data: any[],
}

export interface Props {
  movie: Movie,
  onFavorite?: Function | undefined,
  onDelete?: Function | undefined,
  type: string
}
