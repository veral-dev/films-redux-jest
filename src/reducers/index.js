import { combineReducers } from 'redux'

import filmsReducer from './filmsReducer'
import alertReducer from './alertReducer'


export default combineReducers({
    films: filmsReducer,
    alert: alertReducer
})