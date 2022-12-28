import { handleFetchNews, handleUpdateNews, handleFetchCategories, handleUpdateCategories, handleFetchTags, handlePopulateNews, handlePopulateCategory, setLoadingFalse, setLoadingTrue } from "../actions/actionCreator"
import { BASE_URL } from "../baseUrl";
import Toastify from 'toastify-js'

export const changeLoadingToFalse = () => {
    return (dispatch) => {
        dispatch(setLoadingFalse())
    }
}

export const changeLoadingToTrue = () => {
    return (dispatch) => {
        dispatch(setLoadingTrue())
    }
}

export const login = (inputObject) => {
    return (dispatch, getState) => {
        return fetch(BASE_URL + '/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputObject),
        })
        
    }
}

export const register = (inputObject) => {
    return (dispatch, getState) => {
        return fetch(BASE_URL + '/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.access_token
            },
            body: JSON.stringify(inputObject),
        })
        
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.clear()
    }
}

export const fetchNews = () => {
    return (dispatch, getState) => {
        fetch(BASE_URL + '/news', {
            method: 'GET',

            headers: {
                'access_token': localStorage.access_token
            }
        })
        .then(resp => {
            if(!resp.ok) throw new Error ('Error fetch news data')
            return resp.json()
        })
        .then(data => {
            dispatch(handleFetchNews(data))
        })
        .catch(err => {
            Toastify({
                text: err,
                className: err,
                style: {
                  background: "linear-gradient(to right, #9b3232, #d16358)",
                }
              }).showToast();
        })
        .finally(dispatch(setLoadingFalse()))
    }
}

export const deleteNews = (id, news) => {
    return (dispatch, getState) => {
        return fetch(BASE_URL + `/news/${id}`, {
            method: 'DELETE',
            headers: {
                access_token: localStorage.access_token
            }
        })
    } 
}

export const updateNews = (news) => {
    return (dispatch, getState) => {
        dispatch(handleUpdateNews(news))
    } 
}

export const findNewsById = (id) => {
    return (dispatch, getState) => {
        fetch(BASE_URL + `/news/${id}`, {
            method: 'GET',
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(resp => {
            if(!resp.ok) throw new Error ('Error fetch news data')
            return resp.json()
        })
        .then(data => {
            dispatch(handlePopulateNews(data))
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
        .finally(dispatch(setLoadingFalse())) 
    } 
}

export const addOrEditNews = (url, method, inputObject) => {
    return (dispatch, getState) => {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.access_token
            },
            body: JSON.stringify(inputObject),
        })
        
    }
}

export const fetchCategories = () => {
    return (dispatch, getState) => {
        fetch(BASE_URL + '/categories', {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(resp => {
            if(!resp.ok) throw new Error ('Error fetch categories data')
            return resp.json()
        })
        .then(data => {
            dispatch(handleFetchCategories(data))
        })
        .catch(err => {
            Toastify({
                text: err,
                className: err,
                style: {
                  background: "linear-gradient(to right, #9b3232, #d16358)",
                }
              }).showToast();
        })
        .finally(dispatch(setLoadingFalse()))
    }
}

export const deleteCategory = (id, news) => {
    return (dispatch, getState) => {
        return fetch(BASE_URL + `/categories/${id}`, {
            method: 'DELETE',
            headers: {
                access_token: localStorage.access_token
            }
        })
        
    } 
}

export const updatedCategories = (categories) => {
    return (dispatch, getState) => {
        dispatch(handleUpdateCategories(categories))
    } 
}

export const findCategoryById = (id) => {
    return (dispatch, getState) => {
        fetch(BASE_URL + `/categories/${id}`, {
            method: 'GET',
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(resp => {
            if(!resp.ok) throw new Error ('Error fetch categories data')
            return resp.json()
        })
        .then(data => {
            
            dispatch(handlePopulateCategory(data))
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
        .finally(dispatch(setLoadingFalse())) 
    } 
}

export const addOrEditCategory = (url, method, inputObject) => {
    return (dispatch, getState) => {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.access_token
            },
            body: JSON.stringify(inputObject),
        })
        
    }
}

export const fetchTags = () => {
    return (dispatch, getState) => {
        fetch(BASE_URL + '/tags', {
            headers: {
                'access_token': localStorage.access_token
            }
        })
        .then(resp => {
            if(!resp.ok) throw new Error ('Error fetch tags data')
            return resp.json()
        })
        .then(data => {
            dispatch(handleFetchTags(data))
        })
        .catch(err => {
            Toastify({
                text: err,
                className: err,
                style: {
                  background: "linear-gradient(to right, #9b3232, #d16358)",
                }
              }).showToast();
        })
        .finally(dispatch(setLoadingFalse())) 
    }
}

