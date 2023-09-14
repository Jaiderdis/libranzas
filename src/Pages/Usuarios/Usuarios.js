// import axios from 'axios';
// import React, { useEffect } from 'react'
// import consumo from '../Service/Axios/Axios';

// const Home = () => {
//     useEffect(()=>{
//         (
//             async ()=>{
//                 const response=await consumo.get('/Archivo/prueba')
//             }
//         )();
//     },[])

//   return (
//     <div>Home</div>
//   )
// }

// export default Home


import React, { useEffect ,useState} from 'react';

import Navbar from '../../Componentes/Navbar/Navbar';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loading } from '../../Componentes/Loading/Loading';


const Usuarios = () => {
  const axiosPrivate = useAxiosPrivate();
  const [users, setUsers] = useState();
  const navigate= useNavigate();
  const location= useLocation();
  const [abortController, setAbortController] = useState(null);


  const handleSubmit= async ()=>{

    const controller = new AbortController();
    setAbortController(controller);
    try {
      const response = await axiosPrivate.get('/Archivos/prueba', { signal:controller.signal })
      setUsers(response.data)
      console.log('Respuesta de la API:', response.data);

    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }finally{
      setAbortController(null);
    }

  }


  return (
    <>
    <button onClick={handleSubmit}>consumir</button>
      <article>
           {users&&users.map(x=>(<h1>{x}</h1>))}
        </article>
      

    </>

  );
};


export default Usuarios