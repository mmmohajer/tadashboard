import React from "react";
import cx from "classnames";
import styles from "./Charts.module.scss";

function Charts(){
return (
    <>
<h1 class="p2 mt-4">Charts</h1>
<div className="p2 pt6 row ">
    <div className="m1 row--12 row--sm--12 row--md--6 row--lg--5">
        <div className="card">
            <div className="cardheader">
                <i class="fas fa-chart-bar me-1"></i>
                Inspection Methods Status
            </div>
            <div className="cardbody">
                <convas id="VEPieChart" width="100%" height="50"></convas>
                Graph
            </div>
            
        </div>
    </div>

    <div className="m1 row--12 row--sm--12 row--md--6 row--lg--5">
        <div className="card">
            <div className="cardheader">VI Status</div>
            <div className="cardbody">
                <convas id="VEPieChart" width="100%" height="50"></convas>
                Graph
            </div>
            
        </div>
    </div>
    <div className="m1 row--12 row--sm--12 row--md--6 row--lg--5">
        <div className="card">
            <div className="cardheader">VE Status</div>
            <div className="cardbody">
                <convas id="VEPieChart" width="100%" height="50"></convas>
                Graph
            </div>
            
        </div>
    </div>
    <div className="m1 row--12 row--sm--12 row--md--6 row--lg--5">
        <div className="card">
            <div className="cardheader">UT Status</div>
            <div className="cardbody">
                <convas id="VEPieChart" width="100%" height="50"></convas>
                Graph
            </div>
            
        </div>
    </div>
</div>
</>
);
}

export default Charts;