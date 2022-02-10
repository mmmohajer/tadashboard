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

function Dataform() {
  return (
    <>
      <div className="p2 pt6 row">
        {datacardContents.map((content, idx) => (
          <div className="row--12 row--sm--12 row--md--12 row--lg--12 ">
            <Datacard
              key={idx}
              cardHeader={content.Header}
              cardFooter={content.Footer}
            >
              <>
                {idx === 0 && <Image />}
                {idx === 1 && <Generaldata />}
                {idx === 2 && <History />}
                {idx === 3 && (
                  <div className="w-per-100 of-x-auto">
                    <Requiredinspections />
                  </div>
                )}
                {idx === 4 && <Inspectionstatus />}
              </>
            </Datacard>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dataform;
