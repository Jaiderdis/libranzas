
import logo from '../../Img/loader-ex.png'
import { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loading } from '../../Componentes/Loading/Loading';
import { loginUser } from '../../Services/LoginService';
import '../Login/Login.modules.css';
import logoCompleto from '../img/logo-completo.png'

import { BsFillArrowRightCircleFill } from "react-icons/bs";





const Login = () => {

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

      const response = await loginUser({ documento, password })
      if (response?.data?.success) {
        saveUser(response.data.result);
        navigate('/')
      } else {
        if (!response?.data) {
          setErrMsg('Error interno');
        } else if (response?.data?.result?.code === 1) {

          setErrMsg("Usuario Invalido");
        } else if (response?.data?.result?.code === 2) {
          setErrMsg('Contraseña Incorrecta');
        } else {
          setErrMsg('Error Interno')
        }
      }

    } catch (err) {
      setErrMsg('Error interno');
      errRef.current.focus();
    } finally {

    }
  }


  return (
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
            <input id="documento"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setDocumento(e.target.value)}
              value={documento}
              required
              type='number'
              placeholder="Documento"
              className="input mb-4 rounded-lg p-3 mt-5 MobileS:w-36  MobileS:p-2" />
            <label htmlFor="password"></label>
            <input id="password"
              name="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              placeholder="Contraseña"
              className="input mb-4 rounded-lg p-3 mt-5 MobileS:w-36 MobileS:p-2" />
            <button className="bg-secondary-500 hover:bg-secondary-600  hover:-translate-y-1 text-white font-bold py-4 px-4 my-3  rounded-full flex items-center gap-1">

              <span>Ingresar</span>
              <BsFillArrowRightCircleFill />
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

