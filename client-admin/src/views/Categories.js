import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from '../components/SIdebar'
import { fetchCategories, deleteCategory, updatedCategories } from '../store/middleware/thunk'
import { BASE_URL } from '../store/baseUrl'
import { changeLoadingToFalse, changeLoadingToTrue } from '../store/middleware/thunk'
import CategoriesTable from '../components/CategoriesTable'
import ClockLoader from "react-spinners/ClockLoader";
import Toastify from 'toastify-js'


const Categories = () => {
    const navigate = useNavigate()
    const {categories} = useSelector( (state) => state.categoryReducer)
    const {loading} = useSelector( (state) => state.loadingReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeLoadingToTrue())
        dispatch(fetchCategories())
    }, [])

    const handleDelete = (id) => {
        dispatch(changeLoadingToTrue())
       dispatch(deleteCategory(id))
       .then( (resp) => {
            if(!resp.ok) throw new Error (resp.message)
            const newArray = categories.filter(el => el.id !== id)
            dispatch(updatedCategories(newArray))
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
        .catch(error => {
            Toastify({
                text: error,
                className: error,
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
                    <button className="btn btn-primary"><Link to="add">Add a Category</Link></button>
                </div>
                <div className="overflow-x-auto p-5 w-full">
                    
                    <table className="table w-full">
                        {/*  head */ }
                        <thead className=''>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <CategoriesTable categories={categories} moveToEditForm={moveToEditForm} handleDelete={handleDelete}/>
                    </table>
                </div>
                </div>
            }
        </div>
    )


}

export default Categories