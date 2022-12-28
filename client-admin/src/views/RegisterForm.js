import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../store/middleware/thunk'
import Toastify from 'toastify-js'

const NewsForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [inputObject, setInputObject] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setInputObject( (prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(register(inputObject))
        .then((resp) => {
            if(!resp.ok) throw new Error (resp.message || resp.statusText)
            return resp.json()
        })
        .then((data) => {
            Toastify({
                text: data.message,
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
            navigate('/news')

            setInputObject({
                username: '',
                email: '',
                password: '',
                phoneNumber: '',
                address: ''
            })
        })
        .catch(error => {
            Toastify({
                text: error,
                className: error,
                style: {
                  background: "linear-gradient(to right, #9b3232, #d16358)",
                }
            }).showToast();;
        });
    }

    return(
        <div className=" flex flex-col items-center pt-5">           
            <form onSubmit={handleSubmit} className="drop-shadow-lg flex flex-col gap-5 p-2 border-2 border-double border-amber-500">
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Username</span>
                        <input onChange={handleChange} name="username" type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Email</span>
                        <input onChange={handleChange} name="email" type="email" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Password</span>
                        <input onChange={handleChange} name="password" type="password" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Phone Number</span>
                        <input onChange={handleChange} name="phoneNumber" type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Address</span>
                        <input onChange={handleChange} name="address" type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                    </label>
                </div>

                <button type="submit" className="btn btn-warning">Register</button>

            </form>
        </div>
    )
}


export default NewsForm