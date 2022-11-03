/*
 * getGenres reducer
 */

import produce from 'immer'
import uniqBy from 'lodash/uniqBy'

import {
  GENRES_ACTION_REQUEST,
  GENRES_ACTION_SUCCESS,
  GENRES_ACTION_ERROR
} from './constants'

export const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GENRES_ACTION_REQUEST:
        draft.loading = true
        draft.error = null
        break

      case GENRES_ACTION_SUCCESS:
        draft.loading = false
        draft.error = null
        draft.data = uniqBy([
          ...state.data,
          ...action.data.map(item => ({
            value: item.netflix_id,
            label: item.genre
          }))
        ], 'value')
        break

      case GENRES_ACTION_ERROR:
        draft.loading = false
        draft.error = action.error
        break

      default:
        return initialState
    }
  })

export default reducer
