
export interface Genres {
  loading: boolean,
  data: any[]
}

export interface Props {
  genres: Genres,
  paginate: any,
  onSearch: Function
}
