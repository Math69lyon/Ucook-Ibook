import {
    SET_CURRENT_COOKER
} from '../constants'

const initialState = {
    isAuthenticated: false,
    cooker: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_COOKER:
            return {
                ...state,
                isAuthenticated: Object.keys(action.payload).length !== 0,
                cooker: action.payload
            }
        default:
            return state
    }
}