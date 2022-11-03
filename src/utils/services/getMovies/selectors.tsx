import { createSelector } from 'reselect'

import { initialState } from './reducer'

import { getStorage } from '..'

/**
 * Direct selector to the movies state domain
 */

export const selectDomain = (state: any) => state.movies || initialState

/**
 * @function makeDataSelector
 * @return {string} data from state
 */
export const makeDataSelector = () =>
  createSelector(
    selectDomain,
    substate => ({
      ...substate,
      data: getStorage('movies') || substate.data,
      paginate: getStorage('paginate') || substate.paginate,
    })
  )
