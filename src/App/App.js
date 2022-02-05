import React from "react";
import cx from "classnames";

import Header from "Components/Header";
import styles from "./App.module.scss";

function App() {
  const list = ["Table", "Dashboard", "Charts"];

  return (
    <>
      <div>
        <Header NavList={list} />
        <div className="bgThird w-per-100 height-px-200 bgThird"></div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
