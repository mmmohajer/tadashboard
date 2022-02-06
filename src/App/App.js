import React from "react";
import cx from "classnames";

import styles from "./App.module.scss";

import AdminNav from "Components/AdminNav";

function App() {
  const list = ["Table", "Dashboard", "Charts"];

  return (
    <>
      <div>
        <AdminNav />
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
