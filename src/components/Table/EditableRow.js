import React, {useState} from "react";

const EditableRow=()=>{
    return (
        
            <tr>
                <td><input type="text" name="fullName"></input> </td>
                <td><input type="text" name="address"></input> </td>
                <td><input type="text" name="phoneNumber"></input> </td>
                <td><input type="text" name="email"></input> </td>
            </tr>
        
    )
}

export default EditableRow;