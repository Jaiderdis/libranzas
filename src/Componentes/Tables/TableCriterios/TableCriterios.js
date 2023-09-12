import React, { useContext, useState } from 'react'
import TbodyCriterios from './TbodyCriterios';
import Modal from '../../Modal/ModalListaNegra';
import CriteriosContext from '../../../Context/CriteriosContext';
import ModalArchivos from '../../Modal/ModalArchivos';
import ModalListaNegra from '../../Modal/ModalListaNegra';
import { Loading } from '../../Loading/Loading';




const TableCriterios = ({ lista }) => {
    const { showModalBlackList, IsLoadingListaNegra } = useContext(CriteriosContext)
    const [modalDownFiles, setModalDownFiles] = useState(false)
    const [datos, setDatos] = useState(null)
    const descargarArchivos = (libranza) => {
        setDatos(libranza)
        setModalDownFiles(true)
    }

    return (
        <>
            {lista &&
                <div className=' relative w-4/5 '>
                    <div className='flex justify-center w-full h-20 Tablet:h-32 MobileM:h-40 pb-3'>
                        <div className='grid grid-cols-3 MobileL:grid-cols-1 gap-3 '>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <div className='bg-emerald-500   h-1 w-1/2 rounded-lg'></div>
                                <div className='dark:text-white  rounded-lg text-xs text-center'>CUMPLE</div>
                            </div>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <div className='bg-red-500  h-1 w-1/2 rounded-lg'></div>
                                <div className='dark:text-white  rounded-lg text-xs text-center'>NO CUMPLE</div>
                            </div>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <div className='bg-sky-500  h-1 w-1/2 rounded-lg'></div>
                                <div className='dark:text-white  rounded-lg text-xs text-center'>REVISAR</div>
                            </div>


                       
                            

                        </div>
                    </div>
                    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                            <thead className="text-xs text-white uppercase bg-primary-500 ">
                                <tr>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">Libranza</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">1</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">2</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">3</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">4</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">5</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">6</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">7</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">8</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">9</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">10</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">11</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">12</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">13</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">14</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">15</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">16</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">17</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">18</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">19</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">20</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">21</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">22</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">23</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">24</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">25</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">26</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">27</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">28</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">29</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">30</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-darkSecondary-500 border bg-primary-500" scope="“col”">Archivos</th>
                                </tr>
                            </thead>
                            <TbodyCriterios lista={lista} downFiles={descargarArchivos} />
                        </table>



                    </div>

                    <div className="flex flex-wrap m-8 justify-center gap-6">
                        <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Comprar Libranzas</button>
                    </div>
                </div>

            }
            {modalDownFiles && <ModalArchivos libranza={datos} setShowModal={setModalDownFiles} show={modalDownFiles} />}
            {IsLoadingListaNegra ? <Loading /> : <ModalListaNegra />}
        </>

    )
}

export default TableCriterios