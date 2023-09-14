import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import logo from "../../Img/logo-101 Blanco y negro.png"

const Layout = () => {
    
    return (
        <main className="App dark:bg-black  min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="p-4 pt-7 2xl:px-36 3xl:px-96 sm:ml-64 ">

                <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-0 mt-14">
                    <Outlet />
                </div>
                
            </div>
            <footer  className="p-3 2xl:px-36 3xl:px-96 sm:ml-64 h-auto bg-primary-500 dark:bg-darkPrimary-500 border-l border-black flex Laptop:text-sm MobileL:flex-col gap-3 justify-center text-white items-center">
                <span>Asesorado, diseñado, desarrollado y potenciado por </span>
                <a href="https://www.1cero1.com/">
                    <img className="w-40 h-10 " src={logo} />
                </a>
                
            </footer>

        </main>
    )
}

export default Layout

