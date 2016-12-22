export function precios(state = [], action) {
  switch (action.type) {
    case 'FETCH_PRECIOS':
      return state
    case 'RECEIVE_PRECIOS':
      return action.data
    default:
      return state
  }
}