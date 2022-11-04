import { routes } from '../../utils/constants'

export interface Item {
  title: string;
  icon: string;
  route: string;
  active: string;
}

export const ITEM:Item[] = [{
  title: 'Favoritos',
  icon: 'bi-suit-heart-fill',
  active: 'favorite',
  route: routes.favorites
}, {
  title: 'Agregar',
  icon: 'bi-bookmark-plus-fill',
  active: 'new',
  route: routes.addMovie
}, {
  title: 'Borrados',
  icon: 'bi-trash-fill',
  active: 'deletes',
  route: routes.deletes
}]