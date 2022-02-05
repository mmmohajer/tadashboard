import React from "react";
import cx from "classnames";

import styles from "./App.module.scss";

import Header from "Components/Header";
import AdminNav from "Components/AdminNav";

function App() {
  const list = ["Table", "Dashboard", "Charts"];

  return (
    <>
      <div>
        <Header NavList={list} />
        <AdminNav />
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
