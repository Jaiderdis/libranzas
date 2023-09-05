import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const Layout = () => {
    
    return (
        <main className="App dark:bg-black  min-h-screen ">
            <Navbar />
            <div className="p-4 sm:ml-64">

                <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-0 mt-14">
                    <Outlet />
                </div>
            </div>

        </main>
    )
}

export default Layout

