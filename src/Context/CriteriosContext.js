import { createContext, useState } from "react";

const CriteriosContext =createContext({})


export const CriteriosProvider = ({ children }) => {

    const [showModalBlackList,setshowModalBlackList]=useState(false)
    const [dataModalBlackList,setdataModalBlackList]=useState({
        libranza:'',
        criterio:''
    })
  

    return (
        <CriteriosContext.Provider value={
            {
            showModalBlackList,
            setshowModalBlackList,
            dataModalBlackList,
            setdataModalBlackList

            }}>

            {children}
        </CriteriosContext.Provider>
    )
}


export default CriteriosContext;