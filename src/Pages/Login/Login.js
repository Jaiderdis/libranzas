
import logo from '../../Img/loader-ex.png'
import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../Api/Axios';
import { Loading } from '../../Componentes/Loading/Loading';

const LOGIN_URL = '/Auth/Login';



const Login = () => {
  const { auth,setAuth,guardarUsuario} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [cargandoUsuario, setCargandoUsuario] = useState(true);

  useEffect(() => {
     userRef.current.focus();
  }, [])

  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate(from, { replace: true })
    }
 }, [])


  useEffect(() => {
    setErrMsg('');
  }, [documento, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ documento, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if(response?.data?.infoToken?.resultado){
        guardarUsuario(response.data);
        navigate(from, { replace: true });

      }else{
        throw true
      }
      
    } catch (err) {

      if (!err?.response) {
        console.log(err)
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  // const togglePersist = () => {
  //   setPersist(prev => !prev);
  // }

  // useEffect(() => {
  //     localStorage.setItem("persist", persist);
  // }, [persist])




  return (




    <section>
     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            alt="Your Company"
            src={logo}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar Sesion
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="documento" className="text-sm font-medium leading-6 justify-start flex text-gray-900">
                Numero de Documento
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="documento"
                
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setDocumento(e.target.value)}
                  value={documento}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center ">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                  value={password}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"

                className="flex w-full justify-center rounded-md bg-cyan-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sesion
              </button>

              {/* <div className="persistCheck">
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={togglePersist}
                        checked={persist}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login

