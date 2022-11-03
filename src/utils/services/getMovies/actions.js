/*
 * getMovies actions
 */

import {
  MOVIES_ACTION_REQUEST,
  MOVIES_ACTION_SUCCESS,
  MOVIES_ACTION_ERROR
} from './constants'

/**
 * @function getGenresRequestAction
 * @return {object} { type }
 */
export const getGenresRequestAction = () => ({
  type: MOVIES_ACTION_REQUEST,
})

/**
 * @function getGenresSuccessAction
 * @param {Array} data - Genres
 * @return {object} { type, data }
 */
export const getGenresSuccessAction = data => ({
  type: MOVIES_ACTION_SUCCESS,
  data
})

/**
 * @function getGenresErrorAction
 * @param {object} error - error
 * @return {object} { type, error }
 */
export const getGenresErrorAction = error => ({
  type: MOVIES_ACTION_ERROR,
  ...error
})
