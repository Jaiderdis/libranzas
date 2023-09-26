import React, { useEffect } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { RevisarLibranzas } from '../../Services/CriteriosService'

export default function ModalConfirmacion ({ libranzas, show, close }) {
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  const AprobarLibranzas = async () => {
    await RevisarLibranzas(libranzas)
  }

  return (

        <div className={`fixed z-50 overflow-y-auto top-0 w-full left-0 ${(!show ? 'hidden' : '')}`} onClick={() => close(false)} >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div onClick={stopPropagation} className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-primary-500 text-white px-4 py-3 flex justify-between">
                        <h2>Aprobancion de Libranzas</h2>
                        <div><span className="cursor-pointer" onClick={() => close(false)}><FaXmark /></span></div>
                    </div>
                    <div className="bg-white px-4 py-8 flex flex-col  gap-4">
                        {/* <label className="font-medium text-gray-800">{datos.Content}</label> */}
                        <div className=" px-3  mb-3 md:mb-0 MobileL:mx-0">
                            <div className="relative ">

                                <label>Hay {libranzas.aprobadas.length === 1 ? `${libranzas.aprobadas.length} libranza aprobada` : `${libranzas.aprobadas.length} libranzas aprobadas`}  </label>
                            </div>

                            <div className="relative ">

                                <label>Hay {libranzas.rechazadas.length === 1 ? `${libranzas.rechazadas.length} libranza rechazada` : `${libranzas.rechazadas.length} libranzas rechazadas`}  </label>
                            </div>

                            <div className="relative">

                                <label>Estas seguro de aprobar y rechazar estas libranzas?</label>
                            </div>

                        </div>

                        {/* <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" /> */}
                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4  bg-secondary-500 hover:bg-secondary-600 text-white rounded mr-2" onClick={AprobarLibranzas}><i className="fas fa-times"></i> Comprar Libranzas</button>
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => close(false)}><i className="fas fa-times"></i> Cerrar</button>

                    </div>
                </div>
            </div>
        </div>

  )
}
