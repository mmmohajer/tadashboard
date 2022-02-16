import React, { Component } from "react";
import cx from "classnames";
import styles from "./Datacard.module.scss";

function Datacard({ children, cardHeader, cardFooter }) {
  return (
    <div
      className={cx(
        // "pos-rel",
        "flex",
        "flex--dir--col",
        "bgWhite br-all-solid-1",
        "m1",
        "of-x-auto",
        styles.datacard
      )}
    >
      <div className={cx("pt1","pb1","pl2","pr2","mb0","br-bottom-solid-1",styles.datacardheader)}>
        {cardHeader}
      </div>

      <div className={cx("p2", styles.cardbody)}>{children}</div>

    </div>
  );
}

export default Datacard;
