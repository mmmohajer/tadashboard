import React, { Component } from "react";
import cx from "classnames";
import styles from "./Dataform.module.scss";
const generaldatatextinputs_col1 = [
  "Plant",
  "Jur. ID",
  "Asset Type",
  "Description",
];
const generaldatatextinputs_col2 = ["Location", "Asset ID", "test", "test"];

function Generaldata() {
  return (
    <div className="row">
      <div className="row--12 row--sm--12 row--md--5 row--lg--5">
        {generaldatatextinputs_col1.map((item, idx) => (
          <div key={idx} className="row w-per-100 mt1 mb1">
            <div className="row flex--jc--center flex--ai--center">
              <div className="row--12 row--sm--12 row--md--4 row--lg--4">
                {item}
              </div>
              <div className="row--12 row--sm--12 row--md--8 row--lg--8">
                <input className={"w-per-100 br-rad-px-5",cx(styles.formcontrol)} type="text" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row--0 row--sm--0 row--md--2 row--lg--2"></div>
      <div className="row--12 row--sm--12 row--md--5 row--lg--5">
        {generaldatatextinputs_col2.map((item, idx) => (
          <div key={idx} className="row w-per-100 mt1 mb1">
            <div className="row flex--jc--center flex--ai--center">
              <div className="row--12 row--sm--12 row--md--4 row--lg--4">
                {item}
              </div>
              <div className="row--12 row--sm--12 row--md--8 row--lg--8">
                <input className={"w-per-100 br-rad-px-5",cx(styles.formcontrol)} type="text" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Generaldata;
