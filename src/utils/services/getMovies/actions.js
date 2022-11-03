/*
 * getMovies actions
 */

import {
  MOVIES_ACTION_REQUEST,
  MOVIES_ACTION_SUCCESS,
} from './constants'

/**
 * @function getMoviesRequestAction
 * @param {Int} offset - Page
 * @param {Int} limit - PageSize
 * @param {Int} genreId - Genre Id
 * @param {String} title - Title
 * @return {object} { type }
 */
export const getMoviesRequestAction = ({ offset, limit, genreId, title }) => ({
  type: MOVIES_ACTION_REQUEST,
  offset, 
  limit, 
  genreId, 
  title
})

/**
 * @function getMoviesSuccessAction
 * @param {Array} data - Movies
 * @param {object} paginate - Paginate
 * @return {object} { type, data }
 */
export const getMoviesSuccessAction = (data, paginate) => ({
  type: MOVIES_ACTION_SUCCESS,
  data,
  paginate
})
