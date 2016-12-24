import {checkAuth} from '../lib/myGapi'

export function fetchPrecios() {
  checkAuth()
}

export function receivePrecios(data) {
  return {
    type: 'RECEIVE_PRECIOS',
    data
  }
}

export function searchProductos(text) {
  return {
    type: 'SEARCH_PRODUCTOS',
    text
  }
}

export function toggleLoader() {
  return {
    type: 'TOGGLE_LOADER'
  }
}