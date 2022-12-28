import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../store/baseUrl'
import {addOrEditCategory, findCategoryById} from '../store/middleware/thunk'
import ClockLoader from "react-spinners/ClockLoader";
import { changeLoadingToTrue, changeLoadingToFalse } from '../store/middleware/thunk'
import Toastify from 'toastify-js'

const CategoryForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const {loading} = useSelector((state) => state.loadingReducer)
    
    const [inputObject, setInputObject] = useState({
        name: '',
    })

    const {editedCategory} = useSelector( (state) => state.categoryReducer)

    useEffect(() => {
        if(id) {
            dispatch(changeLoadingToTrue())
            dispatch(findCategoryById(id))
        }
    }, [])

    useEffect(() => {
        if(id && editedCategory.id) {
            setInputObject({
                name: editedCategory.name
            })
        } 
    }, [editedCategory])



    const handleChange = (e) => {
        const {name, value} = e.target

        setInputObject( (prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeLoadingToTrue())

        let url = BASE_URL + '/categories'
        let method = 'POST'
        if(id) {
            url = BASE_URL + `/categories/${id}`
            method = 'PUT'
        }

        dispatch(addOrEditCategory(url, method, inputObject))
        .then((resp) => {
            if(!resp.ok) throw new Error (resp.message || resp.statusText)
            navigate('/categories')
            setInputObject({
                title: '',
                content: '',
                imgUrl: '',
                tag: '',
                categoryId: ''
            })
            return resp.json()
        })
        .then((data) => {
            if(method === 'POST') {
                Toastify({
                    text: `Category with id ${data.id} has been created`,
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            } else {
                Toastify({
                    text: data.message,
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            }
        })
        .catch((error) => {
            Toastify({
                text: error,
                className: error,
                style: {
                  background: "linear-gradient(to right, #9b3232, #d16358)",
                }
            }).showToast();
            navigate('/categories')
        })
        .finally(dispatch(changeLoadingToFalse()))
    }

    return(
        <div className="flex mt-16 flex-col items-center pt-5">           
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
                <form onSubmit={handleSubmit} className="drop-shadow-lg flex flex-col gap-5 p-2 border-2 border-double border-amber-500">
                    <div className="form-control">
                        <label className="input-group input-group-vertical">
                            <span>Name</span>
                            <input onChange={handleChange} name="name" value={inputObject.name || ''} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-warning">{id ? 'Edit' : 'Add'}</button>

                </form>
            }
        </div>
    )
}


export default CategoryForm