//------Hooks------
import { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

//------Services-------
import { loginUser } from '../../Services/LoginService';

//------Css-------
import '../Login/Login.modules.css';

//------Utils-------
import { CodeErrors } from '../../utils/CodeErrors';

//------Components-------

import { Loading } from '../../Componentes/Loading/Loading'
//------Img-------
import logoCompleto from '../../Img/logo-completo.png'

//------Icons------
import { BsFillArrowRightCircleFill } from "react-icons/bs";




const Login = () => {

  const { saveUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const userRef = useRef();
  const errRef = useRef();
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [documentoError, setDocumentoError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoadingLogin(true)
    setDocumentoError(false);
    setPasswordError(false);

    if (!documento || !password) {
      if (!documento) setDocumentoError(true);
      if (!password) setPasswordError(true);
      setIsLoadingLogin(false);
      return;
    }


    try {

      const response = await loginUser({ documento, password })
      if (response?.data?.success) {
        saveUser(response.data.result);
        navigate('/')
      } else {
        if (!response?.data) {
          setErrMsg('Error interno');
        } else if (response?.data?.result?.code === CodeErrors.UsuarioInvalido) {
          setErrMsg("Usuario Invalido");
        } else if (response?.data?.result?.code === CodeErrors.ContraseñaIncorrecta) {
          setErrMsg('Contraseña Incorrecta');
        } else {
          setErrMsg('Error Interno')
        }
      }

    } catch (err) {
      setErrMsg('Error interno');
      errRef.current.focus();
    } finally {

      setIsLoadingLogin(false)
    }
  }


  return (
    <div className="fondo bg-center bg-no-repeat bg-fixed bg-cover" >

      <section className="min-h-screen flex justify-center items-center Laptop:flex-col">
        <div className="flex flex-col items-center">
          <picture className="flex justify-center">
            <img src={logoCompleto} alt="logo-exponencial" className="w-1/2" />
          </picture>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <p className="text-6xl font-bold text-center text-color-bienvenido my-6  LaptopL:text-6xl  MobileL:text-5xl MobileM:text-4xl MobileS:text-2xl" >¡Bienvenidos!</p>

            </div>
          </div>
        </div>
        <div className=" bg-form-login rounded-xl py-20 mb-5 px-12 MobileS:w-10/12 MobileM:w-9/12 MobileM:py-6">
          <div className="flex flex-col items-center">
            <h2 className="fSizeTitle text-white mb-4 font-medium fnt-monserrat MobileM:text-2xl MobileS:text-lg">Inicia sesión</h2>
            <div className="bg-white h-1 w-1/5 mb-4"></div>
          </div>

          <div ref={errRef} className={`error-msg ${errMsg ? "show" : "hidden"} flex justify-center h-auto w-full p-3 text-center bg-red-500 error font-normal MobileM:text-xs border-red-500 border-2 rounded-lg text-white`}  >
            {!isLoadingLogin ?
              <p>{errMsg}</p> :
              <svg class="w-4 h-4   text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>}
            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
          </div>
          <form action="#" method="POST" onSubmit={handleSubmit} className="flex flex-col items-center">

            <input
              id="documento"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setDocumento(e.target.value)}
              value={documento}
              type="number"
              placeholder="Documento"
              className={`input rounded-lg p-3 mt-5 MobileS:w-36 MobileS:p-2 ${documentoError ? 'border-2 border-red-500 mb-1' : 'mb-4 '}`}
            />
            {documentoError && <span className="text-red-500 font-normal text-xs ml-12 MobileM:ml-0 MobileM:text-center w-full">Documento requerido</span>}

            <input
              id="password"
              name="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              placeholder="Contraseña"
              className={`input rounded-lg p-3 mt-5 MobileS:w-36 MobileS:p-2 ${passwordError ? 'border-2 border-red-500 mb-1' : 'mb-4'}`}
            />
            {passwordError && <span className="text-red-500 font-normal text-xs ml-12 MobileM:ml-0 MobileM:text-center w-full">Contraseña requerida</span>}

            <button className="bg-secondary-500 hover:bg-secondary-600  hover:-translate-y-1 text-white font-bold py-4 px-8 my-3  rounded-full flex items-center gap-2">
              <span>Ingresar</span>
              <span>
                {!isLoadingLogin ?
                  <BsFillArrowRightCircleFill /> :
                  <svg class="w-4 h-4 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>}


              </span>

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

