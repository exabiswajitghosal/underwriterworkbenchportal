import React, { useState } from "react";
import styles from './LocationComponent.module.css';
import { Col, Row, Select, Button, Radio, Checkbox } from "antd";
import FormInput from "../../components/FormInput";
import "bootstrap/dist/css/bootstrap.min.css";
import Rpa from "./Rpa";

const { Option } = Select;

export function LocationBuildingTab() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [activeTab, setActiveTab] = useState("Tab1");
  const [locationData, setLocationData] = useState({});
  const [formData, setFormData] = useState({
    yearBuilt: "", 
    squareFootage: "",
    unitsCount:"", 
    storiesCount: "",
    freePlacesCount:"",
    roomsCount:"",
    parkingSpacesCount:"",
    protectiveDevices:"",
    freePlacesCount2:"",
    constructionType:"",
    fireSprinkler:"",
    sprinkleredArea:"",
    roofType: "",
    estimatedrcv:"",
    propertyClass:"",
    coverages:"",
    rateType:"",
    causeofLoss:"",
    excludeVandalism:"",
    excludeSprinkler:"",
    windDeductable:"",
    valuationMethod:"",
    autoIncrease:"",
    coinsurance:"",
    buildingLimit:"",
    buildingDeductable:"",
    bppl:"",
    bppd:"",
    causeofLoss2:"",
    excludeVandalism2:"",
    excludeSprinkler2:"",
    windDeductable2:"",
    valuationMethod2:"",
    reportingForm:"",
    coinsurance2:"",
    incomeLimitManufacture:"",
    incomeLimitMfg:"",
    incomeLimitrental:"",
    coinsurance3:"",
    causeofLoss3:"",
    waitingPeriod:"",
    periodOfCoverages:"",
    floodCoveragelimit:"",
    floodCoveragemonthlyLimit:"",
    earthquakeCoveragelimit:"",
    earthquakeCoveragemonthlylimit:"",
    showFloodFields: false,
    showEarthquakeFields: false,
  });
  const [selectedBuildingIndex, setSelectedBuildingIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    setSelectedBuildingIndex(null);
    setIsEditing(false);

    // Set form data to blank for the new location if no data exists
    setFormData({
      yearBuilt: "", 
      squareFootage: "",
      unitsCount:"", 
      storiesCount: "",
      freePlacesCount:"",
      roomsCount:"",
      parkingSpacesCount:"",
      protectiveDevices:"",
      freePlacesCount2:"",
      constructionType:"",
      fireSprinkler:"",
      sprinkleredArea:"",
      roofType: "",
      estimatedrcv:"",
      propertyClass:"",
      coverages:"",
      rateType:"",
      causeofLoss:"",
      excludeVandalism:"",
      excludeSprinkler:"",
      windDeductable:"",
      valuationMethod:"",
      autoIncrease:"",
      coinsurance:"",
      buildingLimit:"",
      buildingDeductable:"",
      bppl:"",
      bppd:"",
      causeofLoss2:"",
      excludeVandalism2:"",
      excludeSprinkler2:"",
      windDeductable2:"",
      valuationMethod2:"",
      reportingForm:"",
      coinsurance2:"",
      incomeLimitManufacture:"",
      incomeLimitMfg:"",
      incomeLimitrental:"",
      coinsurance3:"",
      causeofLoss3:"",
      waitingPeriod:"",
      periodOfCoverages:"",
      floodCoveragelimit:"",
      floodCoveragemonthlyLimit:"",
      earthquakeCoveragelimit:"",
      earthquakeCoveragemonthlylimit:"",
      showFloodFields: false,
    showEarthquakeFields: false,
    });
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const addOrUpdateBuilding = () => {
    const updatedBuildings = locationData[selectedLocation] || [];
    if (isEditing) {
      // Update existing building
      updatedBuildings[selectedBuildingIndex] = formData;
      setIsEditing(false);
      setSelectedBuildingIndex(null);
    } else {
      // Add new building
      updatedBuildings.push(formData);
    }

    setLocationData({
      ...locationData,
      [selectedLocation]: updatedBuildings,
    });

    // Reset form
    setFormData({
      yearBuilt: "", 
      squareFootage: "",
      unitsCount:"", 
      storiesCount: "",
      freePlacesCount:"",
      roomsCount:"",
      parkingSpacesCount:"",
      protectiveDevices:"",
      freePlacesCount2:"",
      constructionType:"",
      fireSprinkler:"",
      sprinkleredArea:"",
      roofType: "",
      estimatedrcv:"",
      propertyClass:"",
      coverages:"",
      rateType:"",
      causeofLoss:"",
      excludeVandalism:"",
      excludeSprinkler:"",
      windDeductable:"",
      valuationMethod:"",
      autoIncrease:"",
      coinsurance:"",
      buildingLimit:"",
      buildingDeductable:"",
      bppl:"",
      bppd:"",
      causeofLoss2:"",
      excludeVandalism2:"",
      excludeSprinkler2:"",
      windDeductable2:"",
      valuationMethod2:"",
      reportingForm:"",
      coinsurance2:"",
      incomeLimitManufacture:"",
      incomeLimitMfg:"",
      incomeLimitrental:"",
      coinsurance3:"",
      causeofLoss3:"",
      waitingPeriod:"",
      periodOfCoverages:"",
      floodCoveragelimit:"",
      floodCoveragemonthlyLimit:"",
      earthquakeCoveragelimit:"",
      earthquakeCoveragemonthlylimit:"",
      showFloodFields: false,
    showEarthquakeFields: false,
      });
  };

  const selectBuilding = (index) => {
    const buildings = locationData[selectedLocation] || [];
    setSelectedBuildingIndex(index);
    setFormData(buildings[index]);
    setIsEditing(true);
  };

  const deleteBuilding = (index) => {
    const updatedBuildings = locationData[selectedLocation] || [];
    updatedBuildings.splice(index, 1);

    setLocationData({
      ...locationData,
      [selectedLocation]: updatedBuildings,
    });

    if (selectedBuildingIndex === index) {
      setFormData({ 
        yearBuilt: "", 
        squareFootage: "",
        unitsCount:"", 
        storiesCount: "",
        freePlacesCount:"",
        roomsCount:"",
        parkingSpacesCount:"",
        protectiveDevices:"",
        freePlacesCount2:"",
        constructionType:"",
        fireSprinkler:"",
        sprinkleredArea:"",
        roofType: "",
        estimatedrcv:"",
        propertyClass:"",
        coverages:"",
        rateType:"",
        causeofLoss:"",
        excludeVandalism:"",
        excludeSprinkler:"",
        windDeductable:"",
        valuationMethod:"",
        autoIncrease:"",
        coinsurance:"",
        buildingLimit:"",
        buildingDeductable:"",
        bppl:"",
        bppd:"",
        causeofLoss2:"",
        excludeVandalism2:"",
        excludeSprinkler2:"",
        windDeductable2:"",
        valuationMethod2:"",
        reportingForm:"",
        coinsurance2:"",
        incomeLimitManufacture:"",
        incomeLimitMfg:"",
        incomeLimitrental:"",
        coinsurance3:"",
        causeofLoss3:"",
        waitingPeriod:"",
        periodOfCoverages:"",
        floodCoveragelimit:"",
        floodCoveragemonthlyLimit:"",
        earthquakeCoveragelimit:"",
        earthquakeCoveragemonthlylimit:"",
        showFloodFields: false,
    showEarthquakeFields: false,

       });
      setIsEditing(false);
      setSelectedBuildingIndex(null);
    }
  };

  const nextTab = () => {
    setActiveTab("Tab2");
  };
 
  const handleAdditionalCoverageInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: !prevData[field],
    }));
  };
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "80px", marginTop: "30px", fontSize: "18px" }}>
        <span style={{ marginRight: "10px" }}>Please select the location:</span>
        <Select
          placeholder="Select Location"
          onChange={handleLocationChange}
          value={selectedLocation}
          style={{ width: 250, height: 50 }}
        >
          <Option value="1234 Elm Street">1234 Elm Street,Apt 101,California,90210,USA</Option>
          <Option value="123 Innovation Drive">123 Innovation Drive,Suite 200,CA,90210,USA</Option>
          
        </Select>
      </div>

      {selectedLocation && (
        <div className={styles.container}>
          <div className="tab">
            <Button
              className={`tablinks ${activeTab === "Tab1" ? "active" : ""}`}
              onClick={() => setActiveTab("Tab1")}
            >
              Add Buildings
            </Button>
            <Button
              className={`tablinks ${activeTab === "Tab2" ? "active" : ""}`}
              onClick={() => setActiveTab("Tab2")}
            >
              Other Insights
            </Button>
          </div>

          {activeTab === "Tab1" && (
            <div id="Tab1" className="tabcontent">
              {/* Building List Table */}
              <div style={{ marginBottom: "20px" }}>
                <h5  style={{marginBottom: 20}}>Building List for {selectedLocation}</h5>
                <table className="table"  style={{marginBottom: 90}}>
                  <thead >
                    <tr>
                      <th style={{backgroundColor: "#5d9de2"}}>Select</th>
                      <th style={{backgroundColor: "#5d9de2"}}>SL.</th>
                      <th style={{backgroundColor: "#5d9de2"}}>Location Details</th>
                      <th style={{backgroundColor: "#5d9de2"}}>Year Built</th>
                      <th style={{backgroundColor: "#5d9de2"}}>Square Footage</th>
                      <th style={{backgroundColor: "#5d9de2"}}>Roof Type</th>
                      <th style={{backgroundColor: "#5d9de2"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(locationData[selectedLocation] || []).map((building, index) => (
                      <tr key={index}>
                        <td>
                          <Radio
                            checked={selectedBuildingIndex === index}
                            onChange={() => selectBuilding(index)}
                          />
                        </td>
                        <td>{index + 1}</td>
                        <td>{selectedLocation}</td>
                        <td>{building.yearBuilt}</td>
                        <td>{building.squareFootage}</td>
                        <td>{building.roofType}</td>
                        <td>
                          <a href="#" onClick={() => deleteBuilding(index)}>Delete</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Form to Add or Edit Building */}
              {/* <div>
                <Row gutter={16}>
                  <Col span={6}>
                    <FormInput
                      label={<span style={{ fontSize: "15px" }}>Year Built</span>}
                      value={formData.yearBuilt}
                      required={true}
                      onChange={(e) => handleInputChange("yearBuilt", e.target.value)}
                    />
                  </Col>
                  <Col span={6}>
                    <FormInput
                      label={<span style={{ fontSize: "15px" }}>Square Footage</span>}
                      value={formData.squareFootage}
                      required={true}
                      onChange={(e) => handleInputChange("squareFootage", e.target.value)}
                    />
                  </Col>
                  <Col span={6}>
                    <FormInput
                      label={<span style={{ fontSize: "15px" }}>Roof Type</span>}
                      value={formData.roofType}
                      required={true}
                      onChange={(e) => handleInputChange("roofType", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row justify="end" style={{ marginTop: "20px" }}>
                  <Button
                    onClick={addOrUpdateBuilding}
                    style={{ marginRight: "10px" }}
                  >
                    {isEditing ? "OK" : "Add Building"}
                  </Button>
                  <Button type="primary" onClick={nextTab}>
                    Next
                  </Button>
                </Row>
              </div> */}

              <div>

<Row gutter={16}>
  {/* First Widget Section: Basic Information */}
  <Col span={24}>
    <div >


      <Row gutter={16}>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Year Built</span>}
            value={formData.yearBuilt}
            required={true}
            onChange={(e) => handleInputChange("yearBuilt", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Square Footage</span>}
            value={formData.squareFootage}
            required={true}
            onChange={(e) => handleInputChange("squareFootage", e.target.value)}
          />
        </Col>




        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Units Count</span>}
            value={formData.unitsCount}
            required={true}
            onChange={(e) => handleInputChange("unitsCount", e.target.value)}
          />
        </Col>


        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px", marginRight: "40px" }}>Stories Count</span>}
            value={formData.storiesCount}
            required={true}
            onChange={(e) => handleInputChange("storiesCount", e.target.value)}


          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>FreePlacesCount</span>}
            value={formData.freePlacesCount}
            required={true}
            onChange={(e) => handleInputChange("freePlacesCount", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Rooms Count</span>}
            value={formData.roomsCount}
            required={true}
            onChange={(e) => handleInputChange("roomsCount", e.target.value)}
          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Parking Spaces Count</span>}
            value={formData.parkingSpacesCount}
            required={true}
            onChange={(e) => handleInputChange("parkingSpacesCount", e.target.value)}
          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Protective devices</span>}
            value={formData.protectiveDevices}
            required={true}
            onChange={(e) => handleInputChange("protectiveDevices", e.target.value)}
          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>FreePlacesCount</span>}
            value={formData.freePlacesCount2}

            required={true}
            onChange={(e) => handleInputChange("freePlacesCount2", e.target.value)}
          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Construction Type</span>}
            value={formData.constructionType}
            required={true}
            onChange={(e) => handleInputChange("constructionType", e.target.value)}
          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Fire Sprinkler</span>}
            value={formData.fireSprinkler}
            required={true}
            onChange={(e) => handleInputChange("fireSprinkler", e.target.value)}
          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Sprinklered area</span>}
            value={formData.sprinkleredArea}
            required={true}
            onChange={(e) => handleInputChange("sprinkleredArea", e.target.value)}
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
            value={formData.roofType}
                      required={true}
                      onChange={(e) => handleInputChange("roofType", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Estimated replacement cost value</span>}
            value={formData.estimatedrcv}
            required={true}
            onChange={(e) => handleInputChange("estimatedrcv", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Property class</span>}
            value={formData.propertyClass}
            required={true}
            onChange={(e) => handleInputChange("propertyClass", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Coverages</span>}
            value={formData.coverages}
            required={true}
            onChange={(e) => handleInputChange("coverages", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Rate Type</span>}
            value={formData.rateType}
            required={true}
            onChange={(e) => handleInputChange("rateType", e.target.value)}

          />
        </Col>


      </Row>
    </div>


    {/* Third Widget Section: Insured Information */}

    <div >
      <div className={styles.widgetHeader} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h5 className={styles.widgetTitle}>Property Damage Coverage</h5>
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
        {/* <Col span={6}>
           <FormInput
            label={<span style={{ fontSize: "15px" }}>Cause of Loss</span>}
            value={formData.causeofLoss}
            required={true}
            onChange={(e) => handleInputChange("causeofLoss", e.target.value)}

          /> 
        </Col> */}
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Exclude Vandalism</span>}
            value={formData.excludeVandalism}
            required={true}
            onChange={(e) => handleInputChange("excludeVandalism", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Exclude sprinkler</span>}
            value={formData.excludeSprinkler}
            required={true}
            onChange={(e) => handleInputChange("excludeSprinkler", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Wind % deductable</span>}
            value={formData.windDeductable}
            required={true}
            onChange={(e) => handleInputChange("windDeductable", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Valuation Method</span>}
            value={formData.valuationMethod}
            required={true}
            onChange={(e) => handleInputChange("valuationMethod", e.target.value)}


          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Auto increase %</span>}
            value={formData.autoIncrease}
            required={true}
            onChange={(e) => handleInputChange("autoIncrease", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Coinsurance</span>}
            value={formData.coinsurance}
            required={true}
            onChange={(e) => handleInputChange("coinsurance", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Building Limit</span>}
            value={formData.buildingLimit}
            required={true}
            onChange={(e) => handleInputChange("buildingLimit", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Building Deductable</span>}
            value={formData.buildingDeductable}
            required={true}
            onChange={(e) => handleInputChange("buildingDeductable", e.target.value)}
          />
        </Col>

      </Row>
    </div>
    <div >
      <div className={styles.widgetHeader} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h5 className={styles.widgetTitle}>Business Personal Property</h5>
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
            value={formData.bppl}
            required={true}
            onChange={(e) => handleInputChange("bppl", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Business Personal Property Deductable</span>}
            value={formData.bppd}
            required={true}
            onChange={(e) => handleInputChange("bppd", e.target.value)}

          />
        </Col>
        {/* <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Cause of loss</span>}
            value={formData.causeofLoss2}
            required={true}
            onChange={(e) => handleInputChange("causeofLoss2", e.target.value)}

          />
        </Col> */}
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Exclude Vandalism</span>}
            value={formData.excludeVandalism2}
            required={true}
            onChange={(e) => handleInputChange("excludeVandalism2", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Exclude Sprinkler</span>}
            value={formData.excludeSprinkler2}
            required={true}
            onChange={(e) => handleInputChange("excludeSprinkler2", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Wind % deductable</span>}
            value={formData.windDeductable2}
            required={true}
            onChange={(e) => handleInputChange("windDeductable2", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Valuation Method</span>}
            value={formData.valuationMethod2}
            required={true}
            onChange={(e) => handleInputChange("valuationMethod2", e.target.value)}
          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Reporting form</span>}
            value={formData.reportingForm}
            required={true}
            onChange={(e) => handleInputChange("reportingForm", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Coinsurance</span>}
            value={formData.coinsurance2}
            required={true}
            onChange={(e) => handleInputChange("coinsurance2", e.target.value)}

          />
        </Col>

      </Row>
    </div>

    <div >
      <div className={styles.widgetHeader} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h5 className={styles.widgetTitle}>Business Income Coverage</h5>
       
      </div>

      <Row gutter={22}>
        {/* <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Income Limit- not manufactured or rental $</span>}
            value={formData.incomeLimitManufacture}
            required={true}
            onChange={(e) => handleInputChange("incomeLimitManufacture", e.target.value)}


          />
        </Col> */}
        {/* <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Income Limit- Mfg only $</span>}
            value={formData.incomeLimitMfg}
            required={true}
            onChange={(e) => handleInputChange("incomeLimitMfg", e.target.value)}


          />
        </Col> */}
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Income Limit $</span>}
            value={formData.incomeLimitrental}
            required={true}
            onChange={(e) => handleInputChange("incomeLimitrental", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Coinsurance</span>}
            value={formData.coinsurance3}
            required={true}
            onChange={(e) => handleInputChange("coinsurance3", e.target.value)}
          />
        </Col>
        {/* <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Cause of loss</span>}
            value={formData.causeofLoss3}
            required={true}
            onChange={(e) => handleInputChange("causeofLoss3", e.target.value)}

          />
        </Col> */}
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Waiting Period</span>}
            value={formData.waitingPeriod}
            required={true}
            onChange={(e) => handleInputChange("waitingPeriod", e.target.value)}

          />
        </Col>
        <Col span={6}>
          <FormInput
            label={<span style={{ fontSize: "15px" }}>Period of coverages</span>}
            value={formData.periodOfCoverages}
            required={true}
            onChange={(e) => handleInputChange("periodOfCoverages", e.target.value)}
          />
        </Col>




      </Row>
    </div>


    <div>
      <div className={styles.widgetHeader} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h5 className={styles.widgetTitle}>Additional Coverage</h5>
      </div>

      <Row gutter={22} style={{ marginBottom: '20px' }}>
        <Col>
          <Checkbox
            checked={formData.showFloodFields}
            onChange={() => handleCheckboxChange('showFloodFields')}
          >
            Flood Coverage
          </Checkbox>
        </Col>
        <Col>
          <Checkbox
            checked={formData.showEarthquakeFields}
            onChange={() => handleCheckboxChange('showEarthquakeFields')}
          >
            Earthquake Coverage
          </Checkbox>
        </Col>
      </Row>

      {formData.showFloodFields && (
        <Row gutter={22}>
          <Col span={6}>
            <FormInput
              label={<span style={{ fontSize: "15px" }}>Flood Coverage Limit</span>}
              value={formData.floodCoveragelimit}
              required={true}
              onChange={(e) => handleAdditionalCoverageInputChange("floodCoveragelimit", e.target.value)}
            />
          </Col>
          <Col span={6}>
            <FormInput
              label={<span style={{ fontSize: "15px" }}>Flood Coverage Monthly Limit</span>}
              value={formData.floodCoveragemonthlyLimit}
              required={true}
              onChange={(e) => handleAdditionalCoverageInputChange("floodCoveragemonthlyLimit", e.target.value)}
            />
          </Col>
        </Row>
      )}

      {formData.showEarthquakeFields && (
        <Row gutter={22}>
          <Col span={6}>
            <FormInput
              label={<span style={{ fontSize: "15px" }}>Earthquake Coverage Limit</span>}
              value={formData.earthquakeCoveragelimit
              }
              required={true}
              onChange={(e) => handleAdditionalCoverageInputChange("floodCoveragelimit", e.target.value)}
            />
          </Col>
          <Col span={6}>
            <FormInput
              label={<span style={{ fontSize: "15px" }}>Earthquake Coverage Monthly Limit</span>}
              value={formData.earthquakeCoveragemonthlylimit}
              required={true}
              onChange={(e) => handleAdditionalCoverageInputChange("floodCoveragemonthlyLimit", e.target.value)}
            />
          </Col>
        </Row>
      )}
    </div>

  </Col>

</Row>
<Row justify="end" style={{ marginTop: "20px" ,marginBottom: "20px"}}>
        <Col span={20}></Col>
        <Col span={4}>
                  <Button type="primary"
                    onClick={addOrUpdateBuilding}
                    style={{ marginRight: "10px" }}
                  >
                    {isEditing ? "OK" : "Add Building"}
                  </Button>
                  <Button type="primary" onClick={nextTab}>
                    Next
                  </Button>
                  </Col>
                </Row>
</div>
            </div>
          )}

          {activeTab === "Tab2" && (
            <div id="Tab2" className="tabcontent">
              <Rpa />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LocationBuildingTab;
