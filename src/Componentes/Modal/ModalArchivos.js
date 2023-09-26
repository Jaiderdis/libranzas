import React, { useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { AiFillCaretDown } from 'react-icons/ai'
import { DescargarArchivo } from '../../Services/ArchivosService'
import { listaDocumentos } from '../../utils/Archivos'
import ModalInfo from './ModalInfo'

export default function ModalArchivos ({ libranza, close, show }) {
  const [selectedArchivo, setSelectedArchivo] = useState({ tipo: '', label: '' })
  const [showModalInfo, setShowModalInfo] = useState({ Title: 'Descargar Archivo', Mensaje: '', Visible: false })

  const handleSelectedArchivo = (event) => {
    setSelectedArchivo(
      {
        ...selectedArchivo,
        tipo: event.target.value,
        label: event.target.options[event.target.selectedIndex].text
      }
    )
  }
  const handleDescargarArchivo = async () => {
    try {
      const tipoFile = selectedArchivo.tipo

      const response = await DescargarArchivo(libranza, tipoFile)

      if (!response.success) {
        return setShowModalInfo({
          ...showModalInfo,
          Mensaje: response.message,
          Visible: true
        })
      }
      const downloadLink = document.createElement('a')
      const fileName = `${libranza}_${response.result.cedula}_${selectedArchivo.label}.pdf`
      downloadLink.href = 'data: application / pdf; base64,' + response.result.archivo
      downloadLink.target = '_blank'
      downloadLink.download = fileName
      downloadLink.click()
    } catch (error) {
      return setShowModalInfo({
        ...showModalInfo,
        Mensaje: 'Error Interno',
        Visible: true
      })
    }
  }

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

  return (

<>
    <div className={`fixed z-50 overflow-y-auto top-0 w-full left-0 ${(!show ? 'hidden' : '')}`} onClick={() => close(false)} >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div onClick={stopPropagation} className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div className="bg-primary-500 text-white px-4 py-3 flex justify-between">
            <h2>Libranza - {libranza}</h2>
            <div><span className="cursor-pointer" onClick={() => close(false)}><FaXmark /></span></div>
          </div>
          <div className="bg-white px-4 py-8 flex flex-col  gap-4">
            {/* <label className="font-medium text-gray-800">{datos.Content}</label> */}
            <div className="mx-16  px-3  mb-3 md:mb-0 MobileL:mx-0">
              <label className="block  tracking-wide text-gray-700 text-sm dark:text-white font-bold mb-2">
                Documento
              </label>
              <div className="relative">
                <select defaultValue={'DEFAULT'} id='prueba' onChange={handleSelectedArchivo} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-700" >
                  <option value="DEFAULT" disabled >Seleccionar un documento</option>
                  {listaDocumentos.map(({ label, value }) =>
                    <option key={value} value={value}>{label}</option>

                  )}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <span><AiFillCaretDown /> </span>
                </div>
              </div>

            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={handleDescargarArchivo} className="focus:outline-none text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-offset-secondary-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Descargar Archivo</button>

            </div>

            {/* <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" /> */}
          </div>
          <div className="bg-gray-200 px-4 py-3 text-right">
            <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => close(false)}><i className="fas fa-times"></i> Cerrar</button>

          </div>
        </div>
      </div>
    </div>

    {showModalInfo.Visible && <ModalInfo data={showModalInfo} close={setShowModalInfo} />}
    </>

  )
}
