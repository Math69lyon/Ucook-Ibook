import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
<<<<<<< HEAD
import authCookerReducer from './authCookerReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    auth: authCookerReducer,
=======

export default combineReducers({
    errors: errorReducer,
    auth: authReducer
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf
})