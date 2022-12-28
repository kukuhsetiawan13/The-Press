import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import newsReducer from "./reducers/newsReducer";
import categoryReducer from "./reducers/categoryReducer"
import tagReducer from "./reducers/tagReducer"
import loadingReducer from "./reducers/loadingReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers ({
    newsReducer,
    categoryReducer,
    tagReducer,
    loadingReducer
})

const store = createStore(rootReducer, applyMiddleware( thunk))
export default store