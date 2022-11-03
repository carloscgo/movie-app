/*
 * getGenres actions
 */

import {
  GENRES_ACTION_REQUEST,
  GENRES_ACTION_SUCCESS,
  GENRES_ACTION_ERROR
} from './constants'

/**
 * @function getGenresRequestAction
 * @return {object} { type }
 */
export const getGenresRequestAction = () => ({
  type: GENRES_ACTION_REQUEST,
})

/**
 * @function getGenresSuccessAction
 * @param {Array} data - Genres
 * @return {object} { type, data }
 */
export const getGenresSuccessAction = data => ({
  type: GENRES_ACTION_SUCCESS,
  data
})

/**
 * @function getGenresErrorAction
 * @param {object} error - error
 * @return {object} { type, error }
 */
export const getGenresErrorAction = error => ({
  type: GENRES_ACTION_ERROR,
  ...error
})
