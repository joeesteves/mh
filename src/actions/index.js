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
