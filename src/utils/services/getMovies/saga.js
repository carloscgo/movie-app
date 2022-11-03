/**
 * getMovies saga
 */

import { all, put, takeLatest } from 'redux-saga/effects'
import { axios } from '../../services'

/** ACTIONS */
import {
  getGenresSuccessAction,
  getGenresErrorAction
} from './actions'

/** CONSTANTS */
import { MOVIES_ACTION_REQUEST } from './constants'

/**
 * @function getMovies
 * @yields getGenresSuccessAction / getGenresErrorAction
 */
export function * getMovies () {
  try {
    const data = yield axios.get('static/genres').then(response => response.data.results)

    yield put(getGenresSuccessAction(data))
  } catch (err) {
    yield put(getGenresErrorAction(err.message))
  }
}

/**
 * @function watchLGenresAction
 * @yields getMovies
 */
export function * watchLGenresAction () {
  yield takeLatest(MOVIES_ACTION_REQUEST, getMovies)
}

/**
 * @function saga
 * @yields all actions required
 */
export default function * saga () {
  yield all([
    watchLGenresAction(),
  ])
}
