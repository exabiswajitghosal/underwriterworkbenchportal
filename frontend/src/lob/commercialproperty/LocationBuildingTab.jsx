import React, { useState } from "react";
import styles from './LocationComponent.module.css';
import { MapView } from "./Map";
import { Col, Row, Select, Radio } from "antd";
import FormInput from "./FormInput ";
import "bootstrap/dist/css/bootstrap.min.css";

const { Option } = Select;

export function LocationBuildingTab() {
  const [selectedLocation, setSelectedLocation] = useState(""); // Initially empty to hide content

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };
  const [activeTab, setActiveTab] = useState("Tab1");
  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
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
          <Option value="Location 1">Location 1</Option>
          <Option value="Location 2">Location 2</Option>
          <Option value="Location 3">Location 3</Option>
        </Select>
      </div>

      {/* Conditionally render content if a location is selected */}

      {/* Form to display selected row data */}
      {selectedLocation && (
        <div className={styles.container}>
          {/* Tab Buttons */}
          <div className="tab">
            <button
              className={`tablinks ${activeTab === "Tab1" ? "active" : ""}`}
              onClick={(event) => openMainTab(event, 'Tab1')}
            >
              Add Buildings
            </button>
            <button
              className={`tablinks ${activeTab === "Tab2" ? "active" : ""}`}
              onClick={(event) => openMainTab(event, 'Tab2')}
            >
              Other Insights
            </button>
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
                      <Col span={12}>
                        <Row gutter={56}>
                          <Col span={10}>
                            <h5 className={styles.sectionTitle}>Building Information</h5>
                          </Col>
                          <Col span={10}>

                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Location"
                              value={`${selectedLocation}: 2134 Parkway, Pigeon Forge, CA`}
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Description"
                              value="Business property"
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Class Code"
                              value="787737"
                              required={true}
                              readOnly
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Property Class Description"
                              value="functional property"
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Coverage Form"
                              value="None"
                              required={true}
                              readOnly
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Rate Type"
                              value="Class"
                              required={true}
                              readOnly
                            />
                          </Col>
                          <Col span={10}>
                            <h5 className={styles.sectionTitle}>Construction</h5>
                          </Col>
                          <Col span={10}>

                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Year Built"
                              value="2020"
                              required={true}
                              readOnly
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Construction Type"
                              value="None"
                              required={true}
                              readOnly
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="# of Stories"
                              value="2"
                              required={true}
                              readOnly
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="# of Basements"
                              value="1"
                              required={true}
                              readOnly
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Total Area (excl basement)"
                              value="1200"
                              required={true}
                              readOnly
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col span={12}>
                        <Row gutter={56}>

                          <Col span={15}>
                            <h5 className={styles.sectionTitle}>Burglar Alarm</h5>
                          </Col>

                          <Col span={10}>
                            <FormInput
                              label="Burglary Safeguard"
                              value="None"
                              readOnly
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            {/* <FormInput
                    label="Has Alarm"
                    type="checkbox"
                    readOnly
                    required={true}
                  /> */}
                            <label style={{ fontSize: "15px", marginRight: "40px", marginBottom: "8px", marginTop: "12px" }}>Has Alarm:</label>
                            <Radio.Group
                              readOnly
                              required={true}
                            >
                              <Radio value={true} >Yes</Radio>
                              <Radio value={false}>No</Radio>

                              {/* Add more Radio options as needed */}
                            </Radio.Group>
                          </Col>
                          <Col span={10}>
                            <h5 className={styles.sectionTitle}>Improvements</h5>
                          </Col>
                          <Col span={10}>

                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Year of Last Update - Heating"
                              value="2022"
                              readOnly
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Year of Last Update - Plumbing"
                              value="2015"
                              readOnly
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Year of Last Update - Roofing"
                              value="2021"
                              readOnly
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Year of Last Update - Wiring"
                              value="2015"
                              readOnly
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <h5 className={styles.sectionTitle}>Other</h5>
                          </Col>
                          <Col span={10}>

                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Interest Type"
                              value="None"
                              readOnly
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="Rented To Others"
                              value="None"
                              readOnly
                              required={true}
                            />
                          </Col>
                          <Col span={10}>
                            <FormInput
                              label="% Vacant"
                              value="None"
                              readOnly
                              required={true}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}




              {activeTab === "Tab2" && (
                <div id="Tab2" className="tabcontent">



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
