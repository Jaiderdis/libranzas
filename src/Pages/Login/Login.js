
import logo from '../../Img/loader-ex.png'
import { useRef, useState} from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loading } from '../../Componentes/Loading/Loading';
import { loginUser } from '../../Services/LoginService';





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
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Login

