import { useState } from 'react';
import '../../../sass/Bottom.css'
import Chart from "react-apexcharts";
const Bottom = () => {

  const [state, setState] = useState({
    options: {
      colors: ['#01565B', '#5ABA8A'],
      chart: {
        id: 'basic',
        toolbar:{
          show: true,
        }
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
      }
    },

    series: [
      {
        name: 'Jpdates',
        data: [25, 33, 12, 89, 34, 20, 30]
      },
      {
        name: 'New Tasks',
        data: [70, 47, 72, 45, 12, 59, 38]
      },
    ]
  })
  return(
    <div className='Bottom flex'>
        <div className='graphDiv'>
          <span className='title'>All Activities (Graphical View)</span>
          <Chart

            options={state.options}
            series={state.series}
            type='area'
            width='500'
          />
        </div>
    </div>
  )
};

export default Bottom;
