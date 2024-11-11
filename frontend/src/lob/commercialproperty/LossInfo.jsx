import React, { useState } from "react";
import './LossInfo.css';  // Import the CSS file
import { Button, Card, Col, Modal, Row, Input, DatePicker, Checkbox, Layout } from 'antd';

const LossInfo = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState("PriorPolicies");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLossSummaryModalVisible, setIsLossSummaryModalVisible] = useState(false);
  const [isLossDetailModalVisible, setIsLossDetailModalVisible] = useState(false);
  const lossdata = [
    { policyYear: '2024', annualPremium: '500$', claims: '0', openClaims: '1', totalInsuredLosses: '10 000 $', totalPaidLosses: '200$', expenses: '100$' }
  ]
  const [newPolicy, setNewPolicy] = useState({
    carrier: "",
    policyNumber: "",
    effectiveDate: "",
    expirationDate: "",
    annualPremium: "",
    losses: "",
    totalLosses: ""
  });
  const [newLossSummary, setNewLossSummary] = useState({
    policyYear: "",
    annualPremium: "",
    claims: "",
    openClaims: "",
    totalInsuredLosses: "",
    totalPaidLosses: "",
    expenses: ""
  });
  const [newLossDetail, setNewLossDetail] = useState({
    claimNumber: "",
    effectiveDate: "",
    expirationDate: "",
    carrier: "",
    lob: "",
    accidentDescription: "",
    reportedDate: "",
    status: "",
    class: "",
    totalPaid: "",
    totalIncurred: ""
  });

  const [policies, setPolicies] = useState([]);
  const [selectedPolicies, setSelectedPolicies] = useState([]);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [lossSummaries, setLossSummaries] = useState(lossdata);


  const claimsData = [
    {
      claimNumber: "40051070-01",
      effectiveDate: "07/15/2023",
      expirationDate: "07/15/2024",
      carrier: "Allianz",
      lob: "Property",
      accidentDescription: "WATER DAMAGE",
      reportedDate: "6/22/2024",
      status: "closed",
      class: "0",
      totalPaid: "0",
      totalIncurred: "30987"
    },
    {
      claimNumber: "40051071-02",
      effectiveDate: "05/10/2022",
      expirationDate: "05/10/2023",
      carrier: "Zurich",
      lob: "Auto",
      accidentDescription: "COLLISION",
      reportedDate: "5/15/2022",
      status: "open",
      class: "1",
      totalPaid: "5000",
      totalIncurred: "12000"
    },
    {
      claimNumber: "40051072-03",
      effectiveDate: "08/20/2021",
      expirationDate: "08/20/2022",
      carrier: "AIG",
      lob: "Liability",
      accidentDescription: "SLIP AND FALL",
      reportedDate: "8/25/2021",
      status: "closed",
      class: "2",
      totalPaid: "8000",
      totalIncurred: "15000"
    }
  ];

  const [lossDetails, setLossDetails] = useState(claimsData);
  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
  };

  const handleCheckboxChangeclaim = (claim) => {
    setSelectedClaim(claim);
  };

  const showAddPolicyModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setPolicies([...policies, newPolicy]);
    setNewPolicy({
      carrier: "",
      policyNumber: "",
      effectiveDate: "",
      expirationDate: "",
      annualPremium: "",
      losses: "",
      totalLosses: ""
    });
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  // Loss Summary Modal Handlers
  const showLossSummaryModal = () => {
    setIsLossSummaryModalVisible(true);
  };
  const handleLossSummaryModalOk = () => {
    setLossSummaries([...lossSummaries, newLossSummary]);
    setNewLossSummary({
      policyYear: "",
      annualPremium: "",
      claims: "",
      openClaims: "",
      totalInsuredLosses: "",
      totalPaidLosses: "",
      expenses: ""
    });
    setIsLossSummaryModalVisible(false);
  };
  const handleLossSummaryModalCancel = () => {
    setIsLossSummaryModalVisible(false);
  };



  // Loss Detail Modal Handlers
  const showLossDetailModal = () => {
    setIsLossDetailModalVisible(true);
  };
  const handleLossDetailModalOk = () => {
    setLossDetails([...lossDetails, newLossDetail]);
    setNewLossDetail({
      claimNumber: "",
      effectiveDate: "",
      expirationDate: "",
      carrier: "",
      lob: "",
      accidentDescription: "",
      reportedDate: "",
      status: "",
      class: "",
      totalPaid: "",
      totalIncurred: ""
    });
    setIsLossDetailModalVisible(false);
  };
  const handleLossDetailModalCancel = () => {
    setIsLossDetailModalVisible(false);
  };




  const handleInputChange = (e, setStateFunction) => {
    const { name, value } = e.target;
    setStateFunction((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date, setStateFunction) => {
    setStateFunction((prev) => ({ ...prev, [name]: date ? date.format("YYYY-MM-DD") : "" }));
  };

  const handleCheckboxChange = (index) => {
    if (selectedPolicies.includes(index)) {
      setSelectedPolicies(selectedPolicies.filter((i) => i !== index));
    } else {
      setSelectedPolicies([...selectedPolicies, index]);
    }
  };

  const handleDelete = () => {
    setPolicies(policies.filter((_, index) => !selectedPolicies.includes(index)));
    setSelectedPolicies([]);
  };

  // Function to calculate the sum of total losses
  const calculateTotalLossesSum = () => {
    return policies.reduce((sum, policy) => {
      const losses = parseFloat(policy.totalLosses) || 0;
      return sum + losses;
    }, 0).toFixed(2);  // Fixed to two decimal places
  };
  const [selectedLossSummary, setSelectedLossSummary] = useState(null);
  const handleCheckboxChangspolicy = (loss) => {
    setSelectedLossSummary(selectedLossSummary?.policyYear === loss.policyYear ? null : loss);
  };
  const handleInputChangeManual = (field, value) => {
    setNewLossDetail((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };
  const [errors, setErrors] = useState({
    reportedDate: '',
    effectiveDate: '',
    expirationDate: ''
  });

  const handleDateChangeError = (field, value) => {
    // Validate for MM-DD-YYYY format
    const isValidDate = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/.test(value);

    setNewLossDetail((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));

    // Show error if date is invalid
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: !isValidDate && value.length === 10 ? 'Date must be in MM-DD-YYYY format.' : '',
    }));
  };


  const nextTab = () => {
    setActiveTab("Claims");
  };


  return (
    <Layout>
      <Row gutter={16}>
        <Col span={20}>
          <div className="maincontainer" id="lossInfo">
            <div id="tabcontainstwo" className="tab">
              <Button
                className={`tablinks ${activeTab === "PriorPolicies" ? "active" : ""}`}
                onClick={(event) => openMainTab(event, "PriorPolicies")}
              >
                Prior Policies
              </Button>
              <Button
                className={`tablinks ${activeTab === "Claims" ? "active" : ""}`}
                onClick={(event) => openMainTab(event, "Claims")}
              >
                Loss Summary
              </Button>
            </div>

            {activeTab === "PriorPolicies" && (
              <div id="PriorPolicies" className="tabcontent" style={{ marginBottom: "20px" }} >
                <Button type="primary" onClick={showAddPolicyModal} style={{ marginBottom: "10px", marginTop: '8px' }}>
                  Add Policy
                </Button>
                {selectedPolicies.length > 0 && (
                  <Button
                    type="primary"
                    onClick={handleDelete}
                    style={{ marginBottom: "20px", marginLeft: "10px" }}
                  >
                    Delete
                  </Button>
                )}
                <table>
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>&nbsp;</th>
                      <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Carrier</th>
                      <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Policy #</th>
                      <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Effective Date*</th>
                      <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Expiration Date</th>
                      <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Annual Premium</th>
                      <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}># Losses</th>
                      <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Total Losses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {policies.map((policy, index) => (
                      <tr key={index} className="priorpoliciestdata">
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedPolicies.includes(index)}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </td>
                        <td>{policy.carrier}</td>
                        <td>{policy.policyNumber}</td>
                        <td>{policy.effectiveDate}</td>
                        <td>{policy.expirationDate}</td>
                        <td>{policy.annualPremium}</td>
                        <td>{policy.losses}</td>
                        <td>{policy.totalLosses}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="7">Sum:</td>
                      <td>
                        <input type="text" value={`$${calculateTotalLossesSum()}`} readOnly />
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <Row gutter={16}>
                  <Col span={20}></Col>
                  <Col span={4}>
                    <div>
                      <button
                        onClick={nextTab}
                        type="submit"
                        style={{ width: '10rem', marginBottom: '1rem', marginTop: '1rem' }}
                      >
                        <b>Next</b>
                      </button>
                    </div>
                  </Col>
                </Row>
                <Modal
                  title="Add New Policy"
                  visible={isModalVisible}
                  onOk={handleModalOk}
                  onCancel={handleModalCancel}
                >
                  <Input
                    placeholder="Carrier"
                    name="carrier"
                    value={newPolicy.carrier}
                    onChange={(e) => handleInputChange(e, setNewPolicy)}
                    style={{ marginBottom: "10px" }}
                  />
                  <Input
                    placeholder="Policy #"
                    name="policyNumber"
                    value={newPolicy.policyNumber}
                    onChange={(e) => handleInputChange(e, setNewPolicy)}
                    style={{ marginBottom: "10px" }}
                  />
                  <DatePicker
                    placeholder="Effective Date"
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(date) => handleDateChange("effectiveDate", date, setNewPolicy)}
                  />
                  <DatePicker
                    placeholder="Expiration Date"
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(date) => handleDateChange("effectiveDate", date, setNewPolicy)}
                  />
                  <Input
                    placeholder="Annual Premium"
                    name="annualPremium"
                    value={newPolicy.annualPremium}
                    onChange={(e) => handleInputChange(e, setNewPolicy)}
                    style={{ marginBottom: "10px" }}
                  />
                  <Input
                    placeholder="# Losses"
                    name="losses"
                    value={newPolicy.losses}
                    onChange={(e) => handleInputChange(e, setNewPolicy)}
                    style={{ marginBottom: "10px" }}
                  />
                  <Input
                    placeholder="Total Losses"
                    name="totalLosses"
                    value={newPolicy.totalLosses}
                    onChange={(e) => handleInputChange(e, setNewPolicy)}
                    style={{ marginBottom: "10px" }}
                  />
                </Modal>
              </div>
            )}

            {activeTab === "Claims" && (
              <div id="Claims" className="tabcontent">
                <div style={{ marginTop: "20px" }}>
                  <h3>Loss Summary Details</h3>
                  {/* <Button type="primary" onClick={showLossSummaryModal} style={{ marginBottom: "10px" }}>
                  Add Loss
                </Button> */}
                  <table style={{ marginBottom: "20px" }}>
                    <thead>
                      <tr>
                        {/* <th style={{backgroundColor: "#5d9de2", height:'10%', color:'black', fontWeight: '500',}}>
                        
                      </th> */}
                        <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}></th>
                        <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Policy Year</th>
                        <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Annual Premium</th>
                        <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>#Claims</th>
                        <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>#Open Claims</th>
                        <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Total Insured Losses</th>
                        <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Total Paid Losses</th>
                        <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Expenses</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lossSummaries.map((loss, index) => (
                        <tr key={index} style={{ backgroundColor: selectedLossSummary?.policyYear === loss.policyYear ? '#e6f7ff' : 'transparent' }}>
                          <td>
                            <Checkbox
                              onChange={() => handleCheckboxChangspolicy(loss)}
                              checked={selectedLossSummary?.policyYear === loss.policyYear}
                            />
                          </td>
                          <td>{loss.policyYear}</td>
                          <td>{loss.annualPremium}</td>
                          <td>{loss.claims}</td>
                          <td>{loss.openClaims}</td>
                          <td>{loss.totalInsuredLosses}</td>
                          <td>{loss.totalPaidLosses}</td>
                          <td>{loss.expenses}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>




                  {/* Add Loss Summary Modal */}
                  <Modal
                    title="Add Loss Summary"
                    visible={isLossSummaryModalVisible}
                    onOk={handleLossSummaryModalOk}
                    onCancel={handleLossSummaryModalCancel}
                  >
                    <Input
                      placeholder="Policy Year"
                      name="policyYear"
                      value={newLossSummary.policyYear}
                      onChange={(e) => handleInputChange(e, setNewLossSummary)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Annual Premium"
                      name="annualPremium"
                      value={newLossSummary.annualPremium}
                      onChange={(e) => handleInputChange(e, setNewLossSummary)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Claims"
                      name="claims"
                      value={newLossSummary.claims}
                      onChange={(e) => handleInputChange(e, setNewLossSummary)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Open Claims"
                      name="openClaims"
                      value={newLossSummary.openClaims}
                      onChange={(e) => handleInputChange(e, setNewLossSummary)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Total Insured Losses"
                      name="totalInsuredLosses"
                      value={newLossSummary.totalInsuredLosses}
                      onChange={(e) => handleInputChange(e, setNewLossSummary)}
                      style={{ marginBottom: "10px" }}
                    />

                    <Input
                      placeholder="Total paid Losses"
                      name="totalPaidLosses"
                      value={newLossSummary.totalPaidLosses}
                      onChange={(e) => handleInputChange(e, setNewLossSummary)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="expenses"
                      name="expenses"
                      value={newLossSummary.expenses}
                      onChange={(e) => handleInputChange(e, setNewLossSummary)}
                      style={{ marginBottom: "10px" }}
                    />

                  </Modal>
                  {selectedLossSummary && (
                    <>
                      <h3>Loss Details</h3>
                      <Button type="primary" onClick={showLossDetailModal} style={{ marginBottom: "10px" }}>
                        Add Loss Detail
                      </Button>
                      <table>
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>

                            </th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Claim#</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Policy Eff Date</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Policy Exp Date</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Carrier</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>LOB</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Accident Description</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Reported Date</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Status</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Class</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Total Paid</th>
                            <th style={{ backgroundColor: "#5d9de2", height: '10%', color: 'black', fontWeight: '500', }}>Total Incurred</th>
                          </tr>
                        </thead>
                        <tbody>

                          {lossDetails.map((claim, index) => (
                            <tr key={index}>
                              <td>
                                <input
                                  type="checkbox"
                                  onChange={() => handleCheckboxChangeclaim(claim)}
                                  checked={selectedClaim?.claimNumber === claim.claimNumber}
                                />
                              </td>
                              <td>{claim.claimNumber}</td>
                              <td>{claim.effectiveDate}</td>
                              <td>{claim.expirationDate}</td>
                              <td>{claim.carrier}</td>
                              <td>{claim.lob}</td>
                              <td>{claim.accidentDescription}</td>
                              <td>{claim.reportedDate}</td>
                              <td>{claim.status}</td>
                              <td>{claim.class}</td>
                              <td>{claim.totalPaid}</td>
                              <td>{claim.totalIncurred}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
                  {/* Add Loss Detail Modal */}
                  <Modal
                    title="Add Loss Detail"
                    visible={isLossDetailModalVisible}
                    onOk={handleLossDetailModalOk}
                    onCancel={handleLossDetailModalCancel}
                  >
                    <Input
                      placeholder="Claim Number"
                      name="claimNumber"
                      value={newLossDetail.claimNumber}
                      onChange={(e) => handleInputChange(e, setNewLossDetail)}
                      style={{ marginBottom: "10px" }}
                    />
                    {/* <DatePicker
                    placeholder="Effective Date"
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(date) => handleDateChange("effectiveDate", date, setNewLossDetail)}
                  /> */}
                    {/* <DatePicker
                    placeholder="Effective Date"
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(date) => handleDateChange("effectiveDate", date, setNewLossDetail)}
                  /> */}
                    <Input
                      placeholder="Effective Date (MM-DD-YYYY)"
                      value={newLossDetail.effectiveDate}
                      onChange={(e) => handleDateChangeError('effectiveDate', e.target.value)}
                      style={{ marginBottom: "10px" }}
                      maxLength={10}
                    />
                    {errors.effectiveDate && (
                      <p style={{ color: 'red', marginTop: '-8px', marginBottom: '10px' }}>
                        {errors.effectiveDate}
                      </p>
                    )}
                    <Input
                      placeholder="Expiration Date (MM-DD-YYYY)"
                      value={newLossDetail.expirationDate}
                      onChange={(e) => handleDateChangeError('expirationDate', e.target.value)}
                      style={{ marginBottom: "10px" }}
                      maxLength={10}
                    />
                    {errors.expirationDate && (
                      <p style={{ color: 'red', marginTop: '-8px', marginBottom: '10px' }}>
                        {errors.expirationDate}
                      </p>
                    )}

                    <Input
                      placeholder="Carrier"
                      name="carrier"
                      value={newLossDetail.carrier}
                      onChange={(e) => handleInputChange(e, setNewLossDetail)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Lob"
                      name="lob"
                      value={newLossDetail.lob}
                      onChange={(e) => handleInputChange(e, setNewLossDetail)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Accident Description"
                      name="accidentDescription"
                      value={newLossDetail.accidentDescription}
                      onChange={(e) => handleInputChange(e, setNewLossDetail)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Reported Date: MM-DD-YYYY"
                      value={newLossDetail.reportedDate}
                      onChange={(e) => handleDateChangeError('reportedDate', e.target.value)}
                      style={{ marginBottom: "10px" }}
                      maxLength={10} // Limits input to 10 characters
                    />
                    {errors.reportedDate && (
                      <p style={{ color: 'red', marginTop: '-8px', marginBottom: '10px' }}>
                        {errors.reportedDate}
                      </p>
                    )}


                    <Input
                      placeholder="Status"
                      name="status"
                      value={newLossDetail.status}
                      onChange={(e) => handleInputChange(e, setNewLossDetail)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Class"
                      name="class"
                      value={newLossDetail.class}
                      onChange={(e) => handleInputChange(e, setNewLossDetail)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Total Paid"
                      name="totalPaid"
                      value={newLossDetail.totalPaid}
                      onChange={(e) => handleInputChange(e, setNewLossDetail)}
                      style={{ marginBottom: "10px" }}
                    />
                    <Input
                      placeholder="Total Incurred"
                      name="totalIncurred"
                      value={newLossDetail.totalIncurred}
                      onChange={(e) => handleInputChange(e, setNewLossDetail)}
                      style={{ marginBottom: "10px" }}
                    />

                  </Modal>
                  {selectedLossSummary && (
                    <>
                      <h3>Notes</h3>
                      <Card
                        title="Claim Notes History"
                        style={{
                          marginBottom: "2rem",
                          borderRadius: "12px",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        }}
                      >

                        {selectedClaim ? (

                          <ul style={{ listStyleType: "circle", paddingLeft: "2rem" }}>
                            <p style={{ fontSize: "0.9rem" }}>Notes: (Dated) - 30/10/2024</p>
                            <a href="#" style={{ textDecoration: "underline", fontSize: "0.9rem", marginBottom: "1rem", display: "inline-block" }}>
                              Link to the Popup
                            </a>
                            <li>Accident Date</li>
                            <li>Report Date</li>
                            <li>Expenses Reserve</li>
                            <li>Paid Loss</li>
                            <li>Total Loss</li>
                            <li>Carrier: {selectedClaim.carrier}</li>
                            <li>LOB: {selectedClaim.lob}</li>
                            <li>Status: {selectedClaim.status}</li>
                            <li>Total Paid: {selectedClaim.totalPaid}</li>
                            <li>Total Incurred: {selectedClaim.totalIncurred}</li>
                          </ul>
                        ) : (
                          <p>Please first select any row to see the history</p>
                        )}


                      </Card>
                      <Row gutter={16}>
                        <Col span={20}></Col>
                        <Col span={4}>
                          <div>
                            <button
                              onClick={onNext}
                              type="submit"
                              style={{ width: '10rem', marginBottom: '1rem', marginTop: '1rem' }}
                            >
                              <b>Next</b>
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </>)}
                </div>
              </div>
            )}
          </div>
        </Col>

      </Row>

    </Layout>
  );
};
export default LossInfo;
