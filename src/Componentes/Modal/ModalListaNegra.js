import React, { useContext, useEffect, useRef, useState } from "react";
import { FaXmark } from 'react-icons/fa6';
import TableListaNegra from "../Tables/TableListaNegra/TableListaNegra";
import CriteriosContext from "../../Context/CriteriosContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Loading } from "../Loading/Loading";
import { CriteriosRevisados, rechazarCriterio } from "../../Services/CriteriosService";

export default function ModalListaNegra() {

  const { setshowModalBlackList, showModalBlackList, dataBlackList,setLista } = useContext(CriteriosContext)

  const [valuesCheck, setValuesCheck] = useState([]);
  const axiosPrivate=useAxiosPrivate();
  const handleCheckboxChange = (index) => {
    // Actualizar el estado de un checkbox en función de su índice
    // console.log(!valuesCheck[index].Revision)

    setValuesCheck({
      ...valuesCheck,
      [index]: {
        ...valuesCheck[index],
        Revision: !valuesCheck[index].Revision
      }
    });

  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleRechazarCriterio = async () => {
    const nit=dataBlackList.dataEntidad.nit
    const criterio=dataBlackList.criterio
    const listRevision = [];

// Recorremos el objeto original
for (const key in valuesCheck) {
    if (valuesCheck.hasOwnProperty(key)) {
        const item = valuesCheck[key];
        const nuevoItem = {
            "Id": item.Id,
            "Documento": item.Document, // Rellenar con ceros a la izquierda
            "Revision": item.Revision ? 1 : 0
        };
        listRevision.push(nuevoItem);
    }
}

    const response= await rechazarCriterio(axiosPrivate,nit,criterio,listRevision)
    if(response.data==-1){
      const res=await CriteriosRevisados(axiosPrivate)
      setLista(res.data)
      setshowModalBlackList(false)
    }
  }

  useEffect(() => {
    if (dataBlackList?.dataEncontrada !== null) {
      const valores = dataBlackList.dataEncontrada.map(x => ({ Id: x.id, Document: dataBlackList.dataEntidad.nit, Revision: false }));
      setValuesCheck(valores)
    }
  }, [dataBlackList]);

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







  return (
    <>

      <div className={`fixed z-50 overflow-y-auto top-0 w-full h-screen left-0 ${(!showModalBlackList ? 'hidden' : '')}`} onClick={() => setshowModalBlackList(false)} >
        <div className="flex items-center justify-center  pt-4 px-4 pb-20 text-center  sm:p-0">
          <div className=" pointer-events-none fixed inset-0 transition-opacity">
            <div className="absolute inset-0  bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle ">&#8203;</span>
          <div onClick={stopPropagation} className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full" >
            <div className="bg-primary-500 text-white px-4 py-3 flex justify-between ">
              <h2>Libranza - {dataBlackList.libranza} </h2>
              <div><span className="cursor-pointer" onClick={() => setshowModalBlackList(false)}><FaXmark /></span></div>
            </div>
            <div className="bg-white px-4 py-8 flex flex-col  gap-4">
              <div className="px-3  mb-3 md:mb-0 MobileL:mx-0">
                <TableListaNegra data={dataBlackList} handleCheckboxChange={handleCheckboxChange}></TableListaNegra>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
              </div>
            </div>
            <div className="bg-gray-200 grid grid-cols-4 gap-2 p-5 MobileL:grid-cols-2 MobileS:grid-cols-1  text-right">
              <button type="button" className="p-2 bg-sky-500 text-white rounded hover:bg-sky-700 mr-2" onClick={() => setshowModalBlackList(false)}><i className="fas fa-times"></i>Mas Tarde</button>
              <button type="button" disabled={!Object.values(valuesCheck).some(item => item.Revision)} className="p-2 bg-red-500 text-white rounded hover:bg-red-700  disabled:bg-red-800 disabled:hover:bg-none mr-2" onClick={handleRechazarCriterio}><i className="fas fa-times"></i>Rechazar</button>
              <button type="button" disabled={Object.values(valuesCheck).some(item => item.Revision)} className="p-2 bg-green-500 text-white rounded hover:bg-green-700 disabled:bg-green-800 disabled:hover:bg-none mr-2" onClick={() => setshowModalBlackList(false)}><i className="fas fa-times"></i>Aprobar</button>
              <button type="button" className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setshowModalBlackList(false)}><i className="fas fa-times"></i> Cerrar</button>

            </div>
          </div>
        </div>
      </div>

    </>


  );
}