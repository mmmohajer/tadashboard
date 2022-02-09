import React ,{Component} from "react";
import cx from "classnames";
import styles from "./Dataform.module.scss";
const generaldatatextinputs_col1 = ["Plant", "Jur. ID", "Asset Type","Description"];
const generaldatatextinputs_col2 = ["Location", "Asset ID","test","test"];

function Generaldata() {
    return (
        <>
        {generaldatatextinputs_col1.map((item1,idx1)=>(
            <div className="row mb1"  >
                 <div className="col-sm-1_5">
                    <label for={item1}>{item1}</label>
                </div>
                <div className="col-sm-3 ml2">
                     <input className={cx(styles.formcontrol,"col-sm-2")} key={idx1} type="text" name={item1}></input>
                </div>
                {generaldatatextinputs_col2.map((item2,idx2)=>(
                    <div>
                        <div className="col-sm-2 ml2">
                            <label for={item2}>{item2}</label>
                        </div>

                        <div className="col-sm-3 ml2">
                            <input className={cx(styles.formcontrol,"col-sm-2")} key={idx2} type="text" name={item2}></input> 
                        </div>
                    </div>
                ))}
            </div>
        ))}

                           
                  

                <div className="row mb1"  >
                    <div className="col-sm-1_5">
                        <label  for="plant" class="col-sm-1 col-form-label"> Service:</label>
                    </div>
                    <div className="col-sm-3 ml2">
                            <select name="service" class={cx(styles.formcontrol,"col-sm-2")}>
                            <option value=""></option>
                                <option value="Sour">Sour</option>
                                <option value="Sweet">Sweet</option>
                            </select>
                    
                    </div>
                </div>

                
        </>
    );
}
export default Generaldata;