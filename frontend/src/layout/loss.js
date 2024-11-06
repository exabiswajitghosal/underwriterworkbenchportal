import React, { useState } from "react";
import './LossInfo.css';  // Import the CSS file
import { Button, Card, Col, Modal, Row, Input, DatePicker } from 'antd';

const LossInfo = () => {
  const [activeTab, setActiveTab] = useState("PriorPolicies");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newPolicy, setNewPolicy] = useState({
    carrier: "",
    policyNumber: "",
    effectiveDate: "",
    expirationDate: "",
    annualPremium: "",
    losses: "",
    totalLosses: ""
  });

  const [policies, setPolicies] = useState([]);
  const [selectedPolicies, setSelectedPolicies] = useState([]);
  const [selectedClaim, setSelectedClaim] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPolicy({ ...newPolicy, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setNewPolicy({ ...newPolicy, [name]: date ? date.format("YYYY-MM-DD") : "" });
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

  return (
    <Row>
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
              Claims
            </Button>
          </div>

          {activeTab === "PriorPolicies" && (
            <div id="PriorPolicies" className="tabcontent" style={{ marginBottom: "20px" }} >
              <Button type="primary" onClick={showAddPolicyModal} style={{ marginBottom: "10px" }}>
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
                    <th>&nbsp;</th>
                    <th>Carrier</th>
                    <th>Policy #</th>
                    <th>Effective Date*</th>
                    <th>Expiration Date</th>
                    <th>Annual Premium</th>
                    <th># Losses</th>
                    <th>Total Losses</th>
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
                      <input type="text" placeholder="$" readOnly />
                    </td>
                  </tr>
                </tfoot>
              </table>

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
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px" }}
                />
                <Input
                  placeholder="Policy #"
                  name="policyNumber"
                  value={newPolicy.policyNumber}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px" }}
                />
                <DatePicker
                  placeholder="Effective Date"
                  style={{ width: "100%", marginBottom: "10px" }}
                  onChange={(date) => handleDateChange("effectiveDate", date)}
                />
                <DatePicker
                  placeholder="Expiration Date"
                  style={{ width: "100%", marginBottom: "10px" }}
                  onChange={(date) => handleDateChange("expirationDate", date)}
                />
                <Input
                  placeholder="Annual Premium"
                  name="annualPremium"
                  value={newPolicy.annualPremium}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px" }}
                />
                <Input
                  placeholder="# Losses"
                  name="losses"
                  value={newPolicy.losses}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px" }}
                />
                <Input
                  placeholder="Total Losses"
                  name="totalLosses"
                  value={newPolicy.totalLosses}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px" }}
                />
              </Modal>
            </div>
          )}

          {activeTab === "Claims" && (
            <div id="Claims" className="tabcontent">
              <div style={{ marginTop: "20px" }}>
                <h3>Loss Summary</h3>
                <table style={{ marginBottom: "20px" }}>
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" style={{ height: '2px', width: '2px' }} />
                      </th>
                      <th>Policy Year</th>
                      <th>Annual Premium</th>
                      <th>#Claims</th>
                      <th>#Open Claims</th>
                      <th>Total Insured Losses</th>
                      <th>Total Paid Losses</th>
                      <th>Expenses</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" style={{ marginLeft: "5px", height: '2px', width: '2px' }} />
                      </td>
                      <td>2024</td>
                      <td>$4</td>
                      <td>0</td>
                      <td>0</td>
                      <td>$31,346.62</td>
                      <td>$13,460.12</td>
                      <td>$6,292.0</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Loss Details</h3>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>Claim#</th>
                      <th>Policy Eff Date</th>
                      <th>Policy Exp Date</th>
                      <th>Carrier</th>
                      <th>LOB</th>
                      <th>Accident Description</th>
                      <th>Reported Date</th>
                      <th>Status</th>
                      <th>Class</th>
                      <th>Total Paid</th>
                      <th>Total Incurred</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claimsData.map((claim, index) => (
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
              </div>
            </div>
          )}
        </div>
      </Col>

    </Row>
  );
};
export default LossInfo;
