'use client'
import React, { useState } from 'react'
import { Bar, Line, Radar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';

Chart.register(...registerables);
const Dashboard = () => {

  const [hovered, setHovered] = useState(false);
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

  const options2 = {
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
        label: 'Libranzas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#1799b8', '#20dab3', '#0092ff', '#a577ef', '#ff57b7'],
        hoverBackgroundColor: ['#107289', '#15856d', '#015fa5', '#6b4d9c', '#c12b81'],
        //  backgroundColor: ['rgba(75,192,192,0.2)'],

        // borderColor: ['rgba(75,192,192,1)'],
        borderWidth: 0,
        borderRadius: 20
      }
    ],
  };
  const dataLine = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
      {
        label: 'Ventas',

        data: [34, 19, 30, 45, 2],
        backgroundColor: ['#1799b8', '#20dab3', '#0092ff', '#a577ef', '#ff57b7'],
        hoverBackgroundColor: ['#107289', '#15856d', '#015fa5', '#6b4d9c', '#c12b81'],
        //  backgroundColor: ['rgba(75,192,192,0.2)'],

        borderColor: ['rgba(75,192,192,1)'],
        borderWidth: 3,
      }
    ]
  };
  const dataLine2 = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio'],
    datasets: [
      {
        label: 'Ventas',

        data: [34, 19, 30, 45, 22,98,37],
        backgroundColor: ['#1799b8', '#20dab3', '#0092ff', '#a577ef', '#ff57b7'],
        // hoverBackgroundColor: ['#107289', '#15856d', '#015fa5', '#6b4d9c', '#c12b81'],
        //  backgroundColor: ['rgba(75,192,192,0.2)'],

        fill: true,
        // borderColor: ['rgba(75,192,192,1)'],
        borderWidth: 0,
        borderRadius: 20,
        hoverborderRadius: 20,
        pointRadius:hovered?2:0,
        pointHitRadius: 0,
        borderSkipped: false,
        

        
      }
    ]
  };
  const dataPie = {
    labels: ['Enero', 'Febrero', 'Marzo'],
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#1799b8', '#20dab3', '#0092ff', '#a577ef', '#ff57b7'],
        hoverBackgroundColor: ['#107289', '#15856d', '#015fa5', '#6b4d9c', '#c12b81'],
        //  backgroundColor: ['rgba(75,192,192,0.2)'],

        // borderColor: ['rgba(75,192,192,1)'],
        borderWidth: 0,
       

      }
    ],
  };




  return (
    <>
      {/* <div className="flex items-center justify-center pl-2 h-12 mb-4 rounded text-white bg-primary-500 dark:bg-darkSecondary-500">
        <h1> <strong> INICIO</strong></h1>
      </div> */}


      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-4 MobileL:grid-cols-1 Laptop:grid-cols-2 gap-6">
          <div className="border-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-44 rounded-lg">
            <div className='grid grid-cols-1  LaptopL:grid-cols-1 gap-3 h-full p-5 '>
              <div className='flex flex-col ' >
                <h1 className='text-green-500' ><strong>$521,093</strong> </h1>
                <div className='mt-3 flex gap-2  text-sm' > <BsFillArrowUpCircleFill size={25} className='text-green-500' /> <span className='text-gray-600 '>Ultimos 30 dias</span> </div>

              </div>

              <div className='flex justify-between'>
                <div className='h-14 w-36 MobileL:h-16 MobileL:w-44  sm:w-20  md:w-44 lg:w-20 flex justify-center '>

                  <Line data={dataLine} options={options} className='' />
                </div>
                <div className='flex justify-end'><BiSolidUserCircle className='text-green-500 h-12 w-12 MobileL:h-16  MobileL:w-16 ' /></div>
              </div>



            </div>
          </div>
          <div className="border-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-44 rounded-lg">
            <div className='grid grid-cols-1  LaptopL:grid-cols-1 gap-3 h-full p-5 '>
              <div className='flex flex-col ' >
                <h1 className='text-green-500' ><strong>$521,093</strong> </h1>
                <div className='mt-3 flex gap-2  text-sm' > <BsFillArrowUpCircleFill size={25} className='text-green-500' /> <span className='text-gray-600 '>Ultimos 30 dias</span> </div>

              </div>

              <div className='flex justify-between'>
                <div className='h-14 w-36 MobileL:h-16 MobileL:w-44  sm:w-20  md:w-44 lg:w-20 flex justify-center '>

                  <Line data={dataLine} options={options} className='' />
                </div>
                <div className='flex justify-end'><BiSolidUserCircle className='text-green-500 h-12 w-12 MobileL:h-16  MobileL:w-16 ' /></div>
              </div>



            </div>
          </div>
          <div className="border-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-44 rounded-lg">
            <div className='grid grid-cols-1  LaptopL:grid-cols-1 gap-3 h-full p-5 '>
              <div className='flex flex-col ' >
                <h1 className='text-green-500' ><strong>$521,093</strong> </h1>
                <div className='mt-3 flex gap-2  text-sm' > <BsFillArrowUpCircleFill size={25} className='text-green-500' /> <span className='text-gray-600 '>Ultimos 30 dias</span> </div>

              </div>

              <div className='flex justify-between'>
                <div className='h-14 w-36 MobileL:h-16 MobileL:w-44  sm:w-20  md:w-44 lg:w-20 flex justify-center '>

                  <Line data={dataLine} options={options} className='' />
                </div>
                <div className='flex justify-end'><BiSolidUserCircle className='text-green-500 h-12 w-12 MobileL:h-16  MobileL:w-16 ' /></div>
              </div>



            </div>
          </div>
          <div className="border-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-44 rounded-lg">
            <div className='grid grid-cols-1  LaptopL:grid-cols-1 gap-3 h-full p-5 '>
              <div className='flex flex-col ' >
                <h1 className='text-green-500' ><strong>$521,093</strong> </h1>
                <div className='mt-3 flex gap-2  text-sm' > <BsFillArrowUpCircleFill size={25} className='text-green-500' /> <span className='text-gray-600 '>Ultimos 30 dias</span> </div>

              </div>

              <div className='flex justify-between'>
                <div className='h-14 w-36 MobileL:h-16 MobileL:w-44  sm:w-20  md:w-44 lg:w-20 flex justify-center '>

                  <Line data={dataLine} options={options} className='' />
                </div>
                <div className='flex justify-end'><BiSolidUserCircle className='text-green-500 h-12 w-12 MobileL:h-16  MobileL:w-16 ' /></div>
              </div>



            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 MobileL:grid-cols-1 Laptop:grid-cols-2 gap-6">

          <div className="grid grid-cols-2 gap-6 col-span-3  dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-full rounded-lg">

            <div className='border-2 rounded-lg col-span-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 h-96 dark:to-black '>
              <Bar data={dataBar} className='' />
              </div>
          </div>
          <div className="grid grid-cols-2 gap-6  dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-full rounded-lg">

            <div className='border-2 rounded-lg col-span-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 h-auto dark:to-black'>
              <Pie data={dataPie} className='' />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 MobileL:grid-cols-1 Laptop:grid-cols-2 gap-6">

          <div className="border-2 MobileL:col-span-1 Laptop:col-span-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-60 flex flex-col rounded-lg">
            <div className=''>title</div>
            <div className='h-full w-full flex items-end rounded-lg' ><Line data={dataLine2} options={options2} className={`rounded-lg`}  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} /></div>
            
          </div>
          <div className="border-2 MobileL:col-span-1 Laptop:col-span-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-60 flex flex-col rounded-lg">
            <div className=''>title</div>
            <div className='h-full w-full flex items-end rounded-lg' ><Line data={dataLine2} options={options2} className={`rounded-lg`}  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} /></div>
            
          </div>
          <div className="border-2 MobileL:col-span-1 Laptop:col-span-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-60 flex flex-col rounded-lg">
            <div className=''>title</div>
            <div className='h-full w-full flex items-end rounded-lg' ><Line data={dataLine2} options={options2} className={`rounded-lg`}  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} /></div>
            
          </div>
          <div className="border-2 MobileL:col-span-1 Laptop:col-span-2 border-gray-200 dark:border-0 dark:bg-gradient-to-b dark:from-darkPrimary-500 dark:to-black h-60 flex flex-col rounded-lg">
            <div className=''>title</div>
            <div className='h-full w-full flex items-end rounded-lg' ><Line data={dataLine2} options={options2} className={`rounded-lg`}  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} /></div>
            
          </div>

        </div>
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