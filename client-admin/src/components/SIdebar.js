import { Link, NavLink } from "react-router-dom"

export default function Sidebar() {

    return (
        
            <ul className="menu bg- h-36 bg-base-100 w-56 rounded-box">
                <li className="hover-bordered"><NavLink to="/news" >News</NavLink></li>
                <li className="hover-bordered"><NavLink to="/categories" >Categories</NavLink></li>
                <li className="hover-bordered"><NavLink to="/tags" >Tags</NavLink></li>
            </ul>

    )


}