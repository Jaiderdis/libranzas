import React from 'react'
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import { VscError } from 'react-icons/vsc';
import { RiErrorWarningFill } from 'react-icons/ri';
import { HiDocumentArrowDown } from 'react-icons/hi2';





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
const criteriosBlackList = ['criterio27','criterio25']


const TbodyCriterios = ({ lista }) => {


    
    const obtenerEstilos = (item, criterio) => {

        if (resCriterio.CUMPLE.Resultado === item[criterio]) {
            return resCriterio.CUMPLE.Color;
        } else if (resCriterio.NOCUMPLE.Resultado === item[criterio]) {
            return resCriterio.NOCUMPLE.Color;
        } else if (resCriterio.REVISAR.Resultado === item[criterio]) {
            let estilos = resCriterio.REVISAR.Color;
            if (criteriosBlackList.includes(criterio)) {
                estilos += ' '+ resCriterio.REVISAR.Estilos;
            }
            return estilos;
        }


    }

    return (
        <tbody>
            {lista.map((item, index) => (
                <tr className="bg-cyan-600 border-b border-white" key={index}>

                    {/* th libranza */}
                    <th scope="row" className="px-6 py-4 font-medium bg-cyan-700 text-cyan-50 whitespace-nowrap dark:text-cyan-100">
                        {item.libranza}
                    </th>


                    {/* iteracion de criterios */}

                    {Object.keys(lista[0]).filter(key => key !== 'libranza').map(criterio => (

                        <td className={`${obtenerEstilos(item, criterio)} px-6 py-4 text-center whitespace-nowrap border border-white`}
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

                    <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-cyan-700"><span className=' flex justify-center cursor-pointer '><HiDocumentArrowDown size={25} className='hover:-translate-y-1' /></span></td>

                </tr>
            ))}


        </tbody>

    )
}

export default TbodyCriterios