import React, { useState } from "react";
import './LossInfo.css';  // Import the CSS file
import { Col, Row } from 'antd';
import Documents from "./RightSidebar";
const LossInfo = () => {
  const [activeTab, setActiveTab] = useState("PriorPolicies");

  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Row>
      <Col span={20}>
    <div className="maincontainer" id="lossInfo">
      <div id="tabcontainstwo" className="tab">
        <button
          className={`tablinks ${activeTab === "PriorPolicies" ? "active" : ""}`}
          onClick={(event) => openMainTab(event, "PriorPolicies")}
        >
          Prior Policies
        </button>
        <button
          className={`tablinks ${activeTab === "Claims" ? "active" : ""}`}
          onClick={(event) => openMainTab(event, "Claims")}
        >
          Claims
        </button>
        <button
          className={`tablinks ${activeTab === "PriorLosses" ? "active" : ""}`}
          onClick={(event) => openMainTab(event, "PriorLosses")}
        >
          Prior Losses
        </button>
      </div>

      {activeTab === "PriorPolicies" && (
        <div id="PriorPolicies" className="tabcontent">
          {/* Prior Policies Table */}
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
              <tr className="priorpoliciestdata">
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="text" placeholder="Carrier" />
                </td>
                <td>
                  <input type="text" placeholder="Policy #" />
                </td>
                <td>
                  <input type="date" placeholder="MM/dd/yyyy" />
                </td>
                <td>
                  <input type="date" placeholder="MM/dd/yyyy" />
                </td>
                <td>
                  <input type="text" placeholder="$" />
                </td>
                <td>
                  <input type="number" placeholder="0" />
                </td>
                <td>
                  <input type="text" placeholder="$" />
                </td>
              </tr>
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
        </div>
      )}

      {activeTab === "Claims" && (
        <div id="Claims" className="tabcontent">
          {/* Claims content */}
          <table>
            <thead>
              <tr>
                <th>Policy Period</th>
                <th>Loss Date</th>
                <th>Claim Number</th>
                <th>Status</th>
                <th>Total Incurred</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="empty-row">
                  No data to display
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "PriorLosses" && (
        <div id="PriorLosses" className="tabcontent">
          {/* Prior Losses content */}
          <div style={{ marginTop: "20px" }}>
            <h3>Loss Summary</h3>
            <table style={{ marginBottom: "20px" }}>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" style={{height:'2px',width:'2px'}} />
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
                    <input type="checkbox" style={{ marginLeft: "5px" ,height:'2px',width:'2px'}} />
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
                <tr>
                  <td>
                    <input type="checkbox" style={{ marginLeft: "5px" }} />
                  </td>
                  <td>
                    <a href="#">40051070-01</a>
                  </td>
                  <td>07/15/2023</td>
                  <td>07/15/2024</td>
                  <td>Allianz</td>
                  <td>Property</td>
                  <td>WATER DAMAGE</td>
                  <td>6/22/2024</td>
                  <td>closed</td>
                  <td>0</td>
                  <td>0</td>
                  <td>30987</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div> </Col>
    <Col span={4}><Documents/></Col>
       </Row>
  );
};

export default LossInfo;
