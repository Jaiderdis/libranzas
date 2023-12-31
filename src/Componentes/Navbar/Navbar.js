import React, { useEffect, useRef, useState } from 'react'
// ----Images----
import profilePic from '../../Img/user-default.png'
import logo from '../../Img/Logo_Exponencial_GI-sinfondo color.png'
// ----Images----
// ----Hooks----
import useAuth from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'
// ----Hooks----
// ----styles----
import '../Navbar/Navbar.modules.css'
// ----styles----
// ----Icons----
import { MdLightMode } from 'react-icons/md'
// ----Icons----
// ----Utils----
import { links } from '../../utils/Links'
// ----Utils----

const Navbar = () => {
  const { outLogin, user, rol, toggleModeDark } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const SideBarRef = useRef()
  const btnSideBarRef = useRef()
  const PerfilRef = useRef()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isPerfilOpen, setIsPerfilOpen] = useState(false)
  const filteredLinks = links.filter(({ roles }) => roles.includes(rol))
  useEffect(() => {
    const handler = (e) => {
      if (!e.composedPath().includes(PerfilRef.current)) {
        setIsPerfilOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
  }, [isPerfilOpen])

  useEffect(() => {
    const handler = (e) => {
      if (!e.composedPath().includes(SideBarRef.current) && !e.composedPath().includes(btnSideBarRef.current)) {
        setSidebarOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
  }, [sidebarOpen])

  const handlerCerrarSesion = () => {
    outLogin()
    navigate('/login')
  }

  return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-darkPrimary-500 dark:border-gray-700">
                <div className="px-3 py-3  lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button ref={btnSideBarRef} id='btnsidebar' onClick={() => setSidebarOpen(!sidebarOpen)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/" className="flex ml-2 md:mr-24">
                                <img src={logo} className="h-12 w-40 mr-3" alt="Exponencial Logo" />
                                {/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Exponencial</span> */}
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div ref={PerfilRef} className="flex items-center ml-3 gap-3">
                                <div>
                                    <button type="button" className={'flex text-sm bg-gray-800 rounded-full '} onClick={toggleModeDark} aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <MdLightMode size={20} className='dark:text-white  dark:bg-gray-800 text-black bg-white' />
                                    </button>
                                </div>

                                <div>
                                    <button type="button" className={'flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'} onClick={() => { setIsPerfilOpen(!isPerfilOpen) }} aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src={profilePic} alt="user photo" />
                                    </button>
                                </div>

                                <div className={`${!isPerfilOpen ? 'perfilhidden' : 'perfilshow'}  border px-6 py-4  text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-darkPrimary-500 dark:border-gray-700 dark:divide-gray-600`} id="dropdown-user">
                                    <span className='flex justify-center p-3' > <img className="w-8 h-8 rounded-full " src={profilePic} alt="user photo" /></span>
                                    <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"><strong> {user}</strong></span>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Configuración</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handlerCerrarSesion} role="menuitem">Cerrar sesión</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside ref={SideBarRef} id="logo-sidebar" className={`flex flex-col fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0  bg-white border-r border-gray-200 dark:bg-darkPrimary-500 dark:border-0`} aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-darkPrimary-500">
                    <div className="flex flex-row py-2">
                        <img src={profilePic} className="h-12 w-12 mr-3" />
                        <div>
                            <h1 className='text-gray-900 dark:text-white'>Hola, <br /> <strong>{user}</strong></h1>
                        </div>
                    </div>
                    <div className='space-y-2 font-medium'>
                        <div className="p-2 dark:text-white">
                            MENÚ
                        </div>
                    </div>
                    <ul className="space-y-2 font-medium">
                        {filteredLinks.map(({ label, route, icon }) =>
                            <li key={label}>
                                <a href={route} className={`${(route === location.pathname ? 'bg-primary-500 dark:bg-gray-500 dark:hover:bg-gray-700 text-white hover:bg-secondary-600' : 'hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700')} flex items-center p-2 text-gray-900 rounded-lg  transition  ease-in-out delay-50  hover:-translate-y-1  dark:hover:text-white group`}>
                                    {icon}
                                    <span className="ml-3">{label}</span>

                                </a>
                            </li>
                        )}
                    </ul>

                </div>
                <hr />
                <footer>
                    <div className=" text-center py-2 text-black dark:text-white">

                        <p>
                            © All Copyright 2023
                            <br />
                            por <strong><a href="https://www.1cero1.com/" target="_blank" rel="noreferrer">101 S.A.S</a></strong>
                        </p>

                    </div>
                </footer>
            </aside>

        </>

  )
}

export default Navbar
