import { LOADING_FALSE, LOADING_TRUE } from "../actions/actionTypes"


const initialState = {
    loading: false
}


function loadingReducer(state = initialState, action) {
    switch(action.type) {
        case LOADING_FALSE:
            return {
                ...state, 
                loading: false
            }
        case LOADING_TRUE:
            return {
                ...state, 
                loading: true
            }
        default: 
            return state
    }
}

export default loadingReducer