import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import newsReducer from "./reducers/newsReducer";
import helperReducer from "./reducers/helperReducer";

const rootReducer = combineReducers ({
    newsReducer,
    helperReducer
})

const store = createStore(rootReducer, applyMiddleware( thunk))
export default store