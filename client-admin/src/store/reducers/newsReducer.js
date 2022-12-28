import { FETCH_NEWS, UDPATE_NEWS, POPULATE_NEWS } from "../actions/actionTypes"


const initialState = {
    news: [],
    editedNews: {}
}


function newsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_NEWS:
            return {
                ...state, 
                news: action.payload
            }
        case UDPATE_NEWS:
            return {
                ...state, 
                news: action.payload
            }
        case POPULATE_NEWS:
            return {
                ...state, 
                editedNews: action.payload
            }
        default: 
            return state
    }
}

export default newsReducer