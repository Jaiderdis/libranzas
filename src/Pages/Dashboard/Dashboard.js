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


const Dashboard = () => {
  const axiosPrivate = useAxiosPrivate();
  const [users, setUsers] = useState();
  const navigate= useNavigate();
  const location= useLocation();


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
        try {
            const response = await axiosPrivate.get('/Archivos/prueba', {
                signal: controller.signal
            });
            console.log(response.data);
            isMounted && setUsers(response.data);
        } catch (err) {
            console.error(err);
            // navigate('/login', { state: { from: location }, replace: true });
        }
    }

    getUsers();

    return () => {
        isMounted = false;
        controller.abort();
    }
  }, [])

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


export default Dashboard