import React from "react";
import cx from "classnames";
import styles from "./Header.module.scss";
import Listtsvg from "Images/js-images/icons/svg/list.svg";
import { openAdminNav } from "Utils/adminNavToggleHandler";
import { closeAdminNav } from "Utils/adminNavToggleHandler";
import Logo from "./subs/Logo";
import Nav from "./subs/Nav";
import logo from "Images/js-Images/Logo.svg"

const Header = ({ NavList,setRoute, currentuser }) => {
  return (
    <>
   
    
    <div
      className={cx(styles.header,
        "w-per-100",
        "pos-stick",
        // "pos-fix",
        "flex",
        "flex--ai--center",
        "p1",
       
        "br-color-third"
       
      )}
    >
      <div className="row flex--ai--center">
        <div className=""><img src={logo} alt="CNRL LOGO" className="flex flex--jc--center height-px-40 " /></div>
        
       
        <div className="row flex--ai--center row--6 row--sm--6 row--md--4 row--lg--4">
        <h2 className=" f-b  flex--ai--center"> CNRL TA Dashboard</h2>
          <button className={cx(styles.listbutton,"ml2","flex--ai--center")} onClick={openAdminNav} ><Listtsvg /></button>
          <button className={cx(styles.listbutton,"flex--ai--center")} onClick={closeAdminNav}><Listtsvg /></button>
        </div>
        <div className="flex--ai--center row--1 row--sm--1 row--md--2 row--lg--2">
         
        </div>
      
        <div className="flex--ai--center row--1 row--sm--1 row--md--1 row--lg--1">
        <label>{currentuser}</label>
        </div>
        <div className="flex--ai--center row--1 row--sm--1 row--md--1 row--lg--1">
         
          <button className={cx(styles.formbutton)} onClick={() => setRoute("login")}>Log out</button>
        </div>

      </div>

      
      
      
      
     
     
     
      {/* <Logo />
      <Nav NavList={NavList} /> */}
    </div>
    </>
  );
};

export default Header;
