
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';

// icons
import { AiFillCaretDown } from "react-icons/ai";

// Component
import Modal from '../../Componentes/Modal/Modal';
import InputNumber from '../../Componentes/Inputs/InputNumber';
import TableCriterios from '../../Componentes/Tables/TableCriterios/TableCriterios';
import { revisarCriterios } from '../../Services/CriteriosService';
import { Loading } from '../../Componentes/Loading/Loading';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const tipoIncoporacion = {
  Incorporado: '1',
  NoIncorporado: '2'
}


const ValidarInformacion = () => {
  const [isNoIncorporado, setIsNoIncorporado] = useState(false)
  const [showModal, setShowModal] = useState(false);
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

  const [lista,setLista]=useState()
  const [IsLoading, setIsLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const handleClickTipo = (e) => {

    const tipo = e.target.value;

    if (tipo === tipoIncoporacion.NoIncorporado) {

      setIsNoIncorporado(true)

    } else {

      setIsNoIncorporado(false)
    }
    setValores({
      ...valores,
      tipo_Libranza:tipo
    })

  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChangeValCompra = (input) => {
    const name=input.name;
    const valor=input.value.replaceAll('.','');
    
    setValores({
      ...valores,
      [name]: valor
    })

  }

  const handleClickRevisar = async () => {
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

    <r>

      <div className="flex items-center justify-center pl-2 h-12 mb-2 rounded text-white bg-cyan-800 dark:bg-gray-800">
        <h1> <strong> VALIDAR INFORMACIÓN</strong></h1>
      </div>

      <div className="flex items-center justify-center flex-col p-4 h-full rounded bg-gray-50 dark:bg-gray-800">
        <form className="w-full max-w-3xl">
          <div className="flex flex-wrap -mx-3 m-4">
            <div className="w-full md:w-1/3 px-3">
              <label className="block tracking-wide text-gray-700 text-sm  mb-2" for="grid-first-name">
                Valor Compra
              </label>
              <InputNumber id={'Valor_compra'} onValueChange={handleChangeValCompra}/>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block  tracking-wide text-gray-700 text-sm  mb-2" for="grid-last-name">
                Saldo Cartera
              </label>
              <InputNumber id={'Saldo_cartera'} onValueChange={handleChangeValCompra}/>
            </div>
            <div className="w-full md:w-1/3 px-3 ">
              <label className="block  tracking-wide text-gray-700 text-sm  mb-2" for="grid-city">
                Saldo Pensionados Cartera
              </label>
              <InputNumber id={'Saldo_pensionados'} onValueChange={handleChangeValCompra}/>

            </div>
          </div>
          <div className="flex flex-wrap -mx-3 m-8">

            <div className="w-full md:w-1/3 px-3 ">
              <label className="block  tracking-wide text-gray-700 text-sm mb-2" for="grid-city">
                Saldo No Pensionados Cartera
              </label>
              <InputNumber id={'Saldo_no_pensionados'} onValueChange={handleChangeValCompra} />
            </div>
            <div className="w-full md:w-1/3 px-3 ">
              <label className="block  tracking-wide text-gray-700 text-sm  mb-2" for="grid-zip">
                Tasa Usura %
              </label>
              <InputNumber id={'Tasa_interes'} onValueChange={handleChangeValCompra}/>

            
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
              <InputNumber id={'Cartera_incorporada'} onValueChange={handleChangeValCompra} />
            </div>
            <div className={`w-full md:w-1/3 px-3 ${(!isNoIncorporado ? 'hidden' : '')}`}>
              <label className="block  tracking-wide text-gray-700 text-sm  mb-2" for="grid-zip">
                Total Cartera no Incorporada
              </label>
              <InputNumber id={'Cartera_no_incorporada'} onValueChange={handleChangeValCompra}/>
            </div>
          </div>
          <div className="flex flex-wrap m-8 justify-center gap-6">
            <button type="button" onClick={handleClickRevisar} className="focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Revisar Criterios</button>

            <button type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Criterios Revisados</button>
          </div>
        </form>
        {/* tabla */}

        {IsLoading ? <Loading /> : <TableCriterios lista={lista} />}

        {/* tabla */}
        <div className="flex flex-wrap m-8 justify-center gap-6">
          <button type="button" onClick={handleClickRevisar} className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Comprar Libranzas</button>
        </div>

      </div>


      <Modal showModal={showModal} closeModal={closeModal} title={<h1 className='text-lg font-semibold'>Revisar Criterio</h1>} contenido={<h1>Contenido</h1>} />

    </r>
  )
}

export default ValidarInformacion