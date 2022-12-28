import { SET_LOADING_TRUE, SET_LOADING_FALSE } from "../actions/actionTypes"

const initialState = {
    loading: false
}

export default function helperReducer(state = initialState, action) {
    switch(action.type) {
        case SET_LOADING_TRUE:
            return {
                ...state,
                loading: true
            }
        case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}