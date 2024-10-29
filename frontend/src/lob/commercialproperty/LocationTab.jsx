import React, { useRef, useState } from 'react';
import { Button, Row, Col } from 'antd';


import styles from "./LocationComponent.module.css";
import LocationTable from './LocationTable';
import LocationBuildingTab from "./LocationBuildingTab"
import OverallInsights from "./OverallInsights"



const LocationTab = () => {
  const [selectionType] = useState('radio');
  const [selectedRow, setSelectedRow] = useState(null);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const [activeTab, setActiveTab] = useState("Tab1");

  // Function to open the selected tab
  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
  };

  return (

<>
      {/* Form to display selected row data */}
      
        <div className={styles.container}>
        {/* Tab Buttons */}
        <div className="tab">
          <Button
            className={`tablinks ${activeTab === "Tab1" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab1')}
          >
           Location
          </Button>
          <Button
            className={`tablinks ${activeTab === "Tab2" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab2')}
          >
            Buildings
          </Button>
          <Button
            className={`tablinks ${activeTab === "Tab3" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab3')}
          >
            GenAI Insights
          </Button>
        </div>

        {/* Tab Content */}
        
            {activeTab === "Tab1" && (
              <div id="Tab1" className="tabcontent">
           <LocationTable/>
              </div>
            )}



            
   {activeTab === "Tab2" && (
        <div id="Tab2" className="tabcontent">
          <LocationBuildingTab/>


            
    
      </div>)}
      {activeTab === "Tab3" && (
        <div id="Tab3" className="tabcontent">
        <OverallInsights/>
      </div>)}
        </div> 
       </>
       
    
  );

};

export default LocationTab;
