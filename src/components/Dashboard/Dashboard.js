import React, {useState} from "react";
import cx from "classnames";
import Card from "Components/Card";
import Appchart from "Components/Chartload/AppChart";
import Piechartsvg from "Images/js-images/icons/svg/piechart.svg";
import {
  Barchartoptions,
  Piechartoptions,
  InspectionMethodsStatus,
  AssetTypeInspectionStatus,
  OveralInspectionStatus,
  RepairStatus
} from "Components/Chartload/AppData";
import { cardContents1 } from "./utils";

function dashboard({year,district,field}) {

  return (
    <>
      <h1 className="p1 mt-4">Dashboard</h1>
      <div className="row ml2 mt-4">
        {year}  {"/"} {district} {"/"} {field}
      </div>

      <div className="p2 row ">
        {cardContents1.map((content, idx) => (
          <div   key={idx} className="row--12 row--sm--12 row--md--6 row--lg--6 ">
            <Card
            
              svg={<Piechartsvg className="mr1"/>}
              cardHeader={content.Header}
              cardFooter={content.Footer}
            >
              <div className="w-max-px-400 ml-auto mr-auto">
                {idx === 0 && (<Appchart charttype={"Bar"} data={AssetTypeInspectionStatus} options={Barchartoptions}/>)}
                {idx === 1 && <Appchart charttype={"Bar"} data={InspectionMethodsStatus} options={Barchartoptions}/>}
                {idx === 2 && <Appchart charttype={"Pie"} data={OveralInspectionStatus} options={Piechartoptions}/>}
                {idx === 3 && <Appchart charttype={"Pie"} data={RepairStatus} options={Piechartoptions}/>}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default dashboard;
