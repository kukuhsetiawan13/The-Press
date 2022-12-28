import {useEffect, useState} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {BASE_URL }from '../store/baseUrl'
import { fetchCategories, findNewsById, addOrEditNews, changeLoadingToFalse } from '../store/middleware/thunk'
import { changeLoadingToTrue } from '../store/middleware/thunk'
import ClockLoader from "react-spinners/ClockLoader";
import Toastify from 'toastify-js'

const NewsForm = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {categories} = useSelector( (state) => state.categoryReducer)
    const {editedNews} = useSelector( (state) => state.newsReducer)
    const dispatch = useDispatch()

    const {loading} = useSelector((state) => state.loadingReducer)
    

    useEffect(() => {
        dispatch(changeLoadingToTrue())
        dispatch(fetchCategories())
        if(id) dispatch(findNewsById(id))
    }, [])

    useEffect(() => {
        if (id && editedNews.id) { 
            setInputObject({
                title: editedNews.title,
                content: editedNews.content,
                imgUrl: editedNews.imgUrl,
                tag: editedNews.PostTags[0].Tag.name,
                categoryId: editedNews.categoryId
            }) 
        }
      }, [editedNews]) 


    const [inputObject, setInputObject] = useState({
        title: '',
        content: '',
        imgUrl: '',
        tag: '',
        categoryId: 1
    })

   
    const handleChange = (e) => {
        const {name, value} = e.target

        setInputObject( (prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeLoadingToTrue())

        let url =  BASE_URL + '/news'
        let method = 'POST'
        if(id) {
            url = BASE_URL + `/news/${id}`
            method = 'PUT'
        }

        dispatch(addOrEditNews(url, method, inputObject))
        .then((resp) => {
            if(!resp.ok) throw new Error (resp.message || resp.statusText)
            return resp.json()
        })
        .then((data) => {
            if(method === 'POST') {
                Toastify({
                    text: `Post with id ${data.id} has been created`,
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
            navigate('/news')
            setInputObject({
                title: '',
                content: '',
                imgUrl: '',
                tag: '',
                categoryId: ''
            })
        })
        .catch((error) => {
            Toastify({
                text: error,
                className: error,
                style: {
                  background: "linear-gradient(to right, #9b3232, #d16358)",
                }
            }).showToast();
            navigate('/news')
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
                            <span>Title</span>
                            <input onChange={handleChange} name="title" value={inputObject.title || ''} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="input-group input-group-vertical">
                            <span>Content</span>
                            <textarea onChange={handleChange} name="content" value={inputObject.content || ''} className="textarea textarea-secondary" placeholder="Put the content here"></textarea>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="input-group input-group-vertical">
                            <span>Image Url</span>
                            <input onChange={handleChange} name="imgUrl" value={inputObject.imgUrl || ''} type="text" placeholder="imageurl@site.com" className="input input-bordered input-secondary" />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="input-group input-secondary input-group-vertical">
                            <span>Tag</span>
                            <input onChange={handleChange} name="tag" value={inputObject.tag || ''} type="text" placeholder="e.g. Food, Bitcoin, Senate, etc." className="input input-secondary input-bordered" />
                        </label>
                    </div>

                    <select onChange={handleChange} value={inputObject.categoryId || ''} name="categoryId" className="select select-secondary w-full max-w-xs">
                        <option disabled value="SELECTED">Pick the appropriate category</option>
                        {categories.map(el => {
                            return <option key={el.id} value={el.id}>{el.name}</option>
                        })}
                    </select>

                    <button type="submit" className="btn btn-warning">{!id ?  'Add' : 'Edit'}</button>

                </form>
            }
        </div>
    )
}


export default NewsForm