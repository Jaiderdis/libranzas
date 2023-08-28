

import React, { useEffect, useState } from 'react'
import profilePic from '../Images/user-default.png'
import loader from '../Images/loader-ex.png'
import useAuth from '../../hooks/useAuth';
import '../Navbar/Navbar.modules.css'
import { HiHome,HiOutlineUpload } from 'react-icons/hi';
import { SiCodereview } from 'react-icons/si';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import { BiSolidReport } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const links = [
    {
        label: 'Inicio',
        route: '/',
        icon: <HiHome size={20} />,
        roles: ['1','2','3']
    },
    {
        label: 'Cargar Archivos',
        route: '/CargarArchivos',
        icon: <HiOutlineUpload size={20} />,
        roles: ['1','3']
    },
    {
        label: 'Revisar Criterios',
        route: '/ValidarInformacion',
        icon: <SiCodereview size={20} />,
        roles: ['1','2']
    },
    {
        label: 'Conciliación',
        route: '/Login',
        icon: <FaHandshakeSimple size={20} />,
        roles: ['1','2']
    },
    {
        label: 'Estadisticas',
        route: '/Login',
        icon: <IoStatsChart size={20} />,
        roles: ['1','2']
    },
    {
        label: 'Informes',
        route: '/Login',
        icon: <BiSolidReport size={20} />,
        roles: ['1','2']
    },
    {
        label: 'Usuarios',
        route: '/Login',
        icon: <FaUsers size={20} />,
        roles: ['1']
    },
    {
        label: 'Configuración',
        route: '/Login',
        icon: <AiFillSetting size={20} />,
        roles: ['1','2']
    }
]



const Navbar = () => {
    const { auth,outLogin,user,rol} = useAuth();
    const navigate = useNavigate();
    const [showdropuser, setshowdropuser] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false);



    const filteredLinks = links.filter(({ roles }) => roles.includes(rol));

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const togglePerfil = () => {
        setshowdropuser(!showdropuser)
    }

    const handlerCerrarSesion = () => {
        outLogin()
        navigate('/login')
    }

    const dark = () => {
        outLogin()
        navigate('/login')
    }



    return (

        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" onClick={toggleSidebar} data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/" className="flex ml-2 md:mr-24">
                                <img src={loader} className="h-8 mr-3" alt="Exponencial Logo" />
                                {/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Exponencial</span> */}
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>
                                    <button type="button" className={"flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"} onClick={togglePerfil} aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src={profilePic} alt="user photo" />
                                    </button>
                                </div>
                                <div className={`${(!showdropuser ? 'hidden' : 'show')} shadow-2xl border px-6 50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">

                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handlerCerrarSesion} role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0  bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <div className="flex flex-row py-3">
                        <img src={profilePic} className="h-16 w-16 mr-3" />
                        <div>
                            <h1 className='text-gray-900'>Hola, <br /> <strong>{user}</strong></h1>
                        </div>
                    </div>
                    <div className='space-y-2 font-medium'>
                        <div className="p-2">
                            MENÚ
                        </div>
                    </div>
                    <ul className="space-y-2 font-medium">
                        {filteredLinks.map(({ label, route,icon}) =>
                            <li key={label}>
                                <a href={route} className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition  ease-in-out delay-50 hover:bg-gray-100 hover:-translate-y-1 dark:hover:bg-gray-700 group"'>
                                    {icon}
                                    <span className="ml-3">{label}</span>
                                    

                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </aside>


        </>

    )
}

export default Navbar