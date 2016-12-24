import { combineReducers } from 'redux'
import { precios } from './precios'
import { entorno } from './entorno'

const rootStore = combineReducers({precios, entorno})

export default rootStore