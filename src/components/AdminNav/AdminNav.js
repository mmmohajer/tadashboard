import React from "react";
import cx from "classnames";

import styles from "./AdminNav.module.scss";
// import "./AdminNav.scss"

import TreeView from "./subs/TreeView";

const menuList = ["Dashboard", "Charts", "Datatable"];

function AdminNav({ setFrame }) {
  return (
    <>
      <div className="w-per-30 bgSpecialblue height-vh-full pos-fix flex flex--dir--col flex--jc--start textWhite of-y-auto">
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
    </>
  );
}

export default AdminNav;
