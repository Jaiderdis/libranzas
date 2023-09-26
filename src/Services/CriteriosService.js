import { axiosPrivate } from '../Api/Axios'

const URl_Criterios = {
  RevisarCriteriosAceptacion: '/Criterios/RevisarCriteriosAceptacion',
  CriteriosRevisados: '/Criterios/ObtenerLibranzasRevisadas',
  RevisarLibranzas: '/Criterios/RevisarLibranzas',
  InfoCriterio: '/Criterios/ObtenerInfoCriterio',
  RechazarCriterio: '/Criterios/RevisarListaNegra'
}

export const RevisarCriterios = async (valores) => {
  return await axiosPrivate.post(URl_Criterios.RevisarCriteriosAceptacion, valores).then(res => res.data)
}

export const CriteriosRevisados = async () => {
  return await axiosPrivate.get(URl_Criterios.CriteriosRevisados).then(res => res.data)
}

export const RevisarLibranzas = async (libranzas) => {
  return await axiosPrivate.post(URl_Criterios.RevisarLibranzas, libranzas).then(res => res.data)
}

export const ConsultarInfoCriterio = async (libranza, criterio) => {
  return await axiosPrivate.get(`${URl_Criterios.InfoCriterio}?libranza=${libranza}&criterio=${criterio}`).then(res => res.data)
}

export const RechazarCriterio = async (pagador, criterio, valores) => {
  return await axiosPrivate.post(`${URl_Criterios.RechazarCriterio}?pagador=${pagador}&criterio=${criterio}`, valores).then(res => res.data)
}
