import React,{useState,useEffect} from "react";
import axios from "axios";
import Calender from "Images/js-images/icons/svg/calender.svg";
import Cretright from "Images/js-images/icons/svg/caretright.svg";
import Cretdown from "Images/js-images/icons/svg/caretdown.svg";
import Dashboard from "Components/Dashboard";
import dashboard from "../Dashboard/Dashboard";
import cx from "classnames"
import  "./Treeview.module.scss";


const years = [2022, 2023];
const Districtslist = [
{id:1, District_Name:'GP Central',ta_year:2022},
{id:2, District_Name:'Medicin Hat',ta_year:2023},
{id:3, District_Name:'FSJ North',ta_year:2023}
];

const Fieldlist = [
  {id:1, district_id:1, field_name:'Teepee Gas 1885'},
  {id:2, district_id:1, field_name:'PUSKWA'}];




function TreeView({setYear,setDistrict,setField}) {
  const [districtid,setDistrictid]=useState(1);
  const [fieldid,setFieldid]=useState(1);


  const treeViewYearClickHandler = (e) => {
    e.target.nextElementSibling.classList.toggle("no-display");
    setYear(e.target.getAttribute("data-value"));
    setDistrictid(0);
    setFieldid(0);
    setDistrict("");
    setField("");
  };

  const treeViewDistrictClickHandler = (e) => {
    e.target.nextElementSibling.classList.toggle("no-display");
    setDistrict(e.target.getAttribute("data-value"));
    setDistrictid(e.target.getAttribute("district_id"));
    setField("");
    setFieldid(0);
   
  };

  const treeViewFieldClickHandler = (e) => {
    // e.target.nextElementSibling.classList.toggle("no-display");
    setField(e.target.getAttribute("data-value"));
    setFieldid(e.target.getAttribute("field_id"));
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
            {Districtslist.map((item) => (
              <>
              {Number(item.ta_year) === Number(year) && (
              <div key={item.id} className="">
                <div
                  className="ml2 mb1 mouse-hand hover-text-primary"
                  onClick={treeViewDistrictClickHandler}
                  data-value={item.District_Name}
                  district_id={item.id}
                >
                   {<Cretright/>}
                  {item.District_Name}

                  <div className="no-display">
                    {Fieldlist.map((item1) => (
                      <>
                      {Number(item1.district_id) === Number(item.id) && (
                      <div  className="">
                        <div
                          key={item1.id}
                          className="ml4 mb1 mouse-hand hover-text-primary"
                          onClick={treeViewFieldClickHandler}
                          data-value={item1.field_name}
                          field_id={item1.id}
                        >
                          {<Cretright />}
                          {item1.field_name}
                        </div>
                      </div>
                      )}
                      </>
                      ))}
                  </div>
                </div>
              </div>
              )}
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TreeView;
