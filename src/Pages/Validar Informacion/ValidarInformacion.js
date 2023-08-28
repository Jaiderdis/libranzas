import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import Navbar from '../../Componentes/Navbar/Navbar';

const ValidarInformacion = () => {
  const { auth } = useAuth();
  const [isNoIncorporado,setIsNoIncorporado]=useState(false)


  const handleClickTipo=(e)=>{
    const tipo=e.target.value;
    if(tipo=="2"){
      setIsNoIncorporado(true)
    }else {
      setIsNoIncorporado(false)
    }
  }
  return (

    <>

      <div className="flex items-center justify-center pl-2 h-12 mb-2 rounded text-white bg-cyan-800 dark:bg-gray-800">
        <h1> <strong> VALIDAR INFORMACIÓN</strong></h1>
      </div>

      <div className="flex items-center justify-center flex-col p-4 h-full rounded bg-gray-50 dark:bg-gray-800">
        <form className="w-full max-w-3xl">
          <div className="flex flex-wrap -mx-3 m-8">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
                Valor Compra
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="$" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                Saldo Cartera
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="grid-last-name" type="text" placeholder="$" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 m-8">
            <div className="w-full md:w-1/3 px-3 ">
              <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-city">
                Saldo Pensionados Cartera
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="grid-city" type="text" placeholder="$" />
            </div>
            <div className="w-full md:w-1/2 px-3 ">
              <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-city">
                Saldo No Pensionados Cartera
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="grid-city" type="text" placeholder="$" />
            </div>
            <div className="w-full md:w-1/6 px-3 ">
              <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-zip">
                Tasa Usura %
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="grid-zip" type="text" placeholder="%" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 m-8">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Tipo
              </label>
              <div className="relative">
                <select onChange={handleClickTipo} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="grid-state">
                  <option value="1">Incoporada</option>
                  <option value="2">No Incoporada</option>

                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className={`w-full md:w-1/3 px-3 ${(!isNoIncorporado ? 'hidden' : '')}`}>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Saldo No Pensionados Cartera
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="grid-city" type="text" placeholder="$" />
            </div>
            <div className={`w-full md:w-1/3 px-3 ${(!isNoIncorporado ? 'hidden' : '')}`}>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Tasa Usura %
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="grid-zip" type="text" placeholder="%" />
            </div>
          </div>
          <div className="flex flex-wrap m-8 justify-center gap-6">
            <button type="button" className="focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Revisar Criterios</button>

            <button type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Criterios Revisados</button>
          </div>
        </form>

        <div className="relative w-4/5 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-cyan-600 border-b border-white dark:text-white">
              <tr>
                <th className="px-6 py-3 whitespace-nowrap border-white border  bg-cyan-700" scope="“col”">Libranza</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 1</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 2</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 3</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 4</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 5</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 6</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 7</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 8</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 9</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 10</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 11</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 12</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 13</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 14</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 15</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 16</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 17</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 18</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 19</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 20</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 21</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 22</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 23</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 24</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 25</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 26</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 27</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 28</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 29</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Criterio 30</th>
                <th className="px-6 py-3 whitespace-nowrap border-white border bg-cyan-700" scope="“col”">Documentos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-cyan-600 border-b border-white">
                <th scope="row" className="px-6 py-4 font-medium bg-cyan-700 text-cyan-50 whitespace-nowrap dark:text-cyan-100">
                  78453584395
                </th>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-cyan-700">Descargar</td>


              </tr>

              <tr className="bg-cyan-600 border-b border-white">
                <th scope="row" className="px-6 py-4 font-medium bg-cyan-700 text-cyan-50 whitespace-nowrap dark:text-cyan-100">
                  78453584395
                </th>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-cyan-700">Descargar</td>


              </tr>
              <tr className="bg-cyan-600 border-b border-white">
                <th scope="row" className="px-6 py-4 font-medium bg-cyan-700 text-cyan-50 whitespace-nowrap dark:text-cyan-100">
                  78453584395
                </th>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-cyan-700">Descargar</td>


              </tr>
              <tr className="bg-cyan-600 border-b border-white">
                <th scope="row" className="px-6 py-4 font-medium bg-cyan-700 text-cyan-50 whitespace-nowrap dark:text-cyan-100">
                  78453584395
                </th>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-cyan-700">Descargar</td>


              </tr>
              <tr className="bg-cyan-600 border-b border-white">
                <th scope="row" className="px-6 py-4 font-medium bg-cyan-700 text-cyan-50 whitespace-nowrap dark:text-cyan-100">
                  78453584395
                </th>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-orange-600 hover:bg-orange-700">Revisar</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-green-600">Aprobado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-red-600">Rechazado</td>
                <td className="px-6 py-4 text-center whitespace-nowrap border border-white bg-cyan-700">Descargar</td>


              </tr>
              

            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap m-8 justify-center gap-6">
            <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Comprar Libranzas</button>
          </div>

      </div>

    </>
  )
}

export default ValidarInformacion