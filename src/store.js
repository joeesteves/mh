import { createStore } from 'redux'
import rootStore from './reducers'
const PreciosMock = [
    {nombre: 'A', precio: '1'},
    {nombre: 'B', precio: '2'},
    {nombre: 'C', precio: '3'},
] 

const store = createStore(rootStore)

export default store