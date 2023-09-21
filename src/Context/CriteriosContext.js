import { createContext, useState } from "react";

const CriteriosContext =createContext({})


export const CriteriosProvider = ({ children }) => {
    const [IsLoadingListaNegra, setIsLoadingListaNegra] = useState(false)
    const [showModalBlackList,setshowModalBlackList]=useState(false)
    const [lista, setLista] = useState(null)

    const [dataBlackList, setDataBlackList] = useState({
        criterio:null,
        dataEncontrada: [],
        dataEntidad:
        {
          nombre: null,
          pais: null,
          direccion: null,
          nit: null,
          estado: null,
          revision: null
        }
      })
  

    return (
        <CriteriosContext.Provider value={
            {
            showModalBlackList,
            setshowModalBlackList,
            dataBlackList, 
            setDataBlackList,
            IsLoadingListaNegra,
            setIsLoadingListaNegra,
            lista,
            setLista
            }}>

            {children}
        </CriteriosContext.Provider>
    )
}


export default CriteriosContext;