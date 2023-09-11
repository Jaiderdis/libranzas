import React, { useContext, useEffect, useRef, useState } from "react";
import { FaXmark } from 'react-icons/fa6';
import TableListaNegra from "../Tables/TableListaNegra/TableListaNegra";
import CriteriosContext from "../../Context/CriteriosContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function ModalListaNegra() {

  const { setshowModalBlackList,showModalBlackList, dataModalBlackList } = useContext(CriteriosContext)
const [dataBlackList,setDataBlackList]=useState({
  dataEncontrada:[],
  dataEntidad:
    {
      nombre: null,
      pais: null,
      direccion: null,
      nit: null,
      estado: null,
      revision: null
  }
})
  const axiosPrivate = useAxiosPrivate();
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

    useEffect(() => {
    if (showModalBlackList) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModalBlackList]);


    useEffect(() => {

    if(dataModalBlackList.libranza===''){
      alert('Error interno')
    }
    const controller = new AbortController();
    const signal = controller.signal;

    const getInfoCriterio = async () => {
      try {
        const response = await axiosPrivate.get(`/Archivos/ObtenerInfoCriterio?libranza=${dataModalBlackList.libranza}&criterio=${dataModalBlackList.criterio}`, { signal });
        const dataEncontrada=response.data.item1;
        const dataEntidad=response.data.item2;
        setDataBlackList({...dataBlackList,dataEncontrada:dataEncontrada,dataEntidad:dataEntidad})
      } catch (err) {
        // Handle error, e.g., redirect to login
        console.log('Error fetching info:'+err);
      }
    };

    getInfoCriterio();

    return () => {
      controller.abort();
    };
  }, []);



  

  return (
    <div  className={`fixed z-50 overflow-y-auto top-0 w-full h-screen left-0 ${(!showModalBlackList ? 'hidden' : '')}`}  onClick={() => setshowModalBlackList(false)} >
      <div  className="flex items-center justify-center  pt-4 px-4 pb-20 text-center  sm:p-0">
        <div className=" pointer-events-none fixed inset-0 transition-opacity">
          <div className="absolute inset-0  bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle ">&#8203;</span>
        <div  onClick={stopPropagation}   className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full" >
          <div className="bg-primary-500 text-white px-4 py-3 flex justify-between ">
            <h2>Libranza - {dataModalBlackList.libranza} </h2>
            <div><span className="cursor-pointer" onClick={() => setshowModalBlackList(false)}><FaXmark/></span></div>
          </div>
          <div className="bg-white px-4 py-8 flex flex-col  gap-4">
            {/* <label className="font-medium text-gray-800">{datos.Content}</label> */}
            <div className="px-3  mb-3 md:mb-0 MobileL:mx-0">
              <TableListaNegra data={dataBlackList}></TableListaNegra>



            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {/* <button onClick={handleDescargarArchivo} className="focus:outline-none text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-offset-secondary-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Descargar Archivo</button> */}

            </div>

            {/* <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" /> */}
          </div>
          <div className="bg-gray-200 grid grid-cols-4 gap-2 p-5 MobileL:grid-cols-2 MobileS:grid-cols-1  text-right">
            <button type="button" className="p-2 bg-sky-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setshowModalBlackList(false)}><i className="fas fa-times"></i>Mas Tarde</button>
            <button type="button" className="p-2 bg-red-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setshowModalBlackList(false)}><i className="fas fa-times"></i>Rechazar</button>
            <button type="button" className="p-2 bg-green-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setshowModalBlackList(false)}><i className="fas fa-times"></i>Aprobar</button>
            <button type="button" className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setshowModalBlackList(false)}><i className="fas fa-times"></i> Cerrar</button>

          </div>
        </div>
      </div>
    </div>


  );
}