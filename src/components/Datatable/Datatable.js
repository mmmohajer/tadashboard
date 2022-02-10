import React from "react";
import { useTable } from "react-table";
import cx from "classnames";
import Dataform from "Components/Dataform";
import Table from "Components/Table";

function Datatable(){
   
     return (
  
    <>
    <div>
    <h1 class="p2 mt-4">Datatable</h1>
    </div>
    
        <div>
            <Table />
            <Dataform />
        </div>
    </>
       
    
    );
    }
    
    export default Datatable;