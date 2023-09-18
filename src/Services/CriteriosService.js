const URl_Criterio = {
  revisar: '/Archivos/RevisarCriteriosAceptacion',
  revisados: '/Archivos/ObtenerLibranzasRevisadas',
  infoCriterio:'/Archivos/ObtenerInfoCriterio',
  rechazarCriterio:'/Archivos/RevisarListaNegra'
};



export const revisarCriterios = async (axios,valores) => {
  try {
    const controller = new AbortController();
    const response = await axios.post(URl_Criterio.revisar, valores, { signal: controller.signal })
    return response;
  } catch (error) {
    return null;
  }
};

export const CriteriosRevisados = async (axios) => {
  try {
    const controller = new AbortController();
    const response = await axios.get(URl_Criterio.revisados, { signal: controller.signal })
    return response;
  } catch (error) {
    return null;
  }
};




export const consultarInfoCriterio = async (axios,libranza,criterio) => {
  try {
    const controller = new AbortController();
    const response = await axios.get(`${URl_Criterio.infoCriterio}?libranza=${libranza}&criterio=${criterio}`, { signal: controller.signal })
    return response;
  } catch (error) {

    console.error("Error al obtener informaciond el criterio:", error);
    return null;
  }
};

export const rechazarCriterio = async (axios,pagador,criterio,valores) => {
  try {
    const controller = new AbortController();
    const response = await axios.post(`${URl_Criterio.rechazarCriterio}?pagador=${pagador}&criterio=${criterio}`,valores, { signal: controller.signal })
    return response;
  } catch (error) {

    console.error("Error al obtener informaciond el criterio:", error);
    return null;
  }
};



