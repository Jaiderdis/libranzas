
import React, { useContext, useState } from 'react'
import useAuth from '../../hooks/useAuth';

// icons
import { AiFillCaretDown } from "react-icons/ai";

// Component
import Modal from '../../Componentes/Modal/ModalListaNegra';

import TableCriterios from '../../Componentes/Tables/TableCriterios/TableCriterios';
import { revisarCriterios } from '../../Services/CriteriosService';
import { Loading } from '../../Componentes/Loading/Loading';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import CriteriosContext from '../../Context/CriteriosContext';


const tipoIncoporacion = {
  Incorporado: '1',
  NoIncorporado: '2'
}


const ValidarInformacion = () => {


  const [isNoIncorporado, setIsNoIncorporado] = useState(false)

  const [valores, setValores] = useState({
    Valor_compra: '',
    Saldo_cartera: '',
    Saldo_pensionados: '',
    Saldo_no_pensionados: '',
    tipo_Libranza: "1",
    Cartera_incorporada: '',
    Cartera_no_incorporada: '',
    Tasa_interes: ''
  });
  const [lista, setLista] = useState()
  const [IsLoading, setIsLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const handleClickTipo = (e) => {

    const tipo = e.target.value;

    if (tipo === tipoIncoporacion.NoIncorporado) {

      setIsNoIncorporado(true)

      setValores({
        ...valores,
        tipo_Libranza: tipo
      })
    } else {

      setIsNoIncorporado(false)

      setValores({
        ...valores,
        Cartera_incorporada: "",
        Cartera_no_incorporada: "",
        tipo_Libranza: tipo
      }
      )
    }


  }


  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.id;

    
    let  numericInput = value.replace(/[^0-9]/g, '');
    if (name === 'Tasa_interes' &&value!=='') {
      numericInput = Math.min(parseInt(numericInput, 10), 100).toString();
    }

    const formattedInput = numericInput.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    setValores({
      ...valores,
      [name]: formattedInput
    })



  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setIsLoading(true);

      const response = await revisarCriterios(axiosPrivate, valores);
      setLista(response.data)

    } catch (error) {

    } finally {
      setIsLoading(false)
    }

  }


  return (

    <>
      <div className="flex items-center justify-center pl-2 h-12 mb-2 rounded text-white bg-primary-500 dark:bg-gray-800">
        <h1> <strong> VALIDAR INFORMACIÓN</strong></h1>
      </div>
      <div className="p-4 border-2  mb-2 border-gray-200  rounded-lg dark:border-gray-700">

        <div className="flex items-center justify-center flex-col p-4 h-full rounded bg-gray-50 dark:bg-gray-800">
          <form action="#" method="POST" onSubmit={handleSubmit} className="w-full max-w-3xl">
            <div className="flex flex-wrap -mx-3 m-4">
              <div className="w-full md:w-1/3 px-3">
                <label className="block tracking-wide text-gray-700 text-sm  mb-2" for="grid-first-name">
                  Valor Compra
                </label>
                <input
                  id='Valor_compra'
                  type="text"
                  value={valores.Valor_compra}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="$" />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block  tracking-wide text-gray-700 text-sm  mb-2" for="grid-last-name">
                  Saldo Cartera
                </label>
                <input
                  id='Saldo_cartera'
                  type="text"
                  value={valores.Saldo_cartera}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="$" />
              </div>
              <div className="w-full md:w-1/3 px-3 ">
                <label className="block  tracking-wide text-gray-700 text-sm  mb-2" for="grid-city">
                  Saldo Pensionados Cartera
                </label>
                <input
                  id='Saldo_pensionados'
                  type="text"
                  value={valores.Saldo_pensionados}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="$" />
              

              </div>
            </div>
            <div className="flex flex-wrap -mx-3 m-8">

              <div className="w-full md:w-1/3 px-3 ">
                <label className="block  tracking-wide text-gray-700 text-sm mb-2" for="grid-city">
                  Saldo No Pensionados Cartera
                </label>
                <input
                  id='Saldo_no_pensionados'
                  type="text"
                  value={valores.Saldo_no_pensionados}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="$" />
              </div>
              <div className="w-full md:w-1/3 px-3 ">
                <label className="block  tracking-wide text-gray-700 text-sm  mb-2" for="grid-zip">
                  Tasa Usura %
                </label>
                <input
                  id='Tasa_interes'
                  type="text"
                  value={valores.Tasa_interes}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="$" />


              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-state">
                  Tipo
                </label>
                <div className="relative">
                  <select onChange={handleClickTipo} id='tipo_Libranza' className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-700" >
                    <option value="1">Incorporada</option>
                    <option value="2">No Incorporada</option>

                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <span><AiFillCaretDown /> </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 m-8">

              <div className={`w-full md:w-1/3 px-3 ${(!isNoIncorporado ? 'hidden' : '')}`}>
                <label className="block  tracking-wide text-gray-700 text-sm mb-2" for="grid-city">
                  Total Cartera Incorporada
                </label>
                <input
                  id='Cartera_incorporada'
                  type="text"
                  value={valores.Cartera_incorporada}
                  onChange={handleInputChange}
                  required={isNoIncorporado}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="$" />
              </div>
              <div className={`w-full md:w-1/3 px-3 ${(!isNoIncorporado ? 'hidden' : '')}`}>
                <label className="block  tracking-wide text-gray-700 text-sm  mb-2" for="grid-zip">
                  Total Cartera no Incorporada
                </label>
                <input
                  id='Cartera_no_incorporada'
                  type="text"
                  value={valores.Cartera_no_incorporada}
                  onChange={handleInputChange}
                  required={isNoIncorporado}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="$" />
              </div>
            </div>
            <div className="flex flex-wrap m-8 justify-center gap-6">
              <button type="submit" className="focus:outline-none text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Revisar Criterios</button>

              <button type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Criterios Revisados</button>
            </div>
          </form>
          {/* tabla */}

          {IsLoading ? <Loading /> : <TableCriterios lista={lista} />}

          {/* tabla */}



         

        </div>
      </div>


 




    </>
  )
}

export default ValidarInformacion