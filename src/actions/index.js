import axios from 'axios'

export const ADD_PET_REQUEST = 'ADD_PET_REQUEST'
export const ADD_PET_SUCCESS = 'ADD_PET_SUCCESS'
export const ADD_PET_FAILURE = 'ADD_PET_FAILURE'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const FETCH_VISIT_REQUEST = 'FETCH_VISIT_REQUEST'
export const FETCH_VISIT_SUCCESS = 'FETCH_VISIT_SUCCESS'
export const FETCH_VISIT_FAILURE = 'FETCH_VISIT_FAILURE'

export const addPet = ( pet ) => (dispatch) => {
    dispatch({type: ADD_PET_REQUEST })
    
    axios({
        method: 'post',
        url: 'http://localhost:8080/pet',
        data: {
            name: 'test',
            specs: 'test',
            breed: 'test',
            owner: {
                id: 1
            },
            birthDate: "10-10-2020"
        }
      });
    return axios.post(`http://localhost:8080/pet`,{
        name: 'test',
        specs: 'test',
        breed: 'test',
        owner: {
            id: 1
        },
        birthDate: "10-10-2020"
    }).then(payload => {
        console.log(payload)
        // dispatch({type: ADD_PET_SUCCESS, payload})
    }).catch(error => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the 
            // browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
        dispatch({type: ADD_PET_FAILURE })
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