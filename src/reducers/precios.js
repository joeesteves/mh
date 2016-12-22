export function precios(state = [], action) {
  switch (action.type) {
    case 'FETCH_PRECIOS':
      return state
    case 'RECEIVE_PRECIOS':
      let newState = action.data.map(row => {
        return {nombre: row[0], precio: row[1] }
      })
      return newState
    default:
      return state
  }
}