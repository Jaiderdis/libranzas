import React from 'react'
import '../TableListaNegra/TableListaNegra.modules.css'

const TableListaNegra = ({ data, handleCheckboxChange }) => {
  return (
    <div className=' relative   w-full'>
      <div className='m-5 flex justify-center flex-col items-center gap-3'>
        <div className='text-center'>
          <h1 className='font-bold text-base'>Datos Entidad</h1>
        </div>

        <div className='grid grid-cols-2 MobileL:grid-cols-1 gap-7 mt-3 mx-12'>
          <div className=''>
            <label className='font-bold text-base'>Nombre:</label>
            <p>{data.dataEntidad.nombre}</p>
          </div>
          <div className=''>
            <label className='font-bold text-base'>Nit:</label>
            <p>{data.dataEntidad.nit}</p>
          </div>
          <div >
            <label className='font-bold text-base'>Telefono:</label>
            <p>4353234</p>
          </div>
          <div >
            <label className='font-bold text-base'>Pais:</label>
            <p>{data.dataEntidad.pais}</p>
          </div>
        </div>

      </div>
      <div className="w-full overflow-x-auto flex justify-center  shadow-md rounded-lg">
        <table className="w-full">
          <thead>
            <tr className='bg-primary-500 '>
              <th className='p-3' > <h1 className='font-bold MobileS:text-xs text-base text-white w-4/5 '>Datos Encontrados</h1></th>
              <th className='p-3' > <h1 className='font-bold MobileS:text-xs text-base text-white w-4/5 '>Opcion</h1></th>

            </tr>
          </thead>
          <tbody>

            {data.dataEncontrada.map((item, index) => (
              <tr key={item.id}>
                <td className='p-5 border-2 '>
                  <div className='grid grid-cols-2 MobileL:grid-cols-1 gap-4 mx-3'>
                    {Object.keys(item).map(dato => (
                      <div key={`${item.id}${dato}`}>
                        <label className='font-bold text-base uppercase'>{dato}:</label>
                        <p>{item[dato]}</p>
                      </div>

                    )
                    )}
                  </div>

                </td>
                <td className='border-2 '>
                  <div className='flex justify-center items-center'>
                    <input
                      type='checkbox'
                      onChange={() => handleCheckboxChange(index)} // Manejador de cambio
                    />
                  </div>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>

  )
}

export default TableListaNegra
