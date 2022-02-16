import React from "react";
import Calender from "Images/js-images/icons/svg/calender.svg";
import Cretright from "Images/js-images/icons/svg/caretright.svg";
import Cretdown from "Images/js-images/icons/svg/caretdown.svg";
import Dashboard from "Components/Dashboard";
import dashboard from "../../Dashboard/Dashboard";
import cx from "classnames"
import  "../AdminNav.module.scss";
// import styles from "../AdminNav.module.scss";

const years = ["2022", "2023"];

// const Districts=[
//   {id:1,
//   'name':'GP Central',
//   'year':'2022'},
//   {id:2,
//   'name':'MEDICINE HAT',
//   'year':'2023'},
//   {id:3,
//   'name':'FSJ North',
//   'year':'2023'},
// ]

// const Fields=[
//   {id:1,
//     'name':'TEEPEE GAS 1885',
//     'year':'2022',
//     'District_id':1 },
//     {id:2,
//     'name':'PUSKWA',
//     'year':'2022',
//     'District_id':1 },
//     {id:3,
//     'name':'HAYS 1131',
//     'year':'2023',
//     'District_id':2 },
//     {id:3,
//       'name':'WEST STODDART',
//       'year':'2023',
//       'District_id':3 }
// ]


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

;

function TreeView({setYear,setDistrict,setField}) {
  const treeViewYearClickHandler = (e) => {
    e.target.nextElementSibling.classList.toggle("no-display");
    setYear(e.target.getAttribute("data-value"));
    setDistrict("");
    setField("");
  };

  const treeViewDistrictClickHandler = (e) => {
    e.target.nextElementSibling.classList.toggle("no-display");
    setDistrict(e.target.getAttribute("data-value"));
    setField("");
  };

  const treeViewFieldClickHandler = (e) => {
    // e.target.nextElementSibling.classList.toggle("no-display");
    setField(e.target.getAttribute("data-value"));
  };

  return (
    <div className=" w-per-100">
      {years.map((year, yearIdx) => (
        <div key={yearIdx} className="">
          <div 
          className="p1 w-per-100 mouse-hand hover-text-primary treeviewnode" 
          onClick={treeViewYearClickHandler} 
          data-value={year}
          >
          {<Calender  className="mr1"/>}
            {year}
          </div>
          <div className="no-display mouse-hand ">
            {Districts[year].map((district, districtIdx) => (
              <div key={districtIdx} className="">
                <div
                  className="ml2 mb1 mouse-hand hover-text-primary"
                  onClick={treeViewDistrictClickHandler}
                  data-value={district}
                >
                   {<Cretright/>}
                  {district}
                </div>
                <div className="no-display">
                  {Fields[district].map((field, fieldIdx) => (
                    <div key={fieldIdx} className="">
                      <div
                        className="ml4 mb1 mouse-hand hover-text-primary"
                        onClick={treeViewFieldClickHandler}
                        data-value={field}
                      >
                         {<Cretright />}
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
