import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/SIdebar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews, deleteNews, updateNews, changeLoadingToTrue, changeLoadingToFalse } from '../store/middleware/thunk'
import NewsTable from '../components/NewsTable'
import ClockLoader from "react-spinners/ClockLoader";
import Toastify from 'toastify-js'

export default function News() {
    const {news} = useSelector( (state) => {
        return state.newsReducer
    })
    const dispatch = useDispatch()

    const {loading} = useSelector( (state) => state.loadingReducer)
    
    const navigate = useNavigate()

    
    useEffect(() => {
        dispatch(changeLoadingToTrue())
        dispatch(fetchNews())
    }, [])

    const handleDelete = async (id) => {
        dispatch(changeLoadingToTrue())
        dispatch(deleteNews(id))
        .then( (resp) => {
            if(!resp.ok) throw new Error (resp.message || resp.statusText)
            const newArray = news.filter(el => el.id !== id)
            dispatch(updateNews(newArray))
            return resp.json()
        })
        .then( (result) => {
            Toastify({
                text: result.message,
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
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
        .finally(dispatch(changeLoadingToFalse())) 
    } 

    const moveToEditForm = (id) => {
        navigate(`edit/${id}`)
    }

    return (
        <div className='mt-5'>
            {loading
                ?
                <div className='mt-48'>
                    <ClockLoader
                    className='mx-auto'
                    color="#F37A24"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                </div>
                :
                <div>
                <div className='flex py-2 px-8 justify-start'>
                    <button className="btn btn-primary"><Link to="add">Post a News</Link></button>
                </div>
                <div className="overflow-x-auto p-5 w-full">
                    
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <NewsTable news={news} moveToEditForm={moveToEditForm} handleDelete={handleDelete}/>
                    </table>
                    
                </div>
                </div>
            }

        </div>
    )
}