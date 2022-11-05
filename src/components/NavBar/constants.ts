import { routes } from '../../utils/constants';
import { Item } from './interface';

export const ITEM: Item[] = [{
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
}];