import React from "react";
import cx from "classnames";

import styles from "./AdminNav.module.scss";

const menuList = ["Dashboard", "Charts", "Table"];

import TreeView from "./subs/TreeView";

function AdminNav() {
  return (
    <>
      <ul
        className={cx(
          "flex",
          "flex--dir--col",
          "flex--ai--start",
          "w-per-20",
          "bgPurple",
          "textBlack",
          "height-vh-full",
          styles.adminNavContainer
        )}
      >
        {menuList.map((item, idx) => (
          <li className="p2 mouse-hand hover-text-white" key={idx}>
            {item}
          </li>
        ))}
        <div className="mt-2 p2 bg-red f-b">
          Hierarchy
          <hr></hr>
          </div>
        <TreeView />
      </ul>
    </>
  );
}

export default AdminNav;
