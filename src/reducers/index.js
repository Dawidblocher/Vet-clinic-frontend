import {
    ADD_PET_SUCCESS,
    GET_PET_SUCCESS,
    FETCH_SUCCESS,
    FETCH_VISIT_SUCCESS,

} from '../actions'


const initialState = {
    owner: 
        {
            id: 1,
            firstName: "Katarzyna",
            lastName: "Bacek",
            email: "random1@gmail.com"
        }
    ,
    pets: [],
    visits: [
        {
            id: 1,
            date: '2021-10-24 09:00:00',
            description: 'Boli noga',
            doctorId: 1,
            petId: 1,
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_VISIT_SUCCESS:
            
            return {
                ...state,
                visits: action.data
            }
        case FETCH_SUCCESS:
            
            return {
                ...state,
                doctors: action.data
            }
        // eslint-disable-next-line no-duplicate-case
        case ADD_PET_SUCCESS:
            
            return {
                ...state,
                pets: [
                    ...state.pets,
                    action.data
                ]
            }
            case GET_PET_SUCCESS:
                console.log(action.data)
                return {
                    ...state,
                    pets: action.data           
                }
                

            
        default:
            return state
    }
}

export default rootReducer