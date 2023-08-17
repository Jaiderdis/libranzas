

import React, { useState } from 'react'
import profilePic from './Images/user-default.png'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const links = [
    {
        label: 'Inicio',
        route: '/Login'
    },
    {
        label: 'Archivos Cargados',
        route: '/ArchivosCargados'
    },
    {
        label: 'Validar Información',
        route: '/ValidarInformacion'
    },
    {
        label: 'Conciliación',
        route: '/Login'
    },
    {
        label: 'Estadisticas',
        route: '/Login'
    },
    {
        label: 'Informes',
        route: '/Login'
    },
    {
        label: 'Usuarios',
        route: '/Login'
    },
    {
        label: 'Configuración',
        route: '/Login'
    }
]

const Navbar = (nombre) => {
    const {auth} = useAuth();
    const navigate = useNavigate();
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handlerCerrarSesion = () =>{
     localStorage.clear();
        navigate('/login');
    }

    return (

        <div>
            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                            <button onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/" class="flex ml-2 md:mr-24">
                                <img src='https://flowbite.com/docs/images/logo.svg ' class="h-8 mr-3" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ml-3">
                                <div>
                                    <button type="button" class="flex text-sm bg-red-600 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={handlerCerrarSesion}>
                                        salir
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-between">

                    <div>
                        <div className="flex flex-row py-3">
                            <img src={profilePic} class="h-16 w-16 mr-3" />
                            <div>
                                <h1>Hola, <br /> <strong>{auth.documento}</strong></h1>
                            </div>
                        </div>
                        <div className='space-y-2 font-medium'>
                            <div className="p-2">
                                MENÚ
                            </div>
                        </div>
                        <ul class="space-y-2 font-medium">
                            {links.map(({ label, route }) =>
                                <li>
                                    <a href={route} className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"'>
                                        <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                        </svg>

                                        <span class="ml-3">{label}</span>

                                    </a>
                                </li>
                            )}

                        </ul>
                    </div>


                    <div className='space-y-2 font-medium'>
                        <div className="p-2 text-center">
                            © All Copyright 2023 <br />
                            por 101 S.A.S
                        </div>
                    </div>

                </div>

            </aside>
            



        </div>
    )
}

export default Navbar