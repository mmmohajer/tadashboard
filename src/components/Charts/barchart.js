import React  from "react";
import {Chart as ChartJS} from 'chart.js/auto'
import { Bar,Pie } from 'react-chartjs-2';







const Barchart= ()=> {
  


    return (
     <div>
      <Pie
          data={{
            labels: ["Innitiated", "Not Started1", "Canceled", "Completed"],
            datasets:[
              {
                label:["Innitiated", "Not Started1", "Canceled", "Completed"],
                data:[12.21, 4, 11.25, 50],
                backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
              }
            ]
          }}
          width={80}
          height={40}
          
     /> 
     </div>
     
    );
       
  }

    export default Barchart;