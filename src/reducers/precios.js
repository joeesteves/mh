function updatePrecios(state = {}, newState){
  return { ...newState, hide: state.hide}
}

export function precios(state = [], action) {
  switch (action.type) {
    case 'FETCH_PRECIOS':
      return state
    case 'RECEIVE_PRECIOS':
      if(state.length > 0){
        return state.map((item,i) => {
          return updatePrecios(item, action.data[i])
        })
      }
      return action.data.map(item => {
        item.hide = false
        return item
      })
    case 'SEARCH_PRODUCTOS':
      let codigo = action.text.match(/#(\w+)?/)
      let searchKey = "nombre"
      let searchText = action.text
      if(codigo){
        if(codigo[1]) {
          searchKey = "codigo"
          searchText = codigo[1]
        } else {
          return state
        }
      }
      let newState = state.map(item => {
        item.hide = !(new RegExp(searchText,"gi")).test(item[searchKey])
        return item
      })
      return newState
    default:
      return state
  }
}