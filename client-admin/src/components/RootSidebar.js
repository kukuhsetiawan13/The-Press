import { Outlet } from "react-router-dom";
import Sidebar from "./SIdebar";

const RootSidebar = () => {
    return (
        <div className="flex">
            <div className="h-auto py-6 w-2/12 min-h-screen flex justify-center bg-blue-500">
                <Sidebar />
            </div>
            <div className="w-10/12">
                <Outlet />
            </div>
        </div>
    )

} 

export default RootSidebar