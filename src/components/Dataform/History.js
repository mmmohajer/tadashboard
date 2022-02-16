import React ,{Component} from "react";
import cx from "classnames";
import styles from "./Dataform.module.scss";

function History({rowdata}) {
    return (
        <>
       <div >
       <div className="row mb-2 ">             
                    <label  for="plant" class="col-sm-12 col-form-label"> Previous Inspection History Details</label>
                </div>

                
                <div className="row mb-2 p1"> 
                    <div className="col-sm-12">
                        <input className="form-control" type="text" id="inspectionhistory" name="inspectionhistory" width="800px"></input>
                    </div>
                </div>
        </div>
        </>
    );
}
export default History;