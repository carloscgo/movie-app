import { createSelector } from 'reselect'

import { initialState } from './reducer'

import { getStorage } from '..'

/**
 * Direct selector to the genres state domain
 */

export const selectDomain = (state: any) => state.genres || initialState

/**
 * @function makeDataSelector
 * @return {string} data from state
 */
export const makeDataSelector: any = () =>
  createSelector(
    selectDomain,
    substate => ({
      ...substate,
      data: getStorage('genres') || substate.data
    })
  )