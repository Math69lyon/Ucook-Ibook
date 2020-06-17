import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_COOKER } from '../constants'
import setAuthHeader from '../utils/setAuthHeader'

export const connectionCooker = (cookerData) => dispatch => {
    axios.post('http://localhost:5000/api/cookers/connection', cookerData)
        .then(res => {
            const { token } = res.data
            localStorage.setItem('jwtToken', token)
            setAuthHeader(token)
            dispatch(getCurrentCooker())
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const registrationCooker = (cookerData, history) => dispatch => {
    axios.post('http://localhost:5000/api/cookers/cookerregistration', cookerData)
        .then(res => history.push('/connection'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const getCurrentCooker = () => dispatch => {
    axios.get('http://localhost:5000/api/cookers')
        .then(res => dispatch(setCurrentCooker(res.data)))
}

export const setCurrentCooker = (data) => {
    return {
        type: SET_CURRENT_COOKER,
        payload: data
    }
}

export const logoutCooker = () => dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthHeader()
    dispatch(setCurrentCooker())
}