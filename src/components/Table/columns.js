import { format } from "date-fns"
import ColumnFilter from "./ColumnFilter"



export const COLUMNS=[
    // {
    //     Header:'Id',
    //     Footer:'Id',
    //     accessor:'id',
    //     Filter: ColumnFilter,
    //     disableFilters:true
    // },
    {
        Header:'TA Year',
        Footer:'TA Year',
        accessor:'TA_Year',
        Filter: ColumnFilter,
        foldable: true,
        
    },
    {
        Header:'District',
        Footer:'District',
        accessor:'District',
        Filter: ColumnFilter, 
        foldable: true,
       
    },
    {
        Header:'Field',
        Footer:'Field',
        accessor:'Field',
        Filter: ColumnFilter
        
    },
    {
        Header:'Location',
        Footer:'Location',
        accessor:'Location',
        Filter: ColumnFilter
        
    },
    {
        Header:'Asset ID',
        Footer:'Asset ID',
        accessor:'asset_id',
        Filter: ColumnFilter
        
    },
    {
        Header:'Jur. ID',
        Footer:'Jur. ID',
        accessor:'jur_id',
        Filter: ColumnFilter
        
    },
    {
        Header:'Description',
        Footer:'Description',
        accessor:'Description',
        Filter: ColumnFilter
        
    },
    {
        Header:'Asset Type',
        Footer:'Asset Type',
        accessor:'asset_type',
        Filter: ColumnFilter
        
    },
    {
        Header:'Service',
        Footer:'Service',
        accessor:'service',
        Filter: ColumnFilter
        
    },
    {
        Header:'Previous Inspection History',
        Footer:'Previous Inspection History',
        accessor:'previous_inspection_history',
        Filter: ColumnFilter
        
    },
    {
        Header:'Inspection Status',
        Footer:'Inspection Status',
        accessor:'inspection_status',
        Filter: ColumnFilter
        
    },
    {
        Header:'Opening Date',
        Footer:'Opening Date',
        accessor:'opening_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'Cleaning Date',
        Footer:'Cleaning Date',
        accessor:'cleaning_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'Inspection Completion Date',
        Footer:'Inspection Completion Date',
        accessor:'inspection_completion_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'Signed By',
        Footer:'Signed By',
        accessor:'signed_by',
        Filter: ColumnFilter
        
    },
    {
        Header:'VI Required',
        Footer:'VI Required',
        accessor:'VI_required',
        Filter: ColumnFilter
        
    },
    {
        Header:'VI Status',
        Footer:'VI Status',
        accessor:'VI_status',
        Filter: ColumnFilter
        
    },
    {
        Header:'VI Scope',
        Footer:'VI Scope',
        accessor:'VI_scope',
        Filter: ColumnFilter
        
    },
    {
        Header:'VI Date',
        Footer:'VI Date',
        accessor:'VI_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'VI Notes',
        Footer:'VI Notes',
        accessor:'VI_notes',
        Filter: ColumnFilter
        
    },
    {
        Header:'VE Required',
        Footer:'VE Required',
        accessor:'VE_required',
        Filter: ColumnFilter
        
    },
    {
        Header:'VE Status',
        Footer:'VE Status',
        accessor:'VE_status',
        Filter: ColumnFilter
        
    },
    {
        Header:'VE Scope',
        Footer:'VE Scope',
        accessor:'VE_scope',
        Filter: ColumnFilter
        
    },
    {
        Header:'VE Date',
        Footer:'VE Date',
        accessor:'VE_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'VE Notes',
        Footer:'VE Notes',
        accessor:'VE_notes',
        Filter: ColumnFilter
        
    },
    {
        Header:'UT Required',
        Footer:'UT Required',
        accessor:'UT_required',
        Filter: ColumnFilter
        
    },
    {
        Header:'UT Status',
        Footer:'UT Status',
        accessor:'UT_status',
        Filter: ColumnFilter
        
    },
    {
        Header:'UT Scope',
        Footer:'UT Scope',
        accessor:'UT_scope',
        Filter: ColumnFilter
        
    },
    {
        Header:'UT Date',
        Footer:'UT Date',
        accessor:'UT_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'UT Notes',
        Footer:'UT Notes',
        accessor:'UT_notes',
        Filter: ColumnFilter
        
    },
    {
        Header:'Ex. MT Required',
        Footer:'Ex. MT Required',
        accessor:'ex_mt_required',
        Filter: ColumnFilter
        
    },
    {
        Header:'Ex. MT Status',
        Footer:'Ex. MT Status',
        accessor:'ex_mt_status',
        Filter: ColumnFilter
        
    }, {
        Header:'Ex. MT Scope',
        Footer:'Ex. MT Scope',
        accessor:'ex_mt_scope',
        Filter: ColumnFilter
        
    },
    {
        Header:'Ex. MT Date',
        Footer:'Ex. MT Date',
        accessor:'ex_mt_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'Ex. MT Notes',
        Footer:'Ex. MT Notes',
        accessor:'ex_mt_notes',
        Filter: ColumnFilter
        
    },
    {
        Header:'Int. MT Required',
        Footer:'Int. MT Required',
        accessor:'int_mt_required',
        Filter: ColumnFilter
        
    },
    {
        Header:'Int. MT Status',
        Footer:'Int. MT Status',
        accessor:'int_mt_status',
        Filter: ColumnFilter
        
    },
    {
        Header:'Int MT Scope',
        Footer:'Int MT Scope',
        accessor:'int_mt_scope',
        Filter: ColumnFilter
        
    },
    {
        Header:'Int. MT Date',
        Footer:'Int. MT Date',
        accessor:'int_mt_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'Int. MT Notes',
        Footer:'Int. MT Notes',
        accessor:'int_mt_notes',
        Filter: ColumnFilter
        
    },
    {
        Header:'PT Required',
        Footer:'PT Required',
        accessor:'pt_required',
        Filter: ColumnFilter
        
    },
    {
        Header:'PT Status',
        Footer:'PT Status',
        accessor:'pt_status',
        Filter: ColumnFilter
        
    },
    {
        Header:'PT Scope',
        Footer:'pt_scope',
        accessor:'pt_scope',
        Filter: ColumnFilter
        
    },
    {
        Header:'PT Date',
        Footer:'PT Date',
        accessor:'pt_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'PT Notes',
        Footer:'PT Notes',
        accessor:'pt_notes',
        Filter: ColumnFilter
        
    },
    {
        Header:'Tublar Required',
        Footer:'Tublar Required',
        accessor:'tublar_required',
        Filter: ColumnFilter
        
    },
    {
        Header:'Tublar Inspection Status',
        Footer:'Tublar Inspection Status',
        accessor:'tublar_status',
        Filter: ColumnFilter
        
    },
    {
        Header:'Tublar Inspection Scope',
        Footer:'Tublar Inspection Scope',
        accessor:'tublar_scope',
        Filter: ColumnFilter
        
    },
    {
        Header:'Tublar Inspection Date',
        Footer:'Tublar Inspection Date',
        accessor:'tublar_date',
        Filter: ColumnFilter
        
    },
    {
        Header:'Tublar Inspection Note',
        Footer:'Tublar Inspection Note',
        accessor:'tublar_note',
        Filter: ColumnFilter
        
    }

    
]

