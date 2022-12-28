import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { logout } from "../store/middleware/thunk"
import Toastify from  'toastify-js'

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginStatus, setLoginStatus] = useState(false)

    useEffect( () => {
        if (localStorage.access_token) setLoginStatus(true)
    })

    const handleLogOut = () => {
        dispatch(logout())
        setLoginStatus(false)
        navigate('')
        Toastify({
            text: 'You have logged out',
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }

    return (
        <div className="navbar py-3 px-20 bg-gray-300">

            <div className="navbar-start">
                 <a className="btn btn-ghost normal-case text-xl">The Press</a>
            </div>
            {loginStatus && 
                <div className="navbar-center hover:bg-blue-100 hidden lg:flex">
                    <NavLink to="/register"><button className="btn btn-primary">Register an Admin</button></NavLink>
                </div>
            }
            {loginStatus && 
                <div className="navbar-end">
                    <a onClick={handleLogOut} className="btn">Log Out</a>
                </div>
            }

            
        </div>
    )
}
