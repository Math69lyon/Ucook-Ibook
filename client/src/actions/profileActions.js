import axios from 'axios'
import {
    GET_PROFILE,
    LOAD_PROFILE
} from '../constants'

export const getUserProfile = (userId) => dispatch => {
    dispatch(loadProfile())
    axios.get(`http://localhost:5000/api/users/${userId}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const refreshUserProfile = (userId) => dispatch => {
    axios.get(`http://localhost:5000/api/users/${userId}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const searchUser = (searchData, history) => dispatch => {
    axios.post('http://localhost:5000/api/users/search', searchData)
        .then(res => {
            history.push(`/profile/${res.data.userId}`)
        })
        .catch(err => history.push('/search'))
}

export const loadProfile = () => {
    return {
        type: LOAD_PROFILE
    }
}