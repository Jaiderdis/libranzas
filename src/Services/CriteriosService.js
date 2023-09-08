import useAxiosPrivate from "../hooks/useAxiosPrivate";


const URl_AUTH = {
  revisar: '/Archivos/ObtenerLibranzas',
  revisados: '/Archivos/ObtenerLibranzasRevisadas',
  buscarPdf:'Archivos/buscarPDF'
};



export const revisarCriterios = async (axios,valores) => {
  try {
    const controller = new AbortController();
    const response = await axios.post(URl_AUTH.revisar, valores, { signal: controller.signal })
    return response;
  } catch (error) {
    // Manejo de errores
    console.error("Error al revisar criterios:", error);
    return null;
  }
};

export const CriteriosRevisados = async (axios) => {
  try {
    const controller = new AbortController();
    const response = await axios.get(URl_AUTH.revisados, { signal: controller.signal })
    return response;
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener los criterios:", error);
    return null;
  }
};



export const descargarArchivo = async (axios,tipoFile,libranza) => {
  try {
    const controller = new AbortController();
    const response = await axios.get(`${URl_AUTH.buscarPdf}?libranza=${tipoFile}&ID=${libranza}`, { signal: controller.signal })
    return response;
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener los criterios:", error);
    return null;
  }
};


