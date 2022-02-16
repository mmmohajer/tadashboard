import React, { Component } from "react";
import cx from "classnames";
import styles from "./Dataform.module.scss";

function Image({ children, cardHeader, cardFooter,rowdata }) {
  return (
    <>
      <div className="flex flex--jc--center flex--ai--center">
        <img
          className={cx(styles.img)}
          src="assets/images/html-Images/222.jpg"
        ></img>
      </div>
    </>
  );
}
export default Image;
