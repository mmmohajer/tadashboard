import React from "react";
import cx from "classnames";

import styles from "./App.module.scss";

import Header from "Components/Header";
import AdminNav from "Components/AdminNav";
import Charts from "Components/Charts";
import Datatable from "Components/Datatable";
import Dashboard from "Components/Dashboard";
function App() {
  const list = ["DataTable", "Dashboard", "Charts"];

  return (
    <>
      <div>
       {/* <Header />  */}
        <AdminNav />
        <Charts />
        <Datatable />
        <Dashboard />
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
