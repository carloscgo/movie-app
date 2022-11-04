import axios from 'axios'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { useInjectReducer } from '../injectReducer'
import { useInjectSaga } from '../injectSaga'
import { __VITE_APP__ } from '../constants'

axios.defaults.headers.common['X-RapidAPI-Key'] = __VITE_APP__.API_KEY;
axios.defaults.headers.common['X-RapidAPI-Host'] = __VITE_APP__.API_HOST;
axios.defaults.baseURL = `https://${__VITE_APP__.API_HOST}/`

const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))
const getStorage = (key, def) => JSON.parse(localStorage.getItem(key)) || def

export {
  connect,
  createStructuredSelector,
  compose,
  useInjectReducer,
  useInjectSaga,
  axios,
  setStorage,
  getStorage
}