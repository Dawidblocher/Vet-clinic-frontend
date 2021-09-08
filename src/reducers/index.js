import {
    ADD_PET,
    FETCH_SUCCESS
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
    pets: [
        {
            id: 1,
            birthdate: "2018-07-12",
            breed: 'Bernardyn',
            name: 'Spencer',
            specs: 'Pies',
            idOwner: 1
        }
    ],
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
        case FETCH_SUCCESS:
            
            return {
                ...state,
                doctors: action.data
            }
        // eslint-disable-next-line no-duplicate-case
        case ADD_PET:
            return {
                ...state,
                pets: [
                    ...state.pets,
                    action.payload
                ]
            }
            
        default:
            return state
    }
}

export default rootReducer