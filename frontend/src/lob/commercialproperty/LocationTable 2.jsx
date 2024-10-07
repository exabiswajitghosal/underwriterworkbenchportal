import React, { useState, useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LocationComponent.module.css";
import { Color } from 'antd/es/color-picker';

// Register the required AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

export function LocationTable2() {
  // Initial Data for the table
  const initialData = [
    {
      location: "2134 Parkway, Pigeon Forge, CA",
      building: "Building #1",
      coverage: "Building Coverage",
      limit: "100000.00",
      deductible: "2500",
      coinsurance: "80%",
      blanket: "None",
    },
    {
      location: "2134 Parkway, Pigeon Forge, CA",
      building: "Building #2",
      coverage: "Business Personal Property Coverage",
      limit: "12000.00",
      deductible: "2500",
      coinsurance: "None",
      blanket: "None",
    },
    {
      location: "2135 Parkway, Pigeon Forge, CA",
      building: "Building #3",
      coverage: "Building Coverage",
      limit: "123000.00",
      deductible: "3000",
      coinsurance: "75%",
      blanket: "Included",
    },
  ];

  // Define column configuration for AG Grid
  const [columnDefs] = useState([
    {
      
      checkboxSelection: true, // Add checkbox for each row
      width: 50, // Set a width for the checkbox column
      
      
    },
    { field: 'location', headerName: 'Location', filter: true },
    { field: 'building', headerName: 'Building', filter: true },
    { field: 'coverage', headerName: 'Coverage', filter: true },
    { field: 'limit', headerName: 'Limit', filter: 'agNumberColumnFilter' },
    { field: 'deductible', headerName: 'Deductible', filter: 'agNumberColumnFilter' },
    { field: 'coinsurance', headerName: 'Coinsurance', filter: true },
    { field: 'blanket', headerName: 'Blanket', filter: true },
  ]);

  // Define default column behavior
  const defaultColDef = useMemo(() => ({
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    sortable: true,
    resizable: true,
  }), []);

  

  return (
    <div className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={initialData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={4}
        rowSelection="multiple" // Enable multiple row selection
      />
    </div>
  );
}

export default LocationTable2;
