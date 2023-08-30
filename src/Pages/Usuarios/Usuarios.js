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


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/Archivos/prueba', { signal });
        setUsers(response.data);
      } catch (err) {
        // Handle error, e.g., redirect to login
        console.log('Error fetching users:'+err);
      }
    };

    getUsers();

    return () => {
      controller.abort();
    };
  }, []);

  //  const user = useSelector((state) => state.user);

  // if (!user) {
  //   return null; // Manejo alternativo si el usuario no está autenticado
  // }

  // const isAdmin = user.roles.includes('admin');
  // const isUser = user.roles.includes('user');

  return (
    <>
      <article>
            <h2>Users List</h2>
            {users? users.map((persona, index) => (
        <h1 key={index}>{persona}</h1>
      )):<Loading></Loading>}
        </article>
      

    </>

  );
};


export default Usuarios