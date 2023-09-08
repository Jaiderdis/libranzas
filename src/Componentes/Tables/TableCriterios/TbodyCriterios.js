import React, { useState } from 'react'
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import { VscError } from 'react-icons/vsc';
import { RiErrorWarningFill } from 'react-icons/ri';
import { HiDocumentArrowDown } from 'react-icons/hi2';
import ModalArchivos from '../../Modal/ModalArchivos';





const resCriterio = {

    CUMPLE: {
        Resultado: 'CUMPLE',
        Color: 'bg-emerald-500',
    },
    NOCUMPLE: {
        Resultado: 'NO CUMPLE',
        Color: 'bg-red-500',
    },
    REVISAR: {
        Resultado: 'REVISAR',
        Color: 'bg-sky-500',
        Estilos: 'hover:bg-sky-600 cursor-pointer'
    },

}
const criteriosBlackList = ['criterio27', 'criterio25']


const TbodyCriterios = ({ lista }) => {
    const [modalDownFiles, setModalDownFiles] = useState(false)
    const [datos, setDatos] = useState(null)
    const obtenerEstilos = (item, criterio) => {

        if (resCriterio.CUMPLE.Resultado === item[criterio]) {
            return resCriterio.CUMPLE.Color;
        } else if (resCriterio.NOCUMPLE.Resultado === item[criterio]) {
            return resCriterio.NOCUMPLE.Color;
        } else if (resCriterio.REVISAR.Resultado === item[criterio]) {
            let estilos = resCriterio.REVISAR.Color;
            if (criteriosBlackList.includes(criterio)) {
                estilos += ' ' + resCriterio.REVISAR.Estilos;
            }
            return estilos;
        }


    }

    const descargarArchivos = (libranza) => {
        setDatos(libranza)
        setModalDownFiles(true)
    }

    return (

        <>

            <tbody tbody >
                {

                    lista.map((item, index) => (
                        <tr className="bg-cyan-600 border-b border-white" key={index}>

                            {/* th libranza */}
                            <th scope="row" className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap text-white border-darkSecondary-500 border bg-primary-500">
                                {item.libranza}
                            </th>


                            {/* iteracion de criterios */}

                            {Object.keys(lista[0]).filter(key => key !== 'libranza').map(criterio => (

                                <td className={`${obtenerEstilos(item,criterio)} px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-cyan-700`}
                                    key={criterio}>

                                    {item[criterio] == 'CUMPLE' ?
                                        <span className='flex justify-center'><FaCircleCheck size={25} className='' /></span>
                                        : (item[criterio] === 'NO CUMPLE' ?
                                            <span className='flex justify-center'><FaCircleXmark size={27} /></span>
                                            :
                                            <span className='flex justify-center'><RiErrorWarningFill size={29} /></span>)}

                                </td>
                            ))}

                            {/* Opcion descargar archivos */}

                            <td className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap dark:text-white border-darkSecondary-500 border bg-primary-500"><span onClick={()=>descargarArchivos(item.libranza)} className=' flex justify-center cursor-pointer '><HiDocumentArrowDown size={25} className='hover:-translate-y-1' /></span></td>

                        </tr>
                    ))
                }


            </tbody >

            {modalDownFiles&&<ModalArchivos libranza={datos} setShowModal={setModalDownFiles} show={modalDownFiles} />}
        </ >

    )
}

export default TbodyCriterios