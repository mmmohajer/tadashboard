import React,{useState} from "react";
import { useTable } from "react-table";
import cx from "classnames";
import Dataform from "Components/Dataform";
import Table from "Components/Table";

function Datatable({year,district,field,alldata}){
    const [rowdata,SetRowdata]=useState("") 
     return (
  
    <>
    <div >
        <h1 className="p1 mt-4">Datatable</h1>
        <div className="row ml2 mt-4">
        {year}  {"/"} {district} {"/"} {field}
        </div>
       
    </div>
    
        <div >
            <Table SetRowdata={SetRowdata} alldata={alldata} />
            <Dataform rowdata={rowdata}/>
        </div>
    </>
       
    
    );
    }
    
    export default Datatable;