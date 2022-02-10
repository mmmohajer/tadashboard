import React from "react";
import cx from "classnames";
import Card from "Components/Card";
import Barchart from "Components/Chartload/Barchart";
import { InspectionMethodsStatus,VIStatus,VEStatus,UTStatus} from "Components/Chartload/ChartData";
import { cardContents1 } from "./utils";

function dashboard() {
  return (
    <>
      <h1 className="p2 mt-4">Dashboard</h1>
     
      <div className="p2 pt6 row ">
        {cardContents1.map((content, idx) => (
          <div className="row--12 row--sm--12 row--md--6 row--lg--6 ">
            <Card
              key={idx}
              cardHeader={content.Header}
              cardFooter={content.Footer}
            >
              <>
                {idx === 0 && <Barchart charttype={"Pie"} data={InspectionMethodsStatus}/>}
                {idx === 1 && <Barchart charttype={"Pie"} data={VIStatus}/>}
                {idx === 2 && <Barchart charttype={"Pie"} data={VEStatus}/>}
                {idx === 3 && <Barchart charttype={"Pie"} data={UTStatus}/>}
              </>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default dashboard;
