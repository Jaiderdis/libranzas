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


import React, { useEffect } from 'react';

import Navbar from '../Componentes/Navbar';

const Dashboard = () => {
  useEffect(() => {
    
  }, [])

  //  const user = useSelector((state) => state.user);

  // if (!user) {
  //   return null; // Manejo alternativo si el usuario no está autenticado
  // }

  // const isAdmin = user.roles.includes('admin');
  // const isUser = user.roles.includes('user');

  return (
    <>
      <Navbar></Navbar>

      <h1>Hola</h1>

    </>

  );
};


export default Dashboard