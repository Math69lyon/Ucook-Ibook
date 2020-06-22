import axios from 'axios'
import {
    GET_PROFILE,
    LOAD_PROFILE
} from '../constants'

export const getCookerProfile = (cookerId) => dispatch => {
    dispatch(loadProfile())
    axios.get(`http://localhost:5000/api/cookers/${cookerId}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const refreshCookerProfile = (cookerId) => dispatch => {
    axios.get(`http://localhost:5000/api/cookers/${cookerId}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const searchCooker = (searchData, history) => dispatch => {
    axios.post('http://localhost:5000/api/cookers/search', searchData)
        .then(res => {
            history.push(`/profile/${res.data.cookerId}`)
        })
        .catch(err => history.push('/search'))
}

export const loadProfile = () => {
    return {
        type: LOAD_PROFILE
    }
}