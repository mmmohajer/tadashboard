import React ,{Component} from "react";
import cx from "classnames";
import styles from "./Dataform.module.scss";


function Image({ children, cardHeader, cardFooter }) {
    return (
        <>
       <div className="img-container">
        <img src="assets/images/html-Images/222.jpg"></img>
        </div>
        </>
    );
}
export default Image;