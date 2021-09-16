import axios from 'axios'

export const ADD_PET_REQUEST = 'ADD_PET_REQUEST'
export const ADD_PET_SUCCESS = 'ADD_PET_SUCCESS'
export const ADD_PET_FAILURE = 'ADD_PET_FAILURE'

export const GET_PET_REQUEST = 'GET_PET_REQUEST'
export const GET_PET_SUCCESS = 'GET_PET_SUCCESS'
export const GET_PET_FAILURE = 'GET_PET_FAILURE'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const FETCH_VISIT_REQUEST = 'FETCH_VISIT_REQUEST'
export const FETCH_VISIT_SUCCESS = 'FETCH_VISIT_SUCCESS'
export const FETCH_VISIT_FAILURE = 'FETCH_VISIT_FAILURE'

export const addPet = ( pet ) => (dispatch, getState) => {
    dispatch({type: ADD_PET_REQUEST })
    
    return axios.post(`http://localhost:8080/pet`,{
        name: pet.name,
        specs: pet.specs,
        breed: pet.breed,
        owner: {
            id: getState().owner.id
        },
        birthDate: pet.birthDate
    }).then(({data}) => {
        
        dispatch({type: ADD_PET_SUCCESS, data})
    }).catch(error => {
    
        dispatch({type: ADD_PET_FAILURE })
    })  
}

export const getPets = (id) => (dispatch, getState) => {
    dispatch({type: GET_PET_REQUEST})

    return axios
    .get(`http://localhost:8080/pet`)
    .then(({data}) => {
        dispatch({type: GET_PET_SUCCESS, data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_FAILURE})
    })

}

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

export const getVisits = () => (dispatch) => {
    dispatch({type: FETCH_VISIT_REQUEST})

    return axios
    .get(`http://localhost:8080/visit`)
    .then(({data}) => {
        dispatch({type: FETCH_VISIT_SUCCESS, data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_VISIT_FAILURE})
    })
}