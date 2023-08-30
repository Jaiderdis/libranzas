'use client'
import React from 'react'
import { Bar ,Line,Radar,Pie} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
const Dashboard = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };


  return (
    <>
      <div className="flex items-center justify-center pl-2 h-12 mb-2 rounded text-white bg-cyan-800 dark:bg-gray-800">
        <h1> <strong> INICIO</strong></h1>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="flex items-center justify-center h-72 rounded bg-gray-50 dark:bg-gray-800">
          <Bar data={data} />
        </div>
        <div class="flex items-center justify-center h-72 rounded bg-gray-50 dark:bg-gray-800">
          <Line data={data} />
        </div>

      </div>
      <div class="grid">
        <div class="flex items-center justify-center h-96  rounded bg-gray-50 dark:bg-gray-800">
          <Pie data={data} />
        </div>
       

      </div>
     
    </>


  )
}

export default Dashboard