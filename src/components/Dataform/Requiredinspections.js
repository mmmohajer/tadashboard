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
const inspectionmethods = [
  "VE",
  "VI",
  "UT",
  "AUT",
  "Ex. MT",
  "Int. MT",
  "PT",
  "Tublar",
  "Hydrotest",
];

function Requiredinspections() {
  return (
    <div className={cx(styles.inspectionCardContainer)}>
      <div class="row mb1">
        <div class="col-sm-2">Inspection Method</div>
        <div class="col-sm-3  ml1">Scope</div>
        <div class="col-sm-1_5  ml1">Status</div>
        <div class="col-sm-2  ml1">Completion Date</div>
        <div class="col-sm-3  ml1">Note</div>
      </div>
      <hr></hr>
      <br></br>
      {inspectionmethods.map((item, idx) => (
        <div class="row mb1 flex--jc--center flex--ai--center">
          <div className="col-sm-2">
            <input key={idx} type="checkbox"></input>
            <label className="ml1" for="VE">
              {item}
            </label>
          </div>

          <div className="col-sm-3 ml1">
            <input
              class={cx(styles.formcontrol)}
              type="text"
              id="VIdes"
              name="VI"
            ></input>
          </div>

          <div className="col-sm-1_5 ml1">
            <select name="vistatus" class={cx(styles.formcontrol)}>
              {inspectionstatus.map((item, idx) => (
                <option key={idx}>{item}</option>
              ))}
            </select>
          </div>
          <div className="col-sm-2 ml1">
            <input
              className={cx(styles.formcontrol, "p1")}
              type="Date"
              name="inscompdate"
            ></input>
          </div>
          <div className="col-sm-3 ml1">
            <input
              className={cx(styles.formcontrol)}
              type="text"
              name="Notes"
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Requiredinspections;
