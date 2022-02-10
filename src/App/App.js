import React, { useState, Component } from "react";
import cx from "classnames";

import styles from "./App.module.scss";

import Header from "Components/Header";
import AdminNav from "Components/AdminNav";
import Charts from "Components/Charts";
import Datatable from "Components/Datatable";
import Dashboard from "Components/Dashboard";

const App = () => {
  const [frame, setFrame] = useState("Datatable");
  return (
    <>
      <div className="flex w-per-100">
        <div className="w-per-30 bgBlack height-vh-full">
          <AdminNav setFrame={setFrame} />
        </div>
        <div className="w-per-70">
          {frame === "Dashboard" && <Dashboard />}
          {frame === "Charts" && <Charts />}
          {frame === "Datatable" && <Datatable />}
        </div>
      </div>
    </>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       data:{},
//       chartData:{},
//       frame:"Dashboard",
//       searchfield:""

//     };
//   }
//    getChartData(){
//     this.setState.chartData({ labels: ["Innitiated", "Not Started1", "Canceled", "Completed"],
//     datasets: {label:'Test',data:[12.21, 4, 11.25, 50]},
//    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745']});
//   }

//   setFrame=(frame)=>
//   {
//     this.setState({frame:frame})
//   }

//   // onsearchchange=(event)=>{
//   //   this.setState({searchfield:event.target.value})

//   // }

//   render () {

//     // const filtereddata=this.state.data.filter(data=>{
//     //   return data.name.tolowerCase().includes(this.state.searchfield.tolowercase());
//     // })

//     // function App() {
//     //   classconst [frame, setFrame] = useState("Dashboard");
//       return (
//         <>
//           <div className="flex pos-rel">
//             {/* <Header />  */}
//             <div className={cx(styles.adminNavContainer)}>

//               <AdminNav setFrame={this.setFrame} />

//             </div>
//             <div className="w-per-100">
//               {this.state.frame === "Dashboard" && <Dashboard />}
//               {this.state.frame === "Charts" && <Charts />}
//               {this.state.frame === "Datatable" && <Datatable />}
//               {/* chartData={this.state.chartData} */}
//             </div>
//           </div>
//           <div className="footer">Footer</div>
//         </>
//       );
//   }
// }

export default App;
