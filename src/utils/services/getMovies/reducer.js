/*
 * getMovies reducer
 */

import produce from 'immer'
import uniqBy from 'lodash/uniqBy'

import {
  MOVIES_ACTION_REQUEST,
  MOVIES_ACTION_SUCCESS,
  MOVIES_ACTION_ERROR
} from './constants'

export const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MOVIES_ACTION_REQUEST:
        draft.loading = true
        draft.error = null
        break

      case MOVIES_ACTION_SUCCESS:
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

      case MOVIES_ACTION_ERROR:
        draft.loading = false
        draft.error = action.error
        break

      default:
        return initialState
    }
  })

export default reducer
