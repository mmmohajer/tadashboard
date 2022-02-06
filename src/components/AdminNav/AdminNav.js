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
          "bgFourth",
          "textBlack",
          "height-vh-full",
          styles.adminNavContainer
        )}
      >
        {menuList.map((item, idx) => (
          <li className="p2 mouse-hand" key={idx}>
            {item}
          </li>
        ))}
        <TreeView />
      </ul>
    </>
  );
}

export default AdminNav;
