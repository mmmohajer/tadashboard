import React ,{Component} from "react";
import cx from "classnames";
const inspectionstatus = ["Started", "Completed", "Not Started","Canceled"];

function Inspectionstatus({ children, cardHeader, cardFooter }) {
    return (
        <>
        
        <div class="row mb-2">
                <label  for="opendate" class="col-sm-2 col-form-label"> Inspection Status:</label>
                <div class="col-sm-2">
                    <select name="tublarinsstatus" class="form-control ml2">
                    {inspectionstatus.map((item, idx) => (
                        <option key={idx} >
                            {item}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
        </>
    );
}
export default Inspectionstatus;