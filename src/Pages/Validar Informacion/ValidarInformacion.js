import React from 'react'
import useAuth from '../../hooks/useAuth';
import Navbar from '../../Componentes/Navbar/Navbar';

const ValidarInformacion = () => {
  const { auth } = useAuth();
  return (

    <>

      <div class="flex items-center justify-center pl-2 h-12 mb-2 rounded text-white bg-cyan-800 dark:bg-gray-800">
        <h1> <strong> VALIDAR INFORMACIÓN</strong></h1>
      </div>

      <div class="flex items-center justify-center p-4 h-full rounded bg-gray-50 dark:bg-gray-800">
        <form class="w-full max-w-3xl">
          <div class="flex flex-wrap -mx-3 m-8">
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Valor Compra
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="$" />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Saldo Cartera
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="$" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 m-8">
            <div class="w-full md:w-1/3 px-3 ">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Saldo Pensionados Cartera
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="$" />
            </div>
            <div class="w-full md:w-1/3 px-3 ">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Saldo No Pensionados Cartera
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="$" />
            </div>
            <div class="w-full md:w-1/3 px-3 ">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Tasa Usura %
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="%" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 m-8">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Tipo
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Incoporada</option>
                  <option>No Incoporada</option>

                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap m-8 justify-center gap-6">
            <button type="button" class="focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Revisar Criterios</button>

            <button type="button" class="focus:outline-none text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Criterios Revisados</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ValidarInformacion