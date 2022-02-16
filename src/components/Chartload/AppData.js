import { getMarginRight } from "react-table-sticky";

const inspectionstatus_labels=["Innitiated", "Not Started", "Canceled", "Completed"];
const assettype_labels=["Vessel", "Column", "Filter", "Exchanger","Air Cooler","Compressor Bottle","Reboiler","Heater"];
const inspectionmethods_labels=["VE","VI","UT","AUT","Ex. MT","Int. MT","PT","Tublar","Hydrotest"];
const charttitles=["InspectionMethodsStatus", "VIStatus", "VEStatus", "UTStatus"];
const backgroundcolors=['#007bff', '#dc3545', '#ffc107', '#28a745'];

const inspectionstatusdata=[{label:"Innitiated",count:"5"},{label:"Not Started",count:"4"},{label:"Canceled",count:"6"},{label:"Completed",count:"9"}]

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
    labels: [inspectionstatusdata[0].label, inspectionstatusdata[1].label, inspectionstatusdata[2].label, inspectionstatusdata[3].label],
    datasets:[
      {
        label:"",
        data:[inspectionstatusdata[0].count, inspectionstatusdata[1].count, inspectionstatusdata[2].count, inspectionstatusdata[3].count],
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
        data:[50, 14, 20, 15],
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