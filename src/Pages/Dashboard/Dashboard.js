'use client'
import React from 'react'
import { Bar, Line, Radar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { BsFillArrowUpCircleFill ,BsFillArrowDownCircleFill,BsFillArrowUpRightCircleFill} from 'react-icons/bs';
import { BiSolidUserCircle} from 'react-icons/bi';

Chart.register(...registerables);
const Dashboard = () => {


  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false // Oculta las etiquetas del eje x
      },
      y: {
        display: false // Oculta las etiquetas del eje x
      }
    }
  };
  const dataBar = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#1799b8', '#20dab3', '#0092ff', '#a577ef', '#ff57b7'],
        hoverBackgroundColor: ['#107289', '#15856d', '#015fa5', '#6b4d9c', '#c12b81'],
        //  backgroundColor: ['rgba(75,192,192,0.2)'],

        // borderColor: ['rgba(75,192,192,1)'],
        borderWidth: 0,
        borderRadius: 6
      }
    ],
  };
  const dataLine = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas',

        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#1799b8', '#20dab3', '#0092ff', '#a577ef', '#ff57b7'],
        hoverBackgroundColor: ['#107289', '#15856d', '#015fa5', '#6b4d9c', '#c12b81'],
        //  backgroundColor: ['rgba(75,192,192,0.2)'],

        borderColor: ['rgba(75,192,192,1)'],
        borderWidth: 5,
        borderRadius: 6
      }
    ]
  };
  const dataPie = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#1799b8', '#20dab3', '#0092ff', '#a577ef', '#ff57b7'],
        hoverBackgroundColor: ['#107289', '#15856d', '#015fa5', '#6b4d9c', '#c12b81'],
        //  backgroundColor: ['rgba(75,192,192,0.2)'],

        // borderColor: ['rgba(75,192,192,1)'],
        borderWidth: 0,
        borderRadius: 6
      }
    ],
  };




  return (
    <>
      {/* <div className="flex items-center justify-center pl-2 h-12 mb-4 rounded text-white bg-primary-500 dark:bg-darkSecondary-500">
        <h1> <strong> INICIO</strong></h1>
      </div> */}


      <div className="grid grid-cols-4 Tablet:grid-cols-2 gap-6">
        <div className="bg-gradient-to-b from-darkPrimary-500 to-black h-44 rounded-lg">
          <div className='grid grid-cols-2   LaptopL:grid-cols-1 gap-3 h-full p-5'>
            <div className='flex flex-col ' >
              <h1 className='text-green-500' ><strong>$521,093</strong> </h1>
              <div className='mt-3 flex gap-2  text-sm' > <BsFillArrowUpCircleFill size={25} className='text-green-500' /> <span className='text-gray-600 '>Ultimos 30 dias</span> </div>

            </div>

            <div className='flex justify-between'>
              <div className='h-14 w-36 flex justify-center '>

                <Line data={dataLine} options={options} />
              </div>
              <div className='flex justify-end'><BiSolidUserCircle size={45} className='text-green-500' /></div>
            </div>



          </div>
        </div>
        <div className="bg-gradient-to-b from-darkPrimary-500 to-black h-44 rounded-lg">
          <div className='grid grid-cols-2   LaptopL:grid-cols-1 gap-3 h-full p-5'>
            <div className='flex flex-col ' >
              <h1 className='text-orange-500' ><strong>$521,093</strong> </h1>
              <div className='mt-3 flex gap-2  text-sm' > <BsFillArrowUpRightCircleFill size={25} className='text-orange-500' /> <span className='text-gray-600 '>Ultimos 30 dias</span> </div>

            </div>

            <div className='flex justify-between'>
              <div className='h-14 Tablet:w-36 Laptop:w-20 LaptopL:w-32 flex justify-center '>

                <Line data={dataLine} options={options} />
              </div>
              <div className='flex justify-end'><BiSolidUserCircle size={45} className='text-orange-500' /></div>
            </div>



          </div>
        </div>
        <div className="bg-gradient-to-b from-darkPrimary-500 to-black h-44 rounded-lg">
          <div className='grid grid-cols-2   LaptopL:grid-cols-1 gap-3 h-full p-5'>
            <div className='flex flex-col ' >
              <h1 className='text-red-500' ><strong>$521,093</strong> </h1>
              <div className='mt-3 flex gap-2  text-sm' > <BsFillArrowDownCircleFill size={25} className='text-red-500' /> <span className='text-gray-600 '>Ultimos 30 dias</span> </div>

            </div>

            <div className='flex justify-between'>
              <div className='h-14 w-36 flex justify-center '>

                <Line data={dataLine} options={options} />
              </div>
              <div className='flex justify-end'><BiSolidUserCircle size={45} className='text-red-500' /></div>
            </div>



          </div>
        </div>
        <div className="grid grid-cols-2 row-span-3 gap-6 rounded-lg h-96 ">
          <div className="bg-gradient-to-b from-darkPrimary-500 col-span-2 h-44 rounded-lg">
            <div className='grid grid-cols-2   LaptopL:grid-cols-1 gap-3 h-full p-5'>
              <div className='flex flex-col ' >
                <h1 className='text-green-500' ><strong>$521,093</strong> </h1>
                <div className='mt-3 flex gap-2  text-sm' > <BsFillArrowUpCircleFill size={25} className='text-green-500' /> <span className='text-gray-600 '>Ultimos 30 dias</span> </div>

              </div>

              <div className='flex justify-between'>
                <div className='h-14 w-36 flex justify-center '>

                  <Line data={dataLine} options={options} />
                </div>
                <div className='flex justify-end'><BiSolidUserCircle size={45} className='text-green-500' /></div>
              </div>



            </div>
          </div>
          <div className="bg-gradient-to-b from-darkPrimary-500 rounded-lg h-32">01</div>
          <div className="bg-gradient-to-b from-darkPrimary-500 rounded-lg h-32">01</div>
          <div className="bg-gradient-to-b from-darkPrimary-500 rounded-lg h-32">01</div>
          <div className="bg-gradient-to-b from-darkPrimary-500 rounded-lg h-32">01</div>
          <div className="bg-gradient-to-b from-darkPrimary-500 col-span-2 h-80 rounded-lg">01</div>
          <div className="bg-gradient-to-b from-darkPrimary-500 col-span-2 h-28 pb-5 rounded-lg">01</div>

        </div>

        <div className="bg-gradient-to-b from-darkPrimary-500 col-span-3 h-96 rounded-lg">01</div>


        <div className="bg-gradient-to-b from-darkPrimary-500 col-span-3 h-96 rounded-lg">01</div>






      </div>





      {/* <div className="grid grid-cols-4 Tablet:grid-cols-2 gap-5 mb-4">
        <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
        <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
        <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
        <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
      </div>
      
      <div className="grid grid-cols-4 Tablet:grid-cols-2 gap-5 mb-4">
        <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
        <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
        <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
        <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
      </div>
       */}





      {/* <div className="grid grid-cols-4 h-80 Tablet:grid-cols-2 gap-5">
        <div className="bg-darkPrimary-500 col-span-3 h-80 rounded-lg">01</div>
        <div className="grid h-80 grid-cols-2 gap-5 rounded-lg">
          <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
          <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
          <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
          <div className="bg-darkPrimary-500 h-36 rounded-lg">01</div>
        </div>
      </div> */}




      {/* <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-72 p-5 rounded bg-gray-50 dark:bg-darkSecondary-500">
          <Bar data={dataBar} />
        </div>
        <div className="flex items-center justify-center h-72 rounded bg-gray-50 dark:bg-darkSecondary-500">
          <Line data={dataLine} />
        </div>
        <div className="flex items-center justify-center h-72 rounded bg-gray-50 dark:bg-darkSecondary-500">
          <Line data={dataLine} />
        </div>
        

      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center h-72 p-5 rounded bg-gray-50 dark:bg-darkSecondary-500">
          <Bar data={dataBar} />
        </div>
        <div className="flex items-center justify-center h-72 rounded bg-gray-50 dark:bg-darkSecondary-500">
          <Line data={dataLine} />
        </div>

      </div>
      <div className="grid">
        <div className="flex items-center justify-center h-96  rounded bg-gray-50 dark:bg-darkSecondary-500">
          <Pie data={dataPie} />
        </div>
       

      </div> */}

    </>


  )
}

export default Dashboard