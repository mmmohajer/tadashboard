import React from "react";
import cx from "classnames";
import Datacard from "Components/Datacard";
import Card from "Components/Card";
import { datacardContents } from "./utils";
// const inspectionstatus = ["Started", "Completed", "Not Started","Canceled"];

function Dataform(){
    return (
    <>
    <h1 className="p2 mt-4">Data</h1>
    <div className="p2 pt6 row ">
      {datacardContents.map((content, idx) => (
        <div className="row--12 row--sm--12 row--md--6 row--lg--6 ">
          <Card
            key={idx}
            cardHeader={content.Header}
            cardFooter={content.Footer}
          >
            <>
              {idx === 0 && <p>Data1</p>}
              {idx === 1 && <p>Data2</p>}
              {idx === 2 && <p>Data3</p>}
              {idx === 3 && <p>Data4</p>}
            </>
          </Card>
        </div>
      ))}
     
    </div>
  </>
);
    }
    
    export default Dataform;