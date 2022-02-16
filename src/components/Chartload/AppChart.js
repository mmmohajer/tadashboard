import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

const AppChart = ({ charttype, data, options,setCharttype }) => {
  return (
    <div>
      {charttype === "Pie" && <Pie data={data} width={400} height={300} options={options}/>}
      {charttype === "Bar" && <Bar data={data} width={400} height={300} options={options}/>}
    </div>
  );
};

export default AppChart;
