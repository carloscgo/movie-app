export interface Genres {
  loading: boolean;
  data: any[];
};

export interface Item {
  title: string;
  icon: string;
  route: string;
  active: string;
};

export interface IProps {
  genres: Genres;
  onSearch: Function;
};
