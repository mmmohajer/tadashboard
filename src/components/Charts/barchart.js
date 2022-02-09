import React , {Component} from "react";
import { Doughnut , Bar , Pie , Line } from 'react-chartjs-2';


function barchart () {
constructor(props){
    super(props); 
    this.state={
      chartData:props.chartData  
      }
    };
  }

  const defaultprops={
    displayTitle:false,
    displayLegend:true,
    legendPosition:'right'
    
    }

    return (
    <Bar>
          data={this.state.chartData}
          width={100}
          height={50}
          option={{
            maintainAspectRatio:false,
            legend:{
              display:thid.defaultprops.displayLegend,
              position:thid.defaultprops.legendPosition
            }
            }}
    </Bar> 
    )
        }

    export default barchart;