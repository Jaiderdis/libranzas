import React, { useContext } from 'react'
import TbodyCriterios from './TbodyCriterios';
import Modal from '../../Modal/ModalListaNegra';
import CriteriosContext from '../../../Context/CriteriosContext';

// const lista = [
//     {
//         "libranza": "772022114734",
//         "criterio1": "CUMPLE",
//         "criterio2": "CUMPLE",
//         "criterio3": "CUMPLE",
//         "criterio4": "CUMPLE",
//         "criterio5": "CUMPLE",
//         "criterio6": "CUMPLE",
//         "criterio7": "CUMPLE",
//         "criterio8": "CUMPLE",
//         "criterio9": "CUMPLE",
//         "criterio10": "CUMPLE",
//         "criterio11": "CUMPLE",
//         "criterio12": "CUMPLE",
//         "criterio13": "CUMPLE",
//         "criterio14": "CUMPLE",
//         "criterio15": "CUMPLE",
//         "criterio16": "CUMPLE",
//         "criterio17": "CUMPLE",
//         "criterio18": "CUMPLE",
//         "criterio19": "CUMPLE",
//         "criterio20": "CUMPLE",
//         "criterio21": "NO CUMPLE",
//         "criterio22": "NO CUMPLE",
//         "criterio23": "NO CUMPLE",
//         "criterio24": "NO CUMPLE",
//         "criterio25": "REVISAR",
//         "criterio26": "CUMPLE",
//         "criterio27": "CUMPLE",
//         "criterio28": "CUMPLE",
//         "criterio29": "CUMPLE",
//         "criterio30": "CUMPLE"
//     },
//     {
//         "libranza": "772022114736",
//         "criterio1": "CUMPLE",
//         "criterio2": "CUMPLE",
//         "criterio3": "CUMPLE",
//         "criterio4": "CUMPLE",
//         "criterio5": "CUMPLE",
//         "criterio6": "CUMPLE",
//         "criterio7": "CUMPLE",
//         "criterio8": "CUMPLE",
//         "criterio9": "CUMPLE",
//         "criterio10": "CUMPLE",
//         "criterio11": "CUMPLE",
//         "criterio12": "CUMPLE",
//         "criterio13": "CUMPLE",
//         "criterio14": "CUMPLE",
//         "criterio15": "CUMPLE",
//         "criterio16": "CUMPLE",
//         "criterio17": "CUMPLE",
//         "criterio18": "NO CUMPLE",
//         "criterio19": "CUMPLE",
//         "criterio20": "CUMPLE",
//         "criterio21": "CUMPLE",
//         "criterio22": "CUMPLE",
//         "criterio23": "CUMPLE",
//         "criterio24": "CUMPLE",
//         "criterio25": "REVISAR",
//         "criterio26": "CUMPLE",
//         "criterio27": "NO CUMPLE",
//         "criterio28": "CUMPLE",
//         "criterio29": "CUMPLE",
//         "criterio30": "CUMPLE"
//     },
//     {
//         "libranza": "772022114843",
//         "criterio1": "CUMPLE",
//         "criterio2": "CUMPLE",
//         "criterio3": "CUMPLE",
//         "criterio4": "CUMPLE",
//         "criterio5": "CUMPLE",
//         "criterio6": "CUMPLE",
//         "criterio7": "CUMPLE",
//         "criterio8": "CUMPLE",
//         "criterio9": "CUMPLE",
//         "criterio10": "CUMPLE",
//         "criterio11": "CUMPLE",
//         "criterio12": "CUMPLE",
//         "criterio13": "CUMPLE",
//         "criterio14": "CUMPLE",
//         "criterio15": "CUMPLE",
//         "criterio16": "CUMPLE",
//         "criterio17": "CUMPLE",
//         "criterio18": "NO CUMPLE",
//         "criterio19": "CUMPLE",
//         "criterio20": "CUMPLE",
//         "criterio21": "NO CUMPLE",
//         "criterio22": "NO CUMPLE",
//         "criterio23": "NO CUMPLE",
//         "criterio24": "NO CUMPLE",
//         "criterio25": "REVISAR",
//         "criterio26": "CUMPLE",
//         "criterio27": "NO CUMPLE",
//         "criterio28": "CUMPLE",
//         "criterio29": "CUMPLE",
//         "criterio30": "CUMPLE"
//     },
//     {
//         "libranza": "772022115108",
//         "criterio1": "CUMPLE",
//         "criterio2": "CUMPLE",
//         "criterio3": "CUMPLE",
//         "criterio4": "CUMPLE",
//         "criterio5": "CUMPLE",
//         "criterio6": "CUMPLE",
//         "criterio7": "CUMPLE",
//         "criterio8": "CUMPLE",
//         "criterio9": "CUMPLE",
//         "criterio10": "CUMPLE",
//         "criterio11": "CUMPLE",
//         "criterio12": "CUMPLE",
//         "criterio13": "CUMPLE",
//         "criterio14": "CUMPLE",
//         "criterio15": "CUMPLE",
//         "criterio16": "CUMPLE",
//         "criterio17": "CUMPLE",
//         "criterio18": "NO CUMPLE",
//         "criterio19": "CUMPLE",
//         "criterio20": "CUMPLE",
//         "criterio21": "CUMPLE",
//         "criterio22": "CUMPLE",
//         "criterio23": "CUMPLE",
//         "criterio24": "CUMPLE",
//         "criterio25": "REVISAR",
//         "criterio26": "CUMPLE",
//         "criterio27": "NO CUMPLE",
//         "criterio28": "CUMPLE",
//         "criterio29": "CUMPLE",
//         "criterio30": "CUMPLE"
//     },
//     {
//         "libranza": "772022115256",
//         "criterio1": "CUMPLE",
//         "criterio2": "CUMPLE",
//         "criterio3": "CUMPLE",
//         "criterio4": "CUMPLE",
//         "criterio5": "CUMPLE",
//         "criterio6": "CUMPLE",
//         "criterio7": "CUMPLE",
//         "criterio8": "CUMPLE",
//         "criterio9": "CUMPLE",
//         "criterio10": "CUMPLE",
//         "criterio11": "CUMPLE",
//         "criterio12": "CUMPLE",
//         "criterio13": "CUMPLE",
//         "criterio14": "CUMPLE",
//         "criterio15": "CUMPLE",
//         "criterio16": "CUMPLE",
//         "criterio17": "CUMPLE",
//         "criterio18": "CUMPLE",
//         "criterio19": "CUMPLE",
//         "criterio20": "CUMPLE",
//         "criterio21": "CUMPLE",
//         "criterio22": "CUMPLE",
//         "criterio23": "CUMPLE",
//         "criterio24": "CUMPLE",
//         "criterio25": "REVISAR",
//         "criterio26": "CUMPLE",
//         "criterio27": "CUMPLE",
//         "criterio28": "CUMPLE",
//         "criterio29": "CUMPLE",
//         "criterio30": "CUMPLE"
//     }
// ]




const TableCriterios = ({ lista }) => {
    return (
        <>
            {lista &&
                <div className=' relative w-4/5'>

                    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                            <thead className="text-xs text-white uppercase bg-cyan-600 border-b border-white dark:text-white">
                                <tr>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border  bg-cyan-700" scope="“col”">Libranza</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">1</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">2</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">3</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">4</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">5</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">6</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">7</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">8</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">9</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">10</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">11</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">12</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">13</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">14</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">15</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">16</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">17</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">18</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">19</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">20</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">21</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">22</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">23</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">24</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">25</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">26</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">27</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">28</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">29</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">30</th>
                                    <th className="px-6 py-3 text-sm text-center font-medium whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Archivos</th>
                                </tr>
                            </thead>
                            <TbodyCriterios lista={lista} />
                        </table>



                    </div>

                    <div className="flex flex-wrap m-8 justify-center gap-6">
                        <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Comprar Libranzas</button>
                    </div>
                </div>

            }
        </>

    )
}

export default TableCriterios