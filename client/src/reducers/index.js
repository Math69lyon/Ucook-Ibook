import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import authCookerReducer from './authCookerReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    auth: authCookerReducer
})