export function entorno(state = {loader: true}, action){
  switch (action.type) {
    case 'TOGGLE_LOADER':
      return {...state, loader: false}
    default:
      return state
  }
}