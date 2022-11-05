
export interface IGenre {
  id: number;
  genre: number;
  img: string;
  title: string;
  date: string;
  description: string;
};

export interface Props {
  genres: IGenre[];
  onSave: Function;
};
