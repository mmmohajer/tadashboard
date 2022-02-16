import React from "react";
import cx from "classnames";
import styles from "./Card.module.scss";

function Card({ children,svg, cardHeader, cardFooter }) {
  return (
    <div
      className={cx(
        // "pos-rel",
        "flex",
        "flex--dir--col",
        "bgWhite br-all-solid-1",
        "m1",
        "height-vh-half",
        styles.card
      )}
    >
      <div
        className={cx(
          "pt1",
          "pb1",
          "pl2",
          "pr2",
          "mb0",
          "br-bottom-solid-1",
         
          styles.cardheader
        )}
      >
        {svg}
        {cardHeader}
      </div>
      <div className={cx("p1", styles.cardbody)}>{children}</div>
      {/* <div
        className={cx(
          "pt1",
          "pb1",
          "pl2",
          "pr2",
          "br-bottom-solid-1",
          styles.cardfooter
        )}
      >
        {cardFooter}
      </div> */}
    </div>
  );
}

export default Card;
