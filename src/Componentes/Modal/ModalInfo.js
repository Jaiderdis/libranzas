import React from 'react'

const ModalInfo = ({datos,setShowModal,show}) => {

    return (

        <div className={`fixed z-50 overflow-y-auto top-0 w-full left-0 ${(!show?'hidden':'')}`} id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                     <div className="bg-primary-500 text-white px-4 py-3 ">
                       <h2>{datos.title}</h2>
                    </div>
                    <div className="bg-white px-4 py-8">
                        <label className="font-medium text-gray-800">{datos.Content}</label>
                        
                        {/* <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" /> */}
                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={()=>setShowModal(false)}><i className="fas fa-times"></i> Cerrar</button>
          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInfo