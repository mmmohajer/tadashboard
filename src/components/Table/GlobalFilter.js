import React ,{useState} from "react";
import {useAsyncDebounce} from 'react-table'
import cx from "classnames";
import styles from "./BasicTable.module.scss";

const GlobalFilter=({filter,setFilter})=>{
    const [value,setValue]=useState(filter)
    const onChange=useAsyncDebounce(value=>{
        setFilter(value || undefined)
    },300)
return (
    <span>
        {''}
        <input className={cx(styles.formcontrol,"flex", "flex--jc--center")} value={value || ''} onChange={(e)=>{
            setValue(e.target.value)
            onChange(e.target.value)
            }} placeholder='Search...' />

    </span>
)

}


export default GlobalFilter;