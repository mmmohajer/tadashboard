import React, { useState, Component } from "react";
import cx from "classnames";
import styles from "./Charts.module.scss";
import Card from "Components/Card";
import Barchart from "Components/Chartload/AppChart";
import {
  InspectionMethodsStatus,
  VIStatus,
  VEStatus,
  UTStatus,
} from "Components/Chartload/AppData";
import { Doughnut, Bar, Pie, Line } from "react-chartjs-2";
import { cardContents } from "./utils";

function Charts() {
  const [charttype, setCharttype] = useState("Bar");
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
              <div className="w-max-px-400 ml-auto mr-auto">
                {idx === 0 && (
                  <Barchart charttype={"Bar"} data={InspectionMethodsStatus} />
                )}
                {idx === 1 && <Barchart charttype={"Bar"} data={VIStatus} />}
                {idx === 2 && <Barchart charttype={"Bar"} data={VEStatus} />}
                {idx === 3 && <Barchart charttype={"Bar"} data={UTStatus} />}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Charts;
