/*
 * getMovies reducer
 */

import produce from 'immer'
import uniqBy from 'lodash/uniqBy'

import {
  MOVIES_ACTION_REQUEST,
  MOVIES_ACTION_SUCCESS,
} from './constants'

import {
  ACTION_ERROR
} from '../getError/constants'

import {
  setStorage
} from '../'

export const initialState = {
  loading: false,
  error: null,
  data: [],
  paginate: {
    total: 0,
    limit: 10,
    offset: 0
  }
}

function convertHTMLEntity(text){
    const span = document.createElement('span');

    return text
    .replace(/&[#A-Za-z0-9]+;/gi, (entity,position,text)=> {
        span.innerHTML = entity;
        return span.innerText;
    });
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
            id: item.netflix_id,
            img: item.img,
            title: convertHTMLEntity(item.title),
            date: (new Date(item.title_date)).toLocaleDateString("en-US"),
            description: item.synopsis,
          }))
        ], 'id')
        draft.paginate = action.paginate

        setStorage('movies', draft.data)
        setStorage('paginate', draft.paginate)
        break

      case ACTION_ERROR:
        draft.loading = false
        break

      default:
        return initialState
    }
  })

export default reducer
