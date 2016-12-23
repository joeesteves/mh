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