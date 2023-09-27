import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { Loading } from '../../Componentes/Loading/Loading'
import { CargarExcel, CargarPDFs } from '../../Services/ArchivosService'

const CargarArchivos = () => {
  const [selectedFileExcel, setSelectedFileExcel] = useState(null)
  const [loadingSaveFile, setLoadingSaveFile] = useState(false)

  const [selectedFileDocument, setSelectedFileDocument] = useState(null)
  const [draggedExcelOver, setDraggedExcelOver] = useState(false)
  const [draggedDocumentOver, setDraggedDocumentOver] = useState(false)
  useAxiosPrivate()

  // Adjuntar Excel

  const handleExcelChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        setSelectedFileExcel(file)
      } else {
        toast('Por favor, selecciona un archivo .xlsx válido.')
      }
    }
  }
  const handleDragOverExcel = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDraggedExcelOver(true)
  }
  const handleDragLeaveExcel = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDraggedExcelOver(false)
  }
  const handleDropExcel = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles[0].name.endsWith('.xlsx')) {
      setSelectedFileExcel(droppedFiles[0])
      setDraggedExcelOver(false)
    } else {
      toast('Por favor, selecciona un archivo .xlsx válido.')
    }
  }
  // Adjuntar Excel

  // Adjuntar Documentos
  const handleDocumentChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (file.type === 'application/x-rar-compressed' || file.name.endsWith('.rar')) {
        setSelectedFileDocument(file)
      } else {
        toast('Por favor, selecciona un archivo .rar o .zip válido.')
      }
    }
  }
  const handleDragOverDocument = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDraggedDocumentOver(true)
  }
  const handleDragLeaveDocument = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDraggedDocumentOver(false)
  }
  const handleDropDocument = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles[0].name.endsWith('.rar') || droppedFiles[0].name.endsWith('.zip')) {
      setSelectedFileDocument(droppedFiles[0])
      setDraggedDocumentOver(false)
    } else {
      toast('Por favor, selecciona un archivo .rar o .zip válido.')
    }
  }
  // Adjuntar Documentos

  // Subir Archivo Excel
  const handleSubmitExcel = async () => {
    if (!selectedFileExcel) {
      return toast('Por favor, selecciona un archivo antes de subirlo.')
    }

    try {
      setLoadingSaveFile(true)

      const formData = new FormData()
      formData.append('Archivo', selectedFileExcel)

      const response = await CargarExcel(formData)

      if (response.success) {
        toast.success(response.message)
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      toast.error('Error al cargar archivo excel')
    } finally {
      setLoadingSaveFile(false)
    }
  }

  // Subir PDFs
  const handleSubmitDocument = async () => {
    if (!selectedFileDocument) {
      return toast('Por favor, selecciona un archivo antes de subirlo.')
    }
    try {
      setLoadingSaveFile(true)
      const formData = new FormData()
      formData.append('Archivo', selectedFileDocument)

      const response = await CargarPDFs(formData)

      if (response.success) {
        toast.success(response.message)
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      toast.error('Error al cargar los pdfs')
    } finally {
      setLoadingSaveFile(false)
    }
  }

  return (
    <>
      {loadingSaveFile && <Loading />}

      <div className="flex items-center justify-center pl-2 h-12 mb-2 rounded text-white bg-primary-500 dark:bg-gray-800">
        <h1> <strong>SUBIR EXCEL</strong></h1>
      </div>

      <div className="p-4 border-2 mb-2 border-gray-200 rounded-lg dark:border-gray-700">
        <div
          className={`flex items-center justify-center w-full ${draggedExcelOver ? 'border-blue-500 border-dashed' : ''
            }`}
          onDragOver={handleDragOverExcel}
          onDragLeave={handleDragLeaveExcel}
          onDrop={handleDropExcel}
        >
          <label
            htmlFor="excel-dropzone"
            className="flex flex-col items-center justify-center w-1/2 MobileL:w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            {selectedFileExcel
              ? (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">Archivo Adjuntado:</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{selectedFileExcel.name}</p>
              </div>
                )
              : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-20 h-20 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex gap-1 Laptop:flex-col ">
                  <span className="font-semibold">Click to upload </span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">XLSX</p>
              </div>
                )}
            <input
              id="excel-dropzone"
              type="file"
              className="hidden"
              accept=".xlsx"
              onChange={handleExcelChange}
            />
          </label>
        </div>

        <div className="flex flex-wrap m-8 justify-center gap-6">
          <button
            type="button"
            onClick={handleSubmitExcel}
            className="focus:outline-none text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-primary-500 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Subir Excel
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center pl-2 h-12 mb-2 rounded text-white bg-primary-500 dark:bg-gray-800">
          <h1> <strong>SUBIR DOCUMENTOS</strong></h1>
        </div>

        <div className="p-4 border-2 mb-2 border-gray-200 rounded-lg dark:border-gray-700">
          <div
            className={`flex items-center justify-center w-full ${draggedDocumentOver ? 'border-blue-500 border-dashed' : ''
              }`}
            onDragOver={handleDragOverDocument}
            onDragLeave={handleDragLeaveDocument}
            onDrop={handleDropDocument}
          >
            <label
              htmlFor="document-dropzone"
              className="flex flex-col items-center justify-center w-1/2 MobileL:w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              {selectedFileDocument
                ? (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">Archivo Adjuntado:</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{selectedFileDocument.name}</p>
                </div>
                  )
                : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-20 h-20 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex gap-1 Laptop:flex-col ">
                    <span className="font-semibold">Click to upload </span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">RAR o ZIP</p>
                </div>
                  )}
              <input
                id="document-dropzone"
                type="file"
                accept=".rar,.zip"
                className="hidden"
                onChange={handleDocumentChange}
              />
            </label>
          </div>

          <div className="flex flex-wrap m-8 justify-center gap-6">
            <button
              type="button"
              onClick={handleSubmitDocument}
              className="focus:outline-none text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-primary-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">
              Subir Archivos
            </button>
          </div>
        </div>
      </div>

      <Toaster position='bottom-right'/>
    </>
  )
}

export default CargarArchivos