export const GROUPED_COLUMMNS=[
    {
         Header:'Location Details',         
         Footer:'Location',
        columns:[ {
            Header:'District',
            Footer:'District',
            accessor:'District',
            Filter: ColumnFilter, 
            foldable: true,
        },
        {
            Header:'Field',
            Footer:'Field',
            accessor:'Field',
            Filter: ColumnFilter
            
        },
        {
            Header:'Location',
            Footer:'Location',
            accessor:'Location',
            Filter: ColumnFilter
            
        }]
    },
// ---------------------------------------------------------------
    {   Header:'Asset Details',         
        Footer:'Asset Details',
        columns:[ 
            {
                Header:'Asset ID',
                Footer:'Asset ID',
                accessor:'asset_id',
                Filter: ColumnFilter
            },
            {
                Header:'Jur. ID',
                Footer:'Jur. ID',
                accessor:'jur_id',
                Filter: ColumnFilter
            },
            {
                Header:'Description',
                Footer:'Description',
                accessor:'Description',
                Filter: ColumnFilter
            },
            {
                Header:'Asset Type',
                Footer:'Asset Type',
                accessor:'asset_type',
                Filter: ColumnFilter
            },
            {
                Header:'Service',
                Footer:'Service',
                accessor:'service',
                Filter: ColumnFilter
            }
        ]},
    // ---------------------------------------------------------------
     { Header:'Inspection History Details',         
        Footer:'Inspection History Details',
        columns:[
            {Header:'Previous Inspection History',
            Footer:'Previous Inspection History',
            accessor:'previous_inspection_history',
            Filter: ColumnFilter
        },
        {Header:'Repair History',
            Footer:'Repair History',
            accessor:'',
            Filter: ColumnFilter
        }
        ]},
    // ---------------------------------------------------------------
    { Header:'Inspection Status Details',         
    Footer:'Inspection Status Details',
    columns:[
        {
            Header:'Inspection Status',
            Footer:'Inspection Status',
            accessor:'inspection_status',
            Filter: ColumnFilter
        },
        {
            Header:'Opening Date',
            Footer:'Opening Date',
            accessor:'opening_date',
            Filter: ColumnFilter
        },
        {
            Header:'Cleaning Date',
            Footer:'Cleaning Date',
            accessor:'cleaning_date',
            Filter: ColumnFilter
        },
        {
            Header:'Inspection Completion Date',
            Footer:'Inspection Completion Date',
            accessor:'inspection_completion_date',
            Filter: ColumnFilter
        },
        {
            Header:'Signed By',
            Footer:'Signed By',
            accessor:'signed_by',
            Filter: ColumnFilter
        }
    ]},
// ---------------------------------------------------------------
    { Header:'VI Details',         
    Footer:'VI Details',
    columns:[
        {
            Header:'VI Required',
            Footer:'VI Required',
            accessor:'VI_required',
            Filter: ColumnFilter
        },
        {
            Header:'VI Status',
            Footer:'VI Status',
            accessor:'VI_status',
            Filter: ColumnFilter
        },
        {
            Header:'VI Scope',
            Footer:'VI Scope',
            accessor:'VI_scope',
            Filter: ColumnFilter
        },
        {
            Header:'VI Date',
            Footer:'VI Date',
            accessor:'VI_date',
            Filter: ColumnFilter
        },
        {
            Header:'VI Notes',
            Footer:'VI Notes',
            accessor:'VI_notes',
            Filter: ColumnFilter
        }
    ]},
// ---------------------------------------------------------------
    { Header:'VE Details',         
    Footer:'VE Details',
    columns:[
        {
            Header:'VE Required',
            Footer:'VE Required',
            accessor:'VE_required',
            Filter: ColumnFilter
        },
        {
            Header:'VE Status',
            Footer:'VE Status',
            accessor:'VE_status',
            Filter: ColumnFilter
        },
        {
            Header:'VE Scope',
            Footer:'VE Scope',
            accessor:'VE_scope',
            Filter: ColumnFilter    
        },
        {
            Header:'VE Date',
            Footer:'VE Date',
            accessor:'VE_date',
            Filter: ColumnFilter
        },
        {
            Header:'VE Notes',
            Footer:'VE Notes',
            accessor:'VE_notes',
            Filter: ColumnFilter
        }
    ]},
// ---------------------------------------------------------------
        { Header:'UT Details',         
        Footer:'UT Details',
        columns:[
            {
                Header:'UT Required',
                Footer:'UT Required',
                accessor:'UT_required',
                Filter: ColumnFilter
            },
            {
                Header:'UT Status',
                Footer:'UT Status',
                accessor:'UT_status',
                Filter: ColumnFilter 
            },
            {
                Header:'UT Scope',
                Footer:'UT Scope',
                accessor:'UT_scope',
                Filter: ColumnFilter 
            },
            {
                Header:'UT Date',
                Footer:'UT Date',
                accessor:'UT_date',
                Filter: ColumnFilter
            },
            {
                Header:'UT Notes',
                Footer:'UT Notes',
                accessor:'UT_notes',
                Filter: ColumnFilter
            }
    ]},
// ---------------------------------------------------------------
{ Header:'Ex. MT Details',         
Footer:'Ex. MT Details',
columns:[
    {
        Header:'Ex. MT Required',
        Footer:'Ex. MT Required',
        accessor:'ex_mt_required',
        Filter: ColumnFilter
    },
    {
        Header:'Ex. MT Status',
        Footer:'Ex. MT Status',
        accessor:'ex_mt_status',
        Filter: ColumnFilter
    }, {
        Header:'Ex. MT Scope',
        Footer:'Ex. MT Scope',
        accessor:'ex_mt_scope',
        Filter: ColumnFilter
    },
    {
        Header:'Ex. MT Date',
        Footer:'Ex. MT Date',
        accessor:'ex_mt_date',
        Filter: ColumnFilter
    },
    {
        Header:'Ex. MT Notes',
        Footer:'Ex. MT Notes',
        accessor:'ex_mt_notes',
        Filter: ColumnFilter
    }

]},
// ---------------------------------------------------------------
{ Header:'Int. MT Details',         
Footer:'Int. MT Details',
columns:[
    {
        Header:'Int. MT Required',
        Footer:'Int. MT Required',
        accessor:'int_mt_required',
        Filter: ColumnFilter
    },
    {
        Header:'Int. MT Status',
        Footer:'Int. MT Status',
        accessor:'int_mt_status',
        Filter: ColumnFilter
    },
    {
        Header:'Int MT Scope',
        Footer:'Int MT Scope',
        accessor:'int_mt_scope',
        Filter: ColumnFilter
    },
    {
        Header:'Int. MT Date',
        Footer:'Int. MT Date',
        accessor:'int_mt_date',
        Filter: ColumnFilter
    },
    {
        Header:'Int. MT Notes',
        Footer:'Int. MT Notes',
        accessor:'int_mt_notes',
        Filter: ColumnFilter
    }

]},
// ---------------------------------------------------------------
{ Header:'PT Details',         
Footer:'PT Details',
columns:[
    {
        Header:'PT Required',
        Footer:'PT Required',
        accessor:'pt_required',
        Filter: ColumnFilter
    },
    {
        Header:'PT Status',
        Footer:'PT Status',
        accessor:'pt_status',
        Filter: ColumnFilter
    },
    {
        Header:'PT Scope',
        Footer:'pt_scope',
        accessor:'pt_scope',
        Filter: ColumnFilter
    },
    {
        Header:'PT Date',
        Footer:'PT Date',
        accessor:'pt_date',
        Filter: ColumnFilter
    },
    {
        Header:'PT Notes',
        Footer:'PT Notes',
        accessor:'pt_notes',
        Filter: ColumnFilter
    }
]},
// ---------------------------------------------------------------
{ Header:'Tublar Inspection Details',         
Footer:'Tublar Inspection Details',
columns:[{
    Header:'Tublar Required',
    Footer:'Tublar Required',
    accessor:'tublar_required',
    Filter: ColumnFilter
},
{
    Header:'Tublar Inspection Status',
    Footer:'Tublar Inspection Status',
    accessor:'tublar_status',
    Filter: ColumnFilter
},
{
    Header:'Tublar Inspection Scope',
    Footer:'Tublar Inspection Scope',
    accessor:'tublar_scope',
    Filter: ColumnFilter
},
{
    Header:'Tublar Inspection Date',
    Footer:'Tublar Inspection Date',
    accessor:'tublar_date',
    Filter: ColumnFilter
},
{
    Header:'Tublar Inspection Note',
    Footer:'Tublar Inspection Note',
    accessor:'tublar_note',
    Filter: ColumnFilter
}
]}
]
