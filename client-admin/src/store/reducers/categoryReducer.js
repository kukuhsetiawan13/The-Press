import { FETCH_CATEGORIES, POPULATE_CATEGORY, UDPATE_CATEGORIES  } from "../actions/actionTypes"


const initialState = {
    categories: [],
    editedCategory: {}
}


function categoryReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state, 
                categories: action.payload
            }
        case UDPATE_CATEGORIES:
        return {
            ...state, 
            categories: action.payload
        }
        case POPULATE_CATEGORY:
            return {
                ...state, 
                editedCategory: action.payload
            }
        default: 
            return state
    }
}

export default categoryReducer