import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

const AppChart = ({ charttype, data, options }) => {
  return (
    <div>
      {charttype === "Pie" && <Pie data={data} width={80} height={40} options={options}/>}
      {charttype === "Bar" && <Bar data={data} width={80} height={40} options={options}/>}
    </div>
  );
};

export default AppChart;
