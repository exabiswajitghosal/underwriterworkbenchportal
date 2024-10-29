import React, { useState } from "react";
import styles from './LocationComponent.module.css';
import { MapView } from "./Map";
import { Col, Row, Select, Radio } from "antd";
import FormInput from "../../components/FormInput ";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'antd';
import Dropdown from "antd/es/dropdown/dropdown";
import Rpa from "./Rpa";

const { Option } = Select;

export function LocationBuildingTab() {
  const [selectedLocation, setSelectedLocation] = useState(""); // Initially empty to hide content
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };

  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
  };

  const nextTab = () => {
    if (activeTab === "Tab1") {
      setActiveTab("Tab2");
    } else if (activeTab === "Tab2") {
      setActiveTab("Tab1"); // Or add more tabs as needed
    }
  };
  return (
    <div className={styles.container}>
      {/* Flex container for label and dropdown */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "80px", marginTop: "30px", fontSize: "18px" }}>
        <span style={{ marginRight: "10px" }}>Please select the location:</span>
        <Select
          placeholder="Select Location"
          onChange={handleLocationChange}
          style={{ width: 250, height: 50 }}
        >
          <Option value="AddressLine 1">AddressLine 1</Option>
          <Option value="AddressLine 2">AddressLine 2</Option>
          <Option value="AddressLine 3">AddressLine 3</Option>
        </Select>
      </div>

      {/* Conditionally render content if a location is selected */}

      {/* Form to display selected row data */}
      {selectedLocation && (
        <div className={styles.container}>
          {/* Tab Buttons */}
          <div className="tab">
            <Button
              className={`tablinks ${activeTab === "Tab1" ? "active" : ""}`}
              onClick={(event) => openMainTab(event, 'Tab1')}
            >
              Add Buildings
            </Button>
            <Button
              className={`tablinks ${activeTab === "Tab2" ? "active" : ""}`}
              onClick={(event) => openMainTab(event, 'Tab2')}
            >
              Other Insights
            </Button>
            {/* <button
            className={`tablinks ${activeTab === "Tab3" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, 'Tab3')}
          >
            Additional Interest
          </button> */}
          </div>

          {/* Tab Content */}
          {selectedLocation ? (
            <>
              {activeTab === "Tab1" && (
                <div id="Tab1" className="tabcontent">

                  <div>

                    <Row gutter={16}>
                      {/* First Widget Section: Basic Information */}
                      <Col span={24}>
                        <div >


                          <Row gutter={16}>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Year Built</span>}
                                value="2019"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Square Footage</span>}
                                value="123"
                                required={true}

                              />
                            </Col>




                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Units Count</span>}
                                value="6"
                                required={true}
                              />
                            </Col>


                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px", marginRight: "40px" }}>Stories Count</span>}
                                value="12"
                                required={true}


                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>FreePlacesCount</span>}
                                value="3"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Rooms Count</span>}
                                value="222"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Parking Spaces Count</span>}
                                value="23"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Protective devices</span>}
                                value="yes"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>FreePlacesCount</span>}
                                value="Yes"

                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Construction Type</span>}
                                value="Joisted masomry (not reinforced )"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Fire Sprinkler</span>}
                                value="Partially sprinkled"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Sprinklered area</span>}
                                value="100%"
                                required={true}

                              />
                            </Col>


                          </Row>
                        </div>
                      </Col>

                      {/* Second Widget Section: Location Information */}

                      <Col span={24}>
                        <div >


                          <Row gutter={22}>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Roof type</span>}
                                value="B"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Estimated replacement cost value</span>}
                                value="213133"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Property class</span>}
                                value="Boarding and lodging houses"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Coverages</span>}
                                value="Building & personal property"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Rate Type</span>}
                                value="class"
                                required={true}

                              />
                            </Col>


                          </Row>
                        </div>


                        {/* Third Widget Section: Insured Information */}

                        <div >
                          <div className={styles.widgetHeader} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <h3 className={styles.widgetTitle}>Building Coverage</h3>
                            {/*<div  style={{ display: "flex", alignItems: "center" }}>
                                    <Tooltip title="Edit">
                                        <Button  shape="circle" onClick={handleEditBasicInfo} icon={<EditOutlined />} />
                                       </Tooltip>
                                       
                                        <Tooltip title="Create">
                                        <Button  shape="circle"  onClick={handleCreateNewBasicInfo} icon={<PlusCircleOutlined />} />
                                       </Tooltip>
                                       
                                    </div>*/}
                          </div>

                          <Row gutter={22}>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Cause of Loss</span>}
                                value="Basic"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Exclude Vandalism</span>}
                                value="Yes"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Exclude sprinkler</span>}
                                value="Yes"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Wind % deductable</span>}
                                value="NA"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Valuation Method</span>}
                                value="Replacement Cost"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Auto increase %</span>}
                                value="Decline"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Coinsurance</span>}
                                value="80%"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Building limit</span>}
                                value="2000000"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Building Deductible</span>}
                                value="1000"
                                required={true}

                              />
                            </Col>

                          </Row>
                        </div>
                        <div >
                          <div className={styles.widgetHeader} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <h3 className={styles.widgetTitle}>Business Personal Property</h3>
                            {/*<div  style={{ display: "flex", alignItems: "center" }}>
                                    <Tooltip title="Edit">
                                        <Button  shape="circle" onClick={handleEditBasicInfo} icon={<EditOutlined />} />
                                       </Tooltip>
                                       
                                        <Tooltip title="Create">
                                        <Button  shape="circle"  onClick={handleCreateNewBasicInfo} icon={<PlusCircleOutlined />} />
                                       </Tooltip>
                                       
                                    </div>*/}
                          </div>

                          <Row gutter={22}>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Business Personal Property Limit</span>}
                                value="1000000"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Business Personal Property Deductable</span>}
                                value="500"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Cause of loss</span>}
                                value="Basic"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Exclude Vandalism</span>}
                                value="yes"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Exclude Sprinkler</span>}
                                value="Yes"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Wind % deductable</span>}
                                value="NA"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Valuation Method</span>}
                                value="Replacement cost"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Reporting form</span>}
                                value="Non reporting"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Coinsurance</span>}
                                value="80%"
                                required={true}

                              />
                            </Col>

                          </Row>
                        </div>

                        <div >
                          <div className={styles.widgetHeader} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <h3 className={styles.widgetTitle}>Business Income Coverage</h3>
                            {/*<div  style={{ display: "flex", alignItems: "center" }}>
                                    <Tooltip title="Edit">
                                        <Button  shape="circle" onClick={handleEditBasicInfo} icon={<EditOutlined />} />
                                       </Tooltip>
                                       
                                        <Tooltip title="Create">
                                        <Button  shape="circle"  onClick={handleCreateNewBasicInfo} icon={<PlusCircleOutlined />} />
                                       </Tooltip>
                                       
                                    </div>*/}
                          </div>

                          <Row gutter={22}>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Income Limit- not manufactured or rental $</span>}
                                value="1000000"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Income Limit- Mfg only $</span>}
                                value="1000"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Income Limit- Rental only $</span>}
                                value="100"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Coinsurance</span>}
                                value="50%"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Cause of loss</span>}
                                value="Basic"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Waiting Period</span>}
                                value="24"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Period of coverages</span>}
                                value="30 days"
                                required={true}

                              />
                            </Col>




                          </Row>
                        </div>


                        <div >
                          <div className={styles.widgetHeader} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <h3 className={styles.widgetTitle}>Extra Expense Coverage</h3>
                            {/*<div  style={{ display: "flex", alignItems: "center" }}>
                                    <Tooltip title="Edit">
                                        <Button  shape="circle" onClick={handleEditBasicInfo} icon={<EditOutlined />} />
                                       </Tooltip>
                                       
                                        <Tooltip title="Create">
                                        <Button  shape="circle"  onClick={handleCreateNewBasicInfo} icon={<PlusCircleOutlined />} />
                                       </Tooltip>
                                       
                                    </div>*/}
                          </div>

                          <Row gutter={22}>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Limit</span>}
                                value="1000000"
                                required={true}

                              />
                            </Col>
                            <Col span={6}>
                              <FormInput
                                label={<span style={{ fontSize: "15px" }}>Monthly Limit</span>}
                                value="100%/100%"
                                required={true}

                              />
                            </Col>





                          </Row>
                          <Row gutter={16}>
                            <Col span={20}></Col>
                            <Col span={4}>
                              <div>
                                <button type="button" onClick={nextTab} style={{ width: "10rem", marginBottom: "1rem", marginTop: "1rem" }}>
                                  <b>Next</b>
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>

                      </Col>

                    </Row>
                  </div>
                </div>
              )}




              {activeTab === "Tab2" && (
                <div id="Tab2" className="tabcontent">
                  <Rpa />



                </div>)}
              {/* {activeTab === "Tab3" && (
        <div id="Tab3" className="tabcontent">
        <h5>Building Additional Interests</h5>
        </div>)} */}
            </>
          ) : (
            <div className={styles.noSelectionMessage}>
              <p>Please select a row to view its details.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LocationBuildingTab;
