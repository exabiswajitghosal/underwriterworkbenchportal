import React, { useState, useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LocationComponent.module.css";
import { Col, Row } from 'antd';
import FormInput from '../../components/FormInput ';
import { MapView } from './Map';

export function LocationTable() {
  // Sample data for the table
  const initialData = [
    {
      id: 1, // Assign a unique ID for each row
      location: "2134 Parkway, Pigeon Forge, CA",
      building: "Building #1",
      coverage: "Building Coverage",
      limit: "100000.00",
      deductible: "2500",
      coinsurance: "80%",
      blanket: "None",
    },
    {
      id: 2,
      location: "2135 Parkway, Pigeon Forge, CA",
      building: "Building #2",
      coverage: "Business Personal Property Coverage",
      limit: "12000.00",
      deductible: "2500",
      coinsurance: "None",
      blanket: "None",
    },
    {
      id: 3,
      location: "2136 Parkway, Pigeon Forge, CA",
      building: "Building #3",
      coverage: "Building Coverage",
      limit: "123000.00",
      deductible: "3000",
      coinsurance: "75%",
      blanket: "Included",
    },
    {
      id: 4,
      location: "2137 Parkway, Pigeon Forge, CA",
      building: "Building #4",
      coverage: "Business Personal Property Coverage",
      limit: "143000.00",
      deductible: "3500",
      coinsurance: "85%",
      blanket: "Included",
    },
    {
      id: 5,
      location: "2138 Parkway, Pigeon Forge, CA",
      building: "Building #5",
      coverage: "Building Coverage",
      limit: "150000.00",
      deductible: "2500",
      coinsurance: "None",
      blanket: "None",
    },
  ];

  // State to store the currently selected row
  const [selectedRow, setSelectedRow] = useState(null);

  // Function to handle row selection
  const handleRowSelection = (event) => {
    const selectedData = event.api.getSelectedRows();
    if (selectedData.length > 0) {
      setSelectedRow(selectedData[0]); // Update the state with the selected row
    }
  };

  const [activeTab, setActiveTab] = useState("Tab1");

  // Function to open the selected tab
  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
  };

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
    <div>
      <div className="ag-theme-quartz" style={{ height: 350, width: '100%' }}>
        <AgGridReact
          rowData={initialData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={4}
          rowSelection="single" // Enable single row selection
          onSelectionChanged={handleRowSelection} // Handle row selection event
         // onGridReady={(params) => params.api.sizeColumnsToFit()}  Fit columns to the grid size
          getRowId={(params) => params.data.id} // Use the unique 'id' field for row tracking
        />
      </div>

      <div className={styles.container}>
        {/* Tab Buttons */}
        <div className="tab">
          <button
            className={`tablinks ${activeTab === "Tab1" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab1')}
          >
            Details
          </button>
          <button
            className={`tablinks ${activeTab === "Tab2" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab2')}
          >
            Coverages
          </button>
          <button
            className={`tablinks ${activeTab === "Tab3" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab3')}
          >
            Additional Interest
          </button>
        </div>

        {/* Tab Content */}
        {selectedRow ? (
          <>
            {activeTab === "Tab1" && (
              <div id="Tab1" className="tabcontent">
                <h5 className={styles.sectionTitle}>Building Information</h5>
                <Row gutter={16}>
                  <Col span={12}>
                    <Row gutter={26}>
                      <Col span={10}>
                        <FormInput label="Location" value={selectedRow.location} readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="Description" value={selectedRow.building} readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="Class Code" value="52641" readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="Property Class Description" value="Functional property" readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="Coverage Form" value={selectedRow.coverage} readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="Rate Type" value="Class" readOnly />
                      </Col>
                      <Col span={10}>
                        <h5 className={styles.sectionTitle}>Construction</h5>
                      </Col>
                      <Col span={10}>
                       
                      </Col>
                      <Col span={10}>
                        <FormInput label="Year Built" value="2020" readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="Construction Type" value="None" readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="# of Stories" value="2" readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="# of Basements" value="1" readOnly />
                      </Col>
                      <Col span={10}>
                        <FormInput label="Total Area (excl basement)" value="1200" readOnly />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={10}>
                    <Row gutter={26}>
                      <Col span={12}>
                        <MapView />
                      </Col>
                      <Col span={12}>
                       
                      </Col>
                      <Col span={12}>
                        <h5 className={styles.sectionTitle}>Burglar Alarm</h5>
                        </Col>
                        <Col span={12}>
                      
                        </Col>
                        <Col span={12}>
                        <FormInput label="Burglary Safeguard" value="None" readOnly />
                      </Col>
                      <Col span={10}>
                      <FormInput label="Has Alarm" value="Yes" readOnly />
                      </Col>
                        
                     
                      <Col span={12}>
                        <h5 className={styles.sectionTitle}>Improvements</h5>
                        </Col>
                        <Col span={12}>
                      
                      </Col>
                      <Col span={12}>
                        <FormInput label="Year of Last Update - Heating" value="2022" readOnly />
                        </Col>
                        <Col span={10}>
                        <FormInput label="Year of Last Update - Plumbing" value="2015" readOnly />
                        </Col>
                        <Col span={12}>
                        <FormInput label="Year of Last Update - Roofing" value="2021" readOnly />
                        </Col>
                        <Col span={10}>
                        <FormInput label="Year of Last Update - Wiring" value="2015" readOnly />
                      </Col>
                      <Col span={12}>
                        <h5 className={styles.sectionTitle}>Other</h5>
                        </Col>
                        <Col span={12}>

                        </Col>
                        <Col span={12}>
                        <FormInput label="Interest Type" value="None" readOnly />
                        </Col>
                        <Col span={10}>
                        <FormInput label="Rented To Others" value="None" readOnly />
                        </Col>
                        <Col span={12}>
                        <FormInput label="% Vacant" value="None" readOnly />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            )}

           {/* {activeTab === "Tab2" && (
              <div id="Tab2" className="tabcontent">
                <Row gutter={16}>
                  <Col span={12}>
                  <Row gutter={26}>
                  <Col span={10}>
                    <h5 className={styles.sectionTitle}>Building Coverages</h5>
                    </Col>
                    <Col span={12}>
                    <h5 className={styles.sectionTitle}>Building Coverages</h5>
                    </Col>
                    <Col span={12}>
                    <FormInput label="Limit:" value={selectedRow.limit} readOnly />
                    <FormInput label="Cause of loss:" value="Basic" readOnly />
                    <FormInput label="Exclude Vandalism:" value="Yes" readOnly />
                    <FormInput label="Exclude Sprinkler:" value="Yes" readOnly />
                    <FormInput label="Deductible:" value={selectedRow.deductible} readOnly />
                    <FormInput label="Wind % Deductible:" value="2%" readOnly />
                    <FormInput label="Valuation Method" value="Replacement Cost" readOnly />
                    <FormInput label="Coinsurance:" value={selectedRow.coinsurance} readOnly />
                    <FormInput label="Reporting Form:" value="Non Reporting" readOnly />
                    </Col>
                    </Row>
                  </Col>
                  <Col span={10}>
                    <h5 className={styles.sectionTitle}>Business Income Coverage</h5>
                    <FormInput label="Income Limit - Not Mfg or Rental:" value="2500" readOnly />
                    <FormInput label="Coinsurance %:" value="80%" readOnly />
                    <FormInput label="Waiting Period (in hours):" value="72" readOnly />
                    <FormInput label="Period of Coverage (in days):" value="180" readOnly />
                  </Col>
                </Row>
              </div>
            )}*/}

            
   {activeTab === "Tab2" && (
        <div id="Tab2" className="tabcontent">

<Row gutter={16}>
            <Col span={12}>
          <Row gutter={26}>
            
                  <Col span={15}>
                
                  <h5 className={styles.sectionTitle}>Building Coverages</h5>
                
                  </Col>
                  <Col span={5}>
                  
                  
                  </Col>
                
                  
                  <Col span={10}>
                  <FormInput label="Limit:" value={selectedRow.limit} reqired={true} readOnly  />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Cause of loss:" value="Basic" reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Exclude Vandalism:" value="Yes" reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Exclude Sprinkler:" value="Yes" reqired={true} readOnly />
                  </Col>
                  
                  <Col span={10}>
                  <FormInput label="Deductible:" value={selectedRow.deductible} reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Wind % Deductible:" value="2%" reqired={true} readOnly />
                  </Col>
                 
                  <Col span={10}>
                  <FormInput label="Valuation Method" value="Replacement Cost" reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Coinsurance:" value={selectedRow.coinsurance} reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                    
                  <FormInput label="Reporting Form:" value="Non Reporting" reqired={true} readOnly />
                  </Col>
                </Row></Col>
                <Col span={10}>
          <Row gutter={16}>

         
          <Col span={25}>
                    
                    <h5 className={styles.sectionTitle}>Business Income Coverage</h5>
                   
                  </Col>
                  <Col span={4}>
                  <label className="customlable">
                
                    </label></Col>
                    <Col span={12}>
                    <FormInput label="Income Limit - Not Mfg or Rental:" value="2500" readOnly  reqired={true} />
                  </Col>
                  <Col span={12}>
                    <FormInput label="Blanket" value={selectedRow.blanket} readOnly  reqired={true} />
                  </Col>
                 
                  <Col span={12}>
                  <FormInput label="Waiting Period (in hours):" value="72" readOnly  reqired={true} />
                  </Col>
                  <Col span={12}>
                  <FormInput label="Period of Coverage (in days):" value="30" readOnly  reqired={true} />
                  </Col>
                  <Col span={12}>
                  
                  </Col>
                  <Col span={20}>
                   <h5 className={styles.sectionTitle}>Extra Expense Coverage</h5>
                  </Col>
                  <Col span={4}>
                  
                  </Col>
                  <Col span={12}>
                  <FormInput label="Limit:" value="10,000" readOnly  reqired={true} />
                  </Col>
                  <Col span={12}>
                  <FormInput label="Monthly Limit:" value="100%/100%/100%" readOnly  reqired={true} />
                  </Col>
                  
                  
            
                </Row></Col>
                </Row>

        
      
      </div>)}
      {activeTab === "Tab3" && (
        <div id="Tab3" className="tabcontent">
        <h5>Building Additional Interests</h5>
        <label htmlFor="add_dropdown" className={styles.label}>Add from:</label>
                 <select id="add_dropdown" className={styles.input}>
                 <option value="new_company">New Company</option>
                      <option value="new_person">New Person</option>
                      <option value="from_address_book">From Address Book</option>
                      <option value="other_contacts">Other Contacts</option>
                 </select>


                 <table class="table">
  <caption>List of users</caption>
  <thead >
    <tr>
      <th scope="col" style={{backgroundColor:"ghostwhite"}}><span>Type</span></th>
      
     
      <th scope="col" style={{backgroundColor:"ghostwhite"}}><span>Certificate Required</span></th>
     
      <th scope="col" style={{backgroundColor:"ghostwhite"}}><span>Contract Number</span></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>New Person</td>
     <td>Yes</td>
    <td>+3938939983</td>
    </tr>
  </tbody>
</table>
      </div>)}
          </>
        ) : (
          <div className={styles.noSelectionMessage}>
            <p>Please select a row to view its details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationTable;
