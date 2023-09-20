import React, { useContext } from 'react'
import CriteriosContext from '../../../Context/CriteriosContext';

import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import { VscError } from 'react-icons/vsc';
import { RiErrorWarningFill } from 'react-icons/ri';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { ConsultarInfoCriterio } from '../../../Services/CriteriosService';
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



const Td = ({ item, criterio }) => {

    const { setIsLoadingListaNegra, setshowModalBlackList, setDataBlackList } = useContext(CriteriosContext)
    const axiosPrivate = useAxiosPrivate();
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

    const handleSubmitListaNegra = async (e) => {
        e.preventDefault();
        const numcriterio = criterio.slice(8)
        const libranza = item.libranza
        try {

            setIsLoadingListaNegra(true)


            const response = await ConsultarInfoCriterio(axiosPrivate, libranza, numcriterio);
            const dataEncontrada = response.data.item1;
            const dataEntidad = response.data.item2;
            setDataBlackList({criterio:numcriterio, dataEncontrada: dataEncontrada, dataEntidad: dataEntidad, libranza: libranza })

        } catch (error) {

        } finally {

            setIsLoadingListaNegra(false)
            setshowModalBlackList(true)
        }

    }


    if (item[criterio] === 'CUMPLE') {
        return (
            <td className={`${obtenerEstilos(item, criterio)} px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border`}
                key={criterio}>
                <span className='flex justify-center'><FaCircleCheck size={25} /></span>

            </td>
        )
    } else if (item[criterio] === 'NO CUMPLE') {
        return (
            <td className={`${obtenerEstilos(item, criterio)} px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border`}
                key={criterio}>
                <span className='flex justify-center'><FaCircleXmark size={27} /></span>

            </td>
        )
    } else {
        return (
            <>
                {criteriosBlackList.includes(criterio) ?
                    <td onClick={handleSubmitListaNegra} className={`${obtenerEstilos(item, criterio)} px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-cyan-700`}
                        key={criterio}>
                        <span className='flex justify-center'><RiErrorWarningFill size={29} /></span>
                    </td> :
                    <td className={`${obtenerEstilos(item, criterio)} px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border`}
                        key={criterio}>
                        <span className='flex justify-center'><RiErrorWarningFill size={29} /></span>
                    </td>

                }
            </>


        )
    }


}

export default Td