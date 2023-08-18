import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {

    return (
        <main className="App">
            <Navbar></Navbar>
            <div className="p-4 sm:ml-64">

                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <Outlet />
                </div>
            </div>

        </main>
    )
}

export default Layout

