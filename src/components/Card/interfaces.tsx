
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
  paginate: any
}

export interface Props {
  movie: Movie
}
