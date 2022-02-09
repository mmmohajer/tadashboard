import React ,{Component} from "react";
import cx from "classnames";
const inspectionstatus = ["Started", "Completed", "Not Started","Canceled"];
const inspectionmethods = ["VE", "VI", "UT","AUT","Ex. MT", "Int. MT", "PT","Tublar","hydro"];

function Requiredinspections({ children, cardHeader, cardFooter }) {
    return (
        <>
        
        <div class="row mb-2"> 
                <div class="col-sm-2"><strong>Inspection Method</strong></div>
                <div class="col-sm-4"><strong>Scope</strong></div>
                <div class="col-sm-1"><strong>Status</strong></div>
                <div class="col-sm-2"><strong>Completion Date</strong></div>
                <div class="col-sm-3"><strong>Note</strong></div>
            </div>

            {inspectionmethods.map((item,idx)=>(
            <div class="row mb-2">  
                    <div class="col-sm-2">
                    <input className={cx("p2")} key={idx} type="checkbox" value={item}></input>
                    <label for="VE">{item}</label>
                    </div>

                    <div class="col-sm-4">
                    <input  class="form-control" type="text" id="VIdes"  name="VI"></input>
                </div>
                <div class="col-sm-1"> 
                    <select name="vistatus" class="form-control ml2">
                    {inspectionstatus.map((item, idx) => (
                        <option key={idx} >
                            {item}
                        </option>
                    ))}
                    </select>
                </div>
                <div class="col-sm-2">
                   <input class="form-control" type="Date" id="inscompdate" name="inscompdate"></input>
                </div>
                <div class="col-sm-3">
                    <input  class="form-control" type="text" id="VIdes"  name="VI"></input>
                </div>
            </div>
            ))} 
        </>
    );
}
export default Requiredinspections;