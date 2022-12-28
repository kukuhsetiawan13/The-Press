import {BASE_URL} from '../baseUrl'
import { fetchNews, fetchNewsById, setLoadingFalse, setLoadingTrue, setPopularNews } from '../actions/actionCreator'
import Toastify from 'toastify-js'

export const handleFetchNews = () => {
    return (dispatch, getState) => {
        fetch(BASE_URL + '/pub/news')
        .then((resp) => {
            if(!resp.ok) throw new Error (resp.message)
            return resp.json()
        })
        .then((data) => {
            dispatch(fetchNews(data))

            const container = []
            for (let i=0; i<data.length; i++) {
                if(container.length === 5) {
                dispatch(setPopularNews(container))
                break
                }
                let random = Math.random()
                if(random > 0.5) container.push(data[i])
            }
           dispatch( setLoadingFalse())
        })
        .catch((err) => {
            Toastify({
                text: err,
                className: err,
                style: {
                  background: "linear-gradient(to right, #9b3232, #d16358)",
                }
              }).showToast();
        })
    }
}

export const fetchNewsDetails = (newsId) => {
    return (dispatch, getState) => {
        fetch(BASE_URL + `/pub/news/${newsId}`)
        .then((resp) => {
            if(!resp.ok) throw new Error (resp.message)
            return resp.json()
        })
        .then((data) => {
            dispatch(fetchNewsById(data))
            dispatch(setLoadingFalse())
        })
        .catch((err) => {
            Toastify({
                text: err,
                className: err,
                style: {
                  background: "linear-gradient(to right, #9b3232, #d16358)",
                }
            }).showToast();
        })
    }
}

export const handleSetLoadingTrue = () => {
    return (dispatch) => {
        dispatch(setLoadingTrue())
    }
}

export const handleSetLoadingFalse = () => {
    return (dispatch) => {
        dispatch(setLoadingFalse())
    }
}