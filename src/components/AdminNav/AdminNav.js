import React from "react";
import cx from "classnames";

import styles from "./AdminNav.module.scss";

import TreeView from "./subs/TreeView";
import { closeAdminNav } from "Utils/adminNavToggleHandler";

const menuList = ["Dashboard", "Charts", "Datatable"];

function AdminNav({ setFrame }) {
  return (
    <>
<<<<<<< HEAD
      <div className="w-per-20 bgSpecialblue height-vh-full pos-fix flex flex--dir--col flex--jc--start textWhite of-y-auto">
        <div className="p2 f-b fs-px-26">
          CNRL TA  Dahboard
        </div>
        {menuList.map((item, idx) => (
          <div
            key={idx}
            className="p2 f-b mouse-hand w-per-100 hover-text-primary"
            onClick={() => setFrame(item)}
          >
            {item}
=======
      <div
        className="w-px-200 bgSpecialblue height-vh-full pos-fix flex flex--dir--col flex--jc--between textWhite of-y-auto of-x-auto adminNavContainer"
        id="adminNavContainer"
      >
        <div>
          {menuList.map((item, idx) => (
            <div
              key={idx}
              className="p2 f-b mouse-hand w-per-100 hover-text-primary"
              onClick={() => setFrame(item)}
            >
              {item}
            </div>
          ))}
          <div className="mt2 p1 bgBlack f-b br-bottom-solid-1 br-top-solid-1 w-per-100">
            Hierarchy
          </div>
          <TreeView />
        </div>
        <div className="flex flex--dir--col flex--jc--center flex--ai--center">
          <div
            className="w-px-30 height-px-30 bgSilver mb2 br-rad-per-50 flex flex--jc--center flex--ai--center textBlack mouse-hand"
            onClick={closeAdminNav}
          >
            {">"}
          </div>
          <div className="bgSilver w-per-100 text-center p1 textBlack">
            Login as admin
>>>>>>> 817d6ec94d37b6b1149d3e7645418aee607bf007
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNav;
