import React from "react";
import cx from "classnames";
import Card from "Components/Card";
import { cardContents1 } from "./utils";

function dashboard() {
  return (
    <>
      <h1 className="p2 mt-4">Dashboard</h1>
     
      <div className="p2 pt6 row ">
        {cardContents1.map((content, idx) => (
          <div className="row--12 row--sm--12 row--md--6 row--lg--6 ">
            <Card
              key={idx}
              cardHeader={content.Header}
              cardFooter={content.Footer}
            >
              <>
                {idx === 0 && <p>Grapph1</p>}
                {idx === 1 && <p>Graph2</p>}
                {idx === 2 && <p>Graph3</p>}
                {idx === 3 && <p>Graph4</p>}
              </>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default dashboard;
