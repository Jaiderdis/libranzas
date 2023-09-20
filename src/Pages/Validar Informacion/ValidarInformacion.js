
import React, { useContext, useState } from 'react'
//CustomHooks
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
// icons
import { AiFillCaretDown } from "react-icons/ai";
// Component
import TableCriterios from '../../Componentes/Tables/TableCriterios/TableCriterios';
import { Loading } from '../../Componentes/Loading/Loading';
import ModalConfirmacion from '../../Componentes/Modal/ModalConfirmacion';
//Services
import { CriteriosRevisados, RevisarCriterios } from '../../Services/CriteriosService';
//Context
import CriteriosContext from '../../Context/CriteriosContext';
import { tipoIncoporacion } from '../../utils/Criterio';
import ModalInfo from '../../Componentes/Modal/ModalInfo';





const ValidarInformacion = () => {
  const { lista, setLista } = useContext(CriteriosContext)
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
  const [IsLoading, setIsLoading] = useState(false)
  const [showModalConfirmacion, setshowModalConfirmacion] = useState(false)
  const [showModalInfo, setShowModalInfo] = useState(false)
  const [dataModalInfo, setDataModalInfo] = useState({
    Title:'',
    Mensaje:'',
    Tipo:null
  })

  const axiosPrivate = useAxiosPrivate()

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


    let numericInput = value.replace(/[^0-9]/g, '');
    if (name === 'Tasa_interes' && value !== '') {
      numericInput = Math.min(parseInt(numericInput, 10), 100).toString();
    }

    const formattedInput = numericInput.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    setValores({
      ...valores,
      [name]: formattedInput
    })



  }
  const handleSubmitRevisar = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await RevisarCriterios(axiosPrivate, valores);
      if (response === null) {
        throw new Error('Response null')
      } else if (!response.data.success) {
        throw new Error('Error Interno')
      } else if (!response.data.result === null || response.data.result == []) {
        alert('No hay libranzas para revisar')
      }
      setLista(response.data.result)
    } catch (error) {
      alert('Error interno')
    } finally {
      setIsLoading(false)
    }
  }
  const handleSubmitRevisados = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const Criterios =await CriteriosRevisados();
      setLista(Criterios)
      if(Criterios==null){
        setDataModalInfo({
          Title:'Error al cargar libranzas',
          Mensaje:'Error interno, validar mas tarde o comunicarse con el proveedor',
          tipo:'Error'
        })
      }
      // setDataModalInfo({
      //   Title:'Exito',
      //   Mensaje:'Se cargaron correctamente',
      //   tipo:'Exito'
      // })
    } catch (error) {
      setDataModalInfo({
        Title:'Error al cargar libranzas',
        Mensaje:'Error interno, validar mas tarde o comunicarse con el proveedor',
        tipo:'Error'
      })
    } finally {
      setIsLoading(false)

      setShowModalInfo(true)
    }
  }


  const closeModal=()=>{
    
    setShowModalInfo(false)
    setDataModalInfo(null)
  }


  return (

    <>
      <div className="p-4 border-2  mb-2 border-gray-200  rounded-lg dark:border-gray-700">

        <div className="flex items-center justify-center flex-col p-4 h-full rounded bg-gray-50 dark:bg-gray-800 ">
          <form method='post' onSubmit={handleSubmitRevisar} className="w-full max-w-3xl">
            <div className="grid grid-cols-3 Tablet:grid-cols-1 Laptop:grid-cols-2 gap-4 mx-3 m-4">
              <div className="w-full  px-3 ">
                <label className="block tracking-wide text-gray-700 text-sm dark:text-white mb-2">
                  Valor Compra
                </label>
                <input
                  id='Valor_compra'
                  type="text"
                  value={valores.Valor_compra}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="$" />
              </div>
              <div className="w-full px-3">
                <label className="block  tracking-wide text-gray-700 text-sm dark:text-white mb-2" >
                  Saldo Cartera
                </label>
                <input
                  id='Saldo_cartera'
                  type="text"
                  value={valores.Saldo_cartera}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="$" />
              </div>
              <div className="w-full px-3 ">
                <label className="block  tracking-wide text-gray-700 text-sm dark:text-white mb-2" >
                  Pensionados
                </label>
                <input
                  id='Saldo_pensionados'
                  type="text"
                  value={valores.Saldo_pensionados}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Saldo Cartera" />


              </div>

              <div className="w-full  px-3 ">
                <label className="block  tracking-wide text-gray-700 text-sm mb-2 dark:text-white" >
                  No Pensionados
                </label>
                <input
                  id='Saldo_no_pensionados'
                  type="text"
                  value={valores.Saldo_no_pensionados}
                  onChange={handleInputChange}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Saldo Cartera" />
              </div>
              <div className="w-full px-3 ">
                <label className="block  tracking-wide text-gray-700 text-sm dark:text-white mb-2">
                  Tasa Usura %
                </label>
                <input
                  id='Tasa_interes'
                  type="text"
                  value={valores.Tasa_interes}
                  onChange={handleInputChange}
                  required={true}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="%" />


              </div>
              <div className="w-full  px-3 ">
                <label className="block  tracking-wide text-gray-700 text-sm dark:text-white font-bold mb-2" >
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
              <div className={`w-full px-3 ${(!isNoIncorporado ? 'hidden' : '')}`}>
                <label className="block  tracking-wide text-gray-700 dark:text-white text-sm mb-2" >
                  Total Incorporada
                </label>
                <input
                  id='Cartera_incorporada'
                  type="text"
                  value={valores.Cartera_incorporada}
                  onChange={handleInputChange}
                  required={isNoIncorporado}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Total Cartera" />
              </div>
              <div className={`w-full  px-3 ${(!isNoIncorporado ? 'hidden' : '')}`}>
                <label className="block  tracking-wide text-gray-700 dark:text-white text-sm  mb-2" >
                  Total No Incorporada
                </label>
                <input
                  id='Cartera_no_incorporada'
                  type="text"
                  value={valores.Cartera_no_incorporada}
                  onChange={handleInputChange}
                  required={isNoIncorporado}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Total Cartera" />
              </div>

            </div>
            <div className="flex flex-wrap m-8 justify-center gap-6">
              <button type='submit' className="focus:outline-none text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-offset-secondary-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Revisar Criterios</button>

              <button onClick={handleSubmitRevisados} type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700">Criterios Revisados</button>
            </div>
          </form>

          {/* tabla */}

          {IsLoading ? <Loading /> : lista && <TableCriterios lista={lista} />}

          {/* tabla */}
          <div className="flex flex-wrap m-8 justify-center gap-6">
            <button type="button" onClick={()=>setshowModalConfirmacion(true)} className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Comprar Libranzas</button>
          </div>




        </div>
      </div>

      { showModalConfirmacion  &&  <ModalConfirmacion contenido={"hola"} show={showModalConfirmacion} closeModal={setshowModalConfirmacion}/> }
      { showModalInfo &&  <ModalInfo data={dataModalInfo} show={ModalInfo} close={closeModal}/>}
    </>
  )
}

export default ValidarInformacion