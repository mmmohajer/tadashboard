import React from "react";
import cx from "classnames";

import styles from "./AdminNav.module.scss";

const menuList = ["Dashboard", "Charts", "Table"];

import TreeView from "./subs/TreeView";

function AdminNav() {
  return (
    <>
      <ul className="flex flex--dir--col flex--ai--start w-per-20 bgBlack textWhite height-vh-full">
        {menuList.map((item, idx) => (
          <li className="p2" key={idx}>
            {item}
          </li>
        ))}
        <TreeView />
      </ul>
    </>
  );
}

export default AdminNav;
