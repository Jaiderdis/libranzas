
import logo from '../../Img/loader-ex.png'
import { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loading } from '../../Componentes/Loading/Loading';
import { loginUser } from '../../Services/LoginService';
import '../Login/Login.modules.css';
import logoCompleto from '../img/logo-completo.png'

import {BsFillArrowRightCircleFill} from  "react-icons/bs";





const Login = () => {
  const { IsLoading, setIsLoading } = useAuth();
  const { saveUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const response = await loginUser({ documento, password })
      if (response?.data?.success) {
        saveUser(response.data.result);
        navigate('/')
      } else {
        throw new Error('Login Failed');
      }

    } catch (err) {

      if (!err?.response) {
        setErrMsg('Error interno');
      } else if (err.response?.status === 400) {
        console.log(err.response.data)
        setErrMsg(err.response.data.message);
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    } finally {
      setIsLoading(false)
    }
  }


  return (

    IsLoading ? <Loading /> :
      // <section>
      //   <p ref={errRef} classNameNameName={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      //   <div classNameNameName="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      //     <div classNameNameName="sm:mx-auto sm:w-full sm:max-w-sm">
      //       <img
      //         classNameNameName="mx-auto h-10 w-auto"
      //         alt="Your Company"
      //         src={logo}
      //       />
      //       <h2 classNameNameName="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      //         Iniciar Sesion
      //       </h2>
      //     </div>

      //     <div classNameNameName="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      //       <form classNameNameName="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
      //         <div>
      //           <label htmlFor="documento" classNameNameName="text-sm font-medium leading-6 justify-start flex text-gray-900">
      //             Numero de Documento
      //           </label>
      //           <div classNameNameName="mt-2">
      //             <input
      //               type="text"
      //               id="documento"
      //               ref={userRef}
      //               autoComplete="off"
      //               onChange={(e) => setDocumento(e.target.value)}
      //               value={documento}
      //               required
      //               classNameNameName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
      //             />
      //           </div>
      //         </div>

      //         <div>
      //           <div classNameNameName="flex items-center ">
      //             <label htmlFor="password" classNameNameName="block text-sm font-medium leading-6 text-gray-900">
      //               Contraseña
      //             </label>
      //           </div>
      //           <div classNameNameName="mt-2">
      //             <input
      //               id="password"
      //               name="password"
      //               type="password"
      //               onChange={(event) => setPassword(event.target.value)}
      //               autoComplete="current-password"
      //               required
      //               value={password}
      //               classNameNameName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
      //             />
      //           </div>
      //         </div>

      //         <div>
      //           <button
      //             type="submit"

      //             classNameNameName="flex w-full justify-center rounded-md bg-cyan-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      //           >
      //             Iniciar Sesion
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </section>
      <div className="fondo bg-center bg-no-repeat bg-fixed bg-cover" >
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <section className="min-h-screen flex justify-center items-center Laptop:flex-col">
        <div className="flex flex-col items-center">
          <picture className="flex justify-center">
            <img src={logoCompleto} alt="logo-euro" className="w-1/2" />
          </picture>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <p className="text-6xl font-bold text-center text-color-bienvenido my-6  LaptopL:text-6xl  MobileL:text-5xl MobileM:text-4xl MobileS:text-2xl" >¡Bienvenidos!</p>
             
            </div>
          </div>
        </div>
        <div className=" bg-form-login rounded-xl py-20 px-12 MobileS:w-10/12 MobileM:w-9/12 MobileM:py-6">
          <div className="flex flex-col items-center">
            <h2 className="fSizeTitle text-white mb-4 font-medium fnt-monserrat MobileM:text-2xl MobileS:text-lg">Inicia sesión</h2>
            <div className="bg-white h-1 w-1/5 mb-4"></div>
          </div>
          <form action="#" method="POST" onSubmit={handleSubmit} className="flex flex-col items-center">
            <label htmlFor="mail"></label>
            <input  id="documento"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setDocumento(e.target.value)}
                    value={documento}
                    required  
                    type='number'
                    placeholder="Documento" 
                    className="input mb-4 rounded-lg p-3 mt-5 MobileS:w-36  MobileS:p-2" />
            <label htmlFor="password"></label>
            <input  id="password"
                    name="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                    placeholder="Contraseña"
                    className="input mb-4 rounded-lg p-3 mt-5 MobileS:w-36 MobileS:p-2" />
            <button class="bg-secondary-500 hover:bg-secondary-600  hover:-translate-y-1 text-white font-bold py-4 px-4 my-3  rounded-full flex items-center gap-1">

              <span>Ingresar</span>
              <BsFillArrowRightCircleFill/>
          </button>
            <div className="flex justify-center">
              <a className="text-white text-sm mt-4 hover:text-gray-300" href="">¿Olvidó su contraseña?</a>
            </div>
          </form>
        </div>
      </section>
    </div>

  )
}

export default Login

