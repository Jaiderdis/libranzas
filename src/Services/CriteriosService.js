import { axiosPrivate } from "../Api/Axios"

const URl_Criterios = {
  RevisarCriteriosAceptacion: '/Archivos/RevisarCriteriosAceptacion',
  CriteriosRevisados: '/Archivos/ObtenerLibranzasRevisadas',
  RevisarLibranzas: '/Archivos/revisarLibranzas',
  InfoCriterio: '/Archivos/ObtenerInfoCriterio',
  RechazarCriterio: '/Archivos/RevisarListaNegra'
};



export const RevisarCriterios = async (valores) => {
  try {

    const controller = new AbortController();
    const response = await axiosPrivate.post(URl_Criterios.RevisarCriteriosAceptacion, valores, { signal: controller.signal })
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Respuesta HTTP no exitosa: ${response.status}`);
    }
  } catch (error) {
    return null;
  }
};

export const CriteriosRevisados = () => {
  return axiosPrivate.get(URl_Criterios.CriteriosRevisados).then(res => res.data);
};

export const AprobarLibranzas = async (libranzas) => {


  // try {
  //   const response = await axios.post(URl_Criterio.revisarLibranzas, libranzas).then(value=>{

  //   })
  //   if (response.status === 200) {
  //     return response;
  //   } else {
  //     throw new Error(`Respuesta HTTP no exitosa: ${response.status}`);
  //   }
  // } catch (error) {
  //   return null;
  // }
};


export const ConsultarInfoCriterio = async (libranza, criterio) => {
  try {
    const controller = new AbortController();
    const response = await axiosPrivate.get(`${URl_Criterios.InfoCriterio}?libranza=${libranza}&criterio=${criterio}`, { signal: controller.signal })
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Respuesta HTTP no exitosa: ${response.status}`);
    }
  } catch (error) {
    return null;
  }
};

export const RechazarCriterio = async (pagador, criterio, valores) => {
  try {
    const controller = new AbortController();
    const response = await axiosPrivate.post(`${URl_Criterios.RechazarCriterio}?pagador=${pagador}&criterio=${criterio}`, valores, { signal: controller.signal })
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Respuesta HTTP no exitosa: ${response.status}`);
    }
  } catch (error) {

    console.error("Error al obtener informaciond el criterio:", error);
    return null;
  }
};



