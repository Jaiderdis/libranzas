const URl_Archivo = {
    buscarPdf:'Archivos/buscarPDF',
    DescargarExcel:'Archivos/CargarExcel'
  };
  

export const DescargarExcel = async (axios, formData, headers) => {
    try {
      const controller = new AbortController();
      return  await axios.post(URl_Archivo.DescargarExcel,formData,headers,{ signal: controller.signal });
    } catch (error) {
      return null;
    }
  };
  