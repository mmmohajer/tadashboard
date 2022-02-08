import React from "react";
import cx from "classnames";

import styles from "./AdminNav.module.scss";

const menuList = ["Dashboard", "Charts", "Data Table"];

import TreeView from "./subs/TreeView";

function AdminNav({ setFrame }) {
  return (
    <>
      <ul
        className={cx(
          "flex",
          "flex--dir--col",
          "flex--ai--start",
          // "w-per-20",
          // "w-min-px-300",
          "bgSpecialblue",
          "textBlue",
          "height-vh-full",
          "pos-fix",
          "pos-fx--lt",
          "overflow-y-auto",
          "textWhite",
          styles.adminNavContainer
        )}
      >
        <div className="flex flex--dir--col flex--jc--between w-per-100  height-vh-full">
        <div>
        <li className="p2 f-b fs-px-26 w-per-100">CNRL TA Dashboard</li>
        {menuList.map((item, idx) => (
          <li
            className="p2 f-b mouse-hand w-per-100 hover-text-primary"
            key={idx}
            onClick={() => setFrame(item)}
          >
            {item}
          </li>
        ))}
        <div className="mt2 p1 bgBlack f-b br-bottom-solid-1 br-top-solid-1 w-per-100 mb2">
          Hierarchy
        </div>
        <TreeView />
        </div>
        </div>
        <div className="p1 w-per-100 bgSilver textPrimary br-bottom-solid-1 br-top-solid-1 ">
          <div className="small">Logged in as:Admin</div>
      </div>
      </ul>
      
    </>
  );
}

export default AdminNav;
