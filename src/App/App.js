import React, { useState, Component } from "react";
import cx from "classnames";

import styles from "./App.module.scss";

import Header from "Components/Header";
import AdminNav from "Components/AdminNav";
import Charts from "Components/Charts";
// import Datatable from "Components/Datatable";
import Dashboard from "Components/Dashboard";

class App extends Component {
  constructor(props)= {
    super(props); 
    this.state={
      chartData:{},
      frame:Dashboard

    };
  }
   getChartData(){
    this.setState({ labels: ["Innitiated", "Not Started1", "Canceled", "Completed"],
    datasets: {label:'Test',data:[12.21, 4, 11.25, 50]},
   backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745']});
  }

  render () {
    // function App() {
    //   classconst [frame, setFrame] = useState("Dashboard");
      return (
        <>
          <div className="flex pos-rel">
            {/* <Header />  */}
            <div className={cx(styles.adminNavContainer)}>
              
              {/* <AdminNav setFrame={setFrame} /> */}
              <AdminNav setFrame={this.state.frame} />
              
            </div>
            <div className="w-per-100">
              {frame === "Dashboard" && <Dashboard />}
              {frame === "Charts" && <Charts />}
              {/* chartData={this.state.chartData} */}
            </div>
          </div>
          <div className="footer">Footer</div>
        </>
      );
  }
}




export default App;
