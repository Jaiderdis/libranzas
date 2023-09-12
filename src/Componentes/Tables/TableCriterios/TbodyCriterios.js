import React, { useState } from 'react'

import { HiDocumentArrowDown } from 'react-icons/hi2';
import ModalArchivos from '../../Modal/ModalArchivos';
import Td from './Td';









const TbodyCriterios = ({ lista, downFiles }) => {

  



    return (

        <>

            <tbody >
                {
lista&&
                    lista.map((item, index) => (
                        <tr className="bg-cyan-600 border-b border-white" key={index}>

                            {/* th libranza */}
                            <th scope="row" className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap text-white border-darkSecondary-500 border bg-primary-500">
                                {item.libranza}
                            </th>


                            {/* iteracion de criterios */}

                            {Object.keys(lista[0]).filter(key => key !== 'libranza').map(criterio => (



                                <Td key={`${item.libranza}${criterio}`} item={item} criterio={criterio} />
                            )
                            )}

                            {/* Opcion descargar archivos */}

                            <td className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap dark:text-white border-darkSecondary-500 border bg-primary-500"><span onClick={() => downFiles(item.libranza)} className=' flex justify-center cursor-pointer '><HiDocumentArrowDown size={25} className='hover:-translate-y-1' /></span></td>

                        </tr>
                    ))
                }


            </tbody >


        </ >

    )
}

export default TbodyCriterios