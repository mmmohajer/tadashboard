import React from "react";
import { useTable } from "react-table";
import cx from "classnames";
import Dataform from "Components/Dataform";

function datatable(){
    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    //   } = useTable({
    //     columns,
    //     data,
    //   })
     return (
    // <div>
    //     <h1 class="p2 mt-4">Datatable</h1>
    //     <table {...getTableProps()}>
    //   <thead>
    //     {headerGroups.map(headerGroup => (
    //       <tr {...headerGroup.getHeaderGroupProps()}>
    //         {headerGroup.headers.map(column => (
    //           <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    //         ))}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody {...getTableBodyProps()}>
    //     {rows.map((row, i) => {
    //       prepareRow(row)
    //       return (
    //         <tr {...row.getRowProps()}>
    //           {row.cells.map(cell => {
    //             return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    //           })}
    //         </tr>
    //       )
    //     })}
    //   </tbody>
    // </table>
    <>
    <div>
    <h1 class="p2 mt-4">Datatable</h1>
    </div>
        <div>
            <Dataform />
        </div>
        </>
       
    
    );
    }
    
    export default datatable;