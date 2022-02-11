import React, {useState,Fragment} from "react";
// import { useTable } from "react-table";
import {nanoid} from "nanoid";
import cx from "classnames";
import styles from "./Table.module.scss";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadonlyRow";
import EditableRow from "./EditableRow";

const Table=()=>{
const [contacts,setContacts]=useState(data);
const [addFormData,setaddFormData]=useState({
    fullName:'',
    address: '',
    phoneNumber:'',
    email:''
});

const [editFormData,seteditFormData]=useState({
    fullName:'',
    address: '',
    phoneNumber:'',
    email:''
})

const [editContactId,seteditContactId]=useState(null)
const handleAddFormChange=(event)=>{
event.preventDefault();
const fieldName=event.target.getAttribute('name');
const fieldValue=event.target.value;
const newFormData={...addFormData};
newFormData[fieldName]=fieldValue;
setaddFormData(newFormData);
};

const handleEditFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;
    const newFormData={...editFormData};
    newFormData[fieldName]=fieldValue;
    seteditFormData(newFormData);
}

const handleAddFormSubmit=(event)=>{
    event.preventDefault();
    const newContact={
        id:nanoid(),
        fullName:addFormData.fullName,
        address:addFormData.address,
        phoneNumber:addFormData.phoneNumber,
        email:addFormData.email,
    }
    const newContacts=[...contacts,newContact];
    setContacts(newContacts);
};

const handleEditFormSubmit=(event)=>{
    event.preventDefault();
    const editedContact={
        id:editContactId,
        fullName:editFormData.fullName,
        address:editFormData.address,
        phoneNumber:editFormData.phoneNumber,
        email:editFormData.email}

    const newContacts=[...contacts];
    const index=contacts.findIndex((contact)=> contact.id===editContactId);
    newContacts[index]=editedContact;
    setContacts(newContacts);
    seteditContactId(null);

};

const handleEditClick=(event,contact)=>{
    event.preventDefault();
    seteditContactId(contact.id);  
    const formValues={
        fullName:contact.fullName,
        address: contact.address,
        phoneNumber:contact.phoneNumber,
        email:contact.email,
    };

    seteditFormData(formValues);
};
const handleCancelClick=()=>{
    seteditContactId(null);
};
const handleDeleteClick=(contactID)=>{
    const newContacts=[...contacts];
    const index=contacts.findIndex((contact)=>contact.id===contactID);
    newContacts.splice(index,1);
    setContacts(newContacts);

};

    return (
    <div className="p2 pt6 row"> 
    <div className={cx("pos-rel","flex","flex--dir--col","bgWhite br-all-solid-1","m1","of-x-auto",
    styles.tablecard, "row--12", "row--sm--12", "row--md--12", "row--lg--12")}>
            <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
           <table>
               <thead>
                   <tr>
                   <th>Actions</th>
                       <th>name</th>
                       <th>address</th>
                       <th>phone</th>
                       <th>email</th>
                       
                   </tr>
               </thead>
               <tbody>
                   {contacts.map((contact)=>(
                <Fragment>
                    {editContactId===contact.id ? (
                    <EditableRow 
                    editFormData={editFormData} 
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                     />) : (
                <ReadOnlyRow 
                contact={contact} 
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                /> 
                )}
                
                </Fragment>
                   ))}
                   

               </tbody>
               
               
           </table>
           </form>
           <h2>add</h2>
                   <form onSubmit={handleAddFormSubmit}>
                    <input onChange={handleAddFormChange} type="text" name="fullName" placeholder="name"></input>
                    <input onChange={handleAddFormChange} type="text" name="address" placeholder="address"></input>
                    <input onChange={handleAddFormChange} type="text" name="phoneNumber" placeholder="phone"></input>
                    <input onChange={handleAddFormChange} type="text" name="email" placeholder="email"></input>
                    <button onChange={handleAddFormChange} type="submit">Add </button>
                   </form>
           </div>
    </div>
    </div>

    );
}

export default Table;