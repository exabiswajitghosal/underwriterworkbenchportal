import React from 'react';
import styles from './PolicyForm.module.css';
import  { useState } from 'react';
import "./Tab.css";
import { Col, Row } from 'antd';
import  FormInput from '../components/FormInput ';
import Documents from "./RightSidebar";
function PolicyForm() {
  const [activeTab, setActiveTab] = useState('Tab1'); // Set default tab

  // Function to open the selected tab
  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
  };
  return (
    <Row>
      <Col span={20}>
    <div className={styles.container}>
       <div>
      {/* Tab Buttons */}
      <div className="tab">
      <button
          className={`tablinks ${activeTab==="Tab1"? "active":""}`}
          onClick={(event) => openMainTab(event, 'Tab1')}
        >
         Poilcy Information
        </button>
        <button
          className={`tablinks ${activeTab==="Tab2"? "active":""}`}
          onClick={(event) => openMainTab(event, 'Tab2')}
        >
       Additional Insured
        </button>
      
      </div>

      {activeTab === "Tab1" && (
        <div id="Tab1" className="tabcontent">
<h2 className={styles.sectionName}>Policy Details</h2>
<Row gutter={16}>
            <Col span={10}>
          <Row gutter={16}>
            
                  <Col span={10}>
                   
                      <FormInput label="Term Type" value="Annual" reqired={true} />
                    
                  </Col>
                  <Col span={10}>
                  <FormInput label="Term Number" value="77890" reqired={true} />
                  </Col>
                
                  
                  <Col span={10}>
                  <FormInput label="Effective Date" value="09/03/2024" reqired={true} readOnly  />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Expiration Date" value="09/03/2025" reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Release as of Date" value="09/03/2024" reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Base state" value="California" reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <label className="customlable">
                  Affinity Group:
                    </label>
                  </Col>
                  <Col span={10}>
                  <label className="customlable">
                   This information will help the agent better understand your needs and objectives.
                    </label></Col>
                  <Col span={10}>
                  <FormInput label="Name" value="Daniel Smith" reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <label className="customlable">
               
                    </label></Col>
                  <Col span={10}>
                  <label className="customlable">
                 Producer of Records
                    </label>
                  </Col>
                  <Col span={10}>
                  <label className="customlable">
                 
                    </label></Col>
                  <Col span={10}>
                  <FormInput label=" Organization" value="All Risk Insurance" reqired={true} readOnly />
                  </Col>
                 
                  <Col span={10}>
                  <FormInput label=" Producer Code" value="######" reqired={true} readOnly />
                  </Col>
                </Row></Col>
                <Col span={10}>
          <Row gutter={16}>
          <Col span={10}>
                    <label className="customlable">
                    Primary Name Insured
                    </label>
                  </Col>
                  <Col span={10}>
                  <label className="customlable">
                  Change To:
                    </label></Col>
                    <Col span={10}>
                 
                  </Col>
                  <Col span={10}>
                  <FormInput label="" value="" readOnly  reqired={true} />
                    </Col>
                  <Col span={10}>
                  <FormInput label="Name" value="Workers Comp Test" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Phone" value="23145677" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Policy Address" value="2134 Parkway" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Country" value="" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="City" value="" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Country" value="United States" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="AddressType" value="" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                    <label className="customlable">
                    
                    </label>
                  </Col>
                  <Col span={10}>
                    <label className="customlable">
                    Business and Operation
                    </label>
                  </Col>
                  <Col span={10}>
                    <label className="customlable">
                    
                    </label>
                  </Col>
                  <Col span={10}>
                  <FormInput label="FEIN" value="##-######" readOnly  reqired={true} />
                  </Col>
                </Row></Col>
                </Row>
     
      </div>)}

      {activeTab === "Tab2" && (
        <div id="Tab2" className="tabcontent">
          <Row gutter={16}>
            <Col span={10}>
          <Row gutter={16}>
            
                  <Col span={10}>
                   
                      <FormInput label="Relationship to Primary Named insured" value="Relation" reqired={true} />
                    
                  </Col>
                  <Col span={10}>
                  <FormInput label="Industry Code" value="ax77890" reqired={true} />
                  </Col>
                  <Col span={10}>
                    <label className="customlable">
                    Contact Details
                    </label>
                  </Col>
                  <Col span={10}>
                  <label className="customlable">
                    Company
                    </label>
                
                  </Col>
                  
                  <Col span={10}>
                  <FormInput label="Office Phone" value="23177890" reqired={true} readOnly  />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Fax" value="" reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Primary Email" value="xyz@email.com" reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Secondary Email" value="xyz@email.com" reqired={true} readOnly />
                  </Col>

                  <Col span={10}>
                  <FormInput label="Address" value="" reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Country" value="United States" reqired={true} readOnly />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Address 1" value="Addressline 1" reqired={true} readOnly  />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Address 2" value="Addressline 2" reqired={true} readOnly />
                  </Col>

                  <Col span={10}>
                  <FormInput label="City" value="" reqired={true} readOnly  />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Country" value="Anchorage" reqired={true} readOnly />
                  </Col>

                  <Col span={10}>
                  <FormInput label="State" value="California" reqired={true} readOnly/>
                  </Col>
                  <Col span={10}>
                  <FormInput label="ZIP Code" value="9001-####" reqired={true} readOnly/>
                  </Col>
                  <Col span={10}>
                  <FormInput label="Address Type" value="Home" reqired={true} readOnly/>
                  </Col>
                  <Col span={10}>
                  <FormInput label="Address Description" value="" reqired={true} readOnly/>
                  </Col>
                  
                  
                </Row></Col>

                <Col span={10}>
          <Row gutter={16}>
          <Col span={10}>
                    <label className="customlable">
                    Official IDs
                    </label>
                  </Col>
                  <Col span={10}>
                  <label className="customlable">
                    
                    </label></Col>
                    <Col span={10}>
                  <FormInput label="FEIN" value="##-######" reqired={true} readOnly/>
                  </Col>
                  <Col span={10}>
                  <label className="customlable">
                    
                    </label></Col>
                  <Col span={10}>
                  <FormInput label="Address" value="Same Addresss as:" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Country" value="United States" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Address 1" value="Addressline 1" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Address 2" value="Addressline 2" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="City" value="" readOnly  reqired={true} />
                  </Col>
                  <Col span={10}>
                  <FormInput label="Country" value="United States" readOnly  reqired={true} />
                  </Col>
                
                  
                  <Col span={10}>
                    <label className="customlable">
                    License
                    </label>
                  </Col>
                  <Col span={10}>
                    <label className="customlable">
                    
                    </label>
                  </Col>
                  <Col span={10}>
                  <FormInput label="License Status" value="" readOnly  reqired={true} />
                  </Col>
                </Row></Col>
                </Row>
     
      </div>)}
    </div>
    </div></Col>
    <Col span={4}><Documents/></Col>
       </Row>
  );
}

export default PolicyForm;
