import React, { useState } from "react";
import cx from "classnames";

import styles from "./App.module.scss";

import Header from "Components/Header";
import AdminNav from "Components/AdminNav";
import Charts from "Components/Charts";
// import Datatable from "Components/Datatable";
import Dashboard from "Components/Dashboard";
function App() {
  const [frame, setFrame] = useState("Dashboard");

  return (
    <>
      <div className="flex pos-rel">
        {/* <Header />  */}
        <div className={cx(styles.adminNavContainer)}>
          
          <AdminNav setFrame={setFrame} />
          
        </div>
        <div className="w-per-100">
          {frame === "Dashboard" && <Dashboard />}
          {frame === "Charts" && <Charts />}
        </div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
