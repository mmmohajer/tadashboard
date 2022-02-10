import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

const AppChart = ({ charttype, data }) => {
  return (
    <div>
      {charttype === "Pie" && <Pie data={data} width={80} height={40} />}
      {charttype === "Bar" && <Bar data={data} width={80} height={40} />}
    </div>
  );
};

export default AppChart;
