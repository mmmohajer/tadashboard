import React from "react";
import cx from "classnames";
import styles from "./Dataform.module.scss";
import Datacard from "Components/Datacard";
import { datacardContents } from "./utils";
import Generaldata from "./Generaldata";
import History from "./History";
import Inspectionstatus from "./Inspectionstatus";
import Requiredinspections from "./Requiredinspections";
import Image from "./Image";


function Dataform({rowdata}) {
  return (
    <>
      <div className="p2 pt6 row">
        <button type="submit" className={cx(styles.formbutton,"w-per-20")}>Save</button>
        {datacardContents.map((content, idx) => (
          <div  key={idx} className="row--12 row--sm--12 row--md--12 row--lg--12 ">
            <Datacard
             
              cardHeader={content.Header}
              cardFooter={content.Footer}
            >
              <>
                {idx === 0 && <Image rowdata={rowdata}/>}
                {idx === 1 && <Generaldata rowdata={rowdata}/>}
                {idx === 2 && <History rowdata={rowdata}/>}
                {idx === 3 && (
                  <div className="w-per-100 of-x-auto">
                    <Requiredinspections rowdata={rowdata}/>
                  </div>
                )}
                {idx === 4 && <Inspectionstatus rowdata={rowdata}/>}
              </>
            </Datacard>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dataform;
