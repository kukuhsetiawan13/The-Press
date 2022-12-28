import { FETCH_CATEGORIES, FETCH_NEWS, FETCH_TAGS, POPULATE_CATEGORY, POPULATE_NEWS, UDPATE_NEWS, UDPATE_CATEGORIES, LOADING_FALSE, LOADING_TRUE } from "./actionTypes"

export const handleFetchNews = (payload) => {
    return {
        type: FETCH_NEWS,
        payload
    }
}

export const handleUpdateNews = (payload) => {
    return {
        type: UDPATE_NEWS,
        payload
    }
}

export const handlePopulateNews = (payload) => {
    return {
        type: POPULATE_NEWS,
        payload
    }
}

export const handleFetchCategories = (payload) => {
    return {
        type: FETCH_CATEGORIES,
        payload
    }
}

export const handleUpdateCategories = (payload) => {
    return {
        type: UDPATE_CATEGORIES,
        payload
    }
}

export const handlePopulateCategory = (payload) => {
    return {
        type: POPULATE_CATEGORY,
        payload
    }
}

export const handleFetchTags = (payload) => {
    return {
        type: FETCH_TAGS,
        payload
    }
}

export const setLoadingFalse = () => {
    return {
        type: LOADING_FALSE,
    }
}

export const setLoadingTrue = () => {
    return {
        type: LOADING_TRUE,
    }
}


