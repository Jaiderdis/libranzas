import { axiosPrivate } from '../Api/Axios'

const URl_Archivo = {
  buscarPdf: 'Archivos/DescargarPDF',
  CargarExcel: 'Archivos/CargarExcel',
  CargarPDFs: 'Archivos/CargarPDFs'
}

export const CargarExcel = async (formData) => {
  return await axiosPrivate.post(URl_Archivo.CargarExcel, formData, { 'Content-Type': 'multipart/form-data' }).then(res => res.data)
}

export const CargarPDFs = async (formData) => {
  return await axiosPrivate.post(URl_Archivo.CargarPDFs, formData, { 'Content-Type': 'multipart/form-data' }).then(res => res.data)
}

export const DescargarArchivo = async (tipoFile, libranza) => {
  return await axiosPrivate.get(`${URl_Archivo.buscarPdf}?libranza=${tipoFile}&ID=${libranza}`).then(res => res.data)
}
