import {FETCH_TAGS } from "../actions/actionTypes"


const initialState = {
    tags: []
}


function tagReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TAGS:
        return {
            ...state, 
            tags: action.payload
        }
        default: 
            return state
    }
}

export default tagReducer