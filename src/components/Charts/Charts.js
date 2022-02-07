import React from "react";
import cx from "classnames";
import styles from "./Charts.module.scss";

function Charts(){
return (
    <>
<h1 class="p2 mt-4">Charts</h1>
<div className="p2 pt6 row ">
    <div className="m1 row--12 row--sm--12 row--md--6 row--lg--5 height-vh-half ">
        <div className={cx(styles.card)} >
            <div className={cx(styles.cardheader)}>Inspection Methods Status</div>
            <div className={cx(styles.cardbody)}>Graph</div>
            <div className={cx(styles.cardfooter)}>Updated at 2022</div>
        </div>
    </div>

    <div className="m1 row--12 row--sm--12 row--md--6 row--lg--5 height-vh-half ">
        <div className="card">
            <div className="cardheader">Inspection Methods Status</div>
            <div className="cardbody">Graph</div>
            <div className="cardfooter">Updated at 2022</div>
        </div>
    </div>
    <div className="m1 row--12 row--sm--12 row--md--6 row--lg--5 height-vh-half ">
        <div className="card">
            <div className="cardheader">Inspection Methods Status</div>
            <div className="cardbody">Graph</div>
            <div className="cardfooter">Updated at 2022</div>
        </div>
    </div>
    <div className="m1 row--12 row--sm--12 row--md--6 row--lg--5 height-vh-half ">
        <div className="card">
            <div className="cardheader">Inspection Methods Status</div>
            <div className="cardbody">Graph</div>
            <div className="cardfooter">Updated at 2022</div>
        </div>
    </div>
</div>
</>
);
}

export default Charts;