import { createContext, useState } from "react";

const CriteriosContext =createContext({})


export const CriteriosProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState();
    const [contentModal, setContentModal] = useState();

    const openModal=()=>{
        setShowModal(true)
    };
    const closeModal=()=>{
        setShowModal(false)
    };
  

    return (
        <CriteriosContext.Provider value={
            {
                showModal,
                openModal,
                closeModal
            }}>

            {children}
        </CriteriosContext.Provider>
    )
}


export default CriteriosContext;