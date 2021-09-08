import axios from 'axios'

export const ADD_PET = 'ADD_PET'
export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const addPet = ( pet ) =>({
    type: ADD_PET,
    payload: {
        id: pet.id,
        name: pet.name,
        specs: pet.specs,
        breed: pet.breed,
        birthdate: pet.birthdate,
        ownerId: pet.ownerId
    }
})

export const getDoctors = (specs = null) => (dispatch, getState) => {
    dispatch({type: FETCH_REQUEST})

    return axios
    .get(`http://localhost:8080/doctor`)
    .then(({data}) => {
        dispatch({type: FETCH_SUCCESS, data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_FAILURE})
    })

}