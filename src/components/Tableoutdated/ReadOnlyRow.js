import React  from "react";


const ReadOnlyRow=({contact,handleEditClick,handleDeleteClick})=>{
    return (
        
            <tr>
                <td>
                <button type="button" onClick={(event)=>handleEditClick(event,contact)}>Edit</button>
                <button type="button" onClick={()=>handleDeleteClick(contact.id)}>Delete</button>
                </td>
                <td>{contact.fullName}</td>
                <td>{contact.address}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                
                
            </tr>

       
    );
}

export default ReadOnlyRow;