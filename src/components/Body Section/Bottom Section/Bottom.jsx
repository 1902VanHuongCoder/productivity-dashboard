import { useState } from "react";
import "../../../sass/Bottom.css";
import Chart from "react-apexcharts";
import 'react-icons/bs'
import { BsArrowRightShort } from "react-icons/bs";
const Bottom = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#01565B", "#5ABA8A"],
      chart: {
        id: "basic",
        toolbar: {
          show: true,
          tools: {
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true,
          },
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      },
    },

    series: [
      {
        name: "Jpdates",
        data: [25, 33, 12, 89, 34, 20, 30],
      },
      {
        name: "New Tasks",
        data: [70, 47, 72, 45, 12, 59, 38],
      },
    ],
  });
  return (
    <div className="Bottom flex">
      <div className="graphDiv">
        <span className="title">All Activities (Graphical View)</span>
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          width="500"
        />
      </div>

      <div className="scheduleDiv">
        <span className="title">Upcoming Schedule</span>

        <div className="singleTask  flex">
          <div className="imgDiv flex">
            <img src="./laptop.png" alt="task_image" />
          </div>

          <div className="taskInfo">
            <span className="task">Desk Time Redesign</span>
            <span className="status">Working On</span>
          </div>

          <span className="time">9:30 am</span>
        </div>

        <div className="singleTask  flex">
          <div className="imgDiv flex">
            <img src="./laptop.png" alt="task_image" />
          </div>

          <div className="taskInfo">
            <span className="task">New landing page</span>
            <span className="status">Working On</span>
          </div>

          <span className="time">10:30 am</span>
        </div>

        <div className="singleTask  flex">
          <div className="imgDiv">
            <img src="./laptop.png" alt="task_image" />
          </div>

          <div className="taskInfo">
            <span className="task">Create Animation</span>
            <span className="status">Working On</span>
          </div>

          <span className="time">11:30 am</span>
        </div>

        <div className="btn flex">
          See All
          <BsArrowRightShort className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
