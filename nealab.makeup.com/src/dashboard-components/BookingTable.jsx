import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

export default function BookingTable() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    let data = [];

    db.collection("bookings")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          data.push(doc.data());
        });
      })
      .then((e) => {
        setRowData(data);
      });
  }, []);
  return (

    <div className="w-3/4 h-1/2 mt-10 mx-auto" >
        <h1 className="text-center text-NealabDarkRed text-3xl mb-10">Enquires</h1>
        <div className="overflow-hidden flex-grow w-full h-full border">
      <div
        className="ag-theme-alpine ag-row-hover ag-column-hover container  " style={{
            height: '100%',
            width: '100%',
          }}
        
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
      </div>
      
    </div>
  );
}

const columns = [
  {
    headerName: "Name",
    field: "name",
    sortable: true,
    filter: "agNumberColumnFilter",
    width : 300,
  },
  {
    headerName: "Email",
    field: "email",
    sortable: true,
    filter: "agNumberColumnFilter",
    width : 250,
  },
  
  {
    headerName: "Description",
    field: "description",
    sortable: true,
    filter: "agNumberColumnFilter",
    width : 597,
  },
];
