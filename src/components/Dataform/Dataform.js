import React from "react";
import cx from "classnames";
import Datacard from "Components/Datacard";
import { datacardContents } from "./utils";
import Generaldata from "./Generaldata";
import Inspectionstatus from "./Inspectionstatus";
import Requiredinspections from "./Requiredinspections";
import Image from "./Image";


function Dataform(){
    return (
    <>
   
    <div className="p2 pt6 row ">
      {datacardContents.map((content, idx) => (
        <div className="row--12 row--sm--12 row--md--6 row--lg--12 ">
          <Datacard
            key={idx}
            cardHeader={content.Header}
            cardFooter={content.Footer}
          >
            <>
              {idx === 0 && <Image / >}
              {idx === 1 && <Generaldata />}
              {idx === 2 && <Requiredinspections />}
              {idx === 3 && <Inspectionstatus />}
            </>
          </Datacard>
        </div>
      ))}
     
    </div>
  </>
);
    }
    
    export default Dataform;