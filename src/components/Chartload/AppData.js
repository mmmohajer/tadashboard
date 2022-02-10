const inspectionstatus_labels=["Innitiated", "Not Started", "Canceled", "Completed"];
const inspectionmethods_labels=["VE","VI","UT","AUT","Ex. MT","Int. MT","PT","Tublar","Hydrotest"];
const charttitles=["InspectionMethodsStatus", "VIStatus", "VEStatus", "UTStatus"];
const backgroundcolors=['#007bff', '#dc3545', '#ffc107', '#28a745'];

export const InspectionMethodsStatus={
    labels: inspectionmethods_labels,
    datasets:[
      {
        label:inspectionstatus_labels[0],
        data:[12.21, 10, 11.25, 8],
        backgroundColor: backgroundcolors[0],
      },
      {
        label:inspectionstatus_labels[1],
        data:[5, 4, 20, 50],
        backgroundColor: backgroundcolors[1],
      }
    ]
  };

  export const VIStatus={
    labels: inspectionstatus_labels,
    datasets:[
      {
        label:inspectionstatus_labels,
        data:[50, 14, 20, 15],
        backgroundColor: backgroundcolors,
      }
    ]
  };

  export const VEStatus={
    labels: inspectionstatus_labels,
    datasets:[
      {
        label:inspectionstatus_labels,
        data:[60, 70, 9, 10],
        backgroundColor: backgroundcolors,
      }
    ]
  };

  export const UTStatus={
    labels: inspectionstatus_labels,
    datasets:[
      {
        label:inspectionstatus_labels,
        data:[40, 54, 20, 10],
        backgroundColor: backgroundcolors,
      }
    ]
  };