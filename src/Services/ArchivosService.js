const URl_Archivo = {
    buscarPdf:'Archivos/buscarPDF',
    CargarExcel:'Archivos/CargarExcel',
    CargarPDFs:'Archivos/CargarPDFs'
  };
  

export const CargarExcel = async (axios, formData, headers) => {
    try {
      const controller = new AbortController();
      return  await axios.post(URl_Archivo.CargarExcel,formData,headers,{ signal: controller.signal });
    } catch (error) {
      return null;
    }
  };

  export const CargarPDFs = async (axios, formData, headers) => {
    try {
      const controller = new AbortController();
      return  await axios.post(URl_Archivo.CargarPDFs,formData,headers,{ signal: controller.signal });
    } catch (error) {
      return null;
    }
  };


  
export const descargarArchivo = async (axios,tipoFile,libranza) => {
  try {
    const controller = new AbortController();
    const response = await axios.get(`${URl_Archivo.buscarPdf}?libranza=${tipoFile}&ID=${libranza}`, { signal: controller.signal })
    return response;
  } catch (error) {
    console.error("Error al obtener los criterios:", error);
    return null;
  }
};

  