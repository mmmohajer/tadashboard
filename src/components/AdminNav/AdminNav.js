import React,{useState} from "react";
import cx from "classnames";
import styles from "./AdminNav.module.scss";
import TreeView from "Components/Treeview";
import { closeAdminNav } from "Utils/adminNavToggleHandler";
import LeftArrow from "Images/js-images/icons/svg/leftArrow.svg";
import { Scale } from "chart.js";

const menuList = ["Dashboard", "Charts", "Datatable"];
import Chartsvg from "Images/js-images/icons/svg/chart.svg";
import Dashboardsvg from "Images/js-images/icons/svg/dashboard.svg";
import Datatablesvg from "Images/js-images/icons/svg/datatable.svg";


function AdminNav({ setFrame, setYear,setDistrict,setField}) {
  
  return (
    <>
      <div
        className="w-px-200 mt8 bgSpecialblue height-vh-full pos-fix flex flex--dir--col flex--jc--between textWhite of-y-auto of-x-auto adminNavContainer"
        id="adminNavContainer"
      >
        <div>
        
          {menuList.map((item, idx) => (
            <div
              key={idx}
              className="p2 f-b mouse-hand w-per-100 hover-text-primary"
              onClick={() => setFrame(item)}
            >
              {item === "Dashboard" && <Dashboardsvg className="mr1"/>}
              {item === "Charts" && <Chartsvg className="mr1"/>}
              {item === "Datatable" && <Datatablesvg className="mr1"/>}
              {item}
            </div>
          ))}


          <div className="mt2 p1 bgBlack f-b br-bottom-solid-1 br-top-solid-1 w-per-100">
            Hierarchy
          </div>


          <TreeView 
          setYear={setYear}
           setDistrict={setDistrict}
            setField={setField}
             />
        </div>

        <div className="flex flex--dir--col flex--jc--center flex--ai--center">
          {/* <div
            className="w-px-30 height-px-30 bgSilver mb2 br-rad-per-50 flex flex--jc--center flex--ai--center textBlack mouse-hand"
            onClick={closeAdminNav}
          >
            <LeftArrow style={{ transform: "scale(1.25)" }} />
          </div> */}
          
          <div className="bgSilver w-per-100 text-center p1 textBlack">
            Login as admin
          </div>
        </div>

        
      </div>
    </>
  );
}

export default AdminNav;
