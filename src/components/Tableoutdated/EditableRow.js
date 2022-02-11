import React, {useState} from "react";

const EditableRow=({editFormData,handleEditFormChange,handleCancelClick})=>{
    return (
        
            <tr>
                 <td>
                    <button type="sumbit">Save</button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                </td>
                <td><input type="text" name="fullName" value={editFormData.fullName} onChange={handleEditFormChange}></input> </td>
                <td><input type="text" name="address" value={editFormData.address} onChange={handleEditFormChange}></input> </td>
                <td><input type="text" name="phoneNumber" value={editFormData.phoneNumber} onChange={handleEditFormChange}></input> </td>
                <td><input type="text" name="email" value={editFormData.email} onChange={handleEditFormChange}></input> </td>
               
            </tr>
        
    )
}

export default EditableRow;