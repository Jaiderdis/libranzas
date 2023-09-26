import React, { useEffect } from 'react'
import { FaXmark } from 'react-icons/fa6'
const ModalInfo = ({ data, close }) => {
  useEffect(() => {
    if (data.Visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [data])

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  const closeModal = () => {
    close({ ...data, Visible: false })
  }
  return (
        <>

            <div className={`fixed z-50 overflow-y-auto top-0 w-full left-0 ${(!data.Visible ? 'hidden' : '')}`} onClick={closeModal} >
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div onClick={stopPropagation} className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-primary-500 text-white px-4 py-3 flex justify-between">
                            <h2>{data.Title}</h2>
                            <div><span className="cursor-pointer" onClick={closeModal}><FaXmark /></span></div>
                        </div>
                        <div className="bg-white px-4 py-8 flex flex-col  gap-4">
                            {/* <label className="font-medium text-gray-800">{datos.Content}</label> */}
                            <div className=" mb-3 md:mb-0 MobileL:mx-0">
                                <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2">
                                    {data.Mensaje}
                                </label>
                            </div>
                        </div>
                        <div className="bg-gray-200 px-4 py-3 text-right">
                            <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={closeModal}><i className="fas fa-times"></i> Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>

        </>

  )
}

export default ModalInfo
