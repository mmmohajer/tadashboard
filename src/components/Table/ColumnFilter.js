import React ,{useState} from "react";
import cx from "classnames";
import styles from "./BasicTable.module.scss"

export const ColumnFilter=({column})=>{
    const {filterValue,setFilter}=column
return (
    <span>
        {''}
        <input className={cx(styles.formcontrol)}  value={filterValue || ''} onChange={e=>setFilter(e.target.value)}  />

    </span>
)

}


export default ColumnFilter;