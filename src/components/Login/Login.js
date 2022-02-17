import React,{useState} from 'react'
import cx from "classnames";
import styles from "./Login.module.scss"
import axios from "axios";

import logo from "Images/js-Images/Logo.svg"
const Login=({setRoute})=>{
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")




    return (
        <div className={cx("height-vh-full",styles.container)}>

       
        <div className={cx("pos-rel","bgWhite","flex","flex--jc--center","m1","height-vh-half","w-per-30",styles.formcontainer)} >
        <form>
            
        <div>
             <h1 className="m2  fs-px-48 f-b ">CNRL TA Dashboard</h1>
        </div>


        <div>
            <img src={logo} alt="CNRL LOGO" className="m2 ml4 flex flex--jc--center"/>
        </div>


        <div className="m2">
            <div className="row">
               <label>User Name:</label>  
            </div >
            <div className="row">
                <input className={cx(styles.formtext)} type="text" placeholder="" onChange={e=>setUsername(e.target.value)}></input>
            </div>
        </div>

        <div className="m2">
            <div className="row ">
               <label>Password: </label>  
            </div >
            <div className="row">
                <input className={cx(styles.formtext)} type="password" placeholder="" onChange={e=>setPassword(e.target.value)}></input>
            </div>
        </div>

        <div className="row m2 btn-large flex flex--jc--center">
                <button className={cx(styles.formbutton)} type="submit" 
                onClick={()=>{
                   
                    setRoute("loggedin")
                    axios.post('http://localhost:5000/signin',{username,password})
                    .then(response=>{
                        if(response.data==='success'){
                        }
                            console.log(response.data)
                         
                        
                    })

                    .catch(err=>console.log(err))
                }}>Log In</button>
        </div>
            
           
            </form>
        </div>
        </div>
    )
}

export default Login;