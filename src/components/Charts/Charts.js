import React ,{Component} from "react";
import cx from "classnames";
import styles from "./Charts.module.scss";
import Card from "Components/Card";
import Barchart from "./Barchart";
import { Doughnut , Bar , Pie , Line } from 'react-chartjs-2';

import { cardContents } from "./utils";




function Charts () {
  
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
                {idx === 0 && <Barchart />}
                {idx === 1 && <Barchart />}
                {idx === 2 && <Barchart />}
                {idx === 3 && <Barchart />}
              </>
            </Card>
          </div>
        ))}
       
      </div>
    </>
  );
}

export default Charts;
