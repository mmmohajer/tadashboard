import React ,{useMemo, useEffect ,useState} from "react";
import { useTable,useSortBy,useGlobalFilter,useFilters,usePagination,useRowSelect,useBlockLayout } from "react-table";
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS,GROUPED_COLUMMNS} from './columns'
import cx from "classnames";
import styles from "./BasicTable.module.scss";
import {Stylessticky} from "./TableStyles";
import GlobalFilter from "./GlobalFilter.js";
import ColumnFilter  from './ColumnFilter'
import { Checkbox } from './Checkbox';
import { useSticky } from "react-table-sticky";
import { updateInputvalues } from "Utils/adminNavToggleHandler";




 const BasicTable=({SetRowdata,alldata})=>{
   
    const columns=useMemo(()=>GROUPED_COLUMMNS,[])
    const data=useMemo(()=>alldata,[]) 

    const defaultColumn = React.useMemo(
        () => ({
          Filter: ColumnFilter
        }),
        []
      )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        selectedFlatRows,
        rows,
        prepareRow,state,setGlobalFilter}=useTable({
        columns:columns,
        data:data
    }, 
    useFilters,useSticky,useGlobalFilter,useSortBy,usePagination,useRowSelect,
    hooks => {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <label>Edit</label> 
            ),
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
          },
          ...columns
        ])
      }
    )
    
    const {pageIndex,pageSize}=state
    const {globalFilter}=state

    useEffect(() => {
        if (selectedFlatRows && selectedFlatRows[0])
        SetRowdata(selectedFlatRows[0]?.original)
        // updateInputvalues(selectedFlatRows[0]?.original);
    }, [selectedFlatRows])
   

    return (
    <div className="p2  row row--12 row--sm--12 row--md--12 row--lg--12">
        <div className={cx(
        // "pos-rel",
        "flex",
        "flex--dir--col",
        "bgWhite br-all-solid-1",
        "m1",
        "of-x-auto",
        styles.tablecard
      )}>
        <div className="row flex flex--jc-between m1">
       
        <div className="row--12 row--sm--12 row--md--10 row--lg--10">
            <select className={cx(styles.formcontrol)} value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
                    {
                    [5,10,25,50,100].map(pageSize=>(
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize} 
                        </option>
                    ))  
                    }

            </select>
            <p1 >entries per page</p1>
        </div>
        
            
        
       
        <div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} className="row"/>
        </div>
        </div>

        <table className="mb2" {...getTableProps()} >
            <thead>
                {headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map(column=>(
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                         <span>
                            {column.isSorted ? (column.isSortedDesc ?  '🔽' : ' 🔼'):''}
                        </span>
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                       
                        </th>
                        ))
                    }
                    
                </tr>
                ))}
            </thead>
            
            <tbody{...getTableBodyProps()}>
            {page.map(row=>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>{
                             return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                          
                            })}    
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                {/* {
                    footerGroups.map(footerGroup=>(
                       <tr{...footerGroup.getFooterGroupProps()}>
                       {
                         footerGroup.headers.map(column=>(
                            <td {...column.getFooterProps}>
                                {
                                    column.render('Footer')
                                }

                            </td> 
                         ))  
                       }
                       </tr> 
                    ))
                } */}
            </tfoot>

        </table>
        
        

        <div className="ml2 mb2">

            <span>
                Page{' '}
                <strong>
                    {pageIndex+1} of {pageOptions.length}
                </strong>{' '}
            </span>

            {/* <span>
                | Go to page: {''}
                <input type='number' defaultValue={pageIndex+1}onChange={e=>{
                    const pageNumber=e.targer.value ? Number(e.target.value)-1 : 0
                    gotoPage(pageNumber)
                }}
                style={{width:'50px'}}></input>
            </span> */}
            
            <div className="row">
            <button className={cx(styles.formcontrol)} onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button className={cx(styles.formcontrol)} onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button className={cx(styles.formcontrol)} onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
            <button className={cx(styles.formcontrol)} onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
            <pre>
       
      </pre>

        </div>
        </div>
        
        </div>
    )
};

export default BasicTable;