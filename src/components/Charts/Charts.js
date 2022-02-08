import React ,{Component} from "react";
import cx from "classnames";
import styles from "./Charts.module.scss";
import Card from "Components/Card";
import { Doughnut , Bar , Pie , Line } from 'react-chartjs-2';

import { cardContents } from "./utils";




function Charts () {

// constructor(props){
//     super(props); 
//     this.state={
//       chartData:props.chartData  
//       }
//     };
//   }


    const defaultprops={
    displayTitle:false,
    displayLegend:true,
    legendPosition:'right'
    
    }
  return (
    <>
      <h1 className="p2 mt-4">Charts</h1>
      <div className="p2 pt6 row ">
        {cardContents.map((content, idx) => (
          <div className="row--12 row--sm--12 row--md--6 row--lg--6 ">
            <Card
              key={idx}
              cardHeader={content.Header}
              cardFooter={content.Footer}
            >
              <>
                {idx === 0 && <p>Grapph1</p>}
                {idx === 1 && <p>Graph2</p>}
                {idx === 2 && <p>Graph3</p>}
                {idx === 3 && <p>Graph4</p>}
              </>
            </Card>
          </div>
        ))}
        {/* <Bar>
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
        </Bar> */}
      </div>
    </>
  );
}

export default Charts;
