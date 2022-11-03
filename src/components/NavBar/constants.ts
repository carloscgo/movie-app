import { routes } from '../../utils/constants'

export interface Item {
  title: string;
  icon: string;
  route: string;
}

export const ITEM:Item[] = [{
  title: 'Favoritos',
  icon: 'bi-suit-heart-fill',
  route: routes.favorites
}, {
  title: 'Agregar',
  icon: 'bi-bookmark-plus-fill',
  route: routes.addMovie
}]