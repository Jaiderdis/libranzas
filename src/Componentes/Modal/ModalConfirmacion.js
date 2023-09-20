import React, { useEffect, useState } from "react";
import { FaXmark } from 'react-icons/fa6';
import { AiFillCaretDown } from "react-icons/ai";
import { descargarArchivo } from "../../Services/ArchivosService";
import { AprobarLibranzas } from "../../Services/CriteriosService";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { listaDocumentos } from "../../utils/Archivos";
import CriteriosContext from "../../Context/CriteriosContext";
import { useContext } from "react";
import { validarCriterios } from "../../utils/Criterio";


export default function ModalConfirmacion({ libranza, closeModal, show }) {
    const { lista } = useContext(CriteriosContext)
   

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [show]);

    // const AprobarLibranzas = () => {
    //     const libranzas=validarCriterios(lista);

    //     const response=AprobarLibranzas(libranzas);      
    //     if(response==null){}





    // }


    return (


        <div className={`fixed z-50 overflow-y-auto top-0 w-full left-0 ${(!show ? 'hidden' : '')}`} onClick={() => closeModal(false)} >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div onClick={stopPropagation} className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-primary-500 text-white px-4 py-3 flex justify-between">
                        <h2>Libranza </h2>
                        <div><span className="cursor-pointer" onClick={() => closeModal(false)}><FaXmark /></span></div>
                    </div>
                    <div className="bg-white px-4 py-8 flex flex-col  gap-4">
                        {/* <label className="font-medium text-gray-800">{datos.Content}</label> */}
                        <div className="mx-16  px-3  mb-3 md:mb-0 MobileL:mx-0">
                            <label className="block  tracking-wide text-gray-700 text-sm dark:text-white font-bold mb-2">
                                Documento
                            </label>
                            <div className="relative">

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <span><AiFillCaretDown /> </span>
                                </div>
                            </div>



                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button  className="focus:outline-none text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-offset-secondary-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Descargar Archivo</button>

                        </div>

                        {/* <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" /> */}
                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => closeModal(false)}><i className="fas fa-times"></i> Cerrar</button>

                    </div>
                </div>
            </div>
        </div>


    );
}