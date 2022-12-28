import { FETCH_NEWS, FETCH_NEWS_BY_ID, SET_POPULAR_NEWS, SET_LOADING_TRUE, SET_LOADING_FALSE } from "./actionTypes";


export const fetchNews = (payload) => {
    return {
        type: FETCH_NEWS,
        payload
    }
}

export const setPopularNews = (payload) => {
    return {
        type: SET_POPULAR_NEWS,
        payload
    }
}

export const fetchNewsById = (payload) => {
    return {
        type: FETCH_NEWS_BY_ID,
        payload
    }
}

export const setLoadingTrue = () => {
    return {
        type: SET_LOADING_TRUE,
    }
}

export const setLoadingFalse = () => {
    return {
        type: SET_LOADING_FALSE,
    }
}