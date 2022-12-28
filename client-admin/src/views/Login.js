import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {changeLoadingToFalse, changeLoadingToTrue, login} from '../store/middleware/thunk'
import ClockLoader from "react-spinners/ClockLoader";
import { setLoadingFalse, setLoadingTrue } from '../store/actions/actionCreator';
import Toastify from 'toastify-js'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [inputObject, setInputObject] = useState({
        email: '',
        password: '',
    })

    const {loading} = useSelector( (state) => state.loadingReducer)
    
    const handleChange = (e) => {
        const {name, value} = e.target

        setInputObject( (prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(changeLoadingToTrue())

        const url = 'http://localhost:3000/users/login'
        const method = 'POST'

        dispatch(login(inputObject))
        .then((resp) => {
            if(!resp.ok) throw new Error (resp.message || resp.statusText)
            return resp.json()
        })
        .then((data) => {
            Toastify({
                text: 'You have logged in',
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
            localStorage.setItem('access_token', data.access_token)
            setInputObject({
                email: '',
                password: ''
            })
            navigate('/news')
        })
        .catch((error) => {
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

    return (

        <div className="flex justify-center pt-10">

            {loading
                ?
                <ClockLoader
                    color="#F37A24"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :
                <form onSubmit={handleSubmit} className='border-2 shadow flex flex-col p-2 gap-2'>
                    
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <span>Email</span>
                        <input onChange={handleChange} name="email" type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Your Password</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <span>Password</span>
                        <input onChange={handleChange} name="password" type="password" placeholder="password" className="input input-bordered" />
                        </label>
                    </div>

                    <button className="btn btn-outline btn-warning mt-10" type="submit">Log In</button>

                </form>
            }
   
        </div>
    )
}

export default Login

