import React from "react";

const years = ["2022", "2023"];
const areas = { 2022: ["area1", "area2"], 2023: ["area3", "area4"] };
const plants = {
  area1: ["plant1", "plant2"],
  area2: ["plant3", "plant4"],
  area3: ["plant5", "plant6"],
  area4: ["plant7", "plant8"],
};
const locations = {
  plant1: ["location1", "location2"],
  plant2: ["location3", "location4"],
  plant3: ["location5", "location6"],
  plant4: ["location7", "location8"],
  plant5: ["location9", "location10"],
  plant6: ["location11", "location12"],
  plant7: ["location13", "location14"],
  plant8: ["location15", "location16"],
};
function TreeView() {
  const treeViewParentClickHandler = (e) => {
    e.target.nextElementSibling.classList.toggle("no-display");
  };

  return (
    <div className="pl2">
      {years.map((year, yearIdx) => (
        <div key={yearIdx} className="">
          <div className="pb2 mouse-hand" onClick={treeViewParentClickHandler}>
            {year}
          </div>
          <div className="no-display">
            {areas[year].map((area, areaIdx) => (
              <div key={areaIdx} className="">
                <div
                  className="ml2 mb1 mouse-hand"
                  onClick={treeViewParentClickHandler}
                >
                  {area}
                </div>
                <div className="no-display">
                  {plants[area].map((plant, plantIdx) => (
                    <div key={plantIdx} className="">
                      <div
                        className="ml4 mb1 mouse-hand"
                        onClick={treeViewParentClickHandler}
                      >
                        {plant}
                      </div>
                      <div className="no-display">
                        {locations[plant].map((location, locationIdx) => (
                          <div key={locationIdx} className="ml8 mb1 mouse-hand">
                            {location}
                          </div>
                        ))}
                      </div>
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
