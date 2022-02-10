import React from "react";
import cx from "classnames";
import Card from "Components/Card";
import Appchart from "Components/Chartload/AppChart";
import {
  InspectionMethodsStatus,
  VIStatus,
  VEStatus,
  UTStatus,
} from "Components/Chartload/AppData";
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
              <div className="w-max-px-400 ml-auto mr-auto">
                {idx === 0 && (
                  <Appchart charttype={"Pie"} data={InspectionMethodsStatus} />
                )}
                {idx === 1 && <Appchart charttype={"Pie"} data={VIStatus} />}
                {idx === 2 && <Appchart charttype={"Pie"} data={VEStatus} />}
                {idx === 3 && <Appchart charttype={"Pie"} data={UTStatus} />}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default dashboard;
