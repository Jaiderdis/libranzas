import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxiosWithAbort(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);

  useEffect(() => {
    // Crea un nuevo controlador de aborto para esta solicitud
    const controller = new AbortController();
    setAbortController(controller);

    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          signal: controller.signal, // Asocia el controlador de aborto a la solicitud Axios
        });
        setData(response.data);
        setLoading(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          // La solicitud fue cancelada, no hagas nada
        } else {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Limpia el controlador de aborto cuando el componente se desmonta
    return () => {
      if (controller) {
        controller.abort(); // Cancela la solicitud si el componente se desmonta antes de que se complete
      }
    };
  }, [url]);

  return { data, loading, error };
}

export default useAxiosWithAbort;
