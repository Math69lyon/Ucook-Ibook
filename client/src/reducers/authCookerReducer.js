import {
    SET_CURRENT_COOKER
} from '../constants'

const initialState2 = {
    isAuthenticated2: false,
    cooker: null
}

export default function (state = initialState2, action) {
    switch (action.type) {
        case SET_CURRENT_COOKER:
            return {
                ...state,
                isAuthenticated2: Object.keys(action.payload).length !== 0,
                cooker: action.payload
            }
        default:
            return state
    }
}