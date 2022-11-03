/**
 * getGenres saga
 */

import { all, put, takeLatest } from 'redux-saga/effects'
import { axios } from '../../services'

/** ACTIONS */
import {
  getGenresSuccessAction,
  getGenresErrorAction
} from './actions'

/** CONSTANTS */
import { GENRES_ACTION_REQUEST } from './constants'

/**
 * @function getGenres
 * @yields getGenresSuccessAction / getGenresErrorAction
 */
export function * getGenres () {
  try {
    const data = yield axios.get('static/genres').then(response => response.data.results)

    yield put(getGenresSuccessAction(data))
  } catch (err) {
    yield put(getGenresErrorAction(err.message))
  }
}

/**
 * @function watchLGenresAction
 * @yields getGenres
 */
export function * watchLGenresAction () {
  yield takeLatest(GENRES_ACTION_REQUEST, getGenres)
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
