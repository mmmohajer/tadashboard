import React ,{Component} from "react";
import cx from "classnames";


function Generaldata({ children, cardHeader, cardFooter }) {
    return (
        <>
       
        <div class="row mb-2 p1">                    
                    <label  for="plant" class="col-sm-1 col-form-label"> Plant:</label>
                    <div class="col-sm-2">
                        <input class="form-control" type="text"  id="asset_type" name="" required=""></input>
                    </div>
                    <label  for="plant" class="col-sm-1 col-form-label"> Location:</label>
                    <div class="col-sm-2">
                        <input class="form-control" type="text"  id="description" name="" required=""></input> 
                    </div>
                </div>

                <div class="row mb-2 p1">                    
                    <label  for="plant" class="col-sm-1 col-form-label"> Jur. ID:</label>
                    <div class="col-sm-2">
                        <input class="form-control" type="text"  id="asset_type" name="" required=""></input>
                    </div>
                    <label  for="plant" class="col-sm-1 col-form-label"> Asset ID:</label>
                    <div class="col-sm-2">
                        <input class="form-control" type="text"  id="description" name="" required=""></input> 
                    </div>
                </div>

                <div class="row mb-2 p1 ">                    
                    <label  for="plant" class="col-sm-1 col-form-label"> Asset Type:</label>
                    <div class="col-sm-2">
                        <input class="form-control" type="text"  id="asset_type" name="" required=""></input>
                    </div>
                    <label  for="plant" class="col-sm-1 col-form-label"> Description:</label>
                    <div class="col-sm-2">
                        <input class="form-control" type="text"  id="description" name="" required=""></input> 
                    </div>
                </div>

                <div class="row mb-2 p1 row--lg--10"> 
                    <label  for="plant" class="col-sm-1 col-form-label"> Service:</label>
                    <div class="col-sm-2 ">
                        <select name="service" class="form-control">
                            <option value="Sour">Sour</option>
                            <option value="Sweet">Sweet</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-2 ">             
                    <label  for="plant" class="col-sm-12 col-form-label"> Previous Inspection History Details</label>
                </div>
                <div class="row mb-2 p1"> 
                    <div class="col-sm-12">
                        <input class="form-control" type="text" id="inspectionhistory" name="inspectionhistory" width="800px"></input>
                    </div>
                </div>
        </>
    );
}
export default Generaldata;