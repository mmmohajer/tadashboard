import React from "react";

const years = ["2022", "2023"];
const Districts = { 2022: ["GPCentral"], 2023: ["MEDICINEHAT","FSJNorth"] };
const Fields = {
  GPCentral: ["TEEPEEGAS1885", "PUSKWA"],
  MEDICINEHAT: ["HAYS1131"],
  FSJNorth: ["WESTSTODDART"],
};
// const locations = {
//   TEEPEEGAS1885: ["location1", "location2"],
//   PUSKWA: ["location3", "location4"],
//   plant3: ["location5", "location6"],
//   plant4: ["location7", "location8"],
//   plant5: ["location9", "location10"],
//   plant6: ["location11", "location12"],
//   plant7: ["location13", "location14"],
//   plant8: ["location15", "location16"],
// };
function TreeView() {
  const treeViewParentClickHandler = (e) => {
    e.target.nextElementSibling.classList.toggle("no-display");
  };

  return (
    <div className=" w-per-100">
      {years.map((year, yearIdx) => (
        <div key={yearIdx} className="">
          <div className="p1 w-per-100 mouse-hand hover-text-primary" onClick={treeViewParentClickHandler}>
            {year}
          </div>
          <div className="no-display mouse-hand hover-text-primary">
            {Districts[year].map((district, districtIdx) => (
              <div key={districtIdx} className="">
                <div
                  className="ml2 mb1 mouse-hand hover-text-primary"
                  onClick={treeViewParentClickHandler}
                >
                  {district}
                </div>
                <div className="no-display">
                  {Fields[district].map((field, fieldIdx) => (
                    <div key={fieldIdx} className="">
                      <div
                        className="ml4 mb1 mouse-hand"
                        onClick={treeViewParentClickHandler}
                      >
                        {field}
                      </div>
                      {/* <div className="no-display">
                        {locations[field].map((location, locationIdx) => (
                          <div key={locationIdx} className="ml8 mb1 mouse-hand">
                            {location}
                          </div>
                        ))}
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TreeView;
