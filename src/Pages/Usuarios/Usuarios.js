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

import React, { useState } from 'react'

import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const Usuarios = () => {
  const axiosPrivate = useAxiosPrivate()
  const [users, setUsers] = useState()

  const handleSubmit = async () => {
    const controller = new AbortController()
    try {
      const response = await axiosPrivate.get('/Archivos/prueba', { signal: controller.signal })
      setUsers(response.data)
      console.log('Respuesta de la API:', response.data)
    } catch (error) {
      console.error('Error al subir el archivo:', error)
    }
  }

  return (
    <>
    <button onClick={handleSubmit}>consumir</button>
      <article>
           {users && users.map((x, index) => (<h1 key={index}>{x}</h1>))}
        </article>

    </>

  )
}

export default Usuarios
