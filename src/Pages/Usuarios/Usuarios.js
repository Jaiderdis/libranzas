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


  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   const getUsers = async () => {
  //     try {
  //       const response = await axiosPrivate.get('/Archivos/prueba', { signal });
  //       setUsers(response.data);
  //     } catch (err) {
  //       // Handle error, e.g., redirect to login
  //       console.log('Error fetching users:'+err);
  //     }
  //   };

  //   getUsers();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);


  const handleSubmit= async ()=>{

    const controller = new AbortController();
    setAbortController(controller);
    try {
      const response = await axiosPrivate.get('/Archivos/prueba', { signal:controller.signal })
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
           
        </article>
      

    </>

  );
};


export default Usuarios