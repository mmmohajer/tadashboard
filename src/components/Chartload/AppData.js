import { getMarginRight } from "react-table-sticky";

const inspectionstatus_labels=["Completed", "Canceled", "Started", "Not Started"];
const assettype_labels=["Vessel", "Column", "Filter", "Exchanger","Air Cooler","Compressor Bottle","Reboiler","Heater"];
const inspectionmethods_labels=["VE","VI","UT","AUT","Ex. MT","Int. MT","PT","Tublar","Hydrotest"];
const charttitles=["InspectionMethodsStatus", "VIStatus", "VEStatus", "UTStatus"];
const backgroundcolors=['#007bff', '#dc3545', '#ffc107', '#28a745'];

const insmethod_status_data=[
  {Inspection_Method:"Overal Inspection",Total_Required:"6",Completed:"5",Canceled:"6",Started:"6",Not_Started:"8"},
  {Inspection_Method:"VI",Total_Required:"6",Completed:"5",Canceled:"6",Started:"6",Not_Started:"8"},
  {Inspection_Method:"VE",Total_Required:"6",Completed:"5",Canceled:"6",Started:"6",Not_Started:"8"},
  {Inspection_Method:"UT",Total_Required:"6",Completed:"5",Canceled:"6",Started:"6",Not_Started:"8"}
 ]
 const overal_inspection=insmethod_status_data.find(c=>c.Inspection_Method==='Overal Inspection');
 const overal_inspection_index=0;

 const VI=insmethod_status_data.find(c=>c.Inspection_Method==='VI');
//  const VIindex=insmethod_status_data.indexof(VI);
 const VIindex=1;


export const Barchartoptions= {
  scales: {
      x: {stacked: true},
      y: {stacked: true}
  },
  plugins: {
    legend: {
        position: 'right',
        display: true,
        labels: {boxWidth: 20}
        }
  },
  maintainAspectRatio:true,
  indexAxis: 'y'
};

export const Piechartoptions= {
  
  plugins: {
    legend: {
        position: 'right',
        display: true,
        labels: {boxWidth: 20}
        }
  }
};

export const AssetTypeInspectionStatus={
  labels: assettype_labels,
  datasets:[
    {
      label:inspectionstatus_labels[0],
      data:[12.21, 10, 11.25, 8,4,5,0,0],
      backgroundColor: backgroundcolors[0],
    },
    {
      label:inspectionstatus_labels[1],
      data:[5, 4, 6, 5,6,9,6,4],
      backgroundColor: backgroundcolors[1],
    },
    {
      label:inspectionstatus_labels[2],
      data:[5, 4, 8, 8,6,8,4,9,8,4],
      backgroundColor: backgroundcolors[2],
    },
    {
      label:inspectionstatus_labels[3],
      data:[5, 4, 6, 7],
      backgroundColor: backgroundcolors[3],
    }
  ]
 
};


export const InspectionMethodsStatus={
    labels: inspectionmethods_labels,
    datasets:[
      {
        label:inspectionstatus_labels[0],
        data:[12.21, 10, 11.25, 8,4,5,0,0],
        backgroundColor: backgroundcolors[0],
      },
      {
        label:inspectionstatus_labels[1],
        data:[5, 4, 6, 5,6,9,6,4],
        backgroundColor: backgroundcolors[1],
      },
      {
        label:inspectionstatus_labels[2],
        data:[5, 4, 8, 8,6,8,4,9,8,4],
        backgroundColor: backgroundcolors[2],
      },
      {
        label:inspectionstatus_labels[3],
        data:[5, 4, 6, 7],
        backgroundColor: backgroundcolors[3],
      }
    ]
   
  };

  export const OveralInspectionStatus={
    labels: inspectionstatus_labels,
    datasets:[
      {
        label:"",
        data:
        [insmethod_status_data[overal_inspection_index].Completed,
        insmethod_status_data[overal_inspection_index].Canceled,
        insmethod_status_data[overal_inspection_index].Started,
        insmethod_status_data[overal_inspection_index].Not_Started],
        backgroundColor: backgroundcolors,
      }
    ]
  };

  export const RepairStatus={
    labels: inspectionstatus_labels,
    datasets:[
      {
        label:"",
        data:[1, 0, 0, 0],
        backgroundColor: backgroundcolors,
      }
    ]
  };



  export const VIStatus={

    labels: inspectionstatus_labels,
    datasets:[
      {
        label:"",
        data:[
        insmethod_status_data[VIindex].Completed,
        insmethod_status_data[VIindex].Canceled,
        insmethod_status_data[VIindex].Started,
        insmethod_status_data[VIindex].Not_Started],
        backgroundColor: backgroundcolors,
      }
    ]
  };

  export const VEStatus={
    labels: inspectionstatus_labels,
    datasets:[
      {
        label:"",
        data:[60, 70, 9, 10],
        backgroundColor: backgroundcolors,
      }
    ]
  };

  export const UTStatus={
    labels: inspectionstatus_labels,
    datasets:[
      {
        label:"",
        data:[40, 54, 20, 10],
        backgroundColor: backgroundcolors,
      }
    ]
  };