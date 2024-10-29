import React, { useRef, useState } from 'react';


import styles from "./LocationComponent.module.css";
import LocationTable from './LocationTable';
import LocationBuildingTab from "./LocationBuildingTab"
import Insights from './Insights';



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
          <button
            className={`tablinks ${activeTab === "Tab1" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab1')}
          >
           Location
          </button>
          <button
            className={`tablinks ${activeTab === "Tab2" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab2')}
          >
            Buildings
          </button>
          <button
            className={`tablinks ${activeTab === "Tab3" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab3')}
          >
            Overall Insights
          </button>
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
        <Insights/>
      </div>)}
        </div> 
       </>
       
    
  );

};

export default LocationTab;
