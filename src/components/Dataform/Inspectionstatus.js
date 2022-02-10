import React, { Component } from "react";
import cx from "classnames";
import styles from "./Dataform.module.scss";
const inspectionstatus = [
  "",
  "Started",
  "Completed",
  "Not Started",
  "Canceled",
];
const importantdates = [
  "Inspection Completion Date",
  "Cleaning Date",
  "Opening Date",
];

function Inspectionstatus() {
<<<<<<< HEAD
    return (
        <>
            <div className="row mb1">
                    <div className="col-sm-3">
                        <label  for="opendate" className="col-sm-2 col-form-label"> Inspection Status:</label>
                    </div>
                    <div className="col-sm-2">
                        <select className={cx(styles.formcontrol)} name="inspectionstatus">
                        {inspectionstatus.map((item, idx) => (
                            <option key={idx} >
                                {item}
                            </option>
                        ))}
                        </select>
                    </div>
            </div>

            {importantdates.map((item1,idx1)=>(
                <div key={idx1} className="row mb1">
                    <div class="col-sm-3">
                        <label for={item1} >{item1}</label>
                    </div>
                    <div class="col-sm-2">
                    <input  className={cx(styles.formcontrol,"p1")} type="Date"  ></input>
                    </div>
                </div>

=======
  return (
    <>
      <div className="row mb1 flex--ai--center">
        <div className="row--12 row--sm--12 row--md--4 row--lg--4">
          <label for="opendate" className="col-sm-2 col-form-label">
            {" "}
            Inspection Status:
          </label>
        </div>
        <div className="row--12 row--sm--12 row--md--8 row--lg--8">
          <select className={cx(styles.formcontrol)} name="inspectionstatus">
            {inspectionstatus.map((item, idx) => (
              <option key={idx}>{item}</option>
>>>>>>> 817d6ec94d37b6b1149d3e7645418aee607bf007
            ))}
          </select>
        </div>
      </div>

      {importantdates.map((item1, idx1) => (
        <div className="row mb1 flex--ai--center">
          <div class="row--12 row--sm--12 row--md--4 row--lg--4">
            <label for={item1}>{item1}</label>
          </div>
          <div class="row--12 row--sm--12 row--md--8 row--lg--8">
            <input
              key={idx1}
              className={cx(styles.formcontrol, "p1")}
              type="Date"
            ></input>
          </div>
        </div>
      ))}
    </>
  );
}
export default Inspectionstatus;
