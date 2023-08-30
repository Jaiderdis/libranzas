

const URl_AUTH = {
  revisar: '/Archivos/ObtenerLibranzas'
};



export const revisarCriterios = async (axios,valores) => {
  try {
    const response = await axios.post(URl_AUTH.revisar, valores);
    console.log(response)
    return response;
  } catch (error) {
    // Manejo de errores
    console.error("Error al revisar criterios:", error);
    return null;
  }
};
