import { FETCH_NEWS, FETCH_NEWS_BY_ID, SET_POPULAR_NEWS } from "../actions/actionTypes"


const initialState = {
    news: [],
    popularNews: [],
    newsDetail: {}
}


function newsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_NEWS:
            return {
                ...state, 
                news: action.payload
            }
        case SET_POPULAR_NEWS:
            return {
                ...state, 
                popularNews: action.payload
            }
        case FETCH_NEWS_BY_ID:
            return {
                ...state, 
                newsDetail: action.payload
            }
        default: 
            return state
    }
}

export default newsReducer