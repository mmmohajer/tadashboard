import React, { useState,useEffect, Component } from "react";
import cx from "classnames";
import axios from "axios";
import styles from "./App.module.scss";

import Header from "Components/Header";
import AdminNav from "Components/AdminNav";
import Charts from "Components/Charts";
import Datatable from "Components/Datatable";
import Dashboard from "Components/Dashboard";
import NavOpener from "Components/AdminNav/NavOpener";
import Login from "Components/Login";

const App = () => {



  const [frame, setFrame] = useState("Dashboard");
  const [Route,setRoute]=useState("loggedin");
  const [currentuser,setCurrentuser]=useState("User")
  const [year,setYear]=useState(2022);
  const [district,setDistrict]=useState("");
  const [field,setField]=useState("");
  const [alldata,setAlldata]=useState([]);
  const [insmethoddata,setInsmethoddata]=useState([]);
  const [assettypedata,setAssettypedata]=useState([]);
  const [districtid,setDistrictid]=useState(0);
  const [fieldid,setFieldid]=useState(0);

  useEffect(()=>{
   
    axios.post('http://localhost:5000',{year,districtid,fieldid})
    .then(res=>{
      setAlldata(res.data)
    })
    .catch(err=>console.log(err))
  },[])


  useEffect(()=>{
    axios.post('http://localhost:5000/insmethoddata',{year,districtid,fieldid})
    .then(res=>{
      setInsmethoddata(res.data)
    })
    .catch(err=>console.log(err))
  },[])

  useEffect(()=>{
    axios.post('http://localhost:5000/assettypedata',{year,districtid,fieldid})
    .then(res=>{
      setAssettypedata(res.data)
    })
    .catch(err=>console.log(err))
  },[])
  
  
  

  return (
    <>
   
    {Route==="login" && <Login setRoute={setRoute} setCurrentuser={setCurrentuser}/>}
    {Route==="loggedin" && <>
      <Header setRoute={setRoute} currentuser={currentuser}/>
      <AdminNav setFrame={setFrame} setYear={setYear} setDistrict={setDistrict} setField={setField} setDistrictid={setDistrictid} setFieldid={setFieldid}/>
      <div className="rightSideContainer" id="righSideContainer">
        {frame === "Dashboard" && <Dashboard year={year} district={district} field={field} graphdata={insmethoddata}/>}
        {frame === "Charts" && <Charts year={year} district={district} field={field}/>}
        {frame === "Datatable" && <Datatable year={year} district={district} field={field} alldata={alldata}/>}
      </div>
      
      </>}
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
