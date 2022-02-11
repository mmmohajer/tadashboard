import React, { useState, Component } from "react";
import cx from "classnames";
import styles from "./Charts.module.scss";
import Card from "Components/Card";
import Appchart from "Components/Chartload/AppChart";
import Piechartsvg from "Images/js-images/icons/svg/piechart.svg";


import {
  Barchartoptions,
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
              svg={<Piechartsvg />}
              cardHeader={content.Header}
              cardFooter={content.Footer}
            >
              <div className="w-max-px-400 ml-auto mr-auto">
                {idx === 0 && <Appchart charttype={"Bar"} data={InspectionMethodsStatus} options={Barchartoptions} />}
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

export default Charts;
