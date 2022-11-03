
export interface Genres {
  loading: boolean,
  error: string | null,
  data: any[]
}

export interface Props {
  genres: Genres
}
