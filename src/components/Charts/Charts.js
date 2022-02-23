import React, { useState, Component } from "react";
import cx from "classnames";
import styles from "./Charts.module.scss";
import Card from "Components/Card";
import Appchart from "Components/Chartload/AppChart";
import Piechartsvg from "Images/js-images/icons/svg/piechart.svg";

import {
  Barchartoptions,
  Piechartoptions,
  InspectionMethodsStatus,
  VIStatus,
  VEStatus,
  UTStatus,
} from "Components/Chartload/AppData";
import { Doughnut, Bar, Pie, Line } from "react-chartjs-2";
import { cardContents } from "./utils";

function Charts({ year, district, field }) {
  const [charttype, setCharttype] = useState("Bar");
  return (
    <>
      <h1 className="p1 mt-4">Charts</h1>
      <div className="row ml2 mt-4">
        {year} {"/"} {district} {"/"} {field}
      </div>
      <div className="p2 row ">
        {cardContents.map((content, idx) => (
          <div key={idx} className="row--12 row--sm--12 row--md--6 row--lg--6 ">
            <Card
              svg={<Piechartsvg className="mr1" />}
              cardHeader={content.Header}
              cardFooter={content.Footer}
            >
              <div className="w-max-px-400 ml-auto mr-auto">
                {idx === 0 && (
                  <Appchart
                    charttype={"Bar"}
                    setCharttype={setCharttype}
                    data={InspectionMethodsStatus}
                    options={Barchartoptions}
                  />
                )}
                {idx === 1 && (
                  <Appchart
                    charttype={"Pie"}
                    setCharttype={setCharttype}
                    data={VIStatus}
                    options={Piechartoptions}
                  />
                )}
                {idx === 2 && (
                  <Appchart
                    charttype={"Pie"}
                    setCharttype={setCharttype}
                    data={VEStatus}
                    options={Piechartoptions}
                  />
                )}
                {idx === 3 && (
                  <Appchart
                    charttype={"Pie"}
                    setCharttype={setCharttype}
                    data={UTStatus}
                    options={Piechartoptions}
                  />
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Charts;
